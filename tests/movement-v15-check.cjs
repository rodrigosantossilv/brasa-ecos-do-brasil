'use strict';
// Real combat consumers: deleting profiles or ignoring stats must change travel, not just metadata.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const sandbox={window:{},console};vm.createContext(sandbox);
for(const file of ['assets.js','data.js','moves.js','combat.js'])vm.runInContext(fs.readFileSync(path.join(__dirname,'../game',file),'utf8'),sandbox,{filename:file});
const {BRASA_DATA:data,BRASA_MOVES:moves,BrasaCombat:Combat}=sandbox.window,dt=1/60;
const authored={brick:[.79,.57,.85],jack:[1.18,.88,1],silas:[1.1,.72,1.23],boris:[.86,.6,.9],aya:[1.2,.89,1.13],tommy:[.77,.56,.87]};
let checks=0,failed=0;
function test(name,run){try{run();checks++;console.log('PASS '+name);}catch(error){failed++;console.error('FAIL '+name+'\n'+error.stack);}}
function close(actual,expected,message){assert(Math.abs(actual-expected)<1e-7,`${message}: expected ${expected}, got ${actual}`);}
function step(g,n=1,input=[{},{}]){for(let i=0;i<n;i++)g.update(dt,input);}
function game(id,slot=0,facing=1,override){
  const fighter=override||data.fighters.find(f=>f.id===id),other=data.fighters.find(f=>f.id==='ramiro');
  const fighters=slot?[other,fighter]:[fighter,other],g=new Combat({mode:'versus',hitstop:false,fighters});
  g.phase='fight';g.timer=Infinity;g.players[slot].x=1440-facing*500;g.players[1-slot].x=1440+facing*500;g.facePlayers();return g;
}
function command(slot,value){const input=[{},{}];input[slot]=value;return input;}
function key(direction){return direction>0?'right':'left';}

test('all76 kits provide bounded movement and retain six deliberately authored exceptions',()=>{
  assert.equal(data.fighters.length,76);assert.equal(Object.keys(moves.fighters).length,76);
  for(const fighter of data.fighters){
    const m=moves.fighters[fighter.id].movement;assert(m,`${fighter.id} has no movement profile`);
    for(const field of ['walk','backwalk','jump'])assert(Number.isFinite(m[field])&&m[field]>0,`${fighter.id}.${field}`);
    const ratio=m.backwalk/m.walk;assert(ratio>=.55&&ratio<=.9,`${fighter.id} backwalk ratio ${ratio}`);
    if(authored[fighter.id])assert.deepEqual([m.walk,m.backwalk,m.jump],authored[fighter.id],fighter.id+' authored mobility changed');
    else {const speed=(155+20*fighter.stats.speed)*m.walk;assert(speed>=160&&speed<=280,fighter.id+' forward speed '+speed);assert(m.jump>=.84&&m.jump<=1.08,fighter.id+' jump scale');}
  }
});

test('agile pressure heavy grappler and cautious zoner profiles produce distinct actual walk and retreat speeds',()=>{
  // Hand-calculated from the design profiles; actual displacement catches ignored kit data and legacy id precedence.
  const fixtures=[['bento',183.3,120.9],['damiao',164.5,101.5],['jana',270.3,198.9],['tiao',275.4,198.9],['davi',275.4,198.9],['nara',210.7,150.5],['serena',198.9,124.8],['caio',239.7,164.5],['luz',227.9,159.1],['regolith',164.5,101.5],['mika',275.4,193.8],['belladonna',260.1,209.1],['shen',187.2,124.8]];
  for(const [id,forward,backward]of fixtures)for(const slot of [0,1])for(const facing of [-1,1])for(const retreat of [false,true]){
    const g=game(id,slot,facing),p=g.players[slot],x=p.x,direction=facing*(retreat?-1:1),speed=retreat?backward:forward;
    step(g,6,command(slot,{[key(direction)]:true}));close((p.x-x)*direction,speed*.1,id+'/'+slot+'/'+facing+'/'+retreat);
  }
});

test('real fighter speed stats affect walking even when two variants use the same movement kit',()=>{
  const fighter=data.fighters.find(f=>f.id==='liang');
  for(const [speed,want]of [[1,17.5],[5,25.5]]){
    const copy={...fighter,stats:{...fighter.stats,speed}},g=game('liang',0,1,copy),x=g.players[0].x;
    step(g,6,[{right:true},{}]);close(g.players[0].x-x,want,'speed stat '+speed);
  }
});

