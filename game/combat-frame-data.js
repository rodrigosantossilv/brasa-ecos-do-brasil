/* BRASA — validated frame contracts. Seconds are a compatibility projection. */
(function(global){
 'use strict';
 const HZ=60,DT=1/HZ,cache=new Map(),ticks=seconds=>{let left=seconds,n=0;while(left>0&&n<3600){left=Math.max(0,left-DT);n++;}return n;};
 function compile(spec={}){
  const startup=Number(spec.startup??.15),active=Number(spec.active??.1),recovery=Number(spec.recovery??.3);
  if([startup,active,recovery].some(v=>!Number.isFinite(v)||v<0||v>10)||startup+active+recovery<=0)throw new TypeError('Invalid attack timing');
  const hitstopHit=spec.hitstopHit??(spec.special?10:spec.kind==='heavy'||spec.token==='heavy'?8:6),hitstopBlock=spec.hitstopBlock??2;
  const stun=Number(spec.stun??.3),blockStun=Number(spec.blockStun??.13);
  const key=JSON.stringify([startup,active,recovery,spec.animation?.sequence,spec.projectileOnly,hitstopHit,hitstopBlock,stun,blockStun]);if(cache.has(key))return cache.get(key);
  const times=[0],phases=['S'],windows=[];let time=0,startupFrames=0,activeFrames=0,recoveryFrames=0,first=0,last=0;
  for(let frame=1;frame<=1800;frame++){
   time+=DT;times.push(time);const phase=time<startup?'S':time<=startup+active?'A':'R';phases.push(phase);
   if(phase==='S')startupFrames++;else if(phase==='A'){activeFrames++;if(!first)first=frame;last=frame;}else recoveryFrames++;
   const strike=global.BrasaMoveTiming?.sample({...spec,startup,active,recovery,time});
   if(phase==='A'&&!spec.projectileOnly&&(!strike||strike.canHit)){const previous=windows.at(-1);if(previous&&previous.end===frame-1)previous.end=frame;else windows.push({start:frame,end:frame});}
   if(time>=startup+active+recovery)break;
  }
  const totalFrames=times.length-1;
  const data=Object.freeze({hz:HZ,startupFrames,activeFrames,recoveryFrames,totalFrames,firstActiveFrame:first,lastActiveFrame:last,
   activeWindows:Object.freeze(windows.map(Object.freeze)),hitstopHit,hitstopBlock,hitstunFrames:ticks(stun),blockstunFrames:ticks(blockStun),
   sourceSeconds:Object.freeze({startup,active,recovery}),timeAt:frame=>times[Math.max(0,Math.min(totalFrames,Math.floor(frame)))],phaseAt:frame=>phases[Math.max(0,Math.min(totalFrames,Math.floor(frame)))]});
  cache.set(key,data);return data;
 }
 function state(p,phase='fight'){
  if(phase!=='fight')return phase.toUpperCase();
  if(p.hp<=0)return'DEFEAT';if(p.frozen>0)return'FROZEN';if(p.thrownTime>0)return'THROWN';if(p.dodgeTime>0)return'DODGE';
  if(p.stun>0)return p.blockStun?'BLOCKSTUN':'HITSTUN';if(p.attack)return p.attack.throw?'THROW':p.attack.special?'SPECIAL':'ATTACK';
  if(!p.grounded)return'JUMP';if(p.dashTime>0)return'DASH';if(p.crouching)return'CROUCH';
  if(Math.abs(p.walkVelocity)>0)return p.walkVelocity*p.facing<0?'WALK_BACK':'WALK_FORWARD';if(p.guard)return'BLOCK';return p.landingTime>0?'LAND':'IDLE';
 }
 global.BrasaAttackData=Object.freeze({HZ,DT,compile,ticks,state});
})(typeof window!=='undefined'?window:globalThis);
