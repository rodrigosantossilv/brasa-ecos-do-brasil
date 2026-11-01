'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),{createRequire}=require('node:module');
const A=require('../scripts/audit-combat.cjs'),root=path.resolve(__dirname,'..');let checks=0;const evidence={};
function test(name,run){run();checks++;console.log('PASS '+name);}
test('Bento jab uses actual ticks: first active6, last10, recovery ends20',()=>{
 const m=A.measureMove('bento',A.commands[0]);assert.equal(m.row.startup,5);assert.equal(m.row.active,5);assert.equal(m.row.recovery,10);assert.equal(m.row.total,20);assert.equal(m.row.first_active_tick,6);assert.deepEqual(m.samples.filter(x=>x.eligible).map(x=>x.moveFrame),[6,7,8,9,10]);assert.equal(m.row.total,m.row.startup+m.row.active+m.row.recovery);
});
test('resolver contact records6hitstop /26hitstun /2blockstop /8blockstun, throw cannot block',()=>{
 const jab=A.measureMove('bento',A.commands[0]).row;assert.equal(jab.hitstop_hit,6);assert.equal(jab.hitstop_block,2);assert.equal(jab.hitstun,26);assert.equal(jab.blockstun,8);const grab=A.measureMove('bento',A.commands.find(x=>x.id==='grab')).row;assert.equal(grab.blockstun,A.NA);assert.equal(grab.advantage_block,A.NA);
});
test('audit exposes current blockstun pose defect and real cinematic freeze semantics',()=>{
 const probes=A.behavioralProbes();assert.equal(probes.blockPose.pose,'hurt');assert(probes.blockPose.guard&&probes.blockPose.blockStun);assert.equal(probes.firstJump.grounded,false);assert(probes.firstJump.y>0);assert.equal(probes.landing.tick,48);assert(probes.landing.nextTickAttack);
 const hit=A.superProbe('bento',false),block=A.superProbe('bento',true);assert(hit.contacted&&block.contacted);assert.equal(hit.frozenFightTicks,0);assert.equal(hit.stunTicks,32);assert.equal(block.stunTicks,8);assert.equal(hit.advantage,22);assert.equal(block.advantage,-2);
});
test('structured observer logs actions/contact and preserves120input frames per player',()=>{
 const g=A.game(),[p,v]=g.players;p.x=1400;v.x=p.x+g.minimumDistance(p,v);g.facePlayers();const s=new A.AuditSession(g);
 for(let n=0;n<140;n++)s.tick(n===0?[{light:true},{}]:[{},{}]);assert.equal(s.inputHistory.length,240);for(const event of ['INPUT','STATE_CHANGE','ATTACK_START','ACTIVE_START','HIT','ACTIVE_END','RECOVERY_END'])assert(s.events.some(x=>x.event===event),event);assert(!s.events.some(x=>['PARRY','KNOCKDOWN','WAKEUP'].includes(x.event)));assert(s.events.every(x=>Number.isInteger(x.simulationFrame)));
});
test('input history retains relative2-3-6 and6-2-3 sequences without pretending they are parsed',()=>{
 const g=A.game(),s=new A.AuditSession(g);for(const input of [{down:true},{down:true,right:true},{right:true,light:true},{},{right:true},{down:true},{down:true,right:true,heavy:true}])s.tick([input,{}]);assert.deepEqual(s.inputHistory.filter(x=>x.player===0).map(x=>x.direction),[2,3,6,5,6,2,3]);assert.equal(A.direction({left:true,down:true},-1),3);assert.equal(A.direction({left:true,right:true}),5);
});
test('same360logical inputs with seeded CPU reproduce identical full authoritative state100times',()=>{
 const result=A.deterministicChecks();assert.equal(result.uniqueHashes,1);assert(result.debugEnabledEqualsDisabled);evidence.determinism={...result,trace:undefined};
});
// Reuse the already-tested fixture, without executing its test cases or copying
// the app loop. Fail loudly if the source anchors change in a later revision.
function realAppFixture(){const filename=path.join(__dirname,'fluid-app-v14-check.cjs'),source=fs.readFileSync(filename,'utf8'),end=source.indexOf("\ntest('fight launch");assert(end>0);const c={require:createRequire(filename),__dirname,module:{exports:{}},console};vm.createContext(c);vm.runInContext(source.slice(0,end)+'\nmodule.exports=fixture;',c,{filename});return c.module.exports;}
test('real app RAF/input/camera at30/60/120/144Hz has720ticks and identical hitstop combat outcomes',()=>{
 const fixture=realAppFixture(),results=[];
 for(const hz of [30,60,120,144]){
  const f=fixture({world:true}),g=f.engine,[p,v]=g.players;p.x=1400;v.x=p.x+g.minimumDistance(p,v)+1;v.hp=v.maxHp=100000;g.facePlayers();f.c.resetFightWorld();
  const states=f.c.input.states.bind(f.c.input);let injected=-1;
  f.c.input.states=()=>{const tick=f.seen.length;if(tick!==injected){injected=tick;if([0,70,140,210].includes(tick))f.tap('KeyF');if(tick===280)f.tap('KeyG');if(tick===380)f.tap('KeyW');if(tick===470)f.tap('KeyR');if(tick===580)f.key('KeyD');if(tick===620)f.key('KeyD','keyup');}return states();};
  f.frame(0);for(let n=1;n<=12*hz;n++)f.frame(n*1000/hz);assert.equal(f.seen.length,720);assert(v.hp<100000,'Scenario needs actual contacts');
  const result={hz,steps:f.seen.length,state:A.authoritative(g),camera:JSON.parse(JSON.stringify(f.c.state.camera.snapshot()))};results.push(result);
 }
 for(const row of results.slice(1)){assert.deepEqual(row.state,results[0].state,'Authoritative mismatch at '+row.hz);assert.deepEqual(row.camera,results[0].camera,'Camera mismatch at '+row.hz);}
 evidence.renderRates=results.map(r=>({hz:r.hz,steps:r.steps,stateSHA256:A.hash(r.state),cameraSHA256:A.hash(r.camera)}));evidence.renderMethod='Actual app frame(), BrasaInput, BrasaCombat and camera; mocked DOM/Canvas; logical input injection, not real display/GPU timing';
});
test('every76fighter has15rows and raw fractional timing plus measured partitions',()=>{
 let count=0;for(const fighter of A.fighters)for(const command of A.commands){const {row,definition}=A.measureMove(fighter.id,command);count++;if(definition){assert.equal(row.total,row.startup+row.active+row.recovery);assert(row.total>0);assert(Number.isFinite(row.startup_seconds));assert(row.total<600);}else{assert.equal(command.id,'super');assert(row.cinematic_ticks>0);}}
 assert.equal(count,1140);evidence.measurements=count;
});
fs.mkdirSync(path.join(root,'reports'),{recursive:true});fs.writeFileSync(path.join(root,'reports/combat-audit-tests.json'),JSON.stringify({checks,failures:0,evidence,hardwareControllersTested:false,browserFPSMeasured:false},null,2)+'\n');console.log(JSON.stringify({checks,failures:0,evidence},null,2));
