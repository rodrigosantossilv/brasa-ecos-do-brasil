'use strict';
const assert=require('node:assert/strict'),{inversePixels,poseFor}=require('../scripts/bake-locomotion.cjs');
const source={width:40,height:64,anchorX:20,footY:60,pixels:Buffer.alloc(40*64*4)};for(let y=2;y<60;y++)for(let x=5;x<35;x++)source.pixels.writeUInt32LE(0xff224488,(y*40+x)*4);
const feet=[{x:12,y:59},{x:28,y:59}],rig={mode:'unified',hipY:30,split:20,feet:[feet],base:feet,mid:20,neutralFeet:[12,28],duty:.62,lift:1.5,strideNative:28};
const a=poseFor(source,rig,0,0,{upperBody:{},lowerBody:{}},'walk'),b=poseFor(source,rig,0,7/64,{upperBody:{},lowerBody:{}},'walk');assert(Math.abs((a.targetFeet[0].x)-(b.targetFeet[0].x+28*7/64))<1e-8,'Unified grounded feet slide horizontally during the support phase');
const image=inversePixels(source,{hipY:30,splitX:20,sourceFeet:feet,targetFeet:[{x:4,y:59},{x:36,y:59}],upperShearX:0,upperCompressionY:0},{padding:0});assert(image.pixels[(44*40+20)*4+3]>48,'Continuous trousers tear apart at the arbitrary middle split');console.log('PASS horizontal support compensation and connected lower-body warp');
if(!process.argv.includes('--unit')){
 const fs=require('node:fs'),path=require('node:path'),{PNG}=require('pngjs'),manifest=JSON.parse(fs.readFileSync(path.join(__dirname,'../game/assets/locomotion-v16.json'),'utf8')),authored=JSON.parse(fs.readFileSync(path.join(__dirname,'../game/assets/authored-v10.json'),'utf8'));assert.equal(manifest.fighters.length,76);const failures=[];let segments=0,maxDrift=0;const images=new Map(),originals=new Map();
 for(const def of manifest.fighters)for(const kind of ['walk','backwalk']){
  const r=def.rig[kind];if(r.mode==='glide')continue;if(!images.has(def.id)){images.clear();images.set(def.id,PNG.sync.read(fs.readFileSync(path.join(__dirname,'../game',def.url))));}const raster=images.get(def.id);const stride=r.effectiveStride*def.standingHeight/215,direction=kind==='walk'?1:-1,frames=def.frames.filter(f=>f.kind===kind);
  for(let side=0;side<(r.mode==='step'?2:1);side++){
   if(!originals.has(def.id)){originals.clear();originals.set(def.id,PNG.sync.read(fs.readFileSync(path.join(__dirname,'../game',def.sourceUrl))));}const original=originals.get(def.id),sourceFrame=authored.fighters.find(f=>f.id===def.id).frames[0],sf=r.sourceFeet[side],candidates=[];
   for(let y=Math.max(0,sf.y-7);y<=sf.y;y++)for(let x=Math.max(0,Math.round(sf.x)-8);x<Math.min(sourceFrame.rasterWidth,Math.round(sf.x)+9);x++){const offset=((sourceFrame.rasterY+y)*original.width+sourceFrame.rasterX+x)*4;if(original.data[offset+3]>48)candidates.push({x,y,color:original.data.readUInt32LE(offset),score:Math.abs(x-sf.x)+Math.abs(y-(sf.y-3))*.6});}
   const frequencies=new Map();for(let y=0;y<sourceFrame.rasterHeight;y++)for(let x=0;x<sourceFrame.rasterWidth;x++){const rgba=original.data.readUInt32LE(((sourceFrame.rasterY+y)*original.width+sourceFrame.rasterX+x)*4);frequencies.set(rgba,(frequencies.get(rgba)||0)+1);}
   candidates.sort((a,b)=>frequencies.get(a.color)-frequencies.get(b.color)||a.score-b.score);const marker=candidates[0];assert(marker,def.id+' missing original shoe pixel');
   let samples=[];const finish=()=>{if(samples.length>=5){const drift=Math.max(...samples)-Math.min(...samples);maxDrift=Math.max(maxDrift,drift);segments++;if(drift>5)failures.push({id:def.id,kind,side,drift});}samples=[];};
   for(const f of frames){assert.equal(f.textureSourceIndex,0,'Outfit texture changes during walking');if(!f.support[side]||f.airborne){finish();continue;}
    const u=((f.phase+(r.mode==='step'?side*.5:0))%1),expected=(r.mode==='step'?r.neutralFeet[side]:r.sourceFeet[0].x)+(f.anchorX-r.splitX)+direction*(stride*r.supportFraction/2-stride*u);
    // A claw/heel can have multiple separated sole pixels. Group islands of
    // the SAME shoe; selecting whichever island is nearest invents foot drift.
    const ou=(f.phase+(1-side)*.5)%1,q=(ou-r.supportFraction)/(1-r.supportFraction),otherPath=ou<r.supportFraction?stride*r.supportFraction/2-stride*ou:-stride*r.supportFraction/2+stride*r.supportFraction*q*q*(3-2*q),other=r.neutralFeet[1-side]+(f.anchorX-r.splitX)+direction*otherPath;
    const expectedMarker=expected+marker.x-sf.x,found=[];for(let y=Math.max(0,f.footY-15);y<f.footY;y++)for(let x=Math.max(0,Math.floor(expectedMarker-sf.width/2-8));x<=Math.min(f.rasterWidth-1,Math.ceil(expectedMarker+sf.width/2+8));x++){
      if(raster.data.readUInt32LE(((f.rasterY+y)*raster.width+f.rasterX+x)*4)===marker.color)found.push(x);}
    if(!found.length){finish();continue;}const contact={center:found.reduce((a,b)=>Math.abs(a-expectedMarker)<Math.abs(b-expectedMarker)?a:b)};
    samples.push(contact.center-f.anchorX+direction*f.phase*stride);
   }finish();
  }
 }
 assert.deepEqual(failures,[],'Rasterized supporting feet drift through the floor');assert(segments>200);console.log(JSON.stringify({fighters:76,supportSegments:segments,maxNativeDrift:maxDrift,intentionalGlides:['nara','eleanor','umbriel']}));
}
