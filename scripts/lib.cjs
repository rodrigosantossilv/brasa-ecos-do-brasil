'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..'),game=path.join(root,'game');
const scripts=['assets.js','data.js','moves.js','render-fighters.js','render-stages.js','render.js','presentation.js','camera.js','combat.js','combat-fx.js','input.js','world-map.js','story.js','app.js'];
const manifests=['assets/authored-v10.json','assets/canonical-v09.json','assets/companions-v08.json','assets/prebaked-stages-v07.json'];
const hash=bytes=>crypto.createHash('sha256').update(bytes).digest('hex');
function assets(){const sandbox={window:{}};vm.createContext(sandbox);vm.runInContext(fs.readFileSync(path.join(game,'assets.js'),'utf8'),sandbox,{filename:'assets.js',timeout:10000});return sandbox.window.BRASA_ASSETS;}
function resourceNames(){const data=assets(),names=new Set();for(const actor of data.canonicalFighters||[])names.add(actor.source);for(const actor of [...data.authoredFighters||[],...data.motionFighters||[]])names.add(actor.url);if(data.companions?.url)names.add(data.companions.url);for(const url of Object.values(data.pixelStages||{}))names.add(url);for(const name of names)if(!/^assets\/[a-z0-9][a-z0-9_-]*\.png$/.test(name))throw Error('Invalid resource path');return [...names].sort();}
function manifest(){const names=[...resourceNames(),...manifests].sort();return {version:1,algorithm:'sha256',files:names.map(name=>{const bytes=fs.readFileSync(path.join(game,name));return {path:name,bytes:bytes.length,sha256:hash(bytes)};})};}
module.exports={root,game,scripts,manifests,hash,assets,resourceNames,manifest};
