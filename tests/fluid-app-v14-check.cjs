'use strict';
/* Runs the real app RAF/input/interpolation code with the real combat engine.
   Canvas spies inspect app arguments; these checks do not judge art or physical controls. */
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const {createHarness,canvasContext}=require('./renderer-v10-check.cjs');
const root=path.resolve(__dirname,'../game'),read=name=>fs.readFileSync(path.join(root,name),'utf8'),app=read('app.js');
const failures=[],evidence={};let checks=0;
function test(name,run){try{run();checks++;console.log('PASS '+name);}catch(error){failures.push(name);console.error('FAIL '+name+'\n'+error.stack);process.exitCode=1;}}
function slice(first,last){const a=app.indexOf(first),b=app.indexOf(last,a);assert(a>=0&&b>a,'App section missing: '+first);return app.slice(a,b);}
const near=(actual,expected,label)=>assert(Math.abs(actual-expected)<1e-8,`${label}: ${actual} != ${expected}`);
const plain=value=>JSON.parse(JSON.stringify(value));

function fixture({draw=false,world=false}={}){
 const h=createHarness();h.loadSelected(h.data.fighters.slice(0,2).map(f=>f.id));vm.runInContext(read('combat.js'),h.sandbox,{filename:'combat.js'});
 const engine=new h.window.BrasaCombat({mode:'versus',fighters:h.data.fighters.slice(0,2),introDuration:.1,fighterScale:1,visualGeometry:true,seed:42});for(let n=0;n<7;n++)engine.update(1/60,[{},{}]);assert.equal(engine.phase,'fight');
 let pads=[],now=0;const listeners={},ctx=canvasContext(),calls=[],frames=[],seen=[];
 const c={window:{...h.window,addEventListener(){}},document:{activeElement:{closest:()=>null},addEventListener(name,fn){listeners[name]=fn;},querySelectorAll:()=>[]},navigator:{getGamepads:()=>pads},localStorage:{getItem:()=>null,setItem(){}},matchMedia:()=>({matches:false}),performance:{now:()=>now},console,
  state:{screen:'fight',engine,arena:0,mode:'versus',paused:false},fight:{width:480,height:270,getContext:()=>ctx},stages:h.data.stages,previousTick:null,shake:0,lastTime:0,accumulator:0,uiClock:0,pausedFrameDrawn:false,hud:null,hero:null,preview:null,detail:null,worldMap:null,
  requestAnimationFrame(){},updateFightWorld(){},updatePadInfo(){},$:()=>({textContent:'◈ TECLADO'}),quickFightHelpMarkup:()=>'',fightHelpMarkup:()=>'',drawFighterPreview(){throw Error('Offscreen fighter preview rendered during fight');},
  render:{stage(){},fighter(canvas,...args){calls.push({data:args[0],x:args[1],groundY:args[2],scale:args[3],pose:args[4],face:args[5],time:args[6],options:args[7]});if(draw)return h.renderer.draw(canvas,...args);}},drawEffects(){},Object,Map};
 vm.createContext(c);vm.runInContext(read('input.js'),c,{filename:'input.js'});c.input=new c.window.BrasaInput();
 vm.runInContext(slice('  function captureFightPositions(','  function hudWrite('),c);
 if(world){vm.runInContext(read('camera.js'),c,{filename:'camera.js'});vm.runInContext(slice('  function resetFightWorld(','  function combatEvent('),c);c.resetFightWorld();}
 const drawStart=app.indexOf('  function drawFight('),drawEnd=app.indexOf('    engine.players.forEach((p,i)=>{hudWrite',drawStart);assert(drawStart>=0&&drawEnd>drawStart);vm.runInContext(app.slice(drawStart,drawEnd)+'\n  }',c);
 const actualDraw=c.drawFight;c.drawFight=(time,alpha)=>{frames.push({time,alpha});if(draw)actualDraw(time,alpha);};
 vm.runInContext(slice('  function frame(now)','  // Read-only diagnostic'),c);
 const actualUpdate=engine.update.bind(engine);engine.update=(dt,controls)=>{assert.equal(dt,1/60);seen.push(plain(controls));actualUpdate(dt,controls);};
 const f={h,c,engine,ctx,calls,frames,seen,actualDraw,
  key(code,type='keydown'){listeners[type]({code,repeat:false,preventDefault(){}});},
  tap(code){this.key(code);this.key(code,'keyup');},
  pads(value){pads=value;},
  frame(value){now=value;c.frame(value);},
  advance(count){const initial=seen.length;for(let n=0;n<count;n++)this.frame(now+1000/60+.000001);assert.equal(seen.length-initial,count,'advance must execute the requested fixed steps');},
  get now(){return now;}
 };return f;
}

