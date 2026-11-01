'use strict';
// Phase-1 observer. No runtime source is patched, and this file is not shipped
// by game/index.html. All counters are external to BrasaCombat.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..'),DT=1/60,NI='NÃO IMPLEMENTADO',NA='NÃO APLICÁVEL';
const keys=['left','right','up','down','light','heavy','kick','special','special2','special3','grab','block','super'];
const clone=v=>JSON.parse(JSON.stringify(v,(_,value)=>Object.prototype.toString.call(value)==='[object Set]'?[...value]:value));
function load(){const c={window:{},console};vm.createContext(c);for(const name of ['assets.js','data.js','moves.js','combat.js'])vm.runInContext(fs.readFileSync(path.join(root,'game',name),'utf8'),c,{filename:name});return c.window;}
const api=load(),fighters=api.BRASA_DATA.fighters;
function game(id='bento',options={}){const g=new api.BrasaCombat({mode:'versus',seed:42,visualGeometry:true,fighterScale:1,fighters:[fighters.find(f=>f.id===id),fighters.find(f=>f.id==='bento')],...options});g.phase='fight';g.timer=Infinity;g.players[0].x=650;g.players[1].x=2250;g.facePlayers();return g;}
function state(p,g){return g.phase!=='fight'?g.phase:p.hp<=0?'DEFEAT':p.frozen>0?'FROZEN':p.thrownTime>0?'THROWN':p.stun>0?(p.blockStun?'BLOCKSTUN':'HITSTUN'):p.attack?(p.attack.throw?'THROW':p.attack.special?'SPECIAL':'ATTACK'):!p.grounded?'JUMP':p.dashTime>0?'DASH':p.crouching?'CROUCH':p.guard?'BLOCK':Math.abs(p.walkVelocity)>0?(p.walkVelocity*p.facing>0?'WALK_FORWARD':'WALK_BACK'):p.landingTime>0?'LAND':'IDLE';}
function authoritative(g){return clone({phase:g.phase,phaseTime:g.phaseTime,clock:g.clock,simulationClock:g.simulationClock,seed:g.seed,timer:g.timer,round:g.round,winner:g.winner,actionSequence:g.actionSequence,freeze:g.freeze,previous:g.previous,ai:g.ai,players:g.players,projectiles:g.projectiles});}
function hash(value){return crypto.createHash('sha256').update(JSON.stringify(value)).digest('hex');}
function direction(input,facing=1){let x=Number(!!input.right)-Number(!!input.left),y=Number(!!input.up)-Number(!!input.down);x*=facing;return (y>0?8:y<0?2:5)+x;}
function phase(a){return a.time<a.startup?'S':a.time<=a.startup+a.active?'A':'R';}
function eligible(a){const strike=api.BrasaMoveTiming.sample(a);return !a.projectileOnly&&phase(a)==='A'&&a.time>=a.nextHit&&(!strike||strike.canHit);}
class AuditSession{
 constructor(engine,{DEBUG_COMBAT=true}={}){
  this.engine=engine;this.enabled=DEBUG_COMBAT;this.simulationFrame=0;this.activeFrame=0;this.events=[];this.inputHistory=[];this.attacks=[];this.samples=[];this.lastInput=[{},{}];
  const emit=(event,fields={})=>{if(this.enabled)this.events.push({simulationFrame:this.simulationFrame,activeFrame:this.activeFrame,event,...fields});};this.emit=emit;
  this.rawEvents=[];const originalEvent=engine.onEvent;engine.onEvent=e=>{originalEvent(e);this.rawEvents.push({simulationFrame:this.simulationFrame,...clone(e)});const names={move:'ATTACK_START',hit:'HIT',block:'BLOCK',land:'LANDING'};if(names[e.type]){const owner=e.type==='block'?e.attacker:e.player,p=engine.players[owner];emit(names[e.type],{...e,fighter:p?.data.id,move:p?.attack?.moveId,moveFrame:p?.attack?Math.round(p.attack.time/DT):null});}};
  const start=engine.startAttack;engine.startAttack=(...args)=>{const a=start.apply(engine,args);this.attacks.push({frame:this.simulationFrame,definition:clone(a)});return a;};
  const update=engine.updateAttack;engine.updateAttack=(p,i,dt,contact)=>{
   const a=contact?.attack||p.attack;
   if(a){const sample={simulationFrame:this.simulationFrame,player:i,actionId:a.actionId,move:a.moveId,moveFrame:Math.round(a.time/DT),seconds:a.time,phase:phase(a),eligible:eligible(a),invulnerable:p.invulnerable>0,projectiles:engine.projectiles.filter(q=>q.owner===i&&q.delay<=0).length,cancel:false};
    // Counterfactual query only: current normal has confirmed one hit, and next
    // action is a different normal. No simulated player or attack is mutated.
    const confirmed={...p,attack:{...a,confirmed:true},comboActions:[a.token]};sample.cancel=['light','heavy','kick','special'].some(kind=>engine.canCancel(confirmed,{kind,variant:0}));this.samples.push(sample);
    const prev=this.samples.filter(s=>s.player===i&&s.actionId===a.actionId).at(-2);
    if(sample.phase==='A'&&prev?.phase!=='A')emit('ACTIVE_START',{fighter:p.data.id,move:a.moveId,moveFrame:sample.moveFrame,meaning:'timer envelope, not every tick is an offensive box'});
    if(prev?.phase==='A'&&sample.phase!=='A')emit('ACTIVE_END',{fighter:p.data.id,move:a.moveId,moveFrame:sample.moveFrame});
   }
   const result=update.call(engine,p,i,dt,contact);
   if(a&&p.attack!==a)emit('RECOVERY_END',{fighter:p.data.id,move:a.moveId,moveFrame:Math.round(a.time/DT),reason:a.time>=a.startup+a.active+a.recovery?'timer':'interrupted'});
   return result;
  };
 }
 tick(inputs=[{},{}]){
  this.simulationFrame++;if(this.engine.phase!=='fight'||this.engine.freeze<=0)this.activeFrame++;
  if(this.enabled){for(let i=0;i<2;i++){const input=inputs[i]||{},pressed=keys.filter(k=>input.pressed?.[k]||input[k]&&!this.lastInput[i][k]),entry={simulationFrame:this.simulationFrame,player:i,direction:direction(input,this.engine.players[i].facing),directionAbsolute:direction(input),facing:this.engine.players[i].facing,buttons:keys.filter(k=>!['left','right','up','down'].includes(k)&&input[k]),pressed};this.inputHistory.push(entry);if(pressed.length)this.emit('INPUT',entry);}this.inputHistory=this.inputHistory.slice(-240);}
  const before=this.engine.players.map(p=>state(p,this.engine));this.engine.update(DT,inputs);
  for(let i=0;i<2;i++){const after=state(this.engine.players[i],this.engine);if(before[i]!==after)this.emit('STATE_CHANGE',{fighter:this.engine.players[i].data.id,from:before[i],state:after});}
  this.lastInput=inputs.map(input=>({...input}));return this.engine;
 }
}
const commands=[];
for(const stance of ['standing','crouching','air'])for(const kind of ['light','heavy','kick'])commands.push({id:stance+'_'+kind,kind,stance});
commands.push({id:'grab',kind:'grab',stance:'standing'});
for(let variant=0;variant<3;variant++)commands.push({id:'special'+variant,kind:'special',variant,stance:'standing'});
commands.push({id:'defense',kind:'defense',stance:'standing'},{id:'super',kind:'super',stance:'standing'});
function commandInput(command){return command.kind==='super'?{super:true}:command.kind==='defense'?{block:true,light:true}:command.kind==='special'?{[command.variant===0?'special':command.variant===1?'special2':'special3']:true,directSpecial:true}:{[command.kind]:true,down:command.stance==='crouching'};}
function measureMove(id,command){
 const g=game(id,{hitstop:true}),p=g.players[0],s=new AuditSession(g,{DEBUG_COMBAT:false});p.meter=100;
 if(command.stance==='air'){p.grounded=false;p.y=10000;p.vy=0;}
 s.tick([commandInput(command),{}]);const def=s.attacks[0]?.definition,projectile=g.projectiles[0]?{...g.projectiles[0]}:null;
 let guard=0;while((p.attack||g.phase==='super')&&guard++<600)s.tick();
 const samples=s.samples.filter(row=>row.player===0),counts=Object.fromEntries(['S','A','R'].map(x=>[x,samples.filter(row=>row.phase===x).length])),cancels=samples.filter(x=>x.cancel),windows=samples.filter(x=>x.eligible).map(x=>x.moveFrame);
 const row={character:id,move:command.id,startup:def?counts.S:NA,active:def?counts.A:NA,recovery:def?counts.R:NA,total:def?samples.length:NA,hitstop_hit:NI,hitstop_block:NI,hitstun:NI,blockstun:NI,advantage_hit:NI,advantage_block:NI,pushback_hit:NI,pushback_block:NI,cancel_start:cancels[0]?.moveFrame??NI,cancel_end:cancels.at(-1)?.moveFrame??NI,
  name:def?.moveName||g.superDefinition?.name||'NÃO ENCONTRADO',startup_seconds:def?.startup??NA,active_seconds:def?.active??NA,recovery_seconds:def?.recovery??NA,first_active_tick:samples.find(x=>x.phase==='A')?.moveFrame??NA,offensive_ticks:windows.join('|'),invulnerability_ticks:samples.filter(x=>x.invulnerable).map(x=>x.moveFrame).join('|')||0,knockdown:NI,meter_gain_hit:NI,meter_gain_block:NI,contact_probe:'',timeline:counts.S?'S'.repeat(counts.S):''};
 row.timeline=samples.map(x=>x.phase).join('');
 let probeDef=def;
 if(!def){row.cinematic_ticks=s.simulationFrame;row.cinematic_resolve_tick=s.rawEvents.find(e=>e.type==='superHit')?.simulationFrame??'NÃO ENCONTRADO';row.contact_probe='Super uses global phase: resolver probe excludes cinematic lock';probeDef={...g.superDefinition,special:true,token:'super',stun:.52,push:115,startup:0,active:DT,recovery:0,nextHit:0};}
 else if(projectile&&def.projectileOnly){probeDef={...projectile,parentAttack:undefined,startup:0,active:DT,recovery:0,nextHit:0};row.contact_probe='First emitted projectile, resolver isolated; recovery/advantage needs spatial projectile scenario';}
 else if(command.kind==='defense'||def.type==='counter'){probeDef={...def,damage:def.counterDamage||def.damage};row.contact_probe='Conditional counter response in resolver isolation; not a normal offensive hitbox';}
 else row.contact_probe='Resolver isolated at first offensive tick; scalar pushback is initial vx in world units/s, not final distance';
 if(probeDef&&!(def?.type==='buff')){
  const hit=contactProbe(id,probeDef,false),block=probeDef.throw?null:contactProbe(id,probeDef,true);
  for(const [suffix,probe]of [['hit',hit],['block',block]]){
   if(!probe){for(const key of ['hitstop_block','blockstun','advantage_block','pushback_block','meter_gain_block'])row[key]=NA;continue;}
   row['hitstop_'+suffix]=probe.freezeTicks;row[suffix==='hit'?'hitstun':'blockstun']=probe.stunTicks;row['pushback_'+suffix]=probe.initialVelocity;row['meter_gain_'+suffix]=probe.meter;
   // First timer-contact, resolver-isolated, no wall/camera/launch recovery.
   // Readiness is actually observed, including float/root/landing constraints.
   row['advantage_'+suffix]=!def||projectile&&def.projectileOnly||def.counter?'NÃO ESPECIFICADO (contextual)':probe.advantage;
  }
 }else if(def?.type==='buff')row.contact_probe='Buff: no outgoing contact. Contact columns NÃO APLICÁVEL';
 if(def?.type==='buff')for(const key of ['hitstop_hit','hitstop_block','hitstun','blockstun','advantage_hit','advantage_block','pushback_hit','pushback_block','meter_gain_hit','meter_gain_block'])row[key]=NA;
 if(!def){
  for(const [suffix,blocked]of [['hit',false],['block',true]]){
   const probe=superProbe(id,blocked);row['hitstop_'+suffix]=probe.contacted?probe.frozenFightTicks:NA;row[suffix==='hit'?'hitstun':'blockstun']=probe.contacted?probe.stunTicks:NA;row['advantage_'+suffix]=probe.contacted?probe.advantage:NA;row['pushback_'+suffix]=probe.contacted?probe.initialVelocity:NA;row['meter_gain_'+suffix]=probe.contacted?probe.meter:NA;
  }row.contact_probe='Actual cinematic at neutral pushbox distance+1; hitstop counts additional frozen fight ticks (cinematic lock reported separately)';
 }
 return {row,definition:def,samples};
}
function superProbe(id,blocked){
 const g=game(id),[p,v]=g.players;g.onEvent=e=>{if(e.type===(blocked?'block':'hit')&&(e.type==='block'?e.attacker:e.player)===0){contacted=true;stun=v.stun;initialVelocity=v.vx;meter=[p.meter,v.meter].join('|');}};
 p.x=1300;v.x=p.x+g.minimumDistance(p,v)+1;g.facePlayers();p.meter=100;let contacted=false,stun=0,initialVelocity=0,meter='',frozenFightTicks=0,aReady=null,dReady=null;
 const command=blocked?{block:true,down:api.BRASA_MOVES.fighters[id].super?.hitHeight==='low'}:{};
 for(let n=1;n<400;n++){
  if(g.phase==='fight'&&g.freeze>0)frozenFightTicks++;g.update(DT,[n===1?{super:true}:{},command]);
  if(n>1&&g.phase==='fight'){
   if(aReady===null&&p.stun<=0)aReady=n;if(dReady===null&&v.stun<=0&&v.root<=0&&v.frozen<=0)dReady=n;
   if(aReady!==null&&dReady!==null)break;
  }
 }
 let remaining=stun,stunTicks=0;while(remaining>0&&stunTicks<600){remaining=Math.max(0,remaining-DT);stunTicks++;}
 return {contacted,frozenFightTicks,stunTicks,initialVelocity,meter,advantage:contacted?dReady-aReady:NA};
}
function contactProbe(id,definition,block){
 const g=game(id),[p,v]=g.players,def={...definition,targets:new Set()};p.x=1000;v.x=1500;g.facePlayers();
 const ticks=[];for(let n=1;n<300;n++){def.time=n*DT; // repeated addition below matches runtime, rather than n*dt rounding
  if(n===1)def.time=DT;else def.time=ticks.at(-1)+DT;ticks.push(def.time);if(eligible(def))break;}
 p.attack=def;v.guard=block;v.guardAge=1;v.crouching=block&&def.hitHeight==='low';const meter=[p.meter,v.meter];
 const hp=v.hp;const result=g.hit(p,v,0,def);if(!result||v.hp===hp&&!v.blockStun)return {freezeTicks:NA,stunTicks:NA,initialVelocity:NA,meter:NA,advantage:NA};
 const freeze=g.freeze,initialVelocity=v.vx,stun=v.stun,afterMeter=[p.meter-meter[0],v.meter-meter[1]];let frozen=0,stunned=0,aReady=null,dReady=null;
 // Do not allow a second melee hit; this isolates one contact's recovery.
 def.targets.add(1);def.nextHit=Infinity;
 for(let n=1;n<600;n++){
  const frozenNow=g.freeze>0;if(frozenNow)frozen++;
  g.update(DT,[{},block?{block:true,down:def.hitHeight==='low'}:{}]);
  if(!frozenNow&&v.stun>0)stunned++;
  const ready=q=>!q.attack&&q.stun<=0&&q.root<=0&&q.frozen<=0&&q.dodgeTime<=0&&q.dashTime<=0&&q.overheat<=0&&q.hp>0;
  if(aReady===null&&ready(p))aReady=n;if(dReady===null&&ready(v))dReady=n;if(aReady!==null&&dReady!==null)break;
 }
 return {freezeTicks:frozen,stunTicks:stun>0?stunned+1:0,initialVelocity,meter:afterMeter.join('|'),advantage:aReady!==null&&dReady!==null?dReady-aReady:'NÃO ESPECIFICADO'};
}
function sequence(frame){const a={},b={};if(frame<=30)a.right=true;if(frame===31)a.light=true;if(frame===80)a.up=true;if(frame>=81&&frame<100)a.left=true;if(frame===135)a.kick=true;if(frame===200)a.special2=true;if(frame>=250&&frame<280)b.left=true;if(frame===285)b.heavy=true;return[a,b];}
function deterministicChecks(){const digests=[];let logged,quiet;
 for(let run=0;run<100;run++){const g=game('bento',{mode:'cpu',seed:123}),s=new AuditSession(g,{DEBUG_COMBAT:run===0});g.players[0].x=1300;g.players[1].x=1550;for(let n=1;n<=360;n++)s.tick(sequence(n));digests.push(hash(authoritative(g)));if(run===0)logged={state:authoritative(g),events:s.events,inputHistory:s.inputHistory};if(run===1)quiet=authoritative(g);}
 if(new Set(digests).size!==1)throw Error('100 deterministic runs diverged');if(hash(logged.state)!==hash(quiet))throw Error('DEBUG_COMBAT affected simulation');
 return {runs:100,uniqueHashes:new Set(digests).size,stateSHA256:digests[0],debugEnabledEqualsDisabled:true,scope:'Fixed-step engine, seeded CPU, 360 ticks, same logical inputs; not browser/driver/network/rollback proof',trace:logged};
}
function behavioralProbes(){
 const g=game(),[p,v]=g.players;p.x=1400;v.x=p.x+g.minimumDistance(p,v);g.facePlayers();let contactTick=null;const events=[];g.onEvent=e=>events.push(e);let blockPose;
 for(let n=1;n<60;n++){g.update(DT,[n===1?{light:true}:{},{block:true}]);if(contactTick===null&&events.some(e=>e.type==='block'))contactTick=n;if(contactTick&&g.freeze<=0&&v.stun>0&&n>contactTick){g.update(DT,[{},{block:true}]);blockPose={pose:v.pose,guard:v.guard,blockStun:v.blockStun,stun:v.stun};break;}}
 const jump=game();jump.update(DT,[{up:true},{}]);const firstJump={grounded:jump.players[0].grounded,y:jump.players[0].y,vy:jump.players[0].vy,visualPhase:jump.players[0].motion.jumpPhase};
 let landing=null;for(let n=2;n<180;n++){jump.update(DT,[{},{}]);if(jump.players[0].grounded){landing={tick:n,landingTime:jump.players[0].landingTime};jump.update(DT,[{light:true},{}]);landing.nextTickAttack=!!jump.players[0].attack;break;}}
 const names=['bento','jana','ramiro','vittoria','belladonna','apogeu'];const mobility=names.map(id=>{const f=game(id).players[0];return{id,walk:f.moveSpeed,backwalk:f.moveSpeed*f.backSpeed,jumpVelocity:f.jumpSpeed};});
 return {blockPose,firstJump,landing,mobility};
}
function csv(rows){const columns=[...new Set(rows.flatMap(Object.keys))];const quote=v=>'"'+String(v??'').replaceAll('"','""')+'"';return columns.map(quote).join(',')+'\n'+rows.map(r=>columns.map(k=>quote(r[k])).join(',')).join('\n')+'\n';}
function generate(){fs.mkdirSync(path.join(root,'reports'),{recursive:true});const all=fighters.flatMap(f=>commands.map(c=>measureMove(f.id,c))),rows=all.map(r=>r.row),checks=deterministicChecks();
 fs.writeFileSync(path.join(root,'reports/frame-data-current.csv'),csv(rows));
 const timelines=['# Timelines observadas — 60 Hz','', 'Uma linha por ataque. S=timer de startup; A=envelope ativo; R=recovery. X=contato corpo a corpo elegível sem alvo; P=projétil já liberado; C=consulta contrafactual de cancel confirmado; I=invulnerável. Cada coluna é um tick desde a criação. Super usa fase global, sem timeline S/A/R. Ar aéreo medido a y=10000 para não truncar no pouso.',''];
 for(const item of all){timelines.push('## '+item.row.character+' / '+item.row.move,'','```text');if(item.samples.length){timelines.push('FRAME '+item.samples.map(s=>String(s.moveFrame).padStart(3)).join(' '),'STATE '+item.samples.map(s=>s.phase.padStart(3)).join(' '),'BOX   '+item.samples.map(s=>(s.eligible?'X':s.projectiles?'P':'.').padStart(3)).join(' '),'CANCEL'+item.samples.map(s=>(s.cancel?'C':'.').padStart(4)).join(''),'INVULN'+item.samples.map(s=>(s.invulnerable?'I':'.').padStart(4)).join(''));}else timelines.push('NÃO APLICÁVEL: super cinematic; '+item.row.cinematic_ticks+' update ticks');timelines.push('```','');}
 fs.writeFileSync(path.join(root,'reports/attack-timelines.md'),timelines.join('\n')+'\n');
 const evidence={baseline:'08e8701fb1e4c60338e66bab374d89dc264938b2',baselineTree:'f41a5cdd18fe2fe92488774065918b536e963344',simulationHz:60,fighters:fighters.length,rows:rows.length,ordinaryRows:all.filter(x=>x.definition).length,specialRows:rows.filter(x=>x.move.startsWith('special')).length,determinism:{...checks,trace:undefined},probes:behavioralProbes(),notImplementedEvents:['PARRY','KNOCKDOWN','WAKEUP'],csvConvention:'startup counts ticks strictly before first timer-active tick; raw fractional seconds retained; contact and projectile envelopes differ',examples:rows.filter(x=>x.character==='bento')};
 fs.writeFileSync(path.join(root,'reports/combat-audit-evidence.json'),JSON.stringify(evidence,null,2)+'\n');fs.writeFileSync(path.join(root,'reports/combat-trace.json'),JSON.stringify(checks.trace,null,2)+'\n');
 console.log(JSON.stringify({...evidence,examples:undefined},null,2));return evidence;
}
module.exports={api,fighters,DT,NI,NA,game,state,direction,authoritative,hash,AuditSession,commands,measureMove,contactProbe,superProbe,sequence,deterministicChecks,behavioralProbes,generate};
if(require.main===module){
 const actual=crypto.createHash('sha256').update(fs.readFileSync(path.join(root,'game/combat.js'))).digest('hex');
 if(actual!=='9a28b7a7ecadac8dd7fcd9162f50daf48d8705a0c340d1ff4591a2c8f6072ddd')throw Error('This archived audit targets BRASA0.15. Check out commit47d2a116 before regenerating its historical reports; use the0.16 training laboratory for the current runtime.');
 generate();
}
