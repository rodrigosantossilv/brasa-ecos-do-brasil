'use strict';
const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'../game'),s={window:{}};vm.createContext(s);
for(const f of ['assets.js','data.js','moves.js','combat.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),s);
const w=s.window,events=[],g=new w.BrasaCombat({fighters:['damiao','caua'].map(id=>w.BRASA_DATA.fighters.find(x=>x.id===id)),fighterScale:1,visualGeometry:true,mode:'versus',onEvent:e=>events.push(e)});
g.phase='fight';g.timer=Infinity;const[p,e]=g.players;p.x=1400;e.x=p.x+g.minimumDistance(p,e)+1;g.facePlayers();let checked=false;
for(let n=0;n<120;n++){
 g.update(1/60,n===0?[{special:true,directSpecial:true},{light:true}]:[{},{}]);
 if(events.some(e=>e.type==='hit'&&e.player===0)&&g.freeze>0){
  assert(p.reaction&&e.reaction,'Both exchanges must have real reaction snapshots');
  assert.equal(e.reaction.impactClock,g.simulationClock,'Current victim snapshot must belong to this frozen impact');
  assert.notEqual(p.reaction.impactClock,g.simulationClock,'Attacker old snapshot must not belong to its outgoing impact');
  assert(events.some(e=>e.type==='hit'&&e.player===1));
  console.log('PASS armored fighter retains its current contact pose instead of an earlier incoming-hit snapshot');checked=true;break;
 }
}
assert(checked,'Armored trade never reached the outgoing contact');
