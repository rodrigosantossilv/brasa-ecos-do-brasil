'use strict';
// Public fixed-step regressions for contact fairness and input/landing transitions.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const sandbox={window:{},console};vm.createContext(sandbox);
for(const file of ['assets.js','data.js','moves.js','combat-frame-data.js','input-history.js','combat.js'])vm.runInContext(fs.readFileSync(path.join(__dirname,'../game',file),'utf8'),sandbox,{filename:file});
const {BRASA_DATA:data,BRASA_MOVES:moves,BrasaCombat:Combat}=sandbox.window,dt=1/60;
let checks=0,failed=0;
function test(name,run){try{run();checks++;console.log('PASS '+name);}catch(error){failed++;console.error('FAIL '+name+'\n'+error.stack);}}
function game(ids=['bento','bento'],options={}){const events=[],g=new Combat({mode:'versus',hitstop:false,fighters:ids.map(id=>data.fighters.find(f=>f.id===id)),onEvent:e=>events.push(e),...options});g.phase='fight';g.timer=Infinity;g.events=events;near(g,600);return g;}
function step(g,n=1,input=[{},{}]){for(let i=0;i<n;i++)g.update(dt,input);}
function near(g,distance=70,facing=1){g.players[0].x=1440-facing*distance/2;g.players[1].x=1440+facing*distance/2;g.facePlayers();}
function contact(g,facing=1){near(g,g.scaledGeometry?g.minimumDistance(...g.players,facing):70,facing);}
function until(g,condition,max=90,input=[{},{}]){for(let i=0;i<max&&!condition();i++)step(g,1,input);assert(condition(),'Timed out: '+condition);}

test('equal same-tick normals trade in either orientation and geometry mode',()=>{
  for(const visualGeometry of [false,true])for(const facing of [-1,1]){
    const g=game(undefined,{visualGeometry,hitstop:true});contact(g,facing);step(g,1,[{light:true},{light:true}]);until(g,()=>g.events.some(e=>e.type==='hit'));
    assert.deepEqual(Array.from(g.players,p=>p.hp),[937,937],'Both eligible jabs connect');
    assert.deepEqual(g.events.filter(e=>e.type==='hit').map(e=>e.player).sort(),[0,1]);
    assert.equal(g.freeze,6*dt);assert(g.players.every(p=>p.attack===null),'Interrupted attacks are never restored');
    step(g,40);assert.equal(g.events.filter(e=>e.type==='hit').length,2,'Trade cannot generate later phantom contacts');
  }
});

test('a lethal same-tick normal trade is a draw in either orientation',()=>{
  for(const facing of [-1,1]){const g=game();contact(g,facing);g.players.forEach(p=>p.hp=50);step(g,1,[{light:true},{light:true}]);until(g,()=>g.phase!=='fight');
    assert.deepEqual(Array.from(g.players,p=>p.hp),[0,0]);assert.equal(g.winner,'draw');assert.equal(g.events.filter(e=>e.type==='ko').length,2);assert(g.players.every(p=>p.rounds===0));}
});

test('aerial trade damage uses each chain before either incoming interruption',()=>{
  const g=game();contact(g);g.players.forEach(p=>{p.grounded=false;p.y=150;p.vy=0;});step(g,1,[{light:true},{light:true}]);
  g.players.forEach((p,i)=>{p.combo=1;p.comboDamage=110;p.comboActions=['heavy'];p.comboActionIds=[1001+i];p.comboTarget=1-i;});
  until(g,()=>g.events.some(e=>e.type==='hit'));assert.deepEqual(Array.from(g.players,p=>p.hp),[942,942]);assert(g.players.every(p=>p.combo===0),'Being interrupted ends both chains');
});

test('real Damiao armor retains the same trade chain and scaled cancel in either slot',()=>{
  for(const armoredSlot of [0,1])for(const facing of [-1,1])for(const visualGeometry of [false,true]){
    const ids=['bento','bento'];ids[armoredSlot]='damiao';const g=game(ids,{visualGeometry}),armored=g.players[armoredSlot],opponent=g.players[1-armoredSlot];
    const cast=[{},{}];cast[armoredSlot]={special:true,directSpecial:true};step(g,1,cast);step(g,50);assert(armored.armor>2);assert.equal(armored.attack,null);
    contact(g,facing);const slow=[{},{}];slow[armoredSlot]={light:true};step(g,1,slow);step(g);const fast=[{},{}];fast[1-armoredSlot]={light:true};step(g,1,fast);until(g,()=>g.events.filter(e=>e.type==='hit').length===2);
    assert.equal(armored.hp,964);assert.equal(opponent.hp,929);assert.equal(armored.attack?.kind,'light');assert.equal(opponent.attack,null);
    assert.deepEqual(Array.from(armored.comboActions),['light'],'An unbroken armored attack retains its confirmed route');assert.equal(armored.combo,1);assert.equal(opponent.combo,0,'The interrupted opponent cannot retain a trade chain');
    const cancel=[{},{}];cancel[armoredSlot]={heavy:true};step(g,1,cancel);until(g,()=>g.events.filter(e=>e.type==='hit').length===3);
    assert.equal(opponent.hp,809,'The heavy is the same scaled second action in every slot');assert.deepEqual(Array.from(armored.comboActions),['light','heavy']);assert.equal(g.events.filter(e=>e.type==='hit').at(-1).damage,120);
  }
});

