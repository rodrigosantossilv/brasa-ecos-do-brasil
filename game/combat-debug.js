/* Training instrumentation. Reads the actual resolver geometry, never collides. */
(function(global){
 'use strict';
 const timer=value=>Math.max(0,Math.ceil((Number(value)||0)*60-1e-9));
 function offensive(engine,p,index){
  const a=p.attack;if(!a||a.projectileOnly||a.time<a.startup||a.time>a.startup+a.active)return null;
  const strike=global.BrasaMoveTiming?.sample(a);if(strike&&!strike.canHit||a.time<a.nextHit||a.targets?.has(1-index)&&!a.multi)return null;
  const enemy=engine.players[1-index],body=engine.normalContact(p,a)?engine.normalHurtbox(enemy):engine.hurtbox(enemy),direction=a.direction||p.facing;
  const extent=engine.attackReach(p,enemy,a)-(direction>0?enemy.x-body.left:body.right-enemy.x);
  const y=p.y+(Number.isFinite(a.strikeHeight)?a.strikeHeight:a.hitHeight==='low'?42:128)*engine.fighterScale,half=(a.reachY||90)*.5*engine.fighterScale;
  return{left:Math.min(p.x-22*direction,p.x+extent*direction),right:Math.max(p.x-22*direction,p.x+extent*direction),top:y+half,bottom:y-half,conditional:!!a.throw||!!a.ground,label:a.throw?'THROW':'HIT'};
 }
 function snapshot(engine){return{simulationFrame:engine.simulationFrame,actionFrame:engine.actionFrame,phase:engine.phase,freeze:timer(engine.freeze),
  players:engine.players.map((p,index)=>{const a=p.attack,d=a?.frameData||null,offense=offensive(engine,p,index);return{index,id:p.data.id,name:p.data.name,state:p.state,stateFrame:p.stateFrame,pose:p.pose,root:{x:p.x,y:p.y},feet:{x:p.x,y:p.y},velocity:{x:p.vx,y:p.vy},facing:p.facing,hp:p.hp,meter:p.meter,
   move:a?.moveName||p.lastMoveName||'—',moveFrame:a?.moveFrame||0,phase:a?d?.phaseAt(a.moveFrame)||'—':'—',timing:d?{startup:d.startupFrames,active:d.activeFrames,recovery:d.recoveryFrames,total:d.totalFrames,first:d.firstActiveFrame,windows:d.activeWindows.map(w=>({...w}))}:null,
   hitstun:p.blockStun?0:global.BrasaAttackData.ticks(p.stun),blockstun:p.blockStun?global.BrasaAttackData.ticks(p.stun):0,advantage:engine.lastAdvantage[index]?{...engine.lastAdvantage[index]}:null,input:p.inputHistory?.snapshot()||[],
   boxes:{push:{...engine.pushBox(p)},hurt:{...engine.normalHurtbox(p)},specialHurt:{...engine.hurtbox(p)},visual:{...engine.visualBox(p)},hit:a?.throw?null:offense,throw:a?.throw?offense:null}};}),
  projectiles:engine.projectiles.filter(q=>q.delay<=0).map(q=>({x:q.x,y:q.y,radius:q.radius,owner:q.owner})),events:engine.debugEvents.slice(-20).map(e=>({...e}))};}
 function text(engine){const s=snapshot(engine);return s.players.map(p=>{const t=p.timing,a=p.advantage;return`P${p.index+1} ${p.name} · ${p.state} ${p.stateFrame}\n${p.move} · frame ${p.moveFrame} ${p.phase}\n${t?`S ${t.startup} / A ${t.active} / R ${t.recovery} · 1º ativo ${t.first}`:'Sem ataque'}\nHITSTOP ${s.freeze} · HITSTUN ${p.hitstun} · BLOCKSTUN ${p.blockstun}\n${a?`${a.type==='block'?'BLOQUEIO':'ACERTO'} ${a.frames>=0?'+':''}${a.frames}f · contato #${a.contactFrame}`:'VANTAGEM —'}`;});}
 function draw(ctx,engine,{groundY=455}={}){
  const s=snapshot(engine),colors={push:'#68bcff',hurt:'#7effa2',specialHurt:'#4aad70',hit:'#ff6256',throw:'#ffe17a'};ctx.save();ctx.lineWidth=1;
  for(const p of s.players){for(const [kind,color]of Object.entries(colors)){const b=p.boxes[kind];if(!b)continue;ctx.strokeStyle=color;ctx.globalAlpha=kind==='specialHurt'?.35:.85;ctx.strokeRect(b.left,groundY-b.top,b.right-b.left,b.top-b.bottom);}
   ctx.globalAlpha=1;ctx.fillStyle='#fff4d5';ctx.fillRect(p.root.x-3,groundY-p.root.y,6,1);ctx.fillRect(p.root.x,groundY-p.root.y-3,1,6);
  }
  ctx.strokeStyle='#ff6256';for(const q of s.projectiles){ctx.beginPath();ctx.arc(q.x,groundY-q.y,q.radius,0,Math.PI*2);ctx.stroke();}ctx.restore();
 }
 function action(event,{training=false,editing=false,remapped=false}={}){
  if(!training||editing||remapped||event.ctrlKey||event.metaKey||event.repeat)return null;
  if(event.code==='F3'&&event.altKey)return'structure';if(event.altKey)return null;
  return{F1:'pause',F2:'step',F3:'boxes',F4:'inputs',F5:'reset'}[event.code]||null;
 }
 global.BrasaCombatDebug=Object.freeze({snapshot,text,draw,action});
})(typeof window!=='undefined'?window:globalThis);
