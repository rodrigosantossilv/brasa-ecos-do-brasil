'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const base=require('node:path').join(__dirname,'../game/'),app=fs.readFileSync(base+'app.js','utf8'),index=fs.readFileSync(base+'index.html','utf8');
const releaseVersion=JSON.parse(fs.readFileSync(require('node:path').join(__dirname,'../package.json'),'utf8')).version.split('.').slice(0,2).join('.');
let checks=0;
const test=(name,run)=>{try{run();checks++;console.log('PASS '+name);}catch(error){console.error('FAIL '+name+'\n'+error.stack);process.exitCode=1;}};
test('Spoken announcements, system speech fallback and narration controls are absent from the runtime',()=>{
  const retired=fs.existsSync(base+'narrator.js')?fs.readFileSync(base+'narrator.js','utf8'):'';
  assert(!index.includes('narrator.js'));
  for(const source of [app,retired])assert(!/BrasaNarrator|speechSynthesis|SpeechSynthesisUtterance|narrator\.|announcerCaption|TESTAR VOZ|NARRADOR ATIVADO/.test(source));
  assert(app.includes("function tone(kind)"));assert(app.includes('function syncLunarMusic()'));
});
const listeners={},storage=new Map();let pads=[],pauses=0,backs=0,clicks=0;
const document={activeElement:{closest(){return null;}},addEventListener(name,fn){listeners[name]=fn;},querySelectorAll(){return[];}};
const context={document,window:{addEventListener(){}},navigator:{getGamepads:()=>pads},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},performance:{now:()=>0},matchMedia:()=>({matches:false}),console};
vm.createContext(context);vm.runInContext(fs.readFileSync(base+'input.js','utf8'),context);
context.input=new context.window.BrasaInput();context.state={screen:'fight',mode:'training',paused:false,engine:{phase:'fight',phaseTime:0,introDuration:8.8}};
context.togglePause=()=>{pauses++;context.state.paused=!context.state.paused;context.input.clear();};context.goBack=()=>{backs++;};context.$=()=>null;
const handler=app.slice(app.indexOf('  input.onMenu=(action,source)=>{'),app.indexOf("  document.querySelectorAll('[data-screen]').forEach(b=>b.onclick"));
vm.runInContext(handler,context);
const key=(code,type='keydown')=>listeners[type]({code,repeat:false,preventDefault(){}});
const button=(pad,index,value)=>{pad.buttons[index]={pressed:value,value:value?1:0};};
const dualsense={index:2,id:'DualSense Wireless Controller',connected:true,mapping:'standard',axes:[0,0,0,0],buttons:Array.from({length:17},()=>({pressed:false,value:0}))};
test('WASD movement reaches combat continuously without navigating menus or clearing attacks',()=>{
  const {input}=context;input.clear();key('KeyD');key('KeyF');let state=input.states()[0];assert(state.right&&state.light&&state.pressed.light);input.consume();assert(input.states()[0].right);assert.equal(pauses,0);assert.equal(backs,0);input.clear();
});
test('Keyboard punches, kick, special and guard preserve their combat presses',()=>{
  for(const [code,action] of [['KeyF','light'],['KeyG','heavy'],['KeyH','kick'],['KeyR','special'],['KeyT','grab'],['ShiftLeft','block']]){context.input.clear();key(code);assert(context.input.states()[0][action]);assert(context.input.states()[0].pressed[action]);key(code,'keyup');context.input.consume();assert(!context.input.states()[0][action]);}assert.equal(pauses,0);
});
test('DualSense X and Circle are combat buttons and never activate menu back or pause during fighting',()=>{
  pads=[dualsense];button(dualsense,0,true);context.input.poll(1000);assert(context.input.states()[0].light);assert(context.input.states()[0].pressed.light);assert.equal(pauses,0);assert.equal(backs,0);context.input.consume();button(dualsense,0,false);context.input.poll(1017);button(dualsense,1,true);context.input.poll(1034);assert(context.input.states()[0].kick);assert(context.input.states()[0].pressed.kick);assert.equal(pauses,0);assert.equal(backs,0);button(dualsense,1,false);context.input.consume();context.input.poll(1051);
});
test('Start/Options pauses once; Circle goes back only while a menu is open',()=>{
  button(dualsense,9,true);context.input.poll(1100);assert(context.state.paused);assert.equal(pauses,1);button(dualsense,9,false);context.input.poll(1117);button(dualsense,1,true);context.input.poll(1134);assert.equal(backs,1);button(dualsense,1,false);context.input.poll(1151);button(dualsense,9,true);context.input.poll(1168);assert(!context.state.paused);assert.equal(pauses,2);button(dualsense,9,false);context.input.poll(1185);key('Escape');assert(context.state.paused);assert.equal(pauses,3);context.state.paused=false;context.input.clear();
});
test('Intro confirmation skips to FIGHT without opening a menu or clearing ordinary combat direction',()=>{
  context.state.engine.phase='intro';context.input.onMenu('confirm','gamepad');assert.equal(context.state.engine.phaseTime,8.8-.65);assert(!context.state.paused);assert.equal(pauses,3);context.state.engine.phase='fight';context.input.onMenu('confirm','gamepad');assert.equal(pauses,3);
});
test('Fullscreen combat hints display remapped keyboard controls and both pad label sets',()=>{
  context.escapeText=value=>String(value);vm.runInContext(app.slice(app.indexOf('  function quickFightHelpMarkup()'),app.indexOf('  function fightHelpMarkup()')),context);
  context.input.slots=[null,null];context.input.config.keyboard[0].light='KeyV';let html=context.quickFightHelpMarkup();assert(html.includes('<kbd>V</kbd> SOCO'));assert(html.includes('<kbd>R</kbd> ESP. 1'));context.input.slots=[2,null];html=context.quickFightHelpMarkup();for(const label of ['× / A','○ / B','△ / Y','R2 / RT','L2 / LT','R3 / RS'])assert(html.includes(label),label);context.state.mode='versus';html=context.quickFightHelpMarkup();assert(html.includes('<strong>P2</strong>'));assert(index.includes('ARCADE '+releaseVersion));
});
test('move-card tokens name the actual one-button special and super mappings, including custom remaps',()=>{
  context.state.engine.players=[{facing:1},{facing:-1}];
  vm.runInContext(app.slice(app.indexOf('  function commandText('),app.indexOf('  function commandMarkup(')),context);
  const expected={special0:'△ / Y',special1:'R2 / RT',special2:'L2 / LT',super:'R3 / RS',grab:'R1 / RB',throw:'R1 / RB'};
  for(const [token,label]of Object.entries(expected))assert.equal(context.commandText(token,0,true),label,token);
  context.input.config.gamepad[0].special2={button:8};context.input.config.gamepad[0].super={button:10};
  assert.equal(context.commandText('special1',0,true),'B8');assert.equal(context.commandText('super',0,true),'L3 / LS');
  assert.equal(context.commandText('special0',0,false),'R');assert.equal(context.commandText('special1',0,false),'S + R');assert.equal(context.commandText('special2',0,false),'D + R');assert.equal(context.commandText('super',0,false),'G + R');
  context.state.engine.players=[{facing:-1}];assert.equal(context.commandText('special2',0,false),'A + R');assert.equal(context.commandText('special2',0,true),'L2 / LT');
  context.input.config.gamepad[0].special2={button:7};context.input.config.gamepad[0].super={button:11};
});
test('quick hints keep remapped trigger and super labels in sync for both players',()=>{
  context.input.config.gamepad[0].special2={button:8};context.input.config.gamepad[1].special3={button:10};context.input.slots=[2,3];context.state.mode='versus';
  const html=context.quickFightHelpMarkup();assert(html.includes('<kbd>B8</kbd> ESP. 2'));assert(html.includes('<kbd>L3 / LS</kbd> ESP. 3'));assert.equal((html.match(/SUPER<\/span>/g)||[]).length,2);
  context.input.config.gamepad[0].special2={button:7};context.input.config.gamepad[1].special3={button:6};
});
test('the BRASA meter caption follows controller activation, custom super mapping and disconnection',()=>{
  context.hud={cache:Object.create(null),help:{},quickHelp:{},superHints:[{textContent:''},{textContent:''}]};context.uiClock=0;context.fightHelpMarkup=()=>'';context.$=()=>({textContent:''});
  const writer=app.slice(app.indexOf('  function hudWrite('),app.indexOf('  function hudClass('));vm.runInContext(writer,context);
  const first=app.indexOf('    if(now-uiClock>700)'),last=app.indexOf("    if(state.screen==='fight'&&fight&&state.engine)",first);assert(first>=0&&last>first);
  vm.runInContext('function refreshHint(now){'+app.slice(first,last)+'}',context);
  context.input.slots=[null,null];context.refreshHint(800);assert.equal(context.hud.superHints[0].textContent,'BRASA / SUPER · G + R');assert.equal(context.hud.superHints[1].textContent,'BRASA / SUPER · K + O');
  context.input.slots=[2,null];context.refreshHint(1600);assert.equal(context.hud.superHints[0].textContent,'BRASA / SUPER · R3 / RS');
  context.input.config.gamepad[0].super={button:10};context.refreshHint(2400);assert.equal(context.hud.superHints[0].textContent,'BRASA / SUPER · L3 / LS');
  context.input.slots=[null,null];context.refreshHint(3200);assert.equal(context.hud.superHints[0].textContent,'BRASA / SUPER · G + R');context.input.config.gamepad[0].super={button:11};
});
test('Combat effects, story saving and visual round announcements work without any narrator object',()=>{
  const calls=[];context.tone=kind=>calls.push(kind);context.shake=0;context.state.mode='story';context.state.storyRecorded=false;context.story={record:won=>({won})};vm.runInContext(app.slice(app.indexOf('  function combatEvent(event)'),app.indexOf('  function startFight()')),context);
  for(const type of ['round','finishWindow','finisher','super'])context.combatEvent({type,round:1});context.combatEvent({type:'match',winner:0});assert.deepEqual(calls,['round','finisher','match']);assert.equal(context.state.storyResult.won,true);assert.equal(context.shake,0);
});
test('Fight artwork shares a 480 by 270 native pixel surface without changing engine coordinates',()=>{
  assert(app.includes('id="fightCanvas" class="fight-canvas" width="480" height="270"'));assert(app.includes('ctx.scale(fight.width/960,fight.height/540)'));assert(app.includes('ctx.imageSmoothingEnabled=false'));assert(app.includes('render.stage(ctx,stages[state.arena],960,540'));
});

