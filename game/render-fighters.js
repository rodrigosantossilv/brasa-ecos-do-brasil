/* BRASA 0.14 — authored poses with simulation-clock weight transfer. */
(function(global){
  'use strict';
  const canonicalDefinitions=global.BRASA_ASSETS?.canonicalFighters||[];
  const motionDefinitions=global.BRASA_ASSETS?.motionFighters||[];
  const authoredDefinitions=global.BRASA_ASSETS?.authoredFighters||[];
  const locomotionDefinitions=global.BRASA_ASSETS?.locomotionFighters||[];
  const locomotionActors=new Map(locomotionDefinitions.map(def=>[def.id,def]));
  const authoredActors=new Map(authoredDefinitions.map(def=>[def.id,def]));
  const actors=new Map(canonicalDefinitions.map(def=>[def.id,def]));
  const motions=new Map(motionDefinitions.map(def=>[def.id,def]));
  const images=new Map(),pendingPortraits=new Map();
  const manifest=Object.freeze(canonicalDefinitions.map(def=>Object.freeze({id:def.id,source:def.source,row:def.row,layout:def.layout})));
  const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,Number(v)||0));
  const idOf=data=>typeof data==='string'?data:data?.id;
  const mod=(v,n)=>((v%n)+n)%n;
  function request(url){
    if(!url||images.has(url)||typeof Image==='undefined')return;
    const slot={url,image:new Image(),loaded:false,failed:false};images.set(url,slot);
    slot.image.onload=()=>{
      slot.loaded=true;
      for(const[canvas,item]of Array.from(pendingPortraits))if(images.get(actors.get(idOf(item.data))?.source)?.loaded){pendingPortraits.delete(canvas);if(canvas.isConnected!==false)portrait(canvas,item.data,item.options);}
      if(typeof global.dispatchEvent==='function'&&typeof Event==='function'){
        global.dispatchEvent(new Event('brasa-fighter-art-ready'));
        if(motionDefinitions.some(def=>def.url===url)||locomotionDefinitions.some(def=>def.url===url))global.dispatchEvent(new Event('brasa-walk-art-ready'));
      }
    };
    slot.image.onerror=()=>{slot.failed=true;};slot.image.src=url;
  }
  function loadAssets(){for(const def of canonicalDefinitions)request(def.source); }
  function ready(data){
    loadAssets();if(data===undefined)return canonicalDefinitions.length>0&&canonicalDefinitions.every(def=>images.get(def.source)?.loaded);
    const authored=authoredActors.get(idOf(data));if(authored){request(authored.url);return !!images.get(authored.url)?.loaded;}
    return !!images.get(actors.get(idOf(data))?.source)?.loaded;
  }
  function readyMotion(data){
    const defs=data===undefined?canonicalDefinitions.map(def=>authoredActors.get(def.id)||motions.get(def.id)):[authoredActors.get(idOf(data))||motions.get(idOf(data))];
    if(data!==undefined){const gait=locomotionActors.get(idOf(data));if(gait)defs.push(gait);}
    for(const def of defs)if(def)request(def.url);
    return defs.length>0&&defs.every(def=>def&&images.get(def.url)?.loaded);
  }
  function airborneFrame(pose,motion={}){
    const phase=motion.jumpPhase;
    if(typeof phase==='number')return phase<.12?0:phase<.37?1:phase<.57?2:phase<.86?3:phase<.98?4:5;
    if(phase==='takeoff')return 0;
    if(phase==='rise')return 1;
    if(phase==='apex')return 2;
    if(phase==='fall')return 3;
    if(phase==='land')return Number(motion.landingProgress)>.68?5:4;
    return pose==='jump'?(motion.verticalSpeed>75?1:motion.verticalSpeed< -75?3:2):null;
  }
  function attackPair(def,pose,attack){
    const p=def.poses;
    if(attack?.token==='defense'||pose==='defenseStrike'||attack?.type==='counter')return[p.guard,p.heavy[1]];
    if(attack?.type==='throw'||pose==='grab')return[p.guard,p.heavy[1]];
    if(['kick','airKick','sweep'].includes(pose)||attack?.special&&['davi','jana','tiao','irina','mika','apogeu'].includes(def.id))return p.kick;
    if(['heavy','airHeavy','uppercut','special'].includes(pose)||attack?.special)return p.heavy;
    return p.light;
  }
  function hasAuthored(data){return authoredActors.has(idOf(data));}
  function authoredFrame(def,pose,time,attack,options){
    if(global.BrasaSpriteGeometry?.sampleFrame)return global.BrasaSpriteGeometry.sampleFrame(def,pose,time,attack,options);
    const seq=def.sequences,at=(kind,n,phase)=>({authored:true,motion:false,walk:['walk','backwalk'].includes(kind),index:seq[kind][Math.max(0,Math.min(seq[kind].length-1,n))],kind,phase:phase||kind});
    if(options.authoredSequence&&seq[options.authoredSequence])return at(options.authoredSequence,Math.min(7,Math.floor(clamp(options.sequenceProgress)*8)));
    if(Number.isInteger(options.techniqueFrame)){const kinds=['light','light','heavy','heavy','kick','kick','idle','idle'],kind=kinds[options.techniqueFrame]||'idle',contact=def.contactFrames?.[kind]===4?4:3;return at(kind,kind==='idle'?0:options.techniqueFrame%2?contact:1,'cinematic');}
    const strike=global.BrasaMoveTiming?.sample(attack);
    if(strike){const hit=def.contactFrames?.[strike.kind]===4?4:3,progress=clamp(strike.progress);
      const index=strike.phase==='contact'?hit:strike.phase==='anticipation'?Math.min(hit-1,Math.floor(progress*hit)):Math.min(7,hit+1+Math.floor(progress*(7-hit)));
      return at(strike.kind,index,strike.phase);
    }
    if(attack){
      const kick=['kick','airKick','sweep'].includes(pose)||attack.kind==='kick';
      const kind=kick?'kick':['heavy','airHeavy','uppercut','special','grab','defenseStrike'].includes(pose)||attack.special||attack.type==='throw'?'heavy':'light';
      const t=Math.max(0,Number(attack.time)||0),start=Math.max(.001,Number(attack.startup)||.1),active=Math.max(.001,Number(attack.active)||.1),recovery=Math.max(.001,Number(attack.recovery)||.2);
      if(attack.type==='counter'&&!attack.triggered)return at('idle',0,'guard');
      const contact=def.contactFrames?.[kind]===4?4:3;
      const n=t<start?Math.min(contact-1,Math.floor(t/start*contact)):t<start+active?contact:Math.min(7,contact+1+Math.floor((t-start-active)/recovery*(7-contact)));
      return at(kind,n,t<start?'anticipation':t<start+active?'contact':'recover');
    }
    const m=options.motion||{},jp=m.jumpPhase;
    if(typeof jp==='number')return at('jump',Math.min(7,Math.floor(clamp(jp)*8)),jp);
    if(['takeoff','rise','apex','fall','land'].includes(jp)&&['jump','land','idle','guard','walk','backwalk'].includes(pose)){
      const n=jp==='takeoff'?1:jp==='rise'?2:jp==='apex'?3:jp==='fall'?(m.verticalSpeed< -220?5:4):m.landingProgress>.58?7:6;
      return at('jump',n,jp);
    }
    if(pose==='jump')return at('jump',3,'apex');
    if(['walk','backwalk','run'].includes(pose)){
      const kind=pose==='backwalk'?'backwalk':'walk',stride=kind==='backwalk'?96:112;
      const phase=Number.isFinite(options.walkPhase)?options.walkPhase:Number.isFinite(options.walkDistance)?options.walkDistance/stride:time/(kind==='walk'?.56:.64);
      return at(kind,Math.floor(mod(phase,1)*8));
    }
    if(['crouch','lowLight','sweep'].includes(pose))return at('jump',0,'crouch');
    if(['hurt','thrown','dazed','ko','lose'].includes(pose))return at('jump',6,pose);
    if(['light','heavy','kick','special','grab','uppercut','airLight','airHeavy','airKick','defenseStrike'].includes(pose))return at(pose.toLowerCase().includes('kick')?'kick':pose==='light'?'light':'heavy',4,pose);
    return at('idle',['idle','win'].includes(pose)?Math.floor(mod(time,1)*8):0,pose);
  }
  function animationFrame(data,pose='idle',time=0,attack=null,options={}){
    const id=idOf(data),def=actors.get(id),motion=motions.get(id);if(!def)return null;
    const heldWalk=Number.isInteger(options.hitstopFrame)&&options.hitstopFrame>=8&&options.hitstopFrame<24;
    const gaitPose=heldWalk?(options.hitstopFrame>=16?'backwalk':'walk'):pose;
    if((!attack||heldWalk)&&!options.canonicalPortrait&&['walk','backwalk','run'].includes(gaitPose)){
      const gait=global.BrasaLocomotion?.sample(id,gaitPose,time,options);if(gait&&images.get(gait.definition.url)?.loaded)return{...gait,authored:true,motion:false,walk:true,phase:heldWalk?'hitstop':gaitPose};
    }
    const authored=authoredActors.get(id);if(!options.canonicalPortrait&&authored&&images.get(authored.url)?.loaded)return authoredFrame(authored,pose,time,attack,options);
    const gesture=options.introGesture,gestureFrames=gesture&&motion?.gestures?.[gesture.kind];
    if(!attack&&gestureFrames?.length&&readyMotion(id)){
      const index=Math.min(gestureFrames.length-1,Math.floor(clamp(gesture.progress)*(gestureFrames.length-1)+.5));
      return{motion:true,walk:false,index:gestureFrames[index],kind:'gesture',phase:gesture.kind};
    }
    const settling=!attack&&motion&&options.fromPose==='walk'&&Number.isFinite(options.transition)&&options.transition<1;
    const moving=['walk','backwalk','run'].includes(pose)||settling;
    const jump=!attack&&motion&&(['jump','land','idle','walk','backwalk','guard'].includes(pose))?airborneFrame(pose,options.motion):null;
    if(jump!==null&&jump!==undefined&&readyMotion(id))return{motion:true,walk:false,index:motion.jump[jump],kind:'jump',phase:options.motion?.jumpPhase||'apex'};
    if(!attack&&moving&&motion&&readyMotion(id)){
      const stride=Math.max(38,(Number(motion.strideNative)||28)*215/128);
      let phase=Number.isFinite(options.walkPhase)?options.walkPhase:Number.isFinite(options.walkDistance)?options.walkDistance/stride:time*(pose==='backwalk'?1.85:2.25);
      if(pose==='backwalk')phase=-phase;
      const speed=settling?clamp(1-options.transition,.001,1):Number.isFinite(options.motion?.walkSpeed)?clamp(options.motion.walkSpeed*2.2,.02,1):1;
      const theta=mod(phase,1)*Math.PI*2,weighted=Math.atan2(Math.sin(theta)*speed,Math.cos(theta));
      const index=Math.floor(mod(weighted/(Math.PI*2),1)*motion.walk.length)%motion.walk.length;
      return{motion:true,walk:true,index:motion.walk[index],kind:'walk',phase:pose};
    }
    const p=def.poses;
    if(Number.isInteger(options.techniqueFrame)){
      const mapped=[p.light[0],p.light[1],p.heavy[0],p.heavy[1],p.kick[0],p.kick[1],p.guard,p.idle];
      return{motion:false,index:mapped[options.techniqueFrame]??p.idle,kind:'canonical',phase:'cinematic'};
    }
    if(attack){
      const pair=attackPair(def,pose,attack),t=Math.max(0,Number(attack.time)||0),startup=Math.max(.001,Number(attack.startup)||.1),active=Math.max(.001,Number(attack.active)||.1),recovery=Math.max(.001,Number(attack.recovery)||.2);
      let index=t<startup*.12?p.idle:t<startup?pair[0]:t<startup+active+recovery*.28?pair[1]:t<startup+active+recovery*.76?pair[0]:p.idle;
      if(attack.type==='counter'&&!attack.triggered)index=p.guard;
      return{motion:false,index,kind:'canonical',phase:t<startup?'anticipation':t<startup+active?'contact':'recover'};
    }
    let index=['guard','block','defenseStrike'].includes(pose)?p.guard:['crouch','lowLight','sweep'].includes(pose)?p.crouch:['hurt','thrown','dazed','ko','lose'].includes(pose)?p.hurt:p.idle;
    if(['light','heavy','kick','special','grab','uppercut','airLight','airHeavy','airKick'].includes(pose))index=attackPair(def,pose,null)[1];
    if(def.unsafeFrames?.some(frame=>frame.index===index))index=p.kick[1];
    return{motion:false,index,kind:'canonical',phase:pose};
  }
  function shadow(ctx,x,y,scale,pose,options,groundY){
    if(options.shadow===false)return;
    const plane=Number.isFinite(options.groundPlaneY)?options.groundPlaneY:groundY,elevation=Math.max(0,plane-groundY),air=clamp(elevation/160),dead=['ko','lose'].includes(pose);
    const radius=(dead?40:23)*scale*(1-air*.3),depth=3*scale,opacity=(options.shadowOpacity??.44)*(1-air*.55),alpha=ctx.globalAlpha;
    ctx.globalAlpha*=opacity;ctx.fillStyle=options.shadowColor||'#111217';
    if(options.ellipseShadow){
      ctx.beginPath();ctx.ellipse(Math.round(x),Math.round(plane),radius,depth,0,0,Math.PI*2);ctx.fill();
      ctx.globalAlpha=alpha;return;
    }
    for(let strip=-2;strip<=2;strip++){const half=Math.round(radius*(1-Math.abs(strip)*.15));ctx.fillRect(Math.round(x)-half,Math.round(plane+strip*depth/2),half*2,Math.max(1,Math.round(depth/2)));}
    if(elevation<3&&!dead){
      if(options.contacts?.length){
        ctx.globalAlpha=alpha*Math.min(.84,opacity+.28);
        const factor=options.contactFactor||1,anchor=options.contactAnchor||0,direction=options.actorFace<0?-1:1;
        for(const foot of options.contacts){
          const center=x+(foot.center-anchor)*factor*direction,width=Math.max(4,(foot.right-foot.left+2)*factor);
          ctx.fillRect(Math.round(center-width/2),Math.round(plane-1),Math.round(width),Math.max(1,Math.round(scale)));
        }
      }else{ctx.globalAlpha=alpha*Math.min(.76,opacity+.24);ctx.fillRect(Math.round(x-14*scale),Math.round(plane),Math.round(28*scale),Math.max(1,Math.round(scale*.8)));}
    }
    ctx.globalAlpha=alpha;
  }
  function drawFrame(ctx,entry,frame,factor){
    ctx.drawImage(entry.image,frame.rasterX,frame.rasterY,frame.rasterWidth,frame.rasterHeight,
      Math.round((frame.left-frame.anchorX)*factor),Math.round((frame.top-frame.footY)*factor),
      Math.round((frame.right-frame.left)*factor),Math.round((frame.bottom-frame.top)*factor));
  }
  function strikeMotion(attack){
    if(!attack||attack.type==='counter'&&!attack.triggered)return null;
    const sampled=global.BrasaMoveTiming?.sample(attack);if(sampled)return sampled;
    const t=Math.max(0,Number(attack.time)||0),start=Math.max(.001,Number(attack.startup)||.1),active=Math.max(.001,Number(attack.active)||.1),recovery=Math.max(.001,Number(attack.recovery)||.2);
    return{kind:attack.kind,phase:t<start?'anticipation':t<start+active?'contact':'recover',progress:t<start?t/start:t<start+active?(t-start)/active:clamp((t-start-active)/recovery)};
  }
  function bodyMotion(ctx,pose,time,scale,face,options,strike,visibleHeight){
    if(options.canonicalPortrait||options.reducedMotion)return;
    const m=options.motion||{},reaction=options.reaction,jump=m.jumpPhase;
    if(strike){
      const progress=clamp(strike.progress),heavy=strike.kind==='heavy'||strike.kind==='kick',weight=heavy?1.15:1;
      if(strike.phase==='anticipation'){
        const coil=Math.sin(progress*Math.PI/2);ctx.translate(-.85*scale*weight*coil,0);ctx.rotate(-.004*coil);ctx.scale(1-.006*coil,1+.003*coil);
      }else{
        // Active contact is deliberately constant: both the pose and its weight
        // transfer hold for the same collision window, including special slices.
        const extension=strike.phase==='contact'?1:(1-progress)*(1-progress);
        if(!Number.isFinite(options.attack?.visualContactOffset))ctx.translate(1.1*scale*weight*extension,0);
        ctx.scale(1+.014*extension,1-.006*extension);
      }
    }else if(jump==='rise'||jump==='takeoff'){
      const stretch=jump==='rise'?.022:.01;ctx.scale(1-stretch*.65,1+stretch);
    }else if(jump==='land'){
      const squash=.032*Math.sin(Math.PI*clamp(1-(Number(m.landingProgress)||0)));ctx.scale(1+squash*.65,1-squash);
    }else if(['walk','backwalk','run'].includes(pose)){
      const stride=pose==='backwalk'?96:112,phase=Number.isFinite(options.walkPhase)?options.walkPhase:Number.isFinite(options.walkDistance)?options.walkDistance/stride:time/(pose==='backwalk'?.64:.56);
      // The eight distinct authored forward/backward cells provide limb, hair
      // and garment motion; this small planted sway carries their upper mass.
      ctx.rotate(Math.sin(mod(phase,1)*Math.PI*2)*.004*(pose==='backwalk'?-1:1));
    }else if(['idle','guard','block','win'].includes(pose)&&!options.introGesture){
      const breath=(1-Math.cos(mod(time,1)*Math.PI*2))*.75;ctx.scale(1,1+breath/Math.max(1,visibleHeight));
    }
    if(m.dashing){const lean=Math.sin(Math.PI*clamp(m.dashProgress))*.018*(m.dashDirection<0?-1:1);ctx.rotate(lean);}
    if(reaction&&['hurt','block','guard','dazed','thrown'].includes(pose)){
      const elapsed=Math.max(0,Number(reaction.time)||0),duration=Math.max(.001,Number(reaction.duration)||.28),decay=1-clamp(elapsed/duration),strength=clamp(reaction.strength??1),direction=(reaction.direction<0?-1:1)*(face<0?-1:1);
      const recoil=decay*decay*strength,tremor=Math.sin(elapsed*120)*.45*recoil;
      ctx.translate(direction*(2.5*scale*recoil+tremor),0);ctx.rotate(direction*recoil*.012);
    }
  }
  function strikeTrails(ctx,entry,frame,factor,scale,strike,options){
    if(!strike||strike.phase!=='contact'||options.effects===false||options.attackTrails===false||(!options.motion&&options.attackTrails!==true)||options.canonicalPortrait||options.reducedMotion)return;
    // The same nearest-neighbour pixels, drawn only a few pixels behind the
    // torso/striking limb. The planted feet and floor never acquire ghosts.
    const left=(frame.left-frame.anchorX)*factor,top=(frame.top-frame.footY)*factor,width=(frame.right-frame.left)*factor,height=(frame.bottom-frame.top)*factor;
    for(let i=2;i>=1;i--){ctx.save();ctx.globalAlpha*=i===2?.065:.12;ctx.translate(-1.3*scale*i,0);ctx.beginPath();ctx.rect(left-2,top-2,width+4,height*.78);ctx.clip();drawFrame(ctx,entry,frame,factor);ctx.restore();}
  }
  function draw(ctx,data,x,groundY,scale=2.5,pose='idle',face=1,time=0,options={}){
    if(!ctx||![x,groundY].every(Number.isFinite))return false;
    scale=Number.isFinite(scale)&&scale>0?scale:2.5;time=Number.isFinite(time)?time:0;
    const id=idOf(data),def=actors.get(id),selection=animationFrame(data,pose,time,options.attack,{...options,worldScale:scale/2.15});if(!def||!selection||!(options.canonicalPortrait?images.get(def.source)?.loaded:ready(id)))return false;
    const locomotion=selection.locomotion?selection.definition:null;
    const authored=selection.authored?authoredActors.get(id):null,motion=selection.motion?motions.get(id):null,source=locomotion||authored||motion||def,entry=images.get(locomotion?locomotion.url:authored?authored.url:motion?motion.url:def.source);if(!entry?.loaded)return false;
    const frame=source.frames[locomotion?selection.locomotionIndex:selection.index]||source.frames[0],factor=100*scale/source.standingHeight,dead=['ko','lose'].includes(pose),strike=strikeMotion(options.attack),held=selection.authored&&selection.phase==='hitstop';
    ctx.save();ctx.imageSmoothingEnabled=false;ctx.globalAlpha*=clamp(options.alpha??1);
    shadow(ctx,x,groundY,scale,pose,{...options,contacts:authored?frame.footContacts:null,contactFactor:factor,contactAnchor:frame.anchorX,actorFace:selection.contactMirror?-face:face},groundY);
    ctx.translate(Math.round(x),Math.round(groundY));
    if(Number.isFinite(options.tilt)&&options.tilt)ctx.rotate(options.tilt);
    ctx.scale(face<0?-1:1,1);
    if(!held){
      // This bounded placement is part of contact geometry, so accessibility
      // settings keep it even when all secondary motion is disabled.
      const offset=global.BrasaSpriteGeometry?.contactOffset(options.attack)||0;if(offset)ctx.translate(offset,0);
      if(dead){const bounds=global.BrasaSpriteGeometry?.get(id)?.frames?.[selection.index],left=bounds?bounds.left*factor:Math.max(0,(frame.anchorX-frame.left)*factor);ctx.translate(20*scale,-left);ctx.rotate(-Math.PI/2);}
      else if(!locomotion)bodyMotion(ctx,pose,time,scale,face,options,strike,Math.round((frame.footY-frame.top)*factor));
      if(pose==='thrown')ctx.rotate(-.7+Math.sin(time*8)*.12);
      if(pose==='dazed')ctx.rotate(Math.sin(time*4.5)*.018);
      if(pose==='dodge'){ctx.translate(-3*scale,0);ctx.rotate(-.035);}
      if(!authored&&def.layout==='international-eight'&&['crouch','lowLight','sweep'].includes(pose))ctx.scale(1,.8);
    }
    if(selection.contactMirror)ctx.scale(-1,1);
    if(!dead&&!held)strikeTrails(ctx,entry,frame,factor,scale,strike,options);
    drawFrame(ctx,entry,frame,factor);
    ctx.restore();return true;
  }
  function portrait(canvas,data,options={}){
    if(!canvas?.getContext)return false;loadAssets();if(!images.get(actors.get(idOf(data))?.source)?.loaded){pendingPortraits.set(canvas,{data,options:{...options}});return false;}
    const ctx=canvas.getContext('2d'),w=canvas.width,h=canvas.height;if(!ctx||!w||!h)return false;
    const accent=/^#[0-9a-f]{6}$/i.test(data?.accent||'')?data.accent:'#d9a363';
    ctx.save();ctx.imageSmoothingEnabled=false;ctx.clearRect(0,0,w,h);
    const gradient=ctx.createLinearGradient(0,0,w,h);gradient.addColorStop(0,'#37242b');gradient.addColorStop(1,'#090c16');ctx.fillStyle=gradient;ctx.fillRect(0,0,w,h);
    draw(ctx,data,w*.5,h*1.87,Number.isFinite(options.scale)?options.scale:h*1.82/100,options.pose||'idle',1,options.time||0,{shadow:false,effects:false,canonicalPortrait:true});
    const shade=ctx.createLinearGradient(0,h*.72,0,h);shade.addColorStop(0,'#08070700');shade.addColorStop(1,'#080707a6');ctx.fillStyle=shade;ctx.fillRect(0,h*.72,w,h*.28);ctx.fillStyle=accent;ctx.fillRect(0,h-2,w,2);ctx.restore();return true;
  }
  const walkManifest=Object.freeze(motionDefinitions.map(def=>Object.freeze({ids:Object.freeze([def.id]),url:def.url,columns:16})));
  global.BrasaFighters=Object.freeze({draw,portrait,ready,hasAuthored,authoredManifest:authoredDefinitions,readyWalk:readyMotion,readyMotion,manifest,walkManifest,motionManifest:motionDefinitions,animationFrame});
  loadAssets();
})(typeof window!=='undefined'?window:globalThis);
