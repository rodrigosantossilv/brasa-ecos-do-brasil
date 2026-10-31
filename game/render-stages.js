/* BRASA 0.7 — independent original arenas on a shared 480 × 270 native pixel grid. */
(function(global){
  'use strict';
  const WIDTH=480,HEIGHT=270,sources=global.BRASA_ASSETS?.pixelStages||{};
  const IDS=Object.freeze(Object.keys(sources)),slots=new Map();
  const clamp=(n,a,b)=>Math.max(a,Math.min(b,n)),mod=(n,p)=>((n%p)+p)%p;
  const idOf=data=>typeof data==='string'?data:data?.id;
  const random=n=>{const q=Math.sin(n*127.1+311.7)*43758.5453;return q-Math.floor(q);};
  const motion={"sertao":[[0,0,176,62,1,0.3,7,0,"folhagem da caatinga"],[366,21,111,67,1.6,0.4,6,1,"bandeirolas"]],"pelourinho":[[0,0,136,99,1.1,0.4,7.1,0,"palmeira"],[372,132,107,38,0.7,0.35,6.5,1,"toldos de tecido"]],"igarape":[[164,144,217,45,1.1,0.3,7.5,0,"reflexos do igarapé"],[364,85,62,43,0.8,0.25,6.5,1,"roupas no varal"],[0,0,174,56,0.8,0.3,8.2,2,"copa da margem"]],"pampa":[[432,68,31,75,0.9,0.35,6.5,0,"lenço gaúcho"],[0,2,120,49,0.7,0.25,8,1,"araucária"]],"vila":[[397,52,43,44,1.1,0.35,5.5,0,"bandeira alvinegra"],[451,26,28,52,0.8,0.4,6.2,1,"bandeira alvinegra alta"]],"ny_docks":[[419,7,48,50,1.4,0.4,6,0,"bandeira do porto"],[105,139,281,14,1,0.25,7.3,1,"água do cais"]],"neva":[[8,8,76,70,1,0.3,7,0,"estandartes"],[386,0,93,113,0.7,0.3,8.1,1,"galhos gelados"]],"kyoto":[[0,0,150,79,0.8,0.3,7.1,0,"cerejeira"],[413,50,49,54,0.6,0.4,6.3,1,"lanternas"]],"longmen":[[426,0,53,104,1,0.35,7.4,0,"bambu"],[152,135,264,34,1.1,0.25,7.7,1,"rio do templo"]],"venezia":[[20,11,44,73,0.8,0.3,7,0,"estandarte"],[183,143,195,37,0.9,0.3,7.8,1,"canal"]],"london":[[25,16,51,60,1.1,0.3,6.5,0,"bandeira britânica"],[149,140,250,32,1,0.25,8,1,"reflexos do Tâmisa"]],"mare":[],"eclipse":[]};
  function boomerang(time,period=6,phase=0){return .5-.5*Math.cos(Math.PI*2*((Number(time)||0)+(Number(phase)||0))/(Number(period)>0?Number(period):6));}
  // Coordinates refer to the same 960 × 540 space used by combat and its effects.
  // The fight lane sits on the foreground surface, in front of railings and water.
  const floors=Object.freeze({sertao:[458,'#402213',.46],pelourinho:[466,'#382326',.42],igarape:[468,'#172b29',.52],pampa:[464,'#38281c',.42],vila:[470,'#173019',.48],ny_docks:[466,'#17202b',.53],neva:[462,'#253147',.36],kyoto:[464,'#21152d',.56],longmen:[462,'#302615',.45],venezia:[464,'#32252a',.46],london:[466,'#142031',.55],mare:[460,'#161724',.58],eclipse:[464,'#1b1025',.58]});
  function grounding(data){const f=floors[idOf(data)]||[460,'#171820',.46];return {groundY:f[0],shadowColor:f[1],shadowOpacity:f[2]};}

  function profile(id){return ({sertao:'dust',pelourinho:'coast',igarape:'forest',pampa:'dust',vila:'stadium',ny_docks:'city',neva:'snow',kyoto:'petal',longmen:'lantern',venezia:'water',london:'rain',mare:'lunar',eclipse:'lunar'})[id]||'dust';}
  for(const id of IDS){if(!motion[id])motion[id]=[];motion[id].forEach(Object.freeze);Object.freeze(motion[id]);}
  Object.freeze(motion);
  const events=Object.freeze(Object.fromEntries(IDS.map(id=>[id,Object.freeze({kind:profile(id),description:(motion[id]||[]).map(m=>m[8]).join(', ')||(profile(id)==='lunar'?'Poeira lunar e estrelas pulsantes':'Partículas discretas do ambiente')||(profile(id)==='lunar'?'Poeira lunar e estrelas pulsantes':'Partículas discretas do ambiente'),nativeWidth:WIDTH,nativeHeight:HEIGHT})])));

  function loadAssets(){
    if(typeof Image==='undefined'||typeof document==='undefined')return;
    for(const id of IDS){
      if(slots.has(id))continue;
      const source=typeof sources[id]==='string'?sources[id]:sources[id]?.url;if(!source)continue;
      const entry={id,source,loaded:false,failed:false,image:new Image(),base:null,frame:null,bucket:NaN};slots.set(id,entry);
      const image=entry.image;
      image.onload=()=>{
        const iw=image.naturalWidth||image.width,ih=image.naturalHeight||image.height;
        if(!(iw>0&&ih>0)){entry.failed=true;return;}
        const base=document.createElement('canvas');base.width=WIDTH;base.height=HEIGHT;const context=base.getContext('2d');
        context.imageSmoothingEnabled=false;
        const factor=Math.max(WIDTH/iw,HEIGHT/ih),sw=WIDTH/factor,sh=HEIGHT/factor;
        context.drawImage(image,(iw-sw)/2,(ih-sh)/2,sw,sh,0,0,WIDTH,HEIGHT);
        const frame=document.createElement('canvas');frame.width=WIDTH;frame.height=HEIGHT;
        entry.base=base;entry.frame=frame;entry.loaded=true;entry.image=null;
        if(typeof global.dispatchEvent==='function'&&typeof Event==='function')global.dispatchEvent(new Event('brasa-stage-art-ready'));
      };
      image.onerror=()=>{entry.failed=true;};image.src=source;
    }
  }

  // Every tile is redrawn inside a fixed rectangle. Zero displacement at its
  // boundary prevents holes, doubled figures and remnants of the previous frame.
  function movingPatch(ctx,source,area,time){
    const [x,y,w,h,dx,dy,period,phase]=area,travel=boomerang(time,period,phase)*2-1,columns=5,rows=5;
    for(let j=0;j<rows;j++)for(let i=0;i<columns;i++){
      const left=Math.round(x+i*w/columns),top=Math.round(y+j*h/rows),right=Math.round(x+(i+1)*w/columns),bottom=Math.round(y+(j+1)*h/rows),tw=right-left,th=bottom-top;
      const envelope=i===0||j===0||i===columns-1||j===rows-1?0:Math.sin(Math.PI*(i+.5)/columns)*Math.sin(Math.PI*(j+.5)/rows);
      const sx=clamp(left+travel*dx*envelope,0,WIDTH-tw),sy=clamp(top+travel*dy*envelope,0,HEIGHT-th);
      ctx.drawImage(source,sx,sy,tw,th,left,top,tw,th);
    }
  }

  function atmosphere(ctx,id,time){
    const kind=events[id]?.kind||'dust';ctx.save();
    if(kind==='snow'){
      ctx.fillStyle='#e0ecf1';ctx.globalAlpha=.52;
      for(let i=0;i<43;i++){const x=mod(random(i+20)*WIDTH+time*(4+i%3),WIDTH),y=mod(random(i+80)*HEIGHT+time*(5+i%4),HEIGHT);ctx.fillRect(Math.round(x),Math.round(y),i%4===0?2:1,1);}
    }else if(kind==='rain'){
      ctx.fillStyle='#b8d5e6';ctx.globalAlpha=.25;
      for(let i=0;i<48;i++){const y=mod(random(i+50)*HEIGHT+time*109,HEIGHT),x=mod(random(i+140)*WIDTH-time*17,WIDTH);ctx.fillRect(Math.round(x),Math.round(y),1,3);}
      ctx.fillStyle='#99c8dc';ctx.globalAlpha=.2;
      for(let i=0;i<9;i++){const p=boomerang(time,2.8+i*.2,i),x=35+i*51;ctx.fillRect(x,237+i%3*9,Math.max(1,Math.round(p*9)),1);}
    }else if(kind==='forest'){
      for(let i=0;i<21;i++){const x=mod(random(i+53)*WIDTH+Math.sin(time*.31+i)*13,WIDTH),y=60+random(i+130)*141+Math.cos(time*.51+i)*5;ctx.fillStyle='#d4e592';ctx.globalAlpha=(.15+.55*boomerang(time,4.3+i%4,i));ctx.fillRect(Math.round(x),Math.round(y),1,1);}
    }else if(kind==='petal'){
      ctx.fillStyle='#ffd1df';ctx.globalAlpha=.62;
      for(let i=0;i<19;i++){const x=mod(random(i+42)*WIDTH+time*7+Math.sin(time+i)*4,WIDTH),y=mod(random(i+132)*HEIGHT+time*5,HEIGHT);ctx.fillRect(Math.round(x),Math.round(y),2,1);}
    }else if(kind==='lunar'){
      ctx.fillStyle='#c4c5d6';ctx.globalAlpha=.24;
      for(let i=0;i<11;i++){const x=mod(random(i+81)*WIDTH+time*(.7+i%2),WIDTH),y=214+random(i+120)*48+Math.sin(time*.25+i)*2;ctx.fillRect(Math.round(x),Math.round(y),i%3===0?2:1,1);}
      // Quiet star sparkle and ground dust preserve the lunar atmosphere.
      for(let i=0;i<12;i++){ctx.globalAlpha=.15+.28*boomerang(time,6+i%3,i);ctx.fillRect(20+Math.round(random(i+230)*441),5+Math.round(random(i+170)*76),1,1);}
    }else if(kind!=='stadium'){
      ctx.fillStyle=kind==='lantern'?'#ffd295':'#e7c58c';ctx.globalAlpha=kind==='lantern'?.25:.17;
      for(let i=0;i<12;i++){const x=mod(random(i+120)*WIDTH+time*2.4,WIDTH),y=198+random(i+17)*58+Math.sin(time*.38+i)*2;ctx.fillRect(Math.round(x),Math.round(y),1,1);}
    }
    ctx.restore();
  }

  function ready(data){loadAssets();return data===undefined?IDS.length>0&&IDS.every(id=>slots.get(id)?.loaded):!!slots.get(idOf(data))?.loaded;}
  function draw(ctx,data,width,height,time=0){
    if(!ctx||!(width>0&&height>0))return false;loadAssets();
    const id=idOf(data),entry=slots.get(id);if(!entry?.loaded)return false;
    const clock=Number.isFinite(time)?time:0,bucket=Math.floor(clock*30);
    if(entry.bucket!==bucket){
      const frame=entry.frame.getContext('2d');frame.save();frame.imageSmoothingEnabled=false;frame.globalAlpha=1;frame.drawImage(entry.base,0,0);
      for(const area of motion[id]||[])movingPatch(frame,entry.base,area,bucket/30);
      atmosphere(frame,id,bucket/30);frame.restore();entry.bucket=bucket;
    }
    ctx.save();ctx.imageSmoothingEnabled=false;ctx.drawImage(entry.frame,0,0,WIDTH,HEIGHT,0,0,width,height);ctx.restore();return true;
  }
  function cellFor(data){const id=idOf(data);return IDS.includes(id)?Object.freeze({id,width:WIDTH,height:HEIGHT,standalone:true}):null;}
  global.BrasaStages=Object.freeze({draw,ready,ids:IDS,boomerang,motion,events,cellFor,grounding,nativeSize:Object.freeze([WIDTH,HEIGHT])});
  loadAssets();
})(typeof window!=='undefined'?window:globalThis);

