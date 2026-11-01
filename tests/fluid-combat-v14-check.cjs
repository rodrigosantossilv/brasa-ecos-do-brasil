'use strict';
// Real public-input regressions: buffering, contact cancels, hitstop and movement.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const sandbox={window:{},console};vm.createContext(sandbox);
for(const file of ['assets.js','data.js','moves.js','combat-frame-data.js','input-history.js','combat.js'])vm.runInContext(fs.readFileSync(path.join(__dirname,'../game',file),'utf8'),sandbox,{filename:file});
const {BRASA_DATA:data,BrasaCombat:Combat}=sandbox.window,dt=1/60;let checks=0,failed=0;
function test(name,run){try{run();checks++;console.log('PASS '+name);}catch(error){failed++;console.error('FAIL '+name+'\n'+error.stack);}}
function step(g,n=1,input=[{},{}]){for(let i=0;i<n;i++)g.update(dt,input);}
function game(id='bento',options={}){const events=[],g=new Combat({mode:'versus',hitstop:false,fighters:[data.fighters.find(f=>f.id===id),data.fighters.find(f=>f.id==='ramiro')],onEvent:e=>events.push(e),...options});g.phase='fight';g.timer=Infinity;g.players[0].x=1200;g.players[1].x=1800;g.facePlayers();g.events=events;return g;}
function near(g,distance=70,direction=1){g.players[0].x=1440-direction*distance/2;g.players[1].x=1440+direction*distance/2;g.facePlayers();}
function until(g,condition,max=120,input=[{},{}]){for(let i=0;i<max&&!condition();i++)step(g,1,input);assert(condition(),'Timed out waiting for '+condition);}
function doubleTap(g,direction,player=0){const input=[{},{}];input[player]={[direction]:true};step(g,1,input);step(g);step(g,1,input);}