test('an earlier normal interrupts the later startup in either slot',()=>{
  for(const first of [0,1])for(const facing of [-1,1]){const g=game();contact(g,facing);const input=[{},{}];input[first]={light:true};step(g,1,input);input[first]={};input[1-first]={light:true};step(g,1,input);step(g,45);
    assert.equal(g.players[first].hp,1000);assert.equal(g.players[1-first].hp,937);assert.equal(g.events.filter(e=>e.type==='hit').length,1);}
});

test('invulnerability prevents the incoming half of a potential trade in either slot',()=>{
  for(const protectedSlot of [0,1]){const g=game();contact(g);g.players[protectedSlot].invulnerable=1;step(g,1,[{light:true},{light:true}]);step(g,45);
    assert.equal(g.players[protectedSlot].hp,1000);assert.equal(g.players[1-protectedSlot].hp,937);assert.equal(g.events.filter(e=>e.type==='hit').length,1);}
});

test('an active counter still intercepts a normal without an extra traded normal',()=>{
  for(const counterSlot of [0,1])for(const facing of [-1,1]){const ids=['bento','bento'];ids[counterSlot]='jana';const g=game(ids);contact(g,facing);const counter=[{},{}];counter[counterSlot]={special2:true};step(g,5,counter);const normal=[{},{}];normal[1-counterSlot]={light:true};step(g,1,normal);step(g,50);
    assert.equal(g.players[counterSlot].hp,1000);assert.equal(g.players[1-counterSlot].hp,885);assert.equal(g.events.filter(e=>e.type==='counter').length,1);assert.equal(g.events.filter(e=>e.type==='hit').length,1);}
});

test('same-tick jump and normal launches one aerial attack for either player',()=>{
  for(const player of [0,1])for(const kind of ['light','heavy','kick'])for(const facing of [-1,1]){const g=game();near(g,600,facing);const input=[{},{}];input[player]={up:true,[kind]:true};step(g,1,input);const p=g.players[player];
    assert(!p.grounded&&p.y>0);assert.equal(p.attack?.kind,kind);assert.equal(p.attack.hitHeight,'overhead');assert.equal(p.attack.pose,{light:'airLight',heavy:'airHeavy',kick:'airKick'}[kind]);
    assert.equal(g.events.filter(e=>e.type==='jump'&&e.player===player).length,1);assert.equal(g.events.filter(e=>e.type==='move'&&e.player===player).length,1);}
});

test('jump plus normal keeps the ordinary committed directional jump velocity',()=>{
  for(const player of [0,1])for(const direction of ['left','right']){const plain=game(),attacking=game();const input=[{},{}];input[player]={up:true,[direction]:true};step(plain,1,input);input[player].kick=true;step(attacking,1,input);const p=attacking.players[player],expected=plain.players[player].vx;
    assert.equal(p.vx,expected);assert(Math.abs(p.vx)>100);const reverse=[{},{}];reverse[player]={[direction==='left'?'right':'left']:true};step(attacking,5,reverse);assert.equal(p.vx,expected);}
});

test('block and crouch command priorities stay intact with jump held',()=>{
  const low=game();step(low,1,[{up:true,down:true,kick:true},{}]);assert(low.players[0].grounded);assert.equal(low.players[0].attack?.pose,'sweep');
  const dodge=game();step(dodge,1,[{up:true,block:true,kick:true},{}]);assert(dodge.players[0].grounded);assert(dodge.players[0].dodgeTime>0);assert.equal(dodge.players[0].attack,null);
});

test('landing before aerial startup ends cannot produce a grounded overhead',()=>{
  for(const player of [0,1])for(const facing of [-1,1]){const g=game();contact(g,facing);const p=g.players[player],victim=g.players[1-player];p.grounded=false;p.y=1;p.vy=-80;const input=[{},{}];input[player]={heavy:true};input[1-player]={block:true,down:true};step(g,1,input);
    assert(p.grounded);assert.equal(p.attack,null,'Landing cancels the air-only strike');input[player]={};step(g,40,input);assert.equal(victim.hp,1000);assert.equal(g.events.filter(e=>e.type==='hit').length,0);}
});