/* Classic backgrounds retain their complete original viewport composition. */
(function(global){
 'use strict';const classic=global.BrasaStages;
 function drawWorld(ctx,data,width,height,time,camera,options={}){return options.foreground?true:classic.draw(ctx,data,width,height,time);}
 function drawDebug(ctx,data,width,height,camera={}){if(!ctx)return false;ctx.save();ctx.scale(width/960,height/540);ctx.strokeStyle='#e9b96e';ctx.lineWidth=2;ctx.strokeRect(1,1,958,538);ctx.fillStyle='#101720e8';ctx.fillRect(300,82,360,64);ctx.fillStyle='#f1e4c8';ctx.font='12px monospace';ctx.fillText('F3 | MAPA ORIGINAL 0.10',310,101);ctx.fillText('MUNDO 0 .. 2880 | camera.x '+(Number(camera.x)||0).toFixed(1),310,122);ctx.strokeStyle='#ff647c';for(const edge of[0,2880]){const x=(edge-(camera.x||0))*(camera.zoom||1);if(x>=0&&x<=960){ctx.beginPath();ctx.moveTo(Math.max(1,Math.min(959,x)),0);ctx.lineTo(Math.max(1,Math.min(959,x)),540);ctx.stroke();}}ctx.restore();return true;}
 global.BrasaStages=Object.freeze({...classic,drawWorld,drawDebug});
})(typeof window!=='undefined'?window:globalThis);
