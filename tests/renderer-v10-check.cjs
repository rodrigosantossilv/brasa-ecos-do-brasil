'use strict';
/* Authored animation routing/loading checks. These do not judge drawing quality or browser FPS. */
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const legacy=require('./renderer-v09-check.cjs');
const root=path.resolve(__dirname,'../game'),read=file=>fs.readFileSync(path.join(root,file),'utf8'),plain=value=>JSON.parse(JSON.stringify(value));
const {canvasContext,frameIndex,crop,pixels}=legacy;
function createHarness(options={}){
 const h=legacy.createHarness(options),loadInitial=h.loadAll;
 for(const name of ['combat-frame-data.js','input-history.js'])vm.runInContext(read(name),h.sandbox,{filename:name});
 h.authored=h.window.BRASA_ASSETS.authoredFighters||[];
 h.loadInitial=loadInitial;
 h.loadAll=except=>{h.renderer.readyMotion();loadInitial(except);};
 h.loadSelected=ids=>{for(const id of ids){h.renderer.ready(id);h.renderer.readyMotion(id);}loadInitial();};
 return h;
}
module.exports={createHarness,canvasContext,frameIndex,crop,pixels,read};
