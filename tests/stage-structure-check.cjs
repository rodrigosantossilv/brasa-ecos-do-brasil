'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),crypto=require('node:crypto');
const {createCanvas,loadImage}=require('@napi-rs/canvas');
const root=path.resolve(__dirname,'../game');
const ids=['sertao','pelourinho','igarape','pampa','vila','ny_docks','neva','kyoto','longmen','venezia','london','mare','eclipse'];
const factors=[.05,.2,.4,.7,1],pending=[];let allocations=0,reads=0;
function surface(w=960,h=540){
 const canvas=createCanvas(w,h),raw=canvas.getContext('2d'),draws=[];
 const ctx=new Proxy(raw,{get(o,k){if(k==='drawImage')return(im,...args)=>{draws.push({image:im,args,m:o.getTransform()});return o.drawImage(im._native||im,...args);};if(k==='getImageData')return(...a)=>{reads++;return o.getImageData(...a);};const v=o[k];return typeof v==='function'?v.bind(o):v;},set(o,k,v){o[k]=v;return true;}});
 canvas.getContext=()=>ctx;return{canvas,ctx,raw,draws};
}
const env={window:{BRASA_ASSETS:{pixelStages:Object.fromEntries(ids.map(id=>[id,'assets/baked-stage-v07-'+id+'.png']))}},console,document:{createElement(){allocations++;return surface().canvas;}},Image:class{set src(url){pending.push(loadImage(path.join(root,url)).then(im=>{this._native=im;this.onload?.();}));}}};
vm.createContext(env);vm.runInContext(fs.readFileSync(path.join(root,'render-stages.js'),'utf8'),env);
const S=env.window.BrasaStages;
assert.equal(typeof S.worldInfo,'function','stage must expose five real full-world layer images, not a flat viewport wrapper');
(async()=>{
await Promise.all(pending);
const snapshot=x=>({x,zoom:1,width:960,height:540,worldWidth:2880,visibleWidth:960});
const digest=c=>crypto.createHash('sha256').update(c.toBuffer('image/png')).digest('hex');
const output=path.resolve(__dirname,'../test-results/stage-structure');fs.mkdirSync(output,{recursive:true});
const review=surface(1440,270*ids.length),report=[];
for(const [row,id] of ids.entries()){
 const frame=surface(),info=S.worldInfo(id);
 assert.deepEqual(Array.from(info.layers,l=>l.factor),factors,id+' depths');
 assert.equal(info.worldWidth,2880);assert.equal(info.worldHeight,540);
 assert.equal(info.people,0);assert.equal(info.particles,0);assert.equal(info.props,0);
 S.drawWorld(frame.ctx,id,960,540,0,snapshot(0));
 const layers=[...new Set(frame.draws.map(d=>d.image))];assert.equal(layers.length,5,id+' composite count');
 for(const d of frame.draws){assert.equal(d.image.width,1920);assert.equal(d.image.height,270);assert.equal(d.args.length,2,'whole-layer image only');assert.equal(d.m.a,2);assert.equal(d.m.d,2);}
 const old=frame.draws.slice();frame.draws.length=0;S.drawWorld(frame.ctx,id,960,540,0,snapshot(120));
 for(let i=0;i<5;i++)assert(Math.abs(frame.draws[i].m.e-old[i].m.e+120*factors[i])<1e-6,id+' measured depth '+i);
 const layerPixels=layers.map(c=>c.getContext('2d').getImageData(0,0,1920,270).data);
 for(let i=0;i<5;i++)for(let y=0;y<270;y++)for(let c=0;c<4;c++)for(const [a,b] of[[0,1919],[479,480],[959,960],[1439,1440]])assert.equal(layerPixels[i][(y*1920+a)*4+c],layerPixels[i][(y*1920+b)*4+c],id+'/'+i+' mirror/wrap boundary row '+y);
 // Verify all legal viewport bounds, then independently composite the five
 // captured layer pixels at regular raster samples and both world edges.
 for(let x=0;x<=1920;x++)for(const b of S.layerBounds(id,snapshot(x)))assert(b.draws.some(d=>d.screen.left<=0&&d.screen.right>=960),id+' layer bounds at camera '+x);
 const scan=surface(1,270);
 const samplePositions=[...new Set([0,1,959,960,961,1919,1920,...Array.from({length:65},(_,i)=>i*30)])].sort((a,b)=>a-b);
 for(const x of samplePositions){
  scan.raw.clearRect(0,0,1,270);S.drawWorld(scan.ctx,id,1,270,0,snapshot(x));
  const actual=scan.raw.getImageData(0,0,1,270).data;
  const columns=factors.map(f=>(Math.ceil((960*(1-f)+x*f+480)/2)-1)%1920);
  for(let y=0;y<270;y++){
   let source=0,offset=0;for(let i=0;i<5;i++){const p=(y*1920+columns[i])*4;if(layerPixels[i][p+3]){source=i;offset=p;}}
   for(let c=0;c<4;c++)assert.equal(actual[y*4+c],layerPixels[source][offset+c],id+' x='+x+' y='+y+' channel='+c);
   assert.equal(actual[y*4+3],255,id+' viewport gap');
  }
 }
 // At the reference centre the complete composition must preserve EVERY
 // source pixel. Reconstruction may fill only areas hidden behind a layer.
 const original=surface(480,270),reference=surface(480,270);
 original.raw.drawImage(await loadImage(path.join(root,'assets/baked-stage-v07-'+id+'.png')),0,0);
 S.drawWorld(reference.ctx,id,480,270,0,snapshot(960));
 assert.deepEqual(reference.raw.getImageData(0,0,480,270).data,original.raw.getImageData(0,0,480,270).data,id+' original art changed at reference centre');
 for(let col=0;col<3;col++){S.drawWorld(frame.ctx,id,960,540,0,snapshot(col*960));review.raw.drawImage(frame.canvas,col*480,row*270,480,270);if(['kyoto','pampa'].includes(id))fs.writeFileSync(path.join(output,id+'-'+['left','center','right'][col]+'.png'),frame.canvas.toBuffer('image/png'));}
 const before=digest(frame.canvas),n=allocations,r=reads;for(let t=0;t<20;t++)S.drawWorld(frame.ctx,id,960,540,t,snapshot(1920));
 assert.equal(digest(frame.canvas),before,id+' no ambient animation/loose sprites');assert.equal(allocations,n);assert.equal(reads,r);
 S.drawWorld(frame.ctx,id,960,540,1,snapshot(1920),{foreground:true});assert.equal(digest(frame.canvas),before);
 for(const x of[-2881,-1,0,1919,1920,2881]){scan.raw.clearRect(0,0,1,270);S.drawWorld(scan.ctx,id,1,270,0,snapshot(x));const p=scan.raw.getImageData(0,0,1,270).data;for(let y=0;y<270;y++)assert.equal(p[y*4+3],255,id+' wrap gap');}
 const bounds=S.layerBounds(id,snapshot(960));assert.equal(bounds.length,5);for(const b of bounds){assert.equal(b.nativeBounds.bottom,270);assert(b.draws.some(d=>d.screen.left<=0&&d.screen.right>=960),id+' internal layer border');}
 S.drawDebug(frame.ctx,id,960,540,snapshot(960));assert.notEqual(digest(frame.canvas),before,'F3 layer borders visible');
 report.push({id,layers:info.layers,worldWidth:info.worldWidth,positions:1921,rasterSamples:samplePositions.length});console.log('PASS '+id+': 1921 viewport positions, '+samplePositions.length+' raster samples, static, mirror/wrap and F3');
}
assert.equal(pending.length,13,'use only the 13 existing arena resources');
fs.writeFileSync(path.join(output,'all-arenas-left-center-right.png'),review.canvas.toBuffer('image/png'));
fs.writeFileSync(path.join(output,'report.json'),JSON.stringify(report,null,2)+'\n');
assert.equal(S.drawWorld(null,'kyoto',960,540,0,snapshot(0)),false);
assert.equal(S.worldInfo('missing'),null);console.log('PASS 13 arenas; 24,973 viewport positions; 65 complete same-scale images.');
})().catch(error=>{console.error(error);process.exitCode=1;});
