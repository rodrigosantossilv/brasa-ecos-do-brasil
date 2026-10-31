'use strict';
/** Technical sprite-sheet registration only. No paint, warp, or palette conversion. */
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const PNG=require('pngjs').PNG;
const ROOT=path.resolve(__dirname,'..');
const DEFAULT_ROWS=Object.freeze(['idle','walk','backwalk','jump','light','heavy','kick','intro']);
const median=values=>{const a=values.slice().sort((x,y)=>x-y);return a.length?(a[(a.length-1)>>1]+a[a.length>>1])/2:0;};
const hash=bytes=>crypto.createHash('sha256').update(bytes).digest('hex');
function image(source){const bytes=fs.readFileSync(source),im=PNG.sync.read(bytes);return{width:im.width,height:im.height,pixels:im.data,sha256:hash(bytes)};}
function encode(width,height,pixels){return PNG.sync.write({width,height,data:pixels},{colorType:6});}
function bounds(im,x0,y0,w,h,threshold){let left=w,right=-1,top=h,bottom=-1,opaque=0,translucent=0;for(let y=0;y<h;y++)for(let x=0;x<w;x++){const a=im.pixels[((y0+y)*im.width+x0+x)*4+3];if(a>0&&a<255)translucent++;if(a>=threshold){opaque++;left=Math.min(left,x);right=Math.max(right,x);top=Math.min(top,y);bottom=Math.max(bottom,y);}}return right<left?null:{left,right:right+1,top,bottom:bottom+1,width:right-left+1,height:bottom-top+1,opaque,translucent};}
function torsoCenter(im,cell,bb,threshold){const a=bb.top+bb.height*.25,b=bb.top+bb.height*.58;let weighted=0,mass=0;for(let y=Math.ceil(a);y<Math.floor(b);y++)for(let x=bb.left;x<bb.right;x++){const alpha=im.pixels[((cell.y+y)*im.width+cell.x+x)*4+3];if(alpha>=threshold){weighted+=(x+.5)*alpha;mass+=alpha;}}return mass?weighted/mass:(bb.left+bb.right)/2;}
function normalizeRows(rows,columns){return(rows||DEFAULT_ROWS).map((row,index)=>typeof row==='string'?{name:row,row:index,count:columns,anchorMode:row==='jump'?'cell':'feet'}:{count:columns,row:index,anchorMode:row.name==='jump'?'cell':'feet',...row});}
// Select the supported forward silhouette at full extension, rather than a
// retracting pose or an isolated fringe pixel in the next cell.
function selectContactFrames(pixels,width,frames,sequences){
  const forwardReach=frame=>{
    if(!frame)return -Infinity;
    for(let x=frame.rasterWidth-1;x>=0;x--){
      let support=0;
      for(let y=0;y<frame.rasterHeight;y++)if(pixels[((frame.rasterY+y)*width+frame.rasterX+x)*4+3]>128&&++support>=2)return x-frame.anchorX;
    }
    return -Infinity;
  };
  const contacts={};
  for(const kind of ['light','heavy','kick']){
    const sequence=sequences[kind]||[],third=forwardReach(frames[sequence[3]]),fourth=forwardReach(frames[sequence[4]]);
    contacts[kind]=fourth>third?4:3;
  }
  return contacts;
}
function decodeSheet(config){
  if(!config?.source||!config.id)throw Error('source and id are required');
  if(!/^[a-z0-9_-]+$/i.test(config.id))throw Error('Invalid fighter id');
  const source=path.resolve(ROOT,config.source),im=image(source),columns=config.columns??8,gridRows=config.gridRows??8,rows=normalizeRows(config.rows,columns),threshold=config.alphaThreshold??16,padding=config.padding??6,nativeHeight=config.standingHeight??128;
  if(!Number.isInteger(columns)||!Number.isInteger(gridRows)||columns<1||gridRows<1)throw Error('Grid dimensions must be positive integers');
  if(im.width%columns||im.height%gridRows)throw Error('Source '+im.width+'x'+im.height+' is not divisible by grid '+columns+'x'+gridRows+'; provide an exact-grid export first');
  const cellW=im.width/columns,cellH=im.height/gridRows,frames=[],issues=[];
  const issue=(severity,code,frame,detail)=>issues.push({severity,code,frame,detail});
  for(const row of rows){
    if(!row.name||row.row<0||row.row>=gridRows||!Number.isInteger(row.count)||row.count<1||row.count>columns)throw Error('Invalid row definition '+JSON.stringify(row));
    for(let column=0;column<row.count;column++){
      const n=frames.length,cell={x:column*cellW,y:row.row*cellH},bb=bounds(im,cell.x,cell.y,cellW,cellH,threshold),override=config.anchors?.[n]||config.anchors?.[row.name+':'+column]||{};
      if(!bb){issue('error','empty-frame',n,row.name+':'+column);frames.push({kind:row.name,index:column,cell,bounds:null});continue;}
      const margins={left:bb.left,right:cellW-bb.right,top:bb.top,bottom:cellH-bb.bottom};
      if(Object.values(margins).some(v=>v<(config.requiredMargin??2)))issue(config.allowCutoffs?'warning':'error','cell-edge-content',n,margins);
      const fraction=bb.opaque/(cellW*cellH);if(fraction>.94)issue('error','opaque-cell-background',n,{fraction});
      frames.push({kind:row.name,index:column,cell,bounds:bb,margins,anchorMode:row.anchorMode,torsoX:torsoCenter(im,cell,bb,threshold),override});
    }
  }
  const idle=frames.filter(f=>f.kind===(config.referenceSequence||'idle')&&f.bounds),referenceHeight=Number(config.referenceHeight)||median(idle.map(f=>f.bounds.height));
  if(!referenceHeight)throw Error('A nonempty reference sequence or referenceHeight is required');
  const referenceFoot=median(idle.map(f=>f.bounds.bottom)),referenceTorsoX=median(idle.map(f=>f.torsoX)),singleScale=nativeHeight/referenceHeight;
  for(const f of frames){if(!f.bounds)continue;f.anchorX=Number.isFinite(f.override.x)?f.override.x:config.horizontalRegistration==='cell'?referenceTorsoX:f.torsoX;f.footY=Number.isFinite(f.override.y)?f.override.y:f.anchorMode==='cell'?referenceFoot:f.bounds.bottom;
    if(f.kind===(config.referenceSequence||'idle')&&Math.abs(f.bounds.height/referenceHeight-1)>.125)issue('error','idle-scale-inconsistency',frames.indexOf(f),{height:f.bounds.height,referenceHeight});
    if(f.bounds.translucent>f.bounds.opaque*.15)issue('warning','soft-alpha',frames.indexOf(f),{translucentPixels:f.bounds.translucent,visiblePixels:f.bounds.opaque});
  }
  const valid=frames.filter(f=>f.bounds),extent={left:Math.max(...valid.map(f=>f.anchorX-f.bounds.left)),right:Math.max(...valid.map(f=>f.bounds.right-f.anchorX)),above:Math.max(...valid.map(f=>f.footY-f.bounds.top)),below:Math.max(0,...valid.map(f=>f.bounds.bottom-f.footY))};
  const originX=Math.ceil(extent.left*singleScale)+padding,originY=Math.ceil(extent.above*singleScale)+padding,outCellW=originX+Math.ceil(extent.right*singleScale)+padding,outCellH=originY+Math.ceil(extent.below*singleScale)+padding,outColumns=config.outputColumns??8,width=outCellW*outColumns,height=outCellH*Math.ceil(frames.length/outColumns),pixels=Buffer.alloc(width*height*4),metadata=[],sequences={},checks=[];
  for(let n=0;n<frames.length;n++){
    const f=frames[n],rasterX=(n%outColumns)*outCellW,rasterY=Math.floor(n/outColumns)*outCellH;let count=0;const palette=new Set();
    if(f.bounds){
      // One nearest-neighbour scale for all frames, original RGBA copied exactly.
      for(let y=0;y<outCellH;y++)for(let x=0;x<outCellW;x++){
        const sx=Math.floor((x+.5-originX)/singleScale+f.anchorX),sy=Math.floor((y+.5-originY)/singleScale+f.footY);
        if(sx<0||sx>=cellW||sy<0||sy>=cellH)continue;
        const src=((f.cell.y+sy)*im.width+f.cell.x+sx)*4,a=im.pixels[src+3];if(!a)continue;
        const dest=((rasterY+y)*width+rasterX+x)*4;im.pixels.copy(pixels,dest,src,src+4);count++;palette.add(im.pixels.readUInt32BE(src));
      }
    }
    const fm={kind:f.kind,index:f.index,x0:0,y0:0,cw:outCellW,ch:outCellH,left:0,right:outCellW,top:0,bottom:outCellH,anchorX:originX,footY:originY,visibleHeight:f.bounds?f.bounds.height*singleScale:0,rasterX,rasterY,rasterWidth:outCellW,rasterHeight:outCellH};
    const contactXs=[];for(let x=0;x<outCellW;x++){let hits=0;for(let y=Math.max(0,originY-4);y<=Math.min(outCellH-1,originY);y++)if(pixels[((rasterY+y)*width+rasterX+x)*4+3]>64)hits++;if(hits>=2)contactXs.push(x);}
    fm.footContacts=[];for(const x of contactXs){let c=fm.footContacts[fm.footContacts.length-1];if(!c||x>c.right+3){c={left:x,right:x};fm.footContacts.push(c);}else c.right=x;}fm.footContacts=fm.footContacts.filter(c=>c.right-c.left>=2).map(c=>({...c,center:(c.left+c.right)/2}));
    metadata.push(fm);(sequences[f.kind]??=[]).push(n);checks.push({frame:n,sequence:f.kind,pose:f.index,sourceBounds:f.bounds,sourceAnchor:f.bounds?{x:f.anchorX,y:f.footY,mode:f.anchorMode}:null,margins:f.margins,visiblePixels:count,colors:palette.size});
  }
  const contactFrames=selectContactFrames(pixels,width,metadata,sequences);
  const url=config.url||'assets/authored-v10-'+config.id+'.png',definition={id:config.id,name:config.name||config.id,url,width,height,standingHeight:nativeHeight,frames:metadata,sequences,...sequences,contactFrames,strideNative:config.strideNative??42,authored:true,looping:config.looping||['idle','walk','backwalk'],sourceSha256:im.sha256,sourceGrid:{columns,rows:gridRows,cellWidth:cellW,cellHeight:cellH},registration:{method:'single-scale-nearest-original-rgba',scale:singleScale,referenceHeight,referenceFoot,horizontal:config.horizontalRegistration||'torso-alpha-centroid',jump:'cell-baseline; motor supplies airborne displacement'},timings:config.timings||{idle:.88,walk:.56,backwalk:.66,jump:.85,light:.31,heavy:.56,kick:.46,intro:2.8}};
  const report={id:config.id,source,sourceSha256:im.sha256,grid:{columns,rows:gridRows,cellWidth:cellW,cellHeight:cellH},frameCount:frames.length,contactFrames,singleScale,nativeHeight,referenceHeight,sourceTransparencyPreserved:true,uniformScale:true,issues,checks,manualReviewRequired:['Pose continuity and believable weight transfer','Consistent costume, face, limb count, and lighting','Foot registration, especially tucked jump and landing poses','Cell overlap and cropped effects near borders']};
  return{definition,report,pixels,width,height,png:encode(width,height,pixels)};
}
function writeDecoded(config,options={}){
  const result=decodeSheet(config),errors=result.report.issues.filter(i=>i.severity==='error');
  if(errors.length&&!options.allowInvalid){const e=new Error('Rejected '+config.id+': '+errors.length+' grid/transparency/scale issues; first '+JSON.stringify(errors[0]));e.report=result.report;throw e;}
  const out=path.resolve(ROOT,options.game||'game'),assetPath=path.resolve(out,result.definition.url);if(!assetPath.startsWith(out+path.sep))throw Error('Output URL escapes game directory');fs.mkdirSync(path.dirname(assetPath),{recursive:true});fs.writeFileSync(assetPath,result.png);return result;
}
module.exports={DEFAULT_ROWS,ROOT,decodeSheet,writeDecoded,image,encode,hash,selectContactFrames};