test('landing after aerial contact cannot repeat that contact and accepts a buffered ground attack',()=>{
  for(const player of [0,1]){const g=game();contact(g);const p=g.players[player];p.grounded=false;p.y=35;p.vy=-30;const air=[{},{}];air[player]={light:true};step(g,1,air);until(g,()=>g.events.some(e=>e.type==='hit'));assert(!p.grounded);const hp=g.players[1-player].hp;
    until(g,()=>p.attack.time>p.attack.startup+p.attack.active);p.y=1;p.vy=-80;const buffered=[{},{}];buffered[player]={heavy:true};step(g,1,buffered);assert(p.grounded);assert.equal(p.attack,null);step(g);assert.equal(p.attack?.kind,'heavy');assert.notEqual(p.attack.hitHeight,'overhead');assert.equal(g.players[1-player].hp,hp);
  }
});

function incoming({player=0,facing=1,front=true,velocity=true}={}){
  const g=game(),owner=g.players[player],target=g.players[1-player];target.x=1440;target.facing=facing;target.guard=true;target.guardAge=1;
  const sourceSide=facing*(front?1:-1);owner.x=target.x-sourceSide*240;
  g.spawnProjectile(owner,player,{x:target.x+sourceSide*24,y:100,vx:velocity?-sourceSide*180:0,radius:28,damage:96,stun:.3,delay:0});
  g.updateProjectiles(dt);return{g,owner,target,sourceSide};
}

test('projectiles use their arrival side for guard after the owner crosses',()=>{
  for(const player of [0,1])for(const facing of [-1,1])for(const front of [false,true]){const {g,target}=incoming({player,facing,front});assert.equal(target.hp,front?988:904);
    assert.equal(g.events.filter(e=>e.type==='block').length,Number(front));assert.equal(g.events.filter(e=>e.type==='hit').length,Number(!front));}
});

test('projectile knockback follows travel instead of crossed owner position',()=>{
  for(const player of [0,1])for(const facing of [-1,1])for(const front of [false,true]){const {target,sourceSide}=incoming({player,facing,front});assert.equal(Math.sign(target.vx),-sourceSide);}
});

test('a reflected returning projectile uses its reversed arrival side after its new owner crosses',()=>{
  for(const shooterSlot of [0,1])for(const direction of [-1,1]){const ids=['homer','homer'];ids[shooterSlot]='bento';const g=game(ids),shooter=g.players[shooterSlot],reflector=g.players[1-shooterSlot];
    shooter.x=1440-direction*250;reflector.x=1440;reflector.facing=-direction;g.special(reflector,1-shooterSlot,'homer',false,1);step(g,5);
    g.spawnProjectile(shooter,shooterSlot,{x:reflector.x-direction*65,y:100,vx:direction*300,radius:18,damage:96,delay:0});const q=g.projectiles[0];g.updateProjectiles(dt);
    assert.equal(q.owner,1-shooterSlot);assert.equal(q.vx,-direction*300);assert.equal(q.reflections,1);
    reflector.x=shooter.x-direction*240;shooter.facing=direction;shooter.guard=true;shooter.guardAge=1;
    for(let n=0;n<90&&g.projectiles.length;n++)g.updateProjectiles(dt);
    assert.equal(shooter.hp,988);assert.equal(Math.sign(shooter.vx),-direction);assert.equal(g.events.filter(e=>e.type==='reflect').length,1);assert.equal(g.events.filter(e=>e.type==='block').length,1);
  }
});

test('stationary low traps at the defender require crouch guard regardless of owner side',()=>{
  for(const ownerSide of [-1,1])for(const crouching of [false,true]){const g=game(),[owner,target]=g.players;target.x=1440;target.facing=1;target.guard=true;target.crouching=crouching;target.guardAge=1;owner.x=1440+ownerSide*240;
    g.spawnProjectile(owner,0,{kind:'trap',x:1440,y:10,vx:0,radius:42,damage:80,hitHeight:'low',delay:0});g.updateProjectiles(dt);assert.equal(target.hp,crouching?990:920);}
});

test('explicit movement controls walking even for an old MOBILITY identity',()=>{
  const kit=moves.fighters.davi,before=kit.movement;kit.movement={walk:.8,backwalk:.6,jump:.9};
  try{const fighter={...data.fighters.find(f=>f.id==='davi'),stats:{speed:3}},g=game(['davi','bento'],{fighters:[fighter,data.fighters[0]]}),p=g.players[0],x=p.x;step(g,30,[{right:true},{}]);assert(Math.abs(p.x-x-86)<1e-7,'Authored .8 walk uses base speed215 rather than legacy260');}
  finally{if(before)kit.movement=before;else delete kit.movement;}
});

console.log(JSON.stringify({checks,failed}));process.exitCode=failed?1:0;