test('fight launch restores full visual geometry without multiplying legacy movement or damage scale',()=>{
 let options;const c={state:{mode:'versus',chosen:[0,1],arena:0},fighters:[{id:'a'},{id:'b'}],stages:[{}],story:{unlocked:()=>true},window:{BrasaFighters:{ready:()=>true,readyMotion:()=>true},BrasaCombat:class{constructor(value){options=value;}}},toast(){},begin(){},go(){},combatEvent(){}};vm.createContext(c);
 vm.runInContext(slice('  function fightArtReady(','  function previewFinisher('),c);c.updateFightLoading=()=>{};c.startFight();assert(options,'Fight did not launch');assert.equal(options.fighterScale,1);assert.equal(options.visualGeometry,true);
 const f=fixture();assert.equal(f.engine.fighterScale,1);assert.equal(f.engine.scaledGeometry,true);assert(f.engine.fighterMargin>55,'Opaque authored bounds are absent');evidence.geometry={scale:f.engine.fighterScale,margin:f.engine.fighterMargin};
});

test('the app hands all76 restored opaque footprints to the real camera without clipping its opening pair',()=>{
 const h=createHarness();for(const name of ['combat.js','camera.js'])vm.runInContext(read(name),h.sandbox,{filename:name});const c={window:h.window,state:{arena:0},stages:h.data.stages,input:{config:{reducedMotion:false}},previousTick:null};vm.createContext(c);vm.runInContext(slice('  function resetFightWorld(','  function combatEvent('),c);const rows=[];
 for(const fighter of h.data.fighters){const engine=new h.window.BrasaCombat({fighters:[fighter,h.data.fighters[1]],fighterScale:1,visualGeometry:true});c.state.engine=engine;c.resetFightWorld();const view=c.state.camera.snapshot();assert.equal(view.fighterMargin,engine.fighterMargin,fighter.id+' camera margin');assert.equal(engine.viewport.fighterMargin,view.fighterMargin,fighter.id+' viewport margin');for(const p of engine.players){const box=engine.visualBox(p);assert(box.left>=view.x&&box.right<=view.x+view.visibleWidth,fighter.id+' opening silhouette escaped its view');}rows.push({id:fighter.id,margin:view.fighterMargin});}
 evidence.rosterMargins={fighters:rows.length,largest:rows.sort((a,b)=>b.margin-a.margin).slice(0,5)};
});

test('real RAF executes exactly360 fixed updates in6seconds at60/120/144Hz with identical combat state',()=>{
 const results=[];
 for(const hz of [60,120,144]){
  const f=fixture(),states=f.c.input.states.bind(f.c.input);let injected=-1;
  // Injection is tied to the next simulation step, so every display rate sees
  // the same sequence through the real input module, including catch-up steps.
  f.c.input.states=()=>{const step=f.seen.length;if(step!==injected){injected=step;if(step===0)f.key('KeyD');if(step===36)f.key('KeyD','keyup');if(step===45)f.tap('KeyW');if(step===95)f.tap('KeyF');if(step===135)f.key('KeyA');if(step===180)f.key('KeyA','keyup');if(step===210)f.tap('KeyH');}return states();};
  f.frame(0);for(let n=1;n<=6*hz;n++)f.frame(n*1000/hz);
  results.push({hz,steps:f.seen.length,accumulator:f.c.accumulator,state:plain({clock:f.engine.clock,simulationClock:f.engine.simulationClock,seed:f.engine.seed,timer:f.engine.timer,players:f.engine.players,projectiles:f.engine.projectiles})});
 }
 evidence.refreshRates=results.map(({hz,steps,accumulator})=>({hz,steps,accumulator}));
 for(const row of results)assert.equal(row.steps,360,`${row.hz}Hz dropped a fixed step`);
 for(const row of results.slice(1))assert.deepEqual(row.state,results[0].state,`${row.hz}Hz diverged from60Hz authoritative state`);
});