const {createHarness,canvasContext}=require('./renderer-v10-check.cjs');
function motionFixture(){
 const h=createHarness({presentation:true});h.loadAll();vm.runInContext(fs.readFileSync(base+'combat.js','utf8'),h.sandbox);const engine=new h.window.BrasaCombat({mode:'versus',fighters:h.data.fighters.slice(0,2),introDuration:.1});for(let i=0;i<7;i++)engine.update(1/60,[{},{}]);
 const ctx=canvasContext(),calls=[],c={window:h.window,state:{screen:'fight',engine,arena:0,mode:'versus',paused:false},input:{slots:[null,null],config:{reducedMotion:false}},fight:{width:480,height:270,getContext:()=>ctx},previousTick:null,shake:0,stages:h.data.stages,render:{stage(){},fighter(canvas,...args){calls.push({data:args[0],x:args[1],groundY:args[2],scale:args[3],pose:args[4],face:args[5],time:args[6],options:args[7]});return h.renderer.draw(canvas,...args);}},drawEffects(){},Object,Map};
 vm.createContext(c);const first=app.indexOf('  function captureFightPositions('),last=app.indexOf('  function hudWrite(',first);assert(first>=0&&last>first);vm.runInContext(app.slice(first,last),c);
 const drawStart=app.indexOf('  function drawFight('),drawEnd=app.indexOf('    engine.players.forEach((p,i)=>{hudWrite',drawStart);assert(drawEnd>drawStart);vm.runInContext(app.slice(drawStart,drawEnd)+'\n  }',c);
 return{h,c,ctx,calls,engine};
}
test('motion timers and speeds interpolate from a copied snapshot without mutating authoritative state',()=>{
 const f=motionFixture(),p=f.engine.players[0];p.x=200;p.y=80;p.grounded=false;p.pose='jump';p.vy=280;p.walkDistance=12;Object.assign(p.motion,{jumpPhase:'rise',phaseTime:.12,airTime:.2,groundedTime:0,landingTime:0,landingProgress:1,verticalSpeed:280,moveSpeed:180,walkSpeed:.8,anticipation:0,apex:false,landing:false});
 f.c.captureFightPositions(f.engine);p.x=204;p.y=85;p.vy=260;p.walkDistance=16;Object.assign(p.motion,{phaseTime:.14,airTime:.22,verticalSpeed:260,moveSpeed:190,walkSpeed:.9});const before=JSON.stringify(f.engine);const view=f.c.interpolatedFightEngine(f.engine,.5);
 assert.equal(view.players[0].x,202);assert.equal(view.players[0].y,82.5);assert.equal(view.players[0].walkDistance,14);assert(Math.abs(view.players[0].motion.phaseTime-.13)<1e-9);assert(Math.abs(view.players[0].motion.airTime-.21)<1e-9);assert.equal(view.players[0].motion.verticalSpeed,270);assert.equal(view.players[0].motion.moveSpeed,185);assert(Math.abs(view.players[0].motion.walkSpeed-.85)<1e-9);assert.notEqual(view.players[0].motion,p.motion);assert.equal(JSON.stringify(f.engine),before);
});
test('jump phase transitions snap animation counters rather than blending back into an old airborne pose',()=>{
 const f=motionFixture(),p=f.engine.players[0];p.y=8;p.grounded=false;p.pose='jump';Object.assign(p.motion,{jumpPhase:'fall',phaseTime:.24,airTime:.8,verticalSpeed:-460,landingTime:0,landingProgress:1});f.c.captureFightPositions(f.engine);
 p.y=0;p.grounded=true;p.pose='land';Object.assign(p.motion,{jumpPhase:'land',phaseTime:0,airTime:0,groundedTime:.01,verticalSpeed:0,landingTime:.09,landingProgress:.1});const view=f.c.interpolatedFightEngine(f.engine,.5).players[0];assert.equal(view.motion.jumpPhase,'land');assert.equal(view.motion.phaseTime,0);assert.equal(view.motion.airTime,0);assert.equal(view.motion.landingTime,.09);assert.equal(view.motion.landingProgress,.1);
 f.engine.freeze=.04;assert.equal(f.c.interpolatedFightEngine(f.engine,.5),f.engine);f.engine.freeze=0;f.c.state.paused=true;assert.equal(f.c.interpolatedFightEngine(f.engine,.5),f.engine);
});
test('drawFight supplies interpolated motion to the renderer and keeps airborne shadows on the arena floor',()=>{
 const f=motionFixture(),p=f.engine.players[0];p.x=200;p.y=80;p.pose='jump';p.grounded=false;Object.assign(p.motion,{jumpPhase:'rise',phaseTime:.12,airTime:.2,verticalSpeed:280});f.c.captureFightPositions(f.engine);p.x=204;p.y=85;Object.assign(p.motion,{phaseTime:.14,airTime:.22,verticalSpeed:260});const before=JSON.stringify(f.engine);f.c.drawFight(2,.5);f.ctx.balanced();
 const drawn=f.calls.find(call=>call.data.id===p.data.id);assert(drawn?.options.motion,'The app omitted its motion hints');assert(Math.abs(drawn.options.motion.phaseTime-.13)<1e-9);assert.equal(drawn.options.motion.verticalSpeed,270);assert.equal(drawn.groundY,455-82.5);assert.equal(drawn.options.groundPlaneY,455);assert.equal(JSON.stringify(f.engine),before);
 assert.equal(drawn.options.ellipseShadow,true);assert.equal(drawn.options.fighterScale,2.15);assert.equal(drawn.options.groundOffset,f.h.window.BrasaStages.grounding(f.h.data.stages[0]).groundY-455);
});
test('fight launch gates the chosen pair and companions without inspecting unrelated roster atlases',()=>{
 let ready=new Set(),motion=new Set(),companions=true,launched=0;const requested=[],fighters=Array.from({length:76},(_,i)=>({id:'fighter'+i}));const c={state:{mode:'versus',chosen:[5,70],arena:0},fighters,stages:[{}],story:{unlocked:()=>true},toast(){},begin(){},go(){},combatEvent(){},window:{BrasaFighters:{ready:f=>{assert(f,'No global canonical gate');requested.push(['ready',f.id]);return ready.has(f.id);},readyMotion:f=>{assert(f,'No global motion gate');requested.push(['motion',f.id]);return motion.has(f.id);}},BrasaPresentation:{readyCompanions:()=>companions},BrasaCombat:class{constructor(options){launched++;this.options=options;}}}};
 vm.createContext(c);vm.runInContext(app.slice(app.indexOf('  function fightArtReady('),app.indexOf('  function previewFinisher(')),c);c.updateFightLoading=()=>{};
 c.startFight();assert.equal(launched,0);assert(c.state.pendingFight);let progress=c.fightArtProgress();assert.equal(progress.ready,0);assert.equal(progress.total,2);
 ready.add('fighter5');motion.add('fighter5');c.startFight();assert.equal(launched,0);progress=c.fightArtProgress();assert.equal(progress.ready,1);assert.equal(progress.fighters,2);
 ready.add('fighter70');motion.add('fighter70');companions=false;c.startFight();assert.equal(launched,1);assert.equal(c.state.pendingFight,false);assert.deepEqual(c.state.engine.options.fighters.map(f=>f.id),['fighter5','fighter70']);
 assert(requested.every(([,id])=>['fighter5','fighter70'].includes(id)),'Unselected atlas entered the fight gate');assert(!app.slice(app.indexOf('  function fightArtReady('),app.indexOf('  function previewFinisher(')).includes('readyWalk'),'readyWalk duplicates the same motion atlas request');
});