test('all76 profiles drive finite forward and retreat travel in either slot and orientation',()=>{
  for(const fighter of data.fighters)for(const slot of [0,1])for(const facing of [-1,1])for(const retreat of [false,true]){
    const g=game(fighter.id,slot,facing),p=g.players[slot],x=p.x,m=moves.fighters[fighter.id].movement;
    assert(m,fighter.id+' missing profile');
    const direction=facing*(retreat?-1:1),expected=(155+20*fighter.stats.speed)*(retreat?m.backwalk:m.walk)/10;
    step(g,6,command(slot,{[key(direction)]:true}));close((p.x-x)*direction,expected,fighter.id+' actual displacement');
    assert.equal(p.grounded,true);assert.equal(p.y,0);assert.equal(p.hp,1000);
  }
});

test('heavy short jumps and agile high jumps retain committed velocity and land for every profile',()=>{
  let heavyPeak=0,agilePeak=0;
  for(const fighter of data.fighters){
    const g=game(fighter.id),p=g.players[0];step(g,1,[{right:true,up:true},{}]);
    assert(!p.grounded&&p.y>0,fighter.id+' did not launch');const vx=p.vx;let peak=p.y;
    for(let n=0;n<120&&!p.grounded;n++){step(g,1,[{left:true},{}]);peak=Math.max(peak,p.y);if(!p.grounded)close(p.vx,vx,fighter.id+' air steering changed committed arc');}
    assert(p.grounded,fighter.id+' never landed');assert.equal(p.y,0);assert.equal(p.vy,0);assert(p.x>=g.worldMin&&p.x<=g.worldMax,fighter.id+' jump escaped world');
    if(fighter.id==='damiao')heavyPeak=peak;if(fighter.id==='tiao')agilePeak=peak;
  }
  assert(agilePeak>heavyPeak*1.5,'agile jump should visibly exceed the heavy grappler jump');
});

test('every profile keeps committed dashes within world and viewport bounds',()=>{
  for(const fighter of data.fighters)for(const facing of [-1,1]){
    const g=game(fighter.id,0,facing),p=g.players[0],direction=key(facing),reverse=key(-facing);
    step(g,1,[{[direction]:true},{}]);step(g);step(g,1,[{[direction]:true},{}]);assert(p.motion.dashing,fighter.id+' dash did not begin');
    const x=p.x,vx=p.vx;step(g,3,[{[reverse]:true,up:true,light:true},{}]);assert((p.x-x)*facing>0);assert.equal(p.vx,vx);assert(p.grounded);assert.equal(p.attack,null);
    const edge=game(fighter.id,0,facing),e=edge.players[0];edge.players[1].y=500;edge.players[1].grounded=false;e.x=facing>0?edge.worldMax-1:edge.worldMin+1;
    step(edge,1,[{[direction]:true},{}]);step(edge);step(edge,1,[{[direction]:true},{}]);step(edge,30);close(e.x,facing>0?edge.worldMax:edge.worldMin,fighter.id+' world edge');
    const visible=game(fighter.id,0,facing),v=visible.players[0];visible.setViewport({x:900,zoom:.8,width:960});
    step(visible,1,[{[direction]:true},{}]);step(visible);step(visible,1,[{[direction]:true},{}]);step(visible,30);
    assert(visible.visualBox(v).left>=900-1e-7&&visible.visualBox(v).right<=2100+1e-7,fighter.id+' viewport edge');
  }
});

test('movement tuning leaves all228 normal hit damage outcomes unchanged',()=>{
  // Captured from real hit resolution before movement-only edits, not from source text or a damage formula.
  const outcomes=[];
  for(const fighter of data.fighters)for(const kind of ['light','heavy','kick']){
    const g=game(fighter.id),[p,target]=g.players,spec=g.normalDefinition(p,kind,false);
    g.hit(p,target,0,{...spec,kind,token:kind});outcomes.push([fighter.id,kind,1000-target.hp]);
  }
  assert.equal(outcomes.length,228);
  assert.equal(crypto.createHash('sha256').update(JSON.stringify(outcomes)).digest('hex'),'a6f23d435578a3481658b851e562142e632331dcc6c691ed86e1dccfdfd1717b','normal damage baseline changed');
});

console.log(JSON.stringify({checks,failed,fighters:data.fighters.length}));process.exitCode=failed?1:0;