test('keyboard taps survive RAF polls with no update and are consumed exactly once by a catch-up frame',()=>{
 const f=fixture();f.frame(0);f.tap('KeyF');f.frame(1000/144);f.frame(2000/144);assert.equal(f.seen.length,0);assert(f.c.input.states()[0].pressed.light,'No-step RAF swallowed a keyboard pulse');f.frame(3000/144);assert.equal(f.seen.length,1);assert(f.seen[0][0].pressed.light);assert.equal(f.engine.players[0].attack?.kind,'light');assert(!f.c.input.states()[0].pressed.light);
 const catchup=fixture();catchup.tap('KeyH');catchup.frame(50);assert.equal(catchup.seen.length,3);assert.equal(catchup.seen.filter(value=>value[0].pressed.kick).length,1);assert.equal(catchup.seen.filter(value=>value[0].kick).length,1);evidence.keyboardPulse={noUpdatePolls:2,catchupSteps:3,presses:1};
});

test('released gamepad taps survive multiple no-update polls before reaching the actual combat engine',()=>{
 const f=fixture(),pad={index:2,id:'DualSense Wireless Controller',connected:true,mapping:'standard',axes:[0,0,0,0],buttons:Array.from({length:17},()=>({pressed:false,value:0}))};f.pads([pad]);f.frame(0);pad.buttons[0]={pressed:true,value:1};f.frame(1000/144);pad.buttons[0]={pressed:false,value:0};f.frame(2000/144);assert.equal(f.seen.length,0);assert(f.c.input.states()[0].pressed.light);f.frame(3000/144);assert.equal(f.engine.players[0].attack?.kind,'light');assert(!f.c.input.states()[0].pressed.light);evidence.gamepadPulse={releasedBeforeUpdate:true,updates:1};
});

test('hitstop keeps first-frame taps alive through6/8/10frozen steps plus the six-step action buffer',()=>{
 for(const frozenSteps of [6,8,10]){
  const f=fixture(),p=f.engine.players[0];f.engine.freeze=frozenSteps/60;p.stun=1;f.tap('KeyF');f.advance(frozenSteps);assert(!p.attack,'Attack progressed inside hitstop');assert(p.inputBuffer,'Hitstop expired its buffered tap');f.advance(5);p.stun=0;f.advance(1);assert.equal(p.attack?.kind,'light',`${frozenSteps}-step hitstop lost the tap before the sixth actionable step`);
 }
 const expired=fixture(),p=expired.engine.players[0];expired.engine.freeze=10/60;p.stun=1;expired.tap('KeyF');expired.advance(10);expired.advance(7);p.stun=0;expired.advance(1);assert(!p.attack,'The action buffer exceeded six actionable steps');evidence.hitstopBuffer={frozenSteps:[6,8,10],availableActiveSteps:6,expiredAfterActiveSteps:7};
});

test('fighter size is2.15 and its animation time comes from the interpolated fixed simulation clock',()=>{
 const f=fixture({draw:true}),p=f.engine.players[0];f.engine.simulationClock=2;p.pose='idle';f.c.captureFightPositions(f.engine);f.engine.simulationClock=2+1/60;f.actualDraw(900,.5);f.ctx.balanced();const first=f.calls[0];assert(first);assert.equal(first.scale,2.15);assert.equal(first.options.fighterScale,2.15);near(first.time,2+1/120,'Interpolated actor animation clock');assert.equal(first.options.groundPlaneY,455);assert.equal(first.options.ellipseShadow,true);evidence.draw={scale:first.scale,clock:first.time,wallTime:900};
});