test('the real renderer and app loading gate launch after only the chosen two authored atlases decode',()=>{
 const h=createHarness(),defs=h.authored;assert(defs.length>=2);h.loadInitial();const ids=defs.slice(0,2).map(f=>f.id),chosen=ids.map(id=>h.data.fighters.findIndex(f=>f.id===id));let launches=0;
 const c={window:{BrasaFighters:h.renderer,BrasaPresentation:{readyCompanions:()=>true},BrasaCombat:class{constructor(){launches++;}}},state:{chosen,arena:0,mode:'versus'},fighters:h.data.fighters,stages:h.data.stages,story:{unlocked:()=>true},toast(){},begin(){},go(){},combatEvent(){}};
 vm.createContext(c);vm.runInContext(app.slice(app.indexOf('  function fightArtReady('),app.indexOf('  function previewFinisher(')),c);c.updateFightLoading=()=>{};
 c.startFight();assert.equal(launches,0);c.fightArtProgress();const wanted=new Set(defs.slice(0,2).map(f=>f.url)),all=new Set(defs.map(f=>f.url)),requests=h.made.filter(im=>all.has(im.source));assert.equal(requests.length,2);assert(requests.every(im=>wanted.has(im.source)));
 h.loadInitial(im=>im.source===defs[1].url);c.startFight();assert.equal(launches,0);h.loadInitial();c.startFight();assert.equal(launches,1);assert.equal(c.state.pendingFight,false);assert.equal(h.made.filter(im=>all.has(im.source)).length,2);
});

