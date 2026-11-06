'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const env={window:{}};vm.createContext(env);vm.runInContext(fs.readFileSync(path.join(__dirname,'../game/camera.js'),'utf8'),env);const Camera=env.window.BrasaCamera;
const near=(a,b)=>assert(Math.abs(a-b)<1e-7,a+' != '+b);
const c=new Camera();c.reset([{x:1340},{x:1540}]);near(c.x,960);
c.update(1/60,[{x:1440},{x:1640}]);near(c.x,970);near(c.zoom,1);
// Even if an external reset places the pair far from the current viewport,
// following must stay a midpoint lerp, rather than jumping to an actor edge.
c.reset([{x:1340},{x:1540}]);c.update(1/60,[{x:1900},{x:2100}]);near(c.x,1016);
for(const [xs,target] of[[[50,100],0],[[2780,2830],1920]]){c.reset(xs.map(x=>({x})));for(let n=0;n<120;n++){c.update(1/60,xs.map(x=>({x})));assert(c.x>=0&&c.x<=1920);}near(c.x,target);}
for(const rate of[30,60,120]){const cam=new Camera();cam.reset([{x:1340},{x:1540}]);for(let n=0;n<rate;n++)cam.update(1/rate,[{x:1440},{x:1640}]);near(cam.x,1059.8202989700085);}
const still=c.snapshot();c.update(0,[{x:400},{x:600}]);near(c.x,still.x);
console.log('PASS midpoint lerp0.1, no containment snap, time-consistent follow, fixed zoom, zero-dt stability and both world clamps.');