test('every frozen step, including the final one, holds position, attack pose and sprite clock',()=>{
 const f=fixture({draw:true}),p=f.engine.players[0];f.tap('KeyF');f.advance(1);f.calls.length=0;f.engine.freeze=6/60;
 const before={x:p.x,y:p.y,time:p.attack.time,clock:f.engine.simulationClock},samples=[];assert(Number.isFinite(before.clock),'A dedicated fixed simulationClock is required');
 for(let n=0;n<6;n++){f.advance(1);f.actualDraw(100+n,.5);samples.push(f.calls.at(-2).time);near(p.x,before.x,'Frozen x');near(p.y,before.y,'Frozen y');near(p.attack.time,before.time,'Frozen attack');near(f.engine.simulationClock,before.clock,'Frozen engine animation clock');}
 assert(samples.every(value=>Math.abs(value-before.clock)<1e-8),'drawFight advanced sprites during frozen RAFs');f.advance(1);assert(f.engine.simulationClock>before.clock,'Animation did not resume after hitstop');f.ctx.balanced();evidence.frozenClock={steps:6,clock:before.clock,drawSamples:samples};
});

test('the real camera and RAF hold the on-screen fighter through every hitstop step including the final one',()=>{
 const f=fixture({world:true}),[p,enemy]=f.engine.players,distance=f.engine.minimumDistance(p,enemy)+30;p.x=1440-distance/2;enemy.x=1440+distance/2;f.c.resetFightWorld();f.key('KeyD');f.advance(6);f.key('KeyD','keyup');f.tap('KeyF');
 for(let n=0;n<60&&f.engine.freeze<=0;n++)f.advance(1);assert(f.engine.freeze>0&&enemy.hp<enemy.maxHp,'The real approach and normal failed to create contact hitstop');
 const ticks=Math.round(f.engine.freeze*60),worldX=p.x,clock=f.engine.simulationClock,start=f.c.state.camera.snapshot(),samples=[{x:start.x,screenX:p.x-start.x}];
 for(let n=0;n<ticks;n++){f.advance(1);const view=f.c.interpolatedFightCamera(f.engine,f.c.accumulator*60);samples.push({x:view.x,screenX:(p.x-view.x)*view.zoom});near(p.x,worldX,'Frozen authoritative fighter position');near(f.engine.simulationClock,clock,'Frozen actor clock with actual camera');}
 evidence.hitstopCamera={ticks,startX:start.x,lastX:samples.at(-1).x,onScreenDrift:samples.at(-1).screenX-samples[0].screenX};
 for(const sample of samples)near(sample.screenX,samples[0].screenX,'Camera moved a frozen on-screen sprite');assert.equal(f.engine.freeze,0);f.advance(1);assert(f.c.state.camera.x!==start.x,'Camera smoothing did not resume after hitstop');
});

test('dash movement and copied motion interpolate together while teleports snap actor and camera consistently',()=>{
 const f=fixture(),p=f.engine.players[0];let camera={x:1000,zoom:1,width:960,visibleWidth:960};f.c.state.camera={snapshot:()=>({...camera})};p.x=1300;p.y=0;p.walkDistance=20;Object.assign(p.motion,{jumpPhase:'grounded',phaseTime:.1,moveSpeed:400});f.c.captureFightPositions(f.engine);p.x=1320;p.walkDistance=40;Object.assign(p.motion,{phaseTime:.1+1/60,moveSpeed:600});camera.x=1010;
 const before=JSON.stringify(f.engine),view=f.c.interpolatedFightEngine(f.engine,.5),cameraView=f.c.interpolatedFightCamera(f.engine,.5);near(view.players[0].x,1310,'Dash x');near(view.players[0].walkDistance,30,'Dash travel cycle');near(view.players[0].motion.phaseTime,.1+1/120,'Dash motion phase');near(view.players[0].motion.moveSpeed,500,'Dash motion speed');near(cameraView.x,1005,'Dash camera');assert.notEqual(view.players[0].motion,p.motion);assert.equal(JSON.stringify(f.engine),before);
 f.c.captureFightPositions(f.engine);p.x+=240;camera.x+=120;const teleported=f.c.interpolatedFightEngine(f.engine,.5);assert.equal(teleported.players[0].x,p.x);assert.equal(f.c.interpolatedFightCamera(f.engine,.5).x,camera.x);evidence.interpolation={dashX:view.players[0].x,dashCamera:cameraView.x,teleportX:p.x,teleportCamera:camera.x};
});

