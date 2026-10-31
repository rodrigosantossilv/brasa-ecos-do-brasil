'use strict';
// Real authored PNGs rendered through native Canvas. The recorder observes the
// transforms actually used by Canvas; it does not replace their raster output.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const {createCanvas,loadImage}=require('@napi-rs/canvas');
const root=path.resolve(__dirname,'../game'),out=path.resolve(__dirname,'../test-results/fluid-render-v14');
const selected=['bento','jana','belladonna','luca','apogeu'],pending=[],pictures=[],allowed=new Set([...selected,'kitsune'].map(id=>'assets/authored-v10-'+id+'.png'));
const sha=bytes=>crypto.createHash('sha256').update(bytes).digest('hex');
class Picture{
 set src(url){this.source=url;pictures.push(this);if(!allowed.has(url))return;pending.push(loadImage(path.join(root,url)).then(image=>{this.native=image;this.width=image.width;this.height=image.height;this.onload?.();}));}
 get src(){return this.source;}
}
function surface(w=640,h=380){
 const canvas=createCanvas(w,h),raw=canvas.getContext('2d'),images=[],ellipses=[];
 const ctx=new Proxy(raw,{get(target,key){
  if(key==='drawImage')return(image,...args)=>{images.push({source:image.source,args,matrix:target.getTransform(),alpha:target.globalAlpha,filter:target.filter,nearest:!target.imageSmoothingEnabled});target.drawImage(image.native||image,...args);};
  if(key==='ellipse')return(...args)=>{ellipses.push({args,matrix:target.getTransform(),alpha:target.globalAlpha});return target.ellipse(...args);};
  const value=Reflect.get(target,key,target);return typeof value==='function'?value.bind(target):value;
 },set(target,key,value){return Reflect.set(target,key,value,target);}});
 return{canvas,ctx,raw,images,ellipses};
}
const window={dispatchEvent(){}},environment={window,Image:Picture,Event:class{},console};vm.createContext(environment);
for(const file of ['assets.js','data.js','moves.js','render-fighters.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),environment,{filename:file});
const F=window.BrasaFighters,defs=window.BRASA_ASSETS.authoredFighters;
const matrix=m=>[m.a,m.b,m.c,m.d,m.e,m.f],near=(a,b,epsilon=1e-8)=>assert(Math.abs(a-b)<=epsilon,`${a} differs from ${b}`);
function render(id,pose='idle',time=0,options={},face=1){const s=surface();assert(F.draw(s.ctx,id,300,310,2.15,pose,face,time,{shadow:false,...options}));return s;}
const body=s=>s.images.findLast(im=>im.alpha>.99),pixels=s=>s.raw.getImageData(0,0,s.canvas.width,s.canvas.height).data;
function attack(time,kind='light'){return{kind,time,startup:.12,active:.1,recovery:.2};}
async function main(){
 fs.mkdirSync(out,{recursive:true});
 for(const id of [...selected,'kitsune'])F.ready(id);await Promise.all(pending);
 let checks=0;const failures=[],test=(name,fn)=>{try{fn();checks++;console.log('PASS '+name);}catch(error){failures.push(name);console.error('FAIL '+name+'\n'+error.stack);process.exitCode=1;}};
 test('authored idle breath moves the upper silhouette 1–2 pixels in one second while feet stay planted',()=>{
  for(const id of selected){const opts={authoredSequence:'idle',sequenceProgress:0},a=body(render(id,'idle',0,opts)),b=body(render(id,'idle',.5,opts)),c=body(render(id,'idle',1,opts));
   const height=-(a.args[5]);const rise=(b.matrix.d-a.matrix.d)*height;assert(rise>=1&&rise<=2,`${id}: breath ${rise}px`);near(a.matrix.f,310);near(b.matrix.f,310);assert.deepEqual(matrix(a.matrix),matrix(c.matrix));}
 });
 test('distance-driven walk and backwalk retain their own atlas row and add bounded upper-body sway',()=>{
  for(const id of selected)for(const pose of ['walk','backwalk']){const a=body(render(id,pose,0,{walkPhase:.02,motion:{walkSpeed:1}})),b=body(render(id,pose,99,{walkPhase:.06,motion:{walkSpeed:1}}));
   assert.deepEqual(a.args.slice(0,4),b.args.slice(0,4));assert.notEqual(a.matrix.b,b.matrix.b,`${id}/${pose}: no secondary sway`);assert(Math.abs(a.matrix.b)*215<1.5);near(a.matrix.f,310);
   assert.equal(F.animationFrame(id,pose,0,null,{walkDistance:40}).index,F.animationFrame(id,pose,99,null,{walkDistance:40}).index);
   assert.notEqual(F.animationFrame(id,'walk',0,null,{walkPhase:.2}).index,F.animationFrame(id,'backwalk',0,null,{walkPhase:.2}).index);}
 });
 test('normals visibly coil backward then hold a stretched contact and settle during recovery in both directions',()=>{
  for(const id of selected)for(const kind of ['light','heavy','kick'])for(const face of [-1,1]){const draw=t=>body(render(id,kind,13,{attack:attack(t,kind)},face));
   const back=draw(.1),hit=draw(.13),held=draw(.21),late=draw(.419);assert((back.matrix.e-300)*face<-.5,`${id}/${kind}: no anticipation recoil`);assert((hit.matrix.e-300)*face>.5);assert(Math.abs(hit.matrix.a)>1.005);assert(hit.matrix.d<1);assert.deepEqual(matrix(hit.matrix),matrix(held.matrix));assert(Math.abs(late.matrix.e-300)<.1);assert(Math.abs(Math.abs(late.matrix.a)-1)<.001);}
 });
 test('attack transforms and local trails freeze when only wall clock advances, including special contact windows',()=>{
  for(const id of selected){const special={...attack(.14,'heavy'),special:true,active:.3,animation:{sequence:['light','heavy','kick']}},opts={motion:{jumpPhase:'grounded'},structureOnly:true,attack:special};
   const a=render(id,'special',1,opts),b=render(id,'special',99,opts);assert.equal(a.images.length,3);assert.equal(sha(pixels(a)),sha(pixels(b)));assert.deepEqual(a.images.map(im=>matrix(im.matrix)),b.images.map(im=>matrix(im.matrix)));
   const selection=F.animationFrame(id,'special',99,special,opts),sample=window.BrasaMoveTiming.sample(special);assert.equal(selection.phase,sample.phase);assert.equal(selection.kind,sample.kind);}
 });
 test('jump ascent stretches and landing squashes without moving the arena shadow',()=>{
  for(const id of selected){const opts={shadow:true,ellipseShadow:true,groundPlaneY:350},rise=render(id,'jump',0,{...opts,motion:{jumpPhase:'rise',verticalSpeed:280}}),land=render(id,'land',0,{...opts,motion:{jumpPhase:'land',landingProgress:.15}}),settled=render(id,'land',0,{...opts,motion:{jumpPhase:'land',landingProgress:1}});
   assert(body(rise).matrix.d>1.01);assert(body(rise).matrix.a<1);assert(body(land).matrix.d<.99);near(body(settled).matrix.d,1);for(const s of [rise,land,settled]){assert.equal(s.ellipses.length,1);assert.equal(s.ellipses[0].args[1],350);assert.deepEqual(matrix(s.ellipses[0].matrix),[1,0,0,1,0,0]);}}
 });
 test('damage has a decaying physical recoil without flash or costume recoloring',()=>{
  for(const id of selected){const opts=t=>({reaction:{time:t,duration:.28,direction:-1,strength:1},flash:true}),early=render(id,'hurt',10,opts(.02)),late=render(id,'hurt',10,opts(.279));
   assert(body(early).matrix.e<298);assert(Math.abs(body(late).matrix.e-300)<.1);for(const s of [early,late,render(id,'frozen',1,{flash:true})]){assert(s.images.every(im=>im.filter==='none'));assert(s.images.every(im=>im.alpha===1));}}
 });
 test('fast contact trails stay actor-local and use the same unfiltered authored pixels under structureOnly',()=>{
  for(const id of selected){const opts={motion:{jumpPhase:'grounded'},structureOnly:true,attack:attack(.15,'heavy')},s=render(id,'heavy',1,opts),main=body(s);assert(s.images.length>=2&&s.images.length<=3);assert(s.images.filter(im=>im.alpha<1).every(im=>im.alpha<=.16&&im.source===main.source&&im.filter==='none'&&im.nearest));
   for(const im of s.images){assert(Math.abs(im.matrix.e-main.matrix.e)<12);assert(Math.abs(im.matrix.f-main.matrix.f)<2);}assert.equal(render(id,'heavy',1,{...opts,effects:false}).images.length,1);assert.equal(render(id,'heavy',1,{...opts,attack:attack(.04,'heavy')}).images.length,1);}
 });
 test('dash leans into its relative direction while keeping the body on its foot anchor',()=>{
  for(const id of selected){const f=body(render(id,'walk',0,{walkPhase:0,motion:{dashing:true,dashDirection:1,dashProgress:.5}})),b=body(render(id,'backwalk',0,{walkPhase:0,motion:{dashing:true,dashDirection:-1,dashProgress:.5}}));assert(f.matrix.b>0);assert(b.matrix.b<0);near(f.matrix.f,310);near(b.matrix.f,310);}
 });
 test('reduced motion keeps authored contact selection but removes secondary transforms and trails',()=>{
  for(const id of selected){const s=render(id,'heavy',.5,{attack:attack(.15,'heavy'),motion:{jumpPhase:'grounded'},reducedMotion:true}),im=body(s);assert.equal(s.images.length,1);assert.deepEqual(matrix(im.matrix),[1,0,0,1,300,310]);const def=defs.find(f=>f.id===id),frame=def.frames[def.sequences.heavy[def.contactFrames.heavy]];assert.deepEqual(im.args.slice(0,4),[frame.rasterX,frame.rasterY,frame.rasterWidth,frame.rasterHeight]);}
 });
 test('standalone physics selects the same opaque frame bounds as native PNG rendering without loading Images',()=>{
  const isolated={window:{}};vm.createContext(isolated);vm.runInContext(fs.readFileSync(path.join(root,'moves.js'),'utf8'),isolated);const geometry=isolated.window.BrasaSpriteGeometry;assert(geometry,'missing standalone opaque geometry');assert.equal(geometry.get('bento').frames.length,64);
  for(const id of [...selected,'kitsune'])for(const [pose,time,opts]of [['idle',.3,{}],['walk',.2,{walkDistance:42}],['backwalk',.2,{walkDistance:42}],['hurt',0,{}],['jump',0,{motion:{jumpPhase:'rise'}}],['kick',0,{attack:attack(.15,'kick')}]]){const s=surface();assert(F.draw(s.ctx,id,300,310,1.28,pose,1,time,{...opts,shadow:false,reducedMotion:true}));const data=pixels(s);let left=640,right=0,top=380,bottom=0;for(let y=0;y<380;y++)for(let x=0;x<640;x++)if(data[(y*640+x)*4+3]>48){left=Math.min(left,x);right=Math.max(right,x+1);top=Math.min(top,y);bottom=Math.max(bottom,y+1);}const bounds=geometry.bounds(id,pose,time,opts.attack,opts);assert.deepEqual([bounds.left,bounds.right,bounds.top,bounds.bottom],[300-left,right-300,310-top,bottom-310],id+'/'+pose);}
 });
 test('Kitsune contact uses the extended backward kick mirrored toward the rival only during its active window',()=>{
  const a=attack(.15,'kick'),selection=F.animationFrame('kitsune','kick',0,a,{});assert.equal(selection.index,52);assert.equal(selection.contactMirror,true);const main=body(render('kitsune','kick',0,{attack:a,reducedMotion:true}));assert(main.matrix.a<0);const recover=F.animationFrame('kitsune','kick',0,attack(.3,'kick'),{});assert(!recover.contactMirror);assert.equal(window.BrasaSpriteGeometry.normalContact('kitsune','kick').index,52);assert(window.BrasaSpriteGeometry.normalContact('kitsune','kick').forwardExtent>75);
  const proof=surface(900,330);proof.raw.fillStyle='#17191e';proof.raw.fillRect(0,0,900,330);proof.raw.fillStyle='#eee6d7';proof.raw.font='17px sans-serif';for(const [column,label,time]of [[0,'Anticipation',.1],[1,'Contact: mirrored frame 4',.15],[2,'Recovery',.35]]){proof.raw.fillText(label,column*300+12,24);F.draw(proof.ctx,'kitsune',column*300+145,300,2.15,'kick',1,time,{attack:attack(time,'kick'),ellipseShadow:true,groundPlaneY:300});}fs.writeFileSync(path.join(out,'kitsune-active-contact.png'),proof.canvas.toBuffer('image/png'));
 });
 test('combat supplied contact weight transfer replaces the old offset and remains fixed throughout contact',()=>{
  for(const face of [-1,1]){const opts=t=>({attack:{...attack(t,'heavy'),visualContactOffset:18}}),a=body(render('bento','heavy',1,opts(.13),face)),b=body(render('bento','heavy',99,opts(.21),face)),c=body(render('bento','heavy',0,opts(.419),face));near(a.matrix.e,300+face*18);near(b.matrix.e,a.matrix.e);near(body(render('bento','heavy',1,{...opts(.13),reducedMotion:true},face)).matrix.e,300+face*18);assert(Math.abs(c.matrix.e-300)<.1);}
 });
 test('victim hitstop holds its preimpact frame and mirror without applying hurt recoil until simulation resumes',()=>{
  const def=defs.find(d=>d.id==='kitsune'),frame=def.frames[52],s=render('kitsune','hurt',99,{hitstopFrame:52,hitstopMirror:true,reaction:{time:0,duration:.28,direction:-1,strength:1}}),im=body(s);assert.deepEqual(im.args.slice(0,4),[frame.rasterX,frame.rasterY,frame.rasterWidth,frame.rasterHeight]);matrix(im.matrix).forEach((value,i)=>near(value,[-1,0,0,1,300,310][i]));assert.notDeepEqual(body(render('kitsune','hurt',99,{reaction:{time:.02,duration:.28,direction:-1,strength:1}})).args.slice(0,4),im.args.slice(0,4));
 });
 test('all 76 identities preserve 64-frame authored sequences and their sustained normal contact frames',()=>{
  const legacy=require('./renderer-v10-check.cjs'),h=legacy.createHarness();h.loadAll();assert.equal(h.authored.length,76);
  for(const def of h.authored){assert.equal(def.frames.length,64);for(const kind of ['light','heavy','kick']){const a=h.renderer.animationFrame(def.id,kind,0,attack(.12,kind),{}),b=h.renderer.animationFrame(def.id,kind,99,attack(.219,kind),{});assert.equal(a.index,h.window.BrasaSpriteGeometry.normalContact(def.id,kind).index);assert.equal(a.index,b.index);}}
 });
 const nativeCases=[['idle',.5,{}],['walk',.2,{walkPhase:.32,motion:{walkSpeed:1}}],['backwalk',.2,{walkPhase:.32,motion:{walkSpeed:1}}],['jump',.2,{motion:{jumpPhase:'rise',verticalSpeed:280}}],['land',.2,{motion:{jumpPhase:'land',landingProgress:.2}}],...['light','heavy','kick'].map(kind=>[kind,.2,{attack:attack(.17,kind),motion:{jumpPhase:'grounded'}}])];
 const nativeIds=[],atlasHashes=Object.fromEntries(defs.map(def=>[def.url,sha(fs.readFileSync(path.join(root,def.url)))])),deadFailures=[];let nativeRenders=0,shadowCount=0,deadGroundChecks=0;
 try{for(const def of defs){allowed.add(def.url);F.ready(def.id);await Promise.all(pending.splice(0));assert(F.ready(def.id),def.id+' PNG not ready');
   for(const [pose,time,opts]of nativeCases)for(const face of [-1,1]){const s=surface(960,540);assert(F.draw(s.ctx,def.id,480,464,2.15,pose,face,time,{...opts,ellipseShadow:true,groundPlaneY:464}));const data=pixels(s);let count=0;for(let p=3;p<data.length;p+=4)if(data[p]>0)count++;assert(count>2500,def.id+'/'+pose+' is empty');assert(s.images.every(im=>im.source===def.url&&im.filter==='none'&&matrix(im.matrix).every(Number.isFinite)),def.id+'/'+pose+' changed source/filter');assert.equal(s.ellipses.length,1);assert.equal(s.ellipses[0].args[1],464);near(s.raw.globalAlpha,1);assert.equal(s.raw.filter,'none');nativeRenders++;shadowCount++;}
   for(const pose of ['ko','lose'])for(const face of [-1,1]){const s=surface(960,900);assert(F.draw(s.ctx,def.id,480,464,2.15,pose,face,1,{shadow:false}));const data=pixels(s);let bottom=0;findBottom:for(let y=899;y>=0;y--)for(let x=0;x<960;x++)if(data[(y*960+x)*4+3]>48){bottom=y+1;break findBottom;}if(bottom>466)deadFailures.push({id:def.id,pose,face,bottom});deadGroundChecks++;}
   assert.equal(sha(fs.readFileSync(path.join(root,def.url))),atlasHashes[def.url],def.id+' atlas mutated');nativeIds.push(def.id);if(!selected.includes(def.id)){const picture=pictures.find(p=>p.source===def.url);picture.native=null;}}
  checks++;console.log('PASS all 76 real PNG atlases render eight fluid states in both directions at scale 2.15 with fixed ellipse shadows');
 }catch(error){failures.push('native all-76 fluid states');console.error('FAIL native all-76 fluid states\n'+error.stack);process.exitCode=1;}
 test('all 76 KO and lose silhouettes lie on the floor in both facings without sinking below ground',()=>{assert.equal(deadGroundChecks,304);assert.equal(deadFailures.length,0,`${deadFailures.length} bodies below floor: ${JSON.stringify(deadFailures.slice(0,6))}`);});
 try{const canonical=window.BRASA_ASSETS.canonicalFighters.find(def=>def.id==='bento');allowed.add(canonical.source);const fallbackWindow={BRASA_ASSETS:{canonicalFighters:[canonical],motionFighters:[],authoredFighters:[]}},fallback={window:fallbackWindow,Image:Picture,Event:class{}};vm.createContext(fallback);vm.runInContext(fs.readFileSync(path.join(root,'render-fighters.js'),'utf8'),fallback);await Promise.all(pending.splice(0));
  for(const pose of ['idle','heavy','hurt']){const s=surface(),opts={ellipseShadow:true,groundPlaneY:310,attack:pose==='heavy'?attack(.15,'heavy'):null,motion:{jumpPhase:'grounded'},reaction:pose==='hurt'?{time:.02,duration:.28,direction:-1,strength:1}:null};assert(fallbackWindow.BrasaFighters.draw(s.ctx,'bento',300,310,2.15,pose,1,.5,opts));assert(s.images.every(im=>im.source===canonical.source&&im.filter==='none'));assert(body(s));}
  checks++;console.log('PASS native canonical fallback still breathes, strikes and recoils without an authored atlas or motion sheet');
 }catch(error){failures.push('native canonical fallback');console.error('FAIL native canonical fallback\n'+error.stack);process.exitCode=1;}
 fs.mkdirSync(out,{recursive:true});const report={checks,failures,nativeFighters:nativeIds,nativeCaseCount:nativeCases.length,nativeRenders,shadowCount,deadGroundChecks,nativeCanonicalFallback:['bento'],visuallyInspectedFighters:selected,authoredRoster:defs.length,atlasHashes,runtimeHashes:Object.fromEntries(['assets.js','data.js','moves.js','render-fighters.js','assets/authored-v10.json'].map(file=>[file,sha(fs.readFileSync(path.join(root,file)))])),atlasFilesEdited:false,browserFpsMeasured:false,physicalInputEvaluated:false};fs.writeFileSync(path.join(out,'report.json'),JSON.stringify(report,null,2));
 if(!failures.length){const sheet=surface(1200,1550);sheet.raw.fillStyle='#17191e';sheet.raw.fillRect(0,0,1200,1550);sheet.raw.fillStyle='#eee6d7';sheet.raw.font='17px sans-serif';
  const states=[['Idle breath','idle',.5,{authoredSequence:'idle',sequenceProgress:0}],['Backcoil','heavy',0,{attack:attack(.1,'heavy')}],['Contact + trail','heavy',0,{attack:attack(.15,'heavy'),motion:{jumpPhase:'grounded'},structureOnly:true}],['Recovery','heavy',0,{attack:attack(.35,'heavy')}]];
  selected.forEach((id,row)=>{sheet.raw.fillText(id,12,row*300+24);states.forEach(([label,pose,time,options],col)=>{sheet.raw.fillText(label,col*300+16,row*300+47);F.draw(sheet.ctx,id,col*300+125,row*300+280,2.15,pose,1,time,{...options,ellipseShadow:true,groundPlaneY:row*300+280});});});fs.writeFileSync(path.join(out,'native-motion-contact-sheet.png'),sheet.canvas.toBuffer('image/png'));
  const frames=path.join(out,'one-second-native-loop');fs.mkdirSync(frames,{recursive:true});
  for(let n=0;n<30;n++){const t=n/30,frame=surface(1600,350);frame.raw.fillStyle='#17191e';frame.raw.fillRect(0,0,1600,350);frame.raw.fillStyle='#eee6d7';frame.raw.font='17px sans-serif';
   selected.forEach((id,i)=>{const local=t<.45?t/.45:t<.7?(t-.45)/.25:(t-.7)/.3,pose=t<.45?'heavy':t<.7?'backwalk':'idle',opts=t<.45?{attack:attack(local*.42,'heavy'),motion:{jumpPhase:'grounded'}}:t<.7?{walkPhase:local,motion:{walkSpeed:1}}:{motion:{jumpPhase:'grounded'}};frame.raw.fillText(id,320*i+16,25);F.draw(frame.ctx,id,320*i+140,320,2.15,pose,1,t,{...opts,structureOnly:true,ellipseShadow:true,groundPlaneY:320});});fs.writeFileSync(path.join(frames,String(n).padStart(3,'0')+'.png'),frame.canvas.toBuffer('image/png'));}
 }
 console.log(JSON.stringify({...report,atlasHashes:undefined,runtimeHashes:undefined,nativeFighters:nativeIds.length}));
}
main().catch(error=>{console.error(error);process.exitCode=1;});
