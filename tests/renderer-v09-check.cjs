'use strict';
/* Tests use real PNG dimensions/crops and a stateful canvas spy; no browser internals. */
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const {decode}=require('./palette-v08-lib.cjs'),mesh=require('./animation-v09-mesh.cjs');
const root=path.resolve(__dirname,'../game'),read=file=>fs.readFileSync(path.join(root,file),'utf8');
const imageCache=new Map();function pixels(source){if(!imageCache.has(source))imageCache.set(source,decode(path.join(root,source)));return imageCache.get(source);}
function crop(source,frame){const image=pixels(source),w=frame.rasterWidth,h=frame.rasterHeight,rgba=Buffer.alloc(w*h*4);for(let y=0;y<h;y++)image.pixels.copy(rgba,y*w*4,((frame.rasterY+y)*image.width+frame.rasterX)*4,((frame.rasterY+y)*image.width+frame.rasterX+w)*4);return{width:w,height:h,pixels:rgba};}
const hash=data=>crypto.createHash('sha256').update(data).digest('hex');
function canvasContext(){
 let matrix=[1,0,0,1,0,0];const stack=[],images=[],rects=[];const point=(x,y)=>[matrix[0]*x+matrix[2]*y+matrix[4],matrix[1]*x+matrix[3]*y+matrix[5]];
 const ctx={images,rects,globalAlpha:1,filter:'none',fillStyle:'#000',strokeStyle:'#000',imageSmoothingEnabled:true,lineWidth:1,
 save(){stack.push({matrix:matrix.slice(),alpha:this.globalAlpha,filter:this.filter,color:this.fillStyle,smoothing:this.imageSmoothingEnabled});},restore(){assert(stack.length,'Canvas restore without save');const s=stack.pop();matrix=s.matrix;this.globalAlpha=s.alpha;this.filter=s.filter;this.fillStyle=s.color;this.imageSmoothingEnabled=s.smoothing;},
 translate(x,y){assert([x,y].every(Number.isFinite));const p=point(x,y);matrix[4]=p[0];matrix[5]=p[1];},scale(x,y){assert([x,y].every(Number.isFinite));matrix[0]*=x;matrix[1]*=x;matrix[2]*=y;matrix[3]*=y;},rotate(a){assert(Number.isFinite(a));const[a0,b,c,d]=matrix,co=Math.cos(a),si=Math.sin(a);matrix[0]=a0*co+c*si;matrix[1]=b*co+d*si;matrix[2]=c*co-a0*si;matrix[3]=d*co-b*si;},
 fillRect(x,y,w,h){assert([x,y,w,h].every(Number.isFinite));assert(w>=0&&h>=0);rects.push({x,y,w,h,world:point(x,y),alpha:this.globalAlpha,color:this.fillStyle,matrix:matrix.slice()});},
 drawImage(image,...args){assert(args.every(Number.isFinite),'Non-finite raster rectangle');assert([2,4,8].includes(args.length));if(args.length===8){assert(args[0]>=0&&args[1]>=0&&args[2]>0&&args[3]>0);assert(args[0]+args[2]<=image.width&&args[1]+args[3]<=image.height,'Crop escaped the PNG');assert(args[6]>0&&args[7]>0);}assert(Number.isFinite(this.globalAlpha)&&this.globalAlpha>=0&&this.globalAlpha<=1);const p=args.length===8?args.slice(4):args.slice(0,2);images.push({image,args,world:point(p[0],p[1]),alpha:this.globalAlpha,filter:this.filter,matrix:matrix.slice(),nearest:this.imageSmoothingEnabled===false});},
 clearRect(){},beginPath(){},closePath(){},moveTo(){},lineTo(){},quadraticCurveTo(){},bezierCurveTo(){},arc(){},ellipse(){},stroke(){},fill(){},strokeRect(){},fillText(){},rect(){},clip(){},setLineDash(){},
 createRadialGradient(){return{addColorStop(){}};},createLinearGradient(){return{addColorStop(){}};},
 getImageData(){throw Error('No runtime pixel readback is allowed for file-origin sprites');},
 balanced(){assert.equal(stack.length,0);assert.deepEqual(matrix,[1,0,0,1,0,0]);assert.equal(this.globalAlpha,1);assert.equal(this.filter,'none');}
 };return ctx;
}
function createHarness({presentation=false}={}){
 const made=[];class Image{constructor(){this.complete=false;}set src(source){this.source=source;made.push(this);}get src(){return this.source;}load(){if(this.complete)return;const descriptor=fs.openSync(path.join(root,this.source),'r'),header=Buffer.alloc(24);try{fs.readSync(descriptor,header,0,24,0);}finally{fs.closeSync(descriptor);}this.width=this.naturalWidth=header.readUInt32BE(16);this.height=this.naturalHeight=header.readUInt32BE(20);this.complete=true;this.onload?.();}}
 const window={dispatchEvent(){}},sandbox={window,Image,Event:class{},document:{createElement(){throw Error('Canonical/motion PNG actors must not allocate readback canvases');}}};vm.createContext(sandbox);
 for(const file of ['assets.js','data.js','moves.js'])vm.runInContext(read(file),sandbox,{filename:file});
 if(!Array.isArray(window.BRASA_ASSETS.canonicalFighters))window.BRASA_ASSETS.canonicalFighters=JSON.parse(read('assets/canonical-v09.json')).fighters;if(!Array.isArray(window.BRASA_ASSETS.motionFighters))window.BRASA_ASSETS.motionFighters=JSON.parse(read('assets/motion-v09.json')).fighters;
 vm.runInContext(read('render-fighters.js'),sandbox,{filename:'render-fighters.js'});window.BrasaRender={fighter:(ctx,...args)=>window.BrasaFighters.draw(ctx,...args)};
 if(presentation)vm.runInContext(read('presentation.js'),sandbox,{filename:'presentation.js'});
 const sources=window.BRASA_ASSETS.pixelStages;window.BRASA_ASSETS.pixelStages={};vm.runInContext(read('render-stages.js'),sandbox,{filename:'render-stages.js'});window.BRASA_ASSETS.pixelStages=sources;
 const loadAll=except=>{for(let i=0;i<made.length;i++)if(!except||!except(made[i]))made[i].load();};
 return{window,sandbox,made,loadAll,renderer:window.BrasaFighters,canonical:window.BRASA_ASSETS.canonicalFighters,motion:window.BRASA_ASSETS.motionFighters,data:window.BRASA_DATA};
}
function frameIndex(call,definition){return definition.frames.findIndex(f=>[f.rasterX,f.rasterY,f.rasterWidth,f.rasterHeight].every((v,i)=>v===call.args[i]));}
module.exports={createHarness,canvasContext,frameIndex,crop,pixels,read};