test('the actual double tap dash enters the app snapshot and renders between its fixed positions',()=>{
 const f=fixture(),p=f.engine.players[0];f.tap('KeyD');f.advance(1);f.advance(1);f.tap('KeyD');f.advance(1);assert(p.dashTime>0,'The real input double tap did not start dash');
 let previous=f.c.previousTick.players[0],view=f.c.interpolatedFightEngine(f.engine,.5).players[0];assert(p.x>previous.x,'Dash did not advance');near(view.x,(previous.x+p.x)/2,'Real dash interpolation');near(view.walkDistance,(previous.walkDistance+p.walkDistance)/2,'Real dash distance');assert.equal(view.motion.dashing,true);assert.equal(previous.motion.dashing,false);near(view.motion.dashProgress,p.motion.dashProgress,'Dash startup must snap from the prior idle counter');
 f.advance(1);previous=f.c.previousTick.players[0];view=f.c.interpolatedFightEngine(f.engine,.5).players[0];assert.equal(previous.motion.dashing,true);near(view.motion.dashProgress,(previous.motion.dashProgress+p.motion.dashProgress)/2,'Continuing dash animation interpolation');
});

test('same-action attack timing interpolates, new actions and jump phase changes start from current counters',()=>{
 const f=fixture(),p=f.engine.players[0];f.tap('KeyF');f.advance(1);p.attack.time=.04;f.c.captureFightPositions(f.engine);p.attack.time=.04+1/60;const saved=JSON.stringify(f.engine),view=f.c.interpolatedFightEngine(f.engine,.5);near(view.players[0].attack.time,.04+1/120,'Attack timing');assert.notEqual(view.players[0].attack,p.attack);assert.equal(JSON.stringify(f.engine),saved);
 f.c.captureFightPositions(f.engine);p.attack={...p.attack,actionId:(p.attack.actionId||0)+100,time:0};near(f.c.interpolatedFightEngine(f.engine,.5).players[0].attack.time,0,'New action timing');Object.assign(p.motion,{jumpPhase:'fall',phaseTime:.4,airTime:.6});f.c.captureFightPositions(f.engine);Object.assign(p.motion,{jumpPhase:'land',phaseTime:0,airTime:0,landingTime:.09});const motion=f.c.interpolatedFightEngine(f.engine,.5).players[0].motion;assert.equal(motion.jumpPhase,'land');assert.equal(motion.phaseTime,0);assert.equal(motion.airTime,0);assert.equal(motion.landingTime,.09);
});

test('hitstop-end reaction timing stays frozen, then interpolates only its own continuing reaction',()=>{
 const f=fixture(),p=f.engine.players[0];p.reaction={time:.03,duration:.3,direction:-1,strength:1};f.engine.freeze=1/60;f.advance(1);assert.equal(f.engine.freeze,0);let view=f.c.interpolatedFightEngine(f.engine,.5);near(view.players[0].reaction.time,.03,'Final hitstop reaction time');f.advance(1);view=f.c.interpolatedFightEngine(f.engine,.5);near(view.players[0].reaction.time,.03+1/120,'Resumed reaction interpolation');assert.notEqual(view.players[0].reaction,p.reaction);
 f.c.captureFightPositions(f.engine);p.reaction={time:0,duration:.25,direction:1,strength:.5};assert.equal(f.c.interpolatedFightEngine(f.engine,.5).players[0].reaction.time,0,'A new hit blended into the old reaction');
});

