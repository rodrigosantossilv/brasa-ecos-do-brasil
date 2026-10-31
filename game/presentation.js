/* BRASA 0.10 — dedicated authored entrance rows, with legacy presentation retained for the remaining cast. */
(function (global) {
  'use strict';
  const clamp = v => Math.max(0, Math.min(1, Number(v) || 0));
  const smooth = v => { v = clamp(v); return v * v * (3 - 2 * v); };
  const part = (p, a, b) => smooth((p - a) / Math.max(.001, b - a));
  const mix = (a, b, p) => a + (b - a) * clamp(p);
  const pulse = p => Math.sin(Math.PI * clamp(p));
  const hash = text => Array.from(String(text)).reduce((n, c) => (n * 31 + c.charCodeAt(0)) >>> 0, 7);
  const usesKick=(id,style)=>['dance','speed','aerial'].includes(style)&&!['jack','tommy','gloria','yuri','luz','akari','roxy','tenor','long','qiao','silas','selene'].includes(id);
  const authored = {
    "bento": [
      "O Bando da Brasa",
      "O sertão nunca anda sozinho.",
      "weapon",
      "Fecha os punhos e recolhe os braços na guarda de cangaceiro. Reconhece o bando com um gesto curto de punho e firma a guarda."
    ],
    "ramiro": [
      "Inverno de Promessa",
      "O frio chegou antes de mim.",
      "power",
      "Aproxima os antebraços junto ao corpo numa guarda compacta. Recolhe os braços e sustenta a base firme de Ramiro."
    ],
    "jana": [
      "A Roda Está Aberta",
      "Chega junto. A roda já começou.",
      "dance",
      "Cumprimenta a roda com uma inclinação curta de tronco. Oscila os ombros e alterna o peso numa ginga contida."
    ],
    "caua": [
      "Caminho Invertido",
      "Quem segue meus rastros volta ao começo.",
      "spectral",
      "Eleva o antebraço sem perder a guarda de guardião. Inclina o tronco num cumprimento curto e volta à postura."
    ],
    "nara": [
      "A Margem se Levanta",
      "O rio trouxe o que vocês esqueceram.",
      "spectral",
      "Avança o antebraço num gesto contido de invocação. Ergue o punho num cumprimento breve da guardiã das águas."
    ],
    "tiao": [
      "Atalho de Vento",
      "Piscou? Já passei.",
      "aerial",
      "Aproxima os antebraços enquanto mantém seu apoio de equilíbrio. Oscila o corpo e faz um salto curto antes de pousar no mesmo lugar."
    ],
    "breu": [
      "A Última Costura",
      "Só falta fechar esta costura.",
      "spectral",
      "Recolhe os antebraços para perto do tronco. Estende brevemente um braço e o recolhe na guarda de Breu."
    ],
    "damiao": [
      "O Chamado da Sétima Lua",
      "Meu nome ainda é Damião.",
      "power",
      "Assenta a postura e recolhe os braços para conter a força. Aproxima os antebraços num movimento curto e controlado."
    ],
    "lia": [
      "Entrega à Meia-Noite",
      "Tem entrega que não pode esperar.",
      "speed",
      "Eleva ligeiramente o antebraço e mantém a guarda atenta. Recolhe os braços para junto do corpo antes da luta."
    ],
    "iris": [
      "Pressão Máxima",
      "A sucata ainda tem muito para dizer.",
      "machine",
      "Aproxima as manoplas num ajuste curto de posição. Recolhe os braços e firma a postura sob o peso das manoplas."
    ],
    "rosa": [
      "Onde a Seca Floresce",
      "Ainda tem vida debaixo dessa terra.",
      "spectral",
      "Inclina o tronco num cumprimento sereno. Leva o antebraço adiante num gesto curto de Rosa."
    ],
    "augusto": [
      "Retrato sem Nome",
      "Você tem certeza de que me conhece?",
      "spectral",
      "Eleva ligeiramente o antebraço sem abandonar a guarda. Ergue o punho num cumprimento silencioso e breve."
    ],
    "valter": [
      "A Palavra Pede Passagem",
      "Agora vocês vão ouvir.",
      "weapon",
      "Recolhe os antebraços para preparar a postura. Reconhece a plateia com um gesto curto de punho."
    ],
    "serena": [
      "A Maré Mantém a Guarda",
      "Ninguém fica para trás.",
      "grapple",
      "Eleva levemente o antebraço numa guarda atenta. Recolhe os braços e firma sua postura de contenção."
    ],
    "caio": [
      "A Última Ronda",
      "Esta rua ainda tem saída.",
      "weapon",
      "Mantém a guarda à frente e eleva um pouco o antebraço. Aproxima os braços num ajuste curto de posição."
    ],
    "davi": [
      "A Vila Joga Junto",
      "Hoje a Vila vai jogar junto.",
      "speed",
      "Aproxima os antebraços numa preparação breve. Oscila o corpo e troca o peso dos apoios como numa finta contida."
    ],
    "luz": [
      "Passagem de Som",
      "Deixa o grave falar.",
      "dance",
      "Ergue o punho num cumprimento curto ao público. Marca um compasso leve com o corpo e os apoios."
    ],
    "ti": [
      "Fim de Expediente",
      "Cheguei. Agora a corrida é sua.",
      "grapple",
      "Recolhe os braços e firma a postura depois da corrida. Aproxima os antebraços num ajuste breve da guarda."
    ]
  };

  // Seven restrained forms of stage presence. The costume and actor source never
  // change during these actions; the renderer articulates the canonical body.
  const archetypes = Object.freeze({
    power: Object.freeze({name:'heavy',distance:170,arrive:.43,warm:[.46,.61],signature:[.65,.82],guard:.87}),
    grapple: Object.freeze({name:'grappler',distance:176,arrive:.41,warm:[.45,.60],signature:[.64,.81],guard:.86}),
    speed: Object.freeze({name:'athlete',distance:190,arrive:.37,warm:[.42,.57],signature:[.61,.79],guard:.85}),
    dance: Object.freeze({name:'performer',distance:178,arrive:.40,warm:[.44,.60],signature:[.64,.81],guard:.86}),
    spectral: Object.freeze({name:'ritual',distance:168,arrive:.44,warm:[.48,.63],signature:[.67,.83],guard:.88}),
    machine: Object.freeze({name:'mechanic',distance:180,arrive:.42,warm:[.46,.61],signature:[.65,.81],guard:.86}),
    weapon: Object.freeze({name:'discipline',distance:182,arrive:.40,warm:[.44,.59],signature:[.63,.80],guard:.85})
  });
  const personal = {
    "bento": [
      "brace",
      "salute",
      "Fecha os punhos e recolhe os braços na guarda de cangaceiro.",
      "Reconhece o bando com um gesto curto de punho e firma a guarda."
    ],
    "ramiro": [
      "glove",
      "brace",
      "Aproxima os antebraços junto ao corpo numa guarda compacta.",
      "Recolhe os braços e sustenta a base firme de Ramiro."
    ],
    "jana": [
      "bow",
      "ginga",
      "Cumprimenta a roda com uma inclinação curta de tronco.",
      "Oscila os ombros e alterna o peso numa ginga contida."
    ],
    "caua": [
      "scan",
      "bow",
      "Eleva o antebraço sem perder a guarda de guardião.",
      "Inclina o tronco num cumprimento curto e volta à postura."
    ],
    "nara": [
      "summon",
      "salute",
      "Avança o antebraço num gesto contido de invocação.",
      "Ergue o punho num cumprimento breve da guardiã das águas."
    ],
    "tiao": [
      "glove",
      "ginga",
      "Aproxima os antebraços enquanto mantém seu apoio de equilíbrio.",
      "Oscila o corpo e faz um salto curto antes de pousar no mesmo lugar."
    ],
    "breu": [
      "glove",
      "summon",
      "Recolhe os antebraços para perto do tronco.",
      "Estende brevemente um braço e o recolhe na guarda de Breu."
    ],
    "damiao": [
      "brace",
      "glove",
      "Assenta a postura e recolhe os braços para conter a força.",
      "Aproxima os antebraços num movimento curto e controlado."
    ],
    "lia": [
      "scan",
      "glove",
      "Eleva ligeiramente o antebraço e mantém a guarda atenta.",
      "Recolhe os braços para junto do corpo antes da luta."
    ],
    "iris": [
      "glove",
      "brace",
      "Aproxima as manoplas num ajuste curto de posição.",
      "Recolhe os braços e firma a postura sob o peso das manoplas."
    ],
    "rosa": [
      "bow",
      "summon",
      "Inclina o tronco num cumprimento sereno.",
      "Leva o antebraço adiante num gesto curto de Rosa."
    ],
    "augusto": [
      "scan",
      "salute",
      "Eleva ligeiramente o antebraço sem abandonar a guarda.",
      "Ergue o punho num cumprimento silencioso e breve."
    ],
    "valter": [
      "glove",
      "salute",
      "Recolhe os antebraços para preparar a postura.",
      "Reconhece a plateia com um gesto curto de punho."
    ],
    "serena": [
      "scan",
      "brace",
      "Eleva levemente o antebraço numa guarda atenta.",
      "Recolhe os braços e firma sua postura de contenção."
    ],
    "caio": [
      "scan",
      "glove",
      "Mantém a guarda à frente e eleva um pouco o antebraço.",
      "Aproxima os braços num ajuste curto de posição."
    ],
    "davi": [
      "glove",
      "ginga",
      "Aproxima os antebraços numa preparação breve.",
      "Oscila o corpo e troca o peso dos apoios como numa finta contida."
    ],
    "luz": [
      "salute",
      "ginga",
      "Ergue o punho num cumprimento curto ao público.",
      "Marca um compasso leve com o corpo e os apoios."
    ],
    "ti": [
      "brace",
      "glove",
      "Recolhe os braços e firma a postura depois da corrida.",
      "Aproxima os antebraços num ajuste breve da guarda."
    ],
    "brick": [
      "bow",
      "brace",
      "Brick inclina levemente cabeça e tronco e retorna à postura.",
      "Brick recolhe os braços e firma a postura de combate."
    ],
    "steele": [
      "scan",
      "glove",
      "Major Steele eleva ligeiramente o antebraço e mantém a guarda à frente.",
      "Major Steele aproxima os antebraços num ajuste curto de guarda."
    ],
    "voltx": [
      "glove",
      "brace",
      "VOLT-X aproxima os antebraços num ajuste curto de guarda.",
      "VOLT-X recolhe os braços e firma a postura de combate."
    ],
    "jack": [
      "glove",
      "ginga",
      "Jack Bell aproxima os antebraços num ajuste curto de guarda.",
      "Jack Bell oscila o corpo e alterna levemente o peso dos apoios."
    ],
    "homer": [
      "glove",
      "salute",
      "Homer aproxima os antebraços num ajuste curto de guarda.",
      "Homer ergue o punho num cumprimento breve."
    ],
    "gloria": [
      "salute",
      "brace",
      "Capitão Glória ergue o punho num cumprimento breve.",
      "Capitão Glória recolhe os braços e firma a postura de combate."
    ],
    "dusty": [
      "scan",
      "salute",
      "Dusty Graves eleva ligeiramente o antebraço e mantém a guarda à frente.",
      "Dusty Graves ergue o punho num cumprimento breve."
    ],
    "roxy": [
      "glove",
      "ginga",
      "Roxy Riot aproxima os antebraços num ajuste curto de guarda.",
      "Roxy Riot oscila o corpo e alterna levemente o peso dos apoios."
    ],
    "silas": [
      "scan",
      "brace",
      "Silas Nightwing eleva ligeiramente o antebraço e mantém a guarda à frente.",
      "Silas Nightwing recolhe os braços e firma a postura de combate."
    ],
    "boris": [
      "glove",
      "brace",
      "Boris Granito aproxima os antebraços num ajuste curto de guarda.",
      "Boris Granito recolhe os braços e firma a postura de combate."
    ],
    "irina": [
      "bow",
      "ginga",
      "Irina Nevasca inclina levemente cabeça e tronco e retorna à postura.",
      "Irina Nevasca oscila o corpo e alterna levemente o peso dos apoios."
    ],
    "yuri": [
      "scan",
      "brace",
      "Yuri Vazio eleva ligeiramente o antebraço e mantém a guarda à frente.",
      "Yuri Vazio recolhe os braços e firma a postura de combate."
    ],
    "vera": [
      "glove",
      "summon",
      "Vera dos Corvos aproxima os antebraços num ajuste curto de guarda.",
      "Vera dos Corvos avança o antebraço num gesto curto e o recolhe."
    ],
    "maksim": [
      "glove",
      "brace",
      "Maksim Caldeira aproxima os antebraços num ajuste curto de guarda.",
      "Maksim Caldeira recolhe os braços e firma a postura de combate."
    ],
    "anya": [
      "bow",
      "scan",
      "Anya Presa-Branca inclina levemente cabeça e tronco e retorna à postura.",
      "Anya Presa-Branca eleva ligeiramente o antebraço e mantém a guarda à frente."
    ],
    "lev": [
      "salute",
      "bow",
      "Lev dos Mil Rostos ergue o punho num cumprimento breve.",
      "Lev dos Mil Rostos inclina levemente cabeça e tronco e retorna à postura."
    ],
    "nikolai": [
      "glove",
      "brace",
      "Nikolai Geada aproxima os antebraços num ajuste curto de guarda.",
      "Nikolai Geada recolhe os braços e firma a postura de combate."
    ],
    "zoya": [
      "glove",
      "scan",
      "Zoya Faísca aproxima os antebraços num ajuste curto de guarda.",
      "Zoya Faísca eleva ligeiramente o antebraço e mantém a guarda à frente."
    ],
    "ren": [
      "bow",
      "glove",
      "Ren da Bainha Partida inclina levemente cabeça e tronco e retorna à postura.",
      "Ren da Bainha Partida aproxima os antebraços num ajuste curto de guarda."
    ],
    "aya": [
      "scan",
      "glove",
      "Aya Fumaça eleva ligeiramente o antebraço e mantém a guarda à frente.",
      "Aya Fumaça aproxima os antebraços num ajuste curto de guarda."
    ],
    "daigo": [
      "brace",
      "bow",
      "Daigo Montanha recolhe os braços e firma a postura de combate.",
      "Daigo Montanha inclina levemente cabeça e tronco e retorna à postura."
    ],
    "kitsune": [
      "bow",
      "summon",
      "Kitsune Rubra inclina levemente cabeça e tronco e retorna à postura.",
      "Kitsune Rubra avança o antebraço num gesto curto e o recolhe."
    ],
    "tetsu": [
      "glove",
      "brace",
      "Tetsu-9 aproxima os antebraços num ajuste curto de guarda.",
      "Tetsu-9 recolhe os braços e firma a postura de combate."
    ],
    "akari": [
      "salute",
      "ginga",
      "Akari Neon ergue o punho num cumprimento breve.",
      "Akari Neon oscila o corpo e alterna levemente o peso dos apoios."
    ],
    "goro": [
      "glove",
      "brace",
      "Goro Máscara-Vermelha aproxima os antebraços num ajuste curto de guarda.",
      "Goro Máscara-Vermelha recolhe os braços e firma a postura de combate."
    ],
    "mika": [
      "glove",
      "ginga",
      "Mika Turbo aproxima os antebraços num ajuste curto de guarda.",
      "Mika Turbo oscila o corpo e alterna levemente o peso dos apoios."
    ],
    "shiori": [
      "glove",
      "summon",
      "Shiori Papel-Vivo aproxima os antebraços num ajuste curto de guarda.",
      "Shiori Papel-Vivo avança o antebraço num gesto curto e o recolhe."
    ],
    "liang": [
      "glove",
      "bow",
      "Liang Punho de Bronze aproxima os antebraços num ajuste curto de guarda.",
      "Liang Punho de Bronze inclina levemente cabeça e tronco e retorna à postura."
    ],
    "mei": [
      "bow",
      "ginga",
      "Mei Fita de Seda inclina levemente cabeça e tronco e retorna à postura.",
      "Mei Fita de Seda oscila o corpo e alterna levemente o peso dos apoios."
    ],
    "barro": [
      "brace",
      "salute",
      "General Barro recolhe os braços e firma a postura de combate.",
      "General Barro ergue o punho num cumprimento breve."
    ],
    "lin": [
      "glove",
      "bow",
      "Lin da Lua Branca aproxima os antebraços num ajuste curto de guarda.",
      "Lin da Lua Branca inclina levemente cabeça e tronco e retorna à postura."
    ],
    "bo": [
      "glove",
      "salute",
      "Bo Panela de Ferro aproxima os antebraços num ajuste curto de guarda.",
      "Bo Panela de Ferro ergue o punho num cumprimento breve."
    ],
    "qiao": [
      "scan",
      "glove",
      "Qiao Nuvem eleva ligeiramente o antebraço e mantém a guarda à frente.",
      "Qiao Nuvem aproxima os antebraços num ajuste curto de guarda."
    ],
    "shen": [
      "brace",
      "salute",
      "Recolhe os braços e sustenta a postura de Shen.",
      "Ergue brevemente o braço e faz um salto curto até a mesma marca."
    ],
    "long": [
      "bow",
      "summon",
      "Long Escama-Jade inclina levemente cabeça e tronco e retorna à postura.",
      "Long Escama-Jade avança o antebraço num gesto curto e o recolhe."
    ],
    "yan": [
      "salute",
      "bow",
      "Yan Máscara Mutável ergue o punho num cumprimento breve.",
      "Yan Máscara Mutável inclina levemente cabeça e tronco e retorna à postura."
    ],
    "marco": [
      "glove",
      "brace",
      "Marco Arena aproxima os antebraços num ajuste curto de guarda.",
      "Marco Arena recolhe os braços e firma a postura de combate."
    ],
    "vittoria": [
      "glove",
      "ginga",
      "Vittoria Rosso aproxima os antebraços num ajuste curto de guarda.",
      "Vittoria Rosso oscila o corpo e alterna levemente o peso dos apoios."
    ],
    "luca": [
      "glove",
      "salute",
      "Luca Farina aproxima os antebraços num ajuste curto de guarda.",
      "Luca Farina ergue o punho num cumprimento breve."
    ],
    "belladonna": [
      "glove",
      "bow",
      "Belladonna aproxima os antebraços num ajuste curto de guarda.",
      "Belladonna inclina levemente cabeça e tronco e retorna à postura."
    ],
    "enzo": [
      "glove",
      "brace",
      "Enzo Engrenagem aproxima os antebraços num ajuste curto de guarda.",
      "Enzo Engrenagem recolhe os braços e firma a postura de combate."
    ],
    "bianca": [
      "scan",
      "salute",
      "Bianca Mármore eleva ligeiramente o antebraço e mantém a guarda à frente.",
      "Bianca Mármore ergue o punho num cumprimento breve."
    ],
    "rocco": [
      "brace",
      "summon",
      "Rocco Cinzas recolhe os braços e firma a postura de combate.",
      "Rocco Cinzas avança o antebraço num gesto curto e o recolhe."
    ],
    "tenor": [
      "bow",
      "salute",
      "Tenor Tempesta inclina levemente cabeça e tronco e retorna à postura.",
      "Tenor Tempesta ergue o punho num cumprimento breve."
    ],
    "nonna": [
      "glove",
      "summon",
      "Nonna Notte aproxima os antebraços num ajuste curto de guarda.",
      "Nonna Notte avança o antebraço num gesto curto e o recolhe."
    ],
    "arthur": [
      "glove",
      "brace",
      "Arthur Ferrugem aproxima os antebraços num ajuste curto de guarda.",
      "Arthur Ferrugem recolhe os braços e firma a postura de combate."
    ],
    "dex": [
      "glove",
      "ginga",
      "Dex Riot aproxima os antebraços num ajuste curto de guarda.",
      "Dex Riot oscila o corpo e alterna levemente o peso dos apoios."
    ],
    "grey": [
      "scan",
      "glove",
      "Agente Grey eleva ligeiramente o antebraço e mantém a guarda à frente.",
      "Agente Grey aproxima os antebraços num ajuste curto de guarda."
    ],
    "eleanor": [
      "bow",
      "salute",
      "Eleanor Névoa inclina levemente cabeça e tronco e retorna à postura.",
      "Eleanor Névoa ergue o punho num cumprimento breve."
    ],
    "tommy": [
      "glove",
      "brace",
      "Tommy Rebite aproxima os antebraços num ajuste curto de guarda.",
      "Tommy Rebite recolhe os braços e firma a postura de combate."
    ],
    "morgan": [
      "bow",
      "summon",
      "Morgan Espinheiro inclina levemente cabeça e tronco e retorna à postura.",
      "Morgan Espinheiro avança o antebraço num gesto curto e o recolhe."
    ],
    "alfie": [
      "glove",
      "salute",
      "Alfie Wicket aproxima os antebraços num ajuste curto de guarda.",
      "Alfie Wicket ergue o punho num cumprimento breve."
    ],
    "clockwork": [
      "scan",
      "glove",
      "Lady Clockwork eleva ligeiramente o antebraço e mantém a guarda à frente.",
      "Lady Clockwork aproxima os antebraços num ajuste curto de guarda."
    ],
    "bram": [
      "scan",
      "brace",
      "Bram Blackfang eleva ligeiramente o antebraço e mantém a guarda à frente.",
      "Bram Blackfang recolhe os braços e firma a postura de combate."
    ],
    "selene": [
      "scan",
      "summon",
      "Selene Prisma eleva ligeiramente o antebraço e mantém a guarda à frente.",
      "Selene Prisma avança o antebraço num gesto curto e o recolhe."
    ],
    "regolith": [
      "brace",
      "salute",
      "Rególito recolhe os braços e firma a postura de combate.",
      "Rególito ergue o punho num cumprimento breve."
    ],
    "umbriel": [
      "glove",
      "bow",
      "Umbriel Véu-Negro aproxima os antebraços num ajuste curto de guarda.",
      "Umbriel Véu-Negro inclina levemente cabeça e tronco e retorna à postura."
    ],
    "apogeu": [
      "scan",
      "salute",
      "Eleva ligeiramente o antebraço na preparação de Apogeu.",
      "Ergue o braço num gesto curto e executa um salto baixo de propulsão."
    ]
  };
  const styleProfile = style => archetypes[style === 'aerial' ? 'speed' : style] || archetypes.weapon;
  const ease = v => {v=clamp(v);return v*v*v*(v*(v*6-15)+10);};
  function settle(v){const u=ease(v),d=1-7*Math.exp(-6);return (1-(1+6*u)*Math.exp(-6*u))/d;}
  // A level walking speed with short cosine ramps avoids the sudden sprint
  // produced by easing the entire 300-pixel companion journey at once.
  function travelEase(v){
    v=clamp(v);const ramp=.16,first=u=>.5*(u-ramp/Math.PI*Math.sin(Math.PI*u/ramp));
    if(v<ramp)return first(v)/(1-ramp);
    if(v>1-ramp)return 1-first(1-v)/(1-ramp);
    return (v-ramp/2)/(1-ramp);
  }
  const envelope = v => {const s=Math.sin(Math.PI*clamp(v));return s*s;};

  const entrances = {}, finisherKinds = {};
  const roster = global.BRASA_DATA?.fighters || Object.keys(authored).map(id => ({ id }));
  for (const data of roster) {
    const entry=global.BRASA_MOVES?.fighters?.[data.id]?.entrance, own=authored[data.id], script=personal[data.id]||['scan','brace','Confere a arena.','Firma a guarda.'];
    const style=own?.[2]||entry?.style||'weapon', profile=styleProfile(style);
    entrances[data.id]=Object.freeze({
      name:own?.[0]||data.title||'A chegada de '+(data.name||data.id),
      line:own?.[1]||entry?.line||'Minha história continua nesta arena.',style,archetype:profile.name,
      gesture:script[2]+' '+script[3],
      acts:Object.freeze(['chegada','preparação','assinatura','guarda']),
      beats:Object.freeze([{at:0,action:'Chega pelo próprio lado da arena.',pose:'walk'},
        {at:profile.warm[0]*4,action:script[2],pose:'idle',gesture:script[0]},
        {at:profile.signature[0]*4,action:script[3],pose:'idle',gesture:script[1]},
        {at:profile.guard*4,action:'Assenta a guarda voltada ao adversário.',pose:'guard'}].map(Object.freeze))
    });
    finisherKinds[data.id]=global.BRASA_MOVES?.fighters?.[data.id]?.finisher?.kind||data.finisher?.kind||'spark';
  }
  Object.freeze(entrances); Object.freeze(finisherKinds);

  const companionDefinition=global.BRASA_ASSETS?.companions;
  let companionImage=null,companionsLoaded=false;
  if(companionDefinition&&typeof Image!=='undefined'){
    companionImage=new Image();companionImage.onload=()=>{companionsLoaded=true;};companionImage.src=companionDefinition.url;
  }
  function readyCompanions(){return !companionDefinition||companionsLoaded;}
  function companion(ctx,index,x,y,scale,frameIndex,face,options={}){
    const row=companionDefinition?.rows?.[index];if(!companionsLoaded||!row?.frames?.length)return false;
    const frame=row.frames[((frameIndex%row.frames.length)+row.frames.length)%row.frames.length],factor=100*scale/(companionDefinition.nativeHeight||128);
    ctx.save();ctx.translate(x,y);ctx.globalAlpha=1;
    ctx.fillStyle=options.shadowColor||'#241d1b';ctx.globalAlpha=options.shadowOpacity??.38;
    ctx.beginPath();ctx.ellipse(0,1,20*scale,2.4*scale,0,0,Math.PI*2);ctx.fill();ctx.globalAlpha=1;
    ctx.scale(face<0?-1:1,1);ctx.imageSmoothingEnabled=false;
    ctx.drawImage(companionImage,frame.x,frame.y,frame.w,frame.h,
      -frame.anchorX*factor,-frame.footY*factor,frame.w*factor,frame.h*factor);ctx.restore();return true;
  }

  function actor(ctx, data, x, y, scale, pose, time, options = {}) {
    ctx.save(); ctx.translate(Math.round(x), Math.round(y));
    if (options.filter) ctx.filter = options.filter;
    const args = { alpha: options.alpha ?? 1, shadow: options.shadow !== false, effects: false, reducedMotion:!!options.reducedMotion,
      groundPlaneY:Number.isFinite(options.groundY)?options.groundY-Math.round(y):0,
      ellipseShadow:!!options.ellipseShadow,tilt:options.tilt,shadowColor:options.shadowColor,shadowOpacity:options.shadowOpacity };
    if (Number.isFinite(options.walkDistance)) args.walkDistance=options.walkDistance;
    if (options.introGesture) args.introGesture=options.introGesture;
    if (options.authoredSequence) { args.authoredSequence=options.authoredSequence; args.sequenceProgress=clamp(options.sequenceProgress); }
    if (options.motion) args.motion=options.motion;
    if (options.fromPose) args.fromPose=options.fromPose;
    if (Number.isFinite(options.transition)) args.transition=options.transition;
    if (Number.isInteger(options.frame)) args.techniqueFrame = options.frame;
    if (options.attack) args.attack = options.attack;
    global.BrasaRender.fighter(ctx, data, 0, 0, scale, pose, options.face || 1, time, args);
    ctx.restore();
  }

  // Pixel particles communicate powers; every person remains an actual complete character sprite.
  function power(ctx, id, color, p, time, x = 0, y = -90, strength = 1) {
    const seed = hash(id), kind = global.BRASA_MOVES?.fighters?.[id]?.specials?.[0]?.effect || finisherKinds[id];
    const cold = id === 'ramiro' || /ice|snow|frost/.test(kind), accent = cold ? '#b6eaff' : color || '#ffc77b';
    const fade = pulse(p) * Math.min(1, strength), size = cold ? 4 : 3;
    ctx.save(); ctx.fillStyle = accent; ctx.globalAlpha = fade * .75;
    for (let i = 0; i < 20; i++) {
      const a = i * 2.399 + seed % 7, r = (14 + i % 6 * 8) * (.6 + p * 1.7);
      const xx = x + Math.cos(a + time * (cold ? .3 : 1)) * r, yy = y + Math.sin(a) * r * .8 - p * (cold ? 12 : 35);
      ctx.fillRect(Math.round(xx / 2) * 2, Math.round(yy / 2) * 2, size, size);
    }
    if (cold) for (let i = 0; i < 7; i++) {
      const h = (12 + i % 3 * 7) * fade;
      ctx.fillRect(x - 34 + i * 11, -h, 6, Math.max(1, h)); ctx.fillRect(x - 32 + i * 11, -h - 5, 2, 5);
    }
    else if (/voice|sound|music/.test(kind) || ['luz','tenor','roxy','akari','valter'].includes(id)) {
      for(let i=0;i<13;i++){const h=(10+Math.abs(Math.sin(time*9+i*.7))*54)*fade;ctx.fillRect(x-55+i*9,y-h/2,4,Math.max(1,h));}
    } else if (/water|wave/.test(kind) || ['nara','long','lin'].includes(id)) {
      for(let j=0;j<3;j++)for(let i=0;i<20;i++)ctx.fillRect(x-80+i*8,y+j*14+Math.round(Math.sin(i*.4-time*5)*16/2)*2,7,3);
    } else if (/electric|lightning|machine/.test(kind) || ['jana','iris','voltx','tetsu','zoya','qiao','clockwork','enzo'].includes(id)) {
      for(let j=0;j<3;j++)for(let i=0;i<14;i++)ctx.fillRect(x-58+i*9,y-30+j*26+(i%2?7:-7),10,3);
    } else if (/root|thorn|wood|vine/.test(kind) || ['caua','rosa','morgan'].includes(id)) {
      for(let j=0;j<6;j++)for(let i=0;i<Math.round(fade*14);i++)ctx.fillRect(x-48+j*20+(i%3-1)*3,-i*9-5,5,10);
    } else if (/fire|fissure|heat|lava/.test(kind) || ['bento','bo','rocco','apogeu'].includes(id)) {
      for(let i=0;i<12;i++){const h=(15+i%4*12)*fade;ctx.fillRect(x-49+i*9,-h,7,Math.max(1,h));ctx.fillRect(x-47+i*9,-h-8,3,8);}
    } else if (/rock|earth|marble|steel/.test(kind) || ['brick','boris','daigo','barro','bianca','arthur','regolith'].includes(id)) {
      for(let j=0;j<7;j++){const h=(9+j%3*12)*fade;ctx.fillRect(x-56+j*18,-h,14,Math.max(1,h));ctx.fillRect(x-53+j*18,-h-4,8,4);}
    }
    ctx.restore();
  }

  function choreography(data,p,reduced){
    const id=data.id,entry=entrances[id],base=styleProfile(entry?.style),script=personal[id]||['scan','brace'];
    const variation=(hash(id)%7-3)*.002,arrivalEnd=base.arrive+variation;
    const distance=base.distance+(hash(id)%5-2)*2,enter=travelEase(p/arrivalEnd);
    let x=-distance*(1-enter),y=0,pose=p<arrivalEnd?'walk':'idle',fromPose,transition;
    if(global.BrasaFighters?.hasAuthored?.(data)){
      // These frames already contain the complete acting. Keep their floor and
      // silhouette intact instead of adding the older generated microgestures.
      const start=Math.max(.43,arrivalEnd),end=.70;
      let authoredSequence,sequenceProgress;
      if(p>=start&&p<end){pose='idle';authoredSequence='intro';sequenceProgress=clamp((p-start)/(end-start));}
      else if(p>=end)pose='guard';
      if(reduced||p>=.98){x=0;pose='guard';authoredSequence=undefined;sequenceProgress=undefined;}
      return{x,y:0,pose,authored:true,authoredSequence,sequenceProgress,
        signature:0,accent:0,walkDistance:reduced?0:distance*enter,arrived:enter>=1,seed:hash(id)};
    }
    const warmStart=base.warm[0]+variation,warmEnd=base.warm[1]+variation,signatureStart=base.signature[0]+variation,signatureEnd=base.signature[1]+variation;
    const warm=clamp((p-warmStart)/(warmEnd-warmStart)),signature=clamp((p-signatureStart)/(signatureEnd-signatureStart));
    let introGesture;
    if(p>=warmStart&&p<=warmEnd)introGesture={kind:script[0],progress:warm};
    else if(p>=signatureStart&&p<=signatureEnd)introGesture={kind:script[1],progress:signature};
    if(p>=arrivalEnd&&p<arrivalEnd+.075){fromPose='walk';transition=settle((p-arrivalEnd)/.075);}
    if(base.name==='performer')x+=envelope(warm)*3-envelope(signature)*4;
    else if(base.name==='athlete')x+=envelope(warm)*-3+envelope(signature)*5;
    else if(base.name==='grappler')x+=envelope(signature)*3;
    else if(base.name==='heavy')x+=envelope(signature)*2;
    let motion;
    const hop={tiao:22,shen:11,apogeu:25}[id];
    if(hop&&p>=signatureStart&&p<signatureEnd){
      const jumpPhase=signature;y=-4*hop*jumpPhase*(1-jumpPhase);pose='jump';motion={jumpPhase};introGesture=undefined;fromPose='idle';transition=1;
    }
    if(p>=base.guard){pose='guard';fromPose='idle';transition=settle((p-base.guard)/.08);introGesture=undefined;}
    if(reduced||p>=.98){x=0;y=0;pose='guard';introGesture=undefined;motion=undefined;fromPose=undefined;transition=1;}
    return{x,y,pose,fromPose,transition,introGesture,motion,signature,
      accent:p>=signatureStart&&p<=signatureEnd?envelope(signature):0,
      walkDistance:reduced?0:distance*enter,arrived:enter>=1,seed:hash(id)};
  }

  function companionPlan(index,p){
    const target=[-142,-46,50][index],depth=[-13,-26,-39][index];
    // Equal-length, separate lanes keep the formation clear of Bento's feet.
    const start=Math.min(target-310,-280),arrive=.43+index*.018,depart=.60+index*.018;
    const entered=travelEase(p/arrive),left=travelEase((p-depart)/(1-depart));
    const x=start+(target-start)*entered-(target-start)*left;
    const travel=(target-start)*entered+(target-start)*left;
    const cycles=Math.ceil((target-start)/92)+.5;
    const phase=p<depart?entered*cycles:.5+left*cycles;
    const frame=p>=arrive&&p<depart?3:Math.floor(((phase%1)+1)%1*6)%6;
    return{x,y:depth,scale:.84-index*.035,frame,face:p<depart?1:-1,travel};
  }

  function signatureAccent(ctx,data,q,scale){
    const kinds={ramiro:'cold',jana:'spark',nara:'water',caua:'leaf',rosa:'leaf',breu:'thread',iris:'steam',luz:'sound',bento:'ember',kitsune:'ember',rocco:'ember',morgan:'leaf',long:'water',selene:'star',apogeu:'spark',clockwork:'steam'};
    const kind=kinds[data.id],weight=q.accent;if(!kind||!(weight>0))return;
    const unit=2,x=q.x+14*scale,y=q.y-62*scale;
    ctx.save();ctx.globalAlpha=weight*.34;ctx.fillStyle=kind==='cold'?'#bcecff':data.accent||'#e8c685';
    for(let i=0;i<5;i++){
      const xx=x+(i-2)*3*scale,yy=y-((i*7)%9)*scale-weight*(kind==='steam'?8:3)*scale;
      if(kind==='sound')ctx.fillRect(Math.round(xx/2)*2,Math.round((y-(2+i%3*2)*scale)/2)*2,unit,Math.max(2,Math.round((3+i%3)*scale/2)*2));
      else ctx.fillRect(Math.round(xx/2)*2,Math.round(yy/2)*2,unit,unit);
    }
    ctx.restore();
  }

  function drawEntrance(ctx,data,x,groundY,scale,face,progress,options={}){
    if(!ctx||!global.BrasaRender?.fighter||!data||!entrances[data.id]||![x,groundY,scale].every(Number.isFinite)||!(scale>0))return false;
    const p=clamp(progress),reduced=!!options.reducedMotion,t=p*4,q=choreography(data,p,reduced);
    ctx.save();ctx.translate(x,groundY);ctx.scale(face<0?-1:1,1);ctx.globalAlpha=1;
    if(data.id==='bento'&&!reduced&&!options.structureOnly&&options.companions!==false&&p<1){
      for(let i=2;i>=0;i--){const c=companionPlan(i,p);companion(ctx,i,c.x,c.y,scale*c.scale,c.frame,c.face,options);}
    }
    if(!reduced&&!options.structureOnly&&!q.authored)signatureAccent(ctx,data,q,scale);
    actor(ctx,data,q.x,q.y,scale,q.pose,t,{...options,groundY:0,face:1,alpha:1,frame:undefined,attack:undefined,filter:undefined,tilt:0,
      introGesture:q.introGesture,authoredSequence:q.authoredSequence,sequenceProgress:q.sequenceProgress,motion:q.motion,walkDistance:q.walkDistance,fromPose:q.fromPose,transition:q.transition});
    ctx.restore();return true;
  }

  function cinematicX(localX,center,dir,viewport,body){
    if(!viewport||!Number.isFinite(viewport.x)||!Number.isFinite(viewport.visibleWidth))return localX;
    let left=(viewport.fighterMargin||55)+4,right=left;
    if(body&&['ko','lose'].includes(body.pose)){
      // A fallen sprite rotates around its registered feet; standing width is
      // insufficient at corners. Keep its longer horizontal silhouette inside.
      const scale=body.scale||2.15,height=body.player?.visualBounds?.top||110*scale,foot=body.player?.visualBounds?.bottom||4,face=(body.face||1)*dir;
      const negative=Math.max(0,height-20*scale)+4,positive=20*scale+foot+4;
      left=face>0?negative:positive;right=face>0?positive:negative;
    }
    const worldX=center+localX*dir;
    return (Math.max(viewport.x+left,Math.min(viewport.x+viewport.visibleWidth-right,worldX))-center)*dir;
  }
  function fighterScale(options){return Number.isFinite(options.fighterScale)&&options.fighterScale>0?options.fighterScale:2.15;}
  function drawSuper(ctx, engine, time = 0, options = {}) {
    if (!ctx || !engine?.players || engine.phase !== 'super' || !global.BrasaRender?.fighter) return false;
    const owner = engine.players[engine.superOwner], target = engine.players[engine.superTarget];
    if (!owner?.data || !target?.data) return false;
    const p = clamp(engine.phaseTime / (engine.superDuration || 1.65)), reduced = !!options.reducedMotion, scale=fighterScale(options), unit=scale/2.15;
    const center=(owner.x+target.x)/2, viewport=options.viewport;
    const dir = owner.x < target.x ? 1 : -1, hit = pulse((p - .44) / .43);
    ctx.save();
    if(!options.structureOnly){ctx.fillStyle = '#090817'; ctx.globalAlpha = .38; ctx.fillRect(viewport?.x||0, -(options.groundOffset||0)-(viewport?540/(viewport.zoom||1):540), viewport?.visibleWidth||960, viewport?1080/(viewport.zoom||1):1080);}
    ctx.globalAlpha = 1;
    ctx.translate(center, 455); ctx.scale(dir, 1);
    const ox = (owner.x - center) * dir, tx = (target.x - center) * dir, style = entrances[owner.data.id]?.style || 'weapon';
    const kick = usesKick(owner.data.id,style), wind = p < .44, fired = p >= .44 && p < .8;
    if(!options.structureOnly)power(ctx, owner.data.id, owner.data.accent, p, time, ox + 24*unit, -108*unit, reduced ? .2 : 1);
    actor(ctx, owner.data, cinematicX(ox + (reduced ? 0 : pulse(p) * 22*unit),center,dir,viewport), 0, scale, wind ? 'heavy' : fired ? kick ? 'kick' : 'special' : 'guard', time,
      { ...options,groundY:0,frame: wind ? kick ? 4 : 2 : fired ? kick ? 5 : 3 : 6 });
    const connected = !!engine.superConnected, blocked = !!engine.superBlocked;
    actor(ctx, target.data, cinematicX(tx + (connected && !reduced ? hit * (blocked ? 7 : 42)*unit : 0),center,dir,viewport,{player:target,scale,pose:connected&&!blocked&&target.hp<=0&&p>.86?'ko':'hurt',face:-1}), connected && !blocked && !reduced ? -hit * 34*unit : 0, scale,
      connected ? blocked ? 'guard' : target.hp <= 0 && p > .86 ? 'ko' : 'hurt' : target.pose || 'idle', time,
      { ...options,groundY:0,face: -1, tilt: connected && !blocked && !reduced ? hit * .12 : 0 });
    if (!options.structureOnly && connected && p > .44 && p < .85) power(ctx, owner.data.id, owner.data.accent, (p - .44) / .41, time, tx, -109*unit, reduced ? .15 : 1);
    ctx.restore(); return true;
  }

  function drawFinisher(ctx, engine, time = 0, options = {}) {
    if (!ctx || !engine?.players || !global.BrasaRender?.fighter) return false;
    const winner = typeof engine.finisherWinner === 'number' ? engine.players[engine.finisherWinner] : engine.finisherWinner;
    const loser = typeof engine.finisherLoser === 'number' ? engine.players[engine.finisherLoser] : engine.finisherLoser;
    if (!winner?.data || !loser?.data || !entrances[winner.data.id]) return false;
    const id = winner.data.id, style = entrances[id].style, p = clamp(engine.phaseTime / (engine.finisherDuration || 3.8)), reduced = !!options.reducedMotion, scale=fighterScale(options), unit=scale/2.15;
    const dir = winner.x < loser.x ? 1 : -1, seed = hash(id), approach = part(p, 0, .25), reaction = part(p, .44, .88);
    const viewport=options.viewport,center=viewport?viewport.x+viewport.visibleWidth/2:(winner.x+loser.x)/2;
    const wx = mix((winner.x - center) * dir, -95*unit, approach), vx = mix((loser.x - center) * dir, 70*unit, approach) + reaction * (85 + seed % 70)*unit;
    const leap = !reduced && ['aerial','speed','dance'].includes(style) ? -pulse((p - .29) / .42) * 35*unit : 0;
    const fall = p > .84, impact = pulse((p - .44) / .4), kicked = usesKick(id,style);
    ctx.save(); ctx.translate(center, 455); ctx.scale(dir, 1);
    if (!options.structureOnly && !reduced) power(ctx, id, winner.data.accent, p, time, wx + 35*unit, -112*unit, 1);
    actor(ctx, winner.data, cinematicX(wx + pulse((p - .25) / .5) * 30*unit,center,dir,viewport), leap, scale,
      p < .25 ? 'walk' : p < .44 ? 'heavy' : p < .76 ? kicked ? 'kick' : 'special' : 'guard', time,
      { ...options,groundY:0,frame: p < .25 ? undefined : p < .44 ? kicked ? 4 : 2 : p < .76 ? kicked ? 5 : 3 : 6 });
    actor(ctx, loser.data, cinematicX(vx,center,dir,viewport,{player:loser,scale,pose:fall?'ko':'hurt',face:-1}), !reduced && !fall ? -impact * (25 + seed % 35)*unit : 0, scale,
      p < .44 ? 'dazed' : fall ? 'ko' : 'hurt', time, { ...options,groundY:0,face: -1, tilt: !reduced && !fall ? impact * .16 : 0 });
    if (!options.structureOnly && !reduced && p > .43 && p < .82) power(ctx, id, winner.data.accent, (p - .43) / .39, time, vx, -110*unit, 1);
    ctx.restore(); return true;
  }

  function drawResult(ctx, engine, time = 0, options = {}) {
    if (!ctx || engine?.phase !== 'matchOver' || !global.BrasaRender?.fighter || !engine.players) return false;
    const elapsed = Math.max(0, Number(engine.phaseTime) || 0), reduced = !!options.reducedMotion, scale=fighterScale(options), unit=scale/2.15;
    engine.players.forEach((player,index)=>{
      const won = index === engine.winner, id = player.data.id, style = entrances[id]?.style || 'weapon', seed = hash(id);
      let pose = won ? 'victory' : 'lose', frame, dy=0, tilt=0;
      if(won){
        const q=(elapsed+(seed%13)*.07)%(2.6+(seed%5)*.14);
        if(['speed','dance','aerial'].includes(style)){
          pose=q<.55?'kick':q<1.15?'heavy':'guard';frame=q<.55?5:q<1.15?3:6;
          if(!reduced)dy=-Math.abs(Math.sin(Math.min(1,elapsed)*Math.PI*2))*10*unit*(1-part(elapsed,0,1));
        }else if(style==='spectral'){
          pose=q<1.15?'special':'guard';frame=q<1.15?1:6;if(!reduced)dy=(-5-Math.sin(elapsed*1.7)*3)*unit;
        }else if(style==='machine'){
          pose=q<.65?'light':q<1.3?'heavy':'guard';frame=q<.65?1:q<1.3?3:6;
        }else if(style==='power'||style==='grapple'){
          pose=q<.75?'heavy':'guard';frame=q<.75?3:6;
        }else{
          pose=q<.6?'light':q<1.25?'heavy':'guard';frame=q<.6?0:q<1.25?3:6;
        }
        if(['jack','tommy'].includes(id)){const beat=Math.floor(q*4);pose=beat<3?'light':beat<5?'heavy':'guard';frame=beat<3?beat%2?0:1:beat<5?3:6;dy=0;}
        if(!options.structureOnly&&!reduced&&elapsed<1.5){ctx.save();ctx.translate(player.x,455);power(ctx,id,player.data.accent,clamp(elapsed/1.5),time,0,-110*unit,.35);ctx.restore();}
      }else if(elapsed<.8+(seed%5)*.08&&!reduced){
        pose=elapsed<.3?'hurt':'crouch';tilt=elapsed<.3?Math.sin(elapsed*8)*.06:0;
      }
      actor(ctx,player.data,cinematicX(player.x,0,1,options.viewport,{player,scale,pose,face:player.facing}),455-player.y+dy,scale,pose,time,{...options,groundY:455,frame,face:player.facing,tilt});
    });
    return true;
  }

  global.BrasaPresentation = Object.freeze({ drawEntrance, drawSuper, drawFinisher, drawResult, entrances, finisherKinds, smooth,readyCompanions });
})(typeof window !== 'undefined' ? window : globalThis);
