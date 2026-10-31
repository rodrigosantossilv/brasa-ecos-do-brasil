(function () {
  'use strict';
  const {fighters,stages}=window.BRASA_DATA;
  const render=window.BrasaRender,input=new window.BrasaInput(),app=document.getElementById('app');
  const state={screen:'home',mode:'cpu',step:0,chosen:[0,2],inspect:0,arena:0,paused:false,engine:null,camera:null,debugLayers:false,worldRound:null,returnTo:'home',movesReturn:'home',movesPlayer:0,trainingCombo:null,finisherPreview:null,pendingFight:false,sound:false,difficulty:'normal'};
  const story=new window.BrasaStory(),countries=window.BRASA_DATA.countries||window.BRASA_COUNTRIES;
  state.country='BR';state.moon=false;state.storyResult=null;state.storyRecorded=false;
  let worldMap=null,lunarMusicTimer=null,lunarMusicStep=0;
  const names={left:'Mover à esquerda',right:'Mover à direita',up:'Pular',down:'Agachar',light:'Soco leve',heavy:'Soco forte',kick:'Chute',special:'Especial 1',special2:'Especial 2 direto',special3:'Especial 3 direto',super:'Super direto',grab:'Agarrão',block:'Defender'};
  let hero=null,preview=null,detail=null,fight=null,hud=null,lastTime=0,accumulator=0,uiClock=0,overlayDrawn=false,shake=0,audio=null,toastTimer,previousTick=null,pausedFrameDrawn=false;
  const $=selector=>document.querySelector(selector);
  const el=(tag,cls,text)=>{const node=document.createElement(tag);if(cls)node.className=cls;if(text!==undefined)node.textContent=text;return node;};
  const escapeText=text=>String(text??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const modes={cpu:'DUELO CONTRA CPU',versus:'VERSUS LOCAL',training:'TREINO LIVRE',story:'MODO HISTÓRIA'};
  const playableSpecialIndex=fighter=>['nara','breu','iris','augusto'].includes(fighter.id)?1:0;
  const moveSet=fighter=>window.BRASA_MOVES?.fighters[fighter.id];
  const playableSpecial=fighter=>moveSet(fighter)?.specials[0]||fighter.specials[playableSpecialIndex(fighter)];
  const button=(text,handler,cls='action')=>{const b=el('button',cls+' nav-item');b.innerHTML='<span>'+escapeText(text)+'</span><span aria-hidden="true">↗</span>';b.onclick=()=>{tone('menu');handler();};return b;};
  function tone(kind){
    if(!state.sound)return;
    try{audio ||=new (window.AudioContext||window.webkitAudioContext)();if(audio.state==='suspended')audio.resume();const o=audio.createOscillator(),g=audio.createGain();o.connect(g);g.connect(audio.destination);o.type=kind==='hit'?'sawtooth':'square';const t=audio.currentTime;const frequency={menu:340,hit:130,block:640,special:240,ko:80,round:440,match:520}[kind]||260;o.frequency.setValueAtTime(frequency,t);o.frequency.exponentialRampToValueAtTime(frequency*.42,t+.12);g.gain.setValueAtTime(kind==='menu'?.025:.045,t);g.gain.exponentialRampToValueAtTime(.001,t+.16);o.start(t);o.stop(t+.17);}catch(_){}
  }
  function toast(text){const node=$('#toast');node.textContent=text;node.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>node.classList.remove('show'),3500);}
  function focusFirst(){requestAnimationFrame(()=>{const target=state.screen==='fight'&&!state.paused?fight:app.querySelector('[data-autofocus]')||app.querySelector('.nav-item');target?.focus({preventScroll:true});});}
  function heading(kicker,title,description,back){const h=el('div','page-heading');h.innerHTML='<div><div class="eyebrow">'+escapeText(kicker)+'</div><h1>'+escapeText(title)+'</h1>'+(description?'<p>'+escapeText(description)+'</p>':'')+'</div>';h.append(button('← '+(back||'VOLTAR'),()=>goBack(),'back-button'));app.append(h);}
  function go(screen){
    state.screen=screen;state.pendingFight=false;document.body.dataset.screen=screen;input.clear();input.binding=null;hero=preview=detail=fight=hud=worldMap=null;overlayDrawn=false;accumulator=0;previousTick=null;pausedFrameDrawn=false;
    if(screen!=='fight')stopLunarMusic();
    document.querySelectorAll('[data-screen]').forEach(b=>b.classList.toggle('active',b.dataset.screen===screen));
    app.innerHTML='';
    if(screen==='home'){state.engine=null;state.finisherPreview=null;state.paused=false;home();}
    else if(screen==='select'||screen==='roster')selection();
    else if(screen==='arenas'||screen==='stageSelect')arenas();
    else if(screen==='controls')controls();
    else if(screen==='moves')moveList();
    else if(screen==='fight')fightScreen();
    else if(screen==='story')storyHub();
    app.scrollTop=0;focusFirst();window.scrollTo({top:0,behavior:'instant'});
  }
  function goBack(){
    if(input.binding){input.binding=null;controls();return;}
    if(state.screen==='fight'){if(state.engine?.phase==='matchOver')go('home');else togglePause();return;}
    if(state.screen==='controls'&&state.returnTo==='fight'&&state.engine){state.returnTo='home';go('fight');showPause();return;}
    if(state.screen==='moves'){const back=state.movesReturn;state.movesReturn='home';if(back==='fight'&&state.engine){go('fight');showPause();}else go(back);return;}
    if(state.moon&&['select','roster','arenas','stageSelect'].includes(state.screen)){state.moon=false;state.country='BR';go(state.screen);return;}
    if(state.screen==='stageSelect'){state.step=1;state.inspect=state.chosen[1];state.country=fighters[state.inspect].country;go('select');return;}
    if(state.screen==='select'&&state.step===1){state.step=0;state.inspect=state.chosen[0];state.country=fighters[state.inspect].country;go('select');return;}
    go('home');
  }
  function begin(mode){state.mode=mode;state.step=0;state.inspect=state.chosen[0];state.country=fighters[state.inspect].country||'BR';state.moon=state.country==='MOON';go('select');}
  function home(){
    const section=el('section','home-hero');
    section.innerHTML='<canvas class="hero-art" id="heroCanvas" width="960" height="540" aria-label="Sertão de Pernambuco em pixel art com Bento Brasa"></canvas><div class="hero-shade"></div><div class="scanlines"></div><span class="hero-index">01 / PRIMEIRA BRASA</span><div class="hero-content"><div class="eyebrow"><span class="tiny-star">✦</span> SETE PAÍSES. UMA BRASA.</div><h1 class="hero-title">BRASA</h1><div class="hero-subtitle">ECOS DO BRASIL</div><div class="hero-rule"></div><p class="hero-copy">O mundo entra na arena.<br>A jornada começa no Brasil.</p><div class="menu-buttons" id="mainMenu"></div></div><span class="hero-note">SERTÃO, COURO & FOGO</span><div class="hero-location"><small>ARENA EM DESTAQUE / PERNAMBUCO</small><strong>O SOL NÃO SE PÕE EM PAZ.</strong></div>';
    app.append(section);hero=$('#heroCanvas');
    const menu=$('#mainMenu');const primary=button('DUELO LIVRE',()=>begin('cpu'));const storyStart=button('MODO HISTÓRIA',()=>begin('story'),'action primary');storyStart.dataset.autofocus='';menu.append(storyStart,...(story.available?[button('CONTINUAR JORNADA',()=>{state.mode='story';go('story');})]:[]),primary,button('VERSUS LOCAL',()=>begin('versus')),button('TREINO LIVRE',()=>begin('training')));
    const links=el('div','home-links');links.append(button('ELENCO',()=>go('roster'),'home-link'),button('ARENAS',()=>go('arenas'),'home-link'),button('GOLPES & COMBOS',()=>openMoves(),'home-link'),button('OPÇÕES',()=>{state.returnTo='home';go('controls');},'home-link'));section.querySelector('.hero-content').append(links);
  }
  function worldLayout(purpose){
    const country=countries.find(c=>c.id===state.country)||countries[0];
    const layout=el('section','world-layout'),mapArea=el('div','world-area');
    mapArea.innerHTML='<div class="map-caption"><span>'+(state.moon?'ÓRBITA 08 / LUA':'BRASA WORLD TOUR')+'</span><strong>'+(purpose==='arena'?'ESCOLHA O PALCO':'ESCOLHA O PAÍS')+'</strong><span class="map-device">↑ ↓ ← → / ENTER / × A</span></div><div class="world-canvas-wrap"><canvas id="worldCanvas" width="1120" height="636" aria-label="Mapa '+(state.moon?'lunar':'múndi com países e bandeiras')+' interativo"></canvas></div>';
    const routes=el('div','country-routes');routes.dataset.columns='4';
    countries.filter(c=>c.id!=='MOON').forEach(c=>{const b=el('button','country-route nav-item'+(c.id===state.country?' selected':''));b.dataset.country=c.id;if(c.id===state.country)b.dataset.autofocus='';b.setAttribute('aria-label','Escolher país '+c.name);b.setAttribute('aria-pressed',String(c.id===state.country));b.innerHTML='<canvas width="42" height="28" aria-hidden="true"></canvas><span>'+escapeText(c.name)+'</span>';window.BrasaWorldMap.flag(b.querySelector('canvas'),c.id);b.onfocus=()=>worldMap?.setCountry(c.id);b.onmouseenter=()=>worldMap?.setCountry(c.id);b.onmouseleave=()=>worldMap?.setCountry(state.country);b.onclick=()=>purpose==='story'?toast('Siga o capítulo atual para avançar pela rota internacional.'):chooseCountry(c.id);routes.append(b);});
    const moon=el('button','country-route moon-route nav-item'+(state.moon?' selected':''));moon.dataset.country='MOON';if(state.moon)moon.dataset.autofocus='';moon.innerHTML='<canvas width="42" height="28" aria-hidden="true"></canvas><span>➡ MAPA LUA</span>';window.BrasaWorldMap.flag(moon.querySelector('canvas'),'MOON');moon.onclick=()=>purpose==='story'?toast(story.save?.chapter>=7?'Os guardiões esperam na rota lunar.':'A rota da Lua se abre após as sete vitórias na Terra.'):chooseCountry('MOON');routes.append(moon);mapArea.append(routes);
    const legend=el('div','map-legend');legend.innerHTML='<span><i class="map-dot"></i> PAÍSES JOGÁVEIS</span><span><i class="map-dot unavailable"></i> OUTRAS REGIÕES</span><span>'+(state.moon?'SEGREDOS DESBLOQUEADOS '+story.unlocks.length+' / 4':'SETE PAÍSES. UM SÓ MUNDO.')+'</span>';mapArea.append(legend);
    const panel=el('aside','world-sidebar');panel.id='worldSidebar';layout.append(mapArea,panel);app.append(layout);worldMap=new window.BrasaWorldMap($('#worldCanvas'),{selected:state.country,moon:state.moon,onCountry:purpose==='story'?id=>{worldMap.setCountry(id);toast('Complete o próximo capítulo para avançar pela rota.');}:chooseCountry});worldMap.draw(0,input.config.reducedMotion);return {panel,country};
  }
  function chooseCountry(id){state.country=id;state.moon=id==='MOON';const stageMode=['arenas','stageSelect'].includes(state.screen);if(!stageMode){const list=fighters.filter(f=>f.country===id);if(!list.some(f=>f.id===fighters[state.inspect]?.id))state.inspect=fighters.indexOf(list.find(f=>story.unlocked(f.id))||list[0]);}else{const first=stages.findIndex(s=>s.country===id);if(first>=0)state.arena=first;}const same=state.screen;go(same);requestAnimationFrame(()=>document.querySelector(stageMode?'[data-arena]':'[data-fighter="'+state.inspect+'"]')?.focus({preventScroll:true}));}
  function selection(){
    const picking=state.screen==='select';
    if(!state.country)state.country='BR';state.moon=state.country==='MOON';
    heading(picking?modes[state.mode]:'ARQUIVO DE LUTADORES',picking?(state.mode==='story'?'QUEM VAI COMEÇAR A JORNADA?':state.step===0?'ESCOLHA O JOGADOR 1':'ESCOLHA '+(state.mode==='cpu'?'O ADVERSÁRIO':'O JOGADOR 2')):'CONHEÇA O ELENCO','Escolha um país no mapa e um lutador no painel. Teclado e controle funcionam em todas as etapas.');
    if(picking){const step=el('div','contract-bar');step.innerHTML='<span class="'+(state.step===0?'active':'')+'">01 / JOGADOR 1</span><span class="sep">────</span><span class="'+(state.step===1?'active':'')+'">02 / '+(state.mode==='story'?'JORNADA':state.mode==='cpu'?'ADVERSÁRIO CPU':'JOGADOR 2')+'</span><span class="sep">────</span><span>03 / '+(state.mode==='story'?'PRÓXIMO CAPÍTULO':'ARENA')+'</span>';app.append(step);}
    const {panel,country}=worldLayout('fighter');panel.innerHTML='<div class="country-heading"><div><small>NACIONALIDADE</small><h2>'+escapeText(country.name)+'</h2></div><canvas width="60" height="40" aria-hidden="true"></canvas></div>';
    window.BrasaWorldMap.flag(panel.querySelector('canvas'),country.id);
    const description=el('p','country-description',country.description);panel.append(description);
    const info=el('div','fighter-detail world-fighter-detail');info.id='fighterDetail';panel.append(info);
    const grid=el('div','world-fighter-grid');grid.dataset.columns='3';
    const available=fighters.map((fighter,index)=>({fighter,index})).filter(({fighter})=>fighter.country===state.country);
    available.forEach(({fighter,index})=>{const locked=!story.unlocked(fighter.id),b=el('button','world-fighter-card nav-item'+(locked?' locked':''));b.dataset.fighter=index;b.disabled=locked;b.setAttribute('aria-label',fighter.name+(locked?', bloqueado. Vença no modo história.':', '+fighter.style));b.setAttribute('aria-disabled',String(locked));b.innerHTML='<canvas width="120" height="100" aria-hidden="true"></canvas><span>'+escapeText(locked?'SEGREDO LUNAR':fighter.name)+'</span>'+(locked?'<strong class="lock-mark">🚫</strong>':'');b.onfocus=()=>inspectFighter(index);b.onmouseenter=()=>inspectFighter(index);b.onclick=()=>{inspectFighter(index);if(locked){toast('Derrote este guardião no Modo História para desbloquear.');return;}if(picking)confirmFighter();};grid.append(b);const portrait=b.querySelector('canvas');if(locked){const c=portrait.getContext('2d');c.clearRect(0,0,120,100);render.fighter(c,fighter,60,96,.86,'idle',1,0,{shadow:false});c.globalCompositeOperation='source-in';c.fillStyle='#01030a';c.fillRect(0,0,120,100);c.globalCompositeOperation='destination-over';c.fillStyle='#292943';c.fillRect(0,0,120,100);c.globalCompositeOperation='source-over';}else render.portrait(portrait,fighter,{pose:'idle'});});panel.append(grid);
    if(!available.some(v=>v.index===state.inspect))state.inspect=available[0]?.index||0;
    inspectFighter(state.inspect);
  }
  function inspectFighter(index){
    if(!fighters[index])return;state.inspect=index;state.previewStarted=performance.now()/1000;const fighter=fighters[index],picking=state.screen==='select',locked=!story.unlocked(fighter.id);
    document.querySelectorAll('[data-fighter]').forEach(b=>{const selected=Number(b.dataset.fighter)===index;b.classList.toggle('selected',selected);b.setAttribute('aria-pressed',String(selected));});
    const panel=$('#fighterDetail');if(!panel)return;
    panel.classList.toggle('locked-profile',locked);
    panel.innerHTML='<div class="world-profile-top"><canvas class="detail-art" width="280" height="220" aria-label="'+(locked?'Silhueta de personagem secreto lunar':'Apresentação animada de '+escapeText(fighter.name))+'"></canvas><div class="world-profile-copy"><div class="eyebrow">'+escapeText(locked?'GUARDIÃO SECRETO':fighter.archetype)+'</div><h2 class="detail-title">'+escapeText(locked?'???':fighter.name)+'</h2><div class="detail-origin">'+escapeText(fighter.nationality||fighter.origin)+'</div><p class="detail-desc">'+escapeText(locked?'Derrote este guardião na jornada lunar do Modo História para usá-lo em outros modos.':fighter.style)+'</p>'+(locked?'<strong class="profile-lock">🚫 BLOQUEADO</strong>':'')+'</div></div>';
    detail=panel.querySelector('canvas');
    if(!locked){const stats=el('div','stats');stats.innerHTML=Object.entries(fighter.stats||{}).map(([key,value])=>'<div><span>'+({power:'FORÇA',speed:'VELOCIDADE',reach:'ALCANCE',defense:'DEFESA'})[key]+'</span><span class="stat-pips">'+[1,2,3,4,5].map(i=>'<i class="'+(i<=value?'filled':'')+'"></i>').join('')+'</span></div>').join('');panel.append(stats);
      const confirm=button(picking?(state.mode==='story'?'COMEÇAR JORNADA':'CONFIRMAR '+(state.step===0?'JOGADOR 1':state.mode==='cpu'?'ADVERSÁRIO':'JOGADOR 2')):'JOGAR COM '+fighter.name.split(' ')[0].toUpperCase(),()=>{if(picking)confirmFighter();else{state.chosen[0]=index;state.mode='cpu';state.step=1;state.inspect=state.chosen[1];state.country=fighters[state.inspect].country;go('select');}},'action primary detail-action');panel.append(confirm);
      const lore=el('details','fighter-lore');lore.innerHTML='<summary>HISTÓRIA & HABILIDADES</summary><p>'+escapeText(fighter.description)+'</p><p>'+escapeText(fighter.story)+'</p><strong>'+escapeText(playableSpecial(fighter)?.name)+'</strong><p>'+escapeText(playableSpecial(fighter)?.description)+'</p>';panel.append(lore);panel.append(button('GOLPES & COMBOS',()=>openMoves(picking?state.step:0),'back-button move-list-link'));
    }
    drawFighterPreview(0);
  }
  function drawFighterPreview(time){if(!detail)return;const fighter=fighters[state.inspect],ctx=detail.getContext('2d'),locked=!story.unlocked(fighter.id);if(window.BrasaFighters?.ready&&!window.BrasaFighters.ready(fighter)){ctx.fillStyle='#0b1727';ctx.fillRect(0,0,detail.width,detail.height);ctx.fillStyle='#9babc1';ctx.font='11px Consolas,monospace';ctx.textAlign='center';ctx.fillText('PREPARANDO LUTADOR',140,115);ctx.textAlign='left';return;}ctx.clearRect(0,0,detail.width,detail.height);ctx.save();const elapsed=time>0?Math.max(0,time-(state.previewStarted||0)):0;const presented=!locked&&!input.config.reducedMotion&&window.BrasaPresentation?.drawEntrance(ctx,fighter,140,208,1.85,1,.32+Math.min(.68,(elapsed%6)/3.5),{companions:false});if(!presented)render.fighter(ctx,fighter,140,208,1.85,'idle',1,time,{shadow:!locked});if(locked){ctx.globalCompositeOperation='source-in';ctx.fillStyle='#01050e';ctx.fillRect(0,0,detail.width,detail.height);}ctx.globalCompositeOperation='destination-over';ctx.fillStyle='#0b1727';ctx.fillRect(0,0,detail.width,detail.height);ctx.restore();ctx.fillStyle=locked?'#615c83':(fighter.accent||'#dec095')+'55';ctx.fillRect(22,210,236,2);}
  function confirmFighter(){
    const selected=fighters[state.inspect];if(!story.unlocked(selected.id)){toast('Personagem bloqueado. Vença-o no Modo História.');return;}
    state.chosen[state.step]=state.inspect;tone('menu');
    if(state.mode==='story'){story.start(selected.id);state.storyResult=null;go('story');return;}
    if(state.step===0){state.step=1;state.inspect=state.chosen[1];state.country=fighters[state.inspect].country||'BR';state.moon=state.country==='MOON';go('select');}
    else{const home=stages.findIndex(s=>s.id===fighters[state.chosen[0]].stage);state.arena=home>=0?home:0;state.country=stages[state.arena].country||'BR';state.moon=state.country==='MOON';go('stageSelect');}
  }
  function openMoves(player=0){
    const from=state.screen;state.movesPlayer=player;state.movesReturn=from;
    if(from==='fight'){state.paused=true;state.inspect=state.chosen[player];}
    else if(from==='home')state.inspect=state.chosen[0];
    go('moves');
  }
  function commandText(token,player,pad=false){
    const facing=state.engine?.players[player]?.facing||(player? -1:1);
    const key=action=>pad?input.padLabel(player,action):input.label(input.config.keyboard[player][action]);
    const forward=pad?'→':key(facing>0?'right':'left');
    const forms={defense:['block','light'],finisher:['special'],super:['heavy','special'],dodge:['block','kick'],throw:['block','heavy'],lowLight:['down','light'],uppercut:['down','heavy'],sweep:['down','kick'],airLight:['air','light'],airHeavy:['air','heavy'],airKick:['air','kick'],special0:['special'],special1:['down','special'],special2:['forward','special']};
    if(pad){forms.special1=['special2'];forms.special2=['special3'];forms.super=['super'];forms.throw=['grab'];}
    return (forms[token]||[token]).map(part=>part==='forward'?forward:part==='air'?'NO AR':key(part)).join(' + ');
  }
  function commandMarkup(sequence,player){
    const row=pad=>sequence.map(token=>'<kbd>'+escapeText(commandText(token,player,pad))+'</kbd>').join('<span class="command-next">›</span>');
    return '<div class="command-row"><small>TECLADO</small>'+row(false)+'</div><div class="command-row"><small>CONTROLE</small>'+row(true)+'</div>';
  }
  function moveList(){
    heading('CADERNO DE COMBATE','GOLPES & COMBOS','Três especiais, um super e duas sequências por lutador. → significa em direção ao adversário.');
    const players=el('div','moves-player-select');[0,1].forEach(player=>{const b=button('COMANDOS P'+(player+1),()=>{state.movesPlayer=player;go('moves');},'toggle');b.setAttribute('aria-pressed',String(state.movesPlayer===player));players.append(b);});app.append(players);
    const tabs=el('div','moves-fighter-tabs');tabs.dataset.columns=window.innerWidth<760?'3':'6';
    fighters.forEach((fighter,index)=>{const locked=!story.unlocked(fighter.id);const b=button(locked?'🚫 SEGREDO LUNAR':fighter.name,()=>{state.inspect=index;paintMoves();},'move-fighter-tab');b.disabled=locked;b.dataset.movesFighter=index;tabs.append(b);});app.append(tabs);
    const body=el('section','moves-body');body.id='movesBody';app.append(body);paintMoves();
  }
  function paintMoves(){
    const fighter=fighters[state.inspect],set=moveSet(fighter),player=state.movesPlayer,body=$('#movesBody');if(!body)return;
    document.querySelectorAll('[data-moves-fighter]').forEach(b=>{const selected=Number(b.dataset.movesFighter)===state.inspect;b.classList.toggle('selected',selected);b.setAttribute('aria-pressed',String(selected));});
    const normals=[['light',set?.normalNames?.light||'Soco leve','Rápido e próximo. Inicia encadeamentos.'],['heavy',set?.normalNames?.heavy||'Soco forte','Mais dano; pode seguir um leve confirmado.'],['kick',set?.normalNames?.kick||'Chute','Alcance para continuar a sequência.'],['lowLight','Jab baixo','Agache e ataque por baixo da guarda alta.'],['uppercut','Gancho ascendente','Intercepta adversários no ar.'],['sweep','Rasteira','Atinge baixo. Defenda agachado.'],['airLight','Soco aéreo','Pule antes de atacar.'],['airHeavy','Soco forte aéreo','Ataque forte durante o salto.'],['airKick','Chute aéreo','Ataque alto durante o salto.'],['grab','Agarrão','Vence a defesa; exige proximidade.']];
    body.innerHTML='<div class="moves-profile"><canvas width="160" height="120" aria-label="'+escapeText(fighter.name)+'"></canvas><div><div class="eyebrow">'+escapeText(fighter.origin)+'</div><h2>'+escapeText(fighter.name)+'</h2><p>Solte e pressione cada botão novamente. Os comandos acompanham os seus ajustes de P'+(player+1)+'.</p></div></div><h3 class="moves-section-title">ESPECIAIS</h3><div class="special-moves">'+(set?.specials||[]).map((move,index)=>'<article class="move-card"><span class="move-index">0'+(index+1)+'</span><h3>'+escapeText(move.name)+'</h3>'+commandMarkup(['special'+index],player)+'<p>'+escapeText(move.description)+'</p><small class="move-cost">'+(move.meterCost?'BRASA: '+move.meterCost+' · ':'')+'RECARGA '+Number(move.cooldown||1.55).toLocaleString('pt-BR')+'s</small></article>').join('')+'</div><h3 class="moves-section-title">COMBOS DO PERSONAGEM</h3><div class="character-combos">'+(set?.combos||[]).map(combo=>'<article class="move-card"><h3>'+escapeText(combo.name)+'</h3>'+commandMarkup(combo.sequence,player)+'<p>'+escapeText(combo.description)+'</p></article>').join('')+'</div><p class="combo-rule">Acerte o primeiro golpe e pressione o próximo durante o contato. Bloqueios e golpes no vazio não permitem o mesmo cancelamento. O especial encerra a sequência; o dano diminui a cada acerto do combo. Com 100 de BRASA, pressione R3 no controle para o super. No teclado, use forte + especial. Os especiais comuns causam no máximo 20% da vida por uso; o super, 30%.</p><h3 class="moves-section-title">GOLPES E DEFESA</h3><div class="normal-moves">'+normals.map(([token,name,description])=>'<article class="move-card"><h3>'+escapeText(name)+'</h3>'+commandMarkup([token],player)+'<p>'+escapeText(description)+'</p></article>').join('')+'</div><p class="combo-rule">Defesa alta: segure defesa ou recue. Defesa baixa: segure baixo + defesa. → acompanha o lado do adversário; depois de uma troca de lado, inverta a direção no teclado.</p>';
    render.portrait(body.querySelector('canvas'),fighter,{pose:'idle'});
    const superCard=el('div','advanced-moves');superCard.innerHTML='<article class="move-card super-move"><h3>'+escapeText(set?.super?.name||'SUPERESPECIAL')+'</h3>'+commandMarkup(['super'],player)+'<p>'+escapeText(set?.super?.description||'Seu ataque cinematográfico exclusivo. Requer 100 de BRASA; a barra só é consumida ao ativá-lo.')+'</p></article><article class="move-card"><h3>ESQUIVA & AGARRÃO</h3>'+commandMarkup(['dodge'],player)+'<p>Defesa + chute: desvio rápido para escapar de ataques, com breve recuperação.</p>'+commandMarkup(['throw'],player)+'<p>Defesa + forte: agarrão de curta distância. Também funciona pelo botão de agarrar configurado.</p></article>';body.append(superCard);
    const advanced=el('div','advanced-moves');advanced.innerHTML='<article class="move-card"><h3>'+escapeText(set.defenseName||fighter.defenseName)+'</h3>'+commandMarkup(['defense'],player)+'<p>Segure defesa e pressione leve. Contra-ataque frontal com 20 de BRASA e recarga de 2,2s. Agarrões e ataques baixos vencem a janela defensiva.</p></article><article class="move-card"><h3>'+escapeText(set.finisher?.name||fighter.finisher?.name)+'</h3>'+commandMarkup(['finisher'],player)+'<p>Após vencer o segundo round por nocaute, solte e pressione especial durante a janela de 3 segundos. No treino, use VER ARREMATE para assistir.</p></article>';body.append(advanced);
    const practice=button('TREINAR COM '+fighter.name.toUpperCase(),()=>{state.mode='training';state.chosen[0]=state.inspect;state.step=1;state.inspect=state.chosen[1];go('select');},'action primary moves-practice');practice.disabled=!story.unlocked(fighter.id);if(practice.disabled)practice.firstElementChild.textContent='DESBLOQUEIE NO MODO HISTÓRIA';body.append(practice);
  }
  function arenas(){
    const picking=state.screen==='stageSelect';state.moon=state.country==='MOON';heading(picking?'DOIS LUTADORES. UMA ARENA.':'ATLAS DE ARENAS',picking?'ESCOLHA ONDE LUTAR':'DEPOIS DO HORIZONTE','Cinco arenas brasileiras, seis destinos internacionais e dois palcos na Lua. Escolha o país para ver os cenários.');
    const {panel,country}=worldLayout('arena');panel.innerHTML='<div class="country-heading"><div><small>DESTINO</small><h2>'+escapeText(country.name)+'</h2></div><canvas width="60" height="40" aria-hidden="true"></canvas></div>';window.BrasaWorldMap.flag(panel.querySelector('canvas'),country.id);
    const feature=el('section','world-arena-feature');feature.id='arenaFeature';panel.append(feature);const grid=el('div','world-arena-grid');grid.dataset.columns='2';
    const local=stages.map((stage,index)=>({stage,index})).filter(({stage})=>stage.country===state.country);
    local.forEach(({stage,index})=>{const b=el('button','arena-tile nav-item');b.dataset.arena=index;b.setAttribute('aria-label',stage.name+', '+stage.location);b.innerHTML='<canvas width="240" height="120" aria-hidden="true"></canvas><div><strong>'+escapeText(stage.name)+'</strong></div>';b.onfocus=()=>inspectArena(index);b.onclick=()=>inspectArena(index);grid.append(b);render.stage(b.querySelector('canvas').getContext('2d'),stage,240,120,17);});panel.append(grid);
    if(!local.some(v=>v.index===state.arena))state.arena=local[0]?.index||0;inspectArena(state.arena);
  }
  function inspectArena(index){
    state.arena=index;const stage=stages[index],picking=state.screen==='stageSelect';document.querySelectorAll('[data-arena]').forEach(b=>b.classList.toggle('selected',Number(b.dataset.arena)===index));const feature=$('#arenaFeature');if(!feature)return;
    feature.innerHTML='<canvas id="arenaPreview" width="960" height="540" class="arena-preview" aria-label="Prévia animada de '+escapeText(stage.name)+'"></canvas><div class="eyebrow">'+escapeText(stage.location)+'</div><h2>'+escapeText(stage.name)+'</h2><p>'+escapeText(stage.description)+'</p><div class="animations">'+escapeText(stage.tagline)+'</div>';preview=$('#arenaPreview');
    const strip=el('div','match-strip');if(picking)strip.innerHTML='<span class="match-names">'+escapeText(fighters[state.chosen[0]].name)+'<span class="versus">VS</span>'+escapeText(fighters[state.chosen[1]].name)+'</span>';
    strip.append(button(picking?'LUTAR':'JOGAR NESTA ARENA',()=>{if(!picking){state.mode='cpu';if(!story.unlocked(fighters[state.chosen[0]].id))state.chosen[0]=0;if(!story.unlocked(fighters[state.chosen[1]].id))state.chosen[1]=1;}startFight();},'action primary'));feature.append(strip);
  }
  function storyHub(){
    if(!story.save){begin('story');return;}state.mode='story';const save=story.save,current=story.current(),player=fighters.find(f=>f.id===save.fighterId);state.country=current?.country||'MOON';state.moon=state.country==='MOON';
    heading('MODO HISTÓRIA / '+(save.complete?'JORNADA CONCLUÍDA':'CAPÍTULO '+(save.chapter+1)+' DE '+save.chapters.length),save.complete?'A BRASA ATRAVESSOU O MUNDO':current.title,player.name+' · '+save.wins+' vitórias · '+save.losses+' derrotas · Progresso salvo neste computador.');
    const {panel}=worldLayout('story');worldMap.options.route=save.chapters.filter(c=>!c.secret).map(c=>c.country);
    const progress=el('div','story-progress');progress.innerHTML='<span style="width:'+Math.round(story.progress*100)+'%"></span>';app.querySelector('.world-area').append(progress);
    const itinerary=el('div','story-itinerary');itinerary.dataset.columns='4';save.chapters.forEach((chapter,index)=>{const done=index<save.chapter,now=index===save.chapter,b=el('button','story-stop nav-item'+(done?' completed':'')+(now?' current':''));b.disabled=!done&&!now;b.innerHTML='<small>'+String(index+1).padStart(2,'0')+' / '+(chapter.secret?'LUA':escapeText(countries.find(c=>c.id===chapter.country)?.name||chapter.country))+'</small><strong>'+(done?'✓ ':now?'▶ ':'🔒 ')+escapeText(chapter.title)+'</strong>';b.onclick=()=>{if(now)startStoryBattle();else toast('Capítulo concluído: '+chapter.title);};itinerary.append(b);});app.querySelector('.world-area').append(itinerary);
    if(save.complete){panel.innerHTML='<div class="story-complete"><span>✦</span><div class="eyebrow">ONZE CAPÍTULOS. UMA NOVA ÓRBITA.</div><h2>A BRASA<br>CONTINUA.</h2><p>'+escapeText(player.name)+' devolveu os fragmentos à Terra. Os quatro guardiões lunares agora podem lutar ao seu lado em todos os modos.</p><p>'+story.unlocks.length+' / 4 SEGREDOS DESBLOQUEADOS</p></div>';panel.append(button('NOVA JORNADA',()=>begin('story'),'action primary'),button('DUELO LIVRE',()=>begin('cpu')),button('VOLTAR AO INÍCIO',()=>go('home')));return;}
    const rival=fighters.find(f=>f.id===current.opponent),stage=stages.find(a=>a.id===current.stage);panel.innerHTML='<div class="eyebrow">PRÓXIMO DESAFIO / '+(current.secret?'ENCONTRO SECRETO':'VIAGEM INTERNACIONAL')+'</div><h2 class="story-rival">'+escapeText(current.secret&&!story.unlocked(rival.id)?'GUARDIÃO LUNAR':rival.name)+'</h2><canvas id="storyPreview" width="960" height="540" class="arena-preview" aria-label="Prévia animada do próximo cenário"></canvas><h3>'+escapeText(stage.name)+'</h3><p class="story-event">'+escapeText(current.text)+'</p><div class="story-versus">'+escapeText(player.name)+' <b>VS</b> '+escapeText(current.secret&&!story.unlocked(rival.id)?'???':rival.name)+'</div>';
    state.arena=stages.indexOf(stage);preview=$('#storyPreview');panel.closest('.world-layout').querySelectorAll('[data-autofocus]').forEach(n=>delete n.dataset.autofocus);const enter=button(current.secret?'ENFRENTAR O GUARDIÃO':'VIAJAR & LUTAR',startStoryBattle,'action primary');enter.dataset.autofocus='';panel.append(enter,button('SALVAR & VOLTAR AO INÍCIO',()=>{story.persist();go('home');},'back-button'));panel.append(el('p','credit-line',story.storageOK?'Salvamento automático após cada luta. Derrotas permitem tentar novamente.':'O armazenamento local está indisponível; esta jornada permanece apenas durante a sessão atual.'));
  }
  function startStoryBattle(){const chapter=story.current();if(!chapter){go('story');return;}state.mode='story';state.chosen=[fighters.findIndex(f=>f.id===story.save.fighterId),fighters.findIndex(f=>f.id===chapter.opponent)];state.arena=stages.findIndex(a=>a.id===chapter.stage);state.storyRecorded=false;state.storyResult=null;startFight();}
  function stopLunarMusic(){if(lunarMusicTimer){clearInterval(lunarMusicTimer);lunarMusicTimer=null;}}
  function syncLunarMusic(){
    const lunar=stages[state.arena]?.country==='MOON';if(!state.sound||state.screen!=='fight'||state.paused||!lunar){stopLunarMusic();return;}if(lunarMusicTimer)return;lunarMusicStep=0;
    const note=()=>{if(!state.sound||state.paused||document.hidden)return;try{audio ||=new(window.AudioContext||window.webkitAudioContext)();if(audio.state==='suspended')audio.resume();const tones=[110,164.81,130.81,196,146.83,174.61,130.81,82.41],t=audio.currentTime;const oscillator=audio.createOscillator(),gain=audio.createGain();oscillator.type='sine';oscillator.frequency.setValueAtTime(tones[lunarMusicStep++%tones.length],t);gain.gain.setValueAtTime(.0001,t);gain.gain.exponentialRampToValueAtTime(.038,t+.16);gain.gain.exponentialRampToValueAtTime(.0001,t+1.6);oscillator.connect(gain);gain.connect(audio.destination);oscillator.start(t);oscillator.stop(t+1.7);if(lunarMusicStep%2===0){const high=audio.createOscillator(),g=audio.createGain();high.type='triangle';high.frequency.setValueAtTime(tones[(lunarMusicStep+3)%tones.length]*4,t);g.gain.setValueAtTime(.012,t);g.gain.exponentialRampToValueAtTime(.0001,t+.9);high.connect(g);g.connect(audio.destination);high.start(t);high.stop(t+1);}}catch(_){}};note();lunarMusicTimer=setInterval(note,700);
  }
  function resetFightWorld(){
    const engine=state.engine;if(!engine||!window.BrasaCamera)return;
    const groundY=window.BrasaStages?.grounding?.(stages[state.arena])?.groundY||464;
    state.camera=new window.BrasaCamera({width:960,height:540,worldWidth:engine.worldWidth||2880,groundY,fighterMargin:engine.fighterMargin||60});
    state.camera.reset(engine.players);engine.setViewport?.(state.camera.snapshot());
    state.worldRound=engine.round;state.worldEngine=engine;
  }
  function updateFightWorld(dt){
    const engine=state.engine;if(!engine||!window.BrasaCamera)return;
    if(!state.camera||state.worldRound!==engine.round||state.worldEngine!==engine)resetFightWorld();
    // The view holds with the fighters through the final frozen simulation step.
    if(engine.phase==='fight'&&(engine.freeze>0||previousTick?.engine===engine&&previousTick.round===engine.round&&previousTick.freeze>0))return;
    state.camera.update(dt,engine.players,{reducedMotion:input.config.reducedMotion});
    engine.setViewport?.(state.camera.snapshot());
  }
  function combatEvent(event){
    if(['hit','block','special','ko','round','match','defense','ice','finisher'].includes(event.type))tone(event.type);
    if(event.type==='combo')state.trainingCombo=event;
    if(event.type==='match'&&state.mode==='story'&&!state.storyRecorded){state.storyRecorded=true;state.storyResult=story.record(event.winner===0);}
  }
  // Load the chosen pair before combat; unrelated character atlases stay unloaded.
  function fightArtReady(){const art=window.BrasaFighters;return state.chosen.every(i=>(!art?.ready||art.ready(fighters[i]))&&(!art?.readyMotion||art.readyMotion(fighters[i])));}
  function fightArtProgress(){const art=window.BrasaFighters,selected=state.chosen.map(i=>fighters[i]),prepared=selected.filter(f=>(!art?.ready||art.ready(f))&&(!art?.readyMotion||art.readyMotion(f))).length;return {ready:prepared,total:selected.length,prepared,fighters:selected.length};}
  function updateFightLoading(){
    if(!state.pendingFight)return;let panel=$('#fightLoading');
    if(!panel){panel=el('div','fight-loading');panel.id='fightLoading';panel.setAttribute('role','status');panel.setAttribute('aria-live','polite');panel.innerHTML='<strong>PREPARANDO ANIMAÇÕES…</strong><p></p><div class="fight-loading-track"><span></span></div><small>A luta começa automaticamente quando os dois lutadores estiverem prontos.</small>';app.append(panel);}
    const progress=fightArtProgress(),fraction=Math.min(progress.total?progress.ready/progress.total:1,progress.prepared/Math.max(1,progress.fighters),fightArtReady()?1:.99);panel.querySelector('p').textContent=(progress.total?progress.ready+' / '+progress.total+' CONJUNTOS · ':'')+progress.prepared+' / '+progress.fighters+' LUTADORES';panel.querySelector('.fight-loading-track span').style.width=Math.round(fraction*100)+'%';
  }
  function startFight(){if(state.mode!=='story'&&state.chosen.some(i=>!story.unlocked(fighters[i].id))){toast('Derrote os guardiões no Modo História para selecioná-los.');begin(state.mode);return;}if(!fightArtReady()){state.pendingFight=true;updateFightLoading();return;}state.pendingFight=false;state.trainingCombo=null;state.finisherPreview=null;state.storyRecorded=false;state.engine=new window.BrasaCombat({fighters:state.chosen.map(i=>fighters[i]),stage:stages[state.arena],mode:state.mode==='story'?'cpu':state.mode,difficulty:state.difficulty,introDuration:8.8,finishers:true,fighterScale:1,visualGeometry:true,onEvent:combatEvent});if(window.BrasaCamera)resetFightWorld();state.paused=false;go('fight');}
  function previewFinisher(){
    const engine=state.engine;if(!engine||state.mode!=='training')return;
    state.paused=false;$('.fight-overlay')?.remove();overlayDrawn=false;input.clear();
    state.finisherPreview={time:0};fight?.focus({preventScroll:true});
  }
  function fightScreen(){
    const engine=state.engine;if(!engine){go('home');return;}
    const shell=el('div','fight-shell');shell.id='fightShell';shell.innerHTML='<canvas id="fightCanvas" class="fight-canvas" width="480" height="270" aria-label="Partida de luta em andamento"></canvas><div class="fight-top">'+hudMarkup(engine.players[0],0)+'<div class="timer"><span id="timer">60</span><small class="timer-label" id="roundLabel">ROUND 01</small></div>'+hudMarkup(engine.players[1],1)+'</div><div class="fight-bottom">'+[0,1].map(i=>'<div class="meter '+(i?'right':'')+'"><span id="superHint'+i+'">BRASA / SUPER · '+escapeText(commandText('super',i,input.slots[i]!==null))+'</span><div class="meter-track"><div class="meter-fill" id="meter'+i+'"></div></div></div>').join('')+'</div><div class="fight-banner" id="fightBanner"></div><div class="scanlines"></div>';
    app.append(shell);fight=$('#fightCanvas');fight.tabIndex=-1;hud={timer:$('#timer'),round:$('#roundLabel'),banner:$('#fightBanner'),hp:[$('#hp0'),$('#hp1')],meter:[$('#meter0'),$('#meter1')],pipNodes:[$('#pips0'),$('#pips1')].map(row=>Array.from(row.querySelectorAll('i'))),cache:Object.create(null)};
    const introHint=el('div','intro-skip','× / A / ENTER: PULAR ENTRADAS');introHint.id='introSkip';shell.append(introHint);
    hud.skip=introHint;
    const commands=el('div','fight-input-hints');commands.id='fightInputHints';commands.setAttribute('aria-label','Atalhos dos comandos de combate');commands.innerHTML=quickFightHelpMarkup();shell.append(commands);
    hud.quickHelp=commands;hud.superHints=[$('#superHint0'),$('#superHint1')];
    const meta=el('div','fight-meta');meta.innerHTML='<span><strong>'+escapeText(stages[state.arena].name).toUpperCase()+'</strong> · '+stages[state.arena].state+'<br><br>'+modes[state.mode]+' / MELHOR DE 3'+(state.mode==='training'?' / VIDA REGENERA':'')+'</span>';
    const tools=el('div','fight-controls');if(state.mode==='training')tools.append(button('REINICIAR TREINO',()=>{engine.rematch();if(window.BrasaCamera)resetFightWorld();state.trainingCombo=null;state.finisherPreview=null;state.paused=false;fight.focus({preventScroll:true});},''),button('VER ARREMATE',previewFinisher,''));tools.append(button('GOLPES & COMBOS',()=>openMoves(),''),button('PAUSAR [ESC]',togglePause,''));meta.append(tools);app.append(meta);
    if(state.mode==='training'){const readout=el('div','training-readout');readout.id='trainingReadout';readout.setAttribute('aria-label','Dados de treino');shell.append(readout);hud.training=readout;}
    const help=el('div','fight-help');help.id='fightHelp';help.innerHTML=fightHelpMarkup();app.append(help);
    hud.help=help;
    const note=el('p','story-note','Especiais usam recarga curta. No controle: △, R2 e L2 fazem os três especiais; R3 usa o super com BRASA cheia. No teclado, forte + especial usa o super. '+(state.mode==='training'?'O parceiro de treino fica parado e recupera a vida após um nocaute.':'Vença dois rounds para encerrar a partida.'));app.append(note);
    if(state.paused)showPause();else syncLunarMusic();
  }
  function hudMarkup(player,i){return '<div class="fighter-hud '+(i?'right':'')+'"><div class="hud-heading">'+(i?'<small>'+(['cpu','story'].includes(state.mode)?'CPU':'P2')+' / '+player.data.state+'</small>':'')+'<span>'+escapeText(player.data.name)+'</span>'+(!i?'<small>P1 / '+player.data.state+'</small>':'')+'</div><div class="life-track"><div class="life-fill" id="hp'+i+'"></div></div><div class="round-pips" id="pips'+i+'"><i></i><i></i></div></div>';}
  function helpMarkup(p){const pad=input.slots[p]!==null;return '<strong>P'+(p+1)+' / '+(pad?'CONTROLE':'TECLADO')+'</strong> '+['left','right','up','down','light','heavy','kick','special',...(pad?['special2','special3','super']:[]),'grab','block'].map(a=>'<kbd>'+escapeText(pad?input.padLabel(p,a):input.label(input.config.keyboard[p][a]))+'</kbd> '+({left:'',right:'MOVER',up:'PULAR',down:'ABAIXAR',light:'LEVE',heavy:'FORTE',kick:'CHUTE',special:'ESP. 1',special2:'ESP. 2',special3:'ESP. 3',super:'SUPER',grab:'AGARRAR',block:'DEFENDER'})[a]).join(' ')+(pad?' · OPTIONS / MENU: PAUSAR':'');}
  function quickFightHelpMarkup(){return (state.mode==='versus'?[0,1]:[0]).map(player=>{const pad=input.slots[player]!==null,label=action=>escapeText(pad?input.padLabel(player,action):input.label(input.config.keyboard[player][action]));return '<div class="fight-input-row"><strong>P'+(player+1)+'</strong><span><kbd>'+label('light')+'</kbd> SOCO</span><span><kbd>'+label('heavy')+'</kbd> FORTE</span><span><kbd>'+label('kick')+'</kbd> CHUTE</span><span><kbd>'+label('special')+'</kbd> ESP. 1</span>'+(pad?'<span><kbd>'+label('special2')+'</kbd> ESP. 2</span><span><kbd>'+label('special3')+'</kbd> ESP. 3</span><span><kbd>'+label('super')+'</kbd> SUPER</span>':'')+'<span><kbd>'+label('block')+'</kbd> DEFESA</span><small>'+(pad?'OPTIONS / MENU':'ESC')+' PAUSA</small></div>';}).join('');}
  function fightHelpMarkup(){return helpMarkup(0)+(state.mode==='versus'?'<br>'+helpMarkup(1):'<br>Defenda com o botão de defesa ou caminhando para trás. Agarrões vencem a guarda.')+'<br>Dash: dois toques rápidos na mesma direção.';}
  function togglePause(){if(state.screen!=='fight'||state.engine.phase==='matchOver')return;state.paused=!state.paused;previousTick=null;pausedFrameDrawn=false;input.clear();syncLunarMusic();if(state.paused)showPause();else{$('.fight-overlay')?.remove();overlayDrawn=false;fight?.focus();}}
  function showPause(){
    if($('#pauseOverlay'))return;$('.fight-overlay')?.remove();
    state.paused=true;previousTick=null;pausedFrameDrawn=false;syncLunarMusic();const overlay=el('div','fight-overlay');overlay.id='pauseOverlay';const panel=el('div','overlay-panel');panel.innerHTML='<div class="eyebrow">RESPIRA. A LUTA ESPERA.</div><h2>PAUSA</h2><p>'+escapeText(stages[state.arena].name)+' · '+modes[state.mode]+'</p>';
    const resume=button('CONTINUAR',togglePause,'action primary');resume.dataset.autofocus='';panel.append(resume);if(state.mode==='training')panel.append(button('VER ARREMATE',previewFinisher));panel.append(button('REINICIAR PARTIDA',()=>{state.engine.rematch();if(window.BrasaCamera)resetFightWorld();state.trainingCombo=null;state.finisherPreview=null;state.paused=false;go('fight');}),button('GOLPES & COMBOS — P1',()=>openMoves(0)),button('GOLPES & COMBOS — P2',()=>openMoves(1)),button('CONFIGURAR CONTROLES',()=>{state.returnTo='fight';go('controls');}),button('VOLTAR AO INÍCIO',()=>go('home')));overlay.append(panel);$('#fightShell').append(overlay);resume.focus({preventScroll:true});
  }
  function showResult(){
    if(overlayDrawn)return;overlayDrawn=true;stopLunarMusic();const engine=state.engine,winner=engine.players[engine.winner],campaign=state.mode==='story';
    if(campaign&&!state.storyRecorded){state.storyRecorded=true;state.storyResult=story.record(engine.winner===0);}
    const result=state.storyResult,overlay=el('div','fight-overlay'),panel=el('div','overlay-panel'+(campaign&&result?.unlocked?' unlock-celebration':''));
    if(campaign&&result?.unlocked){const f=fighters.find(v=>v.id===result.unlocked);panel.innerHTML='<div class="unlock-stars" aria-hidden="true">✦ ✦ ✦</div><div class="eyebrow">SEGREDO REVELADO</div><h2>DESBLOQUEADO!</h2><canvas width="280" height="180" aria-label="Personagem desbloqueado '+escapeText(f.name)+'"></canvas><h3>'+escapeText(f.name)+'</h3><p>O guardião está livre. Agora você pode escolhê-lo no mapa da Lua em Duelo, Versus e Treino.</p>';render.portrait(panel.querySelector('canvas'),f,{pose:'win'});}
    else panel.innerHTML='<div class="eyebrow">'+(campaign?(engine.winner===0?'O CAMINHO CONTINUA.':'SUA JORNADA ESPERA POR VOCÊ.'):'O CAUSO GANHOU OUTRO CAPÍTULO.')+'</div><h2>'+(campaign&&engine.winner!==0?'TENTE OUTRA VEZ':'VITÓRIA')+'</h2><p><strong>'+escapeText(winner?.data.name||'EMPATE')+'</strong><br>'+engine.players[0].rounds+' × '+engine.players[1].rounds+' ROUNDS</p>';
    if(campaign){panel.append(button(result?.won?(result.complete?'VER FINAL DA JORNADA':'PRÓXIMO CAPÍTULO'):'TENTAR NOVAMENTE',()=>{if(result?.won)go('story');else startStoryBattle();},'action primary'),button('VER MAPA DA JORNADA',()=>go('story')),button('SALVAR & SAIR',()=>{story.persist();go('home');}));}
    else panel.append(button('REVANCHE',()=>{engine.rematch();if(window.BrasaCamera)resetFightWorld();state.paused=false;go('fight');},'action primary'),button('TROCAR LUTADORES',()=>begin(state.mode)),button('VOLTAR AO INÍCIO',()=>go('home')));
    if(input.config.reducedMotion){panel.style.animation='none';panel.querySelectorAll('canvas,.unlock-stars').forEach(n=>n.style.animation='none');}
    overlay.append(panel);$('#fightShell').append(overlay);panel.querySelector('button').focus({preventScroll:true});
  }
  function controls(){
    app.innerHTML='';heading('SEU JEITO DE LUTAR','CONTROLES & AJUSTES','PS5: setas para mover, ×/□/○ para golpes, △/R2/L2 para especiais, L1 para defender, R1 para agarrar e R3 para o super.');
    const columns=el('div','control-columns');
    for(let player=0;player<2;player++){
      const panel=el('section','control-panel');panel.innerHTML='<div class="eyebrow">JOGADOR '+(player+1)+'</div><h2 style="margin-top:12px">'+(player?'A OUTRA HISTÓRIA':'SUA BRASA')+'</h2><p>Clique em um comando e pressione a nova tecla ou botão. Esc cancela. Para eixos, solte o analógico antes de mover.</p>';
      const table=el('table','control-table');table.innerHTML='<thead><tr><th>AÇÃO</th><th>TECLADO</th><th>CONTROLE</th></tr></thead>';const tbody=el('tbody');
      Object.entries(names).forEach(([action,label])=>{const row=el('tr');row.innerHTML='<td>'+label+'</td>';for(const type of ['keyboard','gamepad']){const cell=el('td');const binding=input.binding;const waiting=binding&&binding.player===player&&binding.action===action&&binding.type===type;const b=el('button','bind-button nav-item'+(waiting?' waiting':''),waiting?'PRESSIONE…':type==='keyboard'?input.label(input.config.keyboard[player][action]):input.padLabel(player,action));b.dataset.bind=player+':'+action+':'+type;b.setAttribute('aria-label','Configurar '+label+' do jogador '+(player+1)+' para '+type);b.onclick=()=>{input.beginBind(player,action,type);if(type==='gamepad'&&!input.getPads().some(p=>p.index===input.slots[player]))toast('Conecte e ative o controle do jogador '+(player+1)+'.');controls();document.querySelector('[data-bind="'+player+':'+action+':'+type+'"]')?.focus();};cell.append(b);row.append(cell);}tbody.append(row);});table.append(tbody);panel.append(table);columns.append(panel);
    }
    app.append(columns);const info=el('div','pad-info');info.id='controllersInfo';app.append(info);updatePadInfo();
    const settings=el('div','control-panel');settings.innerHTML='<h2>A LUTA DO SEU JEITO</h2><p>Um botão para cada especial. R3 é o clique do analógico direito e exige a barra BRASA cheia. Os atalhos diretos sem tecla podem ser configurados na tabela.</p>';const options=el('div','setting-row');options.append(button('SOM ON / OFF',()=>$('#soundButton').click(),'toggle'),button('TELA CHEIA',()=>$('#fullButton').click(),'toggle'));settings.append(options);
    const difficulty=el('div','setting-row');difficulty.append(el('span','','Dificuldade da CPU'));const db=el('button','toggle nav-item',({easy:'TRANQUILA',normal:'NORMAL',hard:'INTENSA'})[state.difficulty]);db.onclick=()=>{state.difficulty=['easy','normal','hard'][(['easy','normal','hard'].indexOf(state.difficulty)+1)%3];db.textContent=({easy:'TRANQUILA',normal:'NORMAL',hard:'INTENSA'})[state.difficulty];toast('Dificuldade aplicada à próxima partida.');};difficulty.append(db);settings.append(difficulty);
    const motion=el('div','setting-row');motion.append(el('span','','Reduzir movimento e tremor de tela'));const mb=el('button','toggle nav-item',input.config.reducedMotion?'ATIVADO':'DESATIVADO');mb.onclick=()=>{input.config.reducedMotion=!input.config.reducedMotion;input.save();mb.textContent=input.config.reducedMotion?'ATIVADO':'DESATIVADO';};motion.append(mb);settings.append(motion);app.append(settings);
    const foot=el('div','controls-foot');foot.append(el('p','credit-line','Comandos salvos neste navegador. Teclas Enter, Espaço, Tab e Esc ficam reservadas à navegação.'),button('RESTAURAR COMANDOS',()=>{input.reset();controls();toast('Comandos padrão restaurados.');},'back-button'));app.append(foot);
    const note=el('div','notice');note.textContent='PS4 (DualShock 4), PS5 (DualSense), Xbox One e Xbox Series X|S: suporte implementado por Gamepad API. Conecte por USB ou Bluetooth e pressione um botão para ativar. A identificação e o mapeamento dependem do sistema e do navegador. Se necessário, remapeie aqui. A validação com cada controle físico está pendente.';app.append(note);
    const sys=el('p','credit-line','MENUS / direcional ou analógico: navegar · ×/A: confirmar · ○/B: voltar · Options/Menu: pausar. Dois controles são atribuídos a P1 e P2 pela ordem de ativação. No teclado, use as setas ou WASD, Enter e Esc.');app.append(sys);
  }
  function updatePadInfo(){const info=$('#controllersInfo');if(!info)return;const pads=input.getPads();info.textContent=pads.length?input.slots.map((id,i)=>{const p=pads.find(p=>p.index===id);return 'P'+(i+1)+': '+(p?p.id+' ['+(p.mapping||'personalizado')+']':'teclado');}).join(' | '):'NENHUM CONTROLE ATIVO / Conecte seu controle e pressione um botão. O teclado está pronto.';}
  input.onBind=result=>{const bindingFocus=document.activeElement?.dataset.bind;if(result==='saved')toast('Comando salvo.');if(result==='conflict')toast('Essa tecla já está com o outro jogador. Escolha outra.');if(result==='reserved')toast('Tecla reservada à navegação. Escolha outra.');if(state.screen==='controls'){controls();if(bindingFocus)document.querySelector('[data-bind="'+bindingFocus+'"]')?.focus({preventScroll:true});}};
  input.onDisconnect=slot=>{if(state.screen==='fight'&&!state.paused&&(slot===0||state.mode==='versus')){state.paused=true;showPause();toast('Controle P'+(slot+1)+' desconectado. Partida pausada.');}};
  function handleStructureDebug(event){
    if(event.code!=='F3'||state.screen!=='fight')return;
    event.preventDefault();event.stopImmediatePropagation();
    if(event.repeat)return;
    state.debugLayers=!state.debugLayers;pausedFrameDrawn=false;
  }
  document.addEventListener('keydown',handleStructureDebug,true);
  input.onMenu=(action,source)=>{
    const fighting=state.screen==='fight';
    if(fighting&&!state.paused&&state.engine?.phase!=='matchOver'){
      if(state.engine?.phase==='intro'&&action==='confirm'&&state.engine.introDuration>2){state.engine.phaseTime=state.engine.introDuration-.65;return;}
      if((source==='keyboard'&&action==='back')||(source==='gamepad'&&action==='start'))togglePause();
      else if(source==='keyboard'&&action==='confirm'&&document.activeElement?.closest('.fight-controls'))document.activeElement.click();
      return;
    }
    if(action==='start'&&fighting&&state.paused){togglePause();return;}
    if(action==='back'){goBack();return;}
    const root=fighting?$('.fight-overlay'):document; if(!root)return;
    const buttons=Array.from(root.querySelectorAll('.nav-item:not(:disabled)')).filter(b=>b.getClientRects().length);
    if(!buttons.length)return;
    let index=buttons.indexOf(document.activeElement);if(action==='confirm'){if(document.activeElement?.matches('button.nav-item')&&document.activeElement.getClientRects().length)document.activeElement.click();else buttons[Math.max(0,index)].click();return;}
    const direction=['left','up'].includes(action)?-1:1;
    let jump=1;const active=buttons[index];const grid=active?.closest('[data-columns]');if(grid&&['up','down'].includes(action))jump=Number(grid.dataset.columns)||1;
    index=index<0?0:(index+direction*jump+buttons.length)%buttons.length;buttons[index].focus({preventScroll:true});buttons[index].scrollIntoView({block:'nearest',inline:'nearest'});
  };
  document.querySelectorAll('[data-screen]').forEach(b=>b.onclick=()=>{if(state.screen==='fight'){state.paused=true;state.returnTo='fight';}else state.returnTo='home';go(b.dataset.screen);});
  $('#homeButton').onclick=()=>go('home');
  $('#soundButton').onclick=()=>{state.sound=!state.sound;$('#soundButton').innerHTML='♫<span>SOM '+(state.sound?'ON':'OFF')+'</span>';$('#soundButton').setAttribute('aria-label',state.sound?'Desativar som':'Ativar som');tone('menu');syncLunarMusic();};
  $('#fullButton').onclick=()=>{try{const promise=document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen();promise?.catch(()=>toast('Use F11 para tela cheia neste navegador.'));}catch(_){toast('Use F11 para tela cheia.');}};
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&state.screen==='fight'&&!state.paused&&state.engine.phase!=='matchOver'){state.paused=true;showPause();}});
  window.addEventListener('brasa-fighter-art-ready',()=>{
    document.querySelectorAll('[data-fighter]').forEach(card=>{const fighter=fighters[Number(card.dataset.fighter)],canvas=card.querySelector('canvas');if(!fighter||!canvas)return;if(story.unlocked(fighter.id))render.portrait(canvas,fighter,{pose:'idle'});else{const c=canvas.getContext('2d');c.clearRect(0,0,120,100);render.fighter(c,fighter,60,96,.86,'idle',1,0,{shadow:false});c.globalCompositeOperation='source-in';c.fillStyle='#01030a';c.fillRect(0,0,120,100);c.globalCompositeOperation='destination-over';c.fillStyle='#292943';c.fillRect(0,0,120,100);c.globalCompositeOperation='source-over';}});
    if(state.screen==='moves')paintMoves();
    if(state.pendingFight){updateFightLoading();if(fightArtReady())startFight();}
  });
  window.addEventListener('brasa-stage-art-ready',()=>{
    if(!['arenas','stageSelect'].includes(state.screen))return;
    document.querySelectorAll('[data-arena]').forEach(tile=>{
      const canvas=tile.querySelector('canvas'),stage=stages[Number(tile.dataset.arena)];
      if(canvas&&stage)render.stage(canvas.getContext('2d'),stage,canvas.width,canvas.height,17);
    });
  });
  window.addEventListener('blur',()=>{if(state.screen==='fight'&&!state.paused&&state.engine?.phase!=='matchOver'){state.paused=true;showPause();}});
  function captureFightPositions(engine){
    previousTick={engine,phase:engine.phase,round:engine.round,freeze:engine.freeze,simulationClock:engine.simulationClock,camera:state.camera?.snapshot(),players:engine.players.map(p=>({x:p.x,y:p.y,walkDistance:p.walkDistance||0,motion:p.motion?{...p.motion}:null,attack:p.attack?{...p.attack}:null,reaction:p.reaction?{...p.reaction}:null,reactionSource:p.reaction})),projectiles:new Map(engine.projectiles.map(q=>[q,{x:q.x,y:q.y,owner:q.owner}]))};
  }
  function interpolatedFightEngine(engine,alpha){
    if(!previousTick||previousTick.engine!==engine||previousTick.phase!=='fight'||engine.phase!=='fight'||previousTick.round!==engine.round||engine.freeze>0||state.paused||alpha>=1)return engine;
    const mix=(a,b)=>a+(b-a)*Math.max(0,alpha);
    const players=engine.players.map((p,i)=>{const before=previousTick.players[i];if(!before||Math.abs(p.x-before.x)>90||Math.abs(p.y-before.y)>90)return p;const motion=p.motion?{...p.motion}:null;if(motion&&before.motion&&motion.jumpPhase===before.motion.jumpPhase)for(const field of ['airTime','phaseTime','groundedTime','landingTime','landingProgress','landingImpact','verticalSpeed','moveSpeed','walkSpeed','anticipation','landing','dashProgress'])if(Number.isFinite(motion[field])&&Number.isFinite(before.motion[field])&&(field!=='dashProgress'||motion.dashing===before.motion.dashing&&motion.dashDirection===before.motion.dashDirection))motion[field]=mix(before.motion[field],motion[field]);const attack=p.attack?{...p.attack}:null;if(attack&&before.attack?.actionId===attack.actionId)attack.time=mix(before.attack.time,attack.time);const reaction=p.reaction?{...p.reaction}:null;if(reaction&&before.reactionSource===p.reaction&&before.reaction)reaction.time=mix(before.reaction.time,reaction.time);return {...p,x:mix(before.x,p.x),y:mix(before.y,p.y),walkDistance:mix(before.walkDistance,p.walkDistance||0),motion,attack,reaction};});
    const projectiles=engine.projectiles.map(q=>{const before=previousTick.projectiles.get(q);if(!before||q.delay>0||before.owner!==q.owner||Math.abs(q.x-before.x)>90||Math.abs(q.y-before.y)>90)return q;return {...q,x:mix(before.x,q.x),y:mix(before.y,q.y)};});
    const simulationClock=Number.isFinite(previousTick.simulationClock)&&Number.isFinite(engine.simulationClock)?mix(previousTick.simulationClock,engine.simulationClock):engine.simulationClock;return Object.assign(Object.create(engine),{players,projectiles,simulationClock});
  }
  function interpolatedFightCamera(engine,alpha=1){
    const camera=state.camera?.snapshot();if(!camera)return null;
    if(!previousTick?.camera||previousTick.engine!==engine||previousTick.round!==engine.round||previousTick.phase!=='fight'||engine.phase!=='fight'||engine.freeze>0||state.paused||alpha>=1)return camera;
    // Discontinuous actors already snap in interpolatedFightEngine; their view must snap too.
    if(engine.players?.some((p,i)=>{const before=previousTick.players?.[i];return before&&(Math.abs(p.x-before.x)>90||Math.abs(p.y-before.y)>90);}))return camera;
    const fraction=Math.max(0,Math.min(1,alpha)),before=previousTick.camera;
    const zoom=before.zoom+(camera.zoom-before.zoom)*fraction;
    return {...camera,x:before.x+(camera.x-before.x)*fraction,zoom,visibleWidth:camera.width/zoom};
  }
  function hudWrite(key,node,property,value){if(!node||hud.cache[key]===value)return;hud.cache[key]=value;node[property]=value;}
  function hudClass(key,node,name,value){if(hud.cache[key]===value)return;hud.cache[key]=value;node.classList.toggle(name,value);}
  function drawFight(time,alpha=1){
    const actual=state.engine,engine=state.finisherPreview?{...actual,phase:'finisher',phaseTime:state.finisherPreview.time,finisherTime:state.finisherPreview.time,finisherWinner:0,finisherLoser:1,finisher:moveSet(actual.players[0].data).finisher}:interpolatedFightEngine(actual,alpha);
    const holdingImpact=actual.phase==='fight'&&(actual.freeze>0||previousTick?.engine===actual&&previousTick.round===actual.round&&previousTick.freeze>0);
    const actorTime=input.config.reducedMotion?0:(Number.isFinite(engine.simulationClock)?engine.simulationClock:engine.clock||0)+(state.finisherPreview?.time||0);
    const cameraView=interpolatedFightCamera(actual,alpha);
    const ctx=fight.getContext('2d');ctx.save();ctx.imageSmoothingEnabled=false;ctx.scale(fight.width/960,fight.height/540);
    if(!cameraView||!window.BrasaStages?.drawWorld?.(ctx,stages[state.arena],960,540,input.config.reducedMotion?17:time,cameraView,{reducedMotion:input.config.reducedMotion}))render.stage(ctx,stages[state.arena],960,540,input.config.reducedMotion?17:time);
    const environment=window.BrasaStages?.grounding?.(stages[state.arena])||{groundY:455};
    const actorOptions={shadowColor:environment.shadowColor,shadowOpacity:environment.shadowOpacity,groundPlaneY:455,groundOffset:environment.groundY-455,viewport:cameraView,ellipseShadow:true,fighterScale:2.15,structureOnly:true,companions:false};
    ctx.save();state.camera?.apply(ctx,{shake:false,view:cameraView});ctx.translate(0,environment.groundY-455);
    const entrance=engine.phase==='intro'&&engine.introDuration>2&&!!window.BrasaPresentation;
    const entranceSlot=entrance?(engine.introDuration-.8)/2:0;
    const activeEntry=entrance?Math.min(1,Math.floor(engine.phaseTime/entranceSlot)):0;
    const supering=engine.phase==='super'&&!!window.BrasaPresentation?.drawSuper;
    const celebrating=engine.phase==='matchOver'&&!!window.BrasaPresentation?.drawResult;
    const finishing=engine.phase==='finisher'&&!!window.BrasaPresentation?.drawFinisher;
    if(supering)window.BrasaPresentation.drawSuper(ctx,engine,actorTime,{...actorOptions,reducedMotion:input.config.reducedMotion});
    else if(celebrating)window.BrasaPresentation.drawResult(ctx,engine,actorTime,{...actorOptions,reducedMotion:input.config.reducedMotion});
    else if(finishing)window.BrasaPresentation.drawFinisher(ctx,engine,actorTime,{...actorOptions,reducedMotion:input.config.reducedMotion});
    else for(let i=0;i<engine.players.length;i++){const p=engine.players[i];const pose=engine.phase==='matchOver'?(engine.winner===i?'win':'lose'):p.pose;
      if(entrance&&activeEntry===i&&engine.phaseTime<engine.introDuration-.7){const progress=Math.min(1,(engine.phaseTime-i*entranceSlot)/entranceSlot);window.BrasaPresentation.drawEntrance(ctx,p.data,p.x,455,2.15,p.facing,progress,{...actorOptions,reducedMotion:input.config.reducedMotion});}
      else render.fighter(ctx,p.data,p.x,455-p.y,2.15,pose,p.facing,actorTime,{...actorOptions,attack:p.attack,frozen:p.frozen,walkDistance:p.walkDistance,motion:p.motion,reaction:p.reaction,hitstopFrame:holdingImpact&&p.reaction?.impactClock===actual.simulationClock?p.reaction?.impactFrame:undefined,hitstopMirror:holdingImpact&&p.reaction?.impactClock===actual.simulationClock?!!p.reaction?.impactMirror:false,reducedMotion:input.config.reducedMotion,alpha:p.invulnerable>0?.7:1});
    }
    // Discrete attacks remain visible; ambient and impact particle passes stay removed.
    for(const q of engine.projectiles){
      if(window.BrasaCombatFX?.drawProjectile(ctx,q,actorTime))continue;
      ctx.save();ctx.fillStyle=q.color||'#e8d6a7';ctx.beginPath();ctx.ellipse(q.x,455-q.y,q.radius,q.radius,0,0,Math.PI*2);ctx.fill();ctx.restore();
    }
    ctx.restore();
    if(state.debugLayers&&cameraView)window.BrasaStages?.drawDebug?.(ctx,stages[state.arena],960,540,cameraView);
    ctx.restore();ctx.save();ctx.scale(fight.width/960,fight.height/540);
    engine.players.forEach((p,i)=>{if(p.combo>1){ctx.font='24px Impact';ctx.fillStyle=p.data.accent;ctx.textAlign=i?'right':'left';ctx.fillText(p.combo+' ACERTOS',i?875:85,195);ctx.textAlign='left';}});ctx.restore();
    engine.players.forEach((p,i)=>{hudWrite('hp'+i,hud.hp[i].style,'width',(p.hp/p.maxHp*100)+'%');hudWrite('meter'+i,hud.meter[i].style,'width',p.meter+'%');if(hud.cache['rounds'+i]!==p.rounds){hud.cache['rounds'+i]=p.rounds;hud.pipNodes[i].forEach((pip,j)=>pip.classList.toggle('won',j<p.rounds));}});
    const readout=hud.training;if(readout){
      const p=engine.players[0],hits=Number(p.combo||0);
      const result=hits?hits+(hits===1?' ACERTO':' ACERTOS')+' · '+Math.round(p.comboDamage||0)+' DE DANO':p.lastComboName?'ÚLTIMO COMBO · '+Math.round(p.lastComboDamage||0)+' DE DANO':'0 ACERTOS · 0 DE DANO';
      const defense=p.defenseCooldown>0?'DEFESA ATIVA: '+p.defenseCooldown.toFixed(1)+'s':'DEFESA ATIVA: '+commandText('defense',0,input.slots[0]!==null)+' · 20 BRASA';
      const markup='<small>TREINO / P1</small><strong>'+escapeText(p.lastMoveName||'COMECE COM UM GOLPE')+'</strong><span>'+result+'</span><em>'+escapeText(p.lastComboName||'Acerte e encadeie os botões para formar um combo.')+'</em><small>'+escapeText(defense)+'</small>';hudWrite('training',readout,'innerHTML',markup);
    }
    hudWrite('timer',hud.timer,'textContent',Number.isFinite(engine.timer)?String(Math.ceil(engine.timer)).padStart(2,'0'):'∞');hudWrite('roundLabel',hud.round,'textContent',state.mode==='training'?'TREINO':'ROUND '+String(engine.round).padStart(2,'0'));
    hudClass('entranceClass',hud.banner,'entrance-banner',entrance&&engine.phaseTime<engine.introDuration-.7);hudWrite('skipHidden',hud.skip,'hidden',!entrance);
    hudClass('finisherClass',hud.banner,'finisher-banner',['finishWindow','finisher'].includes(engine.phase));
    let banner='';
    if(entrance&&engine.phaseTime<engine.introDuration-.7){const p=engine.players[activeEntry],entry=window.BrasaPresentation.entrances[p.data.id]||p.data.entrance||{name:p.data.title,line:p.data.style};banner=escapeText(p.data.name)+'<small>'+escapeText(entry.name)+'</small><em>'+escapeText(entry.line)+'</em>';}
    else if(engine.phase==='intro')banner=engine.phaseTime<(entrance?engine.introDuration-.6:1)?'ROUND '+engine.round+'<small>'+escapeText(stages[state.arena].name).toUpperCase()+'</small>':'FIGHT!';
    else if(supering)banner=escapeText(engine.superDefinition?.name||'SUPERESPECIAL')+'<small>'+escapeText(engine.superDefinition?.line||'BRASA TOTAL')+'</small>';
    else if(engine.phase==='roundOver')banner=engine.winner==='draw'?'EMPATE<small>O CAUSO CONTINUA</small>':(engine.players.some(p=>p.hp<=0)?'NOCAUTE':'TEMPO!')+'<small>'+escapeText(engine.players[engine.winner].data.name).toUpperCase()+' VENCE O ROUND</small>';
    else if(engine.phase==='finishWindow')banner='FINALIZE O CAUSO<small>'+escapeText(engine.finisher.name)+'</small><em>P'+(engine.finisherWinner+1)+' · SOLTE E PRESSIONE '+escapeText(commandText('finisher',engine.finisherWinner,input.slots[engine.finisherWinner]!==null))+' · '+Math.max(0,Math.ceil(engine.finishWindowDuration-engine.phaseTime))+'s</em>';
    else if(engine.phase==='finisher')banner=escapeText(engine.finisher.name)+'<small>'+escapeText(engine.finisher.line)+'</small>';
    hudWrite('banner',hud.banner,'innerHTML',banner);
    if(engine.phase==='matchOver'&&(input.config.reducedMotion||engine.phaseTime>=1.9))showResult();
  }
  function frame(now){
    const dt=Math.min((now-lastTime)/1000||0,.25);lastTime=now;const time=now/1000;input.poll(now);
    if(now-uiClock>700){uiClock=now;const activePads=input.slots.filter(id=>id!==null).length,padText=activePads?'◈ '+activePads+' CONTROLE'+(activePads>1?'S':''):'◈ TECLADO',padStatus=$('#padStatus');if(padStatus.textContent!==padText)padStatus.textContent=padText;if(state.screen==='controls')updatePadInfo();if(hud){hudWrite('help',hud.help,'innerHTML',fightHelpMarkup());hudWrite('quickHelp',hud.quickHelp,'innerHTML',quickFightHelpMarkup());for(let i=0;i<2;i++)hudWrite('superHint'+i,hud.superHints?.[i],'textContent','BRASA / SUPER · '+commandText('super',i,input.slots[i]!==null));}}
    if(state.screen==='fight'&&fight&&state.engine){
      if(state.finisherPreview){accumulator=0;if(!state.paused){state.finisherPreview.time+=dt;if(state.finisherPreview.time>=state.engine.finisherDuration)state.finisherPreview=null;}input.consume();}
      else if(!state.paused){accumulator=Math.min(accumulator+dt,.25);while(accumulator+1e-9>=1/60){captureFightPositions(state.engine);state.engine.update(1/60,input.states());updateFightWorld(1/60);input.consume();accumulator=Math.max(0,accumulator-1/60);}}else accumulator=0;
      if(!state.paused||!pausedFrameDrawn)drawFight(time,accumulator*60);pausedFrameDrawn=state.paused;
    }else{
      if(hero){const ctx=hero.getContext('2d');render.stage(ctx,stages[0],960,540,input.config.reducedMotion?17:time);render.fighter(ctx,fighters[0],700,488,3.65,'idle',-1,time,{});}
      if(preview)render.stage(preview.getContext('2d'),stages[state.arena],960,540,input.config.reducedMotion?17:time);
      if(detail)drawFighterPreview(input.config.reducedMotion?0:time);
      if(worldMap)worldMap.draw(time,input.config.reducedMotion);
    }
    requestAnimationFrame(frame);
  }
  // Read-only diagnostic access for inspection; the game itself uses the same public engine.
  window.BRASA={state,input,story,data:window.BRASA_DATA,begin,go};
  go('home');requestAnimationFrame(frame);
})();