test('entrance/super/finisher/result forward reduced motion and their intended motion hints to the real renderer',()=>{
 const h=createHarness({presentation:true}),fighters=h.data.fighters.slice(0,2),ctx=canvasContext(),calls=[],motion={jumpPhase:'grounded',walkSpeed:.5};h.loadSelected(fighters.map(f=>f.id));h.window.BrasaRender.fighter=(canvas,...args)=>{calls.push({scale:args[3],time:args[6],options:args[7]});return true;};
 const P=h.window.BrasaPresentation,players=fighters.map((data,i)=>({data,x:i?1600:1250,y:0,hp:1000,facing:i?-1:1,pose:'idle'})),options={reducedMotion:true,structureOnly:true,companions:false,motion};
 for(const phase of ['entrance','super','finisher','result']){
  calls.length=0;
  const engine={players,phase:phase==='result'?'matchOver':phase,phaseTime:.6,superOwner:0,superTarget:1,superDuration:1.65,finisherWinner:0,finisherLoser:1,finisherDuration:3.8,winner:0};
  if(phase==='entrance')assert(P.drawEntrance(ctx,fighters[0],1250,455,2.15,1,.6,options));else assert(P['draw'+phase[0].toUpperCase()+phase.slice(1)](ctx,engine,7,options));
  assert(calls.length>0,phase+' omitted its actors');for(const call of calls){assert.equal(call.options.reducedMotion,true,phase+' dropped reducedMotion before the fighter renderer');assert.equal(call.scale,2.15);if(phase!=='entrance')assert.equal(call.options.motion,motion,phase+' dropped its motion hint');}
 }
 ctx.balanced();
});

test('live cinematics use the fixed actor clock while training finisher previews add only preview elapsed time',()=>{
 const f=fixture(),times=[];f.c.window.BrasaPresentation={drawSuper:(ctx,e,time)=>times.push({phase:e.phase,time}),drawFinisher:(ctx,e,time)=>times.push({phase:e.phase,time}),drawResult:(ctx,e,time)=>times.push({phase:e.phase,time})};f.engine.simulationClock=8;
 for(const phase of ['super','finisher','matchOver']){f.engine.phase=phase;f.actualDraw(900,.5);assert.equal(times.at(-1).time,8,phase+' used wall time');}
 f.engine.phase='fight';f.c.moveSet=()=>({finisher:{name:'test'}});f.c.state.finisherPreview={time:1.25};f.actualDraw(900,.5);assert.equal(times.at(-1).time,9.25);f.c.state.paused=true;f.actualDraw(999,.5);assert.equal(times.at(-1).time,9.25,'A paused preview advanced actor time');f.ctx.balanced();
});

test('paused RAF polls preserve authoritative state and redraw the fight once',()=>{
 const f=fixture({draw:true});f.advance(1);const initial=JSON.stringify(f.engine),steps=f.seen.length,draws=f.calls.length;f.c.state.paused=true;for(let n=0;n<144;n++)f.frame(f.now+1000/144);assert.equal(f.seen.length,steps);assert.equal(JSON.stringify(f.engine),initial);assert.equal(f.calls.length-draws,2);f.ctx.balanced();
});

test('damage freezes the pre-impact authored cell through the final hitstop step, then releases it',()=>{
 const f=fixture(),victim=f.engine.players[1];victim.pose='hurt';victim.reaction={time:0,duration:.3,direction:1,strength:.7,impactClock:f.engine.simulationClock,impactFrame:12,impactMirror:true};f.engine.freeze=2/60;
 f.c.captureFightPositions(f.engine);f.actualDraw(900,.5);let call=f.calls.at(-1);assert.equal(call.options.hitstopFrame,12);assert.equal(call.options.hitstopMirror,true);
 f.advance(1);f.calls.length=0;f.actualDraw(901,.5);assert.equal(f.calls.at(-1).options.hitstopFrame,12);
 f.advance(1);assert.equal(f.engine.freeze,0);f.calls.length=0;f.actualDraw(902,.5);assert.equal(f.calls.at(-1).options.hitstopFrame,12,'The last frozen step dropped its pre-impact cell');
 f.advance(1);f.calls.length=0;f.actualDraw(903,.5);assert.equal(f.calls.at(-1).options.hitstopFrame,undefined,'A live hurt reaction kept the old pre-impact cell');f.ctx.balanced();
});

console.log(JSON.stringify({checks,failures,evidence,physicalControllersTested:false,browserRendered:false,appearanceJudged:false},null,2));
