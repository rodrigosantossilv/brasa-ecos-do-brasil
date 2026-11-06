/* BRASA — continuous structural layers composed only from existing arena pixels. */
(function(global){
 'use strict';
 const SW=480,SH=270,LW=1920,SCALE=2,WORLD=2880,VIEW=960;
 const sources=global.BRASA_ASSETS?.pixelStages||{},ids=Object.freeze(Object.keys(sources)),images=new Map(),cache=new Map();
 const depths=Object.freeze([['sky','CÉU',.05],['mountains','MONTANHAS',.2],['trees','ÁRVORES / PAVILHÃO',.4],['fence','CERCA',.7],['ground','CHÃO',1]].map(([id,label,factor])=>Object.freeze({id,label,factor})));
 const mod=(n,p)=>((n%p)+p)%p,idOf=data=>typeof data==='string'?data:data?.id;
 const floors={sertao:[458,'#402213',.46],pelourinho:[466,'#382326',.42],igarape:[468,'#172b29',.52],pampa:[464,'#38281c',.42],vila:[470,'#173019',.48],ny_docks:[466,'#17202b',.53],neva:[462,'#253147',.36],kyoto:[464,'#21152d',.56],longmen:[462,'#302615',.45],venezia:[464,'#32252a',.46],london:[466,'#142031',.55],mare:[460,'#161724',.58],eclipse:[464,'#1b1025',.58]};
 // Native source-space masks. Far/near planes mean the existing cliffs/skyline
 // and architecture in urban arenas; no trees, fences or objects are invented.
 const layouts={
  sertao:{sky:70,near:155,floor:196,features:[[0,0,190,120],[0,30,168,196],[365,18,480,196],[165,126,393,196]],fences:[[162,173,245,196],[315,173,398,196]]},
  pelourinho:{sky:40,near:158,floor:211,features:[[0,0,155,209],[0,12,221,211],[334,0,480,211]],fences:[[0,147,154,211]]},
  igarape:{sky:35,near:154,floor:200,features:[[0,0,236,151],[0,62,171,162],[326,66,480,163]],fences:[[0,175,480,200]]},
  pampa:{sky:95,near:151,floor:196,daylight:true,features:[[0,0,136,95],[46,60,64,151],[0,69,46,104],[15,98,26,144],[63,82,114,109],[73,102,86,144],[317,18,480,114],[349,79,363,196],[398,66,410,196],[409,61,480,196]],fences:[],fenceContour:true},
  vila:{sky:65,near:170,floor:209,features:[[0,67,480,209],[6,5,36,80],[252,36,281,106],[345,16,376,104],[395,27,480,109]],fences:[[0,197,480,209],[0,168,79,209]]},
  ny_docks:{sky:45,near:142,floor:191,features:[[0,0,95,191],[395,53,480,191]],fences:[[0,153,480,188]]},
  neva:{sky:78,near:142,floor:201,features:[[0,0,88,192],[277,0,480,104]],fences:[[0,156,480,201]],solidFence:true},
  kyoto:{sky:24,near:134,floor:184,features:[[0,0,199,160],[0,35,244,184],[352,0,480,184]],fences:[[0,163,86,184],[307,147,358,180]]},
  longmen:{sky:67,near:164,floor:210,features:[[0,0,140,177],[421,65,480,178]],fences:[[0,162,480,210]]},
  venezia:{sky:43,near:188,floor:196,features:[[0,0,212,189],[376,0,480,190]],fences:[[0,186,480,196]],solidFence:true},
  london:{sky:48,near:140,floor:196,features:[[0,0,114,196],[116,38,154,190],[446,31,480,190]],fences:[[0,142,480,196]]},
  mare:{sky:134,near:157,floor:195,features:[[22,103,81,148]],fences:[]},
  eclipse:{sky:76,near:140,floor:184,features:[[0,13,66,182],[423,14,480,182]],fences:[]}
 };
 const inside=(x,y,b)=>x>=b[0]&&y>=b[1]&&x<b[2]&&y<b[3];
 function surface(width=SW,height=SH){const canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;const ctx=canvas.getContext('2d');ctx.imageSmoothingEnabled=false;return{canvas,ctx};}
 function loadAssets(){
  if(typeof Image==='undefined'||typeof document==='undefined')return;
  for(const id of ids){if(images.has(id))continue;const picture=new Image(),entry={loaded:false,failed:false,image:picture};images.set(id,entry);
   picture.onload=()=>{entry.loaded=true;if(typeof global.dispatchEvent==='function'&&typeof Event==='function')global.dispatchEvent(new Event('brasa-stage-art-ready'));};
   picture.onerror=()=>{entry.failed=true;};picture.src=typeof sources[id]==='string'?sources[id]:sources[id]?.url;
  }
 }
 function grounding(data){const f=floors[idOf(data)]||[464,'#24222a',.46];return{groundY:f[0],shadowColor:f[1],shadowOpacity:f[2]};}
 const key=(r,g,b)=>((r>>4)<<8)|((g>>4)<<4)|(b>>4);
 const backgroundRegions={
  sertao:[[190,0,365,69],[166,70,364,126],[170,125,325,173]],
  pelourinho:[[222,0,334,40],[221,40,334,158],[155,159,334,210]],
  igarape:[[237,0,326,35],[173,35,326,145],[175,145,326,175]],
  pampa:[[136,0,315,90],[136,95,309,139],[136,126,309,138]],
  vila:[[38,0,245,65],[90,70,393,135],[90,135,393,194]],
  ny_docks:[[96,0,395,45],[96,45,395,140],[96,141,395,152]],
  neva:[[90,0,276,78],[90,78,276,142],[92,142,280,155]],
  kyoto:[[204,0,315,23],[245,48,350,133],[245,134,304,184]],
  longmen:[[168,0,245,46],[145,67,420,162],[145,163,420,180]],
  venezia:[[214,0,289,37],[246,130,307,152],[243,153,300,181]],
  london:[[155,0,442,48],[155,48,442,140],[155,141,442,170]],
  mare:[[82,0,171,106],[309,134,479,157],[82,158,479,195]],
  eclipse:[[70,0,420,76],[70,76,420,133],[70,134,420,184]]
 };
 function partition(pixels,layout){
  const classes=new Uint8Array(SW*SH),skyPalette=new Set();
  const fenceTop=new Uint8Array(SW).fill(layout.floor);
  if(layout.fenceContour){
   // Trace the connected fence silhouette down to the floor. A post must
   // travel with its rail and footing, including where the wood is shaded.
   for(let x=0;x<349;x++){
    for(let y=136;y<layout.floor;y++){
     const p=(y*SW+x)*4,r=pixels[p],g=pixels[p+1],b=pixels[p+2];
     if(r>g+9&&g>b+4){fenceTop[x]=Math.max(136,y-3);break;}
    }
   }
  }
  // Learn sky colours from the existing central open sky. They are used only
  // to keep holes around branch/roof silhouettes, never to add an image.
  for(let y=0;y<Math.max(8,layout.sky-6);y++)for(let x=224;x<322;x++){const p=(y*SW+x)*4;skyPalette.add(key(pixels[p],pixels[p+1],pixels[p+2]));}
  for(let y=0;y<SH;y++)for(let x=0;x<SW;x++){
   const i=y*SW+x,p=i*4,r=pixels[p],g=pixels[p+1],b=pixels[p+2];
   const isSky=layout.daylight?b>=r&&b>=g&&b>=125||r>199&&g>188&&b>148:skyPalette.has(key(r,g,b));
   let plane=y<layout.sky?0:y<layout.floor?1:4;
   if(y<layout.floor&&layout.features.some(bounds=>inside(x,y,bounds))&&!isSky)plane=2;
   // Rail cutouts remain transparent: retain existing near-colour pixels only.
   const inFence=layout.fences.some(bounds=>inside(x,y,bounds));
   const fenceColor=r>=g*.94&&r>=b*.95||Math.max(r,g,b)-Math.min(r,g,b)<24;
   if(y<layout.floor&&(y>=fenceTop[x]||inFence&&(layout.solidFence||fenceColor)))plane=3;
   classes[i]=plane;
  }
  return classes;
 }
 function filledPlane(pixels,region,lowerRegion=region,lowerY=SH,soilY=null){
  const output=new Uint8ClampedArray(pixels.length);
  const reflect=(value,size)=>{const t=mod(value,size*2);return t<size?t:size*2-1-t;};
  for(let y=0;y<SH;y++){
   const sampleRegion=y>=lowerY?lowerRegion:region;
   const [left,top,right,bottom]=sampleRegion;
   const sy=top+reflect(y-top,bottom-top);
   const soilMix=soilY===null?0:Math.max(0,Math.min(1,(y-soilY+29)/29));
   const soilRow=soilMix>0?soilY+reflect(y-soilY,SH-soilY):0;
   for(let x=0;x<SW;x++){
    // Hidden background uses a mirrored 2D section of the SAME original art.
    // Never extrude a single pixel/column into the horizontal streaks caused
    // by row-nearest filling. Visible source pixels are restored unchanged.
    const sx=left+reflect(x-left,right-left);
    // Pampa's far bank meets existing dirt behind the fence. Reuse actual
    // ground pixels there instead of repeating a rectangular green texture.
    const sample=(sy*SW+sx)*4,soil=(soilRow*SW+x)*4;
    const dest=(y*SW+x)*4;
    for(let channel=0;channel<3;channel++)output[dest+channel]=pixels[sample+channel]*(1-soilMix)+pixels[soil+channel]*soilMix;
    output[dest+3]=255;
   }
  }
  return output;
 }
 function build(id){
  const entry=images.get(id);if(!entry?.loaded)return null;
  if(cache.has(id)){const old=cache.get(id);cache.delete(id);cache.set(id,old);return old;}
  const layout=layouts[id],source=surface();source.ctx.drawImage(entry.image,0,0,SW,SH);
  const original=source.ctx.getImageData(0,0,SW,SH),classes=partition(original.data,layout),layers=[];
  for(let plane=0;plane<5;plane++){
   const sample=surface(),regions=backgroundRegions[id];
   const pixels=plane===0?filledPlane(original.data,regions[0]):plane===1?filledPlane(original.data,regions[1],regions[2],layout.near,layout.fenceContour?layout.floor:null):original.data;
   const frame=sample.ctx.createImageData(SW,SH);
   for(let y=0;y<SH;y++)for(let x=0;x<SW;x++){
    const i=y*SW+x,p=i*4,kind=classes[i];
    const visible=plane===0||kind===plane||(plane===1&&kind>1&&y>=layout.sky);
    if(visible){const from=kind===plane?original.data:pixels;frame.data[p]=from[p];frame.data[p+1]=from[p+1];frame.data[p+2]=from[p+2];frame.data[p+3]=255;}
   }
   sample.ctx.putImageData(frame,0,0);
   const wide=surface(LW,SH);
   // Four WHOLE mirrored copies are baked into one continuous layer. The first
   // and last columns match, and the original 480px view is at native x=480.
   for(let tile=0;tile<4;tile++){wide.ctx.save();wide.ctx.translate(tile*SW,0);if(tile%2===0){wide.ctx.translate(SW,0);wide.ctx.scale(-1,1);}wide.ctx.drawImage(sample.canvas,0,0);wide.ctx.restore();}
   layers.push(wide.canvas);
  }
  const result={layers};cache.set(id,result);while(cache.size>3)cache.delete(cache.keys().next().value);return result;
 }
 function spans(factor,camera={}){
  const x=Number.isFinite(camera.x)?camera.x:960,period=LW*SCALE,offset=960*(1-factor)+x*factor,start=-mod(offset,period),result=[];
  for(let left=start;left<VIEW;left+=period)result.push({left,right:left+period});return result;
 }
 function drawWorld(ctx,data,width,height,time=0,camera={},options={}){
  if(!ctx||!(width>0&&height>0))return false;loadAssets();const id=idOf(data);
  if(options.foreground)return ids.includes(id);
  const stage=build(id);if(!stage)return false;
  ctx.save();ctx.imageSmoothingEnabled=false;ctx.scale(width/VIEW,height/540);ctx.beginPath();ctx.rect(0,0,VIEW,540);ctx.clip();
  for(let i=0;i<5;i++)for(const span of spans(depths[i].factor,camera)){ctx.save();ctx.translate(span.left,0);ctx.scale(SCALE,SCALE);ctx.drawImage(stage.layers[i],0,0);ctx.restore();}
  ctx.restore();return true;
 }
 function draw(ctx,data,width,height,time=0){return drawWorld(ctx,data,width,height,time,{x:960});}
 function ready(data){loadAssets();return data===undefined?ids.length>0&&ids.every(id=>images.get(id)?.loaded):!!images.get(idOf(data))?.loaded;}
 function worldInfo(data){const id=idOf(data);if(!ids.includes(id))return null;return{worldWidth:WORLD,worldHeight:540,nativeWidth:LW,nativeHeight:SH,nativeScale:SCALE,layers:depths,groundY:grounding(id).groundY,terrainY:layouts[id].floor,people:0,particles:0,props:0};}
 function layerBounds(data,camera={}){if(!worldInfo(data))return[];return depths.map(d=>({...d,nativeBounds:{left:0,top:0,right:LW,bottom:SH},worldBounds:{left:0,top:0,right:LW*SCALE,bottom:540},draws:spans(d.factor,camera).map(s=>({screen:{left:s.left,right:s.right,top:0,bottom:540}}))}));}
 function drawDebug(ctx,data,width,height,camera={}){
  const bounds=layerBounds(data,camera);if(!ctx||!bounds.length)return false;
  const colors=['#efca6f','#c4a5ff','#7cdda6','#7dbdff','#f29d81'],x=Number.isFinite(camera.x)?camera.x:960;
  ctx.save();ctx.scale(width/VIEW,height/540);ctx.lineWidth=1;ctx.setLineDash?.([4,4]);
  bounds.forEach((b,i)=>{ctx.strokeStyle=colors[i];for(const d of b.draws)ctx.strokeRect(d.screen.left,i+1,d.screen.right-d.screen.left,538-i*2);});
  ctx.setLineDash?.([]);ctx.strokeStyle='#ff647e';ctx.lineWidth=2;
  for(const edge of[0,WORLD]){const screen=edge-x;if(screen>=0&&screen<=VIEW){ctx.beginPath();ctx.moveTo(Math.max(1,Math.min(959,screen)),0);ctx.lineTo(Math.max(1,Math.min(959,screen)),540);ctx.stroke();}}
  ctx.fillStyle='#10151feb';ctx.fillRect(12,76,366,140);ctx.font='11px monospace';ctx.textAlign='left';ctx.fillStyle='#fff0d5';ctx.fillText('F3 · CAMADAS / MUNDO 0..2880',22,94);
  bounds.forEach((b,i)=>{
   const y=111+i*17,span=b.draws[0].screen,period=LW*SCALE;
   ctx.fillStyle=colors[i];ctx.fillText(b.label+' '+b.factor.toFixed(2)+' | 3840 × 540',22,y);
   ctx.strokeStyle=colors[i];ctx.strokeRect(244,y-8,120,7);
   ctx.fillRect(244-span.left/period*120,y-7,Math.min(VIEW,span.right)/period*120,5);
  });
  ctx.fillStyle='#fff0d5';ctx.fillText('camera.x '+x.toFixed(1)+' | escala 2 / zoom 1',22,207);ctx.restore();return true;
 }
 const motion=Object.freeze(Object.fromEntries(ids.map(id=>[id,Object.freeze([])]))),events=Object.freeze(Object.fromEntries(ids.map(id=>[id,Object.freeze({kind:'structure',description:'Composição estática dos recursos existentes',nativeWidth:LW,nativeHeight:SH})])));
 function boomerang(time,period=6,phase=0){return .5-.5*Math.cos(Math.PI*2*((Number(time)||0)+(Number(phase)||0))/(Number(period)>0?Number(period):6));}
 global.BrasaStages=Object.freeze({draw,drawWorld,drawDebug,worldInfo,layerBounds,grounding,ready,ids,motion,events,nativeSize:Object.freeze([LW,SH]),cellFor:data=>ids.includes(idOf(data))?Object.freeze({id:idOf(data),width:LW,height:SH,standalone:true}):null,boomerang});
 loadAssets();
})(typeof window!=='undefined'?window:globalThis);
