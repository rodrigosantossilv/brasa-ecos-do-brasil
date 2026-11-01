'use strict';
/* Exercise the real app HUD/RAF with the real combat engine. The small DOM
   below supplies browser nodes only; damage and presentation logic stay real. */
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const {createHarness,canvasContext}=require('./renderer-v10-check.cjs');
const root=path.resolve(__dirname,'../game'),read=name=>fs.readFileSync(path.join(root,name),'utf8'),app=read('app.js');
let checks=0;const failures=[];
function test(name,run){try{run();checks++;console.log('PASS '+name);}catch(error){failures.push(name);console.error('FAIL '+name+'\n'+error.stack);process.exitCode=1;}}
const near=(actual,want,label)=>assert(Math.abs(actual-want)<1e-7,`${label}: ${actual} != ${want}`);
function section(first,last){const a=app.indexOf(first),b=app.indexOf(last,a);assert(a>=0&&b>a,'App section missing: '+first);return app.slice(a,b);}

function fakeDOM(ctx){
 class Node{
  constructor(tag){this.tagName=tag.toUpperCase();this.children=[];this.style={};this.dataset={};this.attributes={};this.className='';this.textContent='';this.classList={toggle:(name,on)=>{const names=new Set(this.className.split(/\s+/).filter(Boolean));on?names.add(name):names.delete(name);this.className=[...names].join(' ');}};}
  setAttribute(name,value){this.attributes[name]=String(value);if(name==='class')this.className=value;else if(name==='id')this.id=value;else if(name==='width'||name==='height')this[name]=Number(value);}
  append(...nodes){for(const node of nodes){node.parentNode=this;this.children.push(node);}}
  set innerHTML(html){this.markup=html;this.children=[];const stack=[this];for(const match of html.matchAll(/<(\/?)([\w-]+)([^>]*)>/g)){if(match[1]){if(stack.length>1)stack.pop();continue;}const node=new Node(match[2]);for(const attr of match[3].matchAll(/([\w-]+)="([^"]*)"/g))node.setAttribute(attr[1],attr[2]);stack.at(-1).append(node);if(!['br','hr','img','input'].includes(match[2]))stack.push(node);}}
  get innerHTML(){return this.markup||'';}
  matches(selector){return selector[0]==='#'?this.id===selector.slice(1):selector[0]==='.'?this.className.split(/\s+/).includes(selector.slice(1)):this.tagName===selector.toUpperCase();}
  querySelectorAll(selector){return this.children.flatMap(node=>[...(node.matches(selector)?[node]:[]),...node.querySelectorAll(selector)]);}
  querySelector(selector){return this.querySelectorAll(selector)[0]||null;}
  getContext(){return ctx;}
  focus(){}
 }
 const document=new Node('document');document.createElement=tag=>new Node(tag);document.addEventListener=()=>{};document.activeElement=null;
 const container=new Node('main');container.id='app';document.append(container);return{document,container,el:(tag,cls,text)=>{const node=new Node(tag);if(cls)node.className=cls;if(text!==undefined)node.textContent=text;return node;}};
}

function fixture({mode='versus',reducedMotion=false}={}){
 const h=createHarness();vm.runInContext(read('combat.js'),h.sandbox,{filename:'combat.js'});
 const engine=new h.window.BrasaCombat({mode,fighters:h.data.fighters.slice(0,2),introDuration:.1,seed:42});for(let i=0;i<7;i++)engine.update(1/60,[{},{}]);
 const ctx=canvasContext(),dom=fakeDOM(ctx),c={window:{...h.window},document:dom.document,app:dom.container,el:dom.el,console,
  state:{screen:'fight',engine,arena:0,mode,paused:false},input:{slots:[null,null],config:{reducedMotion},poll(){},consume(){},states:()=>[{},{}]},
  stages:h.data.stages,modes:{versus:'VERSUS',training:'TREINO'},escapeText:value=>String(value??''),commandText:()=>'',moveSet:()=>({}),
  fight:null,hud:null,previousTick:null,shake:0,lastTime:0,accumulator:0,uiClock:0,pausedFrameDrawn:false,hero:null,preview:null,detail:null,worldMap:null,
  render:{stage(){},fighter(){}},quickFightHelpMarkup:()=>'',fightHelpMarkup:()=>'',syncLunarMusic(){},showPause(){},showResult(){},togglePause(){},previewFinisher(){},updateFightWorld(){},updatePadInfo(){},
  requestAnimationFrame(){},setTimeout(){throw Error('Damage HUD must not allocate timers');},setInterval(){throw Error('Damage HUD must not allocate timers');},Object,Map};
 c.$=selector=>dom.document.querySelector(selector)||{textContent:'◈ TECLADO'};c.button=(text,action,cls)=>{const node=dom.el('button',cls,text);node.onclick=action;return node;};
 vm.createContext(c);vm.runInContext(section('  function fightScreen()','  function helpMarkup('),c);vm.runInContext(section('  function captureFightPositions(','  // Read-only diagnostic'),c);
 c.fightScreen();let now=0;c.frame(0);
 const f={h,c,engine,dom,ctx,
  frame(dt=0){now+=dt*1000;c.frame(now);},
  advance(seconds,hz=60){const count=Math.round(seconds*hz);for(let i=0;i<count;i++)this.frame(seconds/count);},
  width(slot,damage=false){const node=dom.document.querySelector('#'+(damage?'hpDamage':'hp')+slot);assert(node,`P${slot+1} ${damage?'delayed damage':'actual HP'} layer is missing`);const value=parseFloat(node.style.width);assert(Number.isFinite(value),'HUD width must be finite');return value;},
  damage(slot,amount=100){const owner=1-slot,p=c.state.engine.players;c.state.engine.hit(p[owner],p[slot],owner,{kind:'light',token:'light',damage:amount,push:0,stun:.1});this.frame();},
 };return f;
}

// Removing the delayed node, swapping player indices, or rendering HP from the
// trailing value must fail this real damage/DOM assertion.
test('both HUDs immediately show authoritative HP and retain the pre-hit damage layer',()=>{
 const f=fixture();for(const slot of [0,1]){
  f.damage(slot);const p=f.engine.players[slot];assert(p.hp<1000);near(f.width(slot),p.hp/10,'actual HP');near(f.width(slot,true),100,'held damage');
  const fill=f.dom.document.querySelector('#hp'+slot),damage=f.dom.document.querySelector('#hpDamage'+slot);assert.equal(damage.parentNode,fill.parentNode);assert(damage.parentNode.children.indexOf(damage)<damage.parentNode.children.indexOf(fill),'Damage must be behind the main fill');assert.equal(damage.attributes['aria-hidden'],'true');assert.equal(fill.parentNode.parentNode.className.includes('right'),slot===1);
 }
 f.ctx.balanced();
});

test('the damage segment holds briefly, drains by elapsed dt, and stops exactly at actual HP',()=>{
 const f=fixture();f.damage(0,200);const hp=f.engine.players[0].hp;f.advance(.3);near(f.width(0,true),100,'initial hold');f.advance(.1);assert(f.width(0,true)<100&&f.width(0,true)>hp/10,'Damage must drain only after the hold');f.advance(2);near(f.width(0,true),hp/10,'drain endpoint');assert.equal(f.engine.players[0].hp,hp,'HUD animation changed gameplay HP');
});

test('successive combo hits restart the hold without losing the accumulated damage segment',()=>{
 const f=fixture();f.damage(1);f.advance(.3);f.damage(1);const hp=f.engine.players[1].hp;f.advance(.3);near(f.width(1,true),100,'combo restarted hold');near(f.width(1),hp/10,'second hit actual HP');f.advance(.1);assert(f.width(1,true)<100&&f.width(1,true)>hp/10);
});

test('a hit during draining holds the remaining segment without regrowing expired damage',()=>{
 const f=fixture();f.damage(0,300);f.advance(.5);const held=f.width(0,true);assert(held<100);f.damage(0);f.advance(.3);near(f.width(0,true),held,'remaining damage');assert(f.width(0)<held);f.advance(.1);assert(f.width(0,true)<held);
});

test('healing synchronizes both layers even when the healed value is below the old trail',()=>{
 const f=fixture();for(const slot of [0,1]){f.damage(slot,300);f.engine.players[slot].hp+=50;f.frame();const healed=f.engine.players[slot].hp/10;assert(healed<100);near(f.width(slot),healed,'healed HP');near(f.width(slot,true),healed,'healed trail');f.advance(.5);near(f.width(slot,true),healed,'no stale damage after healing');}
});

test('new rounds, rematches and engine replacement cannot carry damage presentation across fights',()=>{
 const f=fixture();f.damage(0,250);f.damage(1,200);f.engine.phase='roundOver';f.engine.winner=0;f.engine.nextRound();f.frame();for(const slot of [0,1]){near(f.width(slot),100,'new round HP');near(f.width(slot,true),100,'new round trail');}
 f.damage(0);f.engine.rematch();f.frame();near(f.width(0,true),100,'rematch trail');
 const replacement=new f.h.window.BrasaCombat({mode:'versus',fighters:f.h.data.fighters.slice(0,2),introDuration:.1});replacement.players[0].hp=500;f.c.state.engine=replacement;f.frame();near(f.width(0),50,'replacement HP');near(f.width(0,true),50,'replacement trail');
});

test('training knockout revival synchronizes the two HUD layers with restored real HP',()=>{
 const f=fixture({mode:'training'});f.engine.players[1].hp=20;f.frame();f.damage(1);assert.equal(f.engine.players[1].hp,0);near(f.width(1),0,'KO HP');f.advance(1.6);assert.equal(f.engine.players[1].hp,1000);near(f.width(1),100,'revived HP');near(f.width(1,true),100,'revived trail');
});

test('reduced motion snaps damage immediately and clears a trail already in progress',()=>{
 const f=fixture({reducedMotion:true});f.damage(1,200);near(f.width(1,true),f.width(1),'reduced motion hit');f.c.input.config.reducedMotion=false;f.damage(0,300);f.advance(.5);assert(f.width(0,true)>f.width(0));f.c.input.config.reducedMotion=true;f.frame();for(const slot of [0,1])near(f.width(slot,true),f.width(slot),'reduced motion toggle');
});

test('pausing freezes the trail and resuming does not consume the paused wall time',()=>{
 const f=fixture();f.damage(0,300);f.advance(.5);const held=f.width(0,true);f.c.state.paused=true;f.advance(1);near(f.width(0,true),held,'paused trail');f.c.state.paused=false;f.advance(.1);assert(f.width(0,true)<held&&f.width(0,true)>f.width(0));
});

test('60, 120 and 144 Hz renders drain equal damage over the same elapsed time',()=>{
 const widths=[];for(const hz of [60,120,144]){const f=fixture();f.damage(0,500);f.advance(.6,hz);widths.push(f.width(0,true));}for(const width of widths)near(width,widths[0],'refresh-independent drain');assert(widths[0]<100&&widths[0]>50);
});

console.log(JSON.stringify({checks,failures,browserRendered:false,appearanceJudged:false},null,2));