test('the real RAF loop keeps 60Hz physics on a 144Hz display and draws a paused fight only once',()=>{
 const f=motionFixture(),c=f.c;let steps=0;const originalUpdate=f.engine.update.bind(f.engine);f.engine.update=(dt,controls)=>{assert.equal(dt,1/60);steps++;originalUpdate(dt,controls);};
 Object.assign(c,{lastTime:0,accumulator:0,uiClock:0,pausedFrameDrawn:false,hud:null,requestAnimationFrame(){},updateFightWorld(){},hero:{getContext(){throw Error('Offscreen home canvas drawn during fight');}},preview:{getContext(){throw Error('Offscreen arena canvas drawn during fight');}},detail:{},drawFighterPreview(){throw Error('Offscreen fighter preview drawn during fight');},quickFightHelpMarkup:()=>'',fightHelpMarkup:()=>'',updatePadInfo(){},$:()=>({textContent:'◈ TECLADO'})});
 c.input.poll=()=>{};c.input.consume=()=>{};c.input.states=()=>[{right:steps<60,up:steps===10},{}];const start=app.indexOf('  function frame(now)'),end=app.indexOf('  // Read-only diagnostic',start);assert(start>=0&&end>start);vm.runInContext(app.slice(start,end),c);
 for(let i=1;i<=864;i++)c.frame(i*1000/144);assert(steps>=359&&steps<=360);assert(f.calls.some(call=>call.pose==='jump'&&call.options.motion?.jumpPhase==='apex'),'RAF did not render the dedicated airborne motion');const previousSteps=steps,before=JSON.stringify(f.engine),draws=f.calls.length;c.state.paused=true;for(let i=865;i<=1008;i++)c.frame(i*1000/144);assert.equal(steps,previousSteps);assert.equal(JSON.stringify(f.engine),before);assert.equal(f.calls.length-draws,2,'Paused fight should render one frame with two fighters');f.ctx.balanced();
});
test('structure intros retain opaque fighters without drawing removed companion sprites',()=>{
 const f=motionFixture();f.engine.phase='intro';f.engine.introDuration=8.8;f.engine.phaseTime=2.08;f.c.drawFight(2,.5);f.ctx.balanced();const npc=f.ctx.images.filter(call=>call.image.source===f.h.window.BRASA_ASSETS.companions.url);assert.equal(npc.length,0);assert(npc.every(call=>call.alpha===1));assert(f.calls.every(call=>(call.options.alpha??1)===1),'The waiting opponent became a transparent ghost');assert(f.ctx.images.every(call=>call.alpha===1),'An entrance body became transparent');
});
console.log(JSON.stringify({checks,physicalControllersTested:false,spokenAudio:false,browserScreenshots:false,appearanceJudged:false}));
