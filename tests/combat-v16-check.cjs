'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const dir=path.resolve(__dirname,'../game'),c={window:{},console};vm.createContext(c);
for(const file of ['assets.js','data.js','moves.js','combat-frame-data.js','input-history.js','combat.js','combat-debug.js'])if(fs.existsSync(path.join(dir,file)))vm.runInContext(fs.readFileSync(path.join(dir,file),'utf8'),c,{filename:file});
const W=c.window,DT=1/60,failed=[];let count=0;
function test(name,run){try{run();count++;console.log('PASS '+name);}catch(e){failed.push(name);console.error('FAIL '+name+'\n'+e.stack);}}
function game(id='bento',options={}){const g=new W.BrasaCombat({fighters:[id,'bento'].map(id=>W.BRASA_DATA.fighters.find(f=>f.id===id)),mode:'versus',visualGeometry:true,...options});g.phase='fight';g.timer=Infinity;g.players[0].x=1000;g.players[1].x=1900;g.facePlayers();return g;}
test('fixed step exposes integer simulation/action frames and freezes the move clock only',()=>{
 const g=game();assert.equal(typeof g.step,'function');assert.equal(g.simulationFrame,0);g.step([{light:true},{}]);const a=g.players[0].attack;assert.equal(a.moveFrame,1);assert.equal(g.players[0].state,'ATTACK');const af=g.actionFrame;g.freeze=6*DT;
 for(let i=0;i<6;i++)g.step();assert.equal(g.simulationFrame,7);assert.equal(g.actionFrame,af);assert.equal(a.moveFrame,1);g.step();assert.equal(a.moveFrame,2);
});
test('Bento compiled timing preserves first active6 last10 total20 and raw seconds',()=>{
 assert(W.BrasaAttackData,'AttackData compiler missing');const g=game();g.step([{light:true},{}]);const a=g.players[0].attack,d=a.frameData;assert.equal(d.firstActiveFrame,6);assert.equal(d.lastActiveFrame,10);assert.equal(d.totalFrames,20);assert.equal(d.hitstopHit,6);assert.equal(d.hitstopBlock,2);
 for(let i=1;i<20;i++)g.step();assert.equal(g.players[0].attack,null);assert.equal(d.totalFrames,d.startupFrames+d.activeFrames+d.recoveryFrames);assert.equal(d.sourceSeconds.startup,a.startup);
});
test('all76fighters compile all normal stances and three specials with finite timelines',()=>{
 assert(W.BrasaAttackData);for(const f of W.BRASA_DATA.fighters){const g=game(f.id),p=g.players[0];for(const grounded of [true,false])for(const crouch of [false,true])for(const kind of ['light','heavy','kick','grab']){p.grounded=grounded;const d=W.BrasaAttackData.compile(g.normalDefinition(p,kind,crouch));assert(Number.isInteger(d.totalFrames)&&d.totalFrames>0);assert(d.activeWindows.every(w=>w.start<=w.end));}for(const s of g.catalog(f.id).specials){const d=W.BrasaAttackData.compile({...s,special:true,kind:'special'});assert(d.totalFrames>0);}}
 assert.throws(()=>W.BrasaAttackData.compile({startup:-1,active:.1,recovery:.1}),/timing/);
});
test('all76fighters hold a guard pose through actual blockstun, with unchanged zero normal chip',()=>{
 for(const f of W.BRASA_DATA.fighters){const g=game(f.id),[p,v]=g.players;p.x=1400;v.x=p.x+g.minimumDistance(p,v);g.facePlayers();let blocked=false;g.onEvent=e=>{if(e.type==='block')blocked=true;};
  for(let n=0;n<100;n++){g.update(DT,[n===0?{light:true}:{},{block:true}]);if(blocked&&g.freeze===0&&v.stun>DT){g.update(DT,[{},{block:true}]);assert.equal(v.pose,'guard',f.id);assert.equal(v.state,'BLOCKSTUN',f.id);assert.equal(v.hp,1000);break;}}assert(blocked,f.id+' jab did not reach target');
 }
});
test('input history recognizes236/623 and mirror, expires and cannot reuse a consumed motion',()=>{
 assert.equal(typeof W.BrasaInputHistory,'function');const h=new W.BrasaInputHistory();h.record({down:true},1,1);h.record({down:true,right:true},1,2);h.record({right:true,light:true},1,3);assert(h.motion([2,3,6],24));assert(!h.motion([6,2,3],24));h.consumeMotion(h.motion([2,3,6],24));h.record({right:true},1,4);assert(!h.motion([2,3,6],24));
 const mirror=new W.BrasaInputHistory();mirror.record({left:true},-1,1);mirror.record({down:true},-1,2);mirror.record({left:true,down:true,heavy:true},-1,3);assert(mirror.motion([6,2,3],24));for(let n=4;n<40;n++)mirror.record({},-1,n);assert(!mirror.motion([6,2,3],24));
 const crossed=new W.BrasaInputHistory();crossed.record({down:true},1,1);crossed.record({down:true,right:true},1,2);crossed.record({left:true,light:true},-1,3);assert(!crossed.motion([2,3,6],24));
});
test('optional motions start real specials while direct shortcuts and disabled motions preserve normals',()=>{
 const g=game('bento',{motionInputs:true});for(const input of [{down:true},{down:true,right:true},{right:true,light:true}])g.step([input,{}]);assert.equal(g.players[0].attack?.token,'special0');assert.equal(g.players[0].inputHistory.entries.length,3);
 const off=game('bento',{motionInputs:false});for(const input of [{down:true},{down:true,right:true},{right:true,light:true}])off.step([input,{}]);assert.equal(off.players[0].attack?.kind,'light');
 const direct=game('bento',{motionInputs:true});direct.step([{down:true,special2:true},{}]);assert.equal(direct.players[0].attack?.token,'special1');
});
test('buffer length is configurable while the standard six-tick buffer stays available',()=>{
 for(const frames of [5,6]){const g=game('bento',{inputBufferFrames:frames}),p=g.players[0];p.stun=1;g.step([{light:true},{}]);for(let n=0;n<frames-1;n++)g.step();p.stun=0;g.step();assert.equal(p.attack?.kind,'light');const late=game('bento',{inputBufferFrames:frames});late.players[0].stun=1;late.step([{light:true},{}]);for(let n=0;n<frames+1;n++)late.step();late.players[0].stun=0;late.step();assert.equal(late.players[0].attack,null);}
});
test('debug snapshots expose independent finite boxes for all76fighters and do not mutate the engine',()=>{
 assert(W.BrasaCombatDebug,'Debug adapter missing');for(const f of W.BRASA_DATA.fighters)for(const facing of [-1,1]){const g=game(f.id),[p,v]=g.players;p.facing=facing;v.facing=-facing;p.x=1400;v.x=p.x+facing*g.minimumDistance(p,v,facing);g.step([{light:true},{}]);for(let n=0;n<6;n++)g.step();const before=JSON.stringify(g),snapshot=W.BrasaCombatDebug.snapshot(g);assert.equal(JSON.stringify(g),before);assert.equal(snapshot.players.length,2);for(const a of snapshot.players){assert(a.boxes.push&&a.boxes.hurt&&a.boxes.visual);for(const b of Object.values(a.boxes)){if(!b)continue;for(const value of [b.left,b.right,b.top,b.bottom])assert(Number.isFinite(value));}assert.equal(a.root.y,p===g.players[a.index]?p.y:v.y);}}
});
test('training reset clears attacks/projectiles/input/status but cannot reset a versus match',()=>{
 const g=game('bento',{mode:'training',debugCombat:true});assert.equal(typeof g.resetTraining,'function');g.players[0].meter=100;g.step([{special:true},{}]);g.players[1].hp=50;g.players[0].frozen=.5;g.projectiles.push({owner:0,life:2});assert(g.resetTraining());assert.equal(g.phase,'fight');assert.equal(g.projectiles.length,0);assert(g.players.every(p=>p.hp===1000&&!p.attack&&!p.frozen&&!p.inputBuffer));assert.equal(g.players[0].inputHistory.entries.length,0);assert.equal(game().resetTraining(),false);
});
test('training measures readiness advantage from a real blocked contact',()=>{
 const g=game('bento',{debugCombat:true}),[p,v]=g.players;p.x=1400;v.x=p.x+g.minimumDistance(p,v);g.facePlayers();for(let n=0;n<90;n++)g.step([n===0?{light:true}:{},{block:true}]);assert(g.lastAdvantage[0]);assert.equal(g.lastAdvantage[0].type,'block');assert.equal(g.lastAdvantage[0].frames,-6);assert(g.debugEvents.some(e=>e.event==='block'));
});
test('training dummy can guard high or low and reports a real block advantage',()=>{
 const g=game('bento',{mode:'training',debugCombat:true}),[p,v]=g.players;g.trainingGuard='high';p.x=1400;v.x=p.x+g.minimumDistance(p,v);g.facePlayers();let block=false;g.onEvent=e=>{if(e.type==='block')block=true;};for(let n=0;n<80;n++)g.step([n===0?{light:true}:{}]);assert(block,'Training dummy ignored its guard setting');assert.equal(v.hp,1000);assert.equal(g.lastAdvantage[0].type,'block');
});
test('every fighter leaves attack poses on the exact recovery-end tick without a one-frame contact flash',()=>{
 for(const f of W.BRASA_DATA.fighters)for(const kind of ['light','heavy','kick','grab']){const g=game(f.id);g.step([{[kind]:true},{}]);let n=0;while(g.players[0].attack&&n++<100)g.step();assert(!['light','heavy','kick','grab','special'].includes(g.players[0].pose),f.id+'/'+kind+' flashes its active pose after recovery');}
});
console.log(JSON.stringify({checks:count,failed}));process.exitCode=failed.length?1:0;
