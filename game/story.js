/* Original BRASA campaign. Saves are versioned, validated and local/offline. */
(function(global){
  'use strict';
  const KEY='brasa.story.v1',UNLOCKS='brasa.progress.v1';
  const order=['BR','US','GB','IT','RU','CN','JP'];
  const moons=['selene','regolith','umbriel','apogeu'];
  const events={BR:['A brasa desperta','Uma marca incandescente surge nas arenas brasileiras. O primeiro rival conhece o caminho para fora do país.'],US:['Ecos nas docas','Um carregamento vindo do Atlântico trouxe um fragmento que não pertence à Terra. O porto nunca dorme.'],GB:['O relógio sem ponteiros','A névoa de Londres esconde uma passagem que só aparece quando os sinos param. Um guardião espera.'],IT:['Máscaras de vidro','Nos canais de Veneza, cada reflexo mostra um céu diferente. Uma máscara guarda as coordenadas da próxima travessia.'],RU:['O gelo sob as estrelas','A Neva congelada conserva uma antiga cápsula espacial. O frio protege o sinal que você procura.'],CN:['O selo de jade','Em Longmen, um selo sustenta a última barreira entre a Terra e o desconhecido. Prove que consegue atravessá-la.'],JP:['A última lanterna','Sob as lanternas de Kyoto, um fragmento revela uma constelação oculta. O guardião do templo não abrirá mão da passagem.']};
  const lunar=[['Maré silenciosa','Selene vigia o primeiro portal lunar. Vença sua dança gravitacional para libertá-la da órbita.'],['O peso do mundo','Regolith protege a fortaleza de rocha. Quebre sua defesa para alcançar a cratera oculta.'],['O eclipse vivo','Umbriel se move onde a luz não chega. A terceira chave só aparece depois de enfrentar a própria sombra.'],['Além do apogeu','Apogeu reúne a energia das quatro órbitas. A última luta decide se a brasa ilumina ou consome os dois mundos.']];
  class Story{
    constructor(storage,data=global.BRASA_DATA){this.data=data;this.unlocks=[];this.save=null;this.lastResult=null;this.storageOK=true;try{this.storage=storage===undefined?global.localStorage:storage;}catch(_){this.storage=null;this.storageOK=false;}this.load();}
    read(key){let value;try{value=this.storage?.getItem(key);}catch(_){this.storageOK=false;return null;}try{return JSON.parse(value||'null');}catch(_){return null;}}
    write(key,value){try{if(!this.storage?.setItem){this.storageOK=false;return false;}this.storage.setItem(key,JSON.stringify(value));return true;}catch(_){this.storageOK=false;return false;}}
    load(){
      const u=this.read(UNLOCKS);this.unlocks=[...new Set((Array.isArray(u?.unlocked)?u.unlocked:[]).filter(id=>moons.includes(id)))];
      const s=this.read(KEY);const fighter=this.data.fighters.find(f=>f.id===s?.fighterId);
      const validChapter=(c,index)=>{
        if(!c||typeof c!=='object'||typeof c.title!=='string'||typeof c.text!=='string')return false;
        const opponent=this.data.fighters.find(f=>f.id===c.opponent),stage=this.data.stages.find(a=>a.id===c.stage);
        return !!opponent&&!!stage&&opponent.country===c.country&&stage.country===c.country&&
          (index<7?order.includes(c.country)&&c.secret===false&&c.opponent!==fighter?.id:c.country==='MOON'&&c.secret===true&&c.opponent===moons[index-7]);
      };
      if(fighter&&Array.isArray(s.chapters)&&s.chapters.length===11&&s.chapters.every(validChapter)&&new Set(s.chapters.slice(0,7).map(c=>c.country)).size===7&&Number.isInteger(s.chapter)&&s.chapter>=0&&s.chapter<=11&&Number.isInteger(s.wins)&&s.wins>=0&&Number.isInteger(s.losses)&&s.losses>=0){this.save={...s,chapter:s.chapter,complete:s.chapter===11};}
      return this.save;
    }
    unlocked(id){return !moons.includes(id)||this.unlocks.includes(id);}
    start(fighterId){
      const f=this.data.fighters.find(v=>v.id===fighterId);if(!f||!this.unlocked(f.id))return null;
      const seed=this.data.fighters.indexOf(f),countries=order.slice();const home=countries.indexOf(f.country||'BR');if(home>0)countries.unshift(...countries.splice(home,1));
      const chapters=countries.map((country,index)=>{const pool=this.data.fighters.filter(v=>v.country===country&&v.id!==fighterId);const opponent=pool[(seed+index*3)%pool.length];const options=this.data.stages.filter(a=>a.country===country);const stage=options[(seed+index)%options.length];return {country,opponent:opponent.id,stage:stage.id,title:events[country][0],text:events[country][1],secret:false};});
      chapters[0].text=(f.story?f.story+' ':'')+chapters[0].text;chapters[6].text+=' Com o sétimo fragmento reunido, a travessia lunar finalmente pode se abrir.';
      moons.forEach((id,index)=>chapters.push({country:'MOON',opponent:id,stage:index%2?'eclipse':'mare',title:lunar[index][0],text:lunar[index][1],secret:true}));
      this.save={version:1,fighterId,chapter:0,chapters,complete:false,wins:0,losses:0,createdAt:Date.now(),updatedAt:Date.now()};this.lastResult=null;this.persist();return this.save;
    }
    current(){return this.save?.chapters[this.save.chapter]||null;}
    persist(){if(this.save){this.save.updatedAt=Date.now();this.write(KEY,this.save);}this.write(UNLOCKS,{version:1,unlocked:this.unlocks});}
    record(won){
      const chapter=this.current();if(!chapter)return null;let unlocked=null;
      if(won){this.save.wins++;if(chapter.secret&&!this.unlocks.includes(chapter.opponent)){this.unlocks.push(chapter.opponent);unlocked=chapter.opponent;}this.save.chapter++;this.save.complete=this.save.chapter===this.save.chapters.length;}else this.save.losses++;
      this.lastResult={won,unlocked,chapter:{...chapter},complete:this.save.complete};this.persist();return this.lastResult;
    }
    get available(){return !!this.save&&!this.save.complete;}
    get progress(){return this.save?this.save.chapter/this.save.chapters.length:0;}
  }
  global.BrasaStory=Story;
})(typeof window!=='undefined'?window:globalThis);
