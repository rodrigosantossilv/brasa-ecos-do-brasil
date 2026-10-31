'use strict';
/* Current authored routing regression: original anticipation/recovery and the
   reviewed Kitsune active-contact correction. No browser FPS claim. */
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const legacy=require('./renderer-v09-check.cjs');
const root=path.resolve(__dirname,'../game'),read=file=>fs.readFileSync(path.join(root,file),'utf8'),plain=value=>JSON.parse(JSON.stringify(value));
const {canvasContext,frameIndex,crop,pixels}=legacy;
function createHarness(options={}){
 const h=legacy.createHarness(options),loadInitial=h.loadAll;
 h.authored=h.window.BRASA_ASSETS.authoredFighters||[];
 h.loadInitial=loadInitial;
 h.loadAll=except=>{h.renderer.readyMotion();loadInitial(except);};
 h.loadSelected=ids=>{for(const id of ids){h.renderer.ready(id);h.renderer.readyMotion(id);}loadInitial();};
 return h;
}
function main(){
 let checks=0,renders=0;const failures=[];
 const test=(name,run)=>{try{run();checks++;console.log('PASS '+name);}catch(error){failures.push(name);console.error('FAIL '+name+'\n'+error.stack);process.exitCode=1;}};
 const h=createHarness(),r=h.renderer,defs=h.authored,groups=['idle','walk','backwalk','jump','light','heavy','kick','intro'];
 const digest=value=>crypto.createHash('sha256').update(JSON.stringify(value)).digest('hex');
 test('runtime authored manifest matches the saved manifest and contains eight disjoint eight-frame actions per fighter',()=>{
  const disk=JSON.parse(read('assets/authored-v10.json')).fighters;assert(defs.length>0,'No authored fighters exist');assert.equal(digest(defs),digest(disk),'Runtime authored manifest is stale');assert.equal(new Set(defs.map(f=>f.id)).size,defs.length);
  for(const def of defs){assert(r.hasAuthored(def.id));assert.equal(def.frames.length,64,def.id);assert.equal(def.standingHeight,128,def.id);const png=pixels(def.url);assert.equal(png.width,def.width);assert.equal(png.height,def.height);const seen=[];
   for(const group of groups){assert.equal(def.sequences[group]?.length,8,def.id+'/'+group);for(const index of def.sequences[group]){assert(Number.isInteger(index)&&index>=0&&index<64,def.id+'/'+group);seen.push(index);const f=def.frames[index];assert.equal(f.kind,group);assert(f.rasterWidth>0&&f.rasterHeight>0);assert(f.rasterX>=0&&f.rasterY>=0&&f.rasterX+f.rasterWidth<=png.width&&f.rasterY+f.rasterHeight<=png.height,def.id+'/'+group);assert([f.anchorX,f.footY].every(Number.isFinite));}}
   assert.equal(new Set(seen).size,64,def.id+' reused a sequence index');
  }
 });
 test('startup and delayed canonical portraits never request full authored or old motion atlases',()=>{
  const p=createHarness(),urls=new Set(p.authored.map(d=>d.url)),motion=new Set(p.motion.map(d=>d.url));assert(p.made.every(im=>!urls.has(im.source)&&!motion.has(im.source)));
  for(const def of p.authored){const ctx=canvasContext(),canvas={width:120,height:100,isConnected:true,getContext:()=>ctx};assert.equal(p.renderer.portrait(canvas,p.data.fighters.find(f=>f.id===def.id)),false);}
  p.loadInitial();assert(!p.made.some(im=>urls.has(im.source)||motion.has(im.source)),'A delayed portrait requested a complete action atlas');
 });
 test('loading the selected pair requests only their authored sheets and waits for both PNG decodes',()=>{
  const p=createHarness(),selected=p.authored.slice(0,2),urls=new Set(p.authored.map(d=>d.url));assert.equal(selected.length,Math.min(2,p.authored.length));p.loadInitial();
  for(const def of selected){assert.equal(p.renderer.ready(def.id),false);assert.equal(p.renderer.readyMotion(def.id),false);}
  const requested=p.made.filter(im=>urls.has(im.source));assert.equal(requested.length,selected.length);assert(requested.every(im=>selected.some(def=>def.url===im.source)));
  p.loadInitial(im=>im.source===selected.at(-1).url);assert.equal(p.renderer.readyMotion(selected.at(-1).id),false);p.loadInitial();for(const def of selected)assert(p.renderer.ready(def.id)&&p.renderer.readyMotion(def.id));
  assert.equal(p.made.filter(im=>urls.has(im.source)).length,selected.length);assert(!p.made.some(im=>p.motion.some(def=>def.id===selected[0].id&&def.url===im.source)),'Selected authored fighter requested its retired motion atlas');
 });
 h.loadAll();
 test('all eight action groups select every authored frame, with a separate forward and backward walk sequence',()=>{
  for(const def of defs){const fighter=h.data.fighters.find(f=>f.id===def.id);for(const kind of groups){const used=[];for(let n=0;n<8;n++){const phase=(n+.25)/8,options=kind==='jump'?{motion:{jumpPhase:phase}}:kind==='intro'?{authoredSequence:'intro',sequenceProgress:phase}:['walk','backwalk'].includes(kind)?{walkPhase:phase}:kind==='idle'?{}:{authoredSequence:kind,sequenceProgress:phase};const pose=kind==='intro'?'idle':kind,c=canvasContext();assert(r.draw(c,fighter,480,464,2.15,pose,1,phase,options));c.balanced();assert.equal(c.images.length,1);assert.equal(c.images[0].image.source,def.url);const index=frameIndex(c.images[0],def);assert(def.sequences[kind].includes(index),def.id+'/'+kind+'/'+index);used.push(index);renders++;}assert.equal(new Set(used).size,8,def.id+'/'+kind+' skipped a pose');}
   const front=r.animationFrame(fighter,'walk',9,null,{walkPhase:.2}),back=r.animationFrame(fighter,'backwalk',9,null,{walkPhase:.2});assert.notEqual(front.index,back.index);assert.equal(back.kind,'backwalk');
  }
 });
 test('live attacks hold their selected full-extension frame for the complete active window in both directions',()=>{
  for(const def of defs)for(const kind of ['light','heavy','kick'])for(const face of [-1,1]){
   const contact=def.contactFrames[kind];assert([3,4].includes(contact),def.id+'/'+kind);const startup=.12,active=.1,recovery=.2,samples=[];
   for(let n=0;n<contact;n++)samples.push({time:(n+.5)/contact*startup,index:n,phase:'anticipation'});
   for(const fraction of [0,.01,.25,.5,.75,.99])samples.push({time:startup+active*fraction,index:contact,phase:'contact'});
   for(let n=contact+1;n<=7;n++)samples.push({time:startup+active+((n-contact-1)+.5)/(7-contact)*recovery,index:n,phase:'recover'});
   for(const sample of samples){const attack={kind,startup,active,recovery,time:sample.time},selection=r.animationFrame(def.id,kind,sample.time,attack,{}),expected=sample.phase==='contact'?h.window.BrasaSpriteGeometry.normalContact(def.id,kind).index:def.sequences[kind][sample.index];assert(selection.authored);assert.equal(selection.index,expected,def.id+'/'+kind+'/'+sample.phase);assert.equal(selection.phase,sample.phase);const c=canvasContext();assert(r.draw(c,def.id,480,464,2.15,kind,face,sample.time,{attack}));c.balanced();assert.equal(c.images[0].image.source,def.url);assert.equal(frameIndex(c.images[0],def),selection.index);renders++;}
   const firstRecovery=r.animationFrame(def.id,kind,0,{kind,startup,active,recovery,time:startup+active+.00001},{});assert.equal(firstRecovery.index,def.sequences[kind][contact+1]);
  }
 });
 test('contact metadata selects supported forward opaque reach and ignores a one-pixel or half-transparent fringe',()=>{
  const {selectContactFrames}=require('./authored-v10-decode.cjs'),width=16,data=Buffer.alloc(width*4*4),frames=Array(5).fill(null),sequences={light:[0,1,2,3,4],heavy:[0,1,2,3,4],kick:[0,1,2,3,4]};
  frames[3]={rasterX:0,rasterY:0,rasterWidth:8,rasterHeight:4,anchorX:2};frames[4]={...frames[3],rasterX:8};const set=(x,y,alpha)=>{data[(y*width+x)*4+3]=alpha;};
  set(5,1,255);set(5,2,255);set(12,1,255);set(12,2,255);set(15,0,255);assert.equal(selectContactFrames(data,width,frames,sequences).kick,3,'One isolated forward pixel overrode a supported extension');
  set(15,1,128);assert.equal(selectContactFrames(data,width,frames,sequences).kick,3,'Alpha128 must not count as opaque support');set(15,1,129);assert.equal(selectContactFrames(data,width,frames,sequences).kick,4,'A supported farther extension was ignored');
  set(15,0,0);set(15,1,0);set(13,1,255);set(13,2,255);assert.equal(selectContactFrames(data,width,frames,sequences).kick,3,'Equal reach should retain the earlier pose');
  set(14,1,255);set(14,2,255);frames[4].anchorX=4;assert.equal(selectContactFrames(data,width,frames,sequences).kick,3,'Reach must be measured relative to the fighter anchor');
 });
 test('missing contact metadata defaults to local three, including cinematic contacts',()=>{
  const def=defs[0],saved=def.contactFrames;delete def.contactFrames;try{for(const kind of ['light','heavy','kick']){const a=r.animationFrame(def.id,kind,0,{kind,startup:.1,active:.1,recovery:.2,time:.15},{});assert.equal(a.index,def.sequences[kind][3]);}for(const [techniqueFrame,kind]of [[1,'light'],[3,'heavy'],[5,'kick']])assert.equal(r.animationFrame(def.id,'special',0,null,{techniqueFrame}).index,def.sequences[kind][3]);}finally{def.contactFrames=saved;}
 });
 test('Bento and Gloria keep their reviewed extension frames instead of retracting during contact',()=>{
  const byId=new Map(defs.map(f=>[f.id,f]));if(byId.has('bento'))assert.deepEqual(plain(byId.get('bento').contactFrames),{light:3,heavy:3,kick:3});if(byId.has('gloria'))assert.deepEqual(plain(byId.get('gloria').contactFrames),{light:3,heavy:3,kick:4});
  for(const def of defs)for(const [techniqueFrame,kind]of [[1,'light'],[3,'heavy'],[5,'kick']])assert.equal(r.animationFrame(def.id,'special',0,null,{techniqueFrame}).index,def.sequences[kind][def.contactFrames[kind]]);
 });
 test('defensive, hurt, frozen, special, throw and cinematic poses never fall back to a second costume atlas',()=>{
  const poses=['idle','guard','block','crouch','hurt','frozen','thrown','dazed','ko','lose','win','victory','dodge','special','grab','defenseStrike','lowLight','uppercut','sweep','airLight','airHeavy','airKick'];
  for(const def of defs)for(const pose of poses)for(const face of [-1,1])for(const t of [.02,.18,.37]){const c=canvasContext(),attack=['special','grab','defenseStrike'].includes(pose)?{kind:pose,special:pose==='special',type:pose==='grab'?'throw':pose==='defenseStrike'?'counter':undefined,triggered:t>.1,startup:.12,active:.1,recovery:.2,time:t}:undefined;assert(r.draw(c,def.id,480,464,2.15,pose,face,t,{attack}));c.balanced();assert.equal(c.images.length,1);assert.equal(c.images[0].image.source,def.url,def.id+'/'+pose);assert(c.images[0].nearest);assert.equal(c.images[0].alpha,1);if(pose!=='frozen')assert.equal(c.images[0].filter,'none');renders++;}
  for(const def of defs)for(let frame=0;frame<8;frame++){const c=canvasContext();assert(r.draw(c,def.id,480,464,2.15,'special',1,0,{techniqueFrame:frame}));assert.equal(c.images[0].image.source,def.url);renders++;}
 });
 test('authored footsteps are driven by travel and remain still when only elapsed time changes',()=>{
  for(const def of defs)for(const pose of ['walk','backwalk']){const a=r.animationFrame(def.id,pose,1,null,{walkDistance:40}),b=r.animationFrame(def.id,pose,99,null,{walkDistance:40});assert.equal(a.index,b.index);assert(a.authored&&b.authored);}
 });
 test('authored entrance rendering stays in its intro sequence and preserves Bento distinct companions',()=>{
  const p=createHarness({presentation:true});p.loadAll();const companion=p.window.BRASA_ASSETS.companions;for(const def of p.authored)for(const face of [-1,1])for(const progress of [.05,.25,.5,.6,.68,.75,.95]){const c=canvasContext();assert(p.window.BrasaPresentation.drawEntrance(c,p.data.fighters.find(f=>f.id===def.id),face>0?180:780,464,2.15,face,progress,{}));c.balanced();const body=c.images.filter(call=>call.image.source===def.url);assert.equal(body.length,1,def.id);if(progress>=.46&&progress<.7)assert(def.sequences.intro.includes(frameIndex(body[0],def)),def.id+' entrance did not use its dedicated row');assert.equal(body[0].alpha,1);if(def.id==='bento'){const npc=c.images.filter(call=>call.image.source===companion.url);assert.equal(npc.length,3);assert.equal(new Set(npc.map(call=>call.args[1])).size,3);assert(npc.every(call=>call.alpha===1));}renders++;}
 });
 test('real super and finisher presentation keeps both fighters on their authored atlases',()=>{
  const p=createHarness({presentation:true});p.loadAll();const authoredIds=new Set(p.authored.map(f=>f.id)),allowed=new Set(p.authored.map(f=>f.url));
  for(const def of p.authored){const other=p.authored.find(f=>f.id!==def.id);assert(other);const players=[def,other].map((d,i)=>({data:p.data.fighters.find(f=>f.id===d.id),x:i?720:240,y:0,hp:1000,pose:'idle',facing:i?-1:1}));
   for(const fraction of [.05,.3,.5,.75,.95])for(const blocked of [false,true]){const c=canvasContext(),engine={phase:'super',players,superOwner:0,superTarget:1,phaseTime:fraction*1.65,superDuration:1.65,superConnected:true,superBlocked:blocked};assert(p.window.BrasaPresentation.drawSuper(c,engine,fraction,{}));c.balanced();assert.equal(c.images.length,2);assert(c.images.every(call=>allowed.has(call.image.source)));renders+=2;}
   for(const fraction of [.05,.3,.5,.75,.95]){const c=canvasContext(),engine={phase:'finisher',players,finisherWinner:0,finisherLoser:1,phaseTime:fraction*3.8,finisherDuration:3.8};assert(p.window.BrasaPresentation.drawFinisher(c,engine,fraction,{}));c.balanced();assert.equal(c.images.length,2);assert(c.images.every(call=>allowed.has(call.image.source)));renders+=2;}
  }
 });
 test('elevated authored fighters keep their broad shadow on the arena floor without planted contact strips',()=>{
  for(const def of defs){const states=[];for(const elevation of [0,80,150]){const c=canvasContext();assert(r.draw(c,def.id,480,464-elevation,2.15,elevation?'jump':'idle',1,0,{shadowColor:'#0c0d0e',groundPlaneY:464,motion:{jumpPhase:elevation?'apex':'grounded'}}));c.balanced();const shadows=c.rects.filter(rect=>rect.color==='#0c0d0e');assert(shadows.length>=5);assert(shadows.every(rect=>Math.abs(rect.world[1]-464)<8));if(elevation)assert.equal(shadows.length,5,'An airborne actor painted planted foot contacts');states.push({width:Math.max(...shadows.map(rect=>rect.w)),alpha:Math.max(...shadows.map(rect=>rect.alpha))});renders++;}assert(states[0].width>states[1].width&&states[1].width>states[2].width);assert(states[0].alpha>states[1].alpha&&states[1].alpha>states[2].alpha);}
 });
 test('native foot-contact metadata reaches grounded contact shadows, including facing reflection',()=>{
  for(const def of defs){const index=def.sequences.idle[0],frame=def.frames[index];assert(Array.isArray(frame.footContacts)&&frame.footContacts.length,'Missing registered contacts: '+def.id);const factor=215/def.standingHeight;
   for(const face of [-1,1]){const c=canvasContext();assert(r.draw(c,def.id,480,464,2.15,'idle',face,0,{shadowColor:'#0a0b0c',groundPlaneY:464}));const contacts=c.rects.filter(rect=>rect.color==='#0a0b0c'&&rect.alpha>.6);assert(contacts.length>=frame.footContacts.length,'Contact shadow count does not match planted feet: '+def.id);
    for(const contact of frame.footContacts){const center=480+face*((contact.left+contact.right)/2-frame.anchorX)*factor;assert(contacts.some(rect=>center>=rect.world[0]-3&&center<=rect.world[0]+rect.w+3),def.id+' contact shadow is detached from the planted foot');}c.balanced();}
  }
 });
 test('unknown identities fail cleanly without allocating alternate art or unbalanced canvas state',()=>{
  const c=canvasContext();assert.equal(r.hasAuthored('missing-id'),false);assert.equal(r.draw(c,'missing-id',480,464,2.15,'idle',1,0,{}),false);assert.equal(c.images.length,0);c.balanced();
 });
 const report={checks,failed:failures,authoredFighters:defs.length,rosterFighters:h.data.fighters.length,renderCalls:renders,runtimeReadback:false,browserScreenshots:false,appearanceJudged:false};console.log(JSON.stringify(report));return report;
}
module.exports={createHarness,canvasContext,frameIndex,crop,pixels,read};if(require.main===module)main();
