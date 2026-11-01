'use strict';
// Offline nearest-neighbour retargeting of BRASA's own RGBA. No runtime scans,
// palette conversion, foreign artwork, or changes to the original64-cell PNGs.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const {PNG}=require('pngjs');
const root=path.resolve(__dirname,'..'),game=path.join(root,'game'),phaseCount=64;
const sha=bytes=>crypto.createHash('sha256').update(bytes).digest('hex');
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v)),mod=v=>((v%1)+1)%1,smooth=t=>t*t*(3-2*t);
const median=values=>{const a=values.slice().sort((x,y)=>x-y);return a[Math.floor(a.length/2)];};
const checkedHipDepth={bento:40,jana:34,jack:38,regolith:40,vittoria:39};

function opaqueBounds(pixels,width,height,anchorX,footY){
 let minX=width,maxX=-1,minY=height,maxY=-1;
 for(let y=0;y<height;y++)for(let x=0;x<width;x++)if(pixels[(y*width+x)*4+3]>48){minX=Math.min(minX,x);maxX=Math.max(maxX,x);minY=Math.min(minY,y);maxY=Math.max(maxY,y);}
 assert(maxX>=0,'Retargeted frame has no opaque pixels');
 return{left:anchorX-minX,right:maxX+1-anchorX,top:footY-minY,bottom:maxY+1-footY};
}
function inversePixels(source,pose,{padding=24}={}){
 const width=source.width+padding*2,height=source.height,pixels=Buffer.alloc(width*height*4);
 const src=new Uint32Array(source.pixels.buffer,source.pixels.byteOffset,source.width*source.height),dst=new Uint32Array(pixels.buffer,pixels.byteOffset,width*height);
 const hip=pose.hipY,compression=pose.upperCompressionY||0,k=compression/Math.max(1,source.footY),split=pose.splitX;
 for(let y=0;y<height;y++){
  if(y<=hip){
   const sy=(y-k*hip)/(1-k),iy=Math.round(sy);if(iy<0||iy>=source.height)continue;
   const dx=(pose.upperShearX||0)*Math.max(0,(hip-sy)/Math.max(1,source.footY)),offset=iy*source.width;
   for(let x=0;x<width;x++){const ix=Math.round(x-padding-dx);if(ix>=0&&ix<source.width)dst[y*width+x]=src[offset+ix];}
  }else{
   const feet=pose.sourceFeet,targets=pose.targetFeet,depth=Math.max(1,Math.max(feet[0].y,feet[1].y)-hip),blend=Math.max(1,24*(1-clamp((y-hip)/depth))**2);
   for(let x=0;x<width;x++){
    let sx=x-padding,sy=y;
    // A continuous inverse field keeps connected trousers/robes connected.
    // Hard cutting the texture in two produced a transparent centre seam.
    for(let iteration=0;iteration<3;iteration++){
     const u=smooth(clamp((sx-split)/blend+.5)),sfy=feet[0].y*(1-u)+feet[1].y*u,den=Math.max(1,sfy-hip),dy=(targets[0].y-feet[0].y)*(1-u)+(targets[1].y-feet[1].y)*u;
     const affineY=(y+dy*hip/den)/(1+dy/den),footWeight=smooth(clamp((y-(sfy+dy-14))/10));
     sy=affineY*(1-footWeight)+(y-dy)*footWeight;
     const weight=clamp((sy-hip)/Math.max(1,den-9)),dx=((targets[0].x-feet[0].x)*(1-u)+(targets[1].x-feet[1].x)*u)*weight;
     const knee=(pose.kneeBend||0)*Math.sin(weight*Math.PI)*((pose.kneeSigns?.[0]||0)*(1-u)+(pose.kneeSigns?.[1]||0)*u);sx=x-padding-dx-knee;
    }
    const ix=Math.round(sx),iy=Math.round(sy);if(ix>=0&&ix<source.width&&iy>=0&&iy<source.height)dst[y*width+x]=src[iy*source.width+ix];
   }
  }
 }
 return{pixels,width,height,anchorX:source.anchorX+padding,footY:source.footY};
}
function contacts(pixels,width,height,footY){
 const out=[],row=Math.min(height-1,Math.round(footY)-1);
 for(let x=0;x<width;x++)if(pixels[(row*width+x)*4+3]>48){let last=out.at(-1);if(!last||x>last.right+3)out.push(last={left:x,right:x});else last.right=x;}
 return out.map(c=>({...c,center:(c.left+c.right)/2}));
}
function extractFrame(image,f){
 const width=f.rasterWidth,height=f.rasterHeight,pixels=Buffer.alloc(width*height*4);
 for(let y=0;y<height;y++)image.data.copy(pixels,y*width*4,((f.rasterY+y)*image.width+f.rasterX)*4,((f.rasterY+y)*image.width+f.rasterX+width)*4);
 return{width,height,pixels,anchorX:f.anchorX,footY:f.footY,sourceIndex:f.sourceIndex};
}
function sourceFeet(source,split){
 const results=[];
 for(let side=0;side<2;side++){
  const minX=Math.max(0,Math.floor(source.anchorX-70)),maxX=Math.min(source.width,Math.ceil(source.anchorX+70));let maxY=-1;
  for(let y=Math.max(0,Math.floor(source.footY-22));y<Math.min(source.height,Math.ceil(source.footY+3));y++)for(let x=minX;x<maxX;x++)if((side?x>=split:x<split)&&source.pixels[(y*source.width+x)*4+3]>48)maxY=Math.max(maxY,y);
  let lo=source.width,hi=-1;
  for(let y=Math.max(0,maxY-2);y<=maxY;y++)for(let x=minX;x<maxX;x++)if((side?x>=split:x<split)&&source.pixels[(y*source.width+x)*4+3]>48){lo=Math.min(lo,x);hi=Math.max(hi,x);}
  let shoeLo=source.width,shoeHi=-1;
  for(let y=Math.max(0,maxY-8);y<=maxY;y++)for(let x=minX;x<maxX;x++)if((side?x>=split:x<split)&&source.pixels[(y*source.width+x)*4+3]>48){shoeLo=Math.min(shoeLo,x);shoeHi=Math.max(shoeHi,x);}
  results.push({x:hi>=lo?(lo+hi)/2:split+(side?18:-18),y:maxY<0?source.footY-1:maxY,width:shoeHi>=shoeLo?shoeHi-shoeLo+1:0,valid:hi>=lo});
 }
 return results;
}
function clearCrotch(source,split,start){
 for(let y=Math.round(start);y<source.footY-16;y++){
  let clear=0;
  for(let q=y;q<y+6;q++){
   let transparent=0,left=0,right=0;
   for(let x=Math.round(split)-3;x<=Math.round(split)+3;x++)if(source.pixels[(q*source.width+x)*4+3]<=48)transparent++;
   for(let x=Math.max(0,split-65);x<split-3;x++)if(source.pixels[(q*source.width+x)*4+3]>48)left++;
   for(let x=split+4;x<Math.min(source.width,split+66);x++)if(source.pixels[(q*source.width+x)*4+3]>48)right++;
   if(transparent>=3&&left>=3&&right>=3)clear++;
  }
  if(clear===6)return y-1;
 }
 return null;
}
function buildRig(id,kind,frames,profile,standingHeight){
 const lower=profile.lowerBody||{},first=frames[0],split=Math.round(first.anchorX),feet=frames.map(f=>sourceFeet(f,split));
 const base=feet[0],mid=(base[0].x+base[1].x)/2,span=base[1].x-base[0].x;
 let mode=lower.mode||'step',reason='catalog';
 const requestedHip=first.footY-(checkedHipDepth[id]||standingHeight*(lower.hipRatio||.39));
 let hipY=requestedHip;
 if(mode==='step'&&(span<18||base.some(f=>!f.valid))){mode='unified';reason='one visible support region';}
 if(id==='shen'){mode='hop';reason='catalog hop retained as1.5-native-pixel rigid impulse; robe remains one surface';}
 hipY=Math.round(hipY??requestedHip);
 const duty=clamp(lower.supportFraction||.62,.52,.74),intended=kind==='backwalk'?profile.strideBack:profile.strideForward;
 const intendedNative=intended*standingHeight/215,sourceRadius=Math.max(8,span/2),depth=Math.max(18,first.footY-hipY);
 const maxRadius=Math.sqrt((sourceRadius**2+depth**2)*1.15**2-depth**2);
 const shoeGap=(base[0].width+base[1].width)/2+3;
 let strideNative=mode==='step'?Math.min(intendedNative,Math.max(14,(maxRadius-shoeGap/2)/(.25+duty/2))):mode==='glide'?intendedNative:Math.min(intendedNative,28);
 // Mineral mass keeps a broader neutral stance and tiny articulation.
 if(id==='regolith')strideNative=Math.min(strideNative,42);
 const neutralRadius=mode==='step'?Math.max(shoeGap/2+strideNative/4,Math.min(sourceRadius*.84,maxRadius-strideNative*duty/2)):sourceRadius;
 const lift=id==='regolith'?.35:clamp(lower.footLift||1.5,0,4.2);
 return{mode,catalogMode:lower.mode||'step',reason,hipY,split,feet,base,mid,neutralFeet:[mid-neutralRadius,mid+neutralRadius],strideNative,effectiveStride:strideNative*215/standingHeight,duty,lift,maxStretch:1.15,requestedStride:intended};
}
function track(phase,duty,lift,stride){
 const u=mod(phase),range=stride*duty;
 if(u<duty)return{x:range/2-stride*u,y:0,planted:true};
 const q=(u-duty)/(1-duty);return{x:-range/2+range*smooth(q),y:-lift*Math.sin(Math.PI*q)**1.2,planted:false};
}
function poseFor(source,rig,sourceCell,phase,profile,kind){
 const upper=profile.upperBody||{},back=kind==='backwalk',theta=phase*Math.PI*2,lower=profile.lowerBody||{};
 const lean=back?(upper.backLean||0):(upper.forwardLean||0),torso=upper.torso||{},shoulders=upper.shoulders||{},pelvis=upper.pelvis||{};
 let shear=lean*128+(torso.x||0)*Math.sin(theta)+(shoulders.x||0)*.35*Math.sin(theta+Math.PI/2);
 let compression=(torso.y||0)*(1-Math.cos(theta*2))*.45;
 if(profile.name==='Rególito'){shear*=.5;compression*=.12;}
 const sf=rig.feet[sourceCell],direction=back?-1:1,paths=[track(phase,rig.duty,rig.lift,rig.strideNative),track(phase+.5,rig.duty,rig.lift,rig.strideNative)];
 let targets,warpFeet=sf;
 if(rig.mode==='step')targets=paths.map((p,i)=>({x:rig.neutralFeet[i]+direction*p.x,y:source.footY-1+p.y}));
 else{
  const lowest=Math.max(...sf.map(f=>f.y)),center=(sf[0].x+sf[1].x)/2,normalize=rig.mid-center;
  warpFeet=sf.map(f=>({...f,y:lowest}));
  const supportTrack=track(phase,rig.duty,rig.lift,rig.strideNative);
  targets=sf.map(f=>({x:f.x+normalize+(rig.mode==='glide'?0:direction*supportTrack.x),y:source.footY-1}));
  shear+=(pelvis.x||0)*.2*Math.sin(theta);
 }
 return{hipY:rig.hipY,splitX:rig.split,sourceFeet:warpFeet,targetFeet:targets,upperShearX:shear,upperCompressionY:compression,
  kneeBend:rig.mode==='step'?Math.min(.65,lower.kneeBend||0)*Math.sin(theta)**2:0,kneeSigns:[-.4,.4],support:rig.mode==='glide'?[false,false]:rig.mode==='step'?paths.map(p=>p.planted):[paths[0].planted,paths[0].planted],mode:rig.mode};
}
function environment(){
 const box={console};box.window=box;box.globalThis=box;vm.createContext(box);
 for(const name of ['assets.js','data.js','locomotion-data.js','locomotion.js'])vm.runInContext(fs.readFileSync(path.join(game,name),'utf8'),box,{filename:name});
 return box;
}
function bakeActor(def,box){
 const bytes=fs.readFileSync(path.join(game,def.url)),image=PNG.sync.read(bytes),profile=box.BRASA_GAITS.profiles[def.id];assert(profile,'Missing authored gait '+def.id);
 const all=[],rigs={},padding=24;
 for(const kind of ['walk','backwalk']){
  // Every phase starts from the SAME original idle texture, so clothing and
  // palette cannot jump between inconsistent source walk drawings.
  const sources=def.sequences[kind].map(index=>extractFrame(image,{...def.frames[0],sourceIndex:index})),rig=buildRig(def.id,kind,sources,profile,def.standingHeight);rigs[kind]=rig;
  for(let i=0;i<phaseCount;i++){
   const phase=i/phaseCount,cell=box.BrasaLocomotion.sourceCell(def.id,kind,phase),source=sources[cell],pose=poseFor(source,rig,cell,phase,profile,kind);let rendered=inversePixels(source,pose,{padding});
   // Atlas soles have small per-shoe offsets; align the actual lowest opaque
   // support pixel, instead of allowing a rounded shoe to sink below the floor.
   rendered.footY+=opaqueBounds(rendered.pixels,rendered.width,rendered.height,rendered.anchorX,rendered.footY).bottom;
   let hopOffset=0;
   if(rig.mode==='hop'){
    const u=mod(phase),swing=u>rig.duty?(u-rig.duty)/(1-rig.duty):0,amplitude=def.id==='shen'?1.5:rig.lift;
    hopOffset=Math.round(amplitude*Math.sin(Math.PI*swing));
    const height=rendered.height+8,raised=Buffer.alloc(rendered.width*height*4),top=8-hopOffset;
    rendered.pixels.copy(raised,top*rendered.width*4);rendered={...rendered,pixels:raised,height,footY:rendered.footY+8};
   }
   const bounds=opaqueBounds(rendered.pixels,rendered.width,rendered.height,rendered.anchorX,rendered.footY);
   const footContacts=contacts(rendered.pixels,rendered.width,rendered.height,rendered.footY);
   assert(bounds.bottom<=0,def.id+'/'+kind+'/'+i+' sinks below floor');assert(footContacts.length||hopOffset>0,def.id+'/'+kind+'/'+i+' has no supported floor pixel');
   all.push({...rendered,sourceIndex:def.sequences[kind][cell],phase,phaseIndex:i,kind,bounds,footContacts,support:pose.support,airborne:hopOffset>0,floorYOffset:-hopOffset});
  }
 }
 const tileW=Math.max(...all.map(f=>f.width)),tileH=Math.max(...all.map(f=>f.height)),columns=16,width=columns*tileW,height=Math.ceil(all.length/columns)*tileH,pixels=Buffer.alloc(width*height*4);
 const frames=all.map((f,index)=>{
  const rasterX=index%columns*tileW,rasterY=Math.floor(index/columns)*tileH;
  for(let y=0;y<f.height;y++)f.pixels.copy(pixels,((rasterY+y)*width+rasterX)*4,y*f.width*4,(y+1)*f.width*4);
  return{index,locomotionIndex:index,sourceIndex:f.sourceIndex,textureSourceIndex:0,phase:f.phase,phaseIndex:f.phaseIndex,kind:f.kind,left:0,right:tileW,top:0,bottom:tileH,anchorX:f.anchorX,footY:f.footY,rasterX,rasterY,rasterWidth:tileW,rasterHeight:tileH,bounds:f.bounds,footContacts:f.footContacts,support:f.support,airborne:f.airborne,floorYOffset:f.floorYOffset};
 });
 const union=Object.fromEntries(['left','right','top','bottom'].map(key=>[key,Math.max(...frames.map(f=>f.bounds[key]))]));
 const metadata={id:def.id,name:def.name,url:'assets/locomotion-v16-'+def.id+'.png',sourceUrl:def.url,sourceHash:sha(bytes),profileHash:sha(JSON.stringify(profile)),generatorHash:sha(fs.readFileSync(__filename)),standingHeight:def.standingHeight,width,height,phaseCount,effectiveStrideForward:rigs.walk.effectiveStride,effectiveStrideBack:rigs.backwalk.effectiveStride,frames,union,
  rig:Object.fromEntries(Object.entries(rigs).map(([kind,r])=>[kind,{mode:r.mode,catalogMode:r.catalogMode,reason:r.reason,hipY:r.hipY,splitX:r.split,sourceFeet:r.base,neutralFeet:r.neutralFeet,requestedStride:r.requestedStride,effectiveStride:r.effectiveStride,supportFraction:r.duty,footLift:r.lift,maxStretch:r.maxStretch}]))};
 return{metadata,png:PNG.sync.write({width,height,data:pixels},{colorType:6,deflateLevel:9,deflateStrategy:0}),pixels};
}
function writeManifest(fighters){
 fighters.sort((a,b)=>a.id.localeCompare(b.id));
 const manifest={version:16,phaseCount,method:'inverse-nearest-original-rgba',fighters};fs.writeFileSync(path.join(game,'assets/locomotion-v16.json'),JSON.stringify(manifest)+'\n');
 const file=path.join(game,'locomotion-data.js'),start='// BRASA_LOCOMOTION_ASSETS_BEGIN',end='// BRASA_LOCOMOTION_ASSETS_END',text=fs.readFileSync(file,'utf8'),a=text.indexOf(start),b=text.indexOf(end);assert(a>=0&&b>a,'Missing locomotion metadata boundaries');
 const assignment='\n(function(global){if(global.BRASA_ASSETS)global.BRASA_ASSETS.locomotionFighters='+JSON.stringify(fighters)+';})(typeof window!==\'undefined\'?window:globalThis);\n';
 fs.writeFileSync(file,text.slice(0,a+start.length)+assignment+text.slice(b));
 return manifest;
}
function main(){
 const box=environment(),manifest=JSON.parse(fs.readFileSync(path.join(game,'assets/authored-v10.json'),'utf8'));
 const args=process.argv.slice(2),idsArg=args.find(a=>a.startsWith('--ids=')),ids=idsArg?new Set(idsArg.slice(6).split(',')):null;
 const metaPath=path.join(game,'assets/locomotion-v16.json'),prior=fs.existsSync(metaPath)?JSON.parse(fs.readFileSync(metaPath,'utf8')).fighters:[],byId=new Map(prior.map(f=>[f.id,f]));
 const progressPath=path.resolve(root,'build/v16-bake-progress.json'),force=args.includes('--force');fs.mkdirSync(path.dirname(progressPath),{recursive:true});
 let baked=0;for(const def of manifest.fighters){
  if(ids&&!ids.has(def.id))continue;
  const cached=byId.get(def.id);
  if(!force&&cached?.sourceHash===sha(fs.readFileSync(path.join(game,def.url)))&&cached.profileHash===sha(JSON.stringify(box.BRASA_GAITS.profiles[def.id]))&&cached.generatorHash===sha(fs.readFileSync(__filename))&&fs.existsSync(path.join(game,cached.url)))continue;
  const start=Date.now(),result=bakeActor(def,box);fs.writeFileSync(path.join(game,result.metadata.url),result.png);byId.set(def.id,result.metadata);baked++;
  writeManifest([...byId.values()]);fs.writeFileSync(progressPath,JSON.stringify({completed:[...byId.keys()],total:manifest.fighters.length,last:def.id,lastMilliseconds:Date.now()-start,updated:new Date().toISOString()},null,2));
  console.log(def.id+' '+result.metadata.rig.walk.mode+'/'+result.metadata.rig.backwalk.mode+' '+result.metadata.effectiveStrideForward.toFixed(2)+'/'+result.metadata.effectiveStrideBack.toFixed(2)+' '+(Date.now()-start)+'ms');
 }
 console.log('Baked '+baked+' actors; '+byId.size+'/'+manifest.fighters.length+' locomotion atlases available.');
}
module.exports={inversePixels,opaqueBounds,contacts,sourceFeet,clearCrotch,buildRig,poseFor,bakeActor,writeManifest,environment};
if(require.main===module)main();
