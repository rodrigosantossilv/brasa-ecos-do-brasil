'use strict';
// Build-time extraction only. Runtime geometry never reads pixels or waits for
// an Image. All source PNGs and manifests remain byte-for-byte unchanged.
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const {createCanvas,loadImage}=require('@napi-rs/canvas');
const root=path.resolve(__dirname,'../game'),out=path.resolve(__dirname,'../test-results/geometry'),marker='/* BRASA_SPRITE_GEOMETRY_V14 */';
const sha=value=>crypto.createHash('sha256').update(value).digest('hex');
function scanFrame(data,width,frame){
 let minX=Infinity,minY=Infinity,maxX=-Infinity,maxY=-Infinity;
 for(let y=0;y<frame.rasterHeight;y++)for(let x=0;x<frame.rasterWidth;x++)if(data[((frame.rasterY+y)*width+frame.rasterX+x)*4+3]>48){minX=Math.min(minX,x);maxX=Math.max(maxX,x);minY=Math.min(minY,y);maxY=Math.max(maxY,y);}
 assert(Number.isFinite(minX),'Authored frame has no alpha>48 pixels');
 const sx=(frame.right-frame.left)/frame.rasterWidth,sy=(frame.bottom-frame.top)/frame.rasterHeight;
 return[frame.anchorX-frame.left-minX*sx,frame.left+(maxX+1)*sx-frame.anchorX,frame.footY-frame.top-minY*sy,frame.top+(maxY+1)*sy-frame.footY];
}
function helperSource(rows){return `${marker}
(function(global){
 'use strict';
 const rows=${JSON.stringify(rows)},kinds=['idle','walk','backwalk','jump','light','heavy','kick','intro'];
 const sequences=Object.freeze(Object.fromEntries(kinds.map((kind,row)=>[kind,Object.freeze(Array.from({length:8},(_,i)=>row*8+i))]))),actors=new Map();
 const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,Number(v)||0)),mod=(v,n)=>((v%n)+n)%n,idOf=value=>typeof value==='string'?value:value?.id;
 for(const [id,standingHeight,contacts,frames]of rows){const bounds=frames.map(([left,right,top,bottom])=>Object.freeze({left,right,top,bottom}));actors.set(id,Object.freeze({id,standingHeight,sequences,contactFrames:Object.freeze({light:contacts[0],heavy:contacts[1],kick:contacts[2]}),frames:Object.freeze(bounds),restUnion:Object.freeze(Object.fromEntries(['left','right','top','bottom'].map(key=>[key,Math.max(...bounds.slice(0,24).map(b=>b[key]))])))}));}
 function get(value){return actors.get(idOf(value))||null;}
 function contactIndex(def,kind){return def.id==='kitsune'&&kind==='kick'?4:def.contactFrames?.[kind]===4?4:3;}
 function sampleFrame(value,pose='idle',time=0,attack=null,options={}){
  const def=typeof value==='object'&&value?.sequences?value:get(value);if(!def)return null;
  const seq=def.sequences,at=(kind,n,phase)=>({authored:true,motion:false,walk:['walk','backwalk'].includes(kind),index:seq[kind][Math.max(0,Math.min(seq[kind].length-1,n))],kind,phase:phase||kind,contactMirror:phase==='contact'&&def.id==='kitsune'&&kind==='kick'});
  if(Number.isInteger(options.hitstopFrame)&&options.hitstopFrame>=0&&options.hitstopFrame<64)return{authored:true,motion:false,walk:false,index:options.hitstopFrame,kind:kinds[Math.floor(options.hitstopFrame/8)],phase:'hitstop',contactMirror:!!options.hitstopMirror};
  if(options.authoredSequence&&seq[options.authoredSequence])return at(options.authoredSequence,Math.min(7,Math.floor(clamp(options.sequenceProgress)*8)));
  if(Number.isInteger(options.techniqueFrame)){const kinds=['light','light','heavy','heavy','kick','kick','idle','idle'],kind=kinds[options.techniqueFrame]||'idle',contact=def.contactFrames?.[kind]===4?4:3;return at(kind,kind==='idle'?0:options.techniqueFrame%2?contact:1,'cinematic');}
  const strike=global.BrasaMoveTiming?.sample(attack);
  if(strike){const hit=def.contactFrames?.[strike.kind]===4?4:3,progress=clamp(strike.progress);return at(strike.kind,strike.phase==='contact'?contactIndex(def,strike.kind):strike.phase==='anticipation'?Math.min(hit-1,Math.floor(progress*hit)):Math.min(7,hit+1+Math.floor(progress*(7-hit))),strike.phase);}
  if(attack){const kick=['kick','airKick','sweep'].includes(pose)||attack.kind==='kick',kind=kick?'kick':['heavy','airHeavy','uppercut','special','grab','defenseStrike'].includes(pose)||attack.special||attack.type==='throw'?'heavy':'light';
   const t=Math.max(0,Number(attack.time)||0),start=Math.max(.001,Number(attack.startup)||.1),active=Math.max(.001,Number(attack.active)||.1),recovery=Math.max(.001,Number(attack.recovery)||.2);if(attack.type==='counter'&&!attack.triggered)return at('idle',0,'guard');
   const contact=def.contactFrames?.[kind]===4?4:3,n=t<start?Math.min(contact-1,Math.floor(t/start*contact)):t<start+active?contactIndex(def,kind):Math.min(7,contact+1+Math.floor((t-start-active)/recovery*(7-contact)));return at(kind,n,t<start?'anticipation':t<start+active?'contact':'recover');}
  const m=options.motion||{},jp=m.jumpPhase;if(typeof jp==='number')return at('jump',Math.min(7,Math.floor(clamp(jp)*8)),jp);
  if(['takeoff','rise','apex','fall','land'].includes(jp)&&['jump','land','idle','guard','walk','backwalk'].includes(pose)){const n=jp==='takeoff'?1:jp==='rise'?2:jp==='apex'?3:jp==='fall'?(m.verticalSpeed< -220?5:4):m.landingProgress>.58?7:6;return at('jump',n,jp);}
  if(pose==='jump')return at('jump',3,'apex');
  if(['walk','backwalk','run'].includes(pose)){const kind=pose==='backwalk'?'backwalk':'walk',stride=kind==='backwalk'?96:112,phase=Number.isFinite(options.walkPhase)?options.walkPhase:Number.isFinite(options.walkDistance)?options.walkDistance/stride:time/(kind==='walk'?.56:.64);return at(kind,Math.floor(mod(phase,1)*8));}
  if(['crouch','lowLight','sweep'].includes(pose))return at('jump',0,'crouch');if(['hurt','thrown','dazed','ko','lose'].includes(pose))return at('jump',6,pose);
  if(['light','heavy','kick','special','grab','uppercut','airLight','airHeavy','airKick','defenseStrike'].includes(pose))return at(pose.toLowerCase().includes('kick')?'kick':pose==='light'?'light':'heavy',4,pose);
  return at('idle',['idle','win'].includes(pose)?Math.floor(mod(time,1)*8):0,pose);
 }
 function bounds(value,pose='idle',time=0,attack=null,options={}){const def=get(value),frame=sampleFrame(value,pose,time,attack,options);if(!def||!frame)return null;const b=def.frames[frame.index];return frame.contactMirror?{left:b.right,right:b.left,top:b.top,bottom:b.bottom}:b;}
 function normalContact(value,kind){const def=get(value);if(!def||!['light','heavy','kick'].includes(kind))return null;const index=def.sequences[kind][contactIndex(def,kind)],contactMirror=def.id==='kitsune'&&kind==='kick',b=def.frames[index],right=contactMirror?b.left:b.right,left=contactMirror?b.right:b.left;return{index,contactMirror,left,right,forwardExtent:right,top:b.top,bottom:b.bottom};}
 function contactOffset(attack){const amount=Math.max(0,Number(attack?.visualContactOffset)||0);if(!amount)return 0;const t=Math.max(0,Number(attack.time)||0),start=Math.max(.001,Number(attack.startup)||.1),active=Math.max(.001,Number(attack.active)||.1),recovery=Math.max(.001,Number(attack.recovery)||.2),strike=global.BrasaMoveTiming?.sample(attack),phase=strike?.phase||(t<start?'anticipation':t<start+active?'contact':'recover'),progress=clamp(strike?.progress??(t<start?t/start:t<start+active?(t-start)/active:(t-start-active)/recovery));return amount*(phase==='contact'?1:phase==='anticipation'?Math.pow(clamp((progress-.55)/.45),2):Math.pow(1-progress,2));}
 global.BrasaSpriteGeometry=Object.freeze({get,sampleFrame,bounds,normalContact,contactOffset,alphaThreshold:48});
})(typeof window!=='undefined'?window:globalThis);
`;}
async function main(){
 const manifest=JSON.parse(fs.readFileSync(path.join(root,'assets/authored-v10.json'),'utf8')),rows=[],sources={};assert.equal(manifest.fighters.length,76);
 for(const def of manifest.fighters){assert.equal(def.frames.length,64);for(const [row,kind]of ['idle','walk','backwalk','jump','light','heavy','kick','intro'].entries())assert.deepEqual(def.sequences[kind],Array.from({length:8},(_,i)=>row*8+i));
  const bytes=fs.readFileSync(path.join(root,def.url));sources[def.id]=sha(bytes);const image=await loadImage(bytes),canvas=createCanvas(image.width,image.height),ctx=canvas.getContext('2d');ctx.drawImage(image,0,0);const pixels=ctx.getImageData(0,0,image.width,image.height).data,frames=def.frames.map(frame=>scanFrame(pixels,image.width,frame));rows.push([def.id,def.standingHeight,['light','heavy','kick'].map(kind=>def.contactFrames?.[kind]===4?4:3),frames]);}
 const file=path.join(root,'moves.js'),current=fs.readFileSync(file,'utf8'),prior=current.split(marker)[0].trimEnd()+'\n',generated=prior+helperSource(rows);if(process.argv.includes('--check'))assert.equal(current,generated,'Generated geometry differs; run npm run geometry and review game/moves.js');else fs.writeFileSync(file,generated);
 const deficits=[];for(const [id,height,contacts,frames]of rows)for(const [i,kind]of ['light','heavy','kick'].entries()){const contact=id==='kitsune'&&kind==='kick'?frames[52][0]:frames[32+i*8+contacts[i]][1];deficits.push({id,kind,idleFront:frames[0][1],contactFront:contact,requiredOffset:Math.max(0,(frames[0][1]-contact)*215/height+4)});}deficits.sort((a,b)=>b.requiredOffset-a.requiredOffset);
 fs.mkdirSync(out,{recursive:true});const report={fighters:rows.length,frames:rows.length*64,alphaThreshold:48,movesSha256:sha(fs.readFileSync(file)),manifestSha256:sha(fs.readFileSync(path.join(root,'assets/authored-v10.json'))),sources,largestContactDeficits:deficits.slice(0,30),maxRequiredOffset:deficits[0].requiredOffset,helperBytes:Buffer.byteLength(helperSource(rows))};fs.writeFileSync(path.join(out,'contact-geometry-generation.json'),JSON.stringify(report,null,2));console.log(JSON.stringify({fighters:report.fighters,frames:report.frames,helperBytes:report.helperBytes,maxRequiredOffset:report.maxRequiredOffset,largestContactDeficits:report.largestContactDeficits.slice(0,5)}));
}
module.exports={scanFrame,helperSource};if(require.main===module)main().catch(error=>{console.error(error);process.exitCode=1;});
