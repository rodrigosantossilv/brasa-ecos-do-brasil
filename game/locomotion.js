/* BRASA 0.16 — shared offline/runtime clock for the authored walking atlases. */
(function(global){
  'use strict';
  const phaseCount=64,idOf=value=>typeof value==='string'?value:value?.id;
  const finite=value=>Number.isFinite(value),mod=value=>((value%1)+1)%1;
  let definitions=null,actors=new Map();
  function get(value){
    const current=global.BRASA_ASSETS?.locomotionFighters;
    if(current!==definitions){definitions=current;actors=new Map((current||[]).map(def=>[def.id,def]));}
    return actors.get(idOf(value))||null;
  }
  function profile(value){return global.BRASA_GAITS?.profiles?.[idOf(value)]||null;}
  function quantizePhase(value){
    // The tiny tolerance repairs floating arithmetic at exact baked boundaries,
    // such as (n/64*stride)/stride. It never moves a visible fraction of a cell.
    return Math.floor(mod(finite(value)?value:0)*phaseCount+1e-10)%phaseCount;
  }
  function sourceCell(value,kind,phase){
    const p=profile(value),weights=kind==='backwalk'?p?.frameWeightsBack:p?.frameWeightsForward;
    const at=mod(finite(phase)?phase:0);
    if(!Array.isArray(weights)||weights.length!==8||weights.some(weight=>!finite(weight)||weight<=0))return Math.min(7,Math.floor(at*8));
    const total=weights.reduce((sum,weight)=>sum+weight,0);let end=0;
    for(let cell=0;cell<8;cell++){end+=weights[cell]/total;if(at<end-1e-12||cell===7)return cell;}
    return 7;
  }
  function sourceIndex(value,kind,phase){return(kind==='backwalk'?16:8)+sourceCell(value,kind,phase);}
  function sample(value,pose='walk',time=0,options={}){
    if(!['walk','backwalk','run'].includes(pose))return null;
    const definition=get(value);if(!definition||definition.frames?.length!==phaseCount*2)return null;
    const kind=pose==='backwalk'?'backwalk':'walk',back=kind==='backwalk';
    const effectiveStride=back?definition.effectiveStrideBack:definition.effectiveStrideForward;
    if(!finite(effectiveStride)||effectiveStride<=0)return null;
    const worldScale=finite(options.worldScale)&&options.worldScale>0?options.worldScale:1,stride=effectiveStride*worldScale;
    const rawPhase=finite(options.walkPhase)?options.walkPhase:finite(options.walkDistance)?options.walkDistance/stride:(finite(time)?time:0)/(back?.64:.56);
    const phaseIndex=quantizePhase(rawPhase),phase=phaseIndex/phaseCount,locomotionIndex=(back?phaseCount:0)+phaseIndex,frame=definition.frames[locomotionIndex];
    if(!frame||!Number.isInteger(frame.sourceIndex)||frame.sourceIndex<(back?16:8)||frame.sourceIndex>(back?23:15))return null;
    return{locomotion:true,index:frame.sourceIndex,sourceIndex:frame.sourceIndex,cell:frame.sourceIndex-(back?16:8),locomotionIndex,kind,
      phase,rawPhase:mod(rawPhase),phaseIndex,stride,effectiveStride,definition,frame,bounds:frame.bounds,footContacts:frame.footContacts||[]};
  }
  function bounds(value,pose,time,options){return sample(value,pose,time,options)?.bounds||null;}
  function envelope(value){return get(value)?.union||null;}
  global.BrasaLocomotion=Object.freeze({phaseCount,get,profile,quantizePhase,sourceCell,sourceIndex,sample,bounds,envelope});
})(typeof window!=='undefined'?window:globalThis);
