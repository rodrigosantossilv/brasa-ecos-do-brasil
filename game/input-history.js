/* Logical input history; independent of keyboard/gamepad polling and display Hz. */
(function(global){
 'use strict';
 const actions=['left','right','up','down','light','heavy','kick','special','special2','special3','grab','block','super'];
 function direction(input,facing){return(input.up&&!input.down?8:input.down&&!input.up?2:5)+(Number(!!input.right)-Number(!!input.left))*facing;}
 class BrasaInputHistory{
  constructor(limit=120){this.limit=limit;this.entries=[];this.previous={};this.consumedThrough=-1;}
  record(input,facing,frame,actionFrame=frame){
   const pressed=actions.filter(k=>input.pressed?.[k]||input[k]&&!this.previous[k]),released=actions.filter(k=>!input[k]&&this.previous[k]);
   const entry={frame,actionFrame,facing,direction:direction(input,facing),absolute:direction(input,1),held:actions.filter(k=>input[k]),pressed,released};
   this.entries.push(entry);if(this.entries.length>this.limit)this.entries.shift();this.previous=Object.fromEntries(actions.map(k=>[k,!!input[k]]));return entry;
  }
  motion(sequence,window=24){
   const last=this.entries.at(-1);if(!last)return null;let at=sequence.length-1,end=null,start=null,gap=0;
   for(let i=this.entries.length-1;i>=0;i--){const e=this.entries[i];if(last.frame-e.frame>=window||e.facing!==last.facing||e.frame<=this.consumedThrough)break;
    if(e.direction===sequence[at]){if(end===null)end=e.frame;start=e.frame;at--;gap=0;if(at<0)return{startFrame:start,endFrame:end,sequence:sequence.join('')};}
    else if(e.direction!==5&&e.direction!==sequence[at+1]&&++gap>4)return null;
   }return null;
  }
  consumeMotion(match){if(match)this.consumedThrough=Math.max(this.consumedThrough,match.endFrame);}
  snapshot(){return this.entries.map(e=>({...e,held:[...e.held],pressed:[...e.pressed],released:[...e.released]}));}
 }
 global.BrasaInputHistory=BrasaInputHistory;
})(typeof window!=='undefined'?window:globalThis);
