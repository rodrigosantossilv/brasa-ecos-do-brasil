'use strict';
// Real app launch/render paths and real combat footprints. These checks do not
// claim visual animation quality or physical controller validation.
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const {createHarness,canvasContext}=require('./renderer-v10-check.cjs');
const root=path.resolve(__dirname,'../game'),read=name=>fs.readFileSync(path.join(root,name),'utf8'),app=read('app.js');
function section(first,last){const a=app.indexOf(first),b=app.indexOf(last,a);assert(a>=0&&b>a);return app.slice(a,b);}
function launch(){let options;const c={state:{mode:'versus',chosen:[0,1],arena:0},fighters:[{id:'bento'},{id:'ramiro'}],stages:[{}],story:{unlocked:()=>true},window:{BrasaFighters:{ready:()=>true,readyMotion:()=>true},BrasaCombat:class{constructor(value){options=value;}}},toast(){},begin(){},go(){},combatEvent(){}};vm.createContext(c);vm.runInContext(section('  function fightArtReady(','  function previewFinisher('),c);c.updateFightLoading=()=>{};c.startFight();return options;}
function gameHarness(){const h=createHarness();h.loadSelected(h.data.fighters.slice(0,2).map(f=>f.id));for(const file of ['locomotion-data.js','locomotion.js','combat.js'])vm.runInContext(read(file),h.sandbox,{filename:file});return h;}

function silhouetteGap(game, direction) {
 const [a,b]=game.players;
 const shape=p=>game.spriteFootprint(p.data,p.pose,game.simulationClock,p.attack,{motion:p.motion,walkDistance:p.walkDistance});
 const first=shape(a),second=shape(b);
 const firstFront=a.facing===direction?first.right:first.left;
 const secondFront=b.facing===-direction?second.right:second.left;
 return (b.x-a.x)*direction-firstFront-secondFront;
}

test('actual fight launch requests55percent of the previous world fighter size',()=>{
 const options=launch();assert.equal(options.fighterScale,.55);assert.equal(options.visualGeometry,true);
});

test('normal fight and entrance render at the same55percent scale as collision geometry',()=>{
 const h=gameHarness(),engine=new h.window.BrasaCombat({...launch(),fighters:h.data.fighters.slice(0,2),introDuration:.1}),calls=[],ctx=canvasContext();engine.phase='fight';
 const c={window:h.window,state:{engine,arena:0,mode:'versus',paused:false},input:{config:{reducedMotion:false}},fight:{width:480,height:270,getContext:()=>ctx},stages:h.data.stages,previousTick:null,render:{stage(){},fighter(...args){calls.push({scale:args[4],options:args[8]});}}};vm.createContext(c);
 vm.runInContext(section('  function captureFightPositions(','  function hudWrite('),c);
 const start=app.indexOf('  function drawFight('),end=app.indexOf('    engine.players.forEach((p,i)=>{hudWrite',start);vm.runInContext(app.slice(start,end)+'\n}',c);c.drawFight(0,1);assert.equal(calls.length,2);
 for(const call of calls){assert(Math.abs(call.scale-2.15*.55)<1e-10);assert.equal(call.options.fighterScale,call.scale);assert.equal(call.options.ellipseShadow,true);}
 calls.length=0;engine.phase='intro';engine.introDuration=8.8;engine.phaseTime=1;
 h.window.BrasaPresentation={drawEntrance(...args){calls.push({scale:args[4],options:args[7]});}};
 c.drawFight(1,1);assert.equal(calls.length,2);
 for(const call of calls){assert(Math.abs(call.scale-2.15*.55)<1e-10);assert.equal(call.options.fighterScale,call.scale);assert.equal(call.options.ellipseShadow,true);}
});

test('all76 walking silhouettes keep a visible gap at close contact in either facing direction and at walls',()=>{
 const h=gameHarness();
 for(const data of h.data.fighters)for(const direction of [-1,1])for(const wall of [false,true])for(const distance of [0,13,37,63,95]){
  const g=new h.window.BrasaCombat({fighters:[data,h.data.fighters[1]],fighterScale:.55,visualGeometry:true}),[a,b]=g.players;
  g.phase='fight';a.x=wall?(direction>0?g.worldMin:g.worldMax):1440;b.x=a.x+direction;
  a.facing=direction;b.facing=-direction;a.pose='walk';b.pose='backwalk';a.walkDistance=distance;b.walkDistance=distance+17;g.separatePlayers([a.x,b.x]);
  const gap=silhouetteGap(g,direction);
  assert(gap>=3.999999,`${data.id}/${direction}/${wall}: silhouettes overlap by ${-gap}px`);
  assert(a.x>=g.worldMin-1e-7&&a.x<=g.worldMax+1e-7);assert(b.x>=g.worldMin-1e-7&&b.x<=g.worldMax+1e-7);
 }
});