test('attack tap remains usable for six simulation steps and expires on the seventh',()=>{
  for(const [wait,expected]of [[6,true],[7,false]]){const g=game(),p=g.players[0];p.stun=dt*(wait+1)-1e-9;step(g,1,[{light:true},{}]);step(g,wait);assert.equal(!!p.attack,expected,'wait='+wait);}
});
test('attack and jump taps survive ten frozen steps without moving sprites or expiring',()=>{
  for(const command of ['light','up']){const g=game('bento',{hitstop:true}),p=g.players[0];g.freeze=10*dt;const x=p.x,y=p.y;step(g,1,[{[command]:true},{}]);step(g,9);assert.equal(p.x,x);assert.equal(p.y,y);assert.equal(p.attack,null);step(g);if(command==='light')assert.equal(p.attack?.kind,'light');else assert(!p.grounded&&p.y>0);}
});
test('a confirmed light heavy and special stop both actors for exactly 6 8 and 10 steps',()=>{
  for(const [kind,ticks]of [['light',6],['heavy',8],['special',10]]){const g=game('bento',{hitstop:true});g.timer=60;near(g);step(g,1,[{[kind]:true},{}]);until(g,()=>g.events.some(e=>e.type==='hit'));const p=g.players[0],victim=g.players[1],attack=p.attack,time=attack.time,x=victim.x,stun=victim.stun,timer=g.timer;for(let n=0;n<ticks;n++){step(g);assert.equal(attack.time,time,kind+' tick '+n);assert.equal(victim.x,x);assert.equal(victim.stun,stun);assert.equal(g.timer,timer);}step(g);assert(attack.time>time);assert(g.timer<timer);}
});
test('a normal contact buffers the next normal or special during hitstop and cancels upon release',()=>{
  for(const kind of ['heavy','special']){const g=game('bento',{hitstop:true});near(g,53);step(g,1,[{light:true},{}]);until(g,()=>g.players[0].attack?.confirmed);const a=g.players[0].attack;step(g,1,[{[kind]:true,directSpecial:kind==='special'},{}]);step(g,5);assert.equal(g.players[0].attack,a);assert.equal(g.freeze,0);step(g);assert.equal(g.players[0].attack?.kind,kind);assert.notEqual(g.players[0].attack.actionId,a.actionId);}
});
test('a confirmed heavy can cancel to a distinct light during contact only',()=>{
  const g=game();near(g);step(g,1,[{heavy:true},{}]);until(g,()=>g.players[0].attack?.confirmed);const first=g.players[0].attack.actionId;step(g,1,[{light:true},{}]);assert.equal(g.players[0].attack?.kind,'light');assert.notEqual(g.players[0].attack.actionId,first);
  const late=game();near(late);step(late,1,[{light:true},{}]);until(late,()=>late.players[0].attack?.confirmed);const a=late.players[0].attack;until(late,()=>a.time>a.startup+a.active);step(late,1,[{kick:true},{}]);assert.equal(late.players[0].attack,a,'Recovery is not a cancel window');
});
test('whiffs blocks unlisted repeated normals and a fourth action cannot cancel',()=>{
  const whiff=game();step(whiff,1,[{light:true},{}]);step(whiff,5);const a=whiff.players[0].attack;step(whiff,1,[{kick:true},{}]);assert.equal(whiff.players[0].attack,a);
  const blocked=game();near(blocked);step(blocked,1,[{light:true},{block:true}]);until(blocked,()=>blocked.events.some(e=>e.type==='block'),60,[{},{block:true}]);const b=blocked.players[0].attack;step(blocked,1,[{kick:true},{block:true}]);assert.equal(blocked.players[0].attack,b);
  const repeat=game();near(repeat,53);step(repeat,1,[{light:true},{}]);until(repeat,()=>repeat.players[0].attack?.confirmed);step(repeat);const c=repeat.players[0].attack;step(repeat,1,[{light:true},{}]);assert.equal(repeat.players[0].attack,c,'Unlisted repeated normals cannot loop-cancel');
  const capped=game();near(capped,53);for(const kind of ['light','heavy','kick']){step(capped,1,[{[kind]:true},{}]);until(capped,()=>capped.players[0].attack?.kind===kind&&capped.players[0].attack.confirmed);step(capped);}const last=capped.players[0].attack;step(capped,1,[{special:true,directSpecial:true},{}]);assert.equal(capped.players[0].attack,last);assert.equal(capped.players[0].comboActions.length,3);
});
test('an authored finite double light route still confirms without permitting a third repeated light',()=>{
  const g=game('jack');near(g,53);for(let n=0;n<2;n++){step(g,1,[{light:true},{}]);until(g,()=>g.players[0].comboActions.length===n+1);step(g);}const a=g.players[0].attack;step(g,1,[{light:true},{}]);assert.equal(g.players[0].attack,a);step(g);step(g,1,[{heavy:true},{}]);until(g,()=>g.events.some(e=>e.type==='combo'));assert.equal(g.players[0].comboActions.length,3);
});
test('basic whiffs recover soon enough for the next command without changing their damage',()=>{
  for(const [kind,ticks,damage]of [['light',20,63],['heavy',37,125],['kick',30,91]]){const g=game();step(g,1,[{[kind]:true},{}]);step(g,ticks-1);assert.equal(g.players[0].attack,null,kind+' remains locked too long');near(g);step(g,1,[{[kind]:true},{}]);until(g,()=>g.players[1].hp<1000);assert.equal(1000-g.players[1].hp,damage,kind);}
});
test('released double taps dash forward and back in both orientations with committed travel',()=>{
  for(const facing of [-1,1])for(const forward of [false,true]){const g=game(),p=g.players[0];near(g,600,facing);const direction=facing*(forward?1:-1),key=direction>0?'right':'left';doubleTap(g,key);assert.equal(g.events.filter(e=>e.type==='dash').length,1);const x=p.x;assert(p.motion.dashing);assert.equal(p.motion.dashDirection,forward?1:-1);const firstProgress=p.motion.dashProgress;step(g,3,[{[direction>0?'left':'right']:true,up:true,light:true,block:true},{}]);assert((p.x-x)*direction>15);assert(p.grounded);assert.equal(p.attack,null);assert.equal(p.invulnerable,0);assert(p.motion.dashProgress>firstProgress);assert.equal(p.guard,false);until(g,()=>!p.motion.dashing);assert(p.dashCooldown>0);}
});
test('a dash keeps its committed velocity when the opponent changes sides',()=>{
  const g=game(),p=g.players[0];doubleTap(g,'right');const speed=p.vx;g.players[1].x=600;step(g,2);assert.equal(p.facing,-1);assert.equal(p.vx,speed,'Facing changes must not brake a committed dash');
});
test('a real projectile can damage and interrupt a dash without granting guard or invulnerability',()=>{
  const g=game(),p=g.players[0],enemy=g.players[1];doubleTap(g,'right');const x=p.x;g.spawnProjectile(enemy,1,{x:x+8,y:80,vx:0,radius:30,damage:60,stun:.3,delay:0});step(g,1,[{block:true},{}]);assert.equal(p.hp,940);assert.equal(p.dashTime,0);assert(!p.motion.dashing);assert.equal(p.invulnerable,0);assert.equal(p.guard,false);assert(p.stun>0);
});
test('round end clears a live dash so the result pose cannot remain in its travel transform',()=>{
  const g=game(),p=g.players[0];doubleTap(g,'right');g.timer=dt;g.players[1].hp=900;step(g);assert.equal(g.phase,'roundOver');assert.equal(p.dashTime,0);assert(!p.motion.dashing);assert.equal(p.motion.dashDirection,0);
});
test('held directions alternating directions cooldown intro and hitstun cannot manufacture a dash',()=>{
  const held=game();step(held,30,[{right:true},{}]);assert.equal(held.events.filter(e=>e.type==='dash').length,0);
  const alternate=game();step(alternate,1,[{right:true},{}]);step(alternate);step(alternate,1,[{left:true},{}]);assert.equal(alternate.events.filter(e=>e.type==='dash').length,0);
  const cooling=game();doubleTap(cooling,'right');until(cooling,()=>!cooling.players[0].motion?.dashing);doubleTap(cooling,'right');assert.equal(cooling.events.filter(e=>e.type==='dash').length,1);
  for(const mode of ['intro','stun','air']){const g=game(),p=g.players[0];step(g,1,[{right:true},{}]);if(mode==='intro'){g.phase='intro';g.phaseTime=0;g.introDuration=.02;}else if(mode==='stun')p.stun=.02;else{p.grounded=false;p.y=.5;p.vy=-20;}step(g,3);step(g,1,[{right:true},{}]);assert.equal(g.events.filter(e=>e.type==='dash').length,0,mode);}
});
test('dashes stay inside world viewport and opaque opponent collision without walking phase drift',()=>{
  for(const facing of [-1,1]){const g=game('bento',{fighterScale:1,visualGeometry:true}),p=g.players[0],enemy=g.players[1];near(g,300,facing);g.setViewport({x:900,zoom:.8,width:960});const key=facing>0?'right':'left';doubleTap(g,key);assert(p.motion.dashing);const walk=p.walkDistance;until(g,()=>!p.motion.dashing);assert((enemy.x-p.x)*facing>=g.minimumDistance(p,enemy,facing)-1e-6);assert(g.players.every(a=>g.visualBox(a).left>=900&&g.visualBox(a).right<=2100));assert.equal(p.walkDistance,walk);
    g.setViewport(null);p.x=facing>0?g.worldMax-1:g.worldMin+1;enemy.y=500;enemy.grounded=false;step(g,30);doubleTap(g,key);step(g,20);assert.equal(p.x,facing>0?g.worldMax:g.worldMin);}
});
test('every fighter dashes in either orientation with finite motion and bounded silhouettes',()=>{
  for(const fighter of data.fighters)for(const facing of [-1,1])for(const forward of [false,true]){const g=game(fighter.id,{fighterScale:1,visualGeometry:true}),p=g.players[0];near(g,600,facing);const direction=facing*(forward?1:-1),key=direction>0?'right':'left';doubleTap(g,key);assert(p.motion.dashing,fighter.id);const x=p.x;until(g,()=>!p.motion.dashing);assert((p.x-x)*direction>25,fighter.id);for(const value of [p.x,p.vx,p.motion.dashProgress,p.motion.walkSpeed])assert(Number.isFinite(value),fighter.id);assert(g.visualBox(p).left>=0&&g.visualBox(p).right<=g.worldWidth);}
});
test('scale one uses stable opaque neutral pushboxes and retains full animation world margins for every fighter',()=>{
  assert.equal(game().minimumDistance(...game().players),51);
  for(const fighter of data.fighters){const g=game(fighter.id,{fighterScale:1,visualGeometry:true}),[p,enemy]=g.players;near(g,1);g.separatePlayers();const a=g.pushBox(p),b=g.pushBox(enemy);assert(a.right+3.999<=b.left,fighter.id);assert(g.worldMin>=p.visualHalfWidth,fighter.id);}
});
test('authored normals whiff at the former phantom distance in both orientations',()=>{
  for(const facing of [-1,1]){const g=game('kitsune',{fighterScale:1,visualGeometry:true});near(g,322,facing);step(g,1,[{kick:true},{}]);step(g,70);assert.equal(g.players[1].hp,1000,'Kitsune cannot kick across an empty150px gap');}
});
test('stable neutral pushboxes allow close contact while full animation bounds retain world margins',()=>{
  const g=game('kitsune',{fighterScale:1,visualGeometry:true,fighters:['kitsune','caua'].map(id=>data.fighters.find(f=>f.id===id))});near(g,500);const distance=g.minimumDistance(...g.players);assert(distance>177&&distance<190,'Neutral opaque spacing, not the maximum24frame envelope');assert(g.fighterMargin>=g.players[0].visualHalfWidth);
});
test('normal impacts remember the defender actual preimpact cell while authoritative hurt state starts immediately',()=>{
  const g=game('bento',{fighterScale:1,visualGeometry:true,hitstop:true}),[p,enemy]=g.players;enemy.pose='walk';enemy.walkDistance=56;g.hit(p,enemy,0,{kind:'light',token:'light',damage:1,stun:.2});assert.equal(enemy.pose,'hurt');assert.equal(enemy.reaction.impactFrame,12,'walk halfstride is authored cell12');assert.equal(enemy.reaction.impactMirror,false);
});
test('every authored normal lands at neutral close contact in both orientations with a bounded contact shift',()=>{
  for(const fighter of data.fighters)for(const kind of ['light','heavy','kick'])for(const facing of [-1,1]){const g=game(fighter.id,{fighterScale:1,visualGeometry:true,hitstop:true});near(g,500,facing);near(g,g.minimumDistance(...g.players,facing),facing);step(g,1,[{[kind]:true},{}]);const a=g.players[0].attack;until(g,()=>g.players[1].hp<1000,90);assert((a.visualContactOffset||0)<=24,fighter.id+'/'+kind);assert.equal(g.events.filter(e=>e.type==='hit').length,1,fighter.id+'/'+kind);}
});
test('jump arc ignores later input and facing follows crossing opponents without turning a live attack',()=>{
  const g=game(),p=g.players[0];step(g,1,[{right:true,up:true},{}]);const vx=p.vx;step(g,5,[{left:true},{}]);assert.equal(p.vx,vx);g.players[1].x=p.x-500;step(g);assert.equal(p.facing,-1);assert.equal(p.vx,vx);step(g,1,[{kick:true},{}]);const a=p.attack;g.players[1].x=p.x+500;step(g);assert.equal(a.direction,-1);assert.equal(p.facing,-1);assert.equal(p.vx,vx);
});
test('holding away guards normal contact and reaction time advances only after hitstop',()=>{
  const guard=game();near(guard);step(guard,1,[{light:true},{right:true}]);until(guard,()=>guard.events.some(e=>e.type==='block'),60,[{},{right:true}]);assert.equal(guard.players[1].hp,1000);
  const g=game('bento',{hitstop:true});near(g);step(g,1,[{light:true},{}]);until(g,()=>g.players[1].hp<1000);const reaction=g.players[1].reaction;assert(reaction&&reaction.duration>0&&reaction.strength>0);assert.equal(reaction.time,0);step(g,6);assert.equal(reaction.time,0);step(g);assert(reaction.time>0);
});
test('animation simulation clock advances outside combat but pauses during contact hitstop',()=>{
  const g=game();g.phase='intro';const start=g.simulationClock;step(g,3);assert(g.simulationClock>start);g.phase='fight';g.freeze=dt*6;const frozen=g.simulationClock;step(g,6);assert.equal(g.simulationClock,frozen);step(g);assert(g.simulationClock>frozen);
});
test('seeded CPU completes matches with full opaque geometry and no invalid combat state',()=>{
  for(const id of ['bento','jack','belladonna']){const g=game(id,{mode:'cpu',fighterScale:1,visualGeometry:true,hitstop:true,seed:2025});g.timer=60;for(let n=0;n<15000&&g.phase!=='matchOver';n++){step(g,1,[{right:true},{}]);for(const p of g.players){for(const value of [p.x,p.y,p.hp,p.meter,p.motion.dashProgress])assert(Number.isFinite(value),id);assert(p.x>=g.worldMin&&p.x<=g.worldMax&&p.y>=0&&p.hp>=0,id);}}assert.equal(g.phase,'matchOver',id);assert(g.events.some(e=>e.type==='hit'),id);}
});
async function nativeContactChecks(){
  const {createCanvas,loadImage}=require('@napi-rs/canvas');
  const pending=[],pictures=new Map(),root=path.resolve(__dirname,'../game');
  class Picture{set src(url){this.source=url;pictures.set(url,this);if(!url.includes('authored-v10-'))return;pending.push(loadImage(path.join(root,url)).then(native=>{this.native=native;this.onload?.();}));}}
  sandbox.Image=Picture;sandbox.Event=class{};sandbox.window.dispatchEvent=()=>{};
  vm.runInContext(fs.readFileSync(path.join(root,'render-fighters.js'),'utf8'),sandbox,{filename:'render-fighters.js'});
  const F=sandbox.window.BrasaFighters,canvas=createCanvas(768,500),raw=canvas.getContext('2d');
  const ctx=new Proxy(raw,{get(t,k){if(k==='drawImage')return(image,...args)=>t.drawImage(image.native||image,...args);const value=Reflect.get(t,k,t);return typeof value==='function'?value.bind(t):value;},set(t,k,v){return Reflect.set(t,k,v,t);}});
  function rasterFront(id,pose,attack=null,options={}){raw.clearRect(0,0,768,500);assert(F.draw(ctx,id,384,450,2.15,pose,1,0,{shadow:false,effects:false,...options,attack}));const pixels=raw.getImageData(0,0,768,500).data;let right=-Infinity;for(let y=0;y<500;y++)for(let x=0;x<768;x++)if(pixels[(y*768+x)*4+3]>48)right=Math.max(right,x+1);assert(Number.isFinite(right));return right-384;}
  F.ready('ramiro');await Promise.all(pending.splice(0));
  const targetFront=Array.from({length:8},(_,index)=>rasterFront('ramiro','hurt',null,{hitstopFrame:index})),minTarget=Math.min(...targetFront),maxTarget=Math.max(...targetFront);
  const contactFailures=[],whiffFailures=[],gaps=[],offsets=[];let contacts=0,whiffs=0;
  for(const fighter of data.fighters){F.ready(fighter.id);await Promise.all(pending.splice(0));for(const kind of ['light','heavy','kick']){
      const probe=game(fighter.id,{fighterScale:1,visualGeometry:true}),a=probe.startAttack(probe.players[0],kind,probe.normalDefinition(probe.players[0],kind,false));a.time=a.startup+.001;
      const front=rasterFront(fighter.id,kind,a,{motion:probe.players[0].motion});offsets.push(a.visualContactOffset||0);
      for(const facing of [-1,1]){
        const g=game(fighter.id,{fighterScale:1,visualGeometry:true,hitstop:true});near(g,front+minTarget-4,facing);step(g,1,[{[kind]:true},{}]);for(let n=0;n<90&&g.players[1].hp===1000;n++)step(g);
        if(g.players[1].hp===1000)contactFailures.push(fighter.id+'/'+kind+'/'+facing);else{contacts++;const index=g.players[1].reaction.impactFrame;assert(index>=0&&index<8,'Neutral target must preserve its actual idle cell');gaps.push({id:fighter.id,kind,facing,gap:Math.abs(g.players[1].x-g.players[0].x)-front-targetFront[index]});}
        const miss=game(fighter.id,{fighterScale:1,visualGeometry:true,hitstop:true});near(miss,front+maxTarget+8,facing);step(miss,1,[{[kind]:true},{}]);step(miss,90);if(miss.players[1].hp!==1000)whiffFailures.push(fighter.id+'/'+kind+'/'+facing);else whiffs++;
      }
    }if(fighter.id!=='ramiro')pictures.get('assets/authored-v10-'+fighter.id+'.png').native=null;
  }
  test('all228 authored normals hit near their independently rasterized contact edge in both orientations',()=>{assert.deepEqual(contactFailures,[]);assert.equal(contacts,456);assert(Math.max(...offsets)<=24);});
  test('all228 authored normals whiff beyond their actual PNG reach in both orientations',()=>{assert.deepEqual(whiffFailures,[]);assert.equal(whiffs,456);});
  test('frozen impact silhouettes have no phantom horizontal gap across all456 native normal contacts',()=>{const wrong=gaps.filter(row=>row.gap>6);assert.deepEqual(wrong,[]);});
  console.log(JSON.stringify({nativeContacts:contacts,nativeWhiffs:whiffs,maximumFrozenGap:Math.max(...gaps.map(r=>r.gap)),maximumContactOffset:Math.max(...offsets)}));
}
nativeContactChecks().catch(error=>{failed++;console.error('FAIL native contact verification\n'+error.stack);}).finally(()=>{console.log(JSON.stringify({checks,failed,fighters:data.fighters.length}));process.exitCode=failed?1:0;});
