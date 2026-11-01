'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),bakerFile=path.join(root,'scripts/bake-locomotion.cjs');
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
function fixture(){
 const width=16,height=18,pixels=Buffer.alloc(width*height*4);
 for(let y=2;y<17;y++)for(let x=3;x<13;x++)if(y<9||x<7||x>9){const i=(y*width+x)*4;pixels[i]=x<8?183:67;pixels[i+1]=y<9?78:149;pixels[i+2]=x+y;pixels[i+3]=y===2?128:255;}
 return{width,height,pixels,anchorX:8,footY:17};
}
async function rendererChecks(){
 const {createCanvas,loadImage}=require('@napi-rs/canvas'),selected=['bento','jana','tiao','shen','eleanor'],pending=[],requests=[];
 const allowed=new Set(selected.flatMap(id=>['assets/authored-v10-'+id+'.png','assets/locomotion-v16-'+id+'.png']));
 class Picture{set src(url){this.source=url;requests.push(url);if(allowed.has(url))pending.push(loadImage(path.join(root,'game',url)).then(native=>{this.native=native;this.onload?.();}));}get src(){return this.source;}}
 const window={dispatchEvent(){}},environment={window,Image:Picture,Event:class{},console};vm.createContext(environment);
 for(const file of ['assets.js','data.js','locomotion-data.js','locomotion.js','moves.js','render-fighters.js'])vm.runInContext(fs.readFileSync(path.join(root,'game',file),'utf8'),environment,{filename:file});
 const F=window.BrasaFighters;for(const id of selected){F.ready(id);F.readyMotion(id);}await Promise.all(pending);
 assert(requests.includes('assets/locomotion-v16-bento.png'),'Selected fighters do not preload their new walking atlas');
 assert(!requests.includes('assets/locomotion-v16-ramiro.png'),'An unrelated fighter gait atlas loaded eagerly');
 function render(id,kind,face,options={}){
  const canvas=createCanvas(512,300),raw=canvas.getContext('2d'),calls=[];
  const ctx=new Proxy(raw,{get(target,key){if(key==='drawImage')return(pic,...args)=>{calls.push({source:pic.source,args,matrix:target.getTransform()});target.drawImage(pic.native||pic,...args);};if(key==='getImageData')return()=>{throw Error('Runtime walking reads pixels');};const value=Reflect.get(target,key,target);return typeof value==='function'?value.bind(target):value;},set(target,key,value){return Reflect.set(target,key,value,target);}});
  assert(F.draw(ctx,id,256,250,1.28,kind,face,options.time||0,{shadow:false,effects:false,walkDistance:37,motion:{jumpPhase:'grounded'},...options}));return{calls,pixels:raw.getImageData(0,0,512,300).data};
 }
 for(const id of selected)for(const kind of ['walk','backwalk']){
  const a=render(id,kind,1),b=render(id,kind,-1),reduced=render(id,kind,1,{reducedMotion:true});assert.equal(a.calls.length,1,'Walking must use one image call');assert.equal(a.calls[0].source,'assets/locomotion-v16-'+id+'.png','Walking pops to the original stance atlas');assert.equal(sha(a.pixels),sha(reduced.pixels),'Reduced motion removes or changes the core stepping pose');
  for(let y=0;y<300;y++)for(let x=0;x<512;x++)for(let c=0;c<4;c++)assert.equal(a.pixels[(y*512+x)*4+c],b.pixels[(y*512+511-x)*4+c],id+' mirrored gait drifts off its fixed root');
  const held=F.animationFrame(id,kind,0,null,{walkDistance:37,worldScale:1.28/2.15}),frozen=render(id,kind,1,{hitstopFrame:held.index,time:99});assert.equal(sha(a.pixels),sha(frozen.pixels),'Hitstop switches atlas or changes held walking pixels');
 }
 const ordinary=render('bento','idle',1);assert.equal(ordinary.calls[0].source,'assets/authored-v10-bento.png','Nonwalking art changed atlas');
 console.log('PASS native renderer: lazy selected gait assets, one draw, no pixel reads, exact mirror, reduced motion and hitstop');
}
async function main(){
 assert(fs.existsSync(bakerFile),'Missing locomotion baker: grounded RGBA retargeting has not been implemented');
 const {inversePixels,opaqueBounds,contacts,clearCrotch}=require(bakerFile),source=fixture(),feet=[{x:4.5,y:16},{x:11,y:16}],identity={hipY:9,splitX:8,sourceFeet:feet,targetFeet:feet,upperShearX:0,upperCompressionY:0};
 if(clearCrotch){const wide={width:32,height:64,anchorX:16,footY:60,pixels:Buffer.alloc(32*64*4)};for(let y=5;y<60;y++)for(let x=3;x<29;x++)wide.pixels[(y*32+x)*4+3]=y<33||x<8||x>23?255:22;assert.equal(clearCrotch(wide,16,28),32,'Faint sheet glow hides a real wide trouser gap');for(let y=33;y<60;y++)for(let x=3;x<29;x++)wide.pixels[(y*32+x)*4+3]=255;assert.equal(clearCrotch(wide,16,28),null,'A solid skirt was split into invented legs');}
 const heel=Buffer.alloc(4*4*4);heel[(3*4+2)*4+3]=255;assert.equal(contacts(heel,4,4,4).length,1,'A genuine one-pixel high heel lost floor contact');
 const a=inversePixels(source,identity,{padding:0});
 assert.equal(sha(a.pixels),sha(source.pixels),'Identity sampling changes the original costume pixels');
 const b=inversePixels(source,{...identity,targetFeet:[{x:5.5,y:16},{x:10,y:14}]},{padding:4});
 const palette=new Set();for(let i=0;i<source.pixels.length;i+=4)if(source.pixels[i+3])palette.add(source.pixels.readUInt32LE(i));
 for(let i=0;i<b.pixels.length;i+=4)if(b.pixels[i+3])assert(palette.has(b.pixels.readUInt32LE(i)),'Retarget introduced an RGBA colour absent from source');
 const bounds=opaqueBounds(b.pixels,b.width,b.height,b.anchorX,b.footY);assert.equal(bounds.bottom,0,'Supporting sole leaves the floor');
 assert(bounds.left>=0&&bounds.right>=0&&bounds.top>0,'Opaque bounds do not enclose the retargeted fighter');
 const sole=[];for(let x=0;x<b.width;x++)if(b.pixels[((b.footY-1)*b.width+x)*4+3]>48)sole.push(x-b.anchorX);
 assert(sole.length&&Math.max(...sole)<1,'Lifted foot still touches the floor');
 console.log('PASS inverse RGBA identity, palette preservation, planted floor and lifted-foot raster');
 if(process.argv.includes('--unit'))return;
 if(process.argv.includes('--renderer'))return rendererChecks();
 const manifestPath=path.join(root,'game/assets/locomotion-v16.json');assert(fs.existsSync(manifestPath),'Missing generated locomotion metadata');
 const manifest=JSON.parse(fs.readFileSync(manifestPath,'utf8'));assert.equal(manifest.fighters.length,76,'Not every fighter has a generated locomotion atlas');
 const {PNG}=require('pngjs');let frames=0;
 for(const def of manifest.fighters){
  assert.equal(def.frames.length,128,def.id+' must have64 poses in each direction');
  const sourceBytes=fs.readFileSync(path.join(root,'game',def.sourceUrl));assert.equal(sha(sourceBytes),def.sourceHash,def.id+' original atlas was modified');
  const src=PNG.sync.read(sourceBytes),dst=PNG.sync.read(fs.readFileSync(path.join(root,'game',def.url))),colours=new Set();for(let i=0;i<src.data.length;i+=4)if(src.data[i+3])colours.add(src.data.readUInt32LE(i));
  for(let i=0;i<dst.data.length;i+=4)if(dst.data[i+3])assert(colours.has(dst.data.readUInt32LE(i)),def.id+' generated an unoriginal RGBA colour');
  for(const f of def.frames){
   assert(f.sourceIndex>=8&&f.sourceIndex<24,def.id+' changed its source outfit/sequence');assert.equal(f.locomotionIndex,frames%128);assert(f.footContacts.length||f.airborne&&def.rig[f.kind].mode==='hop',def.id+' pose has no ground contact');
   if(f.airborne)assert(f.floorYOffset<0&&f.bounds.bottom<0,def.id+' intentional hop lacks explicit floor offset');
   let minX=Infinity,maxX=-Infinity,minY=Infinity,maxY=-Infinity;
   for(let y=0;y<f.rasterHeight;y++)for(let x=0;x<f.rasterWidth;x++)if(dst.data[((f.rasterY+y)*dst.width+f.rasterX+x)*4+3]>48){minX=Math.min(minX,x);maxX=Math.max(maxX,x);minY=Math.min(minY,y);maxY=Math.max(maxY,y);}
   assert.deepEqual(f.bounds,{left:f.anchorX-minX,right:maxX+1-f.anchorX,top:f.footY-minY,bottom:maxY+1-f.footY},def.id+' metadata clips actual pixels');assert(f.bounds.bottom<=0,def.id+' sole sinks below world floor');frames++;
  }
 }
 console.log('PASS '+frames+' generated poses: original hashes/RGBA palette, floor contact and opaque bounds');
 await rendererChecks();
}
if(require.main===module)main().catch(error=>{console.error(error.stack);process.exitCode=1;});
module.exports={main};