test('held walking input keeps visible separation when the step stops against the opponent',()=>{
 const h=gameHarness(),opponent=h.data.fighters[1];
 for(const fighter of h.data.fighters)for(const direction of [-1,1])for(const wall of [false,true]){
  const g=new h.window.BrasaCombat({mode:'versus',fighters:[fighter,opponent],fighterScale:.55,visualGeometry:true});
  const [a,b]=g.players;
  g.phase='fight';g.timer=Infinity;
  a.facing=direction;b.facing=-direction;
  b.x=wall?(direction>0?g.worldMax:g.worldMin):1440;
  a.x=b.x-direction*(g.minimumDistance(a,b,direction)+12);
  const controls=[{[direction>0?'right':'left']:true},{}];
  for(let tick=0;tick<90;tick++){
   g.step(controls);
   const gap=silhouetteGap(g,direction);
   assert(gap>=-1e-7,`${fighter.id}/${direction}/${wall} tick ${tick}: silhouettes overlap by ${-gap}px`);
  }
 }
});

test('all normal attacks still reach from neutral contact at55percent scale',()=>{
 const h=gameHarness(),opponent=h.data.fighters[1];
 for(const fighter of h.data.fighters)for(const direction of [-1,1])for(const kind of ['light','heavy','kick']){
  const g=new h.window.BrasaCombat({mode:'versus',fighters:[fighter,opponent],fighterScale:.55,visualGeometry:true});
  const [a,b]=g.players;
  g.phase='fight';g.timer=Infinity;
  a.facing=direction;b.facing=-direction;
  a.x=1440;b.x=a.x+direction*g.minimumDistance(a,b,direction);
  g.step([{[kind]:true},{}]);
  for(let tick=0;tick<90&&b.hp===b.maxHp;tick++)g.step([{},{}]);
  assert(b.hp<b.maxHp,`${fighter.id}/${direction}/${kind} lost normal contact`);
 }
});

test('jumping cleanly above the other silhouette still permits a crossover',()=>{
 const h=gameHarness(),g=new h.window.BrasaCombat({fighters:h.data.fighters.slice(0,2),fighterScale:.55,visualGeometry:true}),[a,b]=g.players;
 a.x=b.x=1440;a.y=b.visualBounds.top+10;a.grounded=false;const before=g.players.map(p=>p.x);g.separatePlayers(before);assert.deepEqual(g.players.map(p=>p.x),before);
});

test('ellipse shadow stays on the arena ground when a fighter jumps',()=>{
 const h=createHarness();h.loadSelected(['bento']);const ctx=canvasContext(),ellipses=[];ctx.ellipse=(...args)=>ellipses.push(args);
 assert(h.renderer.draw(ctx,'bento',200,330,2.15*.55,'jump',1,0,{ellipseShadow:true,groundPlaneY:455,motion:{jumpPhase:'rise'}}));
 assert.equal(ellipses.length,1);assert.equal(ellipses[0][1],455);assert(ellipses[0][2]>ellipses[0][3]);ctx.balanced();
});

test('plainF3 toggles structure outlines in training together with combat boxes',()=>{
 const h=gameHarness(),engine=new h.window.BrasaCombat({mode:'training',fighters:h.data.fighters.slice(0,2)}),listeners=[];
 const c={window:h.window,state:{screen:'fight',mode:'training',engine,debugLayers:false,lab:{open:false,boxes:false,inputs:false}},input:{config:{keyboard:[{},{}]}},document:{addEventListener(name,fn){if(name==='keydown')listeners.push(fn);}},pausedFrameDrawn:false,hud:null};vm.createContext(c);vm.runInContext(read('combat-debug.js'),h.sandbox);
 vm.runInContext(section('  function trainingAction(','  input.onMenu='),c);
 const fire=()=>{const event={code:'F3',repeat:false,preventDefault(){},stopImmediatePropagation(){this.stopped=true;}};for(const fn of listeners){fn(event);if(event.stopped)break;}};
 fire();assert.equal(c.state.debugLayers,true);assert.equal(c.state.lab.boxes,true);fire();assert.equal(c.state.debugLayers,false);assert.equal(c.state.lab.boxes,false);
 c.state.debugLayers=true;
 fire();assert.equal(c.state.debugLayers,false,'plain F3 toggles an independently enabled layer overlay');
});
