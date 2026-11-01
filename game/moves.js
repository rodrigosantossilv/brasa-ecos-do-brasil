/* BRASA — 76 story-linked combat kits. */
(function(global){
 // One clock describes the visible contact windows and the collision windows.
 global.BrasaMoveTiming=Object.freeze({sample(attack){
   const kinds=attack?.animation?.sequence;if(!attack?.special||!Array.isArray(kinds)||!kinds.length||!kinds.every(kind=>['light','heavy','kick'].includes(kind)))return null;
   const t=Math.max(0,Number(attack.time)||0),start=Math.max(.001,Number(attack.startup)||0),active=Math.max(.001,Number(attack.active)||0),recovery=Math.max(.001,Number(attack.recovery)||0),slice=active/kinds.length,contact=.42;
   if(t<start)return{kind:kinds[0],index:0,phase:'anticipation',progress:t/start,canHit:false};
   const index=Math.min(kinds.length-1,Math.floor((t-start)/slice)),begin=start+index*slice,end=begin+slice*contact,u=(t-begin)/slice,last=index===kinds.length-1;
   if(t<start+active&&u<contact)return{kind:kinds[index],index,phase:'contact',progress:u/contact,canHit:true,windowEnd:end};
   if(last)return{kind:kinds[index],index,phase:'recover',progress:Math.max(0,Math.min(1,(t-end)/(slice*(1-contact)+recovery))),canHit:false};
   if(u>.78)return{kind:kinds[index+1],index:index+1,phase:'anticipation',progress:(u-.78)/.22,canHit:false};
   return{kind:kinds[index],index,phase:'recover',progress:(u-contact)/(.78-contact),canHit:false};
 }});
 global.BRASA_MOVES = {
  "version": 10,
  "fighters": {
    "bento": {
      "movement": {
        "walk": 0.94,
        "backwalk": 0.62,
        "jump": 0.94
      },
      "normalScale": {
        "damage": 1.14,
        "speed": 0.89,
        "range": 1.03
      },
      "normalNames": {
        "light": "Nó de Couro",
        "heavy": "Punho do Sertão",
        "kick": "Bota de Poeira"
      },
      "specials": [
        {
          "id": "bento-sol",
          "name": "Sol Rachado",
          "description": "Abre uma fissura de brasa longa que atinge apenas o rival no chão; saltos escapam e a recuperação é lenta.",
          "type": "melee",
          "startup": 0.23,
          "active": 0.11,
          "recovery": 0.37,
          "range": 365,
          "damage": 125,
          "stun": 0.37,
          "push": 65,
          "cooldown": 1.55,
          "effect": "fissure",
          "ground": true,
          "animation": {
            "pose": "bento-special0",
            "limb": "lead",
            "path": "Sol Rachado",
            "prop": "cangaco-band",
            "effect": "fissure",
            "storyProp": "cangaco-band"
          },
          "storyProp": "cangaco-band",
          "storyMotion": "strike"
        },
        {
          "id": "bento-passo",
          "name": "Passo de Cinza",
          "description": "Avança com uma cotovelada e recebe armadura breve durante o início. Agarrões vencem a proteção.",
          "type": "dash",
          "startup": 0.18,
          "active": 0.2,
          "recovery": 0.34,
          "range": 98,
          "damage": 105,
          "stun": 0.3,
          "push": 65,
          "cooldown": 2.25,
          "effect": "dash",
          "move": 330,
          "armor": 0.24,
          "animation": {
            "pose": "bento-special1",
            "limb": "both",
            "path": "Passo de Cinza",
            "prop": "cangaco-band",
            "effect": "dash",
            "storyProp": "cangaco-band"
          },
          "storyProp": "cangaco-band",
          "storyMotion": "travel"
        },
        {
          "id": "bento-ferro",
          "name": "Ferro em Brasa",
          "description": "Soco ascendente curto que lança o alvo e alcança saltos baixos; uma defesa deixa Bento exposto.",
          "type": "launcher",
          "startup": 0.11,
          "active": 0.15,
          "recovery": 0.43,
          "range": 148,
          "damage": 115,
          "stun": 0.39,
          "push": 36,
          "cooldown": 1.9,
          "effect": "fissure",
          "reachY": 195,
          "launch": 290,
          "animation": {
            "pose": "bento-special2",
            "limb": "rear",
            "path": "Ferro em Brasa",
            "prop": "cangaco-band",
            "effect": "fissure",
            "storyProp": "cangaco-band"
          },
          "storyProp": "cangaco-band",
          "storyMotion": "rise"
        }
      ],
      "combos": [
        {
          "id": "bento-couro",
          "name": "Couro, Poeira e Brasa",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Três golpes confirmados terminam com um empurrão firme.",
          "bonus": {
            "damage": 12,
            "push": 25
          }
        },
        {
          "id": "bento-alvorada",
          "name": "Alvorada do Sertão",
          "sequence": [
            "light",
            "kick",
            "special2"
          ],
          "description": "Encerra a pressão com Ferro em Brasa e um lançamento reforçado.",
          "bonus": {
            "damage": 10,
            "launch": 320
          }
        }
      ],
      "attackStyle": "cangaco",
      "defenseName": "Guarda do Gibão",
      "finisher": {
        "name": "Cerco da Brasa",
        "line": "O sertão nunca luta sozinho.",
        "kind": "cangaco"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.083,
          "active": 0.071,
          "recovery": 0.181
        },
        "heavy": {
          "startup": 0.205,
          "active": 0.098,
          "recovery": 0.327
        },
        "kick": {
          "startup": 0.137,
          "active": 0.108,
          "recovery": 0.267
        }
      },
      "super": {
        "id": "bento-super",
        "name": "Sol de Todos os Caminhos",
        "description": "Energia completa: Bento Brasa reúne sua técnica em uma sequência cinematográfica. A abertura frontal pode ser defendida.",
        "line": "O sertão nunca luta sozinho.",
        "kind": "bento",
        "type": "melee",
        "effect": "fissure",
        "meterCost": 100,
        "startup": 0.3,
        "active": 0.2,
        "recovery": 0.68,
        "range": 240,
        "reachY": 195,
        "damage": 284,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Sol de Todos os Caminhos",
          "palette": [
            "#9f653c",
            "#ff763a"
          ],
          "style": "grapple"
        },
        "storyProp": "cangaco-band"
      },
      "entrance": {
        "name": "Bento chega entre dois companheiros cangaceiros de tamanho humano.",
        "line": "O sertão não chega sozinho.",
        "style": "grapple",
        "gesture": "O bando se despede na lateral; Bento tira a poeira do gibão.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Bento chega entre dois companheiros cangaceiros de tamanho humano.",
            "pose": "arrive",
            "prop": "cangaco-band",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "O bando se despede na lateral; Bento tira a poeira do gibão.",
            "pose": "warmup",
            "prop": "cangaco-band",
            "effect": "none"
          },
          {
            "at": 2.25,
            "action": "Ele acende uma brasa na palma, fecha a mão e pisa na linha.",
            "pose": "signature",
            "prop": "cangaco-band",
            "effect": "fissure"
          },
          {
            "at": 3.25,
            "action": "O sertão não chega sozinho.",
            "pose": "ready",
            "prop": "cangaco-band",
            "effect": "none"
          }
        ]
      },
      "visual": {
        "body": "athletic",
        "silhouette": "Chapéu de couro com estrela rachada, lenço vermelho, gibão gasto e botas de poeira. O braço esquerdo exibe fissuras de brasa. Sua silhueta combina ombros largos, contorno escuro e uma postura baixa e firme.",
        "outfit": "Chapéu de couro com estrela rachada, lenço vermelho, gibão gasto e botas de poeira. O braço esquerdo exibe fissuras de brasa. Sua silhueta combina ombros largos, contorno escuro e uma postura baixa e firme.",
        "prop": "cangaco-band",
        "stance": "Nó de Couro",
        "palette": [
          "#9f653c",
          "#ff763a",
          "#b9764e",
          "#2b211c"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Bento ergue o chapéu para os companheiros que aguardam fora da faixa de luta.",
        "effect": "fissure",
        "line": "O sertão nunca luta sozinho."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Bento apoia a mão no joelho; a última brasa da palma se apaga.",
        "effect": "none"
      },
      "animation": {
        "stance": "Golpes pesados, rasteiras longas e fogo que percorre o chão. Avança devagar e encurrala com pressão terrestre; sua recuperação longa oferece aberturas para saltos e contra-ataques.",
        "light": {
          "limb": "lead",
          "path": "Nó de Couro",
          "prop": "cangaco-band"
        },
        "heavy": {
          "limb": "rear",
          "path": "Punho do Sertão",
          "prop": "cangaco-band"
        },
        "kick": {
          "limb": "leg",
          "path": "Bota de Poeira",
          "prop": "cangaco-band"
        },
        "guard": {
          "prop": "cangaco-band",
          "pose": "bento-guard"
        }
      }
    },
    "ramiro": {
      "movement": {
        "walk": 0.96,
        "backwalk": 0.64,
        "jump": 0.94
      },
      "normalScale": {
        "damage": 1.07,
        "speed": 0.91,
        "range": 1.1
      },
      "normalNames": {
        "light": "Nó de Lenço",
        "heavy": "Martelo de Geada",
        "kick": "Bota do Inverno"
      },
      "specials": [
        {
          "id": "ramiro-geada",
          "name": "Boleadeira de Geada",
          "description": "Lança um núcleo de gelo à altura do tronco. O acerto congela por 0,42 s; o projétil pode ser defendido ou saltado e não congela através da guarda.",
          "type": "projectile",
          "startup": 0.19,
          "active": 0.07,
          "recovery": 0.34,
          "range": 0,
          "damage": 0,
          "stun": 0.3,
          "push": 45,
          "cooldown": 1.85,
          "effect": "ice",
          "projectile": {
            "kind": "ice",
            "y": 52,
            "vx": 310,
            "radius": 23,
            "damage": 96,
            "stun": 0.3,
            "freeze": 0.42,
            "push": 38,
            "life": 2.7,
            "delay": 0.19,
            "effect": "ice"
          },
          "animation": {
            "pose": "ramiro-special0",
            "limb": "lead",
            "path": "Boleadeira de Geada",
            "prop": "ice-bolas",
            "effect": "ice",
            "storyProp": "ice-bolas"
          },
          "storyProp": "ice-bolas",
          "storyMotion": "release"
        },
        {
          "id": "ramiro-espinhos",
          "name": "Espinhos da Estância",
          "description": "Planta cristais com atraso perto do rival, até 245 de distância. Só uma formação fica armada; saltos escapam e o contato terrestre congela por 0,55 s.",
          "type": "trap",
          "startup": 0.27,
          "active": 0.07,
          "recovery": 0.36,
          "range": 0,
          "damage": 0,
          "stun": 0.3,
          "push": 45,
          "cooldown": 2.3,
          "effect": "ice",
          "projectile": {
            "kind": "trap",
            "anchor": "enemy",
            "maxRange": 245,
            "unique": true,
            "y": 9,
            "vx": 0,
            "radius": 42,
            "damage": 79,
            "stun": 0.3,
            "freeze": 0.55,
            "push": 18,
            "life": 2.4,
            "delay": 0.48,
            "effect": "ice"
          },
          "animation": {
            "pose": "ramiro-special1",
            "limb": "both",
            "path": "Espinhos da Estância",
            "prop": "ice-bolas",
            "effect": "ice",
            "storyProp": "ice-bolas"
          },
          "storyProp": "ice-bolas",
          "storyMotion": "plant"
        },
        {
          "id": "ramiro-pampa",
          "name": "Pampa Fechado",
          "description": "Agarrão de comando que troca os lados e prende o alvo numa crosta de gelo por 0,70 s. Falha contra rivais no ar ou agachados; não renova um congelamento já ativo.",
          "type": "throw",
          "startup": 0.17,
          "active": 0.07,
          "recovery": 0.43,
          "range": 83,
          "damage": 148,
          "stun": 0.38,
          "push": 48,
          "cooldown": 2.4,
          "effect": "ice",
          "freeze": 0.7,
          "swap": true,
          "animation": {
            "pose": "ramiro-special2",
            "limb": "rear",
            "path": "Pampa Fechado",
            "prop": "ice-bolas",
            "effect": "ice",
            "storyProp": "ice-bolas"
          },
          "storyProp": "ice-bolas",
          "storyMotion": "close"
        }
      ],
      "combos": [
        {
          "id": "ramiro-campeiro",
          "name": "Tranco Campeiro",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "A sequência das botas ganha um pequeno bônus no último acerto.",
          "bonus": {
            "damage": 15,
            "push": 20
          }
        },
        {
          "id": "ramiro-temporal",
          "name": "Temporal na Estância",
          "sequence": [
            "light",
            "kick",
            "special0"
          ],
          "description": "A boleadeira de gelo encerra três acertos com congelamento curto e dano adicional moderado.",
          "bonus": {
            "damage": 9,
            "root": 0.23
          }
        }
      ],
      "attackStyle": "ice",
      "defenseName": "Parede de Geada",
      "finisher": {
        "name": "Inverno do Pampa",
        "line": "Até a saudade aprende a esperar o degelo.",
        "kind": "ice"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.091,
          "active": 0.082,
          "recovery": 0.188,
          "effect": "ice"
        },
        "heavy": {
          "startup": 0.211,
          "active": 0.101,
          "recovery": 0.312,
          "effect": "ice"
        },
        "kick": {
          "startup": 0.145,
          "active": 0.112,
          "recovery": 0.253,
          "effect": "ice"
        }
      },
      "super": {
        "id": "ramiro-super",
        "name": "Coração do Último Inverno",
        "description": "Energia completa: Ramiro Ferro reúne sua técnica em uma sequência cinematográfica. A abertura frontal pode ser defendida.",
        "line": "Até a saudade aprende a esperar o degelo.",
        "kind": "ramiro",
        "type": "melee",
        "effect": "ice",
        "meterCost": 100,
        "startup": 0.3,
        "active": 0.2,
        "recovery": 0.68,
        "range": 260,
        "reachY": 195,
        "damage": 272,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Coração do Último Inverno",
          "palette": [
            "#47779a",
            "#bdefff"
          ],
          "style": "weapon"
        },
        "storyProp": "ice-bolas"
      },
      "entrance": {
        "name": "Ramiro entra conduzindo um cavalo fora da faixa de combate.",
        "line": "O minuano trouxe a conta.",
        "style": "weapon",
        "gesture": "Entrega as rédeas à estaca e retira as boleadeiras do alforje.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Ramiro entra conduzindo um cavalo fora da faixa de combate.",
            "pose": "arrive",
            "prop": "ice-bolas",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Entrega as rédeas à estaca e retira as boleadeiras do alforje.",
            "pose": "warmup",
            "prop": "ice-bolas",
            "effect": "none"
          },
          {
            "at": 2.25,
            "action": "Gira o gelo uma vez e a geada sobe pelas botas.",
            "pose": "signature",
            "prop": "ice-bolas",
            "effect": "ice"
          },
          {
            "at": 3.25,
            "action": "O minuano trouxe a conta.",
            "pose": "ready",
            "prop": "ice-bolas",
            "effect": "none"
          }
        ]
      },
      "visual": {
        "body": "tank",
        "silhouette": "Bombacha prata, botas altas, lenço branco e poncho azul de bordas cobertas por geada. Cabelos escuros grisalhos nas têmporas e luvas de couro desenham uma silhueta larga. Cristais de gelo acompanham as boleadeiras e o vapor da respiração anuncia seus ataques.",
        "outfit": "Bombacha prata, botas altas, lenço branco e poncho azul de bordas cobertas por geada. Cabelos escuros grisalhos nas têmporas e luvas de couro desenham uma silhueta larga. Cristais de gelo acompanham as boleadeiras e o vapor da respiração anuncia seus ataques.",
        "prop": "ice-bolas",
        "stance": "Nó de Lenço",
        "palette": [
          "#47779a",
          "#bdefff",
          "#d39970",
          "#37312e"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Ramiro recolhe as boleadeiras e ergue o lenço branco ao vento.",
        "effect": "ice",
        "line": "Até a saudade aprende a esperar o degelo."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Ramiro se apoia nas boleadeiras, que se desfazem em cristais.",
        "effect": "none"
      },
      "animation": {
        "stance": "Controla a aproximação com uma boleadeira de gelo e espinhos atrasados no chão. O congelamento abre uma oportunidade curta, seguido de resistência ao novo gelo. De perto usa um agarrão que troca os lados; saltos e pressão durante as preparações exploram sua mobilidade modesta.",
        "light": {
          "limb": "lead",
          "path": "Nó de Lenço",
          "prop": "ice-bolas"
        },
        "heavy": {
          "limb": "rear",
          "path": "Martelo de Geada",
          "prop": "ice-bolas"
        },
        "kick": {
          "limb": "leg",
          "path": "Bota do Inverno",
          "prop": "ice-bolas"
        },
        "guard": {
          "prop": "ice-bolas",
          "pose": "ramiro-guard"
        }
      }
    },
    "jana": {
      "movement": {
        "walk": 1.06,
        "backwalk": 0.78,
        "jump": 1.06
      },
      "normalScale": {
        "damage": 0.93,
        "speed": 1.15,
        "range": 0.93
      },
      "normalNames": {
        "light": "Palma da Ginga",
        "heavy": "Cotovelo de Roda",
        "kick": "Meia-Lua Acesa"
      },
      "specials": [
        {
          "id": "jana-volta",
          "name": "Volta do Mundo",
          "description": "Avança girando em três contatos eletrificados. Cada contato pode ser defendido e a saída do giro é vulnerável.",
          "type": "dash",
          "startup": 0.13,
          "active": 0.49,
          "recovery": 0.24,
          "range": 102,
          "damage": 42,
          "stun": 0.19,
          "push": 18,
          "cooldown": 1.55,
          "effect": "spin",
          "multi": 3,
          "move": 170,
          "animation": {
            "pose": "jana-special0",
            "limb": "lead",
            "path": "Volta do Mundo",
            "prop": "berimbau",
            "effect": "spin",
            "storyProp": "berimbau"
          },
          "storyProp": "berimbau",
          "storyMotion": "travel"
        },
        {
          "id": "jana-negativa",
          "name": "Negativa de Luz",
          "description": "Baixa a ginga e arma uma resposta: um golpe frontal comum na janela ativa provoca a rebatida elétrica. Sem ataque rival, Jana apenas conclui o movimento; rasteiras e agarrões vencem a leitura.",
          "type": "counter",
          "startup": 0.07,
          "active": 0.23,
          "recovery": 0.34,
          "range": 145,
          "damage": 115,
          "stun": 0.35,
          "push": 65,
          "cooldown": 2.15,
          "effect": "electric",
          "counterWindow": 0.23,
          "counterDamage": 115,
          "animation": {
            "pose": "jana-special1",
            "limb": "both",
            "path": "Negativa de Luz",
            "prop": "berimbau",
            "effect": "electric",
            "storyProp": "berimbau"
          },
          "storyProp": "berimbau",
          "storyMotion": "parry"
        },
        {
          "id": "jana-faisca",
          "name": "Faísca de Roda",
          "description": "Chute rápido de avanço que encurta a distância em um contato; não atravessa ataques ou projéteis sem sofrer dano.",
          "type": "dash",
          "startup": 0.1,
          "active": 0.18,
          "recovery": 0.31,
          "range": 120,
          "damage": 99,
          "stun": 0.32,
          "push": 42,
          "cooldown": 1.75,
          "effect": "spark",
          "move": 440,
          "animation": {
            "pose": "jana-special2",
            "limb": "rear",
            "path": "Faísca de Roda",
            "prop": "berimbau",
            "effect": "spark",
            "storyProp": "berimbau"
          },
          "storyProp": "berimbau",
          "storyMotion": "travel"
        }
      ],
      "combos": [
        {
          "id": "jana-largo",
          "name": "Largo Aceso",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Três acertos no ritmo da ginga ampliam o dano da meia-lua.",
          "bonus": {
            "damage": 11,
            "push": 15
          }
        },
        {
          "id": "jana-circuito",
          "name": "Circuito da Roda",
          "sequence": [
            "heavy",
            "kick",
            "special2"
          ],
          "description": "Fecha a entrada com Faísca de Roda e um pulso extra.",
          "bonus": {
            "damage": 14,
            "push": 18
          }
        }
      ],
      "attackStyle": "electric",
      "defenseName": "Negativa da Ginga",
      "finisher": {
        "name": "Roda de Mil Faíscas",
        "line": "A luz voltou pro bairro.",
        "kind": "electric"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.067,
          "active": 0.091,
          "recovery": 0.139
        },
        "heavy": {
          "startup": 0.158,
          "active": 0.112,
          "recovery": 0.229
        },
        "kick": {
          "startup": 0.103,
          "active": 0.127,
          "recovery": 0.216
        }
      },
      "super": {
        "id": "jana-super",
        "name": "Roda do Amanhecer",
        "description": "Energia completa: Jana Faísca reúne sua técnica em uma sequência cinematográfica. A abertura frontal pode ser defendida.",
        "line": "A luz voltou pro bairro.",
        "kind": "jana",
        "type": "melee",
        "effect": "spin",
        "meterCost": 100,
        "startup": 0.3,
        "active": 0.2,
        "recovery": 0.68,
        "range": 230,
        "reachY": 195,
        "damage": 260,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Roda do Amanhecer",
          "palette": [
            "#e8d9a4",
            "#f8d548"
          ],
          "style": "dance"
        },
        "storyProp": "berimbau"
      },
      "entrance": {
        "name": "Uma roda de capoeira se abre ao fundo para Jana entrar.",
        "line": "O bairro inteiro está ouvindo.",
        "style": "dance",
        "gesture": "Jana cumprimenta a roda, abaixa e toca o chão.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Uma roda de capoeira se abre ao fundo para Jana entrar.",
            "pose": "arrive",
            "prop": "berimbau",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Jana cumprimenta a roda, abaixa e toca o chão.",
            "pose": "warmup",
            "prop": "berimbau",
            "effect": "none"
          },
          {
            "at": 2.25,
            "action": "Executa uma ginga curta; faíscas marcam apenas a ponta dos pés.",
            "pose": "signature",
            "prop": "berimbau",
            "effect": "spin"
          },
          {
            "at": 3.25,
            "action": "O bairro inteiro está ouvindo.",
            "pose": "ready",
            "prop": "berimbau",
            "effect": "none"
          }
        ]
      },
      "visual": {
        "body": "athletic",
        "silhouette": "Tranças presas, roupa esportiva branca e amarela, tênis leves e faixas nos punhos. Pequenos pontos de luz marcam o arco dos pés. A ginga mantém uma silhueta aberta e reconhecível.",
        "outfit": "Tranças presas, roupa esportiva branca e amarela, tênis leves e faixas nos punhos. Pequenos pontos de luz marcam o arco dos pés. A ginga mantém uma silhueta aberta e reconhecível.",
        "prop": "berimbau",
        "stance": "Palma da Ginga",
        "palette": [
          "#e8d9a4",
          "#f8d548",
          "#8e4e32",
          "#242126"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Jana abre os braços e encerra a ginga voltada à sua roda.",
        "effect": "spin",
        "line": "A luz voltou pro bairro."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Jana sustenta uma negativa baixa e reconhece o rival com a cabeça.",
        "effect": "none"
      },
      "animation": {
        "stance": "Ginga, esquivas baixas, chutes giratórios e respostas rápidas. Favorece aproximações em ângulo e leitura do adversário; tem pouco alcance parado e sofre ao errar uma sequência.",
        "light": {
          "limb": "lead",
          "path": "Palma da Ginga",
          "prop": "berimbau"
        },
        "heavy": {
          "limb": "rear",
          "path": "Cotovelo de Roda",
          "prop": "berimbau"
        },
        "kick": {
          "limb": "leg",
          "path": "Meia-Lua Acesa",
          "prop": "berimbau"
        },
        "guard": {
          "prop": "berimbau",
          "pose": "jana-guard"
        }
      }
    },
    "caua": {
      "movement": {
        "walk": 1.04,
        "backwalk": 0.78,
        "jump": 1.04
      },
      "normalScale": {
        "damage": 0.87,
        "speed": 1.12,
        "range": 0.96
      },
      "normalNames": {
        "light": "Ramo Curto",
        "heavy": "Nó de Raiz",
        "kick": "Passo Invertido"
      },
      "specials": [
        {
          "id": "caua-trilha",
          "name": "Trilha Perdida",
          "description": "Deixa um clarão no ponto de partida e surge às costas do rival. Depois da preparação, a pancada de raiz prende os pés; a mudança de lado não impede que Cauã seja interrompido.",
          "type": "teleport",
          "startup": 0.2,
          "active": 0.1,
          "recovery": 0.36,
          "range": 125,
          "damage": 100,
          "stun": 0.3,
          "push": 12,
          "cooldown": 1.55,
          "effect": "roots",
          "root": 0.8,
          "teleport": {
            "side": "behind",
            "distance": 91,
            "height": 0
          },
          "animation": {
            "pose": "caua-special0",
            "limb": "lead",
            "path": "Trilha Perdida",
            "prop": "root-branch",
            "effect": "roots",
            "storyProp": "root-branch"
          },
          "storyProp": "root-branch",
          "storyMotion": "arrival"
        },
        {
          "id": "caua-raiz",
          "name": "Raiz Acordada",
          "description": "Planta uma raiz atrasada perto do rival, até uma distância limitada. Só uma raiz fica armada por vez e saltos passam sobre ela.",
          "type": "trap",
          "startup": 0.24,
          "active": 0.06,
          "recovery": 0.35,
          "range": 0,
          "damage": 0,
          "stun": 0.3,
          "push": 45,
          "cooldown": 2.1,
          "effect": "roots",
          "projectile": {
            "kind": "trap",
            "anchor": "enemy",
            "maxRange": 290,
            "unique": true,
            "vx": 0,
            "y": 10,
            "radius": 42,
            "damage": 84,
            "stun": 0.26,
            "root": 0.72,
            "push": 12,
            "life": 2.7,
            "delay": 0.5
          },
          "animation": {
            "pose": "caua-special1",
            "limb": "both",
            "path": "Raiz Acordada",
            "prop": "root-branch",
            "effect": "roots",
            "storyProp": "root-branch"
          },
          "storyProp": "root-branch",
          "storyMotion": "plant"
        },
        {
          "id": "caua-rastro",
          "name": "Rastro ao Contrário",
          "description": "Desliza para trás olhando o rival e solta um rastro baixo de brasa no sentido oposto ao recuo. O rastro lento dá um contato; Cauã continua vulnerável durante a saída.",
          "type": "retreat",
          "startup": 0.1,
          "active": 0.18,
          "recovery": 0.3,
          "range": 0,
          "damage": 0,
          "stun": 0.3,
          "push": 45,
          "cooldown": 1.9,
          "effect": "smoke",
          "move": -300,
          "projectile": {
            "kind": "thorn",
            "y": 36,
            "vx": 210,
            "radius": 20,
            "damage": 78,
            "stun": 0.25,
            "push": 25,
            "life": 1.5,
            "delay": 0.18
          },
          "animation": {
            "pose": "caua-special2",
            "limb": "rear",
            "path": "Rastro ao Contrário",
            "prop": "root-branch",
            "effect": "smoke",
            "storyProp": "root-branch"
          },
          "storyProp": "root-branch",
          "storyMotion": "withdraw"
        }
      ],
      "combos": [
        {
          "id": "caua-cipo",
          "name": "Nó de Cipó",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "A última batida prende os pés brevemente para ajudar a preparar o terreno.",
          "bonus": {
            "damage": 8,
            "root": 0.2
          }
        },
        {
          "id": "caua-caminho",
          "name": "Caminho Sem Volta",
          "sequence": [
            "light",
            "kick",
            "special0"
          ],
          "description": "A trilha muda o lado da pressão e recompensa três acertos confirmados.",
          "bonus": {
            "damage": 13,
            "root": 0.24
          }
        }
      ],
      "attackStyle": "roots",
      "defenseName": "Casca Guardiã",
      "finisher": {
        "name": "O Caminho Te Esqueceu",
        "line": "A mata fecha o rastro que você abriu.",
        "kind": "roots"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.061,
          "active": 0.067,
          "recovery": 0.155
        },
        "heavy": {
          "startup": 0.171,
          "active": 0.087,
          "recovery": 0.236
        },
        "kick": {
          "startup": 0.098,
          "active": 0.116,
          "recovery": 0.217
        }
      },
      "super": {
        "id": "caua-super",
        "name": "Coração da Mata Inteira",
        "description": "Energia completa: Cauã Rubro reúne sua técnica em uma sequência cinematográfica. A abertura frontal pode ser defendida.",
        "line": "A mata fecha o rastro que você abriu.",
        "kind": "caua",
        "type": "melee",
        "effect": "roots",
        "meterCost": 100,
        "startup": 0.3,
        "active": 0.2,
        "recovery": 0.68,
        "range": 240,
        "reachY": 195,
        "damage": 248,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Coração da Mata Inteira",
          "palette": [
            "#548047",
            "#ff793f"
          ],
          "style": "spectral"
        },
        "storyProp": "root-branch"
      },
      "entrance": {
        "name": "Pegadas invertidas aparecem antes de Cauã entre as folhas.",
        "line": "Quem abre trilha também deve saber voltar.",
        "style": "spectral",
        "gesture": "Cauã surge entre raízes e recolhe um ramo quebrado.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Pegadas invertidas aparecem antes de Cauã entre as folhas.",
            "pose": "arrive",
            "prop": "root-branch",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Cauã surge entre raízes e recolhe um ramo quebrado.",
            "pose": "warmup",
            "prop": "root-branch",
            "effect": "none"
          },
          {
            "at": 2.25,
            "action": "Vira os pés, fecha o ramo e deixa a mata se aquietar.",
            "pose": "signature",
            "prop": "root-branch",
            "effect": "roots"
          },
          {
            "at": 3.25,
            "action": "Quem abre trilha também deve saber voltar.",
            "pose": "ready",
            "prop": "root-branch",
            "effect": "none"
          }
        ]
      },
      "visual": {
        "body": "athletic",
        "silhouette": "Pequeno guardião de pés voltados para trás, cabelo em chamas e marcas de casca no corpo. Faixas de fibras e folhas formam uma roupa inventada. Seu cabelo funciona como a principal leitura de direção.",
        "outfit": "Pequeno guardião de pés voltados para trás, cabelo em chamas e marcas de casca no corpo. Faixas de fibras e folhas formam uma roupa inventada. Seu cabelo funciona como a principal leitura de direção.",
        "prop": "root-branch",
        "stance": "Ramo Curto",
        "palette": [
          "#548047",
          "#ff793f",
          "#ac6944",
          "#f16a32"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Cauã devolve o ramo ao chão e os brotos crescem à sua volta.",
        "effect": "roots",
        "line": "A mata fecha o rastro que você abriu."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Cauã ajoelha e as raízes o sustentam sem engolir o corpo.",
        "effect": "none"
      },
      "animation": {
        "stance": "Trocas de direção, falsas partidas e raízes que limitam o avanço. Exige preparação para produzir vantagem; é frágil quando o rival consegue pressioná-lo de perto.",
        "light": {
          "limb": "lead",
          "path": "Ramo Curto",
          "prop": "root-branch"
        },
        "heavy": {
          "limb": "rear",
          "path": "Nó de Raiz",
          "prop": "root-branch"
        },
        "kick": {
          "limb": "leg",
          "path": "Passo Invertido",
          "prop": "root-branch"
        },
        "guard": {
          "prop": "root-branch",
          "pose": "caua-guard"
        }
      }
    },
    "nara": {
      "movement": {
        "walk": 0.98,
        "backwalk": 0.7,
        "jump": 0.98
      },
      "normalScale": {
        "damage": 0.96,
        "speed": 1,
        "range": 1.07
      },
      "normalNames": {
        "light": "Toque de Remanso",
        "heavy": "Palma da Maré",
        "kick": "Arco da Corrente"
      },
      "specials": [
        {
          "id": "nara-espelho",
          "name": "Espelho do Rio",
          "description": "Dispara uma onda de água em linha reta. A trajetória visível permite defender ou saltar.",
          "type": "projectile",
          "startup": 0.12,
          "active": 0.06,
          "recovery": 0.29,
          "range": 0,
          "damage": 0,
          "stun": 0.3,
          "push": 45,
          "cooldown": 1.55,
          "effect": "wave",
          "projectile": {
            "kind": "wave",
            "y": 48,
            "vx": 365,
            "radius": 26,
            "damage": 105,
            "push": 80,
            "stun": 0.28,
            "life": 2.5,
            "delay": 0.12
          },
          "animation": {
            "pose": "nara-special0",
            "limb": "lead",
            "path": "Espelho do Rio",
            "prop": "water-ribbon",
            "effect": "wave",
            "storyProp": "water-ribbon"
          },
          "storyProp": "water-ribbon",
          "storyMotion": "release"
        },
        {
          "id": "nara-abraco",
          "name": "Abraço da Correnteza",
          "description": "Uma espiral de água próxima lança o rival; alcança saltos baixos e deixa Nara exposta ao errar.",
          "type": "launcher",
          "startup": 0.13,
          "active": 0.16,
          "recovery": 0.39,
          "range": 166,
          "damage": 108,
          "stun": 0.36,
          "push": 30,
          "cooldown": 1.9,
          "effect": "wave",
          "reachY": 195,
          "launch": 285,
          "animation": {
            "pose": "nara-special1",
            "limb": "both",
            "path": "Abraço da Correnteza",
            "prop": "water-ribbon",
            "effect": "wave",
            "storyProp": "water-ribbon"
          },
          "storyProp": "water-ribbon",
          "storyMotion": "rise"
        },
        {
          "id": "nara-bolha",
          "name": "Bolha de Remanso",
          "description": "Uma bolha lenta avança e imobiliza o deslocamento por pouco tempo ao acertar. Só uma bolha fica ativa por vez.",
          "type": "projectile",
          "startup": 0.25,
          "active": 0.06,
          "recovery": 0.36,
          "range": 0,
          "damage": 0,
          "stun": 0.3,
          "push": 45,
          "cooldown": 2.15,
          "effect": "wave",
          "projectile": {
            "kind": "bubble",
            "unique": true,
            "y": 61,
            "vx": 175,
            "radius": 33,
            "damage": 72,
            "push": 14,
            "stun": 0.3,
            "root": 0.62,
            "life": 3.4,
            "delay": 0.25
          },
          "animation": {
            "pose": "nara-special2",
            "limb": "rear",
            "path": "Bolha de Remanso",
            "prop": "water-ribbon",
            "effect": "wave",
            "storyProp": "water-ribbon"
          },
          "storyProp": "water-ribbon",
          "storyMotion": "release"
        }
      ],
      "combos": [
        {
          "id": "nara-encontro",
          "name": "Encontro das Águas",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "A corrente une os três golpes e empurra o rival para a faixa das ondas.",
          "bonus": {
            "damage": 10,
            "push": 28
          }
        },
        {
          "id": "nara-mare",
          "name": "Maré Crescente",
          "sequence": [
            "heavy",
            "kick",
            "special1"
          ],
          "description": "A espiral de água termina a sequência com um lançamento mais alto.",
          "bonus": {
            "damage": 10,
            "launch": 315
          }
        }
      ],
      "attackStyle": "water",
      "defenseName": "Manto de Água",
      "finisher": {
        "name": "Nome no Fundo",
        "line": "O rio devolveu o que você tomou.",
        "kind": "water"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.087,
          "active": 0.083,
          "recovery": 0.176
        },
        "heavy": {
          "startup": 0.196,
          "active": 0.109,
          "recovery": 0.281
        },
        "kick": {
          "startup": 0.133,
          "active": 0.113,
          "recovery": 0.254
        }
      },
      "super": {
        "id": "nara-super",
        "name": "Nome de Todas as Águas",
        "description": "Energia completa: Nara do Fundo reúne sua técnica em uma sequência cinematográfica. A abertura frontal pode ser defendida.",
        "line": "O rio devolveu o que você tomou.",
        "kind": "nara",
        "type": "melee",
        "effect": "wave",
        "meterCost": 100,
        "startup": 0.3,
        "active": 0.2,
        "recovery": 0.68,
        "range": 260,
        "reachY": 195,
        "damage": 260,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Nome de Todas as Águas",
          "palette": [
            "#287d85",
            "#95e9d6"
          ],
          "style": "dance"
        },
        "storyProp": "water-ribbon"
      },
      "entrance": {
        "name": "Uma canoa atraca no fundo da margem; Nara desembarca.",
        "line": "O rio ouviu seu nome.",
        "style": "dance",
        "gesture": "Nara deixa o remo no cais e escorre a água dos dedos.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Uma canoa atraca no fundo da margem; Nara desembarca.",
            "pose": "arrive",
            "prop": "water-ribbon",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Nara deixa o remo no cais e escorre a água dos dedos.",
            "pose": "warmup",
            "prop": "water-ribbon",
            "effect": "none"
          },
          {
            "at": 2.25,
            "action": "Uma fita de água contorna o corpo e volta para o rio.",
            "pose": "signature",
            "prop": "water-ribbon",
            "effect": "wave"
          },
          {
            "at": 3.25,
            "action": "O rio ouviu seu nome.",
            "pose": "ready",
            "prop": "water-ribbon",
            "effect": "none"
          }
        ]
      },
      "visual": {
        "body": "athletic",
        "silhouette": "Cabelos longos e escuros, roupa verde-azulada com barras em ondas e escamas luminosas nos braços. Sua sombra assume forma aquática durante os especiais; a postura permanece serena e vertical.",
        "outfit": "Cabelos longos e escuros, roupa verde-azulada com barras em ondas e escamas luminosas nos braços. Sua sombra assume forma aquática durante os especiais; a postura permanece serena e vertical.",
        "prop": "water-ribbon",
        "stance": "Toque de Remanso",
        "palette": [
          "#287d85",
          "#95e9d6",
          "#a96d4f",
          "#202938"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Nara ergue uma pequena espiral que volta ao rio em silêncio.",
        "effect": "wave",
        "line": "O rio devolveu o que você tomou."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Nara encosta a mão no chão; a espiral de água se desfaz.",
        "effect": "none"
      },
      "animation": {
        "stance": "Mantém distância com água, ondas curtas e bolhas lentas. Combina trajetórias para conduzir o rival, mas precisa de espaço para preparar ataques e tem defesa física limitada.",
        "light": {
          "limb": "lead",
          "path": "Toque de Remanso",
          "prop": "water-ribbon"
        },
        "heavy": {
          "limb": "rear",
          "path": "Palma da Maré",
          "prop": "water-ribbon"
        },
        "kick": {
          "limb": "leg",
          "path": "Arco da Corrente",
          "prop": "water-ribbon"
        },
        "guard": {
          "prop": "water-ribbon",
          "pose": "nara-guard"
        }
      }
    },
    "tiao": {
      "movement": {
        "walk": 1.08,
        "backwalk": 0.78,
        "jump": 1.08
      },
      "normalScale": {
        "damage": 0.85,
        "speed": 1.15,
        "range": 0.92
      },
      "normalNames": {
        "light": "Peteleco do Atalho",
        "heavy": "Soco de Rajada",
        "kick": "Pé de Vento"
      },
      "specials": [
        {
          "id": "tiao-sumiu",
          "name": "Sumiu, Achou!",
          "description": "Surge no ar perto do rival e desce com uma pancada de vento que lança o alvo. A chegada tem preparação visível.",
          "type": "teleport",
          "startup": 0.16,
          "active": 0.2,
          "recovery": 0.32,
          "range": 120,
          "damage": 140,
          "stun": 0.43,
          "push": 70,
          "cooldown": 1.55,
          "effect": "spark",
          "reachY": 190,
          "launch": 260,
          "teleport": {
            "side": "front",
            "distance": 74,
            "height": 145,
            "vy": -250
          },
          "animation": {
            "pose": "tiao-special0",
            "limb": "lead",
            "path": "Sumiu, Achou!",
            "prop": "red-cap",
            "effect": "spark",
            "storyProp": "red-cap"
          },
          "storyProp": "red-cap",
          "storyMotion": "arrival"
        },
        {
          "id": "tiao-gorro",
          "name": "Gorro de Rajada",
          "description": "Lança uma rajada curta à altura do tronco; a distância de viagem é menor que a dos projéteis de Nara.",
          "type": "projectile",
          "startup": 0.11,
          "active": 0.06,
          "recovery": 0.27,
          "range": 0,
          "damage": 0,
          "stun": 0.3,
          "push": 45,
          "cooldown": 1.65,
          "effect": "spin",
          "projectile": {
            "kind": "wind",
            "y": 64,
            "vx": 390,
            "radius": 24,
            "damage": 89,
            "stun": 0.28,
            "push": 52,
            "life": 0.85,
            "delay": 0.11
          },
          "animation": {
            "pose": "tiao-special1",
            "limb": "both",
            "path": "Gorro de Rajada",
            "prop": "red-cap",
            "effect": "spin",
            "storyProp": "red-cap"
          },
          "storyProp": "red-cap",
          "storyMotion": "release"
        },
        {
          "id": "tiao-atalho",
          "name": "Atalho Torto",
          "description": "Gasta 15 de energia para recuar depressa e deixar uma rajada baixa. Sem energia, o comando não é executado.",
          "type": "retreat",
          "startup": 0.06,
          "active": 0.2,
          "recovery": 0.24,
          "range": 0,
          "damage": 0,
          "stun": 0.3,
          "push": 45,
          "cooldown": 1.6,
          "effect": "smoke",
          "move": -480,
          "meterCost": 15,
          "projectile": {
            "kind": "wind",
            "y": 28,
            "vx": 210,
            "radius": 19,
            "damage": 63,
            "stun": 0.23,
            "push": 35,
            "life": 0.95,
            "delay": 0.12
          },
          "animation": {
            "pose": "tiao-special2",
            "limb": "rear",
            "path": "Atalho Torto",
            "prop": "red-cap",
            "effect": "smoke",
            "storyProp": "red-cap"
          },
          "storyProp": "red-cap",
          "storyMotion": "withdraw"
        }
      ],
      "combos": [
        {
          "id": "tiao-tres",
          "name": "Três Passos, Um Pé",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Ritmo rápido de mãos e chute com pequeno reforço no fim.",
          "bonus": {
            "damage": 11,
            "push": 15
          }
        },
        {
          "id": "tiao-curva",
          "name": "Curva do Atalho",
          "sequence": [
            "light",
            "kick",
            "special0"
          ],
          "description": "Aparece por cima da sequência e acrescenta força ao lançamento.",
          "bonus": {
            "damage": 8,
            "launch": 290
          }
        }
      ],
      "attackStyle": "wind",
      "defenseName": "Vento de Esquiva",
      "finisher": {
        "name": "A Saída Era Ontem",
        "line": "Quem corre atrás de mim chega antes de sair.",
        "kind": "wind"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.058,
          "active": 0.069,
          "recovery": 0.134
        },
        "heavy": {
          "startup": 0.163,
          "active": 0.089,
          "recovery": 0.219
        },
        "kick": {
          "startup": 0.096,
          "active": 0.119,
          "recovery": 0.204
        }
      },
      "super": {
        "id": "tiao-super",
        "name": "Atalho do Fim do Mundo",
        "description": "Energia completa: Tião Redemoinho reúne sua técnica em uma sequência cinematográfica. A abertura frontal pode ser defendida.",
        "line": "Quem corre atrás de mim chega antes de sair.",
        "kind": "tiao",
        "type": "melee",
        "effect": "spark",
        "meterCost": 100,
        "startup": 0.3,
        "active": 0.2,
        "recovery": 0.68,
        "range": 230,
        "reachY": 195,
        "damage": 248,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Atalho do Fim do Mundo",
          "palette": [
            "#945034",
            "#ec493c"
          ],
          "style": "speed"
        },
        "storyProp": "red-cap"
      },
      "entrance": {
        "name": "Um gorro vermelho atravessa o vento antes de Tião.",
        "line": "Se me seguir, chega ontem.",
        "style": "speed",
        "gesture": "Tião alcança o gorro num salto e o prende na cabeça.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Um gorro vermelho atravessa o vento antes de Tião.",
            "pose": "arrive",
            "prop": "red-cap",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Tião alcança o gorro num salto e o prende na cabeça.",
            "pose": "warmup",
            "prop": "red-cap",
            "effect": "none"
          },
          {
            "at": 2.25,
            "action": "Faz uma volta curta de vento e para sobre um pé.",
            "pose": "signature",
            "prop": "red-cap",
            "effect": "spark"
          },
          {
            "at": 3.25,
            "action": "Se me seguir, chega ontem.",
            "pose": "ready",
            "prop": "red-cap",
            "effect": "none"
          }
        ]
      },
      "visual": {
        "body": "athletic",
        "silhouette": "Jovem negro de uma perna só, gorro vermelho comprido, colete e pulseiras de cobre. Equilibra-se com naturalidade; fitas de vento sustentam os deslocamentos e mantêm a silhueta clara.",
        "outfit": "Jovem negro de uma perna só, gorro vermelho comprido, colete e pulseiras de cobre. Equilibra-se com naturalidade; fitas de vento sustentam os deslocamentos e mantêm a silhueta clara.",
        "prop": "red-cap",
        "stance": "Peteleco do Atalho",
        "palette": [
          "#945034",
          "#ec493c",
          "#6e3d2a",
          "#242026"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Tião lança o gorro ao alto e o recolhe sem sair da base.",
        "effect": "spark",
        "line": "Quem corre atrás de mim chega antes de sair."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Tião se senta por um instante; o gorro pousa sobre seu joelho.",
        "effect": "none"
      },
      "animation": {
        "stance": "Saltos curtos, mudanças de lado e fintas de vento. Conquista oportunidades com movimento, mas seus ataques individuais causam pouco dano e teletransportes previsíveis podem ser punidos.",
        "light": {
          "limb": "lead",
          "path": "Peteleco do Atalho",
          "prop": "red-cap"
        },
        "heavy": {
          "limb": "rear",
          "path": "Soco de Rajada",
          "prop": "red-cap"
        },
        "kick": {
          "limb": "leg",
          "path": "Pé de Vento",
          "prop": "red-cap"
        },
        "guard": {
          "prop": "red-cap",
          "pose": "tiao-guard"
        }
      }
    },
    "breu": {
      "movement": {
        "walk": 0.98,
        "backwalk": 0.66,
        "jump": 0.92
      },
      "normalScale": {
        "damage": 1.03,
        "speed": 0.87,
        "range": 1.08
      },
      "normalNames": {
        "light": "Ponto Curto",
        "heavy": "Bainha Sombria",
        "kick": "Passo de Retalho"
      },
      "specials": [
        {
          "id": "breu-ponto",
          "name": "Ponto Cego",
          "description": "Arma um fio de sombra com atraso perto do rival, dentro do alcance. Só um fio fica ativo; o contato prende os pés.",
          "type": "trap",
          "startup": 0.18,
          "active": 0.06,
          "recovery": 0.31,
          "range": 0,
          "damage": 0,
          "stun": 0.3,
          "push": 45,
          "cooldown": 1.55,
          "effect": "trap",
          "projectile": {
            "kind": "trap",
            "anchor": "enemy",
            "maxRange": 310,
            "unique": true,
            "vx": 0,
            "y": 10,
            "radius": 45,
            "damage": 105,
            "root": 0.9,
            "stun": 0.28,
            "push": 55,
            "life": 3.1,
            "delay": 0.44
          },
          "animation": {
            "pose": "breu-special0",
            "limb": "lead",
            "path": "Ponto Cego",
            "prop": "shadow-thread",
            "effect": "trap",
            "storyProp": "shadow-thread"
          },
          "storyProp": "shadow-thread",
          "storyMotion": "plant"
        },
        {
          "id": "breu-hora",
          "name": "Hora de Dormir",
          "description": "Garras de sombra fecham um arco à frente, com alcance médio e preparação lenta.",
          "type": "melee",
          "startup": 0.27,
          "active": 0.2,
          "recovery": 0.37,
          "range": 184,
          "damage": 129,
          "stun": 0.39,
          "push": 62,
          "cooldown": 1.9,
          "effect": "beast",
          "reachY": 140,
          "animation": {
            "pose": "breu-special1",
            "limb": "both",
            "path": "Hora de Dormir",
            "prop": "shadow-thread",
            "effect": "beast",
            "storyProp": "shadow-thread"
          },
          "storyProp": "shadow-thread",
          "storyMotion": "strike"
        },
        {
          "id": "breu-retalho",
          "name": "Retalho Vivo",
          "description": "Um boneco de sombra avança como projétil lento, dá um contato e desaparece. Só um retalho fica ativo por vez.",
          "type": "projectile",
          "startup": 0.28,
          "active": 0.06,
          "recovery": 0.38,
          "range": 0,
          "damage": 0,
          "stun": 0.3,
          "push": 45,
          "cooldown": 2.1,
          "effect": "copy",
          "projectile": {
            "kind": "doll",
            "unique": true,
            "y": 32,
            "vx": 165,
            "radius": 27,
            "damage": 97,
            "stun": 0.34,
            "push": 48,
            "life": 3.2,
            "delay": 0.28
          },
          "animation": {
            "pose": "breu-special2",
            "limb": "rear",
            "path": "Retalho Vivo",
            "prop": "shadow-thread",
            "effect": "copy",
            "storyProp": "shadow-thread"
          },
          "storyProp": "shadow-thread",
          "storyMotion": "release"
        }
      ],
      "combos": [
        {
          "id": "breu-pesponto",
          "name": "Pesponto de Pesadelo",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Costura três contatos e acrescenta uma curta prisão ao golpe final.",
          "bonus": {
            "damage": 9,
            "root": 0.19
          }
        },
        {
          "id": "breu-fecho",
          "name": "Fecho da Meia-Noite",
          "sequence": [
            "light",
            "kick",
            "special1"
          ],
          "description": "As garras fecham a sequência e afastam o alvo para preparar o próximo fio.",
          "bonus": {
            "damage": 13,
            "push": 30
          }
        }
      ],
      "attackStyle": "shadow",
      "defenseName": "Véu de Retalhos",
      "finisher": {
        "name": "Último Ponto",
        "line": "Agora durma. Eu cuido da bainha.",
        "kind": "shadow"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.103,
          "active": 0.096,
          "recovery": 0.212
        },
        "heavy": {
          "startup": 0.239,
          "active": 0.119,
          "recovery": 0.353
        },
        "kick": {
          "startup": 0.156,
          "active": 0.121,
          "recovery": 0.286
        }
      },
      "super": {
        "id": "breu-super",
        "name": "A Costura do Silêncio",
        "description": "Energia completa: Dona Breu reúne sua técnica em uma sequência cinematográfica. A abertura frontal pode ser defendida.",
        "line": "Agora durma. Eu cuido da bainha.",
        "kind": "breu",
        "type": "melee",
        "effect": "trap",
        "meterCost": 100,
        "startup": 0.3,
        "active": 0.2,
        "recovery": 0.68,
        "range": 260,
        "reachY": 195,
        "damage": 260,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "A Costura do Silêncio",
          "palette": [
            "#735187",
            "#d2a4ea"
          ],
          "style": "spectral"
        },
        "storyProp": "shadow-thread"
      },
      "entrance": {
        "name": "Uma linha escura costura o ar junto à lateral.",
        "line": "Sempre falta o último ponto.",
        "style": "spectral",
        "gesture": "Breu puxa o fio e atravessa o retalho que ele abriu.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Uma linha escura costura o ar junto à lateral.",
            "pose": "arrive",
            "prop": "shadow-thread",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Breu puxa o fio e atravessa o retalho que ele abriu.",
            "pose": "warmup",
            "prop": "shadow-thread",
            "effect": "none"
          },
          {
            "at": 2.25,
            "action": "Alisa o casaco e recolhe a agulha numa sombra.",
            "pose": "signature",
            "prop": "shadow-thread",
            "effect": "trap"
          },
          {
            "at": 3.25,
            "action": "Sempre falta o último ponto.",
            "pose": "ready",
            "prop": "shadow-thread",
            "effect": "none"
          }
        ]
      },
      "visual": {
        "body": "athletic",
        "silhouette": "Senhora alta e curvada, vestido roxo de remendos discretos, óculos redondos e cabelo preso. Uma sombra alongada move-se por conta própria e a tesoura de costura surge apenas como ferramenta cênica.",
        "outfit": "Senhora alta e curvada, vestido roxo de remendos discretos, óculos redondos e cabelo preso. Uma sombra alongada move-se por conta própria e a tesoura de costura surge apenas como ferramenta cênica.",
        "prop": "shadow-thread",
        "stance": "Ponto Curto",
        "palette": [
          "#735187",
          "#d2a4ea",
          "#b48769",
          "#c8c1b3"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Breu fecha um pequeno retalho e o guarda dentro do casaco.",
        "effect": "trap",
        "line": "Agora durma. Eu cuido da bainha."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Breu recolhe as mãos, deixando os fios soltos caírem no chão.",
        "effect": "none"
      },
      "animation": {
        "stance": "Instala fios, convoca pequenos bonecos e força decisões com ataques atrasados. É perigosa com tempo para preparar o terreno; o rival pode interromper as invocações ao pressionar de perto.",
        "light": {
          "limb": "lead",
          "path": "Ponto Curto",
          "prop": "shadow-thread"
        },
        "heavy": {
          "limb": "rear",
          "path": "Bainha Sombria",
          "prop": "shadow-thread"
        },
        "kick": {
          "limb": "leg",
          "path": "Passo de Retalho",
          "prop": "shadow-thread"
        },
        "guard": {
          "prop": "shadow-thread",
          "pose": "breu-guard"
        }
      }
    },
    "damiao": {
      "movement": {
        "walk": 0.94,
        "backwalk": 0.58,
        "jump": 0.84
      },
      "normalScale": {
        "damage": 1.15,
        "speed": 0.85,
        "range": 0.98
      },
      "normalNames": {
        "light": "Punho de Rebite",
        "heavy": "Martelo da Forja",
        "kick": "Bota de Bigorna"
      },
      "specials": [
        {
          "id": "damiao-lua",
          "name": "Sétima Lua",
          "description": "A fúria lança uma investida e mantém armadura temporária. Damião ainda sofre dano e pode ser agarrado.",
          "type": "dash",
          "startup": 0.13,
          "active": 0.34,
          "recovery": 0.32,
          "range": 102,
          "damage": 95,
          "stun": 0.3,
          "push": 85,
          "cooldown": 4,
          "effect": "beast",
          "move": 265,
          "armor": 3.5,
          "animation": {
            "pose": "damiao-special0",
            "limb": "lead",
            "path": "Sétima Lua",
            "prop": "forge-hammer",
            "effect": "beast",
            "storyProp": "forge-hammer"
          },
          "storyProp": "forge-hammer",
          "storyMotion": "travel"
        },
        {
          "id": "damiao-abraco",
          "name": "Abraço da Bigorna",
          "description": "Agarrão próximo de dano alto. Falha contra alvos no ar ou agachados e tem recuperação longa.",
          "type": "throw",
          "startup": 0.19,
          "active": 0.08,
          "recovery": 0.47,
          "range": 85,
          "damage": 175,
          "stun": 0.52,
          "push": 90,
          "cooldown": 2.7,
          "effect": "beast",
          "animation": {
            "pose": "damiao-special1",
            "limb": "both",
            "path": "Abraço da Bigorna",
            "prop": "forge-hammer",
            "effect": "beast",
            "storyProp": "forge-hammer"
          },
          "storyProp": "forge-hammer",
          "storyMotion": "close"
        },
        {
          "id": "damiao-uivo",
          "name": "Uivo da Forja",
          "description": "Um uivo de curto alcance empurra com força. A preparação longa permite interromper antes da explosão.",
          "type": "melee",
          "startup": 0.29,
          "active": 0.18,
          "recovery": 0.42,
          "range": 180,
          "damage": 118,
          "stun": 0.35,
          "push": 165,
          "cooldown": 2.1,
          "effect": "wave",
          "reachY": 155,
          "animation": {
            "pose": "damiao-special2",
            "limb": "rear",
            "path": "Uivo da Forja",
            "prop": "forge-hammer",
            "effect": "wave",
            "storyProp": "forge-hammer"
          },
          "storyProp": "forge-hammer",
          "storyMotion": "strike"
        }
      ],
      "combos": [
        {
          "id": "damiao-ferro",
          "name": "Ferro em Três Tempos",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "O martelo e a bota reforçam o dano de encerramento.",
          "bonus": {
            "damage": 16,
            "push": 24
          }
        },
        {
          "id": "damiao-fornalha",
          "name": "Fornalha Aberta",
          "sequence": [
            "heavy",
            "kick",
            "special0"
          ],
          "description": "A investida de Sétima Lua encerra a sequência com força adicional.",
          "bonus": {
            "damage": 15,
            "push": 30
          }
        }
      ],
      "attackStyle": "beast",
      "defenseName": "Braço da Bigorna",
      "finisher": {
        "name": "A Bigorna da Sétima Lua",
        "line": "Meu nome ainda é Damião.",
        "kind": "beast"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.109,
          "active": 0.088,
          "recovery": 0.223
        },
        "heavy": {
          "startup": 0.244,
          "active": 0.112,
          "recovery": 0.371
        },
        "kick": {
          "startup": 0.161,
          "active": 0.131,
          "recovery": 0.302
        }
      },
      "super": {
        "id": "damiao-super",
        "name": "Lua da Sétima Bigorna",
        "description": "Energia completa: Damião Sete-Luas reúne sua técnica em uma sequência cinematográfica. A abertura frontal pode ser defendida.",
        "line": "Meu nome ainda é Damião.",
        "kind": "damiao",
        "type": "melee",
        "effect": "beast",
        "meterCost": 100,
        "startup": 0.3,
        "active": 0.2,
        "recovery": 0.68,
        "range": 230,
        "reachY": 195,
        "damage": 284,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Lua da Sétima Bigorna",
          "palette": [
            "#74513e",
            "#d5cda8"
          ],
          "style": "power"
        },
        "storyProp": "forge-hammer"
      },
      "entrance": {
        "name": "Damião deixa um martelo de forja na lateral da arena.",
        "line": "Meu nome ainda é Damião.",
        "style": "power",
        "gesture": "Afrouxa a correia do avental e respira até conter os ombros.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Damião deixa um martelo de forja na lateral da arena.",
            "pose": "arrive",
            "prop": "forge-hammer",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Afrouxa a correia do avental e respira até conter os ombros.",
            "pose": "warmup",
            "prop": "forge-hammer",
            "effect": "none"
          },
          {
            "at": 2.25,
            "action": "A sombra cresce em fera atrás dele e volta ao tamanho humano.",
            "pose": "signature",
            "prop": "forge-hammer",
            "effect": "beast"
          },
          {
            "at": 3.25,
            "action": "Meu nome ainda é Damião.",
            "pose": "ready",
            "prop": "forge-hammer",
            "effect": "none"
          }
        ]
      },
      "visual": {
        "body": "tank",
        "silhouette": "Homem grande, avental de couro, camisa de mangas arregaçadas e cabelos grisalhos. Um braço parcialmente transformado exibe pelo cinza, com mão humana ainda visível; as unhas se alongam na fúria.",
        "outfit": "Homem grande, avental de couro, camisa de mangas arregaçadas e cabelos grisalhos. Um braço parcialmente transformado exibe pelo cinza, com mão humana ainda visível; as unhas se alongam na fúria.",
        "prop": "forge-hammer",
        "stance": "Punho de Rebite",
        "palette": [
          "#74513e",
          "#d5cda8",
          "#b37a54",
          "#9c9d98"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Damião domina a sombra com uma mão e recupera a respiração.",
        "effect": "beast",
        "line": "Meu nome ainda é Damião."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Damião cai de um joelho e segura o próprio braço para conter a fera.",
        "effect": "none"
      },
      "animation": {
        "stance": "Socos pesados e agarrões próximos, com transformação temporária planejada. Tem grande dano e defesa, mas precisa vencer a distância; ataques longos podem mantê-lo afastado.",
        "light": {
          "limb": "lead",
          "path": "Punho de Rebite",
          "prop": "forge-hammer"
        },
        "heavy": {
          "limb": "rear",
          "path": "Martelo da Forja",
          "prop": "forge-hammer"
        },
        "kick": {
          "limb": "leg",
          "path": "Bota de Bigorna",
          "prop": "forge-hammer"
        },
        "guard": {
          "prop": "forge-hammer",
          "pose": "damiao-guard"
        }
      }
    },
    "lia": {
      "movement": {
        "walk": 1.06,
        "backwalk": 0.76,
        "jump": 1.04
      },
      "normalScale": {
        "damage": 0.88,
        "speed": 1.14,
        "range": 0.96
      },
      "normalNames": {
        "light": "Toque de Guidão",
        "heavy": "Cotovelo do Corredor",
        "kick": "Chute Expresso"
      },
      "specials": [
        {
          "id": "lia-entrega",
          "name": "Última Entrega",
          "description": "Arrancada espectral muito veloz que pode atravessar o rival. A proteção breve cobre a partida, mas o fim do trajeto é punível.",
          "type": "dash",
          "startup": 0.06,
          "active": 0.29,
          "recovery": 0.29,
          "range": 88,
          "damage": 115,
          "stun": 0.33,
          "push": 45,
          "cooldown": 1.55,
          "effect": "dash",
          "move": 790,
          "pass": true,
          "invulnerable": 0.29,
          "animation": {
            "pose": "lia-special0",
            "limb": "lead",
            "path": "Última Entrega",
            "prop": "delivery-bag",
            "effect": "dash",
            "storyProp": "delivery-bag"
          },
          "storyProp": "delivery-bag",
          "storyMotion": "travel"
        },
        {
          "id": "lia-corredor",
          "name": "Corredor Azul",
          "description": "Ombrada de avanço mais curta e controlada, sem invulnerabilidade e sem atravessar o oponente.",
          "type": "dash",
          "startup": 0.12,
          "active": 0.2,
          "recovery": 0.28,
          "range": 118,
          "damage": 94,
          "stun": 0.31,
          "push": 52,
          "cooldown": 1.7,
          "effect": "dash",
          "move": 420,
          "animation": {
            "pose": "lia-special1",
            "limb": "both",
            "path": "Corredor Azul",
            "prop": "delivery-bag",
            "effect": "dash",
            "storyProp": "delivery-bag"
          },
          "storyProp": "delivery-bag",
          "storyMotion": "travel"
        },
        {
          "id": "lia-capacete",
          "name": "Capacete de Volta",
          "description": "Uma pancada próxima acompanha o recuo. O alcance curto exige acertar a saída da distância do rival.",
          "type": "retreat",
          "startup": 0.055,
          "active": 0.14,
          "recovery": 0.3,
          "range": 134,
          "damage": 96,
          "stun": 0.29,
          "push": 55,
          "cooldown": 1.8,
          "effect": "spark",
          "move": -190,
          "animation": {
            "pose": "lia-special2",
            "limb": "rear",
            "path": "Capacete de Volta",
            "prop": "delivery-bag",
            "effect": "spark",
            "storyProp": "delivery-bag"
          },
          "storyProp": "delivery-bag",
          "storyMotion": "withdraw"
        }
      ],
      "combos": [
        {
          "id": "lia-prioridade",
          "name": "Faixa de Prioridade",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Três acertos rápidos dão mais impulso ao chute final.",
          "bonus": {
            "damage": 10,
            "push": 25
          }
        },
        {
          "id": "lia-prazo",
          "name": "Prazo Fantasma",
          "sequence": [
            "light",
            "kick",
            "special1"
          ],
          "description": "A ombrada fecha o corredor com dano adicional moderado.",
          "bonus": {
            "damage": 14,
            "push": 22
          }
        }
      ],
      "attackStyle": "ghost",
      "defenseName": "Faixa Espectral",
      "finisher": {
        "name": "Entrega Concluída",
        "line": "Assina aqui. Eu tenho outra vida pra encontrar.",
        "kind": "ghost"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.062,
          "active": 0.074,
          "recovery": 0.146
        },
        "heavy": {
          "startup": 0.168,
          "active": 0.093,
          "recovery": 0.221
        },
        "kick": {
          "startup": 0.102,
          "active": 0.106,
          "recovery": 0.209
        }
      },
      "super": {
        "id": "lia-super",
        "name": "Todas as Ruas do Regresso",
        "description": "Energia completa: Lia do Viaduto reúne sua técnica em uma sequência cinematográfica. A abertura frontal pode ser defendida.",
        "line": "Assina aqui. Eu tenho outra vida pra encontrar.",
        "kind": "lia",
        "type": "melee",
        "effect": "dash",
        "meterCost": 100,
        "startup": 0.3,
        "active": 0.2,
        "recovery": 0.68,
        "range": 240,
        "reachY": 195,
        "damage": 248,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Todas as Ruas do Regresso",
          "palette": [
            "#315e73",
            "#82deef"
          ],
          "style": "speed"
        },
        "storyProp": "delivery-bag"
      },
      "entrance": {
        "name": "Uma bicicleta de tamanho adulto para ao fundo, fora da faixa.",
        "line": "A entrega tem destinatário.",
        "style": "speed",
        "gesture": "Lia desmonta, fecha a bolsa e confere o endereço.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Uma bicicleta de tamanho adulto para ao fundo, fora da faixa.",
            "pose": "arrive",
            "prop": "delivery-bag",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Lia desmonta, fecha a bolsa e confere o endereço.",
            "pose": "warmup",
            "prop": "delivery-bag",
            "effect": "none"
          },
          {
            "at": 2.25,
            "action": "A bicicleta e o envelope deixam um rastro espectral breve.",
            "pose": "signature",
            "prop": "delivery-bag",
            "effect": "dash"
          },
          {
            "at": 3.25,
            "action": "A entrega tem destinatário.",
            "pose": "ready",
            "prop": "delivery-bag",
            "effect": "none"
          }
        ]
      },
      "visual": {
        "body": "athletic",
        "silhouette": "Jaqueta refletiva, capacete rachado e mochila de entregas com névoa azul escapando pelo zíper. Tênis gastos e faixas luminosas nas mangas ajudam a ler suas arrancadas; nenhuma marca comercial aparece.",
        "outfit": "Jaqueta refletiva, capacete rachado e mochila de entregas com névoa azul escapando pelo zíper. Tênis gastos e faixas luminosas nas mangas ajudam a ler suas arrancadas; nenhuma marca comercial aparece.",
        "prop": "delivery-bag",
        "stance": "Toque de Guidão",
        "palette": [
          "#315e73",
          "#82deef",
          "#bb8568",
          "#352a3c"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Lia assina o comprovante e o levanta na direção da saída.",
        "effect": "dash",
        "line": "Assina aqui. Eu tenho outra vida pra encontrar."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Lia apoia a bolsa no chão e protege o envelope com as duas mãos.",
        "effect": "none"
      },
      "animation": {
        "stance": "Arrancadas, sequências curtas e avanços espectrais. Encosta depressa, mas tem pouco dano por golpe e recuperação arriscada ao atravessar o adversário sem acertar.",
        "light": {
          "limb": "lead",
          "path": "Toque de Guidão",
          "prop": "delivery-bag"
        },
        "heavy": {
          "limb": "rear",
          "path": "Cotovelo do Corredor",
          "prop": "delivery-bag"
        },
        "kick": {
          "limb": "leg",
          "path": "Chute Expresso",
          "prop": "delivery-bag"
        },
        "guard": {
          "prop": "delivery-bag",
          "pose": "lia-guard"
        }
      }
    },
    "iris": {
      "movement": {
        "walk": 0.94,
        "backwalk": 0.6,
        "jump": 0.88
      },
      "normalScale": {
        "damage": 1.1,
        "speed": 0.86,
        "range": 1.1
      },
      "normalNames": {
        "light": "Rebite Rápido",
        "heavy": "Marreta Mecânica",
        "kick": "Bota de Sucata"
      },
      "specials": [
        {
          "id": "iris-pistao",
          "name": "Pistão de Sucata",
          "description": "Um pistão de alcance muito longo dispara após preparação demorada. O brilho anuncia o ataque; não exige manter botão pressionado.",
          "type": "melee",
          "startup": 0.46,
          "active": 0.1,
          "recovery": 0.38,
          "range": 430,
          "damage": 165,
          "stun": 0.43,
          "push": 135,
          "cooldown": 2.7,
          "effect": "beam",
          "animation": {
            "pose": "iris-special0",
            "limb": "lead",
            "path": "Pistão de Sucata",
            "prop": "scrap-gauntlet",
            "effect": "beam",
            "storyProp": "scrap-gauntlet"
          },
          "storyProp": "scrap-gauntlet",
          "storyMotion": "strike"
        },
        {
          "id": "iris-prensa",
          "name": "Prensa Hidráulica",
          "description": "As manoplas agarram o alvo próximo e o comprimem. O intervalo de uso e a recuperação limitam a repetição.",
          "type": "throw",
          "startup": 0.2,
          "active": 0.08,
          "recovery": 0.48,
          "range": 86,
          "damage": 168,
          "stun": 0.49,
          "push": 72,
          "cooldown": 2.5,
          "effect": "beam",
          "animation": {
            "pose": "iris-special1",
            "limb": "both",
            "path": "Prensa Hidráulica",
            "prop": "scrap-gauntlet",
            "effect": "beam",
            "storyProp": "scrap-gauntlet"
          },
          "storyProp": "scrap-gauntlet",
          "storyMotion": "close"
        },
        {
          "id": "iris-vapor",
          "name": "Sangria de Vapor",
          "description": "Uma descarga de vapor próxima afasta o rival. Há preparação e recuperação longa, sem proteção automática.",
          "type": "melee",
          "startup": 0.24,
          "active": 0.18,
          "recovery": 0.43,
          "range": 165,
          "damage": 103,
          "stun": 0.32,
          "push": 160,
          "cooldown": 2.05,
          "effect": "smoke",
          "reachY": 155,
          "animation": {
            "pose": "iris-special2",
            "limb": "rear",
            "path": "Sangria de Vapor",
            "prop": "scrap-gauntlet",
            "effect": "smoke",
            "storyProp": "scrap-gauntlet"
          },
          "storyProp": "scrap-gauntlet",
          "storyMotion": "strike"
        }
      ],
      "combos": [
        {
          "id": "iris-rebitagem",
          "name": "Rebitagem Completa",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "A sequência mecânica amplia o impacto do último golpe.",
          "bonus": {
            "damage": 16,
            "push": 22
          }
        },
        {
          "id": "iris-pressao",
          "name": "Pressão Máxima",
          "sequence": [
            "light",
            "kick",
            "special0"
          ],
          "description": "Conclui a sequência com o pistão, mantendo a longa preparação do especial.",
          "bonus": {
            "damage": 14,
            "push": 32
          }
        }
      ],
      "attackStyle": "steam",
      "defenseName": "Guarda de Pistão",
      "finisher": {
        "name": "Prensa de Corpo Fechado",
        "line": "Sucata ainda sabe dar a volta por cima.",
        "kind": "steam"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.111,
          "active": 0.102,
          "recovery": 0.231
        },
        "heavy": {
          "startup": 0.252,
          "active": 0.124,
          "recovery": 0.389
        },
        "kick": {
          "startup": 0.169,
          "active": 0.118,
          "recovery": 0.312
        }
      },
      "super": {
        "id": "iris-super",
        "name": "O Motor dos que Ficam",
        "description": "Energia completa: Íris Ferrugem reúne sua técnica em uma sequência cinematográfica. A abertura frontal pode ser defendida.",
        "line": "Sucata ainda sabe dar a volta por cima.",
        "kind": "iris",
        "type": "melee",
        "effect": "beam",
        "meterCost": 100,
        "startup": 0.3,
        "active": 0.2,
        "recovery": 0.68,
        "range": 260,
        "reachY": 195,
        "damage": 272,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "O Motor dos que Ficam",
          "palette": [
            "#cf743d",
            "#79c6bc"
          ],
          "style": "machine"
        },
        "storyProp": "scrap-gauntlet"
      },
      "entrance": {
        "name": "Iris chega carregando uma peça de motor sob um braço.",
        "line": "Sucata ainda dá a volta por cima.",
        "style": "machine",
        "gesture": "Coloca a peça na lateral e prende a manopla ao pulso.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Iris chega carregando uma peça de motor sob um braço.",
            "pose": "arrive",
            "prop": "scrap-gauntlet",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Coloca a peça na lateral e prende a manopla ao pulso.",
            "pose": "warmup",
            "prop": "scrap-gauntlet",
            "effect": "none"
          },
          {
            "at": 2.25,
            "action": "Um pistão testa dois golpes curtos e solta vapor entre as placas.",
            "pose": "signature",
            "prop": "scrap-gauntlet",
            "effect": "beam"
          },
          {
            "at": 3.25,
            "action": "Sucata ainda dá a volta por cima.",
            "pose": "ready",
            "prop": "scrap-gauntlet",
            "effect": "none"
          }
        ]
      },
      "visual": {
        "body": "tank",
        "silhouette": "Macacão laranja, óculos de proteção e enormes luvas mecânicas feitas de peças incompatíveis. Cabelos presos, botas reforçadas e tubos de resfriamento desenham uma silhueta pesada e assimétrica.",
        "outfit": "Macacão laranja, óculos de proteção e enormes luvas mecânicas feitas de peças incompatíveis. Cabelos presos, botas reforçadas e tubos de resfriamento desenham uma silhueta pesada e assimétrica.",
        "prop": "scrap-gauntlet",
        "stance": "Rebite Rápido",
        "palette": [
          "#cf743d",
          "#79c6bc",
          "#945c40",
          "#342930"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Iris destrava a luva e bate na placa que ainda resiste.",
        "effect": "beam",
        "line": "Sucata ainda sabe dar a volta por cima."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Iris abre uma válvula para não deixar o motor ferir ninguém.",
        "effect": "none"
      },
      "animation": {
        "stance": "Manoplas mecânicas combinam um pistão de alcance longo, um agarrão de pressão e uma descarga curta de vapor. Os golpes têm preparação fixa e recuperação longa: Íris precisa medir a distância antes de soltar a potência e sofre contra rivais que chegam durante as pausas.",
        "light": {
          "limb": "lead",
          "path": "Rebite Rápido",
          "prop": "scrap-gauntlet"
        },
        "heavy": {
          "limb": "rear",
          "path": "Marreta Mecânica",
          "prop": "scrap-gauntlet"
        },
        "kick": {
          "limb": "leg",
          "path": "Bota de Sucata",
          "prop": "scrap-gauntlet"
        },
        "guard": {
          "prop": "scrap-gauntlet",
          "pose": "iris-guard"
        }
      }
    },
    "rosa": {
      "movement": {
        "walk": 1,
        "backwalk": 0.7,
        "jump": 0.98
      },
      "normalScale": {
        "damage": 1,
        "speed": 0.98,
        "range": 1.08
      },
      "normalNames": {
        "light": "Palma da Cisterna",
        "heavy": "Punho de Mandacaru",
        "kick": "Bota da Caatinga"
      },
      "specials": [
        {
          "id": "rosa-flor",
          "name": "Flor da Seca",
          "description": "Dispara três espinhos em alturas diferentes e pequenos intervalos. Cada espinho pode acertar uma vez.",
          "type": "projectile",
          "startup": 0.1,
          "active": 0.25,
          "recovery": 0.34,
          "range": 0,
          "damage": 0,
          "stun": 0.3,
          "push": 45,
          "cooldown": 1.55,
          "effect": "thorns",
          "projectile": {
            "kind": "thorn",
            "y": 30,
            "vx": 390,
            "spreadVx": 22,
            "radius": 12,
            "damage": 43,
            "push": 18,
            "stun": 0.28,
            "life": 2.3,
            "delay": 0.1,
            "count": 3,
            "spreadY": 37.5,
            "stagger": 0.1
          },
          "animation": {
            "pose": "rosa-special0",
            "limb": "lead",
            "path": "Flor da Seca",
            "prop": "thorn-canteen",
            "effect": "thorns",
            "storyProp": "thorn-canteen"
          },
          "storyProp": "thorn-canteen",
          "storyMotion": "release"
        },
        {
          "id": "rosa-cerca",
          "name": "Cerca Viva",
          "description": "Espinhos nascem com atraso perto do rival dentro de um alcance limitado; só uma cerca pode permanecer armada.",
          "type": "trap",
          "startup": 0.23,
          "active": 0.06,
          "recovery": 0.34,
          "range": 0,
          "damage": 0,
          "stun": 0.3,
          "push": 45,
          "cooldown": 2.15,
          "effect": "thorns",
          "projectile": {
            "kind": "trap",
            "anchor": "enemy",
            "maxRange": 270,
            "unique": true,
            "y": 9,
            "vx": 0,
            "radius": 49,
            "damage": 90,
            "stun": 0.29,
            "root": 0.55,
            "push": 22,
            "life": 2.6,
            "delay": 0.48
          },
          "animation": {
            "pose": "rosa-special1",
            "limb": "both",
            "path": "Cerca Viva",
            "prop": "thorn-canteen",
            "effect": "thorns",
            "storyProp": "thorn-canteen"
          },
          "storyProp": "thorn-canteen",
          "storyMotion": "plant"
        },
        {
          "id": "rosa-lacada",
          "name": "Laçada Verde",
          "description": "O chicote alcança a meia distância e traz o alvo atingido para perto. Pode ser defendido como um golpe comum.",
          "type": "melee",
          "startup": 0.18,
          "active": 0.12,
          "recovery": 0.33,
          "range": 250,
          "damage": 101,
          "stun": 0.4,
          "push": 0,
          "cooldown": 1.85,
          "effect": "thorns",
          "pull": true,
          "animation": {
            "pose": "rosa-special2",
            "limb": "rear",
            "path": "Laçada Verde",
            "prop": "thorn-canteen",
            "effect": "thorns",
            "storyProp": "thorn-canteen"
          },
          "storyProp": "thorn-canteen",
          "storyMotion": "strike"
        }
      ],
      "combos": [
        {
          "id": "rosa-florada",
          "name": "Florada de Três Pontas",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "A última ponta de espinho acrescenta um pequeno dano ao trio.",
          "bonus": {
            "damage": 12,
            "push": 20
          }
        },
        {
          "id": "rosa-cisterna",
          "name": "Laço da Cisterna",
          "sequence": [
            "heavy",
            "kick",
            "special2"
          ],
          "description": "A laçada conclui a pressão e prende os pés por um instante.",
          "bonus": {
            "damage": 10,
            "root": 0.24
          }
        }
      ],
      "attackStyle": "thorns",
      "defenseName": "Cerca do Gibão",
      "finisher": {
        "name": "Flor da Última Água",
        "line": "Esta água fica com a comunidade.",
        "kind": "thorns"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.084,
          "active": 0.089,
          "recovery": 0.183
        },
        "heavy": {
          "startup": 0.199,
          "active": 0.117,
          "recovery": 0.296
        },
        "kick": {
          "startup": 0.129,
          "active": 0.124,
          "recovery": 0.261
        }
      },
      "super": {
        "id": "rosa-super",
        "name": "Flor de Toda a Chuva",
        "description": "Energia completa: Rosa Mandacaru reúne sua técnica em uma sequência cinematográfica. A abertura frontal pode ser defendida.",
        "line": "Esta água fica com a comunidade.",
        "kind": "rosa",
        "type": "melee",
        "effect": "thorns",
        "meterCost": 100,
        "startup": 0.3,
        "active": 0.2,
        "recovery": 0.68,
        "range": 260,
        "reachY": 195,
        "damage": 260,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Flor de Toda a Chuva",
          "palette": [
            "#8a6844",
            "#bfdd7c"
          ],
          "style": "weapon"
        },
        "storyProp": "thorn-canteen"
      },
      "entrance": {
        "name": "Rosa passa um cantil para mãos que aguardam à margem.",
        "line": "Esta água fica com a gente.",
        "style": "weapon",
        "gesture": "Fecha o cantil vazio e ajusta a roupa de couro.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Rosa passa um cantil para mãos que aguardam à margem.",
            "pose": "arrive",
            "prop": "thorn-canteen",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Fecha o cantil vazio e ajusta a roupa de couro.",
            "pose": "warmup",
            "prop": "thorn-canteen",
            "effect": "none"
          },
          {
            "at": 2.25,
            "action": "Uma flor de mandacaru abre no punho e recolhe seus espinhos.",
            "pose": "signature",
            "prop": "thorn-canteen",
            "effect": "thorns"
          },
          {
            "at": 3.25,
            "action": "Esta água fica com a gente.",
            "pose": "ready",
            "prop": "thorn-canteen",
            "effect": "none"
          }
        ]
      },
      "visual": {
        "body": "athletic",
        "silhouette": "Chapéu de couro, gibão curto, lenço verde e flores bordadas na roupa. Um braço ganhou a textura do mandacaru; o chicote vegetal dobra a silhueta sem esconder a mão que o controla.",
        "outfit": "Chapéu de couro, gibão curto, lenço verde e flores bordadas na roupa. Um braço ganhou a textura do mandacaru; o chicote vegetal dobra a silhueta sem esconder a mão que o controla.",
        "prop": "thorn-canteen",
        "stance": "Palma da Cisterna",
        "palette": [
          "#8a6844",
          "#bfdd7c",
          "#a8704c",
          "#3f2c27"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Rosa ergue o cantil; uma gota desperta a flor no chão.",
        "effect": "thorns",
        "line": "Esta água fica com a comunidade."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Rosa protege a flor na palma enquanto baixa um joelho.",
        "effect": "none"
      },
      "animation": {
        "stance": "Chicote vegetal a média distância e espinhos que delimitam o chão. Controla uma faixa do campo com precisão, mas sofre quando o rival entra no espaço entre seu corpo e a ponta do chicote.",
        "light": {
          "limb": "lead",
          "path": "Palma da Cisterna",
          "prop": "thorn-canteen"
        },
        "heavy": {
          "limb": "rear",
          "path": "Punho de Mandacaru",
          "prop": "thorn-canteen"
        },
        "kick": {
          "limb": "leg",
          "path": "Bota da Caatinga",
          "prop": "thorn-canteen"
        },
        "guard": {
          "prop": "thorn-canteen",
          "pose": "rosa-guard"
        }
      }
    },
    "augusto": {
      "movement": {
        "walk": 1,
        "backwalk": 0.72,
        "jump": 0.98
      },
      "normalScale": {
        "damage": 1.05,
        "speed": 0.97,
        "range": 1.04
      },
      "normalNames": {
        "light": "Toque da Moldura",
        "heavy": "Punho Sem-Rosto",
        "kick": "Passo de Retrato"
      },
      "specials": [
        {
          "id": "augusto-memoria",
          "name": "Memória Roubada",
          "description": "Executa uma cópia do especial neutro do adversário a cada uso, com intervalo adicional. Contra outro Augusto, usa um eco de pistão.",
          "type": "copy",
          "startup": 0.2,
          "active": 0.1,
          "recovery": 0.34,
          "range": 150,
          "damage": 100,
          "stun": 0.32,
          "push": 55,
          "cooldown": 1.9,
          "effect": "copy",
          "copy": "enemy-primary",
          "animation": {
            "pose": "augusto-special0",
            "limb": "lead",
            "path": "Memória Roubada",
            "prop": "photo-camera",
            "effect": "copy",
            "storyProp": "photo-camera"
          },
          "storyProp": "photo-camera",
          "storyMotion": "echo"
        },
        {
          "id": "augusto-voce",
          "name": "Você Nunca Existiu",
          "description": "Agarrão curto em que uma moldura sombria expulsa o rival com dano alto; falha no ar e contra alvos agachados.",
          "type": "throw",
          "startup": 0.19,
          "active": 0.07,
          "recovery": 0.45,
          "range": 80,
          "damage": 157,
          "stun": 0.48,
          "push": 85,
          "cooldown": 2.45,
          "effect": "copy",
          "animation": {
            "pose": "augusto-special1",
            "limb": "both",
            "path": "Você Nunca Existiu",
            "prop": "photo-camera",
            "effect": "copy",
            "storyProp": "photo-camera"
          },
          "storyProp": "photo-camera",
          "storyMotion": "close"
        },
        {
          "id": "augusto-moldura",
          "name": "Moldura Vazia",
          "description": "Uma moldura luminosa anuncia o reaparecimento atrás do rival, seguido de um golpe curto. Não deixa um portal permanente.",
          "type": "teleport",
          "startup": 0.25,
          "active": 0.12,
          "recovery": 0.39,
          "range": 117,
          "damage": 99,
          "stun": 0.33,
          "push": 35,
          "cooldown": 2.2,
          "effect": "copy",
          "teleport": {
            "side": "behind",
            "distance": 83,
            "height": 0
          },
          "animation": {
            "pose": "augusto-special2",
            "limb": "rear",
            "path": "Moldura Vazia",
            "prop": "photo-camera",
            "effect": "copy",
            "storyProp": "photo-camera"
          },
          "storyProp": "photo-camera",
          "storyMotion": "arrival"
        }
      ],
      "combos": [
        {
          "id": "augusto-negativo",
          "name": "Negativo em Três Quadros",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Os três quadros fecham com dano adicional e um empurrão curto.",
          "bonus": {
            "damage": 13,
            "push": 18
          }
        },
        {
          "id": "augusto-verso",
          "name": "Verso da Fotografia",
          "sequence": [
            "light",
            "kick",
            "special2"
          ],
          "description": "Aparece no verso da guarda e encerra três contatos confirmados.",
          "bonus": {
            "damage": 12,
            "root": 0.2
          }
        }
      ],
      "attackStyle": "portrait",
      "defenseName": "Moldura Fechada",
      "finisher": {
        "name": "Retrato Sem Testemunha",
        "line": "Agora você sabe como é ser esquecido.",
        "kind": "portrait"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.081,
          "active": 0.078,
          "recovery": 0.175
        },
        "heavy": {
          "startup": 0.202,
          "active": 0.104,
          "recovery": 0.284
        },
        "kick": {
          "startup": 0.126,
          "active": 0.111,
          "recovery": 0.249
        }
      },
      "super": {
        "id": "augusto-super",
        "name": "A Cidade no Último Negativo",
        "description": "Energia completa: Augusto Sem-Rosto reúne sua técnica em uma sequência cinematográfica. A abertura frontal pode ser defendida.",
        "line": "Agora você sabe como é ser esquecido.",
        "kind": "augusto",
        "type": "melee",
        "effect": "copy",
        "meterCost": 100,
        "startup": 0.3,
        "active": 0.2,
        "recovery": 0.68,
        "range": 250,
        "reachY": 195,
        "damage": 272,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "A Cidade no Último Negativo",
          "palette": [
            "#454452",
            "#dbc9a4"
          ],
          "style": "spectral"
        },
        "storyProp": "photo-camera"
      },
      "entrance": {
        "name": "Augusto instala uma câmera de fole num tripé lateral.",
        "line": "Não se mova antes da memória.",
        "style": "spectral",
        "gesture": "Abre a tampa da lente e confere um retrato gasto.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Augusto instala uma câmera de fole num tripé lateral.",
            "pose": "arrive",
            "prop": "photo-camera",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Abre a tampa da lente e confere um retrato gasto.",
            "pose": "warmup",
            "prop": "photo-camera",
            "effect": "none"
          },
          {
            "at": 2.25,
            "action": "O flash revela um segundo Augusto que desaparece ao fechar o obturador.",
            "pose": "signature",
            "prop": "photo-camera",
            "effect": "copy"
          },
          {
            "at": 3.25,
            "action": "Não se mova antes da memória.",
            "pose": "ready",
            "prop": "photo-camera",
            "effect": "none"
          }
        ]
      },
      "visual": {
        "body": "athletic",
        "silhouette": "Terno antigo de corte estreito, luvas brancas e rosto inteiramente vazio. Feições alheias surgem por um instante nos especiais; molduras flutuantes e uma inclinação rígida do pescoço sustentam sua presença.",
        "outfit": "Terno antigo de corte estreito, luvas brancas e rosto inteiramente vazio. Feições alheias surgem por um instante nos especiais; molduras flutuantes e uma inclinação rígida do pescoço sustentam sua presença.",
        "prop": "photo-camera",
        "stance": "Toque da Moldura",
        "palette": [
          "#454452",
          "#dbc9a4",
          "#c7b9aa",
          "#2b2931"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Augusto retira um retrato novo, encara-o e o guarda no peito.",
        "effect": "copy",
        "line": "Agora você sabe como é ser esquecido."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Augusto cobre a lente para que o último flash não dispare sozinho.",
        "effect": "none"
      },
      "animation": {
        "stance": "Copia o especial neutro do rival e usa molduras luminosas para mudar de lado. O agarrão prende de perto; o teletransporte precisa completar a preparação antes da pancada. É versátil, mas a cópia não replica sistemas exclusivos inteiros e errar a posição oferece uma abertura.",
        "light": {
          "limb": "lead",
          "path": "Toque da Moldura",
          "prop": "photo-camera"
        },
        "heavy": {
          "limb": "rear",
          "path": "Punho Sem-Rosto",
          "prop": "photo-camera"
        },
        "kick": {
          "limb": "leg",
          "path": "Passo de Retrato",
          "prop": "photo-camera"
        },
        "guard": {
          "prop": "photo-camera",
          "pose": "augusto-guard"
        }
      }
    },
    "valter": {
      "movement": {
        "walk": 1,
        "backwalk": 0.68,
        "jump": 0.96
      },
      "normalScale": {
        "damage": 0.98,
        "speed": 0.93,
        "range": 1.06
      },
      "normalNames": {
        "light": "Aparte Curto",
        "heavy": "Martelo do Debate",
        "kick": "Passo do Palanque"
      },
      "specials": [
        {
          "id": "valter-voz",
          "name": "Voz de Palanque",
          "description": "Uma onda sonora grande e lenta percorre a arena na altura do peito e empurra o alvo.",
          "type": "projectile",
          "startup": 0.26,
          "active": 0.06,
          "recovery": 0.43,
          "range": 0,
          "damage": 0,
          "stun": 0.3,
          "push": 45,
          "cooldown": 1.55,
          "effect": "wave",
          "projectile": {
            "kind": "voice",
            "y": 72,
            "vx": 240,
            "radius": 38,
            "damage": 110,
            "push": 115,
            "stun": 0.32,
            "life": 3.3,
            "delay": 0.26
          },
          "animation": {
            "pose": "valter-special0",
            "limb": "lead",
            "path": "Voz de Palanque",
            "prop": "candidate-mic",
            "effect": "wave",
            "storyProp": "candidate-mic"
          },
          "storyProp": "candidate-mic",
          "storyMotion": "release"
        },
        {
          "id": "valter-ordem",
          "name": "Questão de Ordem",
          "description": "Ergue o microfone e espera uma interrupção: um golpe frontal comum na janela ativa desperta a réplica sonora. Rasteiras e agarrões atravessam a resposta; sem ataque recebido, fica aberto na recuperação.",
          "type": "counter",
          "startup": 0.08,
          "active": 0.24,
          "recovery": 0.37,
          "range": 154,
          "damage": 119,
          "stun": 0.37,
          "push": 92,
          "cooldown": 2.2,
          "effect": "wave",
          "counterWindow": 0.24,
          "counterDamage": 119,
          "animation": {
            "pose": "valter-special1",
            "limb": "both",
            "path": "Questão de Ordem",
            "prop": "candidate-mic",
            "effect": "wave",
            "storyProp": "candidate-mic"
          },
          "storyProp": "candidate-mic",
          "storyMotion": "parry"
        },
        {
          "id": "valter-virada",
          "name": "Virada de Discurso",
          "description": "Recua e lança um eco menor e mais rápido. O gesto não concede invulnerabilidade e a recuperação deixa espaço para perseguição.",
          "type": "retreat",
          "startup": 0.14,
          "active": 0.18,
          "recovery": 0.36,
          "range": 0,
          "damage": 0,
          "stun": 0.3,
          "push": 45,
          "cooldown": 2.05,
          "effect": "copy",
          "move": -270,
          "projectile": {
            "kind": "voice",
            "y": 67,
            "vx": 340,
            "radius": 24,
            "damage": 78,
            "stun": 0.26,
            "push": 62,
            "life": 1.4,
            "delay": 0.24
          },
          "animation": {
            "pose": "valter-special2",
            "limb": "rear",
            "path": "Virada de Discurso",
            "prop": "candidate-mic",
            "effect": "copy",
            "storyProp": "candidate-mic"
          },
          "storyProp": "candidate-mic",
          "storyMotion": "withdraw"
        }
      ],
      "combos": [
        {
          "id": "valter-tribuna",
          "name": "Três Batidas na Tribuna",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Os três acertos abrem espaço para retomar o discurso.",
          "bonus": {
            "damage": 11,
            "push": 35
          }
        },
        {
          "id": "valter-replica",
          "name": "Direito de Réplica",
          "sequence": [
            "light",
            "kick",
            "special0"
          ],
          "description": "Fecha a sequência com uma onda de voz; a longa preparação permite uma resposta se o cancelamento atrasar.",
          "bonus": {
            "damage": 14,
            "push": 28
          }
        }
      ],
      "attackStyle": "voice",
      "defenseName": "Aparte de Guarda",
      "finisher": {
        "name": "Palavra Final",
        "line": "Promessa boa é a que se cumpre.",
        "kind": "voice"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.094,
          "active": 0.076,
          "recovery": 0.194
        },
        "heavy": {
          "startup": 0.218,
          "active": 0.096,
          "recovery": 0.315
        },
        "kick": {
          "startup": 0.149,
          "active": 0.109,
          "recovery": 0.281
        }
      },
      "super": {
        "id": "valter-super",
        "name": "Promessa Cumprida",
        "description": "Energia completa: Valter Verbo reúne sua técnica em uma sequência cinematográfica. A abertura frontal pode ser defendida.",
        "line": "Promessa boa é a que se cumpre.",
        "kind": "valter",
        "type": "melee",
        "effect": "wave",
        "meterCost": 100,
        "startup": 0.3,
        "active": 0.2,
        "recovery": 0.68,
        "range": 260,
        "reachY": 195,
        "damage": 260,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Promessa Cumprida",
          "palette": [
            "#28454f",
            "#e0c481"
          ],
          "style": "power"
        },
        "storyProp": "candidate-mic"
      },
      "entrance": {
        "name": "Valter chega entre apoiadores que permanecem ao fundo.",
        "line": "Agora a palavra vale o que faz.",
        "style": "power",
        "gesture": "Entrega os papéis de campanha, guarda o broche e arregaça as mangas.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Valter chega entre apoiadores que permanecem ao fundo.",
            "pose": "arrive",
            "prop": "candidate-mic",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Entrega os papéis de campanha, guarda o broche e arregaça as mangas.",
            "pose": "warmup",
            "prop": "candidate-mic",
            "effect": "none"
          },
          {
            "at": 2.25,
            "action": "Toca uma vez no microfone; uma onda grave forma o silêncio.",
            "pose": "signature",
            "prop": "candidate-mic",
            "effect": "wave"
          },
          {
            "at": 3.25,
            "action": "Agora a palavra vale o que faz.",
            "pose": "ready",
            "prop": "candidate-mic",
            "effect": "none"
          }
        ]
      },
      "visual": {
        "body": "athletic",
        "silhouette": "Candidato fictício de meia-idade, terno azul-petróleo de mangas dobradas, gravata dourada solta e cabelo curto grisalho. Um microfone antigo projeta ondas geométricas. Roupa e palanque têm símbolos inventados, sem partido, número eleitoral ou slogan real.",
        "outfit": "Candidato fictício de meia-idade, terno azul-petróleo de mangas dobradas, gravata dourada solta e cabelo curto grisalho. Um microfone antigo projeta ondas geométricas. Roupa e palanque têm símbolos inventados, sem partido, número eleitoral ou slogan real.",
        "prop": "candidate-mic",
        "stance": "Aparte Curto",
        "palette": [
          "#28454f",
          "#e0c481",
          "#bd8560",
          "#6b6260"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Valter fecha o microfone e volta-se às pessoas ao fundo.",
        "effect": "wave",
        "line": "Promessa boa é a que se cumpre."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Valter recolhe um papel caído e baixa a cabeça diante do rival.",
        "effect": "none"
      },
      "animation": {
        "stance": "Anda com cautela e mantém o adversário distante com uma onda sonora larga e lenta. A preparação visível permite saltar ou avançar antes do disparo; quando encurralado, depende de golpes curtos.",
        "light": {
          "limb": "lead",
          "path": "Aparte Curto",
          "prop": "candidate-mic"
        },
        "heavy": {
          "limb": "rear",
          "path": "Martelo do Debate",
          "prop": "candidate-mic"
        },
        "kick": {
          "limb": "leg",
          "path": "Passo do Palanque",
          "prop": "candidate-mic"
        },
        "guard": {
          "prop": "candidate-mic",
          "pose": "valter-guard"
        }
      }
    },
    "serena": {
      "movement": {
        "walk": 1.02,
        "backwalk": 0.64,
        "jump": 0.94
      },
      "normalScale": {
        "damage": 1.06,
        "speed": 0.92,
        "range": 0.96
      },
      "normalNames": {
        "light": "Toque de Guarda",
        "heavy": "Escudada da Baía",
        "kick": "Bota de Maré"
      },
      "specials": [
        {
          "id": "serena-escudo",
          "name": "Escudo de Maré",
          "description": "Avança com o escudo e uma janela breve de armadura, encerrando numa pancada. Agarrões vencem a proteção.",
          "type": "dash",
          "startup": 0.19,
          "active": 0.24,
          "recovery": 0.37,
          "range": 97,
          "damage": 105,
          "stun": 0.31,
          "push": 110,
          "cooldown": 2.5,
          "effect": "block",
          "move": 185,
          "armor": 0.62,
          "animation": {
            "pose": "serena-special0",
            "limb": "lead",
            "path": "Escudo de Maré",
            "prop": "police-shield",
            "effect": "block",
            "storyProp": "police-shield"
          },
          "storyProp": "police-shield",
          "storyMotion": "travel"
        },
        {
          "id": "serena-passo",
          "name": "Passo da Baía",
          "description": "Escudada curta acompanhada de um recuo moderado. Reposiciona Serena sem invulnerabilidade.",
          "type": "retreat",
          "startup": 0.07,
          "active": 0.15,
          "recovery": 0.29,
          "range": 139,
          "damage": 85,
          "stun": 0.29,
          "push": 48,
          "cooldown": 1.8,
          "effect": "block",
          "move": -190,
          "animation": {
            "pose": "serena-special1",
            "limb": "both",
            "path": "Passo da Baía",
            "prop": "police-shield",
            "effect": "block",
            "storyProp": "police-shield"
          },
          "storyProp": "police-shield",
          "storyMotion": "withdraw"
        },
        {
          "id": "serena-quebra",
          "name": "Quebra de Onda",
          "description": "Ergue o escudo num golpe ascendente que lança o alvo próximo. A queda tem recuperação longa.",
          "type": "launcher",
          "startup": 0.15,
          "active": 0.16,
          "recovery": 0.43,
          "range": 142,
          "damage": 117,
          "stun": 0.38,
          "push": 40,
          "cooldown": 2.05,
          "effect": "wave",
          "reachY": 205,
          "launch": 285,
          "animation": {
            "pose": "serena-special2",
            "limb": "rear",
            "path": "Quebra de Onda",
            "prop": "police-shield",
            "effect": "wave",
            "storyProp": "police-shield"
          },
          "storyProp": "police-shield",
          "storyMotion": "rise"
        }
      ],
      "combos": [
        {
          "id": "serena-ancora",
          "name": "Âncora da Baía",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "A sequência defensiva termina com um empurrão mais firme.",
          "bonus": {
            "damage": 12,
            "push": 32
          }
        },
        {
          "id": "serena-muralha",
          "name": "Muralha de Maré",
          "sequence": [
            "heavy",
            "kick",
            "special0"
          ],
          "description": "O avanço do escudo fecha três contatos com dano adicional.",
          "bonus": {
            "damage": 13,
            "push": 28
          }
        }
      ],
      "attackStyle": "shield",
      "defenseName": "Guarda da Baía",
      "finisher": {
        "name": "Maré de Regresso",
        "line": "A baía sempre traz a verdade de volta.",
        "kind": "shield"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.089,
          "active": 0.087,
          "recovery": 0.199
        },
        "heavy": {
          "startup": 0.209,
          "active": 0.111,
          "recovery": 0.319
        },
        "kick": {
          "startup": 0.142,
          "active": 0.114,
          "recovery": 0.275
        }
      },
      "super": {
        "id": "serena-super",
        "name": "Muralha da Baía Inteira",
        "description": "Energia completa: Serena Maré reúne sua técnica em uma sequência cinematográfica. A abertura frontal pode ser defendida.",
        "line": "A baía sempre traz a verdade de volta.",
        "kind": "serena",
        "type": "melee",
        "effect": "block",
        "meterCost": 100,
        "startup": 0.3,
        "active": 0.2,
        "recovery": 0.68,
        "range": 230,
        "reachY": 195,
        "damage": 272,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Muralha da Baía Inteira",
          "palette": [
            "#28384a",
            "#66c9cf"
          ],
          "style": "weapon"
        },
        "storyProp": "police-shield"
      },
      "entrance": {
        "name": "Serena deixa uma viatura de tamanho real ao fundo da rua.",
        "line": "A baía merece voltar pra casa.",
        "style": "weapon",
        "gesture": "Desliga o rádio e coloca a proteção no antebraço.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Serena deixa uma viatura de tamanho real ao fundo da rua.",
            "pose": "arrive",
            "prop": "police-shield",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Desliga o rádio e coloca a proteção no antebraço.",
            "pose": "warmup",
            "prop": "police-shield",
            "effect": "none"
          },
          {
            "at": 2.25,
            "action": "Confere o escudo e afasta um reflexo de água com a borda.",
            "pose": "signature",
            "prop": "police-shield",
            "effect": "block"
          },
          {
            "at": 3.25,
            "action": "A baía merece voltar pra casa.",
            "pose": "ready",
            "prop": "police-shield",
            "effect": "none"
          }
        ]
      },
      "visual": {
        "body": "athletic",
        "silhouette": "Policial negra de tranças presas, uniforme tático azul-marinho com faixas turquesa, botas e escudo compacto translúcido. O emblema de onda pertence a uma corporação fictícia; não há brasões, patentes ou identificação de uma força real.",
        "outfit": "Policial negra de tranças presas, uniforme tático azul-marinho com faixas turquesa, botas e escudo compacto translúcido. O emblema de onda pertence a uma corporação fictícia; não há brasões, patentes ou identificação de uma força real.",
        "prop": "police-shield",
        "stance": "Toque de Guarda",
        "palette": [
          "#28384a",
          "#66c9cf",
          "#865237",
          "#231d24"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Serena baixa o escudo e presta atenção à rua antes de celebrar.",
        "effect": "block",
        "line": "A baía sempre traz a verdade de volta."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Serena se apoia no escudo, que permanece inteiro sobre o chão.",
        "effect": "none"
      },
      "animation": {
        "stance": "Avança atrás do escudo, reduzindo dano e interrupção durante uma janela curta, para acertar uma pancada próxima. Agarrões vencem a proteção; esperar a recuperação ou manter distância também abre respostas.",
        "light": {
          "limb": "lead",
          "path": "Toque de Guarda",
          "prop": "police-shield"
        },
        "heavy": {
          "limb": "rear",
          "path": "Escudada da Baía",
          "prop": "police-shield"
        },
        "kick": {
          "limb": "leg",
          "path": "Bota de Maré",
          "prop": "police-shield"
        },
        "guard": {
          "prop": "police-shield",
          "pose": "serena-guard"
        }
      }
    },
    "caio": {
      "movement": {
        "walk": 1.02,
        "backwalk": 0.7,
        "jump": 1.02
      },
      "normalScale": {
        "damage": 0.99,
        "speed": 1.07,
        "range": 1.06
      },
      "normalNames": {
        "light": "Toque de Ronda",
        "heavy": "Bastão da Lapa",
        "kick": "Chute da Madrugada"
      },
      "specials": [
        {
          "id": "caio-cerco",
          "name": "Cerco da Lapa",
          "description": "Investe com o bastão de luz e imobiliza brevemente o deslocamento ao acertar. Não recebe armadura ou invulnerabilidade.",
          "type": "dash",
          "startup": 0.15,
          "active": 0.23,
          "recovery": 0.4,
          "range": 107,
          "damage": 95,
          "stun": 0.28,
          "push": 18,
          "cooldown": 2.1,
          "effect": "electric",
          "move": 430,
          "root": 0.62,
          "animation": {
            "pose": "caio-special0",
            "limb": "lead",
            "path": "Cerco da Lapa",
            "prop": "tonfa",
            "effect": "electric",
            "storyProp": "tonfa"
          },
          "storyProp": "tonfa",
          "storyMotion": "travel"
        },
        {
          "id": "caio-ronda",
          "name": "Ronda Curta",
          "description": "Gira o bastão em dois contatos próximos, cobrindo os arredores à frente sem avançar.",
          "type": "melee",
          "startup": 0.12,
          "active": 0.34,
          "recovery": 0.31,
          "range": 157,
          "damage": 49,
          "stun": 0.21,
          "push": 17,
          "cooldown": 1.8,
          "effect": "spin",
          "multi": 2,
          "animation": {
            "pose": "caio-special1",
            "limb": "both",
            "path": "Ronda Curta",
            "prop": "tonfa",
            "effect": "spin",
            "storyProp": "tonfa"
          },
          "storyProp": "tonfa",
          "storyMotion": "strike"
        },
        {
          "id": "caio-linha",
          "name": "Linha de Retorno",
          "description": "Recua enquanto estende o bastão num golpe longo. A janela de acerto é curta e não protege de ataques rivais.",
          "type": "retreat",
          "startup": 0.09,
          "active": 0.16,
          "recovery": 0.34,
          "range": 196,
          "damage": 102,
          "stun": 0.32,
          "push": 70,
          "cooldown": 1.95,
          "effect": "electric",
          "move": -225,
          "animation": {
            "pose": "caio-special2",
            "limb": "rear",
            "path": "Linha de Retorno",
            "prop": "tonfa",
            "effect": "electric",
            "storyProp": "tonfa"
          },
          "storyProp": "tonfa",
          "storyMotion": "withdraw"
        }
      ],
      "combos": [
        {
          "id": "caio-vigia",
          "name": "Ronda em Três Tempos",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "As três batidas terminam com dano adicional moderado.",
          "bonus": {
            "damage": 12,
            "push": 17
          }
        },
        {
          "id": "caio-arcos",
          "name": "Arcos de Contenção",
          "sequence": [
            "light",
            "kick",
            "special0"
          ],
          "description": "A investida fecha a aproximação e reforça a prisão de movimento.",
          "bonus": {
            "damage": 10,
            "root": 0.26
          }
        }
      ],
      "attackStyle": "baton",
      "defenseName": "Guarda da Lapa",
      "finisher": {
        "name": "Ronda Encerrada",
        "line": "Nem toda sombra conhece um caminho de volta.",
        "kind": "baton"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.074,
          "active": 0.081,
          "recovery": 0.168
        },
        "heavy": {
          "startup": 0.181,
          "active": 0.107,
          "recovery": 0.259
        },
        "kick": {
          "startup": 0.117,
          "active": 0.117,
          "recovery": 0.238
        }
      },
      "super": {
        "id": "caio-super",
        "name": "Os Arcos da Vigília",
        "description": "Energia completa: Caio Leme reúne sua técnica em uma sequência cinematográfica. A abertura frontal pode ser defendida.",
        "line": "Nem toda sombra conhece um caminho de volta.",
        "kind": "caio",
        "type": "melee",
        "effect": "electric",
        "meterCost": 100,
        "startup": 0.3,
        "active": 0.2,
        "recovery": 0.68,
        "range": 250,
        "reachY": 195,
        "damage": 260,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Os Arcos da Vigília",
          "palette": [
            "#3d4651",
            "#a6cce0"
          ],
          "style": "weapon"
        },
        "storyProp": "tonfa"
      },
      "entrance": {
        "name": "Caio atravessa o arco da rua com o rádio em chiado.",
        "line": "A ronda termina quando todos voltam.",
        "style": "weapon",
        "gesture": "Guarda o rádio e gira o bastão curto com controle.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Caio atravessa o arco da rua com o rádio em chiado.",
            "pose": "arrive",
            "prop": "tonfa",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Guarda o rádio e gira o bastão curto com controle.",
            "pose": "warmup",
            "prop": "tonfa",
            "effect": "none"
          },
          {
            "at": 2.25,
            "action": "O chiado vira uma sombra que ele corta fora da linha.",
            "pose": "signature",
            "prop": "tonfa",
            "effect": "electric"
          },
          {
            "at": 3.25,
            "action": "A ronda termina quando todos voltam.",
            "pose": "ready",
            "prop": "tonfa",
            "effect": "none"
          }
        ]
      },
      "visual": {
        "body": "athletic",
        "silhouette": "Policial de cabelo escuro curto, uniforme cinza-azulado, colete leve e bastão retrátil fictício que projeta um aro de luz. Faixas claras desenham sua silhueta, sem símbolos ou distintivos de corporações reais.",
        "outfit": "Policial de cabelo escuro curto, uniforme cinza-azulado, colete leve e bastão retrátil fictício que projeta um aro de luz. Faixas claras desenham sua silhueta, sem símbolos ou distintivos de corporações reais.",
        "prop": "tonfa",
        "stance": "Toque de Ronda",
        "palette": [
          "#3d4651",
          "#a6cce0",
          "#c38c63",
          "#292c32"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Caio guarda o bastão e informa pelo rádio que a rua está livre.",
        "effect": "electric",
        "line": "Nem toda sombra conhece um caminho de volta."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Caio baixa um joelho e mantém o bastão junto ao corpo.",
        "effect": "none"
      },
      "animation": {
        "stance": "Percorre distância numa investida de bastão e prende brevemente os pés de quem atinge. É veloz, mas não recebe armadura ou invulnerabilidade; uma defesa antecipada deixa sua recuperação exposta.",
        "light": {
          "limb": "lead",
          "path": "Toque de Ronda",
          "prop": "tonfa"
        },
        "heavy": {
          "limb": "rear",
          "path": "Bastão da Lapa",
          "prop": "tonfa"
        },
        "kick": {
          "limb": "leg",
          "path": "Chute da Madrugada",
          "prop": "tonfa"
        },
        "guard": {
          "prop": "tonfa",
          "pose": "caio-guard"
        }
      }
    },
    "davi": {
      "movement": {
        "walk": 1.08,
        "backwalk": 0.78,
        "jump": 1.08
      },
      "normalScale": {
        "damage": 0.97,
        "speed": 1.13,
        "range": 1.04
      },
      "normalNames": {
        "light": "Toque de Tabela",
        "heavy": "Corpo na Disputa",
        "kick": "Chute de Primeira"
      },
      "specials": [
        {
          "id": "davi-chute",
          "name": "Chute de Maré",
          "description": "Chuta uma bola baixa e veloz que lança o alvo no contato. A trajetória pode ser saltada.",
          "type": "projectile",
          "startup": 0.2,
          "active": 0.06,
          "recovery": 0.32,
          "range": 0,
          "damage": 0,
          "stun": 0.3,
          "push": 45,
          "cooldown": 1.55,
          "effect": "spark",
          "projectile": {
            "kind": "ball",
            "y": 21,
            "vx": 550,
            "radius": 18,
            "damage": 95,
            "push": 48,
            "stun": 0.28,
            "launch": 245,
            "life": 1.7,
            "delay": 0.2
          },
          "animation": {
            "pose": "davi-special0",
            "limb": "lead",
            "path": "Chute de Maré",
            "prop": "football",
            "effect": "spark",
            "storyProp": "football"
          },
          "storyProp": "football",
          "storyMotion": "release"
        },
        {
          "id": "davi-drible",
          "name": "Drible da Vila",
          "description": "A finta vira um chute lateral de avanço rápido. Um único contato e recuperação visível limitam a pressão.",
          "type": "dash",
          "startup": 0.09,
          "active": 0.2,
          "recovery": 0.3,
          "range": 138,
          "damage": 98,
          "stun": 0.31,
          "push": 48,
          "cooldown": 1.75,
          "effect": "dash",
          "move": 390,
          "animation": {
            "pose": "davi-special1",
            "limb": "both",
            "path": "Drible da Vila",
            "prop": "football",
            "effect": "dash",
            "storyProp": "football"
          },
          "storyProp": "football",
          "storyMotion": "travel"
        },
        {
          "id": "davi-bicicleta",
          "name": "Bicicleta de Ressaca",
          "description": "Chute ascendente acrobático de alcance curto que lança o alvo, com recuperação longa ao errar.",
          "type": "launcher",
          "startup": 0.13,
          "active": 0.18,
          "recovery": 0.43,
          "range": 157,
          "damage": 118,
          "stun": 0.39,
          "push": 32,
          "cooldown": 2,
          "effect": "spin",
          "reachY": 210,
          "launch": 310,
          "animation": {
            "pose": "davi-special2",
            "limb": "rear",
            "path": "Bicicleta de Ressaca",
            "prop": "football",
            "effect": "spin",
            "storyProp": "football"
          },
          "storyProp": "football",
          "storyMotion": "rise"
        }
      ],
      "combos": [
        {
          "id": "davi-tabela",
          "name": "Tabela da Vila",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Toque, disputa de corpo e chute de primeira com impacto final reforçado.",
          "bonus": {
            "damage": 13,
            "push": 22
          }
        },
        {
          "id": "davi-carrinho",
          "name": "Arrancada da Camisa Dez",
          "sequence": [
            "heavy",
            "kick",
            "special1"
          ],
          "description": "O drible de avanço termina a sequência com dano adicional.",
          "bonus": {
            "damage": 14,
            "push": 20
          }
        }
      ],
      "attackStyle": "football",
      "defenseName": "Bloqueio de Tabela",
      "finisher": {
        "name": "Gol de Ressaca",
        "line": "A Vila guarda o último lance.",
        "kind": "football"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.065,
          "active": 0.073,
          "recovery": 0.151
        },
        "heavy": {
          "startup": 0.174,
          "active": 0.101,
          "recovery": 0.244
        },
        "kick": {
          "startup": 0.108,
          "active": 0.132,
          "recovery": 0.217
        }
      },
      "super": {
        "id": "davi-super",
        "name": "A Noite Inteira da Vila",
        "description": "Energia completa: Davi Camisa Dez reúne sua técnica em uma sequência cinematográfica. A abertura frontal pode ser defendida.",
        "line": "A Vila guarda o último lance.",
        "kind": "davi",
        "type": "melee",
        "effect": "spark",
        "meterCost": 100,
        "startup": 0.3,
        "active": 0.2,
        "recovery": 0.68,
        "range": 250,
        "reachY": 195,
        "damage": 260,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "A Noite Inteira da Vila",
          "palette": [
            "#e2e1d9",
            "#79d2bd"
          ],
          "style": "speed"
        },
        "storyProp": "football"
      },
      "entrance": {
        "name": "Davi entra pelo túnel e recebe uma bola de futebol proporcionada.",
        "line": "A Vila guarda o último lance.",
        "style": "speed",
        "gesture": "Domina com peito e coxa, sem sair da própria faixa.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Davi entra pelo túnel e recebe uma bola de futebol proporcionada.",
            "pose": "arrive",
            "prop": "football",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Domina com peito e coxa, sem sair da própria faixa.",
            "pose": "warmup",
            "prop": "football",
            "effect": "none"
          },
          {
            "at": 2.25,
            "action": "Faz uma embaixadinha, mata no pé e rola a bola para fora da luta.",
            "pose": "signature",
            "prop": "football",
            "effect": "spark"
          },
          {
            "at": 3.25,
            "action": "A Vila guarda o último lance.",
            "pose": "ready",
            "prop": "football",
            "effect": "none"
          }
        ]
      },
      "visual": {
        "body": "athletic",
        "silhouette": "Jogador negro de cabelo curto, físico atlético, camisa branca com detalhes pretos, calção preto, meiões brancos e chuteiras verdes. Uniforme e bola não têm escudo, marca, patrocinador ou identificação de atleta real.",
        "outfit": "Jogador negro de cabelo curto, físico atlético, camisa branca com detalhes pretos, calção preto, meiões brancos e chuteiras verdes. Uniforme e bola não têm escudo, marca, patrocinador ou identificação de atleta real.",
        "prop": "football",
        "stance": "Toque de Tabela",
        "palette": [
          "#e2e1d9",
          "#79d2bd",
          "#74472e",
          "#201d21"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Davi ergue as mãos à torcida e desenha um coração no peito.",
        "effect": "spark",
        "line": "A Vila guarda o último lance."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Davi apoia as mãos nos joelhos e reconhece o adversário.",
        "effect": "none"
      },
      "animation": {
        "stance": "Move-se mais rápido que os demais recém-chegados e combina chutes com uma bola rasteira veloz. O projétil ergue o alvo ao acertar, mas pode ser saltado; a preparação do chute oferece tempo para avançar.",
        "light": {
          "limb": "lead",
          "path": "Toque de Tabela",
          "prop": "football"
        },
        "heavy": {
          "limb": "rear",
          "path": "Corpo na Disputa",
          "prop": "football"
        },
        "kick": {
          "limb": "leg",
          "path": "Chute de Primeira",
          "prop": "football"
        },
        "guard": {
          "prop": "football",
          "pose": "davi-guard"
        }
      }
    },
    "luz": {
      "movement": {
        "walk": 1.06,
        "backwalk": 0.74,
        "jump": 1.04
      },
      "normalScale": {
        "damage": 0.97,
        "speed": 1.04,
        "range": 1.02
      },
      "normalNames": {
        "light": "Batida de Caixa",
        "heavy": "Soco no Grave",
        "kick": "Chute de Compasso"
      },
      "specials": [
        {
          "id": "luz-refrao",
          "name": "Refrão de Impacto",
          "description": "Emite três pulsos de som próximos sem avançar. Fora do alcance, o rival pode punir a recuperação.",
          "type": "melee",
          "startup": 0.17,
          "active": 0.48,
          "recovery": 0.32,
          "range": 190,
          "damage": 36,
          "stun": 0.19,
          "push": 18,
          "cooldown": 1.85,
          "effect": "wave",
          "multi": 3,
          "animation": {
            "pose": "luz-special0",
            "limb": "lead",
            "path": "Refrão de Impacto",
            "prop": "stage-microphone",
            "effect": "wave",
            "storyProp": "stage-microphone"
          },
          "storyProp": "stage-microphone",
          "storyMotion": "strike"
        },
        {
          "id": "luz-retorno",
          "name": "Retorno de Palco",
          "description": "Recua e deixa um eco sonoro de disparo atrasado. A trajetória do eco é reta e o recuo não protege Luz.",
          "type": "retreat",
          "startup": 0.12,
          "active": 0.2,
          "recovery": 0.3,
          "range": 0,
          "damage": 0,
          "stun": 0.3,
          "push": 45,
          "cooldown": 2,
          "effect": "copy",
          "move": -270,
          "projectile": {
            "kind": "voice",
            "y": 62,
            "vx": 285,
            "radius": 30,
            "damage": 87,
            "stun": 0.29,
            "push": 65,
            "life": 1.5,
            "delay": 0.34
          },
          "animation": {
            "pose": "luz-special1",
            "limb": "both",
            "path": "Retorno de Palco",
            "prop": "stage-microphone",
            "effect": "copy",
            "storyProp": "stage-microphone"
          },
          "storyProp": "stage-microphone",
          "storyMotion": "withdraw"
        },
        {
          "id": "luz-nota",
          "name": "Nota Suspensa",
          "description": "Um pulso de som ascendente alcança saltos próximos e lança o alvo, com recuperação longa ao errar.",
          "type": "launcher",
          "startup": 0.16,
          "active": 0.18,
          "recovery": 0.39,
          "range": 190,
          "damage": 108,
          "stun": 0.37,
          "push": 35,
          "cooldown": 1.95,
          "effect": "wave",
          "reachY": 220,
          "launch": 295,
          "animation": {
            "pose": "luz-special2",
            "limb": "rear",
            "path": "Nota Suspensa",
            "prop": "stage-microphone",
            "effect": "wave",
            "storyProp": "stage-microphone"
          },
          "storyProp": "stage-microphone",
          "storyMotion": "rise"
        }
      ],
      "combos": [
        {
          "id": "luz-compasso",
          "name": "Compasso de Rua",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Fecha três batidas com mais dano no chute de compasso.",
          "bonus": {
            "damage": 12,
            "push": 18
          }
        },
        {
          "id": "luz-crescendo",
          "name": "Crescendo da Virada",
          "sequence": [
            "light",
            "kick",
            "special2"
          ],
          "description": "A nota ascendente fecha os três contatos com lançamento reforçado.",
          "bonus": {
            "damage": 11,
            "launch": 325
          }
        }
      ],
      "attackStyle": "music",
      "defenseName": "Pausa do Compasso",
      "finisher": {
        "name": "Bis das Vozes Livres",
        "line": "Esse refrão não tem mais dono.",
        "kind": "music"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.079,
          "active": 0.085,
          "recovery": 0.171
        },
        "heavy": {
          "startup": 0.191,
          "active": 0.116,
          "recovery": 0.273
        },
        "kick": {
          "startup": 0.122,
          "active": 0.123,
          "recovery": 0.247
        }
      },
      "super": {
        "id": "luz-super",
        "name": "Bis de Todos os Ecos",
        "description": "Energia completa: Luz do Grave reúne sua técnica em uma sequência cinematográfica. A abertura frontal pode ser defendida.",
        "line": "Esse refrão não tem mais dono.",
        "kind": "luz",
        "type": "melee",
        "effect": "wave",
        "meterCost": 100,
        "startup": 0.3,
        "active": 0.2,
        "recovery": 0.68,
        "range": 240,
        "reachY": 195,
        "damage": 260,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Bis de Todos os Ecos",
          "palette": [
            "#722d48",
            "#62d9dd"
          ],
          "style": "dance"
        },
        "storyProp": "stage-microphone"
      },
      "entrance": {
        "name": "Luz atravessa um corredor aberto pela banda ao fundo.",
        "line": "Esse refrão não tem dono.",
        "style": "dance",
        "gesture": "Entrega o cabo ao técnico e confere o microfone.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Luz atravessa um corredor aberto pela banda ao fundo.",
            "pose": "arrive",
            "prop": "stage-microphone",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Entrega o cabo ao técnico e confere o microfone.",
            "pose": "warmup",
            "prop": "stage-microphone",
            "effect": "none"
          },
          {
            "at": 2.25,
            "action": "Canta uma nota breve que acende pontos de luz no ritmo da mão.",
            "pose": "signature",
            "prop": "stage-microphone",
            "effect": "wave"
          },
          {
            "at": 3.25,
            "action": "Esse refrão não tem dono.",
            "pose": "ready",
            "prop": "stage-microphone",
            "effect": "none"
          }
        ]
      },
      "visual": {
        "body": "athletic",
        "silhouette": "Cantor de cabelo crespo alto, jaqueta vinho com vivos ciano, camiseta escura, calça preta e botas. Um microfone de mão e cabos luminosos marcam os gestos; não reproduz a aparência ou o figurino de um artista real.",
        "outfit": "Cantor de cabelo crespo alto, jaqueta vinho com vivos ciano, camiseta escura, calça preta e botas. Um microfone de mão e cabos luminosos marcam os gestos; não reproduz a aparência ou o figurino de um artista real.",
        "prop": "stage-microphone",
        "stance": "Batida de Caixa",
        "palette": [
          "#722d48",
          "#62d9dd",
          "#a66a48",
          "#251b2a"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Luz agradece ao público e segura uma nota sem avançar.",
        "effect": "wave",
        "line": "Esse refrão não tem mais dono."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Luz abaixa o microfone antes que o retorno ganhe volume.",
        "effect": "none"
      },
      "animation": {
        "stance": "Mantém os pés no lugar ao soltar três pulsos próximos de som, criando pressão em ritmo regular. Precisa acertar a distância antes de cantar; saltos altos e ataques longos exploram seu alcance limitado.",
        "light": {
          "limb": "lead",
          "path": "Batida de Caixa",
          "prop": "stage-microphone"
        },
        "heavy": {
          "limb": "rear",
          "path": "Soco no Grave",
          "prop": "stage-microphone"
        },
        "kick": {
          "limb": "leg",
          "path": "Chute de Compasso",
          "prop": "stage-microphone"
        },
        "guard": {
          "prop": "stage-microphone",
          "pose": "luz-guard"
        }
      }
    },
    "ti": {
      "movement": {
        "walk": 1.04,
        "backwalk": 0.8,
        "jump": 1.02
      },
      "normalScale": {
        "damage": 1.01,
        "speed": 1.06,
        "range": 0.99
      },
      "normalNames": {
        "light": "Troco Curto",
        "heavy": "Cotovelo do Volante",
        "kick": "Chute de Calçada"
      },
      "specials": [
        {
          "id": "ti-taximetro",
          "name": "Taxímetro",
          "description": "Estala uma ficha do taxímetro em linha reta. O disco pequeno sai rápido, dá um contato e exige pontaria; saltos e defesa vencem a trajetória à altura do peito.",
          "type": "projectile",
          "startup": 0.15,
          "active": 0.06,
          "recovery": 0.24,
          "range": 0,
          "damage": 0,
          "stun": 0.3,
          "push": 45,
          "cooldown": 1.65,
          "effect": "spark",
          "projectile": {
            "kind": "token",
            "y": 60,
            "vx": 490,
            "radius": 12,
            "damage": 88,
            "stun": 0.26,
            "push": 48,
            "life": 1.35,
            "delay": 0.15
          },
          "animation": {
            "pose": "ti-special0",
            "limb": "lead",
            "path": "Taxímetro",
            "prop": "rio-taxi",
            "effect": "spark",
            "storyProp": "rio-taxi"
          },
          "storyProp": "rio-taxi",
          "storyMotion": "release"
        },
        {
          "id": "ti-bandeira",
          "name": "Bandeira Livre",
          "description": "Faz a finta de abrir passagem e avança com o ombro numa corrida curta. Um único contato encerra a entrada; a investida não atravessa o rival nem concede invulnerabilidade.",
          "type": "dash",
          "startup": 0.09,
          "active": 0.21,
          "recovery": 0.29,
          "range": 126,
          "damage": 102,
          "stun": 0.33,
          "push": 46,
          "cooldown": 1.8,
          "effect": "dash",
          "move": 355,
          "animation": {
            "pose": "ti-special1",
            "limb": "both",
            "path": "Bandeira Livre",
            "prop": "rio-taxi",
            "effect": "dash",
            "storyProp": "rio-taxi"
          },
          "storyProp": "rio-taxi",
          "storyMotion": "travel"
        },
        {
          "id": "ti-retorno",
          "name": "Retorno da Lapa",
          "description": "Recua meio passo e estende o cotovelo para cortar uma perseguição próxima. Pode errar se a distância já estiver grande; o recuo não protege contra golpes ou projéteis.",
          "type": "retreat",
          "startup": 0.065,
          "active": 0.16,
          "recovery": 0.31,
          "range": 148,
          "damage": 91,
          "stun": 0.31,
          "push": 112,
          "cooldown": 1.95,
          "effect": "smoke",
          "move": -245,
          "animation": {
            "pose": "ti-special2",
            "limb": "rear",
            "path": "Retorno da Lapa",
            "prop": "rio-taxi",
            "effect": "smoke",
            "storyProp": "rio-taxi"
          },
          "storyProp": "rio-taxi",
          "storyMotion": "withdraw"
        }
      ],
      "combos": [
        {
          "id": "ti-madrugada",
          "name": "Corrida na Madrugada",
          "sequence": [
            "light",
            "heavy",
            "special0"
          ],
          "description": "O troco e o cotovelo preparam a ficha do taxímetro, que fecha a sequência com um impulso curto.",
          "bonus": {
            "damage": 12,
            "push": 24
          }
        },
        {
          "id": "ti-bandeirada",
          "name": "Bandeirada da Lapa",
          "sequence": [
            "heavy",
            "kick",
            "special1"
          ],
          "description": "A disputa de espaço abre a Bandeira Livre para uma entrada final de ombro.",
          "bonus": {
            "damage": 14,
            "push": 20
          }
        }
      ],
      "attackStyle": "taxi",
      "defenseName": "Porta Fechada",
      "finisher": {
        "name": "A Última Bandeirada",
        "line": "Fim da linha, parceiro. O troco fica comigo.",
        "kind": "taxi"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.071,
          "active": 0.079,
          "recovery": 0.163
        },
        "heavy": {
          "startup": 0.183,
          "active": 0.099,
          "recovery": 0.251
        },
        "kick": {
          "startup": 0.114,
          "active": 0.114,
          "recovery": 0.233
        }
      },
      "super": {
        "id": "ti-super",
        "name": "Bandeirada da Última Madrugada",
        "description": "Energia completa: TI reúne sua técnica em uma sequência cinematográfica. A abertura frontal pode ser defendida.",
        "line": "Fim da linha, parceiro. O troco fica comigo.",
        "kind": "ti",
        "type": "melee",
        "effect": "spark",
        "meterCost": 100,
        "startup": 0.3,
        "active": 0.2,
        "recovery": 0.68,
        "range": 240,
        "reachY": 195,
        "damage": 260,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Bandeirada da Última Madrugada",
          "palette": [
            "#dfb23c",
            "#80bdd9"
          ],
          "style": "speed"
        },
        "storyProp": "rio-taxi"
      },
      "entrance": {
        "name": "Um táxi de tamanho real estaciona ao fundo sem entrar na faixa.",
        "line": "A corrida chegou, parceiro.",
        "style": "speed",
        "gesture": "TI sai pela porta do motorista e a fecha antes de caminhar à linha.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Um táxi de tamanho real estaciona ao fundo sem entrar na faixa.",
            "pose": "arrive",
            "prop": "rio-taxi",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "TI sai pela porta do motorista e a fecha antes de caminhar à linha.",
            "pose": "warmup",
            "prop": "rio-taxi",
            "effect": "none"
          },
          {
            "at": 2.25,
            "action": "Ajeita a manga, guarda a chave e gira uma ficha de taxímetro.",
            "pose": "signature",
            "prop": "rio-taxi",
            "effect": "spark"
          },
          {
            "at": 3.25,
            "action": "A corrida chegou, parceiro.",
            "pose": "ready",
            "prop": "rio-taxi",
            "effect": "none"
          }
        ]
      },
      "visual": {
        "body": "athletic",
        "silhouette": "Taxista brasileiro de meia-idade, pele parda, bigode curto e cabelo grisalho nas laterais. Usa camisa amarela de manga curta, jaqueta azul leve aberta, calça azul-marinho, sapatos gastos e luvas sem dedos. O boné traz um pequeno símbolo de táxi inventado; suas mãos ficam sempre à vista durante as fintas.",
        "outfit": "Taxista brasileiro de meia-idade, pele parda, bigode curto e cabelo grisalho nas laterais. Usa camisa amarela de manga curta, jaqueta azul leve aberta, calça azul-marinho, sapatos gastos e luvas sem dedos. O boné traz um pequeno símbolo de táxi inventado; suas mãos ficam sempre à vista durante as fintas.",
        "prop": "rio-taxi",
        "stance": "Troco Curto",
        "palette": [
          "#dfb23c",
          "#80bdd9",
          "#a96d48",
          "#38302a"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "TI recolhe a chave e sinaliza ao táxi com dois toques na palma.",
        "effect": "spark",
        "line": "Fim da linha, parceiro. O troco fica comigo."
      },
      "defeat": {
        "pose": "kneel",
        "action": "TI protege o taxímetro e se apoia numa perna antes de levantar.",
        "effect": "none"
      },
      "animation": {
        "stance": "Palmas curtas, cotoveladas e chutes de calçada criam espaço para uma ficha rápida do taxímetro. Alterna uma entrada curta de ombro com recuo e cotovelo para convidar a perseguição. Não recebe proteção automática ao se mover e sofre quando o rival ocupa o fim de seu trajeto.",
        "light": {
          "limb": "lead",
          "path": "Troco Curto",
          "prop": "rio-taxi"
        },
        "heavy": {
          "limb": "rear",
          "path": "Cotovelo do Volante",
          "prop": "rio-taxi"
        },
        "kick": {
          "limb": "leg",
          "path": "Chute de Calçada",
          "prop": "rio-taxi"
        },
        "guard": {
          "prop": "rio-taxi",
          "pose": "ti-guard"
        }
      }
    },
    "brick": {
      "normalScale": {
        "damage": 1.135,
        "speed": 0.848,
        "range": 0.946
      },
      "normalNames": {
        "light": "Teste de Ombreira",
        "heavy": "Martelo da Linha",
        "kick": "Punt de Aço"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.104,
          "active": 0.067,
          "recovery": 0.191,
          "effect": "dash"
        },
        "heavy": {
          "startup": 0.238,
          "active": 0.097,
          "recovery": 0.326,
          "effect": "dash"
        },
        "kick": {
          "startup": 0.161,
          "active": 0.103,
          "recovery": 0.279,
          "effect": "dash"
        }
      },
      "specials": [
        {
          "name": "Quarta Descida",
          "type": "dash",
          "description": "Avança com o ombro protegido e derruba no contato. O início lento pode ser saltado; agarrões vencem a armadura.",
          "startup": 0.25,
          "active": 0.31,
          "recovery": 0.44,
          "range": 105,
          "damage": 145,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.6,
          "effect": "dash",
          "move": 285,
          "armor": 0.28,
          "launch": 130,
          "id": "brick-0",
          "animation": {
            "pose": "brick-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "shoulderpads",
            "effect": "dash",
            "storyProp": "field-line"
          },
          "storyProp": "field-line",
          "storyMotion": "travel"
        },
        {
          "name": "Tackle de Linha",
          "type": "throw",
          "description": "Fecha os dois braços e gira o rival até o gramado; só alcança alvos de pé e deixa grande abertura se errar.",
          "startup": 0.17,
          "active": 0.08,
          "recovery": 0.49,
          "range": 84,
          "damage": 162,
          "stun": 0.42,
          "push": 50,
          "cooldown": 2.4,
          "effect": "beast",
          "swap": true,
          "id": "brick-1",
          "animation": {
            "pose": "brick-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "shoulderpads",
            "effect": "beast",
            "storyProp": "shoulderpads"
          },
          "storyProp": "shoulderpads",
          "storyMotion": "close"
        },
        {
          "name": "Parede Defensiva",
          "type": "counter",
          "description": "Planta as ombreiras para responder ao primeiro golpe frontal. Rasteiras e agarrões contornam a parede.",
          "startup": 0.055,
          "active": 0.3,
          "recovery": 0.42,
          "range": 125,
          "damage": 120,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.3,
          "effect": "block",
          "counterWindow": 0.3,
          "counterDamage": 120,
          "id": "brick-2",
          "animation": {
            "pose": "brick-special2",
            "limb": "both",
            "path": "rising",
            "prop": "shoulderpads",
            "effect": "block",
            "storyProp": "field-line"
          },
          "storyProp": "field-line",
          "storyMotion": "parry"
        }
      ],
      "combos": [
        {
          "id": "brick-combo0",
          "name": "Linha de Frente",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Teste de Ombreira → Martelo da Linha → Punt de Aço. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 8,
            "push": 12
          }
        },
        {
          "id": "brick-combo1",
          "name": "Sem Recuar",
          "sequence": [
            "heavy",
            "kick",
            "special0"
          ],
          "description": "Martelo da Linha → Punt de Aço → Quarta Descida. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 10,
            "push": 12
          }
        }
      ],
      "attackStyle": "brick",
      "defenseName": "Linha Intransponível",
      "finisher": {
        "name": "Última Jardada",
        "line": "O campo ainda é nosso.",
        "kind": "brick"
      },
      "super": {
        "id": "brick-super",
        "name": "Prorrogação de Aço",
        "description": "Com a energia completa, Brick concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "O campo ainda é nosso.",
        "kind": "brick",
        "type": "melee",
        "effect": "dash",
        "meterCost": 100,
        "startup": 0.27,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 284,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Prorrogação de Aço",
          "palette": [
            "#244b80",
            "#f5e3c1"
          ],
          "style": "power"
        },
        "animation": {
          "pose": "brick-super",
          "prop": "shoulderpads",
          "effect": "dash"
        },
        "storyProp": "field-line"
      },
      "entrance": {
        "name": "O capacete rola até a linha.",
        "line": "Ainda temos uma jogada.",
        "style": "power",
        "gesture": "Brick recolhe o capacete e toca o chão.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "O capacete rola até a linha.",
            "pose": "arrive",
            "prop": "shoulderpads",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Brick recolhe o capacete e toca o chão.",
            "pose": "warmup",
            "prop": "shoulderpads",
            "effect": "dash"
          },
          {
            "at": 2.25,
            "action": "Bate duas vezes nas ombreiras e se põe em três apoios.",
            "pose": "signature",
            "prop": "shoulderpads",
            "effect": "dash"
          },
          {
            "at": 3.25,
            "action": "Ainda temos uma jogada.",
            "pose": "ready",
            "prop": "shoulderpads",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Teste de Ombreira",
        "light": {
          "limb": "lead",
          "path": "shoulder-check",
          "prop": "shoulderpads"
        },
        "heavy": {
          "limb": "rear",
          "path": "double-hammer",
          "prop": "shoulderpads"
        },
        "kick": {
          "limb": "leg",
          "path": "punt",
          "prop": "shoulderpads"
        },
        "guard": {
          "prop": "shoulderpads",
          "pose": "brick-guard"
        }
      },
      "movement": {
        "walk": 0.79,
        "backwalk": 0.57,
        "jump": 0.85
      },
      "passive": null,
      "visual": {
        "body": "tank",
        "silhouette": "Enorme, ombreiras azul-marinho lascadas, uniforme sem marca, capacete preso ao cinto e joelheiras de couro. Pescoço curto e braços largos desenham uma silhueta triangular.",
        "outfit": "Enorme, ombreiras azul-marinho lascadas, uniforme sem marca, capacete preso ao cinto e joelheiras de couro. Pescoço curto e braços largos desenham uma silhueta triangular.",
        "prop": "shoulderpads",
        "stance": "Teste de Ombreira",
        "palette": [
          "#244b80",
          "#f5e3c1",
          "#c78e6b",
          "#3a2a29"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Bate duas vezes nas ombreiras e se põe em três apoios.",
        "effect": "dash",
        "line": "O campo ainda é nosso."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Brick baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "steele": {
      "normalScale": {
        "damage": 1.08,
        "speed": 0.916,
        "range": 1.062
      },
      "normalNames": {
        "light": "Cotovelo de Serviço",
        "heavy": "Coronha de Retorno",
        "kick": "Bota de Contenção"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.098,
          "active": 0.072,
          "recovery": 0.184,
          "effect": "spark"
        },
        "heavy": {
          "startup": 0.227,
          "active": 0.103,
          "recovery": 0.314,
          "effect": "spark"
        },
        "kick": {
          "startup": 0.153,
          "active": 0.11,
          "recovery": 0.27,
          "effect": "spark"
        }
      },
      "specials": [
        {
          "name": "Rajada de Steele",
          "type": "projectile",
          "description": "Arma a carabina antes de três disparos curtos. A preparação é interrompível e cada disparo é defendido separadamente.",
          "startup": 0.34,
          "active": 0.06,
          "recovery": 0.45,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.6,
          "effect": "spark",
          "projectile": {
            "kind": "bullet",
            "y": 58,
            "vx": 620,
            "radius": 9,
            "damage": 37,
            "stun": 0.15,
            "push": 17,
            "life": 1.1,
            "delay": 0.34,
            "count": 3,
            "stagger": 0.115
          },
          "id": "steele-0",
          "animation": {
            "pose": "steele-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "rifle",
            "effect": "spark",
            "storyProp": "rifle"
          },
          "storyProp": "rifle",
          "storyMotion": "release"
        },
        {
          "name": "Cotovelo Hidráulico",
          "type": "melee",
          "description": "Carrega o braço mecânico num golpe curto e pesado; bom para punir erros, perigoso quando defendido.",
          "startup": 0.25,
          "active": 0.12,
          "recovery": 0.43,
          "range": 142,
          "damage": 142,
          "stun": 0.34,
          "push": 95,
          "cooldown": 1.8,
          "effect": "steam",
          "id": "steele-1",
          "animation": {
            "pose": "steele-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "rifle",
            "effect": "steam",
            "storyProp": "piston"
          },
          "storyProp": "piston",
          "storyMotion": "strike"
        },
        {
          "name": "Perímetro de Pulso",
          "type": "trap",
          "description": "Instala um único sensor elétrico de curto alcance. O pulso atrasado protege a linha, mas o rival pode saltá-lo.",
          "startup": 0.25,
          "active": 0.06,
          "recovery": 0.35,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.3,
          "effect": "electric",
          "projectile": {
            "kind": "sensor",
            "y": 12,
            "vx": 0,
            "radius": 34,
            "damage": 82,
            "stun": 0.29,
            "push": 20,
            "life": 2.3,
            "delay": 0.7,
            "anchor": "enemy",
            "maxRange": 235,
            "unique": true,
            "hitHeight": "low",
            "root": 0.3
          },
          "id": "steele-2",
          "animation": {
            "pose": "steele-special2",
            "limb": "both",
            "path": "rising",
            "prop": "rifle",
            "effect": "electric",
            "storyProp": "sensor"
          },
          "storyProp": "sensor",
          "storyMotion": "plant"
        }
      ],
      "combos": [
        {
          "id": "steele-combo0",
          "name": "Procedimento de Campo",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Cotovelo de Serviço → Coronha de Retorno → Bota de Contenção. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 9,
            "push": 16
          }
        },
        {
          "id": "steele-combo1",
          "name": "Linha de Extração",
          "sequence": [
            "light",
            "heavy",
            "special1"
          ],
          "description": "Cotovelo de Serviço → Coronha de Retorno → Cotovelo Hidráulico. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 11,
            "push": 16
          }
        }
      ],
      "attackStyle": "steele",
      "defenseName": "Antebraço Balístico",
      "finisher": {
        "name": "Operação Último Eco",
        "line": "Missão encerrada. Sem baixas de memória.",
        "kind": "steele"
      },
      "super": {
        "id": "steele-super",
        "name": "Código Zero",
        "description": "Com a energia completa, Major Steele concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Missão encerrada. Sem baixas de memória.",
        "kind": "steele",
        "type": "melee",
        "effect": "spark",
        "meterCost": 100,
        "startup": 0.29500000000000004,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 272,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Código Zero",
          "palette": [
            "#244b80",
            "#f5e3c1"
          ],
          "style": "machine"
        },
        "animation": {
          "pose": "steele-super",
          "prop": "rifle",
          "effect": "spark"
        },
        "storyProp": "rifle"
      },
      "entrance": {
        "name": "Uma luz no braço mecânico sai do vermelho.",
        "line": "Agora, por minha conta.",
        "style": "machine",
        "gesture": "Steele verifica o mecanismo e trava a carabina.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Uma luz no braço mecânico sai do vermelho.",
            "pose": "arrive",
            "prop": "rifle",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Steele verifica o mecanismo e trava a carabina.",
            "pose": "warmup",
            "prop": "rifle",
            "effect": "spark"
          },
          {
            "at": 2.25,
            "action": "Descarta o carregador de treino e fecha a mão de metal.",
            "pose": "signature",
            "prop": "rifle",
            "effect": "spark"
          },
          {
            "at": 3.25,
            "action": "Agora, por minha conta.",
            "pose": "ready",
            "prop": "rifle",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Cotovelo de Serviço",
        "light": {
          "limb": "lead",
          "path": "elbow",
          "prop": "rifle"
        },
        "heavy": {
          "limb": "rear",
          "path": "rifle-butt",
          "prop": "rifle"
        },
        "kick": {
          "limb": "leg",
          "path": "stomp",
          "prop": "rifle"
        },
        "guard": {
          "prop": "rifle",
          "pose": "steele-guard"
        }
      },
      "movement": {
        "walk": 0.96,
        "backwalk": 0.63,
        "jump": 0.96
      },
      "passive": null,
      "visual": {
        "body": "tank",
        "silhouette": "Veterano de cabelo grisalho curto, colete gasto, braço mecânico pesado e carabina presa ao suporte. Insígnias e unidade são inteiramente fictícias.",
        "outfit": "Veterano de cabelo grisalho curto, colete gasto, braço mecânico pesado e carabina presa ao suporte. Insígnias e unidade são inteiramente fictícias.",
        "prop": "rifle",
        "stance": "Cotovelo de Serviço",
        "palette": [
          "#244b80",
          "#f5e3c1",
          "#c78e6b",
          "#3a2a29"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Descarta o carregador de treino e fecha a mão de metal.",
        "effect": "spark",
        "line": "Missão encerrada. Sem baixas de memória."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Major Steele baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "voltx": {
      "normalScale": {
        "damage": 1.08,
        "speed": 1.12,
        "range": 1.004
      },
      "normalNames": {
        "light": "Pistão Curto",
        "heavy": "Chave de Impacto",
        "kick": "Roda Reversa"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.078,
          "active": 0.077,
          "recovery": 0.159,
          "effect": "electric"
        },
        "heavy": {
          "startup": 0.192,
          "active": 0.109,
          "recovery": 0.274,
          "effect": "electric"
        },
        "kick": {
          "startup": 0.127,
          "active": 0.117,
          "recovery": 0.239,
          "effect": "electric"
        }
      },
      "specials": [
        {
          "name": "Modo Plaid",
          "type": "dash",
          "description": "Recolhe os pés em rodas e dispara numa investida elétrica. O superaquecimento atrasa o próximo especial.",
          "startup": 0.15,
          "active": 0.29,
          "recovery": 0.46,
          "range": 101,
          "damage": 132,
          "stun": 0.34,
          "push": 42,
          "cooldown": 3,
          "effect": "electric",
          "move": 560,
          "overheat": 1.1,
          "id": "voltx-0",
          "animation": {
            "pose": "voltx-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "wheel",
            "effect": "electric",
            "storyProp": "wheel"
          },
          "storyProp": "wheel",
          "storyMotion": "travel"
        },
        {
          "name": "Carga de Indução",
          "type": "projectile",
          "description": "Solta uma bobina de energia lenta; pode acompanhar a aproximação, mas o início expõe o núcleo.",
          "startup": 0.26,
          "active": 0.06,
          "recovery": 0.32,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "electric",
          "projectile": {
            "kind": "coil",
            "y": 58,
            "vx": 205,
            "radius": 30,
            "damage": 89,
            "stun": 0.32,
            "push": 44,
            "life": 3,
            "delay": 0.26
          },
          "id": "voltx-1",
          "animation": {
            "pose": "voltx-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "wheel",
            "effect": "electric",
            "storyProp": "coil"
          },
          "storyProp": "coil",
          "storyMotion": "release"
        },
        {
          "name": "Elevador de Torque",
          "type": "launcher",
          "description": "Ergue o rival com a ferramenta do antebraço; alcança saltos baixos e falha fora da ponta da chave.",
          "startup": 0.15,
          "active": 0.16,
          "recovery": 0.44,
          "range": 129,
          "damage": 111,
          "stun": 0.39,
          "push": 31,
          "cooldown": 1.8,
          "effect": "steam",
          "reachY": 198,
          "launch": 300,
          "id": "voltx-2",
          "animation": {
            "pose": "voltx-special2",
            "limb": "both",
            "path": "rising",
            "prop": "wheel",
            "effect": "steam",
            "storyProp": "wheel"
          },
          "storyProp": "wheel",
          "storyMotion": "rise"
        }
      ],
      "combos": [
        {
          "id": "voltx-combo0",
          "name": "Circuito Fechado",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Pistão Curto → Chave de Impacto → Roda Reversa. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 10,
            "push": 20
          }
        },
        {
          "id": "voltx-combo1",
          "name": "Zero a Cem",
          "sequence": [
            "light",
            "kick",
            "special0"
          ],
          "description": "Pistão Curto → Roda Reversa → Modo Plaid. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 12,
            "push": 20
          }
        }
      ],
      "attackStyle": "voltx",
      "defenseName": "Chassi Fechado",
      "finisher": {
        "name": "Horizonte de Cobalto",
        "line": "Memória preservada. Caminho livre.",
        "kind": "voltx"
      },
      "super": {
        "id": "voltx-super",
        "name": "Sobrecarga Autônoma",
        "description": "Com a energia completa, VOLT-X concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Memória preservada. Caminho livre.",
        "kind": "voltx",
        "type": "melee",
        "effect": "electric",
        "meterCost": 100,
        "startup": 0.32,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 272,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Sobrecarga Autônoma",
          "palette": [
            "#244b80",
            "#f5e3c1"
          ],
          "style": "machine"
        },
        "animation": {
          "pose": "voltx-super",
          "prop": "wheel",
          "effect": "electric"
        },
        "storyProp": "wheel"
      },
      "entrance": {
        "name": "Dois faróis iluminam o chão antes do chassi.",
        "line": "Nova rota calculada.",
        "style": "machine",
        "gesture": "As rodas se abrem e tornam-se botas.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Dois faróis iluminam o chão antes do chassi.",
            "pose": "arrive",
            "prop": "wheel",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "As rodas se abrem e tornam-se botas.",
            "pose": "warmup",
            "prop": "wheel",
            "effect": "electric"
          },
          {
            "at": 2.25,
            "action": "O núcleo azul acende, com vapor saindo das juntas.",
            "pose": "signature",
            "prop": "wheel",
            "effect": "electric"
          },
          {
            "at": 3.25,
            "action": "Nova rota calculada.",
            "pose": "ready",
            "prop": "wheel",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Pistão Curto",
        "light": {
          "limb": "lead",
          "path": "piston",
          "prop": "wheel"
        },
        "heavy": {
          "limb": "rear",
          "path": "tool-uppercut",
          "prop": "wheel"
        },
        "kick": {
          "limb": "leg",
          "path": "wheel-sweep",
          "prop": "wheel"
        },
        "guard": {
          "prop": "wheel",
          "pose": "voltx-guard"
        }
      },
      "movement": {
        "walk": 1.08,
        "backwalk": 0.76,
        "jump": 1.02
      },
      "passive": null,
      "visual": {
        "body": "construct",
        "silhouette": "Chassi automotivo branco, juntas azul-elétrico, roda dobrada em cada panturrilha e mãos que revelam ferramentas. Faróis estreitos formam os olhos.",
        "outfit": "Chassi automotivo branco, juntas azul-elétrico, roda dobrada em cada panturrilha e mãos que revelam ferramentas. Faróis estreitos formam os olhos.",
        "prop": "wheel",
        "stance": "Pistão Curto",
        "palette": [
          "#244b80",
          "#f5e3c1",
          "#c78e6b",
          "#3a2a29"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "O núcleo azul acende, com vapor saindo das juntas.",
        "effect": "electric",
        "line": "Memória preservada. Caminho livre."
      },
      "defeat": {
        "pose": "crumble",
        "action": "VOLT-X baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "jack": {
      "normalScale": {
        "damage": 1.025,
        "speed": 1.12,
        "range": 0.946
      },
      "normalNames": {
        "light": "Jab de Esquina",
        "heavy": "Cruzado do Sino",
        "kick": "Passo de Distância"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.079,
          "active": 0.082,
          "recovery": 0.161,
          "effect": "spark"
        },
        "heavy": {
          "startup": 0.193,
          "active": 0.115,
          "recovery": 0.276,
          "effect": "spark"
        },
        "kick": {
          "startup": 0.128,
          "active": 0.124,
          "recovery": 0.241,
          "effect": "spark"
        }
      },
      "specials": [
        {
          "name": "Último Assalto",
          "type": "melee",
          "description": "Encaixa três golpes no corpo e um uppercut curto. Precisa ficar colado; a defesa interrompe o cancelamento seguinte.",
          "startup": 0.095,
          "active": 0.44,
          "recovery": 0.29,
          "range": 105,
          "damage": 31,
          "stun": 0.17,
          "push": 12,
          "cooldown": 2.15,
          "effect": "spark",
          "multi": 4,
          "launch": 135,
          "id": "jack-0",
          "animation": {
            "pose": "jack-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "boxing-gloves",
            "effect": "spark",
            "storyProp": "boxing-gloves"
          },
          "storyProp": "boxing-gloves",
          "storyMotion": "strike"
        },
        {
          "name": "Sombra de Ombro",
          "type": "counter",
          "description": "Inclina o corpo para responder num cruzado veloz. A janela breve recompensa a leitura e perde para rasteiras.",
          "startup": 0.025,
          "active": 0.17,
          "recovery": 0.23,
          "range": 124,
          "damage": 91,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.3,
          "effect": "dash",
          "counterWindow": 0.17,
          "counterDamage": 91,
          "invulnerable": 0.08,
          "id": "jack-1",
          "animation": {
            "pose": "jack-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "boxing-gloves",
            "effect": "dash",
            "storyProp": "boxing-gloves"
          },
          "storyProp": "boxing-gloves",
          "storyMotion": "parry"
        },
        {
          "name": "Passada do Beco",
          "type": "dash",
          "description": "Dois passos rasantes fecham o espaço num golpe de fígado. Não possui armadura e é vulnerável à interceptação.",
          "startup": 0.08,
          "active": 0.16,
          "recovery": 0.22,
          "range": 97,
          "damage": 86,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.6,
          "effect": "dash",
          "move": 410,
          "id": "jack-2",
          "animation": {
            "pose": "jack-special2",
            "limb": "both",
            "path": "rising",
            "prop": "boxing-gloves",
            "effect": "dash",
            "storyProp": "boxing-gloves"
          },
          "storyProp": "boxing-gloves",
          "storyMotion": "travel"
        }
      ],
      "combos": [
        {
          "id": "jack-combo0",
          "name": "Corpo e Sino",
          "sequence": [
            "light",
            "light",
            "heavy"
          ],
          "description": "Jab de Esquina → Jab de Esquina → Cruzado do Sino. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 11,
            "push": 24
          }
        },
        {
          "id": "jack-combo1",
          "name": "Esquina Aberta",
          "sequence": [
            "light",
            "heavy",
            "special0"
          ],
          "description": "Jab de Esquina → Cruzado do Sino → Último Assalto. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 13,
            "push": 24
          }
        }
      ],
      "attackStyle": "jack",
      "defenseName": "Esquiva da Esquina",
      "finisher": {
        "name": "O Sino Ainda Toca",
        "line": "Mais um assalto. Ainda de pé.",
        "kind": "jack"
      },
      "super": {
        "id": "jack-super",
        "name": "Décimo Segundo Assalto",
        "description": "Com a energia completa, Jack Bell concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Mais um assalto. Ainda de pé.",
        "kind": "jack",
        "type": "melee",
        "effect": "spark",
        "meterCost": 100,
        "startup": 0.34500000000000003,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 260,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Décimo Segundo Assalto",
          "palette": [
            "#244b80",
            "#f5e3c1"
          ],
          "style": "speed"
        },
        "animation": {
          "pose": "jack-super",
          "prop": "boxing-gloves",
          "effect": "spark"
        },
        "storyProp": "boxing-gloves"
      },
      "entrance": {
        "name": "Jack entra pulando corda.",
        "line": "Não me conte antes do sino.",
        "style": "speed",
        "gesture": "Guarda a corda, ajeita as luvas e solta o pescoço.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Jack entra pulando corda.",
            "pose": "arrive",
            "prop": "boxing-gloves",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Guarda a corda, ajeita as luvas e solta o pescoço.",
            "pose": "warmup",
            "prop": "boxing-gloves",
            "effect": "spark"
          },
          {
            "at": 2.25,
            "action": "Treina três jabs, uma esquiva e um uppercut no ar.",
            "pose": "signature",
            "prop": "boxing-gloves",
            "effect": "spark"
          },
          {
            "at": 3.25,
            "action": "Não me conte antes do sino.",
            "pose": "ready",
            "prop": "boxing-gloves",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Jab de Esquina",
        "light": {
          "limb": "lead",
          "path": "boxing-jab",
          "prop": "boxing-gloves"
        },
        "heavy": {
          "limb": "rear",
          "path": "cross",
          "prop": "boxing-gloves"
        },
        "kick": {
          "limb": "leg",
          "path": "step-kick",
          "prop": "boxing-gloves"
        },
        "guard": {
          "prop": "boxing-gloves",
          "pose": "jack-guard"
        }
      },
      "movement": {
        "walk": 1.18,
        "backwalk": 0.88,
        "jump": 1
      },
      "passive": null,
      "visual": {
        "body": "athletic",
        "silhouette": "Nariz marcado, moletom sem mangas, luvas marrons antigas e tênis gastos. Postura leve com cabeça móvel e ombro dianteiro alto.",
        "outfit": "Nariz marcado, moletom sem mangas, luvas marrons antigas e tênis gastos. Postura leve com cabeça móvel e ombro dianteiro alto.",
        "prop": "boxing-gloves",
        "stance": "Jab de Esquina",
        "palette": [
          "#244b80",
          "#f5e3c1",
          "#c78e6b",
          "#3a2a29"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Treina três jabs, uma esquiva e um uppercut no ar.",
        "effect": "spark",
        "line": "Mais um assalto. Ainda de pé."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Jack Bell baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "homer": {
      "normalScale": {
        "damage": 1.08,
        "speed": 0.916,
        "range": 1.12
      },
      "normalNames": {
        "light": "Toque de Taco",
        "heavy": "Rebatida de Ombro",
        "kick": "Deslize da Base"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.101,
          "active": 0.087,
          "recovery": 0.19,
          "effect": "spark"
        },
        "heavy": {
          "startup": 0.23,
          "active": 0.121,
          "recovery": 0.32,
          "effect": "spark"
        },
        "kick": {
          "startup": 0.156,
          "active": 0.103,
          "recovery": 0.276,
          "effect": "spark"
        }
      },
      "specials": [
        {
          "name": "Home Run",
          "type": "projectile",
          "description": "Rebate uma bola energizada em linha alta. A preparação longa deixa a distância curta descoberta.",
          "startup": 0.26,
          "active": 0.06,
          "recovery": 0.41,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "spark",
          "projectile": {
            "kind": "baseball",
            "y": 84,
            "vx": 480,
            "radius": 15,
            "damage": 121,
            "stun": 0.34,
            "push": 78,
            "life": 1.7,
            "delay": 0.26
          },
          "id": "homer-0",
          "animation": {
            "pose": "homer-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "baseball-bat",
            "effect": "spark",
            "storyProp": "baseball"
          },
          "storyProp": "baseball",
          "storyMotion": "release"
        },
        {
          "name": "Rebote de Nona Entrada",
          "type": "counter",
          "description": "Prepara o taco para devolver projéteis refletíveis. Rasteiras, agarrões e feixes contínuos não são rebatidos.",
          "startup": 0.055,
          "active": 0.2,
          "recovery": 0.38,
          "range": 175,
          "damage": 105,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.3,
          "effect": "spark",
          "counterWindow": 0.2,
          "counterDamage": 105,
          "reflect": true,
          "id": "homer-1",
          "animation": {
            "pose": "homer-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "baseball-bat",
            "effect": "spark",
            "storyProp": "baseball-bat"
          },
          "storyProp": "baseball-bat",
          "storyMotion": "parry"
        },
        {
          "name": "Base Roubada",
          "type": "melee",
          "description": "Escorrega com a perna e a ponta do taco em uma rasteira comprida. Saltos passam por cima.",
          "startup": 0.19,
          "active": 0.17,
          "recovery": 0.38,
          "range": 188,
          "damage": 101,
          "stun": 0.34,
          "push": 65,
          "cooldown": 1.8,
          "effect": "dash",
          "hitHeight": "low",
          "ground": true,
          "id": "homer-2",
          "animation": {
            "pose": "homer-special2",
            "limb": "both",
            "path": "rising",
            "prop": "baseball-bat",
            "effect": "dash",
            "storyProp": "baseball-bat"
          },
          "storyProp": "baseball-bat",
          "storyMotion": "strike"
        }
      ],
      "combos": [
        {
          "id": "homer-combo0",
          "name": "Duas Bases",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Toque de Taco → Rebatida de Ombro → Deslize da Base. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 12,
            "push": 28
          }
        },
        {
          "id": "homer-combo1",
          "name": "Entrada Extra",
          "sequence": [
            "light",
            "heavy",
            "special2"
          ],
          "description": "Toque de Taco → Rebatida de Ombro → Base Roubada. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 14,
            "push": 28
          }
        }
      ],
      "attackStyle": "homer",
      "defenseName": "Taco na Linha",
      "finisher": {
        "name": "Fim de Temporada",
        "line": "Essa bola leva uma lembrança.",
        "kind": "homer"
      },
      "super": {
        "id": "homer-super",
        "name": "Além do Placar",
        "description": "Com a energia completa, Homer concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Essa bola leva uma lembrança.",
        "kind": "homer",
        "type": "melee",
        "effect": "spark",
        "meterCost": 100,
        "startup": 0.27,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 272,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Além do Placar",
          "palette": [
            "#244b80",
            "#f5e3c1"
          ],
          "style": "weapon"
        },
        "animation": {
          "pose": "homer-super",
          "prop": "baseball-bat",
          "effect": "spark"
        },
        "storyProp": "baseball"
      },
      "entrance": {
        "name": "Homer apanha uma bola de sua luva.",
        "line": "Pode mandar a próxima.",
        "style": "weapon",
        "gesture": "Lança, gira o taco e recolhe a bola sem olhar.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Homer apanha uma bola de sua luva.",
            "pose": "arrive",
            "prop": "baseball-bat",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Lança, gira o taco e recolhe a bola sem olhar.",
            "pose": "warmup",
            "prop": "baseball-bat",
            "effect": "spark"
          },
          {
            "at": 2.25,
            "action": "Desenha uma linha na poeira com a ponta do taco.",
            "pose": "signature",
            "prop": "baseball-bat",
            "effect": "spark"
          },
          {
            "at": 3.25,
            "action": "Pode mandar a próxima.",
            "pose": "ready",
            "prop": "baseball-bat",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Toque de Taco",
        "light": {
          "limb": "lead",
          "path": "bat-tap",
          "prop": "baseball-bat"
        },
        "heavy": {
          "limb": "rear",
          "path": "bat-swing",
          "prop": "baseball-bat"
        },
        "kick": {
          "limb": "leg",
          "path": "base-slide",
          "prop": "baseball-bat"
        },
        "guard": {
          "prop": "baseball-bat",
          "pose": "homer-guard"
        }
      },
      "movement": {
        "walk": 0.96,
        "backwalk": 0.62,
        "jump": 0.96
      },
      "passive": null,
      "visual": {
        "body": "athletic",
        "silhouette": "Uniforme creme com faixa vermelha inventada, boné virado, luva no cinto e taco de madeira marcado. Ombros giram antes das rebatidas.",
        "outfit": "Uniforme creme com faixa vermelha inventada, boné virado, luva no cinto e taco de madeira marcado. Ombros giram antes das rebatidas.",
        "prop": "baseball-bat",
        "stance": "Toque de Taco",
        "palette": [
          "#244b80",
          "#f5e3c1",
          "#c78e6b",
          "#3a2a29"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Desenha uma linha na poeira com a ponta do taco.",
        "effect": "spark",
        "line": "Essa bola leva uma lembrança."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Homer baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "gloria": {
      "normalScale": {
        "damage": 1.08,
        "speed": 1.052,
        "range": 1.004
      },
      "normalNames": {
        "light": "Sorriso Relâmpago",
        "heavy": "Punho de Audiência",
        "kick": "Chute de Manchete"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.088,
          "active": 0.092,
          "recovery": 0.174,
          "effect": "spark"
        },
        "heavy": {
          "startup": 0.207,
          "active": 0.097,
          "recovery": 0.294,
          "effect": "spark"
        },
        "kick": {
          "startup": 0.139,
          "active": 0.11,
          "recovery": 0.256,
          "effect": "spark"
        }
      },
      "specials": [
        {
          "name": "Horário Nobre",
          "type": "teleport",
          "description": "Sobe em arco e mergulha com o punho. A pose final aumenta a recuperação; não é invulnerável durante a subida.",
          "startup": 0.28,
          "active": 0.24,
          "recovery": 0.53,
          "range": 118,
          "damage": 140,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "spark",
          "teleport": {
            "side": "front",
            "distance": 120,
            "height": 155,
            "vy": -330
          },
          "reachY": 180,
          "launch": 170,
          "id": "gloria-0",
          "animation": {
            "pose": "gloria-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "cape",
            "effect": "spark",
            "storyProp": "studio-frame"
          },
          "storyProp": "studio-frame",
          "storyMotion": "arrival"
        },
        {
          "name": "Flash de Estúdio",
          "type": "projectile",
          "description": "Dispara um arco luminoso curto a partir do peito. A luz denuncia o momento do ataque.",
          "startup": 0.21,
          "active": 0.06,
          "recovery": 0.33,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "spark",
          "projectile": {
            "kind": "flash",
            "y": 58,
            "vx": 420,
            "radius": 27,
            "damage": 97,
            "stun": 0.3,
            "push": 38,
            "life": 1.05,
            "delay": 0.21
          },
          "id": "gloria-1",
          "animation": {
            "pose": "gloria-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "cape",
            "effect": "spark",
            "storyProp": "camera-flash"
          },
          "storyProp": "camera-flash",
          "storyMotion": "release"
        },
        {
          "name": "Capa de Abertura",
          "type": "dash",
          "description": "Gira a capa num avanço de alcance médio. Possui dois contatos, ambos defendíveis.",
          "startup": 0.12,
          "active": 0.3,
          "recovery": 0.31,
          "range": 123,
          "damage": 46,
          "stun": 0.34,
          "push": 20,
          "cooldown": 1.9,
          "effect": "spin",
          "move": 260,
          "multi": 2,
          "id": "gloria-2",
          "animation": {
            "pose": "gloria-special2",
            "limb": "both",
            "path": "rising",
            "prop": "cape",
            "effect": "spin",
            "storyProp": "cape"
          },
          "storyProp": "cape",
          "storyMotion": "travel"
        }
      ],
      "combos": [
        {
          "id": "gloria-combo0",
          "name": "Intervalo Comercial",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Sorriso Relâmpago → Punho de Audiência → Chute de Manchete. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 13,
            "push": 12
          }
        },
        {
          "id": "gloria-combo1",
          "name": "Edição Extra",
          "sequence": [
            "light",
            "kick",
            "special2"
          ],
          "description": "Sorriso Relâmpago → Chute de Manchete → Capa de Abertura. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 15,
            "push": 12
          }
        }
      ],
      "attackStyle": "gloria",
      "defenseName": "Capa de Estúdio",
      "finisher": {
        "name": "Em Rede Nacional",
        "line": "Agora eu escolho o final.",
        "kind": "gloria"
      },
      "super": {
        "id": "gloria-super",
        "name": "Última Transmissão",
        "description": "Com a energia completa, Capitão Glória concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Agora eu escolho o final.",
        "kind": "gloria",
        "type": "melee",
        "effect": "spark",
        "meterCost": 100,
        "startup": 0.29500000000000004,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 272,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Última Transmissão",
          "palette": [
            "#244b80",
            "#f5e3c1"
          ],
          "style": "aerial"
        },
        "animation": {
          "pose": "gloria-super",
          "prop": "cape",
          "effect": "spark"
        },
        "storyProp": "studio-frame"
      },
      "entrance": {
        "name": "Um foco de luz segue a capa até o centro.",
        "line": "Ao vivo, pela última vez.",
        "style": "aerial",
        "gesture": "Ele ergue o queixo e ensaia o sorriso para uma câmera vazia.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Um foco de luz segue a capa até o centro.",
            "pose": "arrive",
            "prop": "cape",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Ele ergue o queixo e ensaia o sorriso para uma câmera vazia.",
            "pose": "warmup",
            "prop": "cape",
            "effect": "spark"
          },
          {
            "at": 2.25,
            "action": "Sobe um palmo e pousa numa pose de capa aberta.",
            "pose": "signature",
            "prop": "cape",
            "effect": "spark"
          },
          {
            "at": 3.25,
            "action": "Ao vivo, pela última vez.",
            "pose": "ready",
            "prop": "cape",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Sorriso Relâmpago",
        "light": {
          "limb": "lead",
          "path": "hero-jab",
          "prop": "cape"
        },
        "heavy": {
          "limb": "rear",
          "path": "diving-fist",
          "prop": "cape"
        },
        "kick": {
          "limb": "leg",
          "path": "high-side",
          "prop": "cape"
        },
        "guard": {
          "prop": "cape",
          "pose": "gloria-guard"
        }
      },
      "movement": {
        "walk": 1.02,
        "backwalk": 0.72,
        "jump": 1.08
      },
      "passive": null,
      "visual": {
        "body": "aerial",
        "silhouette": "Sorriso impecável, roupa branca e vermelha com patrocinadores fictícios, capa curta dourada e cabelos presos por excesso de brilho.",
        "outfit": "Sorriso impecável, roupa branca e vermelha com patrocinadores fictícios, capa curta dourada e cabelos presos por excesso de brilho.",
        "prop": "cape",
        "stance": "Sorriso Relâmpago",
        "palette": [
          "#244b80",
          "#f5e3c1",
          "#c78e6b",
          "#3a2a29"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Sobe um palmo e pousa numa pose de capa aberta.",
        "effect": "spark",
        "line": "Agora eu escolho o final."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Capitão Glória baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "dusty": {
      "normalScale": {
        "damage": 1.025,
        "speed": 0.984,
        "range": 1.12
      },
      "normalNames": {
        "light": "Nó da Espora",
        "heavy": "Coronha Espectral",
        "kick": "Bota da Diligência"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.096,
          "active": 0.067,
          "recovery": 0.185,
          "effect": "smoke"
        },
        "heavy": {
          "startup": 0.22,
          "active": 0.103,
          "recovery": 0.31,
          "effect": "smoke"
        },
        "kick": {
          "startup": 0.149,
          "active": 0.117,
          "recovery": 0.269,
          "effect": "smoke"
        }
      },
      "specials": [
        {
          "name": "Última Cavalgada",
          "type": "projectile",
          "description": "Um cavalo de fumaça atravessa a faixa baixa da arena. O brilho dos cascos oferece tempo para saltar.",
          "startup": 0.32,
          "active": 0.06,
          "recovery": 0.43,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.7,
          "effect": "smoke",
          "projectile": {
            "kind": "horse",
            "y": 38,
            "vx": 315,
            "radius": 39,
            "damage": 129,
            "stun": 0.3,
            "push": 100,
            "life": 2.7,
            "delay": 0.32,
            "hitHeight": "low"
          },
          "id": "dusty-0",
          "animation": {
            "pose": "dusty-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "lasso",
            "effect": "smoke",
            "storyProp": "spectral-bell"
          },
          "storyProp": "spectral-bell",
          "storyMotion": "release"
        },
        {
          "name": "Laço da Sepultura",
          "type": "melee",
          "description": "Abre o laço, acerta na média distância e puxa o rival para perto. É um golpe defendível, não um agarrão invisível.",
          "startup": 0.22,
          "active": 0.12,
          "recovery": 0.38,
          "range": 245,
          "damage": 84,
          "stun": 0.34,
          "push": 0,
          "cooldown": 1.8,
          "effect": "trap",
          "pull": 105,
          "id": "dusty-1",
          "animation": {
            "pose": "dusty-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "lasso",
            "effect": "trap",
            "storyProp": "lasso"
          },
          "storyProp": "lasso",
          "storyMotion": "strike"
        },
        {
          "name": "Sexta Câmara",
          "type": "projectile",
          "description": "Dispara uma única bala espectral pesada após armar o cão do revólver.",
          "startup": 0.28,
          "active": 0.06,
          "recovery": 0.37,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "ghost",
          "projectile": {
            "kind": "ghostbullet",
            "y": 58,
            "vx": 440,
            "radius": 16,
            "damage": 107,
            "stun": 0.36,
            "push": 49,
            "life": 2.1,
            "delay": 0.28
          },
          "id": "dusty-2",
          "animation": {
            "pose": "dusty-special2",
            "limb": "both",
            "path": "rising",
            "prop": "lasso",
            "effect": "ghost",
            "storyProp": "revolver"
          },
          "storyProp": "revolver",
          "storyMotion": "release"
        }
      ],
      "combos": [
        {
          "id": "dusty-combo0",
          "name": "Esporas na Poeira",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Nó da Espora → Coronha Espectral → Bota da Diligência. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 14,
            "push": 16
          }
        },
        {
          "id": "dusty-combo1",
          "name": "Diligência Sem Volta",
          "sequence": [
            "heavy",
            "kick",
            "special1"
          ],
          "description": "Coronha Espectral → Bota da Diligência → Laço da Sepultura. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 16,
            "push": 16
          }
        }
      ],
      "attackStyle": "dusty",
      "defenseName": "Aba do Túmulo",
      "finisher": {
        "name": "A Última Estação",
        "line": "Nenhuma promessa fica enterrada.",
        "kind": "dusty"
      },
      "super": {
        "id": "dusty-super",
        "name": "Diligência dos Ausentes",
        "description": "Com a energia completa, Dusty Graves concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Nenhuma promessa fica enterrada.",
        "kind": "dusty",
        "type": "melee",
        "effect": "smoke",
        "meterCost": 100,
        "startup": 0.32,
        "active": 0.19,
        "recovery": 0.66,
        "range": 245,
        "reachY": 190,
        "damage": 260,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Diligência dos Ausentes",
          "palette": [
            "#244b80",
            "#f5e3c1"
          ],
          "style": "spectral"
        },
        "animation": {
          "pose": "dusty-super",
          "prop": "lasso",
          "effect": "smoke"
        },
        "storyProp": "spectral-bell"
      },
      "entrance": {
        "name": "Pegadas de cascos surgem na poeira sem cavalo.",
        "line": "Seu bilhete acaba aqui.",
        "style": "spectral",
        "gesture": "Dusty se materializa ao lado de um vulto de montaria.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Pegadas de cascos surgem na poeira sem cavalo.",
            "pose": "arrive",
            "prop": "lasso",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Dusty se materializa ao lado de um vulto de montaria.",
            "pose": "warmup",
            "prop": "lasso",
            "effect": "smoke"
          },
          {
            "at": 2.25,
            "action": "Dispensa o cavalo e gira o laço uma única vez.",
            "pose": "signature",
            "prop": "lasso",
            "effect": "smoke"
          },
          {
            "at": 3.25,
            "action": "Seu bilhete acaba aqui.",
            "pose": "ready",
            "prop": "lasso",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Nó da Espora",
        "light": {
          "limb": "lead",
          "path": "lasso-jab",
          "prop": "lasso"
        },
        "heavy": {
          "limb": "rear",
          "path": "revolver-butt",
          "prop": "lasso"
        },
        "kick": {
          "limb": "leg",
          "path": "spur-kick",
          "prop": "lasso"
        },
        "guard": {
          "prop": "lasso",
          "pose": "dusty-guard"
        }
      },
      "movement": {
        "walk": 0.98,
        "backwalk": 0.68,
        "jump": 0.98
      },
      "passive": null,
      "visual": {
        "body": "spirit",
        "silhouette": "Chapéu perfurado, sobretudo de pó, pele transparente nas mãos e esporas que soltam brasas azuis. Revólveres espectrais não reproduzem armas reais.",
        "outfit": "Chapéu perfurado, sobretudo de pó, pele transparente nas mãos e esporas que soltam brasas azuis. Revólveres espectrais não reproduzem armas reais.",
        "prop": "lasso",
        "stance": "Nó da Espora",
        "palette": [
          "#244b80",
          "#f5e3c1",
          "#c78e6b",
          "#3a2a29"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Dispensa o cavalo e gira o laço uma única vez.",
        "effect": "smoke",
        "line": "Nenhuma promessa fica enterrada."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Dusty Graves baixa a guarda e reconhece a derrota.",
        "effect": "smoke"
      }
    },
    "roxy": {
      "normalScale": {
        "damage": 1.025,
        "speed": 0.984,
        "range": 1.12
      },
      "normalNames": {
        "light": "Palheta Seca",
        "heavy": "Braço de Guitarra",
        "kick": "Coturno de Palco"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.097,
          "active": 0.072,
          "recovery": 0.173,
          "effect": "music"
        },
        "heavy": {
          "startup": 0.221,
          "active": 0.109,
          "recovery": 0.298,
          "effect": "music"
        },
        "kick": {
          "startup": 0.15,
          "active": 0.124,
          "recovery": 0.257,
          "effect": "music"
        }
      },
      "specials": [
        {
          "name": "Volume Máximo",
          "type": "projectile",
          "description": "Três pulsos de distorção correm pelo chão, separados por batidas audíveis; podem ser saltados ou defendidos.",
          "startup": 0.24,
          "active": 0.06,
          "recovery": 0.45,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.5,
          "effect": "music",
          "projectile": {
            "kind": "sound",
            "y": 15,
            "vx": 300,
            "radius": 31,
            "damage": 43,
            "stun": 0.18,
            "push": 20,
            "life": 2.4,
            "delay": 0.24,
            "count": 3,
            "stagger": 0.2,
            "hitHeight": "low"
          },
          "id": "roxy-0",
          "animation": {
            "pose": "roxy-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "guitar",
            "effect": "music",
            "storyProp": "guitar"
          },
          "storyProp": "guitar",
          "storyMotion": "release"
        },
        {
          "name": "Acorde Suspenso",
          "type": "launcher",
          "description": "Ergue a guitarra num arco que intercepta o salto rival. A cauda do instrumento demora a voltar à guarda.",
          "startup": 0.18,
          "active": 0.16,
          "recovery": 0.44,
          "range": 167,
          "damage": 113,
          "stun": 0.39,
          "push": 31,
          "cooldown": 1.8,
          "effect": "music",
          "reachY": 198,
          "launch": 280,
          "id": "roxy-1",
          "animation": {
            "pose": "roxy-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "guitar",
            "effect": "music",
            "storyProp": "guitar"
          },
          "storyProp": "guitar",
          "storyMotion": "rise"
        },
        {
          "name": "Quebra de Retorno",
          "type": "retreat",
          "description": "Bate o braço da guitarra na lateral e recua com o cabo; forte para afastar perseguidores, fraco de longe.",
          "startup": 0.14,
          "active": 0.14,
          "recovery": 0.32,
          "range": 181,
          "damage": 102,
          "stun": 0.34,
          "push": 113,
          "cooldown": 1.8,
          "effect": "music",
          "move": -230,
          "id": "roxy-2",
          "animation": {
            "pose": "roxy-special2",
            "limb": "both",
            "path": "rising",
            "prop": "guitar",
            "effect": "music",
            "storyProp": "speaker"
          },
          "storyProp": "speaker",
          "storyMotion": "withdraw"
        }
      ],
      "combos": [
        {
          "id": "roxy-combo0",
          "name": "Três Acordes",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Palheta Seca → Braço de Guitarra → Coturno de Palco. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 15,
            "push": 20
          }
        },
        {
          "id": "roxy-combo1",
          "name": "Encore Subterrâneo",
          "sequence": [
            "light",
            "heavy",
            "special1"
          ],
          "description": "Palheta Seca → Braço de Guitarra → Acorde Suspenso. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 17,
            "push": 20
          }
        }
      ],
      "attackStyle": "roxy",
      "defenseName": "Braço de Retorno",
      "finisher": {
        "name": "O Silêncio Acabou",
        "line": "Você também vai ouvir.",
        "kind": "roxy"
      },
      "super": {
        "id": "roxy-super",
        "name": "Frequência da Rebelião",
        "description": "Com a energia completa, Roxy Riot concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Você também vai ouvir.",
        "kind": "roxy",
        "type": "melee",
        "effect": "music",
        "meterCost": 100,
        "startup": 0.34500000000000003,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 260,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Frequência da Rebelião",
          "palette": [
            "#244b80",
            "#f5e3c1"
          ],
          "style": "weapon"
        },
        "animation": {
          "pose": "roxy-super",
          "prop": "guitar",
          "effect": "music"
        },
        "storyProp": "guitar"
      },
      "entrance": {
        "name": "Roxy arrasta um cabo de amplificador até a arena.",
        "line": "Hoje ninguém corta o som.",
        "style": "weapon",
        "gesture": "Afina uma corda e ouve o retorno da fissura.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Roxy arrasta um cabo de amplificador até a arena.",
            "pose": "arrive",
            "prop": "guitar",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Afina uma corda e ouve o retorno da fissura.",
            "pose": "warmup",
            "prop": "guitar",
            "effect": "music"
          },
          {
            "at": 2.25,
            "action": "Toca um acorde que levanta a poeira em três pulsações.",
            "pose": "signature",
            "prop": "guitar",
            "effect": "music"
          },
          {
            "at": 3.25,
            "action": "Hoje ninguém corta o som.",
            "pose": "ready",
            "prop": "guitar",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Palheta Seca",
        "light": {
          "limb": "lead",
          "path": "pick",
          "prop": "guitar"
        },
        "heavy": {
          "limb": "rear",
          "path": "guitar-smash",
          "prop": "guitar"
        },
        "kick": {
          "limb": "leg",
          "path": "boot-kick",
          "prop": "guitar"
        },
        "guard": {
          "prop": "guitar",
          "pose": "roxy-guard"
        }
      },
      "movement": {
        "walk": 0.98,
        "backwalk": 0.64,
        "jump": 0.98
      },
      "passive": null,
      "visual": {
        "body": "athletic",
        "silhouette": "Moicano magenta caído para um lado, jaqueta de couro azul, jeans rasgado e guitarra com um remendo em forma de raio.",
        "outfit": "Moicano magenta caído para um lado, jaqueta de couro azul, jeans rasgado e guitarra com um remendo em forma de raio.",
        "prop": "guitar",
        "stance": "Palheta Seca",
        "palette": [
          "#244b80",
          "#f5e3c1",
          "#c78e6b",
          "#3a2a29"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Toca um acorde que levanta a poeira em três pulsações.",
        "effect": "music",
        "line": "Você também vai ouvir."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Roxy Riot baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "silas": {
      "normalScale": {
        "damage": 1.025,
        "speed": 1.12,
        "range": 1.062
      },
      "normalNames": {
        "light": "Ponta de Asa",
        "heavy": "Arco da Mariposa",
        "kick": "Garra da Estrada"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.084,
          "active": 0.077,
          "recovery": 0.157,
          "effect": "shadow"
        },
        "heavy": {
          "startup": 0.198,
          "active": 0.115,
          "recovery": 0.272,
          "effect": "shadow"
        },
        "kick": {
          "startup": 0.133,
          "active": 0.103,
          "recovery": 0.237,
          "effect": "shadow"
        }
      },
      "specials": [
        {
          "name": "Apagão",
          "type": "dash",
          "description": "Abre as asas numa arrancada com ecos de sua posição. As cópias são visuais; só o corpo real possui hitbox.",
          "startup": 0.17,
          "active": 0.27,
          "recovery": 0.33,
          "range": 140,
          "damage": 114,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "shadow",
          "move": 470,
          "pass": true,
          "id": "silas-0",
          "animation": {
            "pose": "silas-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "wings",
            "effect": "shadow",
            "storyProp": "wings"
          },
          "storyProp": "wings",
          "storyMotion": "travel"
        },
        {
          "name": "Presságio de Ponte",
          "type": "teleport",
          "description": "Surge acima do ombro dianteiro do rival com uma garra descendente. A chegada é visível e pode ser defendida em pé.",
          "startup": 0.22,
          "active": 0.12,
          "recovery": 0.41,
          "range": 118,
          "damage": 119,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "ghost",
          "teleport": {
            "side": "front",
            "distance": 78,
            "height": 138,
            "vy": -230
          },
          "hitHeight": "overhead",
          "reachY": 205,
          "id": "silas-1",
          "animation": {
            "pose": "silas-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "wings",
            "effect": "ghost",
            "storyProp": "broken-bridge"
          },
          "storyProp": "broken-bridge",
          "storyMotion": "arrival"
        },
        {
          "name": "Olhos na Neblina",
          "type": "projectile",
          "description": "Dois reflexos vermelhos viajam em alturas próximas. A criatura fica exposta durante a preparação.",
          "startup": 0.29,
          "active": 0.06,
          "recovery": 0.36,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "shadow",
          "projectile": {
            "kind": "moth",
            "y": 39,
            "vx": 240,
            "radius": 17,
            "damage": 48,
            "stun": 0.3,
            "push": 19,
            "life": 2.4,
            "delay": 0.29,
            "count": 2,
            "spreadY": 34,
            "stagger": 0.14
          },
          "id": "silas-2",
          "animation": {
            "pose": "silas-special2",
            "limb": "both",
            "path": "rising",
            "prop": "wings",
            "effect": "shadow",
            "storyProp": "moth-eyes"
          },
          "storyProp": "moth-eyes",
          "storyMotion": "release"
        }
      ],
      "combos": [
        {
          "id": "silas-combo0",
          "name": "Ponte Escura",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Ponta de Asa → Arco da Mariposa → Garra da Estrada. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 8,
            "push": 24
          }
        },
        {
          "id": "silas-combo1",
          "name": "Sinal Vermelho",
          "sequence": [
            "light",
            "kick",
            "special0"
          ],
          "description": "Ponta de Asa → Garra da Estrada → Apagão. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 10,
            "push": 24
          }
        }
      ],
      "attackStyle": "silas",
      "defenseName": "Asas Sobrepostas",
      "finisher": {
        "name": "O Último Presságio",
        "line": "A ponte caiu antes de você chegar.",
        "kind": "silas"
      },
      "super": {
        "id": "silas-super",
        "name": "Noite Sem Estrada",
        "description": "Com a energia completa, Silas Nightwing concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "A ponte caiu antes de você chegar.",
        "kind": "silas",
        "type": "melee",
        "effect": "shadow",
        "meterCost": 100,
        "startup": 0.27,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 260,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Noite Sem Estrada",
          "palette": [
            "#244b80",
            "#f5e3c1"
          ],
          "style": "aerial"
        },
        "animation": {
          "pose": "silas-super",
          "prop": "wings",
          "effect": "shadow"
        },
        "storyProp": "wings"
      },
      "entrance": {
        "name": "Os postes se apagam em sequência ao longe.",
        "line": "O caminho já avisou.",
        "style": "aerial",
        "gesture": "Silas pousa de asas fechadas e vira os olhos ao rival.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Os postes se apagam em sequência ao longe.",
            "pose": "arrive",
            "prop": "wings",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Silas pousa de asas fechadas e vira os olhos ao rival.",
            "pose": "warmup",
            "prop": "wings",
            "effect": "shadow"
          },
          {
            "at": 2.25,
            "action": "Abre toda a envergadura, projetando a sombra de uma ponte.",
            "pose": "signature",
            "prop": "wings",
            "effect": "shadow"
          },
          {
            "at": 3.25,
            "action": "O caminho já avisou.",
            "pose": "ready",
            "prop": "wings",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Ponta de Asa",
        "light": {
          "limb": "lead",
          "path": "wing-tip",
          "prop": "wings"
        },
        "heavy": {
          "limb": "rear",
          "path": "wing-arc",
          "prop": "wings"
        },
        "kick": {
          "limb": "leg",
          "path": "claw-dive",
          "prop": "wings"
        },
        "guard": {
          "prop": "wings",
          "pose": "silas-guard"
        }
      },
      "movement": {
        "walk": 1.1,
        "backwalk": 0.72,
        "jump": 1.23
      },
      "passive": null,
      "visual": {
        "body": "aerial",
        "silhouette": "Silhueta alta, asas negras com bordas claras, tórax coberto de penas curtas e dois olhos vermelhos. Pés estreitos seguram o chão como garras.",
        "outfit": "Silhueta alta, asas negras com bordas claras, tórax coberto de penas curtas e dois olhos vermelhos. Pés estreitos seguram o chão como garras.",
        "prop": "wings",
        "stance": "Ponta de Asa",
        "palette": [
          "#244b80",
          "#f5e3c1",
          "#c78e6b",
          "#3a2a29"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Abre toda a envergadura, projetando a sombra de uma ponte.",
        "effect": "shadow",
        "line": "A ponte caiu antes de você chegar."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Silas Nightwing baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "boris": {
      "normalScale": {
        "damage": 1.135,
        "speed": 0.916,
        "range": 0.946
      },
      "normalNames": {
        "light": "Palma de Entrada",
        "heavy": "Gancho de Jaqueta",
        "kick": "Varredura do Tatame"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.106,
          "active": 0.082,
          "recovery": 0.186,
          "effect": "beast"
        },
        "heavy": {
          "startup": 0.235,
          "active": 0.121,
          "recovery": 0.316,
          "effect": "beast"
        },
        "kick": {
          "startup": 0.161,
          "active": 0.11,
          "recovery": 0.272,
          "effect": "beast"
        }
      },
      "specials": [
        {
          "name": "Avalanche",
          "type": "throw",
          "description": "Encaixa o casaco para duas projeções e uma queda final em uma única ação de alcance curto. Erra contra rivais no ar ou agachados.",
          "startup": 0.22,
          "active": 0.08,
          "recovery": 0.54,
          "range": 82,
          "damage": 171,
          "stun": 0.46,
          "push": 50,
          "cooldown": 2.9,
          "effect": "beast",
          "swap": true,
          "id": "boris-0",
          "animation": {
            "pose": "boris-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "sambo-belt",
            "effect": "beast",
            "storyProp": "sambo-belt"
          },
          "storyProp": "sambo-belt",
          "storyMotion": "close"
        },
        {
          "name": "Passada de Granito",
          "type": "dash",
          "description": "Avança com a palma à altura do peito, protegido por um instante. Agarrões rompem a armadura.",
          "startup": 0.2,
          "active": 0.23,
          "recovery": 0.35,
          "range": 112,
          "damage": 108,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.15,
          "effect": "dash",
          "move": 245,
          "armor": 0.18,
          "id": "boris-1",
          "animation": {
            "pose": "boris-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "sambo-belt",
            "effect": "dash",
            "storyProp": "sambo-belt"
          },
          "storyProp": "sambo-belt",
          "storyMotion": "travel"
        },
        {
          "name": "Gancho de Perna",
          "type": "melee",
          "description": "Varre a base num arco baixo com o pé, mantendo as mãos próximas ao corpo. Saltos vencem o golpe.",
          "startup": 0.19,
          "active": 0.15,
          "recovery": 0.33,
          "range": 146,
          "damage": 97,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "spark",
          "hitHeight": "low",
          "launch": 115,
          "ground": true,
          "id": "boris-2",
          "animation": {
            "pose": "boris-special2",
            "limb": "both",
            "path": "rising",
            "prop": "sambo-belt",
            "effect": "spark",
            "storyProp": "sambo-belt"
          },
          "storyProp": "sambo-belt",
          "storyMotion": "strike"
        }
      ],
      "combos": [
        {
          "id": "boris-combo0",
          "name": "Dobrar a Jaqueta",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Palma de Entrada → Gancho de Jaqueta → Varredura do Tatame. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 9,
            "push": 28
          }
        },
        {
          "id": "boris-combo1",
          "name": "Três Quedas",
          "sequence": [
            "heavy",
            "kick",
            "special1"
          ],
          "description": "Gancho de Jaqueta → Varredura do Tatame → Passada de Granito. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 11,
            "push": 28
          }
        }
      ],
      "attackStyle": "boris",
      "defenseName": "Gola Fechada",
      "finisher": {
        "name": "O Tatame Lembra",
        "line": "Técnica antes da força.",
        "kind": "boris"
      },
      "super": {
        "id": "boris-super",
        "name": "Peso do Granito",
        "description": "Com a energia completa, Boris Granito concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Técnica antes da força.",
        "kind": "boris",
        "type": "melee",
        "effect": "beast",
        "meterCost": 100,
        "startup": 0.29500000000000004,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 284,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Peso do Granito",
          "palette": [
            "#a63847",
            "#cce8ee"
          ],
          "style": "grapple"
        },
        "animation": {
          "pose": "boris-super",
          "prop": "sambo-belt",
          "effect": "beast"
        },
        "storyProp": "sambo-belt"
      },
      "entrance": {
        "name": "Boris estende um tapete vermelho dobrado.",
        "line": "Não se esqueça de cair.",
        "style": "grapple",
        "gesture": "Confere os nós do cinto e dobra o tapete de volta.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Boris estende um tapete vermelho dobrado.",
            "pose": "arrive",
            "prop": "sambo-belt",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Confere os nós do cinto e dobra o tapete de volta.",
            "pose": "warmup",
            "prop": "sambo-belt",
            "effect": "beast"
          },
          {
            "at": 2.25,
            "action": "Pratica a entrada de quadril sem deixar o pé perder a base.",
            "pose": "signature",
            "prop": "sambo-belt",
            "effect": "beast"
          },
          {
            "at": 3.25,
            "action": "Não se esqueça de cair.",
            "pose": "ready",
            "prop": "sambo-belt",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Palma de Entrada",
        "light": {
          "limb": "lead",
          "path": "palm-entry",
          "prop": "sambo-belt"
        },
        "heavy": {
          "limb": "rear",
          "path": "jacket-hook",
          "prop": "sambo-belt"
        },
        "kick": {
          "limb": "leg",
          "path": "leg-reap",
          "prop": "sambo-belt"
        },
        "guard": {
          "prop": "sambo-belt",
          "pose": "boris-guard"
        }
      },
      "movement": {
        "walk": 0.86,
        "backwalk": 0.6,
        "jump": 0.9
      },
      "passive": null,
      "visual": {
        "body": "tank",
        "silhouette": "Jaqueta esportiva vermelha de gola gasta, cinto azul, mãos enfaixadas e orelhas marcadas por anos de tatame. Tronco largo e base baixa.",
        "outfit": "Jaqueta esportiva vermelha de gola gasta, cinto azul, mãos enfaixadas e orelhas marcadas por anos de tatame. Tronco largo e base baixa.",
        "prop": "sambo-belt",
        "stance": "Palma de Entrada",
        "palette": [
          "#a63847",
          "#cce8ee",
          "#d3af91",
          "#453433"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Pratica a entrada de quadril sem deixar o pé perder a base.",
        "effect": "beast",
        "line": "Técnica antes da força."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Boris Granito baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "irina": {
      "normalScale": {
        "damage": 1.025,
        "speed": 1.052,
        "range": 1.12
      },
      "normalNames": {
        "light": "Ponta de Cristal",
        "heavy": "Giro da Nevasca",
        "kick": "Arabesco Cortante"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.093,
          "active": 0.087,
          "recovery": 0.17,
          "effect": "ice"
        },
        "heavy": {
          "startup": 0.212,
          "active": 0.097,
          "recovery": 0.29,
          "effect": "ice"
        },
        "kick": {
          "startup": 0.144,
          "active": 0.117,
          "recovery": 0.252,
          "effect": "ice"
        }
      },
      "specials": [
        {
          "name": "Lago Congelado",
          "type": "projectile",
          "description": "Desliza em um giro e lança duas lâminas cristalinas. O congelamento curto não se renova durante a imunidade.",
          "startup": 0.22,
          "active": 0.06,
          "recovery": 0.38,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "ice",
          "move": 80,
          "projectile": {
            "kind": "iceblade",
            "y": 50,
            "vx": 340,
            "radius": 19,
            "damage": 48,
            "stun": 0.3,
            "push": 19,
            "life": 2.4,
            "delay": 0.22,
            "count": 2,
            "stagger": 0.16,
            "freeze": 0.3
          },
          "id": "irina-0",
          "animation": {
            "pose": "irina-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "ice-ribbon",
            "effect": "ice",
            "storyProp": "ice-ribbon"
          },
          "storyProp": "ice-ribbon",
          "storyMotion": "release"
        },
        {
          "name": "Pirueta do Norte",
          "type": "launcher",
          "description": "Um chute ascendente de grande alcance intercepta saltos baixos; o pouso possui recuperação longa.",
          "startup": 0.17,
          "active": 0.16,
          "recovery": 0.45,
          "range": 170,
          "damage": 108,
          "stun": 0.39,
          "push": 31,
          "cooldown": 1.8,
          "effect": "ice",
          "reachY": 198,
          "launch": 295,
          "id": "irina-1",
          "animation": {
            "pose": "irina-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "ice-ribbon",
            "effect": "ice",
            "storyProp": "ice-ribbon"
          },
          "storyProp": "ice-ribbon",
          "storyMotion": "rise"
        },
        {
          "name": "Passo de Vidro",
          "type": "retreat",
          "description": "Recua deslizando e deixa a ponta da perna na linha do corpo. Não concede invulnerabilidade.",
          "startup": 0.1,
          "active": 0.18,
          "recovery": 0.26,
          "range": 174,
          "damage": 88,
          "stun": 0.34,
          "push": 80,
          "cooldown": 1.8,
          "effect": "ice",
          "move": -330,
          "id": "irina-2",
          "animation": {
            "pose": "irina-special2",
            "limb": "both",
            "path": "rising",
            "prop": "ice-ribbon",
            "effect": "ice",
            "storyProp": "ice-ribbon"
          },
          "storyProp": "ice-ribbon",
          "storyMotion": "withdraw"
        }
      ],
      "combos": [
        {
          "id": "irina-combo0",
          "name": "Trança de Cristais",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Ponta de Cristal → Giro da Nevasca → Arabesco Cortante. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 10,
            "push": 12
          }
        },
        {
          "id": "irina-combo1",
          "name": "Coda de Inverno",
          "sequence": [
            "light",
            "heavy",
            "special1"
          ],
          "description": "Ponta de Cristal → Giro da Nevasca → Pirueta do Norte. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 12,
            "push": 12
          }
        }
      ],
      "attackStyle": "irina",
      "defenseName": "Braços de Cristal",
      "finisher": {
        "name": "A Última Plateia",
        "line": "Ouça o silêncio entre os aplausos.",
        "kind": "irina"
      },
      "super": {
        "id": "irina-super",
        "name": "Cisne da Meia-Noite",
        "description": "Com a energia completa, Irina Nevasca concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Ouça o silêncio entre os aplausos.",
        "kind": "irina",
        "type": "melee",
        "effect": "ice",
        "meterCost": 100,
        "startup": 0.32,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 260,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Cisne da Meia-Noite",
          "palette": [
            "#a63847",
            "#cce8ee"
          ],
          "style": "dance"
        },
        "animation": {
          "pose": "irina-super",
          "prop": "ice-ribbon",
          "effect": "ice"
        },
        "storyProp": "ice-ribbon"
      },
      "entrance": {
        "name": "Irina desliza sobre uma faixa de geada.",
        "line": "O palco também guarda pegadas.",
        "style": "dance",
        "gesture": "Prende a trança, alinha os ombros e sobe na ponta.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Irina desliza sobre uma faixa de geada.",
            "pose": "arrive",
            "prop": "ice-ribbon",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Prende a trança, alinha os ombros e sobe na ponta.",
            "pose": "warmup",
            "prop": "ice-ribbon",
            "effect": "ice"
          },
          {
            "at": 2.25,
            "action": "Uma pirueta transforma o vapor em pétalas de gelo.",
            "pose": "signature",
            "prop": "ice-ribbon",
            "effect": "ice"
          },
          {
            "at": 3.25,
            "action": "O palco também guarda pegadas.",
            "pose": "ready",
            "prop": "ice-ribbon",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Ponta de Cristal",
        "light": {
          "limb": "lead",
          "path": "fingertip",
          "prop": "ice-ribbon"
        },
        "heavy": {
          "limb": "rear",
          "path": "ballet-spin",
          "prop": "ice-ribbon"
        },
        "kick": {
          "limb": "leg",
          "path": "arabesque",
          "prop": "ice-ribbon"
        },
        "guard": {
          "prop": "ice-ribbon",
          "pose": "irina-guard"
        }
      },
      "movement": {
        "walk": 1.04,
        "backwalk": 0.8,
        "jump": 1.04
      },
      "passive": null,
      "visual": {
        "body": "slim",
        "silhouette": "Figurino azul com saia cristalina curta, meias claras, sapatilhas reforçadas e trança presa por uma pequena estrela de gelo.",
        "outfit": "Figurino azul com saia cristalina curta, meias claras, sapatilhas reforçadas e trança presa por uma pequena estrela de gelo.",
        "prop": "ice-ribbon",
        "stance": "Ponta de Cristal",
        "palette": [
          "#a63847",
          "#cce8ee",
          "#d3af91",
          "#453433"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Uma pirueta transforma o vapor em pétalas de gelo.",
        "effect": "ice",
        "line": "Ouça o silêncio entre os aplausos."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Irina Nevasca baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "yuri": {
      "normalScale": {
        "damage": 1.025,
        "speed": 0.916,
        "range": 1.12
      },
      "normalNames": {
        "light": "Luva Orbital",
        "heavy": "Punho do Vácuo",
        "kick": "Bota de Reentrada"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.097,
          "active": 0.092,
          "recovery": 0.19,
          "effect": "ghost"
        },
        "heavy": {
          "startup": 0.226,
          "active": 0.103,
          "recovery": 0.32,
          "effect": "ghost"
        },
        "kick": {
          "startup": 0.152,
          "active": 0.124,
          "recovery": 0.276,
          "effect": "ghost"
        }
      },
      "specials": [
        {
          "name": "Gravidade Zero",
          "type": "trap",
          "description": "Arma uma área de gravidade invertida sob o rival. Ao acertar, suspende brevemente o alvo; saltos e defesa escapam.",
          "startup": 0.3,
          "active": 0.06,
          "recovery": 0.35,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.7,
          "effect": "ghost",
          "projectile": {
            "kind": "gravity",
            "y": 14,
            "vx": 0,
            "radius": 49,
            "damage": 82,
            "stun": 0.29,
            "push": 20,
            "life": 2.3,
            "delay": 0.65,
            "anchor": "enemy",
            "maxRange": 300,
            "unique": true,
            "hitHeight": "low",
            "launch": 165,
            "float": 0.55
          },
          "id": "yuri-0",
          "animation": {
            "pose": "yuri-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "space-helmet",
            "effect": "ghost",
            "storyProp": "orbit"
          },
          "storyProp": "orbit",
          "storyMotion": "plant"
        },
        {
          "name": "Pulso do Visor",
          "type": "projectile",
          "description": "Projeta um núcleo lento de luz estelar à altura do peito. O núcleo permite caminhar atrás dele, mas somente um permanece ativo.",
          "startup": 0.27,
          "active": 0.06,
          "recovery": 0.38,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "ghost",
          "projectile": {
            "kind": "star",
            "y": 58,
            "vx": 165,
            "radius": 31,
            "damage": 103,
            "stun": 0.34,
            "push": 57,
            "life": 3.2,
            "delay": 0.27,
            "unique": true
          },
          "id": "yuri-1",
          "animation": {
            "pose": "yuri-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "space-helmet",
            "effect": "ghost",
            "storyProp": "space-helmet"
          },
          "storyProp": "space-helmet",
          "storyMotion": "release"
        },
        {
          "name": "Reentrada",
          "type": "launcher",
          "description": "Aciona o propulsor das botas num golpe vertical do capacete. Cobre saltos próximos e demora a pousar.",
          "startup": 0.2,
          "active": 0.16,
          "recovery": 0.48,
          "range": 119,
          "damage": 121,
          "stun": 0.39,
          "push": 31,
          "cooldown": 1.8,
          "effect": "steam",
          "reachY": 220,
          "launch": 320,
          "id": "yuri-2",
          "animation": {
            "pose": "yuri-special2",
            "limb": "both",
            "path": "rising",
            "prop": "space-helmet",
            "effect": "steam",
            "storyProp": "orbit"
          },
          "storyProp": "orbit",
          "storyMotion": "rise"
        }
      ],
      "combos": [
        {
          "id": "yuri-combo0",
          "name": "Órbita Baixa",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Luva Orbital → Punho do Vácuo → Bota de Reentrada. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 11,
            "push": 16
          }
        },
        {
          "id": "yuri-combo1",
          "name": "Retorno Sem Data",
          "sequence": [
            "light",
            "kick",
            "special2"
          ],
          "description": "Luva Orbital → Bota de Reentrada → Reentrada. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 13,
            "push": 16
          }
        }
      ],
      "attackStyle": "yuri",
      "defenseName": "Casco Pressurizado",
      "finisher": {
        "name": "Além do Horizonte",
        "line": "Ainda há alguém ouvindo?",
        "kind": "yuri"
      },
      "super": {
        "id": "yuri-super",
        "name": "Horizonte de Eventos",
        "description": "Com a energia completa, Yuri Vazio concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Ainda há alguém ouvindo?",
        "kind": "yuri",
        "type": "melee",
        "effect": "ghost",
        "meterCost": 100,
        "startup": 0.34500000000000003,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 260,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Horizonte de Eventos",
          "palette": [
            "#a63847",
            "#cce8ee"
          ],
          "style": "machine"
        },
        "animation": {
          "pose": "yuri-super",
          "prop": "space-helmet",
          "effect": "ghost"
        },
        "storyProp": "orbit"
      },
      "entrance": {
        "name": "Yuri desce lentamente com o cabo de uma nave invisível.",
        "line": "Controle, estou em solo desconhecido.",
        "style": "machine",
        "gesture": "O cabo se solta e flutua por um instante.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Yuri desce lentamente com o cabo de uma nave invisível.",
            "pose": "arrive",
            "prop": "space-helmet",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "O cabo se solta e flutua por um instante.",
            "pose": "warmup",
            "prop": "space-helmet",
            "effect": "ghost"
          },
          {
            "at": 2.25,
            "action": "Bate na lateral do visor, revelando um céu de estrelas.",
            "pose": "signature",
            "prop": "space-helmet",
            "effect": "ghost"
          },
          {
            "at": 3.25,
            "action": "Controle, estou em solo desconhecido.",
            "pose": "ready",
            "prop": "space-helmet",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Luva Orbital",
        "light": {
          "limb": "lead",
          "path": "glove-push",
          "prop": "space-helmet"
        },
        "heavy": {
          "limb": "rear",
          "path": "helmet-punch",
          "prop": "space-helmet"
        },
        "kick": {
          "limb": "leg",
          "path": "reentry-boot",
          "prop": "space-helmet"
        },
        "guard": {
          "prop": "space-helmet",
          "pose": "yuri-guard"
        }
      },
      "movement": {
        "walk": 0.94,
        "backwalk": 0.6,
        "jump": 0.88
      },
      "passive": null,
      "visual": {
        "body": "construct",
        "silhouette": "Traje espacial antigo ocre, anéis metálicos no pescoço, botas largas e visor rachado. Em vez de rosto, estrelas se movem no vidro escuro.",
        "outfit": "Traje espacial antigo ocre, anéis metálicos no pescoço, botas largas e visor rachado. Em vez de rosto, estrelas se movem no vidro escuro.",
        "prop": "space-helmet",
        "stance": "Luva Orbital",
        "palette": [
          "#a63847",
          "#cce8ee",
          "#d3af91",
          "#453433"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Bate na lateral do visor, revelando um céu de estrelas.",
        "effect": "ghost",
        "line": "Ainda há alguém ouvindo?"
      },
      "defeat": {
        "pose": "crumble",
        "action": "Yuri Vazio baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "vera": {
      "normalScale": {
        "damage": 1.025,
        "speed": 0.916,
        "range": 1.12
      },
      "normalNames": {
        "light": "Bico de Cajado",
        "heavy": "Caldeirão de Lado",
        "kick": "Barra do Xale"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.098,
          "active": 0.067,
          "recovery": 0.192,
          "effect": "roots"
        },
        "heavy": {
          "startup": 0.227,
          "active": 0.109,
          "recovery": 0.322,
          "effect": "roots"
        },
        "kick": {
          "startup": 0.153,
          "active": 0.103,
          "recovery": 0.278,
          "effect": "roots"
        }
      },
      "specials": [
        {
          "name": "Casa Faminta",
          "type": "trap",
          "description": "Uma sombra de casa avisa a queda de uma pata gigantesca. O impacto acontece com atraso e pode ser saltado.",
          "startup": 0.33,
          "active": 0.06,
          "recovery": 0.46,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.8,
          "effect": "roots",
          "projectile": {
            "kind": "chickenleg",
            "y": 12,
            "vx": 0,
            "radius": 60,
            "damage": 130,
            "stun": 0.29,
            "push": 88,
            "life": 1.9,
            "delay": 0.85,
            "anchor": "enemy",
            "maxRange": 325,
            "unique": true,
            "hitHeight": "low"
          },
          "id": "vera-0",
          "animation": {
            "pose": "vera-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "crooked-staff",
            "effect": "roots",
            "storyProp": "walking-house"
          },
          "storyProp": "walking-house",
          "storyMotion": "plant"
        },
        {
          "name": "Corvo de Vigília",
          "type": "projectile",
          "description": "Um corvo de fumaça voa em linha alta; se a ave erra, Vera precisa de tempo para chamar outra.",
          "startup": 0.24,
          "active": 0.06,
          "recovery": 0.36,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "shadow",
          "projectile": {
            "kind": "raven",
            "y": 92,
            "vx": 255,
            "radius": 25,
            "damage": 96,
            "stun": 0.3,
            "push": 36,
            "life": 2.6,
            "delay": 0.24
          },
          "id": "vera-1",
          "animation": {
            "pose": "vera-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "crooked-staff",
            "effect": "shadow",
            "storyProp": "raven"
          },
          "storyProp": "raven",
          "storyMotion": "release"
        },
        {
          "name": "Chave do Bosque",
          "type": "melee",
          "description": "A ponta do cajado prende brevemente os pés de quem permanece na linha. A magia é defendível.",
          "startup": 0.25,
          "active": 0.16,
          "recovery": 0.38,
          "range": 211,
          "damage": 87,
          "stun": 0.34,
          "push": 0,
          "cooldown": 1.8,
          "effect": "roots",
          "root": 0.58,
          "id": "vera-2",
          "animation": {
            "pose": "vera-special2",
            "limb": "both",
            "path": "rising",
            "prop": "crooked-staff",
            "effect": "roots",
            "storyProp": "key"
          },
          "storyProp": "key",
          "storyMotion": "strike"
        }
      ],
      "combos": [
        {
          "id": "vera-combo0",
          "name": "Chá e Carvão",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Bico de Cajado → Caldeirão de Lado → Barra do Xale. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 12,
            "push": 20
          }
        },
        {
          "id": "vera-combo1",
          "name": "Três Chaves",
          "sequence": [
            "heavy",
            "kick",
            "special2"
          ],
          "description": "Caldeirão de Lado → Barra do Xale → Chave do Bosque. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 14,
            "push": 20
          }
        }
      ],
      "attackStyle": "vera",
      "defenseName": "Cajado na Soleira",
      "finisher": {
        "name": "A Porta Só Abre por Dentro",
        "line": "Minha casa sabe quem você é.",
        "kind": "vera"
      },
      "super": {
        "id": "vera-super",
        "name": "Ceia da Casa Andante",
        "description": "Com a energia completa, Vera dos Corvos concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Minha casa sabe quem você é.",
        "kind": "vera",
        "type": "melee",
        "effect": "roots",
        "meterCost": 100,
        "startup": 0.27,
        "active": 0.19,
        "recovery": 0.66,
        "range": 211,
        "reachY": 190,
        "damage": 260,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Ceia da Casa Andante",
          "palette": [
            "#a63847",
            "#cce8ee"
          ],
          "style": "spectral"
        },
        "animation": {
          "pose": "vera-super",
          "prop": "crooked-staff",
          "effect": "roots"
        },
        "storyProp": "walking-house"
      },
      "entrance": {
        "name": "Uma sombra de pernas de galinha passa atrás da arena.",
        "line": "Entre, se conhece o caminho.",
        "style": "spectral",
        "gesture": "Vera pendura a chave no cajado e serve uma gota de chá.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Uma sombra de pernas de galinha passa atrás da arena.",
            "pose": "arrive",
            "prop": "crooked-staff",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Vera pendura a chave no cajado e serve uma gota de chá.",
            "pose": "warmup",
            "prop": "crooked-staff",
            "effect": "roots"
          },
          {
            "at": 2.25,
            "action": "Um corvo pousa no cajado e se desfaz em folhas.",
            "pose": "signature",
            "prop": "crooked-staff",
            "effect": "roots"
          },
          {
            "at": 3.25,
            "action": "Entre, se conhece o caminho.",
            "pose": "ready",
            "prop": "crooked-staff",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Bico de Cajado",
        "light": {
          "limb": "lead",
          "path": "staff-tip",
          "prop": "crooked-staff"
        },
        "heavy": {
          "limb": "rear",
          "path": "cauldron-hook",
          "prop": "crooked-staff"
        },
        "kick": {
          "limb": "leg",
          "path": "shawl-sweep",
          "prop": "crooked-staff"
        },
        "guard": {
          "prop": "crooked-staff",
          "pose": "vera-guard"
        }
      },
      "movement": {
        "walk": 0.96,
        "backwalk": 0.64,
        "jump": 0.94
      },
      "passive": null,
      "visual": {
        "body": "slim",
        "silhouette": "Xale vinho remendado, cajado torto com uma chave pendurada, caldeirão pequeno no cinto e cabelo branco em trança solta.",
        "outfit": "Xale vinho remendado, cajado torto com uma chave pendurada, caldeirão pequeno no cinto e cabelo branco em trança solta.",
        "prop": "crooked-staff",
        "stance": "Bico de Cajado",
        "palette": [
          "#a63847",
          "#cce8ee",
          "#d3af91",
          "#453433"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Um corvo pousa no cajado e se desfaz em folhas.",
        "effect": "roots",
        "line": "Minha casa sabe quem você é."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Vera dos Corvos baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "maksim": {
      "normalScale": {
        "damage": 1.135,
        "speed": 0.848,
        "range": 1.004
      },
      "normalNames": {
        "light": "Rebite de Palma",
        "heavy": "Prensa da Caldeira",
        "kick": "Bota de Forja"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.106,
          "active": 0.072,
          "recovery": 0.203,
          "effect": "steam"
        },
        "heavy": {
          "startup": 0.24,
          "active": 0.115,
          "recovery": 0.338,
          "effect": "steam"
        },
        "kick": {
          "startup": 0.163,
          "active": 0.11,
          "recovery": 0.291,
          "effect": "steam"
        }
      },
      "specials": [
        {
          "name": "Pressão Máxima",
          "type": "melee",
          "description": "Abre as válvulas e carrega um soco explosivo. Possui armadura curta, mas o brilho da pressão denuncia a preparação.",
          "startup": 0.38,
          "active": 0.14,
          "recovery": 0.49,
          "range": 173,
          "damage": 164,
          "stun": 0.34,
          "push": 126,
          "cooldown": 2.7,
          "effect": "steam",
          "armor": 0.26,
          "id": "maksim-0",
          "animation": {
            "pose": "maksim-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "steam-gauntlets",
            "effect": "steam",
            "storyProp": "piston"
          },
          "storyProp": "piston",
          "storyMotion": "strike"
        },
        {
          "name": "Escape de Vapor",
          "type": "projectile",
          "description": "Uma nuvem de vapor curto afasta aproximações. Não chega ao outro lado da arena e demora a dissipar.",
          "startup": 0.23,
          "active": 0.06,
          "recovery": 0.39,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "steam",
          "projectile": {
            "kind": "steam",
            "y": 58,
            "vx": 195,
            "radius": 40,
            "damage": 97,
            "stun": 0.3,
            "push": 100,
            "life": 0.9,
            "delay": 0.23
          },
          "id": "maksim-1",
          "animation": {
            "pose": "maksim-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "steam-gauntlets",
            "effect": "steam",
            "storyProp": "steam-valve"
          },
          "storyProp": "steam-valve",
          "storyMotion": "release"
        },
        {
          "name": "Aperto da Prensa",
          "type": "throw",
          "description": "Prende o rival entre as manoplas e o deposita atrás do próprio ombro. Falha em alvos baixos ou no ar.",
          "startup": 0.17,
          "active": 0.08,
          "recovery": 0.49,
          "range": 85,
          "damage": 154,
          "stun": 0.42,
          "push": 50,
          "cooldown": 2.4,
          "effect": "steam",
          "swap": true,
          "id": "maksim-2",
          "animation": {
            "pose": "maksim-special2",
            "limb": "both",
            "path": "rising",
            "prop": "steam-gauntlets",
            "effect": "steam",
            "storyProp": "press"
          },
          "storyProp": "press",
          "storyMotion": "close"
        }
      ],
      "combos": [
        {
          "id": "maksim-combo0",
          "name": "Linha de Rebites",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Rebite de Palma → Prensa da Caldeira → Bota de Forja. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 13,
            "push": 24
          }
        },
        {
          "id": "maksim-combo1",
          "name": "Ferro em Serviço",
          "sequence": [
            "light",
            "heavy",
            "special1"
          ],
          "description": "Rebite de Palma → Prensa da Caldeira → Escape de Vapor. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 15,
            "push": 24
          }
        }
      ],
      "attackStyle": "maksim",
      "defenseName": "Manoplas Cruzadas",
      "finisher": {
        "name": "A Última Prensa",
        "line": "Toda máquina pode parar.",
        "kind": "maksim"
      },
      "super": {
        "id": "maksim-super",
        "name": "Coração da Fundição",
        "description": "Com a energia completa, Maksim Caldeira concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Toda máquina pode parar.",
        "kind": "maksim",
        "type": "melee",
        "effect": "steam",
        "meterCost": 100,
        "startup": 0.29500000000000004,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 284,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Coração da Fundição",
          "palette": [
            "#a63847",
            "#cce8ee"
          ],
          "style": "power"
        },
        "animation": {
          "pose": "maksim-super",
          "prop": "steam-gauntlets",
          "effect": "steam"
        },
        "storyProp": "piston"
      },
      "entrance": {
        "name": "Maksim carrega uma bigorna de mão até a linha.",
        "line": "Vamos fazer isso direito.",
        "style": "power",
        "gesture": "Apoia a ferramenta ao lado e testa as válvulas.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Maksim carrega uma bigorna de mão até a linha.",
            "pose": "arrive",
            "prop": "steam-gauntlets",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Apoia a ferramenta ao lado e testa as válvulas.",
            "pose": "warmup",
            "prop": "steam-gauntlets",
            "effect": "steam"
          },
          {
            "at": 2.25,
            "action": "As luvas liberam vapor em dois jatos lentos.",
            "pose": "signature",
            "prop": "steam-gauntlets",
            "effect": "steam"
          },
          {
            "at": 3.25,
            "action": "Vamos fazer isso direito.",
            "pose": "ready",
            "prop": "steam-gauntlets",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Rebite de Palma",
        "light": {
          "limb": "lead",
          "path": "rivet-jab",
          "prop": "steam-gauntlets"
        },
        "heavy": {
          "limb": "rear",
          "path": "steam-hammer",
          "prop": "steam-gauntlets"
        },
        "kick": {
          "limb": "leg",
          "path": "forge-stomp",
          "prop": "steam-gauntlets"
        },
        "guard": {
          "prop": "steam-gauntlets",
          "pose": "maksim-guard"
        }
      },
      "movement": {
        "walk": 0.94,
        "backwalk": 0.59,
        "jump": 0.86
      },
      "passive": null,
      "visual": {
        "body": "tank",
        "silhouette": "Avental industrial cinza, camisa sem mangas, manoplas de cobre com válvulas e sobrancelhas queimadas por vapor.",
        "outfit": "Avental industrial cinza, camisa sem mangas, manoplas de cobre com válvulas e sobrancelhas queimadas por vapor.",
        "prop": "steam-gauntlets",
        "stance": "Rebite de Palma",
        "palette": [
          "#a63847",
          "#cce8ee",
          "#d3af91",
          "#453433"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "As luvas liberam vapor em dois jatos lentos.",
        "effect": "steam",
        "line": "Toda máquina pode parar."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Maksim Caldeira baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "anya": {
      "normalScale": {
        "damage": 1.025,
        "speed": 1.052,
        "range": 1.062
      },
      "normalNames": {
        "light": "Presa de Luva",
        "heavy": "Braço da Taiga",
        "kick": "Bota da Caçada"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.086,
          "active": 0.077,
          "recovery": 0.164,
          "effect": "beast"
        },
        "heavy": {
          "startup": 0.205,
          "active": 0.121,
          "recovery": 0.284,
          "effect": "beast"
        },
        "kick": {
          "startup": 0.137,
          "active": 0.117,
          "recovery": 0.246,
          "effect": "beast"
        }
      },
      "specials": [
        {
          "name": "Caçada Invernal",
          "type": "projectile",
          "description": "O lobo corre rente ao chão enquanto Anya prepara a próxima entrada. O lobo é baixo, defendível e não acompanha o rival no ar.",
          "startup": 0.25,
          "active": 0.06,
          "recovery": 0.36,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.5,
          "effect": "beast",
          "projectile": {
            "kind": "wolf",
            "y": 20,
            "vx": 360,
            "radius": 29,
            "damage": 109,
            "stun": 0.3,
            "push": 45,
            "life": 2.4,
            "delay": 0.25,
            "hitHeight": "low"
          },
          "id": "anya-0",
          "animation": {
            "pose": "anya-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "wolf-shadow",
            "effect": "beast",
            "storyProp": "wolf-shadow"
          },
          "storyProp": "wolf-shadow",
          "storyMotion": "release"
        },
        {
          "name": "Rastro de Caça",
          "type": "dash",
          "description": "Avança com uma pancada alta da luva. Não atravessa a guarda e deixa o corpo vulnerável na saída.",
          "startup": 0.16,
          "active": 0.2,
          "recovery": 0.35,
          "range": 130,
          "damage": 110,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "dash",
          "move": 365,
          "hitHeight": "overhead",
          "id": "anya-1",
          "animation": {
            "pose": "anya-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "wolf-shadow",
            "effect": "dash",
            "storyProp": "wolf-track"
          },
          "storyProp": "wolf-track",
          "storyMotion": "travel"
        },
        {
          "name": "Vigília da Neve",
          "type": "retreat",
          "description": "Desliza para trás e corta a perseguição com o calcanhar baixo.",
          "startup": 0.11,
          "active": 0.16,
          "recovery": 0.3,
          "range": 150,
          "damage": 91,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "ice",
          "move": -290,
          "hitHeight": "low",
          "id": "anya-2",
          "animation": {
            "pose": "anya-special2",
            "limb": "both",
            "path": "rising",
            "prop": "wolf-shadow",
            "effect": "ice",
            "storyProp": "wolf-track"
          },
          "storyProp": "wolf-track",
          "storyMotion": "withdraw"
        }
      ],
      "combos": [
        {
          "id": "anya-combo0",
          "name": "Pegadas Paralelas",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Presa de Luva → Braço da Taiga → Bota da Caçada. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 14,
            "push": 28
          }
        },
        {
          "id": "anya-combo1",
          "name": "Presas da Aurora",
          "sequence": [
            "light",
            "kick",
            "special1"
          ],
          "description": "Presa de Luva → Bota da Caçada → Rastro de Caça. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 16,
            "push": 28
          }
        }
      ],
      "attackStyle": "anya",
      "defenseName": "Manto da Patrulha",
      "finisher": {
        "name": "Juramento da Taiga",
        "line": "Nenhuma armadilha fica para trás.",
        "kind": "anya"
      },
      "super": {
        "id": "anya-super",
        "name": "Noite da Alcateia",
        "description": "Com a energia completa, Anya Presa-Branca concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Nenhuma armadilha fica para trás.",
        "kind": "anya",
        "type": "melee",
        "effect": "beast",
        "meterCost": 100,
        "startup": 0.32,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 260,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Noite da Alcateia",
          "palette": [
            "#a63847",
            "#cce8ee"
          ],
          "style": "speed"
        },
        "animation": {
          "pose": "anya-super",
          "prop": "wolf-shadow",
          "effect": "beast"
        },
        "storyProp": "wolf-shadow"
      },
      "entrance": {
        "name": "Pegadas de lobo contornam a borda da arena.",
        "line": "Você não atravessa sozinha esta mata.",
        "style": "speed",
        "gesture": "Anya se ajoelha e encosta o pingente na sombra.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Pegadas de lobo contornam a borda da arena.",
            "pose": "arrive",
            "prop": "wolf-shadow",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Anya se ajoelha e encosta o pingente na sombra.",
            "pose": "warmup",
            "prop": "wolf-shadow",
            "effect": "beast"
          },
          {
            "at": 2.25,
            "action": "Um lobo de luz branca ergue a cabeça ao seu lado.",
            "pose": "signature",
            "prop": "wolf-shadow",
            "effect": "beast"
          },
          {
            "at": 3.25,
            "action": "Você não atravessa sozinha esta mata.",
            "pose": "ready",
            "prop": "wolf-shadow",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Presa de Luva",
        "light": {
          "limb": "lead",
          "path": "claw-jab",
          "prop": "wolf-shadow"
        },
        "heavy": {
          "limb": "rear",
          "path": "forest-hook",
          "prop": "wolf-shadow"
        },
        "kick": {
          "limb": "leg",
          "path": "hunter-kick",
          "prop": "wolf-shadow"
        },
        "guard": {
          "prop": "wolf-shadow",
          "pose": "anya-guard"
        }
      },
      "movement": {
        "walk": 1.04,
        "backwalk": 0.72,
        "jump": 1.04
      },
      "passive": null,
      "visual": {
        "body": "athletic",
        "silhouette": "Casaco verde pesado, cabelo claro cortado curto, luvas escuras e um pingente de osso entalhado. Sua sombra às vezes tem quatro patas.",
        "outfit": "Casaco verde pesado, cabelo claro cortado curto, luvas escuras e um pingente de osso entalhado. Sua sombra às vezes tem quatro patas.",
        "prop": "wolf-shadow",
        "stance": "Presa de Luva",
        "palette": [
          "#a63847",
          "#cce8ee",
          "#d3af91",
          "#453433"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Um lobo de luz branca ergue a cabeça ao seu lado.",
        "effect": "beast",
        "line": "Nenhuma armadilha fica para trás."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Anya Presa-Branca baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "lev": {
      "normalScale": {
        "damage": 0.97,
        "speed": 1.12,
        "range": 1.062
      },
      "normalNames": {
        "light": "Palma do Truque",
        "heavy": "Punho do Forro",
        "kick": "Passo de Bastidor"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.08,
          "active": 0.082,
          "recovery": 0.157,
          "effect": "copy"
        },
        "heavy": {
          "startup": 0.194,
          "active": 0.097,
          "recovery": 0.272,
          "effect": "copy"
        },
        "kick": {
          "startup": 0.129,
          "active": 0.124,
          "recovery": 0.237,
          "effect": "copy"
        }
      },
      "specials": [
        {
          "name": "Número Final",
          "type": "teleport",
          "description": "Aparições cercam o rival, mas somente Lev causa o contato. Troca de lado com preparação visível e sem invulnerabilidade.",
          "startup": 0.26,
          "active": 0.12,
          "recovery": 0.39,
          "range": 128,
          "damage": 119,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "copy",
          "teleport": {
            "side": "behind",
            "distance": 95,
            "height": 0
          },
          "id": "lev-0",
          "animation": {
            "pose": "lev-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "masks",
            "effect": "copy",
            "storyProp": "masks"
          },
          "storyProp": "masks",
          "storyMotion": "arrival"
        },
        {
          "name": "Rosto de Madeira",
          "type": "projectile",
          "description": "Lança uma máscara que viaja devagar e desaparece no primeiro contato; apenas uma fica ativa.",
          "startup": 0.23,
          "active": 0.06,
          "recovery": 0.31,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "copy",
          "projectile": {
            "kind": "mask",
            "y": 58,
            "vx": 190,
            "radius": 26,
            "damage": 83,
            "stun": 0.3,
            "push": 38,
            "life": 3.1,
            "delay": 0.23,
            "unique": true,
            "root": 0.3
          },
          "id": "lev-1",
          "animation": {
            "pose": "lev-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "masks",
            "effect": "copy",
            "storyProp": "masks"
          },
          "storyProp": "masks",
          "storyMotion": "release"
        },
        {
          "name": "Forro Reversível",
          "type": "counter",
          "description": "Vira o casaco e responde com uma palma rápida à frente; rasteiras e agarrões ignoram o engano.",
          "startup": 0.04,
          "active": 0.21,
          "recovery": 0.31,
          "range": 137,
          "damage": 100,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.3,
          "effect": "copy",
          "counterWindow": 0.21,
          "counterDamage": 100,
          "id": "lev-2",
          "animation": {
            "pose": "lev-special2",
            "limb": "both",
            "path": "rising",
            "prop": "masks",
            "effect": "copy",
            "storyProp": "masks"
          },
          "storyProp": "masks",
          "storyMotion": "parry"
        }
      ],
      "combos": [
        {
          "id": "lev-combo0",
          "name": "Frente e Forro",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Palma do Truque → Punho do Forro → Passo de Bastidor. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 15,
            "push": 12
          }
        },
        {
          "id": "lev-combo1",
          "name": "Quarto Ato",
          "sequence": [
            "heavy",
            "kick",
            "special0"
          ],
          "description": "Punho do Forro → Passo de Bastidor → Número Final. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 17,
            "push": 12
          }
        }
      ],
      "attackStyle": "lev",
      "defenseName": "Máscara de Reserva",
      "finisher": {
        "name": "O Rosto que Faltava",
        "line": "Até a verdade tem outro lado.",
        "kind": "lev"
      },
      "super": {
        "id": "lev-super",
        "name": "Circo Sem Espelhos",
        "description": "Com a energia completa, Lev dos Mil Rostos concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Até a verdade tem outro lado.",
        "kind": "lev",
        "type": "melee",
        "effect": "copy",
        "meterCost": 100,
        "startup": 0.34500000000000003,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 248,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Circo Sem Espelhos",
          "palette": [
            "#a63847",
            "#cce8ee"
          ],
          "style": "spectral"
        },
        "animation": {
          "pose": "lev-super",
          "prop": "masks",
          "effect": "copy"
        },
        "storyProp": "masks"
      },
      "entrance": {
        "name": "Uma máscara cai do alto presa a um fio.",
        "line": "Qual de nós chegou primeiro?",
        "style": "spectral",
        "gesture": "Lev puxa o fio, surge atrás do casaco e solta as mangas.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Uma máscara cai do alto presa a um fio.",
            "pose": "arrive",
            "prop": "masks",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Lev puxa o fio, surge atrás do casaco e solta as mangas.",
            "pose": "warmup",
            "prop": "masks",
            "effect": "copy"
          },
          {
            "at": 2.25,
            "action": "Vira o forro: duas sombras se curvam e desaparecem.",
            "pose": "signature",
            "prop": "masks",
            "effect": "copy"
          },
          {
            "at": 3.25,
            "action": "Qual de nós chegou primeiro?",
            "pose": "ready",
            "prop": "masks",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Palma do Truque",
        "light": {
          "limb": "lead",
          "path": "magician-palm",
          "prop": "masks"
        },
        "heavy": {
          "limb": "rear",
          "path": "lining-hook",
          "prop": "masks"
        },
        "kick": {
          "limb": "leg",
          "path": "backstage-step",
          "prop": "masks"
        },
        "guard": {
          "prop": "masks",
          "pose": "lev-guard"
        }
      },
      "movement": {
        "walk": 1.06,
        "backwalk": 0.8,
        "jump": 1.04
      },
      "passive": null,
      "visual": {
        "body": "slim",
        "silhouette": "Casaco reversível roxo e verde, cinto com máscaras de madeira, cabelo penteado com uma mecha branca e luvas assimétricas.",
        "outfit": "Casaco reversível roxo e verde, cinto com máscaras de madeira, cabelo penteado com uma mecha branca e luvas assimétricas.",
        "prop": "masks",
        "stance": "Palma do Truque",
        "palette": [
          "#a63847",
          "#cce8ee",
          "#d3af91",
          "#453433"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Vira o forro: duas sombras se curvam e desaparecem.",
        "effect": "copy",
        "line": "Até a verdade tem outro lado."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Lev dos Mil Rostos baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "nikolai": {
      "normalScale": {
        "damage": 1.08,
        "speed": 0.848,
        "range": 1.062
      },
      "normalNames": {
        "light": "Borda de Escudo",
        "heavy": "Punho da Geada",
        "kick": "Greva do Rio"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.109,
          "active": 0.087,
          "recovery": 0.195,
          "effect": "ice"
        },
        "heavy": {
          "startup": 0.243,
          "active": 0.103,
          "recovery": 0.33,
          "effect": "ice"
        },
        "kick": {
          "startup": 0.166,
          "active": 0.103,
          "recovery": 0.283,
          "effect": "ice"
        }
      },
      "specials": [
        {
          "name": "Muralha do Inverno",
          "type": "counter",
          "description": "Recebe um ataque frontal no escudo e devolve uma onda curta de geada. Não responde a agarrões ou rasteiras.",
          "startup": 0.07,
          "active": 0.31,
          "recovery": 0.43,
          "range": 185,
          "damage": 129,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.7,
          "effect": "ice",
          "counterWindow": 0.31,
          "counterDamage": 129,
          "freeze": 0.4,
          "id": "nikolai-0",
          "animation": {
            "pose": "nikolai-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "broken-shield",
            "effect": "ice",
            "storyProp": "broken-shield"
          },
          "storyProp": "broken-shield",
          "storyMotion": "parry"
        },
        {
          "name": "Passo da Ponte",
          "type": "dash",
          "description": "Avança devagar com o escudo e empurra o rival. O peso protege uma parte da entrada, sem atravessar agarrões.",
          "startup": 0.24,
          "active": 0.32,
          "recovery": 0.4,
          "range": 128,
          "damage": 110,
          "stun": 0.34,
          "push": 112,
          "cooldown": 1.8,
          "effect": "ice",
          "move": 200,
          "armor": 0.25,
          "id": "nikolai-1",
          "animation": {
            "pose": "nikolai-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "broken-shield",
            "effect": "ice",
            "storyProp": "broken-shield"
          },
          "storyProp": "broken-shield",
          "storyMotion": "travel"
        },
        {
          "name": "Marco de Gelo",
          "type": "trap",
          "description": "A ponta do escudo semeia uma estaca de geada atrasada perto do rival.",
          "startup": 0.25,
          "active": 0.06,
          "recovery": 0.35,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.3,
          "effect": "ice",
          "projectile": {
            "kind": "iceshield",
            "y": 12,
            "vx": 0,
            "radius": 43,
            "damage": 86,
            "stun": 0.29,
            "push": 20,
            "life": 2.3,
            "delay": 0.62,
            "anchor": "enemy",
            "maxRange": 245,
            "unique": true,
            "hitHeight": "low",
            "freeze": 0.32
          },
          "id": "nikolai-2",
          "animation": {
            "pose": "nikolai-special2",
            "limb": "both",
            "path": "rising",
            "prop": "broken-shield",
            "effect": "ice",
            "storyProp": "ice-bridge"
          },
          "storyProp": "ice-bridge",
          "storyMotion": "plant"
        }
      ],
      "combos": [
        {
          "id": "nikolai-combo0",
          "name": "Ponte Guardada",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Borda de Escudo → Punho da Geada → Greva do Rio. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 8,
            "push": 16
          }
        },
        {
          "id": "nikolai-combo1",
          "name": "O Inverno Responde",
          "sequence": [
            "light",
            "heavy",
            "special1"
          ],
          "description": "Borda de Escudo → Punho da Geada → Passo da Ponte. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 10,
            "push": 16
          }
        }
      ],
      "attackStyle": "nikolai",
      "defenseName": "Escudo do Juramento",
      "finisher": {
        "name": "O Juramento Não Derrete",
        "line": "Enquanto eu estiver aqui, ninguém passa.",
        "kind": "nikolai"
      },
      "super": {
        "id": "nikolai-super",
        "name": "A Ponte dos Invernos",
        "description": "Com a energia completa, Nikolai Geada concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Enquanto eu estiver aqui, ninguém passa.",
        "kind": "nikolai",
        "type": "melee",
        "effect": "ice",
        "meterCost": 100,
        "startup": 0.27,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 272,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "A Ponte dos Invernos",
          "palette": [
            "#a63847",
            "#cce8ee"
          ],
          "style": "power"
        },
        "animation": {
          "pose": "nikolai-super",
          "prop": "broken-shield",
          "effect": "ice"
        },
        "storyProp": "broken-shield"
      },
      "entrance": {
        "name": "Nikolai retira o escudo de uma crosta no chão.",
        "line": "A ponte permanece guardada.",
        "style": "power",
        "gesture": "Sacode o gelo do elmo e encosta os dois fragmentos do escudo.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Nikolai retira o escudo de uma crosta no chão.",
            "pose": "arrive",
            "prop": "broken-shield",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Sacode o gelo do elmo e encosta os dois fragmentos do escudo.",
            "pose": "warmup",
            "prop": "broken-shield",
            "effect": "ice"
          },
          {
            "at": 2.25,
            "action": "A fratura volta a brilhar, mas não se fecha.",
            "pose": "signature",
            "prop": "broken-shield",
            "effect": "ice"
          },
          {
            "at": 3.25,
            "action": "A ponte permanece guardada.",
            "pose": "ready",
            "prop": "broken-shield",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Borda de Escudo",
        "light": {
          "limb": "lead",
          "path": "shield-rim",
          "prop": "broken-shield"
        },
        "heavy": {
          "limb": "rear",
          "path": "gauntlet-hook",
          "prop": "broken-shield"
        },
        "kick": {
          "limb": "leg",
          "path": "greave-kick",
          "prop": "broken-shield"
        },
        "guard": {
          "prop": "broken-shield",
          "pose": "nikolai-guard"
        }
      },
      "movement": {
        "walk": 0.94,
        "backwalk": 0.6,
        "jump": 0.86
      },
      "passive": null,
      "visual": {
        "body": "tank",
        "silhouette": "Armadura medieval azul-escura coberta de gelo, elmo aberto com sobrancelhas brancas e metade de um escudo redondo.",
        "outfit": "Armadura medieval azul-escura coberta de gelo, elmo aberto com sobrancelhas brancas e metade de um escudo redondo.",
        "prop": "broken-shield",
        "stance": "Borda de Escudo",
        "palette": [
          "#a63847",
          "#cce8ee",
          "#d3af91",
          "#453433"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "A fratura volta a brilhar, mas não se fecha.",
        "effect": "ice",
        "line": "Enquanto eu estiver aqui, ninguém passa."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Nikolai Geada baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "zoya": {
      "normalScale": {
        "damage": 0.97,
        "speed": 1.12,
        "range": 1.062
      },
      "normalNames": {
        "light": "Chave Curta",
        "heavy": "Malho de Oficina",
        "kick": "Botina da Faísca"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.082,
          "active": 0.092,
          "recovery": 0.161,
          "effect": "electric"
        },
        "heavy": {
          "startup": 0.196,
          "active": 0.109,
          "recovery": 0.276,
          "effect": "electric"
        },
        "kick": {
          "startup": 0.131,
          "active": 0.11,
          "recovery": 0.241,
          "effect": "electric"
        }
      },
      "specials": [
        {
          "name": "Pane Geral",
          "type": "trap",
          "description": "Dois drones fecham um circuito num ponto marcado. A descarga demora a armar e só uma formação fica ativa.",
          "startup": 0.28,
          "active": 0.06,
          "recovery": 0.34,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.7,
          "effect": "electric",
          "projectile": {
            "kind": "circuit",
            "y": 12,
            "vx": 0,
            "radius": 57,
            "damage": 106,
            "stun": 0.29,
            "push": 20,
            "life": 2.3,
            "delay": 0.76,
            "anchor": "enemy",
            "maxRange": 310,
            "unique": true,
            "hitHeight": "low",
            "root": 0.48
          },
          "id": "zoya-0",
          "animation": {
            "pose": "zoya-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "scrap-drone",
            "effect": "electric",
            "storyProp": "scrap-drone"
          },
          "storyProp": "scrap-drone",
          "storyMotion": "plant"
        },
        {
          "name": "Porca de Voltagem",
          "type": "projectile",
          "description": "Arremessa uma porca eletrificada pequena e rápida; o dano baixo compensa a saída ágil.",
          "startup": 0.13,
          "active": 0.06,
          "recovery": 0.23,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "electric",
          "projectile": {
            "kind": "bolt",
            "y": 58,
            "vx": 465,
            "radius": 11,
            "damage": 72,
            "stun": 0.3,
            "push": 30,
            "life": 1.7,
            "delay": 0.13
          },
          "id": "zoya-1",
          "animation": {
            "pose": "zoya-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "scrap-drone",
            "effect": "electric",
            "storyProp": "hex-nut"
          },
          "storyProp": "hex-nut",
          "storyMotion": "release"
        },
        {
          "name": "Recuo de Guincho",
          "type": "retreat",
          "description": "O cabo da mochila puxa Zoya para trás enquanto a chave cobre a frente. Continua vulnerável durante o deslocamento.",
          "startup": 0.07,
          "active": 0.18,
          "recovery": 0.25,
          "range": 122,
          "damage": 78,
          "stun": 0.34,
          "push": 72,
          "cooldown": 1.8,
          "effect": "steam",
          "move": -390,
          "id": "zoya-2",
          "animation": {
            "pose": "zoya-special2",
            "limb": "both",
            "path": "rising",
            "prop": "scrap-drone",
            "effect": "steam",
            "storyProp": "winch"
          },
          "storyProp": "winch",
          "storyMotion": "withdraw"
        }
      ],
      "combos": [
        {
          "id": "zoya-combo0",
          "name": "Porcas e Faíscas",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Chave Curta → Malho de Oficina → Botina da Faísca. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 9,
            "push": 20
          }
        },
        {
          "id": "zoya-combo1",
          "name": "Curto Planejado",
          "sequence": [
            "light",
            "kick",
            "special2"
          ],
          "description": "Chave Curta → Botina da Faísca → Recuo de Guincho. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 11,
            "push": 20
          }
        }
      ],
      "attackStyle": "zoya",
      "defenseName": "Chave Isolada",
      "finisher": {
        "name": "A Cidade Liga de Novo",
        "line": "Sucata também tem futuro.",
        "kind": "zoya"
      },
      "super": {
        "id": "zoya-super",
        "name": "Apagão Reverso",
        "description": "Com a energia completa, Zoya Faísca concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Sucata também tem futuro.",
        "kind": "zoya",
        "type": "melee",
        "effect": "electric",
        "meterCost": 100,
        "startup": 0.29500000000000004,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 248,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Apagão Reverso",
          "palette": [
            "#a63847",
            "#cce8ee"
          ],
          "style": "machine"
        },
        "animation": {
          "pose": "zoya-super",
          "prop": "scrap-drone",
          "effect": "electric"
        },
        "storyProp": "scrap-drone"
      },
      "entrance": {
        "name": "Um drone entra carregando uma chave maior que ele.",
        "line": "Só precisa de um pequeno ajuste.",
        "style": "machine",
        "gesture": "Zoya salta da caixa de ferramentas e recolhe a chave.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Um drone entra carregando uma chave maior que ele.",
            "pose": "arrive",
            "prop": "scrap-drone",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Zoya salta da caixa de ferramentas e recolhe a chave.",
            "pose": "warmup",
            "prop": "scrap-drone",
            "effect": "electric"
          },
          {
            "at": 2.25,
            "action": "Os dois drones fecham um pequeno arco elétrico sobre seus ombros.",
            "pose": "signature",
            "prop": "scrap-drone",
            "effect": "electric"
          },
          {
            "at": 3.25,
            "action": "Só precisa de um pequeno ajuste.",
            "pose": "ready",
            "prop": "scrap-drone",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Chave Curta",
        "light": {
          "limb": "lead",
          "path": "wrench-tap",
          "prop": "scrap-drone"
        },
        "heavy": {
          "limb": "rear",
          "path": "mallet",
          "prop": "scrap-drone"
        },
        "kick": {
          "limb": "leg",
          "path": "mechanic-boot",
          "prop": "scrap-drone"
        },
        "guard": {
          "prop": "scrap-drone",
          "pose": "zoya-guard"
        }
      },
      "movement": {
        "walk": 1.06,
        "backwalk": 0.8,
        "jump": 1.04
      },
      "passive": null,
      "visual": {
        "body": "slim",
        "silhouette": "Baixa, macacão amarelo manchado, mochila de ferramentas, tranças curtas e dois drones montados de sucata.",
        "outfit": "Baixa, macacão amarelo manchado, mochila de ferramentas, tranças curtas e dois drones montados de sucata.",
        "prop": "scrap-drone",
        "stance": "Chave Curta",
        "palette": [
          "#a63847",
          "#cce8ee",
          "#d3af91",
          "#453433"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Os dois drones fecham um pequeno arco elétrico sobre seus ombros.",
        "effect": "electric",
        "line": "Sucata também tem futuro."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Zoya Faísca baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "ren": {
      "normalScale": {
        "damage": 1.08,
        "speed": 0.984,
        "range": 1.12
      },
      "normalNames": {
        "light": "Nó da Bainha",
        "heavy": "Corte do Poente",
        "kick": "Calcanhar do Ronin"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.097,
          "active": 0.067,
          "recovery": 0.181,
          "effect": "slash"
        },
        "heavy": {
          "startup": 0.221,
          "active": 0.115,
          "recovery": 0.306,
          "effect": "slash"
        },
        "kick": {
          "startup": 0.15,
          "active": 0.117,
          "recovery": 0.265,
          "effect": "slash"
        }
      },
      "specials": [
        {
          "name": "Corte do Silêncio",
          "type": "melee",
          "description": "Espera imóvel antes de um saque quase instantâneo. A pausa anuncia o golpe; a recuperação é longa quando erra.",
          "startup": 0.36,
          "active": 0.065,
          "recovery": 0.42,
          "range": 239,
          "damage": 145,
          "stun": 0.34,
          "push": 68,
          "cooldown": 1.8,
          "effect": "slash",
          "id": "ren-0",
          "animation": {
            "pose": "ren-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "katana",
            "effect": "slash",
            "storyProp": "broken-katana"
          },
          "storyProp": "broken-katana",
          "storyMotion": "strike"
        },
        {
          "name": "Bainha em Guarda",
          "type": "counter",
          "description": "Intercepta um golpe frontal com a bainha e devolve um corte curto. Não vence rasteiras ou agarrões.",
          "startup": 0.055,
          "active": 0.19,
          "recovery": 0.33,
          "range": 176,
          "damage": 115,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.3,
          "effect": "slash",
          "counterWindow": 0.19,
          "counterDamage": 115,
          "id": "ren-1",
          "animation": {
            "pose": "ren-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "katana",
            "effect": "slash",
            "storyProp": "scabbard"
          },
          "storyProp": "scabbard",
          "storyMotion": "parry"
        },
        {
          "name": "Travessia de Cordas",
          "type": "dash",
          "description": "Desliza com a lâmina baixa numa entrada curta. O contato é baixo, mas pode ser saltado e não possui armadura.",
          "startup": 0.19,
          "active": 0.12,
          "recovery": 0.37,
          "range": 164,
          "damage": 101,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "slash",
          "move": 310,
          "hitHeight": "low",
          "ground": true,
          "id": "ren-2",
          "animation": {
            "pose": "ren-special2",
            "limb": "both",
            "path": "rising",
            "prop": "katana",
            "effect": "slash",
            "storyProp": "broken-katana"
          },
          "storyProp": "broken-katana",
          "storyMotion": "travel"
        }
      ],
      "combos": [
        {
          "id": "ren-combo0",
          "name": "Bainha e Crepúsculo",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Nó da Bainha → Corte do Poente → Calcanhar do Ronin. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 10,
            "push": 24
          }
        },
        {
          "id": "ren-combo1",
          "name": "Fio que Resta",
          "sequence": [
            "heavy",
            "kick",
            "special2"
          ],
          "description": "Corte do Poente → Calcanhar do Ronin → Travessia de Cordas. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 12,
            "push": 24
          }
        }
      ],
      "attackStyle": "ren",
      "defenseName": "Bainha do Retorno",
      "finisher": {
        "name": "A Última Emenda",
        "line": "Nem toda quebra é o fim.",
        "kind": "ren"
      },
      "super": {
        "id": "ren-super",
        "name": "Linha do Horizonte",
        "description": "Com a energia completa, Ren da Bainha Partida concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Nem toda quebra é o fim.",
        "kind": "ren",
        "type": "melee",
        "effect": "slash",
        "meterCost": 100,
        "startup": 0.32,
        "active": 0.19,
        "recovery": 0.66,
        "range": 239,
        "reachY": 190,
        "damage": 272,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Linha do Horizonte",
          "palette": [
            "#c34846",
            "#ffe6aa"
          ],
          "style": "weapon"
        },
        "animation": {
          "pose": "ren-super",
          "prop": "katana",
          "effect": "slash"
        },
        "storyProp": "broken-katana"
      },
      "entrance": {
        "name": "Ren se ajoelha diante da bainha partida.",
        "line": "Eu termino o corte que faltou.",
        "style": "weapon",
        "gesture": "Aperta as cordas da bainha e levanta sem desembainhar.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Ren se ajoelha diante da bainha partida.",
            "pose": "arrive",
            "prop": "katana",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Aperta as cordas da bainha e levanta sem desembainhar.",
            "pose": "warmup",
            "prop": "katana",
            "effect": "slash"
          },
          {
            "at": 2.25,
            "action": "Mostra apenas um palmo da lâmina: uma luz atravessa a emenda.",
            "pose": "signature",
            "prop": "katana",
            "effect": "slash"
          },
          {
            "at": 3.25,
            "action": "Eu termino o corte que faltou.",
            "pose": "ready",
            "prop": "katana",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Nó da Bainha",
        "light": {
          "limb": "lead",
          "path": "scabbard-jab",
          "prop": "katana"
        },
        "heavy": {
          "limb": "rear",
          "path": "draw-cut",
          "prop": "katana"
        },
        "kick": {
          "limb": "leg",
          "path": "heel-kick",
          "prop": "katana"
        },
        "guard": {
          "prop": "katana",
          "pose": "ren-guard"
        }
      },
      "movement": {
        "walk": 0.98,
        "backwalk": 0.7,
        "jump": 0.98
      },
      "passive": null,
      "visual": {
        "body": "slim",
        "silhouette": "Roupas índigo gastas, espada de lâmina reparada, bainha amarrada por cordas e cabelo preso baixo. Ombros relaxados, mão próxima à guarda.",
        "outfit": "Roupas índigo gastas, espada de lâmina reparada, bainha amarrada por cordas e cabelo preso baixo. Ombros relaxados, mão próxima à guarda.",
        "prop": "katana",
        "stance": "Nó da Bainha",
        "palette": [
          "#c34846",
          "#ffe6aa",
          "#d8a480",
          "#272b3c"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Mostra apenas um palmo da lâmina: uma luz atravessa a emenda.",
        "effect": "slash",
        "line": "Nem toda quebra é o fim."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Ren da Bainha Partida baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "aya": {
      "normalScale": {
        "damage": 0.97,
        "speed": 1.12,
        "range": 1.004
      },
      "normalNames": {
        "light": "Dedo da Sombra",
        "heavy": "Cotovelo de Beco",
        "kick": "Chute do Muro"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.084,
          "active": 0.072,
          "recovery": 0.165,
          "effect": "smoke"
        },
        "heavy": {
          "startup": 0.198,
          "active": 0.121,
          "recovery": 0.28,
          "effect": "smoke"
        },
        "kick": {
          "startup": 0.133,
          "active": 0.124,
          "recovery": 0.245,
          "effect": "smoke"
        }
      },
      "specials": [
        {
          "name": "Beco Sem Saída",
          "type": "teleport",
          "description": "Deixa uma cópia de fumaça e chega no ar atrás do rival. A cópia não golpeia; defenda em pé o contato descendente.",
          "startup": 0.23,
          "active": 0.12,
          "recovery": 0.37,
          "range": 118,
          "damage": 106,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "smoke",
          "teleport": {
            "side": "behind",
            "distance": 86,
            "height": 118,
            "vy": -260
          },
          "hitHeight": "overhead",
          "reachY": 188,
          "id": "aya-0",
          "animation": {
            "pose": "aya-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "smoke-scarf",
            "effect": "smoke",
            "storyProp": "doorway"
          },
          "storyProp": "doorway",
          "storyMotion": "arrival"
        },
        {
          "name": "Poeira de Poste",
          "type": "projectile",
          "description": "Lança um pequeno selo de fumaça em linha curta. A trajetória rápida oferece pouco dano.",
          "startup": 0.12,
          "active": 0.06,
          "recovery": 0.24,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "smoke",
          "projectile": {
            "kind": "smokeseal",
            "y": 58,
            "vx": 430,
            "radius": 16,
            "damage": 75,
            "stun": 0.3,
            "push": 34,
            "life": 1.1,
            "delay": 0.12
          },
          "id": "aya-1",
          "animation": {
            "pose": "aya-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "smoke-scarf",
            "effect": "smoke",
            "storyProp": "smoke-scarf"
          },
          "storyProp": "smoke-scarf",
          "storyMotion": "release"
        },
        {
          "name": "Saída de Emergência",
          "type": "retreat",
          "description": "Recuo rápido com o pé protegendo a perseguição; a animação não remove a vulnerabilidade do corpo.",
          "startup": 0.06,
          "active": 0.16,
          "recovery": 0.24,
          "range": 131,
          "damage": 82,
          "stun": 0.34,
          "push": 80,
          "cooldown": 1.8,
          "effect": "dash",
          "move": -420,
          "id": "aya-2",
          "animation": {
            "pose": "aya-special2",
            "limb": "both",
            "path": "rising",
            "prop": "smoke-scarf",
            "effect": "dash",
            "storyProp": "medicine-parcel"
          },
          "storyProp": "medicine-parcel",
          "storyMotion": "withdraw"
        }
      ],
      "combos": [
        {
          "id": "aya-combo0",
          "name": "Rota de Telhado",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Dedo da Sombra → Cotovelo de Beco → Chute do Muro. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 11,
            "push": 28
          }
        },
        {
          "id": "aya-combo1",
          "name": "Sinal de Saída",
          "sequence": [
            "light",
            "heavy",
            "special0"
          ],
          "description": "Dedo da Sombra → Cotovelo de Beco → Beco Sem Saída. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 13,
            "push": 28
          }
        }
      ],
      "attackStyle": "aya",
      "defenseName": "Véu de Beco",
      "finisher": {
        "name": "O Beco Escolhe a Porta",
        "line": "Ainda existe um caminho.",
        "kind": "aya"
      },
      "super": {
        "id": "aya-super",
        "name": "Todas as Saídas",
        "description": "Com a energia completa, Aya Fumaça concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Ainda existe um caminho.",
        "kind": "aya",
        "type": "melee",
        "effect": "smoke",
        "meterCost": 100,
        "startup": 0.34500000000000003,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 248,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Todas as Saídas",
          "palette": [
            "#c34846",
            "#ffe6aa"
          ],
          "style": "speed"
        },
        "animation": {
          "pose": "aya-super",
          "prop": "smoke-scarf",
          "effect": "smoke"
        },
        "storyProp": "doorway"
      },
      "entrance": {
        "name": "Uma faixa luminosa risca a parede ao fundo.",
        "line": "Tente acompanhar.",
        "style": "speed",
        "gesture": "Aya salta do muro e desfaz o nó do lenço.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Uma faixa luminosa risca a parede ao fundo.",
            "pose": "arrive",
            "prop": "smoke-scarf",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Aya salta do muro e desfaz o nó do lenço.",
            "pose": "warmup",
            "prop": "smoke-scarf",
            "effect": "smoke"
          },
          {
            "at": 2.25,
            "action": "Uma cópia de fumaça termina o salto um instante depois.",
            "pose": "signature",
            "prop": "smoke-scarf",
            "effect": "smoke"
          },
          {
            "at": 3.25,
            "action": "Tente acompanhar.",
            "pose": "ready",
            "prop": "smoke-scarf",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Dedo da Sombra",
        "light": {
          "limb": "lead",
          "path": "finger-jab",
          "prop": "smoke-scarf"
        },
        "heavy": {
          "limb": "rear",
          "path": "ninja-elbow",
          "prop": "smoke-scarf"
        },
        "kick": {
          "limb": "leg",
          "path": "wall-kick",
          "prop": "smoke-scarf"
        },
        "guard": {
          "prop": "smoke-scarf",
          "pose": "aya-guard"
        }
      },
      "movement": {
        "walk": 1.2,
        "backwalk": 0.89,
        "jump": 1.13
      },
      "passive": null,
      "visual": {
        "body": "athletic",
        "silhouette": "Jaqueta curta cinza, calça de corrida escura, máscara azul e pequenas faixas luminosas nos pulsos. Lenço solto acompanha o giro.",
        "outfit": "Jaqueta curta cinza, calça de corrida escura, máscara azul e pequenas faixas luminosas nos pulsos. Lenço solto acompanha o giro.",
        "prop": "smoke-scarf",
        "stance": "Dedo da Sombra",
        "palette": [
          "#c34846",
          "#ffe6aa",
          "#d8a480",
          "#272b3c"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Uma cópia de fumaça termina o salto um instante depois.",
        "effect": "smoke",
        "line": "Ainda existe um caminho."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Aya Fumaça baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "daigo": {
      "normalScale": {
        "damage": 1.135,
        "speed": 0.848,
        "range": 1.004
      },
      "normalNames": {
        "light": "Palma de Sal",
        "heavy": "Empurrão da Montanha",
        "kick": "Pisada do Ringue"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.113,
          "active": 0.077,
          "recovery": 0.203,
          "effect": "fissure"
        },
        "heavy": {
          "startup": 0.247,
          "active": 0.097,
          "recovery": 0.338,
          "effect": "fissure"
        },
        "kick": {
          "startup": 0.17,
          "active": 0.103,
          "recovery": 0.291,
          "effect": "fissure"
        }
      },
      "specials": [
        {
          "name": "Terremoto do Ringue",
          "type": "dash",
          "description": "Bate o pé antes de uma investida pesada de ombro. O aviso permite saltar; agarrões vencem a armadura.",
          "startup": 0.31,
          "active": 0.29,
          "recovery": 0.43,
          "range": 128,
          "damage": 143,
          "stun": 0.34,
          "push": 110,
          "cooldown": 2.5,
          "effect": "fissure",
          "move": 295,
          "armor": 0.27,
          "id": "daigo-0",
          "animation": {
            "pose": "daigo-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "sumo-belt",
            "effect": "fissure",
            "storyProp": "dohyo"
          },
          "storyProp": "dohyo",
          "storyMotion": "travel"
        },
        {
          "name": "Volta do Dohyō",
          "type": "throw",
          "description": "Segura o cinto imaginário do rival e o gira até o outro lado. Precisa chegar muito perto.",
          "startup": 0.17,
          "active": 0.08,
          "recovery": 0.49,
          "range": 85,
          "damage": 162,
          "stun": 0.42,
          "push": 50,
          "cooldown": 2.4,
          "effect": "beast",
          "swap": true,
          "id": "daigo-1",
          "animation": {
            "pose": "daigo-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "sumo-belt",
            "effect": "beast",
            "storyProp": "sumo-belt"
          },
          "storyProp": "sumo-belt",
          "storyMotion": "close"
        },
        {
          "name": "Muralha de Palmas",
          "type": "melee",
          "description": "Três palmas curtas mantêm o rival próximo. Cada contato é defendível e o fim deixa Daigo exposto.",
          "startup": 0.16,
          "active": 0.34,
          "recovery": 0.37,
          "range": 128,
          "damage": 42,
          "stun": 0.17,
          "push": 17,
          "cooldown": 1.8,
          "effect": "spark",
          "multi": 3,
          "id": "daigo-2",
          "animation": {
            "pose": "daigo-special2",
            "limb": "both",
            "path": "rising",
            "prop": "sumo-belt",
            "effect": "spark",
            "storyProp": "palm-wave"
          },
          "storyProp": "palm-wave",
          "storyMotion": "strike"
        }
      ],
      "combos": [
        {
          "id": "daigo-combo0",
          "name": "Sal e Pedra",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Palma de Sal → Empurrão da Montanha → Pisada do Ringue. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 12,
            "push": 12
          }
        },
        {
          "id": "daigo-combo1",
          "name": "Montanha em Movimento",
          "sequence": [
            "light",
            "kick",
            "special2"
          ],
          "description": "Palma de Sal → Pisada do Ringue → Muralha de Palmas. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 14,
            "push": 12
          }
        }
      ],
      "attackStyle": "daigo",
      "defenseName": "Palmas do Dohyō",
      "finisher": {
        "name": "O Ringue Permanece",
        "line": "O chão é de todos nós.",
        "kind": "daigo"
      },
      "super": {
        "id": "daigo-super",
        "name": "Raiz da Montanha",
        "description": "Com a energia completa, Daigo Montanha concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "O chão é de todos nós.",
        "kind": "daigo",
        "type": "melee",
        "effect": "fissure",
        "meterCost": 100,
        "startup": 0.27,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 284,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Raiz da Montanha",
          "palette": [
            "#c34846",
            "#ffe6aa"
          ],
          "style": "power"
        },
        "animation": {
          "pose": "daigo-super",
          "prop": "sumo-belt",
          "effect": "fissure"
        },
        "storyProp": "dohyo"
      },
      "entrance": {
        "name": "Daigo distribui um punhado de sal na linha.",
        "line": "Vamos honrar este chão.",
        "style": "power",
        "gesture": "Ergue uma perna e executa um shiko controlado.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Daigo distribui um punhado de sal na linha.",
            "pose": "arrive",
            "prop": "sumo-belt",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Ergue uma perna e executa um shiko controlado.",
            "pose": "warmup",
            "prop": "sumo-belt",
            "effect": "fissure"
          },
          {
            "at": 2.25,
            "action": "A pisada levanta poeira e estabiliza uma pequena rachadura.",
            "pose": "signature",
            "prop": "sumo-belt",
            "effect": "fissure"
          },
          {
            "at": 3.25,
            "action": "Vamos honrar este chão.",
            "pose": "ready",
            "prop": "sumo-belt",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Palma de Sal",
        "light": {
          "limb": "lead",
          "path": "open-palm",
          "prop": "sumo-belt"
        },
        "heavy": {
          "limb": "rear",
          "path": "two-hand-push",
          "prop": "sumo-belt"
        },
        "kick": {
          "limb": "leg",
          "path": "sumo-stomp",
          "prop": "sumo-belt"
        },
        "guard": {
          "prop": "sumo-belt",
          "pose": "daigo-guard"
        }
      },
      "movement": {
        "walk": 0.94,
        "backwalk": 0.58,
        "jump": 0.84
      },
      "passive": null,
      "visual": {
        "body": "tank",
        "silhouette": "Corpo enorme, cabelo em nó tradicional e mawashi azul sem inscrições. Mãos abertas e base baixa transmitem firmeza.",
        "outfit": "Corpo enorme, cabelo em nó tradicional e mawashi azul sem inscrições. Mãos abertas e base baixa transmitem firmeza.",
        "prop": "sumo-belt",
        "stance": "Palma de Sal",
        "palette": [
          "#c34846",
          "#ffe6aa",
          "#d8a480",
          "#272b3c"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "A pisada levanta poeira e estabiliza uma pequena rachadura.",
        "effect": "fissure",
        "line": "O chão é de todos nós."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Daigo Montanha baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "kitsune": {
      "normalScale": {
        "damage": 0.97,
        "speed": 1.052,
        "range": 1.062
      },
      "normalNames": {
        "light": "Unha de Raposa",
        "heavy": "Leque de Caudas",
        "kick": "Passo de Festival"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.093,
          "active": 0.082,
          "recovery": 0.164,
          "effect": "copy"
        },
        "heavy": {
          "startup": 0.212,
          "active": 0.103,
          "recovery": 0.284,
          "effect": "copy"
        },
        "kick": {
          "startup": 0.144,
          "active": 0.11,
          "recovery": 0.246,
          "effect": "copy"
        }
      },
      "specials": [
        {
          "name": "Festival das Ilusões",
          "type": "teleport",
          "description": "Aparições atravessam a tela antes de um único ataque real pelas costas. A preparação é interrompível.",
          "startup": 0.29,
          "active": 0.12,
          "recovery": 0.4,
          "range": 118,
          "damage": 117,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "copy",
          "teleport": {
            "side": "behind",
            "distance": 103,
            "height": 0
          },
          "id": "kitsune-0",
          "animation": {
            "pose": "kitsune-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "fox-tails",
            "effect": "copy",
            "storyProp": "lantern"
          },
          "storyProp": "lantern",
          "storyMotion": "arrival"
        },
        {
          "name": "Lanterna Errante",
          "type": "projectile",
          "description": "Uma chama de raposa lenta percorre a linha do peito. Só uma lanterna permanece acesa por vez.",
          "startup": 0.24,
          "active": 0.06,
          "recovery": 0.32,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "fissure",
          "projectile": {
            "kind": "foxfire",
            "y": 58,
            "vx": 185,
            "radius": 29,
            "damage": 94,
            "stun": 0.34,
            "push": 38,
            "life": 3.3,
            "delay": 0.24,
            "unique": true,
            "arcAmplitude": 18,
            "arcFrequency": 4
          },
          "id": "kitsune-1",
          "animation": {
            "pose": "kitsune-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "fox-tails",
            "effect": "fissure",
            "storyProp": "lantern"
          },
          "storyProp": "lantern",
          "storyMotion": "release"
        },
        {
          "name": "Cauda do Santuário",
          "type": "launcher",
          "description": "As caudas se abrem num arco ascendente de curta distância. O brilho anuncia a subida.",
          "startup": 0.2,
          "active": 0.16,
          "recovery": 0.43,
          "range": 147,
          "damage": 112,
          "stun": 0.39,
          "push": 31,
          "cooldown": 1.8,
          "effect": "fissure",
          "reachY": 198,
          "launch": 285,
          "id": "kitsune-2",
          "animation": {
            "pose": "kitsune-special2",
            "limb": "both",
            "path": "rising",
            "prop": "fox-tails",
            "effect": "fissure",
            "storyProp": "fox-tails"
          },
          "storyProp": "fox-tails",
          "storyMotion": "rise"
        }
      ],
      "combos": [
        {
          "id": "kitsune-combo0",
          "name": "Festa Sem Dono",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Unha de Raposa → Leque de Caudas → Passo de Festival. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 13,
            "push": 16
          }
        },
        {
          "id": "kitsune-combo1",
          "name": "Promessa Rubra",
          "sequence": [
            "heavy",
            "kick",
            "special0"
          ],
          "description": "Leque de Caudas → Passo de Festival → Festival das Ilusões. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 15,
            "push": 16
          }
        }
      ],
      "attackStyle": "kitsune",
      "defenseName": "Máscara do Santuário",
      "finisher": {
        "name": "A Lanterna que Faltava",
        "line": "Você lembrou de voltar.",
        "kind": "kitsune"
      },
      "super": {
        "id": "kitsune-super",
        "name": "Mil Lanternas Rubras",
        "description": "Com a energia completa, Kitsune Rubra concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Você lembrou de voltar.",
        "kind": "kitsune",
        "type": "melee",
        "effect": "copy",
        "meterCost": 100,
        "startup": 0.29500000000000004,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 248,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Mil Lanternas Rubras",
          "palette": [
            "#c34846",
            "#ffe6aa"
          ],
          "style": "spectral"
        },
        "animation": {
          "pose": "kitsune-super",
          "prop": "fox-tails",
          "effect": "copy"
        },
        "storyProp": "lantern"
      },
      "entrance": {
        "name": "Uma lanterna apagada flutua até a arena.",
        "line": "Não esqueça a promessa.",
        "style": "spectral",
        "gesture": "Kitsune passa a unha na chama e acende o rosto da máscara.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Uma lanterna apagada flutua até a arena.",
            "pose": "arrive",
            "prop": "fox-tails",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Kitsune passa a unha na chama e acende o rosto da máscara.",
            "pose": "warmup",
            "prop": "fox-tails",
            "effect": "copy"
          },
          {
            "at": 2.25,
            "action": "Três caudas desenham um círculo e recolhem-se atrás do corpo.",
            "pose": "signature",
            "prop": "fox-tails",
            "effect": "copy"
          },
          {
            "at": 3.25,
            "action": "Não esqueça a promessa.",
            "pose": "ready",
            "prop": "fox-tails",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Unha de Raposa",
        "light": {
          "limb": "lead",
          "path": "claw-flick",
          "prop": "fox-tails"
        },
        "heavy": {
          "limb": "rear",
          "path": "tail-fan",
          "prop": "fox-tails"
        },
        "kick": {
          "limb": "leg",
          "path": "fox-step",
          "prop": "fox-tails"
        },
        "guard": {
          "prop": "fox-tails",
          "pose": "kitsune-guard"
        }
      },
      "movement": {
        "walk": 1,
        "backwalk": 0.74,
        "jump": 1.02
      },
      "passive": null,
      "visual": {
        "body": "spirit",
        "silhouette": "Máscara de raposa branca, roupa vermelha de mangas largas, pés leves e caudas espectrais de fogo que surgem apenas nos poderes.",
        "outfit": "Máscara de raposa branca, roupa vermelha de mangas largas, pés leves e caudas espectrais de fogo que surgem apenas nos poderes.",
        "prop": "fox-tails",
        "stance": "Unha de Raposa",
        "palette": [
          "#c34846",
          "#ffe6aa",
          "#d8a480",
          "#272b3c"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Três caudas desenham um círculo e recolhem-se atrás do corpo.",
        "effect": "copy",
        "line": "Você lembrou de voltar."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Kitsune Rubra baixa a guarda e reconhece a derrota.",
        "effect": "smoke"
      }
    },
    "tetsu": {
      "normalScale": {
        "damage": 1.135,
        "speed": 0.916,
        "range": 1.062
      },
      "normalNames": {
        "light": "Pistão Nove",
        "heavy": "Punho de Propulsão",
        "kick": "Bota de Atuador"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.097,
          "active": 0.087,
          "recovery": 0.184,
          "effect": "steam"
        },
        "heavy": {
          "startup": 0.226,
          "active": 0.109,
          "recovery": 0.314,
          "effect": "steam"
        },
        "kick": {
          "startup": 0.152,
          "active": 0.117,
          "recovery": 0.27,
          "effect": "steam"
        }
      },
      "specials": [
        {
          "name": "Quebra-Limite",
          "type": "dash",
          "description": "Concentra o motor no braço grande antes de um soco de propulsão. A preparação longa e o recuo do motor são puníveis.",
          "startup": 0.3,
          "active": 0.18,
          "recovery": 0.47,
          "range": 161,
          "damage": 151,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.7,
          "effect": "steam",
          "move": 350,
          "armor": 0.18,
          "overheat": 0.7,
          "id": "tetsu-0",
          "animation": {
            "pose": "tetsu-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "mecha-arm",
            "effect": "steam",
            "storyProp": "mecha-arm"
          },
          "storyProp": "mecha-arm",
          "storyMotion": "travel"
        },
        {
          "name": "Rebite de Teste",
          "type": "projectile",
          "description": "Um rebite de energia salta do braço menor; alcance curto e recuperação rápida.",
          "startup": 0.16,
          "active": 0.06,
          "recovery": 0.28,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "electric",
          "projectile": {
            "kind": "rivet",
            "y": 58,
            "vx": 380,
            "radius": 15,
            "damage": 86,
            "stun": 0.3,
            "push": 38,
            "life": 1.25,
            "delay": 0.16
          },
          "id": "tetsu-1",
          "animation": {
            "pose": "tetsu-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "mecha-arm",
            "effect": "electric",
            "storyProp": "rivet"
          },
          "storyProp": "rivet",
          "storyMotion": "release"
        },
        {
          "name": "Trava de Atuador",
          "type": "counter",
          "description": "Bloqueia um impacto com o braço maior e responde com o menor. Falha contra rasteiras e agarrões.",
          "startup": 0.055,
          "active": 0.24,
          "recovery": 0.38,
          "range": 146,
          "damage": 116,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.3,
          "effect": "steam",
          "counterWindow": 0.24,
          "counterDamage": 116,
          "id": "tetsu-2",
          "animation": {
            "pose": "tetsu-special2",
            "limb": "both",
            "path": "rising",
            "prop": "mecha-arm",
            "effect": "steam",
            "storyProp": "mecha-arm"
          },
          "storyProp": "mecha-arm",
          "storyMotion": "parry"
        }
      ],
      "combos": [
        {
          "id": "tetsu-combo0",
          "name": "Teste de Bancada",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Pistão Nove → Punho de Propulsão → Bota de Atuador. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 14,
            "push": 20
          }
        },
        {
          "id": "tetsu-combo1",
          "name": "Nove Vezes de Pé",
          "sequence": [
            "light",
            "heavy",
            "special0"
          ],
          "description": "Pistão Nove → Punho de Propulsão → Quebra-Limite. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 16,
            "push": 20
          }
        }
      ],
      "attackStyle": "tetsu",
      "defenseName": "Placa Assimétrica",
      "finisher": {
        "name": "O Motor Não Para",
        "line": "Ainda não terminamos o teste.",
        "kind": "tetsu"
      },
      "super": {
        "id": "tetsu-super",
        "name": "Décima Ignição",
        "description": "Com a energia completa, Tetsu-9 concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Ainda não terminamos o teste.",
        "kind": "tetsu",
        "type": "melee",
        "effect": "steam",
        "meterCost": 100,
        "startup": 0.32,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 284,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Décima Ignição",
          "palette": [
            "#c34846",
            "#ffe6aa"
          ],
          "style": "machine"
        },
        "animation": {
          "pose": "tetsu-super",
          "prop": "mecha-arm",
          "effect": "steam"
        },
        "storyProp": "mecha-arm"
      },
      "entrance": {
        "name": "O braço grande chega suspenso por um pequeno guincho.",
        "line": "Desta vez vai funcionar.",
        "style": "machine",
        "gesture": "Tetsu encaixa a peça e fecha o cockpit.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "O braço grande chega suspenso por um pequeno guincho.",
            "pose": "arrive",
            "prop": "mecha-arm",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Tetsu encaixa a peça e fecha o cockpit.",
            "pose": "warmup",
            "prop": "mecha-arm",
            "effect": "steam"
          },
          {
            "at": 2.25,
            "action": "O motor falha uma vez, depois todas as juntas acendem.",
            "pose": "signature",
            "prop": "mecha-arm",
            "effect": "steam"
          },
          {
            "at": 3.25,
            "action": "Desta vez vai funcionar.",
            "pose": "ready",
            "prop": "mecha-arm",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Pistão Nove",
        "light": {
          "limb": "lead",
          "path": "small-piston",
          "prop": "mecha-arm"
        },
        "heavy": {
          "limb": "rear",
          "path": "large-punch",
          "prop": "mecha-arm"
        },
        "kick": {
          "limb": "leg",
          "path": "actuator-kick",
          "prop": "mecha-arm"
        },
        "guard": {
          "prop": "mecha-arm",
          "pose": "tetsu-guard"
        }
      },
      "movement": {
        "walk": 0.96,
        "backwalk": 0.62,
        "jump": 0.9
      },
      "passive": null,
      "visual": {
        "body": "construct",
        "silhouette": "Armadura compacta de metal amarelo, cockpit aberto sobre o peito, braço direito enorme e esquerdo estreito com ferramentas. Jovem piloto de óculos de proteção.",
        "outfit": "Armadura compacta de metal amarelo, cockpit aberto sobre o peito, braço direito enorme e esquerdo estreito com ferramentas. Jovem piloto de óculos de proteção.",
        "prop": "mecha-arm",
        "stance": "Pistão Nove",
        "palette": [
          "#c34846",
          "#ffe6aa",
          "#d8a480",
          "#272b3c"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "O motor falha uma vez, depois todas as juntas acendem.",
        "effect": "steam",
        "line": "Ainda não terminamos o teste."
      },
      "defeat": {
        "pose": "crumble",
        "action": "Tetsu-9 baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "akari": {
      "normalScale": {
        "damage": 0.97,
        "speed": 1.12,
        "range": 1.062
      },
      "normalNames": {
        "light": "Toque de Batida",
        "heavy": "Palma do Refrão",
        "kick": "Passo de Neon"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.077,
          "active": 0.092,
          "recovery": 0.159,
          "effect": "music"
        },
        "heavy": {
          "startup": 0.191,
          "active": 0.115,
          "recovery": 0.274,
          "effect": "music"
        },
        "kick": {
          "startup": 0.126,
          "active": 0.124,
          "recovery": 0.239,
          "effect": "music"
        }
      },
      "specials": [
        {
          "name": "Refrão Final",
          "type": "projectile",
          "description": "Emite três pulsos ritmados com intervalos fixos. Cada pulso exige defesa; o terceiro possui alcance maior.",
          "startup": 0.2,
          "active": 0.06,
          "recovery": 0.41,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.4,
          "effect": "music",
          "projectile": {
            "kind": "note",
            "y": 58,
            "vx": 280,
            "radius": 24,
            "damage": 38,
            "stun": 0.17,
            "push": 18,
            "life": 2.4,
            "delay": 0.2,
            "count": 3,
            "stagger": 0.21,
            "spreadVx": 32
          },
          "id": "akari-0",
          "animation": {
            "pose": "akari-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "microphone",
            "effect": "music",
            "storyProp": "microphone"
          },
          "storyProp": "microphone",
          "storyMotion": "release"
        },
        {
          "name": "Passo Sincopado",
          "type": "dash",
          "description": "Desliza num passo lateral e toca o rival com a bota luminosa. Não possui proteção durante o avanço.",
          "startup": 0.1,
          "active": 0.18,
          "recovery": 0.27,
          "range": 121,
          "damage": 90,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "music",
          "move": 390,
          "id": "akari-1",
          "animation": {
            "pose": "akari-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "microphone",
            "effect": "music",
            "storyProp": "music-notes"
          },
          "storyProp": "music-notes",
          "storyMotion": "travel"
        },
        {
          "name": "Nota Aguda",
          "type": "launcher",
          "description": "Um círculo de som sai para cima da mão, bom para interceptar saltos próximos.",
          "startup": 0.16,
          "active": 0.16,
          "recovery": 0.38,
          "range": 132,
          "damage": 99,
          "stun": 0.39,
          "push": 31,
          "cooldown": 1.8,
          "effect": "music",
          "reachY": 198,
          "launch": 275,
          "id": "akari-2",
          "animation": {
            "pose": "akari-special2",
            "limb": "both",
            "path": "rising",
            "prop": "microphone",
            "effect": "music",
            "storyProp": "music-notes"
          },
          "storyProp": "music-notes",
          "storyMotion": "rise"
        }
      ],
      "combos": [
        {
          "id": "akari-combo0",
          "name": "Primeiro Compasso",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Toque de Batida → Palma do Refrão → Passo de Neon. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 15,
            "push": 24
          }
        },
        {
          "id": "akari-combo1",
          "name": "Refrão da Liberdade",
          "sequence": [
            "light",
            "kick",
            "special1"
          ],
          "description": "Toque de Batida → Passo de Neon → Passo Sincopado. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 17,
            "push": 24
          }
        }
      ],
      "attackStyle": "akari",
      "defenseName": "Pausa de Luz",
      "finisher": {
        "name": "A Voz Fora do Roteiro",
        "line": "Pode cantar comigo agora.",
        "kind": "akari"
      },
      "super": {
        "id": "akari-super",
        "name": "Mil Vozes de Neon",
        "description": "Com a energia completa, Akari Neon concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Pode cantar comigo agora.",
        "kind": "akari",
        "type": "melee",
        "effect": "music",
        "meterCost": 100,
        "startup": 0.34500000000000003,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 248,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Mil Vozes de Neon",
          "palette": [
            "#c34846",
            "#ffe6aa"
          ],
          "style": "dance"
        },
        "animation": {
          "pose": "akari-super",
          "prop": "microphone",
          "effect": "music"
        },
        "storyProp": "microphone"
      },
      "entrance": {
        "name": "O microfone flutua acendendo círculos sobre o chão.",
        "line": "Essa voz é minha.",
        "style": "dance",
        "gesture": "Akari toca a ponta das botas em quatro tempos.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "O microfone flutua acendendo círculos sobre o chão.",
            "pose": "arrive",
            "prop": "microphone",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Akari toca a ponta das botas em quatro tempos.",
            "pose": "warmup",
            "prop": "microphone",
            "effect": "music"
          },
          {
            "at": 2.25,
            "action": "Abre os braços: a melodia vira pequenos pixels de luz.",
            "pose": "signature",
            "prop": "microphone",
            "effect": "music"
          },
          {
            "at": 3.25,
            "action": "Essa voz é minha.",
            "pose": "ready",
            "prop": "microphone",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Toque de Batida",
        "light": {
          "limb": "lead",
          "path": "beat-tap",
          "prop": "microphone"
        },
        "heavy": {
          "limb": "rear",
          "path": "chorus-palm",
          "prop": "microphone"
        },
        "kick": {
          "limb": "leg",
          "path": "dance-kick",
          "prop": "microphone"
        },
        "guard": {
          "prop": "microphone",
          "pose": "akari-guard"
        }
      },
      "movement": {
        "walk": 1.04,
        "backwalk": 0.8,
        "jump": 1.02
      },
      "passive": null,
      "visual": {
        "body": "athletic",
        "silhouette": "Jaqueta violeta curta, botas ciano luminosas, cabelo azul preso em duas mechas e microfone flutuante com anéis digitais.",
        "outfit": "Jaqueta violeta curta, botas ciano luminosas, cabelo azul preso em duas mechas e microfone flutuante com anéis digitais.",
        "prop": "microphone",
        "stance": "Toque de Batida",
        "palette": [
          "#c34846",
          "#ffe6aa",
          "#d8a480",
          "#272b3c"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Abre os braços: a melodia vira pequenos pixels de luz.",
        "effect": "music",
        "line": "Pode cantar comigo agora."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Akari Neon baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "goro": {
      "normalScale": {
        "damage": 1.08,
        "speed": 0.984,
        "range": 0.946
      },
      "normalNames": {
        "light": "Nó de Chifre",
        "heavy": "Martelo Carmesim",
        "kick": "Calcanhar do Oni"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.092,
          "active": 0.067,
          "recovery": 0.179,
          "effect": "beast"
        },
        "heavy": {
          "startup": 0.216,
          "active": 0.121,
          "recovery": 0.304,
          "effect": "beast"
        },
        "kick": {
          "startup": 0.145,
          "active": 0.103,
          "recovery": 0.263,
          "effect": "beast"
        }
      },
      "specials": [
        {
          "name": "Despertar Oni",
          "type": "melee",
          "description": "Faz a máscara brilhar e cresce em força por quatro segundos. O gesto inicial não ataca e pode ser punido.",
          "startup": 0.34,
          "active": 0.05,
          "recovery": 0.38,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 6,
          "effect": "beast",
          "buff": {
            "kind": "power",
            "duration": 4,
            "damage": 1.18
          },
          "id": "goro-0",
          "animation": {
            "pose": "goro-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "oni-mask",
            "effect": "beast",
            "storyProp": "oni-mask"
          },
          "storyProp": "oni-mask",
          "storyMotion": "strike"
        },
        {
          "name": "Ombro Carmesim",
          "type": "dash",
          "description": "Uma arrancada curta de ombro aproxima Goro. Tem um contato pesado, sem invulnerabilidade.",
          "startup": 0.19,
          "active": 0.2,
          "recovery": 0.36,
          "range": 117,
          "damage": 114,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "beast",
          "move": 310,
          "id": "goro-1",
          "animation": {
            "pose": "goro-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "oni-mask",
            "effect": "beast",
            "storyProp": "oni-mask"
          },
          "storyProp": "oni-mask",
          "storyMotion": "travel"
        },
        {
          "name": "Dívida da Máscara",
          "type": "throw",
          "description": "Ergue o rival pelo torso e o derruba diante de si. Alcance curto e recuperação longa compensam o dano.",
          "startup": 0.17,
          "active": 0.08,
          "recovery": 0.48,
          "range": 79,
          "damage": 150,
          "stun": 0.42,
          "push": 50,
          "cooldown": 2.4,
          "effect": "beast",
          "id": "goro-2",
          "animation": {
            "pose": "goro-special2",
            "limb": "both",
            "path": "rising",
            "prop": "oni-mask",
            "effect": "beast",
            "storyProp": "oni-mask"
          },
          "storyProp": "oni-mask",
          "storyMotion": "close"
        }
      ],
      "combos": [
        {
          "id": "goro-combo0",
          "name": "Metade da Máscara",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Nó de Chifre → Martelo Carmesim → Calcanhar do Oni. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 8,
            "push": 28
          }
        },
        {
          "id": "goro-combo1",
          "name": "Sangue Desperto",
          "sequence": [
            "heavy",
            "kick",
            "special1"
          ],
          "description": "Martelo Carmesim → Calcanhar do Oni → Ombro Carmesim. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 10,
            "push": 28
          }
        }
      ],
      "attackStyle": "goro",
      "defenseName": "Guarda do Herdeiro",
      "finisher": {
        "name": "O Nome Não É a Maldição",
        "line": "Minha força responde a mim.",
        "kind": "goro"
      },
      "super": {
        "id": "goro-super",
        "name": "A Outra Metade",
        "description": "Com a energia completa, Goro Máscara-Vermelha concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Minha força responde a mim.",
        "kind": "goro",
        "type": "melee",
        "effect": "beast",
        "meterCost": 100,
        "startup": 0.27,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 272,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "A Outra Metade",
          "palette": [
            "#c34846",
            "#ffe6aa"
          ],
          "style": "power"
        },
        "animation": {
          "pose": "goro-super",
          "prop": "oni-mask",
          "effect": "beast"
        },
        "storyProp": "oni-mask"
      },
      "entrance": {
        "name": "Goro puxa a máscara rachada do cinto.",
        "line": "Eu ainda escolho quem sou.",
        "style": "power",
        "gesture": "Tenta encaixar a metade ausente e fecha os olhos.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Goro puxa a máscara rachada do cinto.",
            "pose": "arrive",
            "prop": "oni-mask",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Tenta encaixar a metade ausente e fecha os olhos.",
            "pose": "warmup",
            "prop": "oni-mask",
            "effect": "beast"
          },
          {
            "at": 2.25,
            "action": "Os pequenos chifres brilham; ele recusa vestir a máscara.",
            "pose": "signature",
            "prop": "oni-mask",
            "effect": "beast"
          },
          {
            "at": 3.25,
            "action": "Eu ainda escolho quem sou.",
            "pose": "ready",
            "prop": "oni-mask",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Nó de Chifre",
        "light": {
          "limb": "lead",
          "path": "horn-fist",
          "prop": "oni-mask"
        },
        "heavy": {
          "limb": "rear",
          "path": "oni-hammer",
          "prop": "oni-mask"
        },
        "kick": {
          "limb": "leg",
          "path": "heavy-heel",
          "prop": "oni-mask"
        },
        "guard": {
          "prop": "oni-mask",
          "pose": "goro-guard"
        }
      },
      "movement": {
        "walk": 1,
        "backwalk": 0.67,
        "jump": 1
      },
      "passive": null,
      "visual": {
        "body": "tank",
        "silhouette": "Jaqueta aberta, cabelos pretos curtos, pequenos chifres e metade de uma máscara vermelha presa ao cinto. Braços marcados por veios carmesim.",
        "outfit": "Jaqueta aberta, cabelos pretos curtos, pequenos chifres e metade de uma máscara vermelha presa ao cinto. Braços marcados por veios carmesim.",
        "prop": "oni-mask",
        "stance": "Nó de Chifre",
        "palette": [
          "#c34846",
          "#ffe6aa",
          "#d8a480",
          "#272b3c"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Os pequenos chifres brilham; ele recusa vestir a máscara.",
        "effect": "beast",
        "line": "Minha força responde a mim."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Goro Máscara-Vermelha baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "mika": {
      "normalScale": {
        "damage": 1.025,
        "speed": 1.12,
        "range": 1.004
      },
      "normalNames": {
        "light": "Nó de Guidão",
        "heavy": "Cotovelo de Curva",
        "kick": "Bota da Madrugada"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.079,
          "active": 0.072,
          "recovery": 0.163,
          "effect": "dash"
        },
        "heavy": {
          "startup": 0.193,
          "active": 0.097,
          "recovery": 0.278,
          "effect": "dash"
        },
        "kick": {
          "startup": 0.128,
          "active": 0.11,
          "recovery": 0.243,
          "effect": "dash"
        }
      },
      "specials": [
        {
          "name": "Linha Vermelha",
          "type": "dash",
          "description": "Os propulsores levam um chute reto por grande distância. A freada é demorada e nenhum trecho concede invulnerabilidade.",
          "startup": 0.18,
          "active": 0.3,
          "recovery": 0.43,
          "range": 131,
          "damage": 124,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.4,
          "effect": "dash",
          "move": 590,
          "pass": true,
          "id": "mika-0",
          "animation": {
            "pose": "mika-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "thruster-boots",
            "effect": "dash",
            "storyProp": "tunnel"
          },
          "storyProp": "tunnel",
          "storyMotion": "travel"
        },
        {
          "name": "Derrapagem de Túnel",
          "type": "melee",
          "description": "Desce ao chão com a bota estendida numa rasteira longa; saltos evitam a trajetória.",
          "startup": 0.15,
          "active": 0.21,
          "recovery": 0.36,
          "range": 190,
          "damage": 98,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "spark",
          "hitHeight": "low",
          "ground": true,
          "move": 140,
          "id": "mika-1",
          "animation": {
            "pose": "mika-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "thruster-boots",
            "effect": "spark",
            "storyProp": "brake-track"
          },
          "storyProp": "brake-track",
          "storyMotion": "strike"
        },
        {
          "name": "Rampa de Asfalto",
          "type": "launcher",
          "description": "Usa uma ignição curta para um chute ascendente. Forte contra saltos próximos, fraco na recuperação.",
          "startup": 0.14,
          "active": 0.16,
          "recovery": 0.44,
          "range": 142,
          "damage": 109,
          "stun": 0.39,
          "push": 31,
          "cooldown": 1.8,
          "effect": "steam",
          "reachY": 198,
          "launch": 300,
          "id": "mika-2",
          "animation": {
            "pose": "mika-special2",
            "limb": "both",
            "path": "rising",
            "prop": "thruster-boots",
            "effect": "steam",
            "storyProp": "ramp"
          },
          "storyProp": "ramp",
          "storyMotion": "rise"
        }
      ],
      "combos": [
        {
          "id": "mika-combo0",
          "name": "Curva de Fora",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Nó de Guidão → Cotovelo de Curva → Bota da Madrugada. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 9,
            "push": 12
          }
        },
        {
          "id": "mika-combo1",
          "name": "Motor na Faixa",
          "sequence": [
            "light",
            "heavy",
            "special0"
          ],
          "description": "Nó de Guidão → Cotovelo de Curva → Linha Vermelha. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 11,
            "push": 12
          }
        }
      ],
      "attackStyle": "mika",
      "defenseName": "Antebraço do Guidão",
      "finisher": {
        "name": "A Estrada Ainda Tem Volta",
        "line": "Ninguém fica no túnel.",
        "kind": "mika"
      },
      "super": {
        "id": "mika-super",
        "name": "Última Curva da Noite",
        "description": "Com a energia completa, Mika Turbo concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Ninguém fica no túnel.",
        "kind": "mika",
        "type": "melee",
        "effect": "dash",
        "meterCost": 100,
        "startup": 0.29500000000000004,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 260,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Última Curva da Noite",
          "palette": [
            "#c34846",
            "#ffe6aa"
          ],
          "style": "speed"
        },
        "animation": {
          "pose": "mika-super",
          "prop": "thruster-boots",
          "effect": "dash"
        },
        "storyProp": "tunnel"
      },
      "entrance": {
        "name": "Mika entra empurrando uma motocicleta fora da faixa de luta.",
        "line": "Depois da curva eu espero você.",
        "style": "speed",
        "gesture": "Deixa o capacete no banco e bate a bota no asfalto.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Mika entra empurrando uma motocicleta fora da faixa de luta.",
            "pose": "arrive",
            "prop": "thruster-boots",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Deixa o capacete no banco e bate a bota no asfalto.",
            "pose": "warmup",
            "prop": "thruster-boots",
            "effect": "dash"
          },
          {
            "at": 2.25,
            "action": "Os propulsores riscam um arco curto; ela freia antes da linha.",
            "pose": "signature",
            "prop": "thruster-boots",
            "effect": "dash"
          },
          {
            "at": 3.25,
            "action": "Depois da curva eu espero você.",
            "pose": "ready",
            "prop": "thruster-boots",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Nó de Guidão",
        "light": {
          "limb": "lead",
          "path": "handle-jab",
          "prop": "thruster-boots"
        },
        "heavy": {
          "limb": "rear",
          "path": "turn-elbow",
          "prop": "thruster-boots"
        },
        "kick": {
          "limb": "leg",
          "path": "racing-kick",
          "prop": "thruster-boots"
        },
        "guard": {
          "prop": "thruster-boots",
          "pose": "mika-guard"
        }
      },
      "movement": {
        "walk": 1.08,
        "backwalk": 0.76,
        "jump": 1.06
      },
      "passive": null,
      "visual": {
        "body": "athletic",
        "silhouette": "Jaqueta verde-escura de motociclista, capacete grafite ao braço, cabelo curto roxo e botas largas com pequenos propulsores.",
        "outfit": "Jaqueta verde-escura de motociclista, capacete grafite ao braço, cabelo curto roxo e botas largas com pequenos propulsores.",
        "prop": "thruster-boots",
        "stance": "Nó de Guidão",
        "palette": [
          "#c34846",
          "#ffe6aa",
          "#d8a480",
          "#272b3c"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Os propulsores riscam um arco curto; ela freia antes da linha.",
        "effect": "dash",
        "line": "Ninguém fica no túnel."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Mika Turbo baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "shiori": {
      "normalScale": {
        "damage": 0.97,
        "speed": 0.984,
        "range": 1.12
      },
      "normalNames": {
        "light": "Borda de Papel",
        "heavy": "Palma da Dobra",
        "kick": "Passo de Garça"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.094,
          "active": 0.077,
          "recovery": 0.183,
          "effect": "wind"
        },
        "heavy": {
          "startup": 0.218,
          "active": 0.103,
          "recovery": 0.308,
          "effect": "wind"
        },
        "kick": {
          "startup": 0.147,
          "active": 0.117,
          "recovery": 0.267,
          "effect": "wind"
        }
      },
      "specials": [
        {
          "name": "Mil Asas",
          "type": "projectile",
          "description": "Três aves de origami convergem em alturas próximas. Cada ave tem pouco dano e pode ser defendida.",
          "startup": 0.28,
          "active": 0.06,
          "recovery": 0.39,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.5,
          "effect": "wind",
          "projectile": {
            "kind": "origami",
            "y": 34,
            "vx": 255,
            "radius": 16,
            "damage": 38,
            "stun": 0.3,
            "push": 17,
            "life": 2.4,
            "delay": 0.28,
            "count": 3,
            "stagger": 0.13,
            "spreadY": 21,
            "spreadVx": 20,
            "arcAmplitude": 22,
            "arcFrequency": 5
          },
          "id": "shiori-0",
          "animation": {
            "pose": "shiori-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "paper-seals",
            "effect": "wind",
            "storyProp": "paper-crane"
          },
          "storyProp": "paper-crane",
          "storyMotion": "release"
        },
        {
          "name": "Selo da Margem",
          "type": "trap",
          "description": "Cola um selo sob o rival que prende os pés após um atraso. Saltos evitam a ativação.",
          "startup": 0.25,
          "active": 0.06,
          "recovery": 0.35,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.3,
          "effect": "trap",
          "projectile": {
            "kind": "seal",
            "y": 12,
            "vx": 0,
            "radius": 37,
            "damage": 66,
            "stun": 0.29,
            "push": 20,
            "life": 2.3,
            "delay": 0.64,
            "anchor": "enemy",
            "maxRange": 300,
            "unique": true,
            "hitHeight": "low",
            "root": 0.68
          },
          "id": "shiori-1",
          "animation": {
            "pose": "shiori-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "paper-seals",
            "effect": "trap",
            "storyProp": "paper-seal"
          },
          "storyProp": "paper-seal",
          "storyMotion": "plant"
        },
        {
          "name": "Dobra Reversa",
          "type": "retreat",
          "description": "Abre um leque de papel duro na frente e recua. O alcance termina na ponta do leque.",
          "startup": 0.13,
          "active": 0.16,
          "recovery": 0.29,
          "range": 185,
          "damage": 85,
          "stun": 0.34,
          "push": 90,
          "cooldown": 1.8,
          "effect": "wind",
          "move": -260,
          "id": "shiori-2",
          "animation": {
            "pose": "shiori-special2",
            "limb": "both",
            "path": "rising",
            "prop": "paper-seals",
            "effect": "wind",
            "storyProp": "paper-crane"
          },
          "storyProp": "paper-crane",
          "storyMotion": "withdraw"
        }
      ],
      "combos": [
        {
          "id": "shiori-combo0",
          "name": "Vinco e Margem",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Borda de Papel → Palma da Dobra → Passo de Garça. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 10,
            "push": 16
          }
        },
        {
          "id": "shiori-combo1",
          "name": "História em Asas",
          "sequence": [
            "light",
            "kick",
            "special2"
          ],
          "description": "Borda de Papel → Passo de Garça → Dobra Reversa. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 12,
            "push": 16
          }
        }
      ],
      "attackStyle": "shiori",
      "defenseName": "Leque de Selos",
      "finisher": {
        "name": "A Página que Resiste",
        "line": "Ninguém vai apagar seu nome.",
        "kind": "shiori"
      },
      "super": {
        "id": "shiori-super",
        "name": "Biblioteca das Asas",
        "description": "Com a energia completa, Shiori Papel-Vivo concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Ninguém vai apagar seu nome.",
        "kind": "shiori",
        "type": "melee",
        "effect": "wind",
        "meterCost": 100,
        "startup": 0.32,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 248,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Biblioteca das Asas",
          "palette": [
            "#c34846",
            "#ffe6aa"
          ],
          "style": "weapon"
        },
        "animation": {
          "pose": "shiori-super",
          "prop": "paper-seals",
          "effect": "wind"
        },
        "storyProp": "paper-crane"
      },
      "entrance": {
        "name": "Uma garça de papel carrega uma tira até Shiori.",
        "line": "Toda história deixa uma dobra.",
        "style": "weapon",
        "gesture": "Ela escreve um selo no ar, sem tinta.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Uma garça de papel carrega uma tira até Shiori.",
            "pose": "arrive",
            "prop": "paper-seals",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Ela escreve um selo no ar, sem tinta.",
            "pose": "warmup",
            "prop": "paper-seals",
            "effect": "wind"
          },
          {
            "at": 2.25,
            "action": "A garça se divide em três e pousa no cinto.",
            "pose": "signature",
            "prop": "paper-seals",
            "effect": "wind"
          },
          {
            "at": 3.25,
            "action": "Toda história deixa uma dobra.",
            "pose": "ready",
            "prop": "paper-seals",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Borda de Papel",
        "light": {
          "limb": "lead",
          "path": "paper-edge",
          "prop": "paper-seals"
        },
        "heavy": {
          "limb": "rear",
          "path": "folded-palm",
          "prop": "paper-seals"
        },
        "kick": {
          "limb": "leg",
          "path": "crane-step",
          "prop": "paper-seals"
        },
        "guard": {
          "prop": "paper-seals",
          "pose": "shiori-guard"
        }
      },
      "movement": {
        "walk": 0.96,
        "backwalk": 0.68,
        "jump": 0.96
      },
      "passive": null,
      "visual": {
        "body": "slim",
        "silhouette": "Roupa cerimonial branca e verde estilizada, mangas curtas para combate e tiras de papel presas ao cinto. Cabelo longo preso com uma dobra de origami.",
        "outfit": "Roupa cerimonial branca e verde estilizada, mangas curtas para combate e tiras de papel presas ao cinto. Cabelo longo preso com uma dobra de origami.",
        "prop": "paper-seals",
        "stance": "Borda de Papel",
        "palette": [
          "#c34846",
          "#ffe6aa",
          "#d8a480",
          "#272b3c"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "A garça se divide em três e pousa no cinto.",
        "effect": "wind",
        "line": "Ninguém vai apagar seu nome."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Shiori Papel-Vivo baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "liang": {
      "normalScale": {
        "damage": 1.025,
        "speed": 0.984,
        "range": 1.004
      },
      "normalNames": {
        "light": "Palma do Pátio",
        "heavy": "Punho de Bronze",
        "kick": "Arco do Templo"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.095,
          "active": 0.082,
          "recovery": 0.185,
          "effect": "wave"
        },
        "heavy": {
          "startup": 0.219,
          "active": 0.109,
          "recovery": 0.31,
          "effect": "wave"
        },
        "kick": {
          "startup": 0.148,
          "active": 0.124,
          "recovery": 0.269,
          "effect": "wave"
        }
      },
      "specials": [
        {
          "name": "Sino de Bronze",
          "type": "projectile",
          "description": "Uma palma lança uma onda de impacto em linha média. Trajetória estável permite defender e saltar.",
          "startup": 0.18,
          "active": 0.06,
          "recovery": 0.3,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "wave",
          "projectile": {
            "kind": "bellwave",
            "y": 58,
            "vx": 345,
            "radius": 26,
            "damage": 99,
            "stun": 0.3,
            "push": 65,
            "life": 2.4,
            "delay": 0.18
          },
          "id": "liang-0",
          "animation": {
            "pose": "liang-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "bronze-bracelets",
            "effect": "wave",
            "storyProp": "bronze-bell"
          },
          "storyProp": "bronze-bell",
          "storyMotion": "release"
        },
        {
          "name": "Braceletes Unidos",
          "type": "counter",
          "description": "Une os braceletes para interceptar e devolver uma palma curta. Não evita rasteiras e agarrões.",
          "startup": 0.055,
          "active": 0.23,
          "recovery": 0.32,
          "range": 143,
          "damage": 106,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.3,
          "effect": "block",
          "counterWindow": 0.23,
          "counterDamage": 106,
          "id": "liang-1",
          "animation": {
            "pose": "liang-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "bronze-bracelets",
            "effect": "block",
            "storyProp": "bronze-bracelets"
          },
          "storyProp": "bronze-bracelets",
          "storyMotion": "parry"
        },
        {
          "name": "Escada do Pátio",
          "type": "launcher",
          "description": "Um chute ascendente de base firme alcança saltos baixos. A recuperação longa exige confirmar a aproximação.",
          "startup": 0.15,
          "active": 0.16,
          "recovery": 0.4,
          "range": 144,
          "damage": 107,
          "stun": 0.39,
          "push": 31,
          "cooldown": 1.8,
          "effect": "wave",
          "reachY": 198,
          "launch": 285,
          "id": "liang-2",
          "animation": {
            "pose": "liang-special2",
            "limb": "both",
            "path": "rising",
            "prop": "bronze-bracelets",
            "effect": "wave",
            "storyProp": "bronze-bell"
          },
          "storyProp": "bronze-bell",
          "storyMotion": "rise"
        }
      ],
      "combos": [
        {
          "id": "liang-combo0",
          "name": "Três Lições",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Palma do Pátio → Punho de Bronze → Arco do Templo. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 11,
            "push": 20
          }
        },
        {
          "id": "liang-combo1",
          "name": "O Eco Responde",
          "sequence": [
            "heavy",
            "kick",
            "special2"
          ],
          "description": "Punho de Bronze → Arco do Templo → Escada do Pátio. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 13,
            "push": 20
          }
        }
      ],
      "attackStyle": "liang",
      "defenseName": "Braceletes do Pátio",
      "finisher": {
        "name": "O Sino Volta a Soar",
        "line": "O próximo passo ainda ensina.",
        "kind": "liang"
      },
      "super": {
        "id": "liang-super",
        "name": "Oitavo Eco de Bronze",
        "description": "Com a energia completa, Liang Punho de Bronze concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "O próximo passo ainda ensina.",
        "kind": "liang",
        "type": "melee",
        "effect": "wave",
        "meterCost": 100,
        "startup": 0.34500000000000003,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 260,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Oitavo Eco de Bronze",
          "palette": [
            "#bc7340",
            "#e6d387"
          ],
          "style": "weapon"
        },
        "animation": {
          "pose": "liang-super",
          "prop": "bronze-bracelets",
          "effect": "wave"
        },
        "storyProp": "bronze-bell"
      },
      "entrance": {
        "name": "Liang deposita um pequeno sino na lateral da arena.",
        "line": "Encontre a sua medida.",
        "style": "weapon",
        "gesture": "Ajusta os braceletes e executa duas respirações lentas.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Liang deposita um pequeno sino na lateral da arena.",
            "pose": "arrive",
            "prop": "bronze-bracelets",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Ajusta os braceletes e executa duas respirações lentas.",
            "pose": "warmup",
            "prop": "bronze-bracelets",
            "effect": "wave"
          },
          {
            "at": 2.25,
            "action": "Uma palma sem contato faz o sino responder.",
            "pose": "signature",
            "prop": "bronze-bracelets",
            "effect": "wave"
          },
          {
            "at": 3.25,
            "action": "Encontre a sua medida.",
            "pose": "ready",
            "prop": "bronze-bracelets",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Palma do Pátio",
        "light": {
          "limb": "lead",
          "path": "open-palm",
          "prop": "bronze-bracelets"
        },
        "heavy": {
          "limb": "rear",
          "path": "bronze-punch",
          "prop": "bronze-bracelets"
        },
        "kick": {
          "limb": "leg",
          "path": "temple-roundhouse",
          "prop": "bronze-bracelets"
        },
        "guard": {
          "prop": "bronze-bracelets",
          "pose": "liang-guard"
        }
      },
      "movement": {
        "walk": 1,
        "backwalk": 0.67,
        "jump": 1
      },
      "passive": null,
      "visual": {
        "body": "athletic",
        "silhouette": "Cabeça raspada, roupas de treino ocre, braceletes de bronze e faixa verde. A postura equilibra uma mão aberta e outra fechada.",
        "outfit": "Cabeça raspada, roupas de treino ocre, braceletes de bronze e faixa verde. A postura equilibra uma mão aberta e outra fechada.",
        "prop": "bronze-bracelets",
        "stance": "Palma do Pátio",
        "palette": [
          "#bc7340",
          "#e6d387",
          "#bc8a68",
          "#293a36"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Uma palma sem contato faz o sino responder.",
        "effect": "wave",
        "line": "O próximo passo ainda ensina."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Liang Punho de Bronze baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "mei": {
      "normalScale": {
        "damage": 0.97,
        "speed": 1.052,
        "range": 1.12
      },
      "normalNames": {
        "light": "Ponta de Seda",
        "heavy": "Laço de Horizonte",
        "kick": "Roda da Acrobata"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.089,
          "active": 0.087,
          "recovery": 0.164,
          "effect": "spin"
        },
        "heavy": {
          "startup": 0.208,
          "active": 0.115,
          "recovery": 0.284,
          "effect": "spin"
        },
        "kick": {
          "startup": 0.14,
          "active": 0.103,
          "recovery": 0.246,
          "effect": "spin"
        }
      },
      "specials": [
        {
          "name": "Nó Celeste",
          "type": "throw",
          "description": "Envolve o rival próximo nas fitas e o arremessa num giro. O alcance maior que o de um agarrão comum exige preparação longa.",
          "startup": 0.25,
          "active": 0.08,
          "recovery": 0.46,
          "range": 113,
          "damage": 139,
          "stun": 0.42,
          "push": 50,
          "cooldown": 2.4,
          "effect": "spin",
          "swap": true,
          "id": "mei-0",
          "animation": {
            "pose": "mei-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "silk-ribbon",
            "effect": "spin",
            "storyProp": "silk-ribbon"
          },
          "storyProp": "silk-ribbon",
          "storyMotion": "close"
        },
        {
          "name": "Fita de Retorno",
          "type": "melee",
          "description": "A fita estala de longe e puxa o alvo em um contato defendível. Não é um agarrão à distância.",
          "startup": 0.23,
          "active": 0.13,
          "recovery": 0.37,
          "range": 255,
          "damage": 80,
          "stun": 0.34,
          "push": 0,
          "cooldown": 1.8,
          "effect": "trap",
          "pull": 115,
          "id": "mei-1",
          "animation": {
            "pose": "mei-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "silk-ribbon",
            "effect": "trap",
            "storyProp": "silk-ribbon"
          },
          "storyProp": "silk-ribbon",
          "storyMotion": "strike"
        },
        {
          "name": "Roda do Lago",
          "type": "launcher",
          "description": "Abre um giro de pernas com a fita formando um arco vertical. Bom contra saltos à frente.",
          "startup": 0.19,
          "active": 0.16,
          "recovery": 0.42,
          "range": 168,
          "damage": 104,
          "stun": 0.39,
          "push": 31,
          "cooldown": 1.8,
          "effect": "spin",
          "reachY": 198,
          "launch": 275,
          "id": "mei-2",
          "animation": {
            "pose": "mei-special2",
            "limb": "both",
            "path": "rising",
            "prop": "silk-ribbon",
            "effect": "spin",
            "storyProp": "silk-ribbon"
          },
          "storyProp": "silk-ribbon",
          "storyMotion": "rise"
        }
      ],
      "combos": [
        {
          "id": "mei-combo0",
          "name": "Dois Nós",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Ponta de Seda → Laço de Horizonte → Roda da Acrobata. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 12,
            "push": 24
          }
        },
        {
          "id": "mei-combo1",
          "name": "Horizonte de Seda",
          "sequence": [
            "light",
            "heavy",
            "special1"
          ],
          "description": "Ponta de Seda → Laço de Horizonte → Fita de Retorno. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 14,
            "push": 24
          }
        }
      ],
      "attackStyle": "mei",
      "defenseName": "Círculo do Punho",
      "finisher": {
        "name": "O Fio dos Ausentes",
        "line": "Ninguém vai puxar nossos nomes.",
        "kind": "mei"
      },
      "super": {
        "id": "mei-super",
        "name": "Constelação de Seda",
        "description": "Com a energia completa, Mei Fita de Seda concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Ninguém vai puxar nossos nomes.",
        "kind": "mei",
        "type": "melee",
        "effect": "spin",
        "meterCost": 100,
        "startup": 0.27,
        "active": 0.19,
        "recovery": 0.66,
        "range": 255,
        "reachY": 190,
        "damage": 248,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Constelação de Seda",
          "palette": [
            "#bc7340",
            "#e6d387"
          ],
          "style": "dance"
        },
        "animation": {
          "pose": "mei-super",
          "prop": "silk-ribbon",
          "effect": "spin"
        },
        "storyProp": "silk-ribbon"
      },
      "entrance": {
        "name": "Uma fita desenha uma espiral sobre o chão.",
        "line": "O próximo laço é seu.",
        "style": "dance",
        "gesture": "Mei gira de uma perna só e recolhe a ponta solta.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Uma fita desenha uma espiral sobre o chão.",
            "pose": "arrive",
            "prop": "silk-ribbon",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Mei gira de uma perna só e recolhe a ponta solta.",
            "pose": "warmup",
            "prop": "silk-ribbon",
            "effect": "spin"
          },
          {
            "at": 2.25,
            "action": "Forma no ar um nó que brilha e se desfaz.",
            "pose": "signature",
            "prop": "silk-ribbon",
            "effect": "spin"
          },
          {
            "at": 3.25,
            "action": "O próximo laço é seu.",
            "pose": "ready",
            "prop": "silk-ribbon",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Ponta de Seda",
        "light": {
          "limb": "lead",
          "path": "ribbon-tip",
          "prop": "silk-ribbon"
        },
        "heavy": {
          "limb": "rear",
          "path": "ribbon-loop",
          "prop": "silk-ribbon"
        },
        "kick": {
          "limb": "leg",
          "path": "cartwheel",
          "prop": "silk-ribbon"
        },
        "guard": {
          "prop": "silk-ribbon",
          "pose": "mei-guard"
        }
      },
      "movement": {
        "walk": 1,
        "backwalk": 0.76,
        "jump": 1.04
      },
      "passive": null,
      "visual": {
        "body": "slim",
        "silhouette": "Roupa turquesa e coral, mangas ajustadas, duas fitas compridas nos punhos e cabelo em coque baixo. Silhueta leve, pernas alongadas.",
        "outfit": "Roupa turquesa e coral, mangas ajustadas, duas fitas compridas nos punhos e cabelo em coque baixo. Silhueta leve, pernas alongadas.",
        "prop": "silk-ribbon",
        "stance": "Ponta de Seda",
        "palette": [
          "#bc7340",
          "#e6d387",
          "#bc8a68",
          "#293a36"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Forma no ar um nó que brilha e se desfaz.",
        "effect": "spin",
        "line": "Ninguém vai puxar nossos nomes."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Mei Fita de Seda baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "barro": {
      "normalScale": {
        "damage": 1.135,
        "speed": 0.848,
        "range": 1.12
      },
      "normalNames": {
        "light": "Ponta de Argila",
        "heavy": "Cabo do General",
        "kick": "Passo da Fileira"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.111,
          "active": 0.092,
          "recovery": 0.193,
          "effect": "fissure"
        },
        "heavy": {
          "startup": 0.245,
          "active": 0.121,
          "recovery": 0.328,
          "effect": "fissure"
        },
        "kick": {
          "startup": 0.168,
          "active": 0.11,
          "recovery": 0.281,
          "effect": "fissure"
        }
      },
      "specials": [
        {
          "name": "Exército Desperto",
          "type": "trap",
          "description": "Uma fileira de argila se ergue do ponto marcado após um aviso no piso. Saltos vencem os soldados baixos.",
          "startup": 0.34,
          "active": 0.06,
          "recovery": 0.44,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.8,
          "effect": "fissure",
          "projectile": {
            "kind": "terracotta",
            "y": 12,
            "vx": 0,
            "radius": 60,
            "damage": 125,
            "stun": 0.29,
            "push": 75,
            "life": 1.8,
            "delay": 0.76,
            "anchor": "enemy",
            "maxRange": 330,
            "unique": true,
            "hitHeight": "low"
          },
          "id": "barro-0",
          "animation": {
            "pose": "barro-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "terracotta-spear",
            "effect": "fissure",
            "storyProp": "terracotta-spear"
          },
          "storyProp": "terracotta-spear",
          "storyMotion": "plant"
        },
        {
          "name": "Lança do Silêncio",
          "type": "melee",
          "description": "Uma estocada longa com preparação pesada e pouca atividade. Errar oferece uma recuperação ampla.",
          "startup": 0.29,
          "active": 0.09,
          "recovery": 0.43,
          "range": 267,
          "damage": 137,
          "stun": 0.34,
          "push": 80,
          "cooldown": 1.8,
          "effect": "slash",
          "id": "barro-1",
          "animation": {
            "pose": "barro-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "terracotta-spear",
            "effect": "slash",
            "storyProp": "terracotta-spear"
          },
          "storyProp": "terracotta-spear",
          "storyMotion": "strike"
        },
        {
          "name": "Fileira Imóvel",
          "type": "counter",
          "description": "Recebe o golpe na couraça e responde com o cabo. Rasteiras e agarrões abrem a postura.",
          "startup": 0.08,
          "active": 0.31,
          "recovery": 0.43,
          "range": 176,
          "damage": 124,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.3,
          "effect": "block",
          "counterWindow": 0.31,
          "counterDamage": 124,
          "id": "barro-2",
          "animation": {
            "pose": "barro-special2",
            "limb": "both",
            "path": "rising",
            "prop": "terracotta-spear",
            "effect": "block",
            "storyProp": "terracotta-shield"
          },
          "storyProp": "terracotta-shield",
          "storyMotion": "parry"
        }
      ],
      "combos": [
        {
          "id": "barro-combo0",
          "name": "Fileira de Barro",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Ponta de Argila → Cabo do General → Passo da Fileira. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 13,
            "push": 28
          }
        },
        {
          "id": "barro-combo1",
          "name": "Nomes no Chão",
          "sequence": [
            "light",
            "kick",
            "special1"
          ],
          "description": "Ponta de Argila → Passo da Fileira → Lança do Silêncio. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 15,
            "push": 28
          }
        }
      ],
      "attackStyle": "barro",
      "defenseName": "Couraça de Terracota",
      "finisher": {
        "name": "O Exército Pode Dormir",
        "line": "Cada nome será devolvido.",
        "kind": "barro"
      },
      "super": {
        "id": "barro-super",
        "name": "A Última Formação",
        "description": "Com a energia completa, General Barro concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Cada nome será devolvido.",
        "kind": "barro",
        "type": "melee",
        "effect": "fissure",
        "meterCost": 100,
        "startup": 0.29500000000000004,
        "active": 0.19,
        "recovery": 0.66,
        "range": 267,
        "reachY": 190,
        "damage": 284,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "A Última Formação",
          "palette": [
            "#bc7340",
            "#e6d387"
          ],
          "style": "power"
        },
        "animation": {
          "pose": "barro-super",
          "prop": "terracotta-spear",
          "effect": "fissure"
        },
        "storyProp": "terracotta-spear"
      },
      "entrance": {
        "name": "General Barro desperta dentro de um molde de argila.",
        "line": "Soldados, guardem seus nomes.",
        "style": "power",
        "gesture": "Parte a casca dos ombros sem mover os pés.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "General Barro desperta dentro de um molde de argila.",
            "pose": "arrive",
            "prop": "terracotta-spear",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Parte a casca dos ombros sem mover os pés.",
            "pose": "warmup",
            "prop": "terracotta-spear",
            "effect": "fissure"
          },
          {
            "at": 2.25,
            "action": "Bate a lança no solo; três olhos dourados acendem ao fundo.",
            "pose": "signature",
            "prop": "terracotta-spear",
            "effect": "fissure"
          },
          {
            "at": 3.25,
            "action": "Soldados, guardem seus nomes.",
            "pose": "ready",
            "prop": "terracotta-spear",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Ponta de Argila",
        "light": {
          "limb": "lead",
          "path": "spear-thrust",
          "prop": "terracotta-spear"
        },
        "heavy": {
          "limb": "rear",
          "path": "spear-butt",
          "prop": "terracotta-spear"
        },
        "kick": {
          "limb": "leg",
          "path": "stone-step",
          "prop": "terracotta-spear"
        },
        "guard": {
          "prop": "terracotta-spear",
          "pose": "barro-guard"
        }
      },
      "movement": {
        "walk": 0.94,
        "backwalk": 0.58,
        "jump": 0.84
      },
      "passive": null,
      "visual": {
        "body": "construct",
        "silhouette": "Corpo de argila vermelha, armadura moldada, lança curta rachada e luz dourada nas fissuras. Movimentos angulares de peso mineral.",
        "outfit": "Corpo de argila vermelha, armadura moldada, lança curta rachada e luz dourada nas fissuras. Movimentos angulares de peso mineral.",
        "prop": "terracotta-spear",
        "stance": "Ponta de Argila",
        "palette": [
          "#bc7340",
          "#e6d387",
          "#bc8a68",
          "#293a36"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Bate a lança no solo; três olhos dourados acendem ao fundo.",
        "effect": "fissure",
        "line": "Cada nome será devolvido."
      },
      "defeat": {
        "pose": "crumble",
        "action": "General Barro baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "lin": {
      "normalScale": {
        "damage": 1.025,
        "speed": 1.12,
        "range": 1.12
      },
      "normalNames": {
        "light": "Toque de Jade",
        "heavy": "Corte do Reflexo",
        "kick": "Pé da Lua"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.084,
          "active": 0.067,
          "recovery": 0.159,
          "effect": "slash"
        },
        "heavy": {
          "startup": 0.198,
          "active": 0.097,
          "recovery": 0.274,
          "effect": "slash"
        },
        "kick": {
          "startup": 0.133,
          "active": 0.117,
          "recovery": 0.239,
          "effect": "slash"
        }
      },
      "specials": [
        {
          "name": "Reflexo da Lua",
          "type": "counter",
          "description": "Desvia um ataque frontal e responde com um corte em arco. A janela é curta e perde para rasteiras e agarrões.",
          "startup": 0.035,
          "active": 0.19,
          "recovery": 0.29,
          "range": 196,
          "damage": 111,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.3,
          "effect": "slash",
          "counterWindow": 0.19,
          "counterDamage": 111,
          "invulnerable": 0.06,
          "id": "lin-0",
          "animation": {
            "pose": "lin-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "jian",
            "effect": "slash",
            "storyProp": "jian"
          },
          "storyProp": "jian",
          "storyMotion": "parry"
        },
        {
          "name": "Passagem do Lago",
          "type": "dash",
          "description": "Um passo leve leva a estocada à média distância. Sem proteção durante a entrada.",
          "startup": 0.13,
          "active": 0.13,
          "recovery": 0.31,
          "range": 187,
          "damage": 96,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "slash",
          "move": 315,
          "id": "lin-1",
          "animation": {
            "pose": "lin-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "jian",
            "effect": "slash",
            "storyProp": "jian"
          },
          "storyProp": "jian",
          "storyMotion": "travel"
        },
        {
          "name": "Lua Ascendente",
          "type": "launcher",
          "description": "Um salto curto desenha um corte ascendente. A saída fica aberta se o rival permanecer longe.",
          "startup": 0.15,
          "active": 0.16,
          "recovery": 0.41,
          "range": 175,
          "damage": 107,
          "stun": 0.39,
          "push": 31,
          "cooldown": 1.8,
          "effect": "slash",
          "reachY": 198,
          "launch": 300,
          "id": "lin-2",
          "animation": {
            "pose": "lin-special2",
            "limb": "both",
            "path": "rising",
            "prop": "jian",
            "effect": "slash",
            "storyProp": "moon"
          },
          "storyProp": "moon",
          "storyMotion": "rise"
        }
      ],
      "combos": [
        {
          "id": "lin-combo0",
          "name": "Dois Reflexos",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Toque de Jade → Corte do Reflexo → Pé da Lua. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 14,
            "push": 12
          }
        },
        {
          "id": "lin-combo1",
          "name": "Arco da Lua",
          "sequence": [
            "heavy",
            "kick",
            "special1"
          ],
          "description": "Corte do Reflexo → Pé da Lua → Passagem do Lago. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 16,
            "push": 12
          }
        }
      ],
      "attackStyle": "lin",
      "defenseName": "Fio do Reflexo",
      "finisher": {
        "name": "A Lua Escolhe o Rio",
        "line": "O reflexo não muda meu caminho.",
        "kind": "lin"
      },
      "super": {
        "id": "lin-super",
        "name": "Margem da Lua Partida",
        "description": "Com a energia completa, Lin da Lua Branca concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "O reflexo não muda meu caminho.",
        "kind": "lin",
        "type": "melee",
        "effect": "slash",
        "meterCost": 100,
        "startup": 0.32,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 260,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Margem da Lua Partida",
          "palette": [
            "#bc7340",
            "#e6d387"
          ],
          "style": "weapon"
        },
        "animation": {
          "pose": "lin-super",
          "prop": "jian",
          "effect": "slash"
        },
        "storyProp": "jian"
      },
      "entrance": {
        "name": "Lin atravessa a arena seguindo o reflexo da lâmina.",
        "line": "Uma só lua basta.",
        "style": "weapon",
        "gesture": "Limpa uma gota da espada e prende a fita branca.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Lin atravessa a arena seguindo o reflexo da lâmina.",
            "pose": "arrive",
            "prop": "jian",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Limpa uma gota da espada e prende a fita branca.",
            "pose": "warmup",
            "prop": "jian",
            "effect": "slash"
          },
          {
            "at": 2.25,
            "action": "Desenha um arco curto que divide o reflexo em dois.",
            "pose": "signature",
            "prop": "jian",
            "effect": "slash"
          },
          {
            "at": 3.25,
            "action": "Uma só lua basta.",
            "pose": "ready",
            "prop": "jian",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Toque de Jade",
        "light": {
          "limb": "lead",
          "path": "jian-tip",
          "prop": "jian"
        },
        "heavy": {
          "limb": "rear",
          "path": "crescent-cut",
          "prop": "jian"
        },
        "kick": {
          "limb": "leg",
          "path": "moon-kick",
          "prop": "jian"
        },
        "guard": {
          "prop": "jian",
          "pose": "lin-guard"
        }
      },
      "movement": {
        "walk": 1.04,
        "backwalk": 0.8,
        "jump": 1.08
      },
      "passive": null,
      "visual": {
        "body": "slim",
        "silhouette": "Roupa clara de abas curtas, espada fina de guarda jade, cabelo preso por fita branca e botas macias.",
        "outfit": "Roupa clara de abas curtas, espada fina de guarda jade, cabelo preso por fita branca e botas macias.",
        "prop": "jian",
        "stance": "Toque de Jade",
        "palette": [
          "#bc7340",
          "#e6d387",
          "#bc8a68",
          "#293a36"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Desenha um arco curto que divide o reflexo em dois.",
        "effect": "slash",
        "line": "O reflexo não muda meu caminho."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Lin da Lua Branca baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "bo": {
      "normalScale": {
        "damage": 1.08,
        "speed": 0.916,
        "range": 1.004
      },
      "normalNames": {
        "light": "Concha de Prova",
        "heavy": "Borda da Panela",
        "kick": "Bota do Balcão"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.106,
          "active": 0.072,
          "recovery": 0.188,
          "effect": "fissure"
        },
        "heavy": {
          "startup": 0.235,
          "active": 0.103,
          "recovery": 0.318,
          "effect": "fissure"
        },
        "kick": {
          "startup": 0.161,
          "active": 0.124,
          "recovery": 0.274,
          "effect": "fissure"
        }
      },
      "specials": [
        {
          "name": "Cozinha em Chamas",
          "type": "melee",
          "description": "Lança ingredientes e abre uma labareda diante do corpo. O fogo curto tem preparação visível.",
          "startup": 0.28,
          "active": 0.28,
          "recovery": 0.4,
          "range": 190,
          "damage": 124,
          "stun": 0.34,
          "push": 83,
          "cooldown": 1.8,
          "effect": "fissure",
          "id": "bo-0",
          "animation": {
            "pose": "bo-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "wok",
            "effect": "fissure",
            "storyProp": "wok"
          },
          "storyProp": "wok",
          "storyMotion": "strike"
        },
        {
          "name": "Wok de Ferro",
          "type": "counter",
          "description": "Recebe um golpe frontal na panela e responde com a concha. Rasteiras e agarrões entram por baixo.",
          "startup": 0.055,
          "active": 0.28,
          "recovery": 0.38,
          "range": 145,
          "damage": 113,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.3,
          "effect": "block",
          "counterWindow": 0.28,
          "counterDamage": 113,
          "id": "bo-1",
          "animation": {
            "pose": "bo-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "wok",
            "effect": "block",
            "storyProp": "wok"
          },
          "storyProp": "wok",
          "storyMotion": "parry"
        },
        {
          "name": "Mesa Giratória",
          "type": "throw",
          "description": "Segura o rival pela roupa e o gira para longe do fogão. Precisa alcançar o corpo a corpo.",
          "startup": 0.17,
          "active": 0.08,
          "recovery": 0.45,
          "range": 84,
          "damage": 142,
          "stun": 0.42,
          "push": 90,
          "cooldown": 2.4,
          "effect": "spin",
          "id": "bo-2",
          "animation": {
            "pose": "bo-special2",
            "limb": "both",
            "path": "rising",
            "prop": "wok",
            "effect": "spin",
            "storyProp": "table"
          },
          "storyProp": "table",
          "storyMotion": "close"
        }
      ],
      "combos": [
        {
          "id": "bo-combo0",
          "name": "Mise en Place",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Concha de Prova → Borda da Panela → Bota do Balcão. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 15,
            "push": 16
          }
        },
        {
          "id": "bo-combo1",
          "name": "Fogo no Ponto",
          "sequence": [
            "light",
            "heavy",
            "special0"
          ],
          "description": "Concha de Prova → Borda da Panela → Cozinha em Chamas. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 17,
            "push": 16
          }
        }
      ],
      "attackStyle": "bo",
      "defenseName": "Panela na Frente",
      "finisher": {
        "name": "A Última Mesa",
        "line": "Tem comida para todo mundo.",
        "kind": "bo"
      },
      "super": {
        "id": "bo-super",
        "name": "Banquete das Chamas",
        "description": "Com a energia completa, Bo Panela de Ferro concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Tem comida para todo mundo.",
        "kind": "bo",
        "type": "melee",
        "effect": "fissure",
        "meterCost": 100,
        "startup": 0.34500000000000003,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 272,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Banquete das Chamas",
          "palette": [
            "#bc7340",
            "#e6d387"
          ],
          "style": "power"
        },
        "animation": {
          "pose": "bo-super",
          "prop": "wok",
          "effect": "fissure"
        },
        "storyProp": "wok"
      },
      "entrance": {
        "name": "Bo aproxima uma bancada dobrável do lado da arena.",
        "line": "Quem terminar primeiro lava a louça.",
        "style": "power",
        "gesture": "Joga um ingrediente para cima e o recolhe na wok.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Bo aproxima uma bancada dobrável do lado da arena.",
            "pose": "arrive",
            "prop": "wok",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Joga um ingrediente para cima e o recolhe na wok.",
            "pose": "warmup",
            "prop": "wok",
            "effect": "fissure"
          },
          {
            "at": 2.25,
            "action": "A chama lambe a panela sem tocar a faixa de luta.",
            "pose": "signature",
            "prop": "wok",
            "effect": "fissure"
          },
          {
            "at": 3.25,
            "action": "Quem terminar primeiro lava a louça.",
            "pose": "ready",
            "prop": "wok",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Concha de Prova",
        "light": {
          "limb": "lead",
          "path": "ladle-tap",
          "prop": "wok"
        },
        "heavy": {
          "limb": "rear",
          "path": "wok-smash",
          "prop": "wok"
        },
        "kick": {
          "limb": "leg",
          "path": "counter-kick",
          "prop": "wok"
        },
        "guard": {
          "prop": "wok",
          "pose": "bo-guard"
        }
      },
      "movement": {
        "walk": 0.98,
        "backwalk": 0.64,
        "jump": 0.94
      },
      "passive": null,
      "visual": {
        "body": "tank",
        "silhouette": "Avental chamuscado sobre camisa azul, wok escura, concha de metal e lenço laranja. Braços fortes e base firme.",
        "outfit": "Avental chamuscado sobre camisa azul, wok escura, concha de metal e lenço laranja. Braços fortes e base firme.",
        "prop": "wok",
        "stance": "Concha de Prova",
        "palette": [
          "#bc7340",
          "#e6d387",
          "#bc8a68",
          "#293a36"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "A chama lambe a panela sem tocar a faixa de luta.",
        "effect": "fissure",
        "line": "Tem comida para todo mundo."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Bo Panela de Ferro baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "qiao": {
      "normalScale": {
        "damage": 0.97,
        "speed": 0.984,
        "range": 1.12
      },
      "normalNames": {
        "light": "Toque de Sensor",
        "heavy": "Braço de Antena",
        "kick": "Passo de Placa"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.1,
          "active": 0.077,
          "recovery": 0.181,
          "effect": "electric"
        },
        "heavy": {
          "startup": 0.224,
          "active": 0.109,
          "recovery": 0.306,
          "effect": "electric"
        },
        "kick": {
          "startup": 0.153,
          "active": 0.103,
          "recovery": 0.265,
          "effect": "electric"
        }
      },
      "specials": [
        {
          "name": "Formação Celeste",
          "type": "projectile",
          "description": "Drones formam um dragão luminoso lento e de grande alcance. A preparação é longa e somente um dragão fica ativo.",
          "startup": 0.36,
          "active": 0.06,
          "recovery": 0.45,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.9,
          "effect": "electric",
          "projectile": {
            "kind": "dragon",
            "y": 58,
            "vx": 225,
            "radius": 42,
            "damage": 133,
            "stun": 0.3,
            "push": 83,
            "life": 3.5,
            "delay": 0.36,
            "unique": true
          },
          "id": "qiao-0",
          "animation": {
            "pose": "qiao-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "dragon-drone",
            "effect": "electric",
            "storyProp": "dragon-drone"
          },
          "storyProp": "dragon-drone",
          "storyMotion": "release"
        },
        {
          "name": "Malha de Nuvem",
          "type": "trap",
          "description": "Instala um sensor no chão próximo ao rival; o aviso de grade antecede a descarga.",
          "startup": 0.25,
          "active": 0.06,
          "recovery": 0.35,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.3,
          "effect": "electric",
          "projectile": {
            "kind": "grid",
            "y": 12,
            "vx": 0,
            "radius": 45,
            "damage": 78,
            "stun": 0.29,
            "push": 20,
            "life": 2.3,
            "delay": 0.75,
            "anchor": "enemy",
            "maxRange": 340,
            "unique": true,
            "hitHeight": "low",
            "root": 0.42
          },
          "id": "qiao-1",
          "animation": {
            "pose": "qiao-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "dragon-drone",
            "effect": "electric",
            "storyProp": "grid-map"
          },
          "storyProp": "grid-map",
          "storyMotion": "plant"
        },
        {
          "name": "Passo de Recompilação",
          "type": "retreat",
          "description": "Um drone puxa Qiao para trás enquanto uma antena corta a frente. Não atravessa golpes.",
          "startup": 0.08,
          "active": 0.14,
          "recovery": 0.27,
          "range": 145,
          "damage": 74,
          "stun": 0.34,
          "push": 90,
          "cooldown": 1.8,
          "effect": "electric",
          "move": -360,
          "id": "qiao-2",
          "animation": {
            "pose": "qiao-special2",
            "limb": "both",
            "path": "rising",
            "prop": "dragon-drone",
            "effect": "electric",
            "storyProp": "dragon-drone"
          },
          "storyProp": "dragon-drone",
          "storyMotion": "withdraw"
        }
      ],
      "combos": [
        {
          "id": "qiao-combo0",
          "name": "Malha e Pulso",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Toque de Sensor → Braço de Antena → Passo de Placa. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 8,
            "push": 20
          }
        },
        {
          "id": "qiao-combo1",
          "name": "Rota Recalculada",
          "sequence": [
            "light",
            "kick",
            "special2"
          ],
          "description": "Toque de Sensor → Passo de Placa → Passo de Recompilação. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 10,
            "push": 20
          }
        }
      ],
      "attackStyle": "qiao",
      "defenseName": "Placa de Emergência",
      "finisher": {
        "name": "A Cidade que Não Existia",
        "line": "O mapa agora é nosso.",
        "kind": "qiao"
      },
      "super": {
        "id": "qiao-super",
        "name": "Céu em Formação",
        "description": "Com a energia completa, Qiao Nuvem concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "O mapa agora é nosso.",
        "kind": "qiao",
        "type": "melee",
        "effect": "electric",
        "meterCost": 100,
        "startup": 0.27,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 248,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Céu em Formação",
          "palette": [
            "#bc7340",
            "#e6d387"
          ],
          "style": "machine"
        },
        "animation": {
          "pose": "qiao-super",
          "prop": "dragon-drone",
          "effect": "electric"
        },
        "storyProp": "dragon-drone"
      },
      "entrance": {
        "name": "Um drone projeta linhas de uma rua sobre o chão.",
        "line": "Encontrei o ponto de origem.",
        "style": "machine",
        "gesture": "Qiao apaga a rua, ajusta os óculos e recolhe a antena.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Um drone projeta linhas de uma rua sobre o chão.",
            "pose": "arrive",
            "prop": "dragon-drone",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Qiao apaga a rua, ajusta os óculos e recolhe a antena.",
            "pose": "warmup",
            "prop": "dragon-drone",
            "effect": "electric"
          },
          {
            "at": 2.25,
            "action": "Os módulos do drone formam um dragão pequeno e se fecham.",
            "pose": "signature",
            "prop": "dragon-drone",
            "effect": "electric"
          },
          {
            "at": 3.25,
            "action": "Encontrei o ponto de origem.",
            "pose": "ready",
            "prop": "dragon-drone",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Toque de Sensor",
        "light": {
          "limb": "lead",
          "path": "sensor-tap",
          "prop": "dragon-drone"
        },
        "heavy": {
          "limb": "rear",
          "path": "antenna-cut",
          "prop": "dragon-drone"
        },
        "kick": {
          "limb": "leg",
          "path": "board-step",
          "prop": "dragon-drone"
        },
        "guard": {
          "prop": "dragon-drone",
          "pose": "qiao-guard"
        }
      },
      "movement": {
        "walk": 0.96,
        "backwalk": 0.68,
        "jump": 0.96
      },
      "passive": null,
      "visual": {
        "body": "slim",
        "silhouette": "Jaqueta branca de bolsos verdes, óculos digitais quadrados, luvas finas e drone dobrável no ombro.",
        "outfit": "Jaqueta branca de bolsos verdes, óculos digitais quadrados, luvas finas e drone dobrável no ombro.",
        "prop": "dragon-drone",
        "stance": "Toque de Sensor",
        "palette": [
          "#bc7340",
          "#e6d387",
          "#bc8a68",
          "#293a36"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Os módulos do drone formam um dragão pequeno e se fecham.",
        "effect": "electric",
        "line": "O mapa agora é nosso."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Qiao Nuvem baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "shen": {
      "normalScale": {
        "damage": 1.025,
        "speed": 0.916,
        "range": 1.062
      },
      "normalNames": {
        "light": "Dedo do Selo",
        "heavy": "Palma do Ausente",
        "kick": "Salto da Soleira"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.097,
          "active": 0.082,
          "recovery": 0.192,
          "effect": "ghost"
        },
        "heavy": {
          "startup": 0.226,
          "active": 0.115,
          "recovery": 0.322,
          "effect": "ghost"
        },
        "kick": {
          "startup": 0.152,
          "active": 0.11,
          "recovery": 0.278,
          "effect": "ghost"
        }
      },
      "specials": [
        {
          "name": "Sopro Roubado",
          "type": "throw",
          "description": "Agarra de perto e drena 22 de energia especial ao acertar. Não rouba através da defesa nem alcança rivais agachados ou no ar.",
          "startup": 0.2,
          "active": 0.08,
          "recovery": 0.46,
          "range": 88,
          "damage": 121,
          "stun": 0.42,
          "push": 50,
          "cooldown": 2.7,
          "effect": "ghost",
          "meterDrain": 22,
          "id": "shen-0",
          "animation": {
            "pose": "shen-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "forehead-seal",
            "effect": "ghost",
            "storyProp": "forehead-seal"
          },
          "storyProp": "forehead-seal",
          "storyMotion": "close"
        },
        {
          "name": "Selo Errante",
          "type": "projectile",
          "description": "Um selo flutua lentamente e prende os pés por um instante ao contato.",
          "startup": 0.28,
          "active": 0.06,
          "recovery": 0.36,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "trap",
          "projectile": {
            "kind": "talisman",
            "y": 58,
            "vx": 170,
            "radius": 26,
            "damage": 83,
            "stun": 0.3,
            "push": 38,
            "life": 3.3,
            "delay": 0.28,
            "root": 0.42
          },
          "id": "shen-1",
          "animation": {
            "pose": "shen-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "forehead-seal",
            "effect": "trap",
            "storyProp": "paper-seal"
          },
          "storyProp": "paper-seal",
          "storyMotion": "release"
        },
        {
          "name": "Pulo do Limiar",
          "type": "dash",
          "description": "Um salto curto de braços rígidos avança sem invulnerabilidade. A chegada alta deve ser defendida em pé.",
          "startup": 0.23,
          "active": 0.22,
          "recovery": 0.36,
          "range": 137,
          "damage": 104,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "ghost",
          "move": 245,
          "hitHeight": "overhead",
          "id": "shen-2",
          "animation": {
            "pose": "shen-special2",
            "limb": "both",
            "path": "rising",
            "prop": "forehead-seal",
            "effect": "ghost",
            "storyProp": "threshold"
          },
          "storyProp": "threshold",
          "storyMotion": "travel"
        }
      ],
      "combos": [
        {
          "id": "shen-combo0",
          "name": "Passo e Nome",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Dedo do Selo → Palma do Ausente → Salto da Soleira. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 9,
            "push": 24
          }
        },
        {
          "id": "shen-combo1",
          "name": "Limiar Roubado",
          "sequence": [
            "heavy",
            "kick",
            "special2"
          ],
          "description": "Palma do Ausente → Salto da Soleira → Pulo do Limiar. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 11,
            "push": 24
          }
        }
      ],
      "attackStyle": "shen",
      "defenseName": "Braços Selados",
      "finisher": {
        "name": "O Nome Sob o Selo",
        "line": "Eu me lembro.",
        "kind": "shen"
      },
      "super": {
        "id": "shen-super",
        "name": "Memória Devolvida",
        "description": "Com a energia completa, Shen Passo-Selado concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Eu me lembro.",
        "kind": "shen",
        "type": "melee",
        "effect": "ghost",
        "meterCost": 100,
        "startup": 0.29500000000000004,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 260,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Memória Devolvida",
          "palette": [
            "#bc7340",
            "#e6d387"
          ],
          "style": "spectral"
        },
        "animation": {
          "pose": "shen-super",
          "prop": "forehead-seal",
          "effect": "ghost"
        },
        "storyProp": "forehead-seal"
      },
      "entrance": {
        "name": "O selo de Shen flutua antes do próprio corpo.",
        "line": "Meu nome não é essa ordem.",
        "style": "spectral",
        "gesture": "Ele chega num salto curto e segura a borda do papel.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "O selo de Shen flutua antes do próprio corpo.",
            "pose": "arrive",
            "prop": "forehead-seal",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Ele chega num salto curto e segura a borda do papel.",
            "pose": "warmup",
            "prop": "forehead-seal",
            "effect": "ghost"
          },
          {
            "at": 2.25,
            "action": "Por um instante as mãos se libertam da pose rígida.",
            "pose": "signature",
            "prop": "forehead-seal",
            "effect": "ghost"
          },
          {
            "at": 3.25,
            "action": "Meu nome não é essa ordem.",
            "pose": "ready",
            "prop": "forehead-seal",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Dedo do Selo",
        "light": {
          "limb": "lead",
          "path": "stiff-fingers",
          "prop": "forehead-seal"
        },
        "heavy": {
          "limb": "rear",
          "path": "stiff-palm",
          "prop": "forehead-seal"
        },
        "kick": {
          "limb": "leg",
          "path": "hopping-kick",
          "prop": "forehead-seal"
        },
        "guard": {
          "prop": "forehead-seal",
          "pose": "shen-guard"
        }
      },
      "movement": {
        "walk": 0.96,
        "backwalk": 0.64,
        "jump": 0.84
      },
      "passive": null,
      "visual": {
        "body": "spirit",
        "silhouette": "Roupa antiga azul-escura, pele pálida, braços estendidos e selo amarelo na testa. Botas rígidas deixam pequenos rastros de pó.",
        "outfit": "Roupa antiga azul-escura, pele pálida, braços estendidos e selo amarelo na testa. Botas rígidas deixam pequenos rastros de pó.",
        "prop": "forehead-seal",
        "stance": "Dedo do Selo",
        "palette": [
          "#bc7340",
          "#e6d387",
          "#bc8a68",
          "#293a36"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Por um instante as mãos se libertam da pose rígida.",
        "effect": "ghost",
        "line": "Eu me lembro."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Shen Passo-Selado baixa a guarda e reconhece a derrota.",
        "effect": "smoke"
      }
    },
    "long": {
      "normalScale": {
        "damage": 1.025,
        "speed": 1.052,
        "range": 1.062
      },
      "normalNames": {
        "light": "Palma de Escama",
        "heavy": "Arco de Jade",
        "kick": "Cauda do Rio"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.084,
          "active": 0.087,
          "recovery": 0.176,
          "effect": "wave"
        },
        "heavy": {
          "startup": 0.203,
          "active": 0.121,
          "recovery": 0.296,
          "effect": "wave"
        },
        "kick": {
          "startup": 0.135,
          "active": 0.117,
          "recovery": 0.258,
          "effect": "wave"
        }
      },
      "specials": [
        {
          "name": "Ascensão do Dragão",
          "type": "launcher",
          "description": "Sobe envolvido por uma coluna de água que lança o rival. Grande alcance vertical, pouso demorado.",
          "startup": 0.16,
          "active": 0.23,
          "recovery": 0.47,
          "range": 157,
          "damage": 125,
          "stun": 0.39,
          "push": 31,
          "cooldown": 1.8,
          "effect": "wave",
          "reachY": 235,
          "launch": 340,
          "id": "long-0",
          "animation": {
            "pose": "long-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "jade-scales",
            "effect": "wave",
            "storyProp": "jade-dragon"
          },
          "storyProp": "jade-dragon",
          "storyMotion": "rise"
        },
        {
          "name": "Curva da Corrente",
          "type": "projectile",
          "description": "Uma onda sinuosa avança devagar e empurra ao acertar. Saltos passam sobre a linha.",
          "startup": 0.24,
          "active": 0.06,
          "recovery": 0.34,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "wave",
          "projectile": {
            "kind": "waterdragon",
            "y": 43,
            "vx": 265,
            "radius": 32,
            "damage": 99,
            "stun": 0.3,
            "push": 100,
            "life": 2.4,
            "delay": 0.24,
            "arcAmplitude": 24,
            "arcFrequency": 4
          },
          "id": "long-1",
          "animation": {
            "pose": "long-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "jade-scales",
            "effect": "wave",
            "storyProp": "water-ribbon"
          },
          "storyProp": "water-ribbon",
          "storyMotion": "release"
        },
        {
          "name": "Escama Deslizante",
          "type": "dash",
          "description": "Uma entrada de palma alonga a distância sem proteção. Termina com o corpo ao alcance de punição.",
          "startup": 0.14,
          "active": 0.18,
          "recovery": 0.32,
          "range": 146,
          "damage": 101,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "wave",
          "move": 345,
          "id": "long-2",
          "animation": {
            "pose": "long-special2",
            "limb": "both",
            "path": "rising",
            "prop": "jade-scales",
            "effect": "wave",
            "storyProp": "jade-scales"
          },
          "storyProp": "jade-scales",
          "storyMotion": "travel"
        }
      ],
      "combos": [
        {
          "id": "long-combo0",
          "name": "Nascente e Curva",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Palma de Escama → Arco de Jade → Cauda do Rio. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 10,
            "push": 28
          }
        },
        {
          "id": "long-combo1",
          "name": "Três Escamas",
          "sequence": [
            "light",
            "heavy",
            "special0"
          ],
          "description": "Palma de Escama → Arco de Jade → Ascensão do Dragão. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 12,
            "push": 28
          }
        }
      ],
      "attackStyle": "long",
      "defenseName": "Escamas do Leito",
      "finisher": {
        "name": "O Rio Retoma o Leito",
        "line": "Ninguém desvia toda a água.",
        "kind": "long"
      },
      "super": {
        "id": "long-super",
        "name": "Céu da Nascente",
        "description": "Com a energia completa, Long Escama-Jade concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Ninguém desvia toda a água.",
        "kind": "long",
        "type": "melee",
        "effect": "wave",
        "meterCost": 100,
        "startup": 0.32,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 260,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Céu da Nascente",
          "palette": [
            "#bc7340",
            "#e6d387"
          ],
          "style": "aerial"
        },
        "animation": {
          "pose": "long-super",
          "prop": "jade-scales",
          "effect": "wave"
        },
        "storyProp": "jade-dragon"
      },
      "entrance": {
        "name": "Uma corrente fina contorna as botas de Long.",
        "line": "O rio conhece a volta.",
        "style": "aerial",
        "gesture": "Ele recolhe a água na palma sem molhar o chão de luta.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Uma corrente fina contorna as botas de Long.",
            "pose": "arrive",
            "prop": "jade-scales",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Ele recolhe a água na palma sem molhar o chão de luta.",
            "pose": "warmup",
            "prop": "jade-scales",
            "effect": "wave"
          },
          {
            "at": 2.25,
            "action": "Uma cabeça de dragão se forma por um instante nos ombros.",
            "pose": "signature",
            "prop": "jade-scales",
            "effect": "wave"
          },
          {
            "at": 3.25,
            "action": "O rio conhece a volta.",
            "pose": "ready",
            "prop": "jade-scales",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Palma de Escama",
        "light": {
          "limb": "lead",
          "path": "scale-palm",
          "prop": "jade-scales"
        },
        "heavy": {
          "limb": "rear",
          "path": "jade-arc",
          "prop": "jade-scales"
        },
        "kick": {
          "limb": "leg",
          "path": "tail-sweep",
          "prop": "jade-scales"
        },
        "guard": {
          "prop": "jade-scales",
          "pose": "long-guard"
        }
      },
      "movement": {
        "walk": 1.02,
        "backwalk": 0.72,
        "jump": 1.04
      },
      "passive": null,
      "visual": {
        "body": "athletic",
        "silhouette": "Chifres curtos, escamas verdes nos antebraços, faixa jade, calça escura e cabelos longos presos por um aro de cobre.",
        "outfit": "Chifres curtos, escamas verdes nos antebraços, faixa jade, calça escura e cabelos longos presos por um aro de cobre.",
        "prop": "jade-scales",
        "stance": "Palma de Escama",
        "palette": [
          "#bc7340",
          "#e6d387",
          "#bc8a68",
          "#293a36"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Uma cabeça de dragão se forma por um instante nos ombros.",
        "effect": "wave",
        "line": "Ninguém desvia toda a água."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Long Escama-Jade baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "yan": {
      "normalScale": {
        "damage": 1.025,
        "speed": 0.984,
        "range": 1.062
      },
      "normalNames": {
        "light": "Leque de Prólogo",
        "heavy": "Palma do Ato",
        "kick": "Passo de Epílogo"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.092,
          "active": 0.092,
          "recovery": 0.173,
          "effect": "copy"
        },
        "heavy": {
          "startup": 0.216,
          "active": 0.097,
          "recovery": 0.298,
          "effect": "copy"
        },
        "kick": {
          "startup": 0.145,
          "active": 0.124,
          "recovery": 0.257,
          "effect": "copy"
        }
      },
      "specials": [
        {
          "name": "Três Faces",
          "type": "melee",
          "description": "Alterna máscara e postura entre velocidade, guarda e força por quatro segundos. A troca não causa dano e pode ser interrompida.",
          "startup": 0.25,
          "active": 0.05,
          "recovery": 0.31,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.65,
          "effect": "copy",
          "stanceCycle": [
            "speed",
            "guard",
            "power"
          ],
          "buff": {
            "kind": "speed",
            "duration": 4,
            "speed": 1.12
          },
          "id": "yan-0",
          "animation": {
            "pose": "yan-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "opera-mask",
            "effect": "copy",
            "storyProp": "opera-mask"
          },
          "storyProp": "opera-mask",
          "storyMotion": "strike"
        },
        {
          "name": "Leque de Cena",
          "type": "projectile",
          "description": "Abre um leque de energia curto e largo. O alcance moderado exige escolher o espaço.",
          "startup": 0.2,
          "active": 0.06,
          "recovery": 0.31,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "wind",
          "projectile": {
            "kind": "fan",
            "y": 58,
            "vx": 300,
            "radius": 30,
            "damage": 92,
            "stun": 0.3,
            "push": 38,
            "life": 1.35,
            "delay": 0.2
          },
          "id": "yan-1",
          "animation": {
            "pose": "yan-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "opera-mask",
            "effect": "wind",
            "storyProp": "fan"
          },
          "storyProp": "fan",
          "storyMotion": "release"
        },
        {
          "name": "Última Máscara",
          "type": "counter",
          "description": "Uma mudança de rosto cobre a resposta com a palma. A janela não protege contra baixo ou agarrão.",
          "startup": 0.055,
          "active": 0.22,
          "recovery": 0.33,
          "range": 156,
          "damage": 109,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.3,
          "effect": "copy",
          "counterWindow": 0.22,
          "counterDamage": 109,
          "id": "yan-2",
          "animation": {
            "pose": "yan-special2",
            "limb": "both",
            "path": "rising",
            "prop": "opera-mask",
            "effect": "copy",
            "storyProp": "opera-mask"
          },
          "storyProp": "opera-mask",
          "storyMotion": "parry"
        }
      ],
      "combos": [
        {
          "id": "yan-combo0",
          "name": "Prólogo e Epílogo",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Leque de Prólogo → Palma do Ato → Passo de Epílogo. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 11,
            "push": 12
          }
        },
        {
          "id": "yan-combo1",
          "name": "Cena Mutável",
          "sequence": [
            "light",
            "kick",
            "special1"
          ],
          "description": "Leque de Prólogo → Passo de Epílogo → Leque de Cena. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 13,
            "push": 12
          }
        }
      ],
      "attackStyle": "yan",
      "defenseName": "Face Imóvel",
      "finisher": {
        "name": "O Rosto Por Trás",
        "line": "Hoje eu escolho a peça.",
        "kind": "yan"
      },
      "super": {
        "id": "yan-super",
        "name": "A Peça que Não Foi Escrita",
        "description": "Com a energia completa, Yan Máscara Mutável concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Hoje eu escolho a peça.",
        "kind": "yan",
        "type": "melee",
        "effect": "copy",
        "meterCost": 100,
        "startup": 0.34500000000000003,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 260,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "A Peça que Não Foi Escrita",
          "palette": [
            "#bc7340",
            "#e6d387"
          ],
          "style": "dance"
        },
        "animation": {
          "pose": "yan-super",
          "prop": "opera-mask",
          "effect": "copy"
        },
        "storyProp": "opera-mask"
      },
      "entrance": {
        "name": "Yan abre um leque que oculta o rosto.",
        "line": "Cada rosto conta uma verdade.",
        "style": "dance",
        "gesture": "Fecha o leque: a máscara muda do vermelho para o azul.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Yan abre um leque que oculta o rosto.",
            "pose": "arrive",
            "prop": "opera-mask",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Fecha o leque: a máscara muda do vermelho para o azul.",
            "pose": "warmup",
            "prop": "opera-mask",
            "effect": "copy"
          },
          {
            "at": 2.25,
            "action": "Três poses mudam três máscaras antes de revelar a primeira.",
            "pose": "signature",
            "prop": "opera-mask",
            "effect": "copy"
          },
          {
            "at": 3.25,
            "action": "Cada rosto conta uma verdade.",
            "pose": "ready",
            "prop": "opera-mask",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Leque de Prólogo",
        "light": {
          "limb": "lead",
          "path": "fan-flick",
          "prop": "opera-mask"
        },
        "heavy": {
          "limb": "rear",
          "path": "opera-palm",
          "prop": "opera-mask"
        },
        "kick": {
          "limb": "leg",
          "path": "stage-step",
          "prop": "opera-mask"
        },
        "guard": {
          "prop": "opera-mask",
          "pose": "yan-guard"
        }
      },
      "movement": {
        "walk": 1,
        "backwalk": 0.67,
        "jump": 1
      },
      "passive": null,
      "visual": {
        "body": "slim",
        "silhouette": "Figurino teatral roxo e dourado com abas curtas, máscara de ópera vermelha e pequenos leques nos punhos.",
        "outfit": "Figurino teatral roxo e dourado com abas curtas, máscara de ópera vermelha e pequenos leques nos punhos.",
        "prop": "opera-mask",
        "stance": "Leque de Prólogo",
        "palette": [
          "#bc7340",
          "#e6d387",
          "#bc8a68",
          "#293a36"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Três poses mudam três máscaras antes de revelar a primeira.",
        "effect": "copy",
        "line": "Hoje eu escolho a peça."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Yan Máscara Mutável baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "marco": {
      "normalScale": {
        "damage": 1.08,
        "speed": 0.916,
        "range": 1.004
      },
      "normalNames": {
        "light": "Borda da Arena",
        "heavy": "Punho do Gladiador",
        "kick": "Greva de Pedra"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.1,
          "active": 0.067,
          "recovery": 0.184,
          "effect": "shield"
        },
        "heavy": {
          "startup": 0.229,
          "active": 0.103,
          "recovery": 0.314,
          "effect": "shield"
        },
        "kick": {
          "startup": 0.155,
          "active": 0.103,
          "recovery": 0.27,
          "effect": "shield"
        }
      },
      "specials": [
        {
          "name": "Voz da Arena",
          "type": "dash",
          "description": "Avança com o escudo e termina num golpe ascendente. A entrada tem armadura curta, mas o fim fica exposto.",
          "startup": 0.22,
          "active": 0.25,
          "recovery": 0.42,
          "range": 131,
          "damage": 126,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "shield",
          "move": 285,
          "armor": 0.22,
          "launch": 215,
          "id": "marco-0",
          "animation": {
            "pose": "marco-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "buckler",
            "effect": "shield",
            "storyProp": "buckler"
          },
          "storyProp": "buckler",
          "storyMotion": "travel"
        },
        {
          "name": "Portão de Bronze",
          "type": "counter",
          "description": "Recebe um golpe frontal no escudo e devolve o punho. Agarrões e rasteiras atravessam a guarda.",
          "startup": 0.055,
          "active": 0.27,
          "recovery": 0.37,
          "range": 137,
          "damage": 116,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.3,
          "effect": "shield",
          "counterWindow": 0.27,
          "counterDamage": 116,
          "id": "marco-1",
          "animation": {
            "pose": "marco-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "buckler",
            "effect": "shield",
            "storyProp": "arena-gate"
          },
          "storyProp": "arena-gate",
          "storyMotion": "parry"
        },
        {
          "name": "Areia de Retorno",
          "type": "throw",
          "description": "Agarra o torso e gira o rival até o chão. Alcance curto e recuperação longa se não alcançar.",
          "startup": 0.17,
          "active": 0.08,
          "recovery": 0.47,
          "range": 83,
          "damage": 147,
          "stun": 0.42,
          "push": 50,
          "cooldown": 2.4,
          "effect": "beast",
          "swap": true,
          "id": "marco-2",
          "animation": {
            "pose": "marco-special2",
            "limb": "both",
            "path": "rising",
            "prop": "buckler",
            "effect": "beast",
            "storyProp": "name-tablet"
          },
          "storyProp": "name-tablet",
          "storyMotion": "close"
        }
      ],
      "combos": [
        {
          "id": "marco-combo0",
          "name": "Areia e Bronze",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Borda da Arena → Punho do Gladiador → Greva de Pedra. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 12,
            "push": 16
          }
        },
        {
          "id": "marco-combo1",
          "name": "Portão Aberto",
          "sequence": [
            "heavy",
            "kick",
            "special0"
          ],
          "description": "Punho do Gladiador → Greva de Pedra → Voz da Arena. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 14,
            "push": 16
          }
        }
      ],
      "attackStyle": "marco",
      "defenseName": "Escudo de Escolha",
      "finisher": {
        "name": "O Nome da Arena",
        "line": "Eu escolho por quem lutar.",
        "kind": "marco"
      },
      "super": {
        "id": "marco-super",
        "name": "Arena dos Nomes Livres",
        "description": "Com a energia completa, Marco Arena concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Eu escolho por quem lutar.",
        "kind": "marco",
        "type": "melee",
        "effect": "shield",
        "meterCost": 100,
        "startup": 0.27,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 272,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Arena dos Nomes Livres",
          "palette": [
            "#386e75",
            "#d9ac6a"
          ],
          "style": "power"
        },
        "animation": {
          "pose": "marco-super",
          "prop": "buckler",
          "effect": "shield"
        },
        "storyProp": "buckler"
      },
      "entrance": {
        "name": "Marco tira um punhado de areia do escudo.",
        "line": "Meu nome não pertence à plateia.",
        "style": "power",
        "gesture": "Coloca o capacete e observa a arena sem se curvar.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Marco tira um punhado de areia do escudo.",
            "pose": "arrive",
            "prop": "buckler",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Coloca o capacete e observa a arena sem se curvar.",
            "pose": "warmup",
            "prop": "buckler",
            "effect": "shield"
          },
          {
            "at": 2.25,
            "action": "Bate o punho no escudo, respondido por um eco distante.",
            "pose": "signature",
            "prop": "buckler",
            "effect": "shield"
          },
          {
            "at": 3.25,
            "action": "Meu nome não pertence à plateia.",
            "pose": "ready",
            "prop": "buckler",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Borda da Arena",
        "light": {
          "limb": "lead",
          "path": "shield-jab",
          "prop": "buckler"
        },
        "heavy": {
          "limb": "rear",
          "path": "gladiator-cross",
          "prop": "buckler"
        },
        "kick": {
          "limb": "leg",
          "path": "greave-kick",
          "prop": "buckler"
        },
        "guard": {
          "prop": "buckler",
          "pose": "marco-guard"
        }
      },
      "movement": {
        "walk": 0.96,
        "backwalk": 0.6,
        "jump": 0.9
      },
      "passive": null,
      "visual": {
        "body": "tank",
        "silhouette": "Capacete antigo de crista curta, escudo redondo pequeno, couraça incompleta e sandálias reforçadas. Cicatrizes de pedra cruzam os braços.",
        "outfit": "Capacete antigo de crista curta, escudo redondo pequeno, couraça incompleta e sandálias reforçadas. Cicatrizes de pedra cruzam os braços.",
        "prop": "buckler",
        "stance": "Borda da Arena",
        "palette": [
          "#386e75",
          "#d9ac6a",
          "#c79273",
          "#342d35"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Bate o punho no escudo, respondido por um eco distante.",
        "effect": "shield",
        "line": "Eu escolho por quem lutar."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Marco Arena baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "vittoria": {
      "normalScale": {
        "damage": 1.025,
        "speed": 1.12,
        "range": 1.004
      },
      "normalNames": {
        "light": "Pulso de Largada",
        "heavy": "Cotovelo de Ápice",
        "kick": "Bota da Reta"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.08,
          "active": 0.072,
          "recovery": 0.159,
          "effect": "dash"
        },
        "heavy": {
          "startup": 0.194,
          "active": 0.109,
          "recovery": 0.274,
          "effect": "dash"
        },
        "kick": {
          "startup": 0.129,
          "active": 0.11,
          "recovery": 0.239,
          "effect": "dash"
        }
      },
      "specials": [
        {
          "name": "Três Tempos",
          "type": "dash",
          "description": "Vittoria baixa o centro de gravidade e encurta a distância com jab, cruzado e chute. A sequência permanece vulnerável, pode ser defendida e deixa recuperação ao errar.",
          "startup": 0.18,
          "active": 0.48,
          "recovery": 0.28,
          "range": 112,
          "damage": 55,
          "stun": 0.21,
          "push": 14,
          "cooldown": 2.4,
          "effect": "dash",
          "move": 320,
          "moveDuringActive": true,
          "multi": 3,
          "id": "vittoria-0",
          "groundedOnly": true,
          "hitHeight": "mid",
          "ground": true,
          "reachY": 100,
          "animation": {
            "pose": "vittoria-special0",
            "limb": "both",
            "path": "three-strikes",
            "prop": "racing-gloves",
            "effect": "dash",
            "storyProp": "racing-gloves",
            "sequence": [
              "light",
              "heavy",
              "kick"
            ]
          },
          "storyProp": "racing-gloves",
          "storyMotion": "travel"
        },
        {
          "name": "Ponto de Frenagem",
          "type": "retreat",
          "description": "Recua com um golpe de cotovelo que corta a perseguição. Não possui proteção durante a saída.",
          "startup": 0.08,
          "active": 0.17,
          "recovery": 0.28,
          "range": 135,
          "damage": 85,
          "stun": 0.34,
          "push": 95,
          "cooldown": 1.8,
          "effect": "spark",
          "move": -350,
          "id": "vittoria-1",
          "animation": {
            "pose": "vittoria-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "racing-bracelets",
            "effect": "spark",
            "storyProp": "brake-track"
          },
          "storyProp": "brake-track",
          "storyMotion": "withdraw"
        },
        {
          "name": "Curva de Alta",
          "type": "launcher",
          "description": "Um chute ascendente em diagonal lança rivais próximos. Bom contra saltos baixos; o pouso exige cuidado.",
          "startup": 0.15,
          "active": 0.16,
          "recovery": 0.42,
          "range": 147,
          "damage": 108,
          "stun": 0.39,
          "push": 31,
          "cooldown": 1.8,
          "effect": "electric",
          "reachY": 198,
          "launch": 290,
          "id": "vittoria-2",
          "animation": {
            "pose": "vittoria-special2",
            "limb": "both",
            "path": "rising",
            "prop": "racing-bracelets",
            "effect": "electric",
            "storyProp": "race-apex",
            "sequence": [
              "kick"
            ]
          },
          "storyProp": "race-apex",
          "storyMotion": "rise"
        }
      ],
      "combos": [
        {
          "id": "vittoria-combo0",
          "name": "Largada Limpa",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Pulso de Largada → Cotovelo de Ápice → Bota da Reta. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 13,
            "push": 20
          }
        },
        {
          "id": "vittoria-combo1",
          "name": "Curva da Bandeira",
          "sequence": [
            "light",
            "heavy",
            "special2"
          ],
          "description": "Pulso de Largada → Cotovelo de Ápice → Curva de Alta. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 15,
            "push": 20
          }
        }
      ],
      "attackStyle": "vittoria",
      "defenseName": "Braço de Frenagem",
      "finisher": {
        "name": "A Reta Depois do Tempo",
        "line": "Ainda cabe mais uma volta.",
        "kind": "vittoria"
      },
      "super": {
        "id": "vittoria-super",
        "name": "Cronômetro Vermelho",
        "description": "Com a energia completa, Vittoria Rosso concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Ainda cabe mais uma volta.",
        "kind": "vittoria",
        "type": "melee",
        "effect": "dash",
        "meterCost": 100,
        "startup": 0.29500000000000004,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 260,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Cronômetro Vermelho",
          "palette": [
            "#386e75",
            "#d9ac6a"
          ],
          "style": "speed"
        },
        "animation": {
          "pose": "vittoria-super",
          "prop": "racing-bracelets",
          "effect": "dash"
        },
        "storyProp": "formula-one-car"
      },
      "entrance": {
        "name": "Vittoria chega seguindo uma linha luminosa de largada.",
        "line": "Eu trouxe meu próprio tempo.",
        "style": "speed",
        "gesture": "Fecha as luvas e testa os dois braceletes.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Vittoria chega seguindo uma linha luminosa de largada.",
            "pose": "arrive",
            "prop": "racing-bracelets",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Fecha as luvas e testa os dois braceletes.",
            "pose": "warmup",
            "prop": "racing-bracelets",
            "effect": "dash"
          },
          {
            "at": 2.25,
            "action": "Corre dois passos, freia na linha e mostra a luz acumulada.",
            "pose": "signature",
            "prop": "racing-bracelets",
            "effect": "dash"
          },
          {
            "at": 3.25,
            "action": "Eu trouxe meu próprio tempo.",
            "pose": "ready",
            "prop": "racing-bracelets",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Pulso de Largada",
        "light": {
          "limb": "lead",
          "path": "wrist-jab",
          "prop": "racing-bracelets"
        },
        "heavy": {
          "limb": "rear",
          "path": "race-elbow",
          "prop": "racing-bracelets"
        },
        "kick": {
          "limb": "leg",
          "path": "straight-kick",
          "prop": "racing-bracelets"
        },
        "guard": {
          "prop": "racing-bracelets",
          "pose": "vittoria-guard"
        }
      },
      "movement": {
        "walk": 1.08,
        "backwalk": 0.78,
        "jump": 1.04
      },
      "passive": {
        "kind": "movementCharge",
        "description": "Movimento carrega o efeito visual dos braceletes; energia segue as regras normais de combate."
      },
      "visual": {
        "body": "athletic",
        "silhouette": "Macacão vermelho sem marcas reais, cabelo preto curto, luvas reforçadas e braceletes que acumulam luz conforme ela se move.",
        "outfit": "Macacão vermelho sem marcas reais, cabelo preto curto, luvas reforçadas e braceletes que acumulam luz conforme ela se move.",
        "prop": "racing-bracelets",
        "stance": "Pulso de Largada",
        "palette": [
          "#386e75",
          "#d9ac6a",
          "#c79273",
          "#342d35"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Corre dois passos, freia na linha e mostra a luz acumulada.",
        "effect": "dash",
        "line": "Ainda cabe mais uma volta."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Vittoria Rosso baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "luca": {
      "normalScale": {
        "damage": 1.08,
        "speed": 0.916,
        "range": 1.12
      },
      "normalNames": {
        "light": "Toque da Pá",
        "heavy": "Forno de Lado",
        "kick": "Bota da Farinha"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.102,
          "active": 0.077,
          "recovery": 0.188,
          "effect": "fissure"
        },
        "heavy": {
          "startup": 0.231,
          "active": 0.115,
          "recovery": 0.318,
          "effect": "fissure"
        },
        "kick": {
          "startup": 0.157,
          "active": 0.117,
          "recovery": 0.274,
          "effect": "fissure"
        }
      },
      "specials": [
        {
          "name": "Forno Aberto",
          "type": "projectile",
          "description": "Varre a pá e envia uma onda de calor rente ao chão. A preparação longa permite saltar e alcançar Luca pelo alto.",
          "startup": 0.28,
          "active": 0.06,
          "recovery": 0.41,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "fissure",
          "projectile": {
            "kind": "heat",
            "y": 16,
            "vx": 305,
            "radius": 34,
            "damage": 115,
            "stun": 0.3,
            "push": 68,
            "life": 2.4,
            "delay": 0.28,
            "hitHeight": "low"
          },
          "id": "luca-0",
          "animation": {
            "pose": "luca-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "pizza-peel",
            "effect": "fissure",
            "storyProp": "pizza"
          },
          "storyProp": "pizza",
          "storyMotion": "release"
        },
        {
          "name": "Tábua Comprida",
          "type": "melee",
          "description": "Estende a pá em uma estocada longa e pesada. Errar deixa as mãos ocupadas para a punição.",
          "startup": 0.26,
          "active": 0.11,
          "recovery": 0.42,
          "range": 270,
          "damage": 127,
          "stun": 0.34,
          "push": 77,
          "cooldown": 1.8,
          "effect": "spark",
          "id": "luca-1",
          "animation": {
            "pose": "luca-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "pizza-peel",
            "effect": "spark",
            "storyProp": "pizza-peel"
          },
          "storyProp": "pizza-peel",
          "storyMotion": "strike"
        },
        {
          "name": "Massa ao Alto",
          "type": "launcher",
          "description": "Ergue a pá por baixo num golpe que lança de perto. O arco vertical possui recuperação lenta.",
          "startup": 0.19,
          "active": 0.16,
          "recovery": 0.43,
          "range": 167,
          "damage": 110,
          "stun": 0.39,
          "push": 31,
          "cooldown": 1.8,
          "effect": "spin",
          "reachY": 198,
          "launch": 285,
          "id": "luca-2",
          "animation": {
            "pose": "luca-special2",
            "limb": "both",
            "path": "rising",
            "prop": "pizza-peel",
            "effect": "spin",
            "storyProp": "dough"
          },
          "storyProp": "dough",
          "storyMotion": "rise"
        }
      ],
      "combos": [
        {
          "id": "luca-combo0",
          "name": "Borda e Miolo",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Toque da Pá → Forno de Lado → Bota da Farinha. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 14,
            "push": 24
          }
        },
        {
          "id": "luca-combo1",
          "name": "Mesa para Dois",
          "sequence": [
            "light",
            "kick",
            "special1"
          ],
          "description": "Toque da Pá → Bota da Farinha → Tábua Comprida. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 16,
            "push": 24
          }
        }
      ],
      "attackStyle": "luca",
      "defenseName": "Pá de Porta",
      "finisher": {
        "name": "A Última Fornada",
        "line": "A casa ainda está aberta.",
        "kind": "luca"
      },
      "super": {
        "id": "luca-super",
        "name": "Calor de Casa",
        "description": "Com a energia completa, Luca Farina concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "A casa ainda está aberta.",
        "kind": "luca",
        "type": "melee",
        "effect": "fissure",
        "meterCost": 100,
        "startup": 0.32,
        "active": 0.19,
        "recovery": 0.66,
        "range": 270,
        "reachY": 190,
        "damage": 272,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Calor de Casa",
          "palette": [
            "#386e75",
            "#d9ac6a"
          ],
          "style": "weapon"
        },
        "animation": {
          "pose": "luca-super",
          "prop": "pizza-peel",
          "effect": "fissure"
        },
        "storyProp": "pizza"
      },
      "entrance": {
        "name": "Luca chega com uma massa sobre a pá.",
        "line": "Vai querer a conta agora?",
        "style": "weapon",
        "gesture": "Gira a massa e a recolhe sem deixar cair farinha no centro.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Luca chega com uma massa sobre a pá.",
            "pose": "arrive",
            "prop": "pizza-peel",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Gira a massa e a recolhe sem deixar cair farinha no centro.",
            "pose": "warmup",
            "prop": "pizza-peel",
            "effect": "fissure"
          },
          {
            "at": 2.25,
            "action": "Encosta a pá no ombro e o forno ao fundo acende.",
            "pose": "signature",
            "prop": "pizza-peel",
            "effect": "fissure"
          },
          {
            "at": 3.25,
            "action": "Vai querer a conta agora?",
            "pose": "ready",
            "prop": "pizza-peel",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Toque da Pá",
        "light": {
          "limb": "lead",
          "path": "peel-tap",
          "prop": "pizza-peel"
        },
        "heavy": {
          "limb": "rear",
          "path": "peel-swing",
          "prop": "pizza-peel"
        },
        "kick": {
          "limb": "leg",
          "path": "flour-kick",
          "prop": "pizza-peel"
        },
        "guard": {
          "prop": "pizza-peel",
          "pose": "luca-guard"
        }
      },
      "movement": {
        "walk": 0.96,
        "backwalk": 0.62,
        "jump": 0.94
      },
      "passive": null,
      "visual": {
        "body": "tank",
        "silhouette": "Avental de farinha, camiseta verde, pá de forno comprida e cabelo escuro preso por um lenço branco. Braços fortes, sorriso aberto.",
        "outfit": "Avental de farinha, camiseta verde, pá de forno comprida e cabelo escuro preso por um lenço branco. Braços fortes, sorriso aberto.",
        "prop": "pizza-peel",
        "stance": "Toque da Pá",
        "palette": [
          "#386e75",
          "#d9ac6a",
          "#c79273",
          "#342d35"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Encosta a pá no ombro e o forno ao fundo acende.",
        "effect": "fissure",
        "line": "A casa ainda está aberta."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Luca Farina baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "belladonna": {
      "normalScale": {
        "damage": 1.025,
        "speed": 1.12,
        "range": 1.12
      },
      "normalNames": {
        "light": "Ponta de Convite",
        "heavy": "Estocada de Salão",
        "kick": "Passo de Capa"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.082,
          "active": 0.082,
          "recovery": 0.163,
          "effect": "slash"
        },
        "heavy": {
          "startup": 0.196,
          "active": 0.121,
          "recovery": 0.278,
          "effect": "slash"
        },
        "kick": {
          "startup": 0.131,
          "active": 0.124,
          "recovery": 0.243,
          "effect": "slash"
        }
      },
      "specials": [
        {
          "name": "Baile das Lâminas",
          "type": "counter",
          "description": "Desvia girando e responde com uma estocada longa. Só lê ataques frontais altos; rasteiras e agarrões vencem.",
          "startup": 0.035,
          "active": 0.2,
          "recovery": 0.31,
          "range": 222,
          "damage": 118,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.3,
          "effect": "slash",
          "counterWindow": 0.2,
          "counterDamage": 118,
          "id": "belladonna-0",
          "animation": {
            "pose": "belladonna-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "rapier",
            "effect": "slash",
            "storyProp": "rapier"
          },
          "storyProp": "rapier",
          "storyMotion": "parry"
        },
        {
          "name": "Convite de Canal",
          "type": "dash",
          "description": "Avança com uma estocada estreita. A ponta tem alcance, mas a saída fica vulnerável se passar do alvo.",
          "startup": 0.12,
          "active": 0.1,
          "recovery": 0.32,
          "range": 219,
          "damage": 96,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "slash",
          "move": 270,
          "id": "belladonna-1",
          "animation": {
            "pose": "belladonna-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "rapier",
            "effect": "slash",
            "storyProp": "rapier"
          },
          "storyProp": "rapier",
          "storyMotion": "travel"
        },
        {
          "name": "Volta da Máscara",
          "type": "retreat",
          "description": "Corta a linha com o florete enquanto recua; bom para provocar erro, fraco se já estiver longe.",
          "startup": 0.11,
          "active": 0.12,
          "recovery": 0.29,
          "range": 224,
          "damage": 85,
          "stun": 0.34,
          "push": 82,
          "cooldown": 1.8,
          "effect": "slash",
          "move": -260,
          "id": "belladonna-2",
          "animation": {
            "pose": "belladonna-special2",
            "limb": "both",
            "path": "rising",
            "prop": "rapier",
            "effect": "slash",
            "storyProp": "venetian-mask"
          },
          "storyProp": "venetian-mask",
          "storyMotion": "withdraw"
        }
      ],
      "combos": [
        {
          "id": "belladonna-combo0",
          "name": "Dois Convites",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Ponta de Convite → Estocada de Salão → Passo de Capa. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 15,
            "push": 28
          }
        },
        {
          "id": "belladonna-combo1",
          "name": "Capa e Canal",
          "sequence": [
            "heavy",
            "kick",
            "special1"
          ],
          "description": "Estocada de Salão → Passo de Capa → Convite de Canal. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 17,
            "push": 28
          }
        }
      ],
      "attackStyle": "belladonna",
      "defenseName": "Guarda de Salão",
      "finisher": {
        "name": "O Baile Escolhe o Fim",
        "line": "Sua resposta chegou tarde.",
        "kind": "belladonna"
      },
      "super": {
        "id": "belladonna-super",
        "name": "Carnaval da Última Lâmina",
        "description": "Com a energia completa, Belladonna concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Sua resposta chegou tarde.",
        "kind": "belladonna",
        "type": "melee",
        "effect": "slash",
        "meterCost": 100,
        "startup": 0.34500000000000003,
        "active": 0.19,
        "recovery": 0.66,
        "range": 219,
        "reachY": 190,
        "damage": 260,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Carnaval da Última Lâmina",
          "palette": [
            "#386e75",
            "#d9ac6a"
          ],
          "style": "weapon"
        },
        "animation": {
          "pose": "belladonna-super",
          "prop": "rapier",
          "effect": "slash"
        },
        "storyProp": "rapier"
      },
      "entrance": {
        "name": "Belladonna atravessa uma ponte com uma carta lacrada.",
        "line": "Aceita o convite?",
        "style": "weapon",
        "gesture": "Rasga a carta, ajusta a máscara e tira a capa do braço.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Belladonna atravessa uma ponte com uma carta lacrada.",
            "pose": "arrive",
            "prop": "rapier",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Rasga a carta, ajusta a máscara e tira a capa do braço.",
            "pose": "warmup",
            "prop": "rapier",
            "effect": "slash"
          },
          {
            "at": 2.25,
            "action": "Saúda com o florete e aponta a ponta para a linha.",
            "pose": "signature",
            "prop": "rapier",
            "effect": "slash"
          },
          {
            "at": 3.25,
            "action": "Aceita o convite?",
            "pose": "ready",
            "prop": "rapier",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Ponta de Convite",
        "light": {
          "limb": "lead",
          "path": "rapier-point",
          "prop": "rapier"
        },
        "heavy": {
          "limb": "rear",
          "path": "lunge",
          "prop": "rapier"
        },
        "kick": {
          "limb": "leg",
          "path": "cape-step",
          "prop": "rapier"
        },
        "guard": {
          "prop": "rapier",
          "pose": "belladonna-guard"
        }
      },
      "movement": {
        "walk": 1.02,
        "backwalk": 0.82,
        "jump": 1.02
      },
      "passive": null,
      "visual": {
        "body": "slim",
        "silhouette": "Máscara branca de carnaval, capa curta vinho, florete fino, luva longa e botas ajustadas. A ponta da arma nunca fica imóvel.",
        "outfit": "Máscara branca de carnaval, capa curta vinho, florete fino, luva longa e botas ajustadas. A ponta da arma nunca fica imóvel.",
        "prop": "rapier",
        "stance": "Ponta de Convite",
        "palette": [
          "#386e75",
          "#d9ac6a",
          "#c79273",
          "#342d35"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Saúda com o florete e aponta a ponta para a linha.",
        "effect": "slash",
        "line": "Sua resposta chegou tarde."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Belladonna baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "enzo": {
      "normalScale": {
        "damage": 1.08,
        "speed": 0.916,
        "range": 1.12
      },
      "normalNames": {
        "light": "Pino de Bronze",
        "heavy": "Braço de Alavanca",
        "kick": "Bota de Came"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.104,
          "active": 0.087,
          "recovery": 0.192,
          "effect": "steam"
        },
        "heavy": {
          "startup": 0.233,
          "active": 0.097,
          "recovery": 0.322,
          "effect": "steam"
        },
        "kick": {
          "startup": 0.159,
          "active": 0.103,
          "recovery": 0.278,
          "effect": "steam"
        }
      },
      "specials": [
        {
          "name": "Máquina Impossível",
          "type": "teleport",
          "description": "Abre asas mecânicas, sobe e desce girando perto do rival. A aterrissagem é alta e pode ser defendida em pé.",
          "startup": 0.32,
          "active": 0.24,
          "recovery": 0.48,
          "range": 161,
          "damage": 135,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "steam",
          "teleport": {
            "side": "front",
            "distance": 113,
            "height": 170,
            "vy": -270
          },
          "hitHeight": "overhead",
          "reachY": 225,
          "id": "enzo-0",
          "animation": {
            "pose": "enzo-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "wood-wings",
            "effect": "steam",
            "storyProp": "wood-wings"
          },
          "storyProp": "wood-wings",
          "storyMotion": "arrival"
        },
        {
          "name": "Roda de Ensaio",
          "type": "projectile",
          "description": "Uma engrenagem gira em linha média sem voltar. A ferramenta lenta mantém uma ameaça na distância.",
          "startup": 0.27,
          "active": 0.06,
          "recovery": 0.35,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "steam",
          "projectile": {
            "kind": "gear",
            "y": 58,
            "vx": 230,
            "radius": 27,
            "damage": 98,
            "stun": 0.3,
            "push": 46,
            "life": 2.4,
            "delay": 0.27
          },
          "id": "enzo-1",
          "animation": {
            "pose": "enzo-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "wood-wings",
            "effect": "steam",
            "storyProp": "gear"
          },
          "storyProp": "gear",
          "storyMotion": "release"
        },
        {
          "name": "Alavanca de Bancada",
          "type": "melee",
          "description": "Estende um braço de madeira num golpe lento de grande alcance.",
          "startup": 0.28,
          "active": 0.13,
          "recovery": 0.41,
          "range": 243,
          "damage": 120,
          "stun": 0.34,
          "push": 85,
          "cooldown": 1.8,
          "effect": "steam",
          "id": "enzo-2",
          "animation": {
            "pose": "enzo-special2",
            "limb": "both",
            "path": "rising",
            "prop": "wood-wings",
            "effect": "steam",
            "storyProp": "lever"
          },
          "storyProp": "lever",
          "storyMotion": "strike"
        }
      ],
      "combos": [
        {
          "id": "enzo-combo0",
          "name": "Pinos e Cames",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Pino de Bronze → Braço de Alavanca → Bota de Came. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 8,
            "push": 12
          }
        },
        {
          "id": "enzo-combo1",
          "name": "Ensaio em Voo",
          "sequence": [
            "light",
            "heavy",
            "special2"
          ],
          "description": "Pino de Bronze → Braço de Alavanca → Alavanca de Bancada. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 10,
            "push": 12
          }
        }
      ],
      "attackStyle": "enzo",
      "defenseName": "Placas de Bancada",
      "finisher": {
        "name": "O Desenho Sai do Papel",
        "line": "A queda também faz parte do teste.",
        "kind": "enzo"
      },
      "super": {
        "id": "enzo-super",
        "name": "Caderno do Céu",
        "description": "Com a energia completa, Enzo Engrenagem concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "A queda também faz parte do teste.",
        "kind": "enzo",
        "type": "melee",
        "effect": "steam",
        "meterCost": 100,
        "startup": 0.27,
        "active": 0.19,
        "recovery": 0.66,
        "range": 243,
        "reachY": 190,
        "damage": 272,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Caderno do Céu",
          "palette": [
            "#386e75",
            "#d9ac6a"
          ],
          "style": "machine"
        },
        "animation": {
          "pose": "enzo-super",
          "prop": "wood-wings",
          "effect": "steam"
        },
        "storyProp": "wood-wings"
      },
      "entrance": {
        "name": "Enzo aproxima o próprio exoesqueleto apoiado num tripé.",
        "line": "Desta vez eu calculei a volta.",
        "style": "machine",
        "gesture": "Prende duas correias e dá corda à mola central.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Enzo aproxima o próprio exoesqueleto apoiado num tripé.",
            "pose": "arrive",
            "prop": "wood-wings",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Prende duas correias e dá corda à mola central.",
            "pose": "warmup",
            "prop": "wood-wings",
            "effect": "steam"
          },
          {
            "at": 2.25,
            "action": "Abre as asas uma vez, quase perde o equilíbrio e firma os pés.",
            "pose": "signature",
            "prop": "wood-wings",
            "effect": "steam"
          },
          {
            "at": 3.25,
            "action": "Desta vez eu calculei a volta.",
            "pose": "ready",
            "prop": "wood-wings",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Pino de Bronze",
        "light": {
          "limb": "lead",
          "path": "pin-jab",
          "prop": "wood-wings"
        },
        "heavy": {
          "limb": "rear",
          "path": "lever-punch",
          "prop": "wood-wings"
        },
        "kick": {
          "limb": "leg",
          "path": "cam-kick",
          "prop": "wood-wings"
        },
        "guard": {
          "prop": "wood-wings",
          "pose": "enzo-guard"
        }
      },
      "movement": {
        "walk": 0.98,
        "backwalk": 0.64,
        "jump": 1.08
      },
      "passive": null,
      "visual": {
        "body": "construct",
        "silhouette": "Avental de couro, óculos redondos e exoesqueleto de madeira escura com engrenagens de bronze. As asas dobradas formam um volume nas costas.",
        "outfit": "Avental de couro, óculos redondos e exoesqueleto de madeira escura com engrenagens de bronze. As asas dobradas formam um volume nas costas.",
        "prop": "wood-wings",
        "stance": "Pino de Bronze",
        "palette": [
          "#386e75",
          "#d9ac6a",
          "#c79273",
          "#342d35"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Abre as asas uma vez, quase perde o equilíbrio e firma os pés.",
        "effect": "steam",
        "line": "A queda também faz parte do teste."
      },
      "defeat": {
        "pose": "crumble",
        "action": "Enzo Engrenagem baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "bianca": {
      "normalScale": {
        "damage": 1.135,
        "speed": 0.848,
        "range": 1.062
      },
      "normalNames": {
        "light": "Nó de Mármore",
        "heavy": "Punho da Obra",
        "kick": "Passo de Pedreira"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.112,
          "active": 0.092,
          "recovery": 0.203,
          "effect": "fissure"
        },
        "heavy": {
          "startup": 0.246,
          "active": 0.103,
          "recovery": 0.338,
          "effect": "fissure"
        },
        "kick": {
          "startup": 0.169,
          "active": 0.11,
          "recovery": 0.291,
          "effect": "fissure"
        }
      },
      "specials": [
        {
          "name": "Obra Inacabada",
          "type": "melee",
          "description": "Molda o braço num punho enorme antes de um impacto pesado. A armadura inicial não vence agarrões.",
          "startup": 0.37,
          "active": 0.16,
          "recovery": 0.49,
          "range": 210,
          "damage": 159,
          "stun": 0.34,
          "push": 117,
          "cooldown": 2.8,
          "effect": "fissure",
          "armor": 0.28,
          "id": "bianca-0",
          "animation": {
            "pose": "bianca-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "marble-fist",
            "effect": "fissure",
            "storyProp": "marble-fist"
          },
          "storyProp": "marble-fist",
          "storyMotion": "strike"
        },
        {
          "name": "Veio Dourado",
          "type": "counter",
          "description": "Recebe o golpe na face de pedra e devolve um soco curto. Baixos e agarrões contornam a resposta.",
          "startup": 0.08,
          "active": 0.29,
          "recovery": 0.41,
          "range": 156,
          "damage": 121,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.3,
          "effect": "block",
          "counterWindow": 0.29,
          "counterDamage": 121,
          "id": "bianca-1",
          "animation": {
            "pose": "bianca-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "marble-fist",
            "effect": "block",
            "storyProp": "gold-vein"
          },
          "storyProp": "gold-vein",
          "storyMotion": "parry"
        },
        {
          "name": "Base da Escultura",
          "type": "throw",
          "description": "Abraça o rival e o deposita com força do outro lado. Exige alcance muito curto.",
          "startup": 0.17,
          "active": 0.08,
          "recovery": 0.5,
          "range": 85,
          "damage": 157,
          "stun": 0.42,
          "push": 50,
          "cooldown": 2.4,
          "effect": "fissure",
          "swap": true,
          "id": "bianca-2",
          "animation": {
            "pose": "bianca-special2",
            "limb": "both",
            "path": "rising",
            "prop": "marble-fist",
            "effect": "fissure",
            "storyProp": "marble-plinth"
          },
          "storyProp": "marble-plinth",
          "storyMotion": "close"
        }
      ],
      "combos": [
        {
          "id": "bianca-combo0",
          "name": "Veio e Cinzel",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Nó de Mármore → Punho da Obra → Passo de Pedreira. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 9,
            "push": 16
          }
        },
        {
          "id": "bianca-combo1",
          "name": "Peça Sem Dono",
          "sequence": [
            "light",
            "kick",
            "special0"
          ],
          "description": "Nó de Mármore → Passo de Pedreira → Obra Inacabada. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 11,
            "push": 16
          }
        }
      ],
      "attackStyle": "bianca",
      "defenseName": "Mármore Cruzado",
      "finisher": {
        "name": "A Forma que Escolhi",
        "line": "Meu rosto ainda é meu.",
        "kind": "bianca"
      },
      "super": {
        "id": "bianca-super",
        "name": "Autorretrato de Pedra",
        "description": "Com a energia completa, Bianca Mármore concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Meu rosto ainda é meu.",
        "kind": "bianca",
        "type": "melee",
        "effect": "fissure",
        "meterCost": 100,
        "startup": 0.29500000000000004,
        "active": 0.19,
        "recovery": 0.66,
        "range": 210,
        "reachY": 190,
        "damage": 284,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Autorretrato de Pedra",
          "palette": [
            "#386e75",
            "#d9ac6a"
          ],
          "style": "power"
        },
        "animation": {
          "pose": "bianca-super",
          "prop": "marble-fist",
          "effect": "fissure"
        },
        "storyProp": "marble-fist"
      },
      "entrance": {
        "name": "Bianca entra coberta por um pano de exposição.",
        "line": "Eu não sou a peça que faltava.",
        "style": "power",
        "gesture": "Retira o pano e observa a rachadura da própria mão.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Bianca entra coberta por um pano de exposição.",
            "pose": "arrive",
            "prop": "marble-fist",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Retira o pano e observa a rachadura da própria mão.",
            "pose": "warmup",
            "prop": "marble-fist",
            "effect": "fissure"
          },
          {
            "at": 2.25,
            "action": "Os veios dourados acendem conforme ela abre os dedos.",
            "pose": "signature",
            "prop": "marble-fist",
            "effect": "fissure"
          },
          {
            "at": 3.25,
            "action": "Eu não sou a peça que faltava.",
            "pose": "ready",
            "prop": "marble-fist",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Nó de Mármore",
        "light": {
          "limb": "lead",
          "path": "marble-knuckle",
          "prop": "marble-fist"
        },
        "heavy": {
          "limb": "rear",
          "path": "stone-fist",
          "prop": "marble-fist"
        },
        "kick": {
          "limb": "leg",
          "path": "quarry-step",
          "prop": "marble-fist"
        },
        "guard": {
          "prop": "marble-fist",
          "pose": "bianca-guard"
        }
      },
      "movement": {
        "walk": 0.94,
        "backwalk": 0.58,
        "jump": 0.84
      },
      "passive": null,
      "visual": {
        "body": "construct",
        "silhouette": "Corpo de mármore branco, rachaduras douradas, tecido esculpido num ombro e cabelos moldados em ondas curtas. Cada passo solta pequenos grãos claros.",
        "outfit": "Corpo de mármore branco, rachaduras douradas, tecido esculpido num ombro e cabelos moldados em ondas curtas. Cada passo solta pequenos grãos claros.",
        "prop": "marble-fist",
        "stance": "Nó de Mármore",
        "palette": [
          "#386e75",
          "#d9ac6a",
          "#c79273",
          "#342d35"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Os veios dourados acendem conforme ela abre os dedos.",
        "effect": "fissure",
        "line": "Meu rosto ainda é meu."
      },
      "defeat": {
        "pose": "crumble",
        "action": "Bianca Mármore baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "rocco": {
      "normalScale": {
        "damage": 1.135,
        "speed": 0.916,
        "range": 1.004
      },
      "normalNames": {
        "light": "Punho de Escória",
        "heavy": "Martelo da Cinza",
        "kick": "Bota de Cratera"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.106,
          "active": 0.067,
          "recovery": 0.182,
          "effect": "fissure"
        },
        "heavy": {
          "startup": 0.235,
          "active": 0.109,
          "recovery": 0.312,
          "effect": "fissure"
        },
        "kick": {
          "startup": 0.161,
          "active": 0.117,
          "recovery": 0.268,
          "effect": "fissure"
        }
      },
      "specials": [
        {
          "name": "Erupção",
          "type": "melee",
          "description": "Acumula calor antes de explodir ao redor dos pés. A explosão é baixa e pode ser saltada após o aviso.",
          "startup": 0.4,
          "active": 0.21,
          "recovery": 0.47,
          "range": 210,
          "damage": 157,
          "stun": 0.34,
          "push": 98,
          "cooldown": 2.8,
          "effect": "fissure",
          "ground": true,
          "hitHeight": "low",
          "id": "rocco-0",
          "animation": {
            "pose": "rocco-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "volcanic-arms",
            "effect": "fissure",
            "storyProp": "volcano"
          },
          "storyProp": "volcano",
          "storyMotion": "strike"
        },
        {
          "name": "Corrente de Lava",
          "type": "dash",
          "description": "Avança com o antebraço incandescente. Um contato pesado, sem proteção durante a corrida.",
          "startup": 0.23,
          "active": 0.25,
          "recovery": 0.39,
          "range": 129,
          "damage": 121,
          "stun": 0.34,
          "push": 71,
          "cooldown": 1.8,
          "effect": "fissure",
          "move": 275,
          "id": "rocco-1",
          "animation": {
            "pose": "rocco-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "volcanic-arms",
            "effect": "fissure",
            "storyProp": "lava-channel"
          },
          "storyProp": "lava-channel",
          "storyMotion": "travel"
        },
        {
          "name": "Escória Arremessada",
          "type": "projectile",
          "description": "Uma rocha quente viaja devagar em linha média. O preparo deixa tempo para aproximar ou saltar.",
          "startup": 0.3,
          "active": 0.06,
          "recovery": 0.4,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "fissure",
          "projectile": {
            "kind": "cinder",
            "y": 58,
            "vx": 255,
            "radius": 25,
            "damage": 111,
            "stun": 0.3,
            "push": 62,
            "life": 2.4,
            "delay": 0.3
          },
          "id": "rocco-2",
          "animation": {
            "pose": "rocco-special2",
            "limb": "both",
            "path": "rising",
            "prop": "volcanic-arms",
            "effect": "fissure",
            "storyProp": "lava-rock"
          },
          "storyProp": "lava-rock",
          "storyMotion": "release"
        }
      ],
      "combos": [
        {
          "id": "rocco-combo0",
          "name": "Escória e Pedra",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Punho de Escória → Martelo da Cinza → Bota de Cratera. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 10,
            "push": 20
          }
        },
        {
          "id": "rocco-combo1",
          "name": "Borda da Cratera",
          "sequence": [
            "heavy",
            "kick",
            "special1"
          ],
          "description": "Martelo da Cinza → Bota de Cratera → Corrente de Lava. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 12,
            "push": 20
          }
        }
      ],
      "attackStyle": "rocco",
      "defenseName": "Antebraço de Escória",
      "finisher": {
        "name": "A Montanha Respira",
        "line": "O calor também sabe proteger.",
        "kind": "rocco"
      },
      "super": {
        "id": "rocco-super",
        "name": "Coração do Vulcão",
        "description": "Com a energia completa, Rocco Cinzas concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "O calor também sabe proteger.",
        "kind": "rocco",
        "type": "melee",
        "effect": "fissure",
        "meterCost": 100,
        "startup": 0.32,
        "active": 0.19,
        "recovery": 0.66,
        "range": 210,
        "reachY": 190,
        "damage": 284,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Coração do Vulcão",
          "palette": [
            "#386e75",
            "#d9ac6a"
          ],
          "style": "power"
        },
        "animation": {
          "pose": "rocco-super",
          "prop": "volcanic-arms",
          "effect": "fissure"
        },
        "storyProp": "volcano"
      },
      "entrance": {
        "name": "Rocco pisa sobre uma linha de cinza apagada.",
        "line": "Eu seguro esta montanha.",
        "style": "power",
        "gesture": "Fecha os punhos e deixa a poeira cair dos cabelos.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Rocco pisa sobre uma linha de cinza apagada.",
            "pose": "arrive",
            "prop": "volcanic-arms",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Fecha os punhos e deixa a poeira cair dos cabelos.",
            "pose": "warmup",
            "prop": "volcanic-arms",
            "effect": "fissure"
          },
          {
            "at": 2.25,
            "action": "Uma fissura curta acende sob as botas e ele a fecha com a palma.",
            "pose": "signature",
            "prop": "volcanic-arms",
            "effect": "fissure"
          },
          {
            "at": 3.25,
            "action": "Eu seguro esta montanha.",
            "pose": "ready",
            "prop": "volcanic-arms",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Punho de Escória",
        "light": {
          "limb": "lead",
          "path": "slag-jab",
          "prop": "volcanic-arms"
        },
        "heavy": {
          "limb": "rear",
          "path": "ash-hammer",
          "prop": "volcanic-arms"
        },
        "kick": {
          "limb": "leg",
          "path": "crater-stomp",
          "prop": "volcanic-arms"
        },
        "guard": {
          "prop": "volcanic-arms",
          "pose": "rocco-guard"
        }
      },
      "movement": {
        "walk": 0.98,
        "backwalk": 0.64,
        "jump": 0.94
      },
      "passive": null,
      "visual": {
        "body": "tank",
        "silhouette": "Botas de trabalho pesadas, calça cinza, braços nus com fissuras incandescentes e cabelo coberto de cinza clara.",
        "outfit": "Botas de trabalho pesadas, calça cinza, braços nus com fissuras incandescentes e cabelo coberto de cinza clara.",
        "prop": "volcanic-arms",
        "stance": "Punho de Escória",
        "palette": [
          "#386e75",
          "#d9ac6a",
          "#c79273",
          "#342d35"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Uma fissura curta acende sob as botas e ele a fecha com a palma.",
        "effect": "fissure",
        "line": "O calor também sabe proteger."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Rocco Cinzas baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "tenor": {
      "normalScale": {
        "damage": 1.08,
        "speed": 0.916,
        "range": 1.12
      },
      "normalNames": {
        "light": "Toque de Maestro",
        "heavy": "Palma de Plateia",
        "kick": "Passo da Casaca"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.107,
          "active": 0.072,
          "recovery": 0.184,
          "effect": "voice"
        },
        "heavy": {
          "startup": 0.236,
          "active": 0.115,
          "recovery": 0.314,
          "effect": "voice"
        },
        "kick": {
          "startup": 0.162,
          "active": 0.124,
          "recovery": 0.27,
          "effect": "voice"
        }
      },
      "specials": [
        {
          "name": "Nota Impossível",
          "type": "projectile",
          "description": "Inspira profundamente antes de uma onda sonora larga. O empurrão forte é equilibrado pela preparação lenta.",
          "startup": 0.39,
          "active": 0.06,
          "recovery": 0.45,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.7,
          "effect": "voice",
          "projectile": {
            "kind": "opera",
            "y": 58,
            "vx": 335,
            "radius": 45,
            "damage": 130,
            "stun": 0.3,
            "push": 135,
            "life": 2.5,
            "delay": 0.39
          },
          "id": "tenor-0",
          "animation": {
            "pose": "tenor-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "opera-voice",
            "effect": "voice",
            "storyProp": "opera-note"
          },
          "storyProp": "opera-note",
          "storyMotion": "release"
        },
        {
          "name": "Sílaba de Abertura",
          "type": "projectile",
          "description": "Uma nota curta sai rápido e viaja pouco; oferece controle próximo com dano reduzido.",
          "startup": 0.13,
          "active": 0.06,
          "recovery": 0.27,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "voice",
          "projectile": {
            "kind": "syllable",
            "y": 58,
            "vx": 380,
            "radius": 24,
            "damage": 75,
            "stun": 0.3,
            "push": 54,
            "life": 0.85,
            "delay": 0.13
          },
          "id": "tenor-1",
          "animation": {
            "pose": "tenor-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "opera-voice",
            "effect": "voice",
            "storyProp": "opera-note"
          },
          "storyProp": "opera-note",
          "storyMotion": "release"
        },
        {
          "name": "Crescendo Vertical",
          "type": "launcher",
          "description": "Conduz a mão para cima e libera uma coluna de voz perto do corpo.",
          "startup": 0.22,
          "active": 0.16,
          "recovery": 0.43,
          "range": 151,
          "damage": 112,
          "stun": 0.39,
          "push": 31,
          "cooldown": 1.8,
          "effect": "voice",
          "reachY": 215,
          "launch": 290,
          "id": "tenor-2",
          "animation": {
            "pose": "tenor-special2",
            "limb": "both",
            "path": "rising",
            "prop": "opera-voice",
            "effect": "voice",
            "storyProp": "curtain"
          },
          "storyProp": "curtain",
          "storyMotion": "rise"
        }
      ],
      "combos": [
        {
          "id": "tenor-combo0",
          "name": "Pausa e Frase",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Toque de Maestro → Palma de Plateia → Passo da Casaca. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 11,
            "push": 24
          }
        },
        {
          "id": "tenor-combo1",
          "name": "Cortina de Vozes",
          "sequence": [
            "light",
            "heavy",
            "special2"
          ],
          "description": "Toque de Maestro → Palma de Plateia → Crescendo Vertical. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 13,
            "push": 24
          }
        }
      ],
      "attackStyle": "tenor",
      "defenseName": "Pausa de Compasso",
      "finisher": {
        "name": "O Teatro se Lembra",
        "line": "Nenhuma voz merece o esquecimento.",
        "kind": "tenor"
      },
      "super": {
        "id": "tenor-super",
        "name": "Ária dos Esquecidos",
        "description": "Com a energia completa, Tenor Tempesta concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Nenhuma voz merece o esquecimento.",
        "kind": "tenor",
        "type": "melee",
        "effect": "voice",
        "meterCost": 100,
        "startup": 0.34500000000000003,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 272,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Ária dos Esquecidos",
          "palette": [
            "#386e75",
            "#d9ac6a"
          ],
          "style": "dance"
        },
        "animation": {
          "pose": "tenor-super",
          "prop": "opera-voice",
          "effect": "voice"
        },
        "storyProp": "opera-note"
      },
      "entrance": {
        "name": "Tenor abre uma cortina imaginária e se curva.",
        "line": "Escute até o último compasso.",
        "style": "dance",
        "gesture": "Afrouxa o lenço e testa uma nota grave.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Tenor abre uma cortina imaginária e se curva.",
            "pose": "arrive",
            "prop": "opera-voice",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Afrouxa o lenço e testa uma nota grave.",
            "pose": "warmup",
            "prop": "opera-voice",
            "effect": "voice"
          },
          {
            "at": 2.25,
            "action": "O pó do chão responde formando um pequeno semicírculo.",
            "pose": "signature",
            "prop": "opera-voice",
            "effect": "voice"
          },
          {
            "at": 3.25,
            "action": "Escute até o último compasso.",
            "pose": "ready",
            "prop": "opera-voice",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Toque de Maestro",
        "light": {
          "limb": "lead",
          "path": "conductor-tap",
          "prop": "opera-voice"
        },
        "heavy": {
          "limb": "rear",
          "path": "audience-palm",
          "prop": "opera-voice"
        },
        "kick": {
          "limb": "leg",
          "path": "opera-step",
          "prop": "opera-voice"
        },
        "guard": {
          "prop": "opera-voice",
          "pose": "tenor-guard"
        }
      },
      "movement": {
        "walk": 0.96,
        "backwalk": 0.64,
        "jump": 0.94
      },
      "passive": null,
      "visual": {
        "body": "tank",
        "silhouette": "Casaca azul de abas curtas, lenço prateado, bigode bem aparado e colete escuro. Peito aberto, braço esquerdo sempre conduzindo a frase.",
        "outfit": "Casaca azul de abas curtas, lenço prateado, bigode bem aparado e colete escuro. Peito aberto, braço esquerdo sempre conduzindo a frase.",
        "prop": "opera-voice",
        "stance": "Toque de Maestro",
        "palette": [
          "#386e75",
          "#d9ac6a",
          "#c79273",
          "#342d35"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "O pó do chão responde formando um pequeno semicírculo.",
        "effect": "voice",
        "line": "Nenhuma voz merece o esquecimento."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Tenor Tempesta baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "nonna": {
      "normalScale": {
        "damage": 0.97,
        "speed": 0.916,
        "range": 1.12
      },
      "normalNames": {
        "light": "Ponta de Vassoura",
        "heavy": "Bolsa de Carvão",
        "kick": "Botina de Chaminé"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.097,
          "active": 0.077,
          "recovery": 0.186,
          "effect": "fissure"
        },
        "heavy": {
          "startup": 0.226,
          "active": 0.121,
          "recovery": 0.316,
          "effect": "fissure"
        },
        "kick": {
          "startup": 0.152,
          "active": 0.103,
          "recovery": 0.272,
          "effect": "fissure"
        }
      },
      "specials": [
        {
          "name": "Presente de Carvão",
          "type": "trap",
          "description": "Deixa um carvão num ponto marcado e o faz explodir após um intervalo. Só um carvão permanece armado.",
          "startup": 0.29,
          "active": 0.06,
          "recovery": 0.36,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.5,
          "effect": "fissure",
          "projectile": {
            "kind": "coal",
            "y": 12,
            "vx": 0,
            "radius": 51,
            "damage": 109,
            "stun": 0.29,
            "push": 68,
            "life": 2.6,
            "delay": 0.95,
            "anchor": "enemy",
            "maxRange": 330,
            "unique": true,
            "hitHeight": "low"
          },
          "id": "nonna-0",
          "animation": {
            "pose": "nonna-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "broom",
            "effect": "fissure",
            "storyProp": "coal-gift"
          },
          "storyProp": "coal-gift",
          "storyMotion": "plant"
        },
        {
          "name": "Carta da Meia-Noite",
          "type": "projectile",
          "description": "Uma carta encantada cruza devagar a linha do peito. No contato, prende os pés brevemente.",
          "startup": 0.25,
          "active": 0.06,
          "recovery": 0.33,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "ghost",
          "projectile": {
            "kind": "letter",
            "y": 58,
            "vx": 205,
            "radius": 23,
            "damage": 76,
            "stun": 0.3,
            "push": 38,
            "life": 2.4,
            "delay": 0.25,
            "root": 0.4
          },
          "id": "nonna-1",
          "animation": {
            "pose": "nonna-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "broom",
            "effect": "ghost",
            "storyProp": "letter"
          },
          "storyProp": "letter",
          "storyMotion": "release"
        },
        {
          "name": "Varrida de Soleira",
          "type": "melee",
          "description": "Varre o chão com a vassoura em um arco comprido. O golpe baixo perde para saltos.",
          "startup": 0.23,
          "active": 0.18,
          "recovery": 0.38,
          "range": 238,
          "damage": 103,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "wind",
          "hitHeight": "low",
          "ground": true,
          "id": "nonna-2",
          "animation": {
            "pose": "nonna-special2",
            "limb": "both",
            "path": "rising",
            "prop": "broom",
            "effect": "wind",
            "storyProp": "broom"
          },
          "storyProp": "broom",
          "storyMotion": "strike"
        }
      ],
      "combos": [
        {
          "id": "nonna-combo0",
          "name": "Carta e Carvão",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Ponta de Vassoura → Bolsa de Carvão → Botina de Chaminé. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 12,
            "push": 28
          }
        },
        {
          "id": "nonna-combo1",
          "name": "Presentes Tardios",
          "sequence": [
            "light",
            "kick",
            "special2"
          ],
          "description": "Ponta de Vassoura → Botina de Chaminé → Varrida de Soleira. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 14,
            "push": 28
          }
        }
      ],
      "attackStyle": "nonna",
      "defenseName": "Cabo na Soleira",
      "finisher": {
        "name": "A Noite Ainda Entrega",
        "line": "Seu futuro não cabe nessa cinza.",
        "kind": "nonna"
      },
      "super": {
        "id": "nonna-super",
        "name": "Bolsa das Noites Futuras",
        "description": "Com a energia completa, Nonna Notte concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Seu futuro não cabe nessa cinza.",
        "kind": "nonna",
        "type": "melee",
        "effect": "fissure",
        "meterCost": 100,
        "startup": 0.27,
        "active": 0.19,
        "recovery": 0.66,
        "range": 238,
        "reachY": 190,
        "damage": 248,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Bolsa das Noites Futuras",
          "palette": [
            "#386e75",
            "#d9ac6a"
          ],
          "style": "spectral"
        },
        "animation": {
          "pose": "nonna-super",
          "prop": "broom",
          "effect": "fissure"
        },
        "storyProp": "coal-gift"
      },
      "entrance": {
        "name": "A vassoura pousa antes de Nonna.",
        "line": "Eu sei quem merece qual presente.",
        "style": "spectral",
        "gesture": "Ela recolhe a bolsa e procura uma carta dobrada.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "A vassoura pousa antes de Nonna.",
            "pose": "arrive",
            "prop": "broom",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Ela recolhe a bolsa e procura uma carta dobrada.",
            "pose": "warmup",
            "prop": "broom",
            "effect": "fissure"
          },
          {
            "at": 2.25,
            "action": "Troca a carta por um carvão que acende na palma.",
            "pose": "signature",
            "prop": "broom",
            "effect": "fissure"
          },
          {
            "at": 3.25,
            "action": "Eu sei quem merece qual presente.",
            "pose": "ready",
            "prop": "broom",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Ponta de Vassoura",
        "light": {
          "limb": "lead",
          "path": "broom-tip",
          "prop": "broom"
        },
        "heavy": {
          "limb": "rear",
          "path": "bag-swing",
          "prop": "broom"
        },
        "kick": {
          "limb": "leg",
          "path": "chimney-boot",
          "prop": "broom"
        },
        "guard": {
          "prop": "broom",
          "pose": "nonna-guard"
        }
      },
      "movement": {
        "walk": 0.96,
        "backwalk": 0.66,
        "jump": 0.92
      },
      "passive": null,
      "visual": {
        "body": "slim",
        "silhouette": "Xale remendado, bolsa encantada, vassoura torta e botas de vários consertos. Cabelo branco curto, olhos atentos sob um lenço verde.",
        "outfit": "Xale remendado, bolsa encantada, vassoura torta e botas de vários consertos. Cabelo branco curto, olhos atentos sob um lenço verde.",
        "prop": "broom",
        "stance": "Ponta de Vassoura",
        "palette": [
          "#386e75",
          "#d9ac6a",
          "#c79273",
          "#342d35"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Troca a carta por um carvão que acende na palma.",
        "effect": "fissure",
        "line": "Seu futuro não cabe nessa cinza."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Nonna Notte baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "arthur": {
      "normalScale": {
        "damage": 1.135,
        "speed": 0.848,
        "range": 1.12
      },
      "normalNames": {
        "light": "Pomo de Ferro",
        "heavy": "Corte da Ferrugem",
        "kick": "Greva do Juramento"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.105,
          "active": 0.082,
          "recovery": 0.197,
          "effect": "slash"
        },
        "heavy": {
          "startup": 0.239,
          "active": 0.097,
          "recovery": 0.332,
          "effect": "slash"
        },
        "kick": {
          "startup": 0.162,
          "active": 0.11,
          "recovery": 0.285,
          "effect": "slash"
        }
      },
      "specials": [
        {
          "name": "Juramento de Ferro",
          "type": "projectile",
          "description": "Finca a espada no chão e libera uma onda terrestre. A pausa e o clarão permitem saltar a energia baixa.",
          "startup": 0.37,
          "active": 0.06,
          "recovery": 0.46,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.7,
          "effect": "slash",
          "projectile": {
            "kind": "ironwave",
            "y": 17,
            "vx": 315,
            "radius": 36,
            "damage": 128,
            "stun": 0.3,
            "push": 84,
            "life": 2.4,
            "delay": 0.37,
            "hitHeight": "low"
          },
          "id": "arthur-0",
          "animation": {
            "pose": "arthur-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "broadsword",
            "effect": "slash",
            "storyProp": "broadsword"
          },
          "storyProp": "broadsword",
          "storyMotion": "release"
        },
        {
          "name": "Portão do Norte",
          "type": "melee",
          "description": "Um corte largo e lento usa a extensão da espada. Forte para punir erros de longe, vulnerável se passar do alvo.",
          "startup": 0.31,
          "active": 0.14,
          "recovery": 0.46,
          "range": 270,
          "damage": 141,
          "stun": 0.34,
          "push": 89,
          "cooldown": 1.8,
          "effect": "slash",
          "id": "arthur-1",
          "animation": {
            "pose": "arthur-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "broadsword",
            "effect": "slash",
            "storyProp": "broadsword"
          },
          "storyProp": "broadsword",
          "storyMotion": "strike"
        },
        {
          "name": "Promessa na Guarda",
          "type": "counter",
          "description": "Apara um golpe frontal e devolve o pomo da espada. Rasteiras e agarrões vencem.",
          "startup": 0.075,
          "active": 0.29,
          "recovery": 0.41,
          "range": 157,
          "damage": 124,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.3,
          "effect": "block",
          "counterWindow": 0.29,
          "counterDamage": 124,
          "id": "arthur-2",
          "animation": {
            "pose": "arthur-special2",
            "limb": "both",
            "path": "rising",
            "prop": "broadsword",
            "effect": "block",
            "storyProp": "oath-shield"
          },
          "storyProp": "oath-shield",
          "storyMotion": "parry"
        }
      ],
      "combos": [
        {
          "id": "arthur-combo0",
          "name": "Ferro e Palavra",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Pomo de Ferro → Corte da Ferrugem → Greva do Juramento. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 13,
            "push": 12
          }
        },
        {
          "id": "arthur-combo1",
          "name": "Portão Cumprido",
          "sequence": [
            "heavy",
            "kick",
            "special0"
          ],
          "description": "Corte da Ferrugem → Greva do Juramento → Juramento de Ferro. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 15,
            "push": 12
          }
        }
      ],
      "attackStyle": "arthur",
      "defenseName": "Guarda do Juramento",
      "finisher": {
        "name": "A Promessa Atravessa o Tempo",
        "line": "Eu ainda respondo pelo juramento.",
        "kind": "arthur"
      },
      "super": {
        "id": "arthur-super",
        "name": "Reino de Palavra",
        "description": "Com a energia completa, Arthur Ferrugem concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Eu ainda respondo pelo juramento.",
        "kind": "arthur",
        "type": "melee",
        "effect": "slash",
        "meterCost": 100,
        "startup": 0.29500000000000004,
        "active": 0.19,
        "recovery": 0.66,
        "range": 270,
        "reachY": 190,
        "damage": 284,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Reino de Palavra",
          "palette": [
            "#66647d",
            "#cbb594"
          ],
          "style": "weapon"
        },
        "animation": {
          "pose": "arthur-super",
          "prop": "broadsword",
          "effect": "slash"
        },
        "storyProp": "broadsword"
      },
      "entrance": {
        "name": "Arthur retira a espada de uma rachadura na pedra.",
        "line": "Meu dever ainda tem um nome.",
        "style": "weapon",
        "gesture": "Aperta uma presilha moderna na couraça antiga.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Arthur retira a espada de uma rachadura na pedra.",
            "pose": "arrive",
            "prop": "broadsword",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Aperta uma presilha moderna na couraça antiga.",
            "pose": "warmup",
            "prop": "broadsword",
            "effect": "slash"
          },
          {
            "at": 2.25,
            "action": "Apoia a lâmina no chão e toca a inscrição gasta.",
            "pose": "signature",
            "prop": "broadsword",
            "effect": "slash"
          },
          {
            "at": 3.25,
            "action": "Meu dever ainda tem um nome.",
            "pose": "ready",
            "prop": "broadsword",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Pomo de Ferro",
        "light": {
          "limb": "lead",
          "path": "sword-pommel",
          "prop": "broadsword"
        },
        "heavy": {
          "limb": "rear",
          "path": "broad-slash",
          "prop": "broadsword"
        },
        "kick": {
          "limb": "leg",
          "path": "greave-kick",
          "prop": "broadsword"
        },
        "guard": {
          "prop": "broadsword",
          "pose": "arthur-guard"
        }
      },
      "movement": {
        "walk": 0.94,
        "backwalk": 0.58,
        "jump": 0.86
      },
      "passive": null,
      "visual": {
        "body": "tank",
        "silhouette": "Armadura antiga remendada com placas modernas, espada larga de ponta gasta, escudo de ombro e barba curta avermelhada.",
        "outfit": "Armadura antiga remendada com placas modernas, espada larga de ponta gasta, escudo de ombro e barba curta avermelhada.",
        "prop": "broadsword",
        "stance": "Pomo de Ferro",
        "palette": [
          "#66647d",
          "#cbb594",
          "#c09b83",
          "#35323e"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Apoia a lâmina no chão e toca a inscrição gasta.",
        "effect": "slash",
        "line": "Eu ainda respondo pelo juramento."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Arthur Ferrugem baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "dex": {
      "normalScale": {
        "damage": 1.025,
        "speed": 1.12,
        "range": 0.946
      },
      "normalNames": {
        "light": "Nó de Rebite",
        "heavy": "Cabeçada de Rua",
        "kick": "Coturno de Porão"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.078,
          "active": 0.087,
          "recovery": 0.163,
          "effect": "dash"
        },
        "heavy": {
          "startup": 0.192,
          "active": 0.103,
          "recovery": 0.278,
          "effect": "dash"
        },
        "kick": {
          "startup": 0.127,
          "active": 0.117,
          "recovery": 0.243,
          "effect": "dash"
        }
      },
      "specials": [
        {
          "name": "Quebra-Tudo",
          "type": "dash",
          "description": "Entra numa sequência de três cotovelos e cabeçada. Precisa chegar perto; todos os contatos podem ser defendidos.",
          "startup": 0.12,
          "active": 0.45,
          "recovery": 0.33,
          "range": 94,
          "damage": 32,
          "stun": 0.16,
          "push": 13,
          "cooldown": 2.15,
          "effect": "dash",
          "move": 240,
          "multi": 4,
          "id": "dex-0",
          "animation": {
            "pose": "dex-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "punk-boots",
            "effect": "dash",
            "storyProp": "punk-boots"
          },
          "storyProp": "punk-boots",
          "storyMotion": "travel"
        },
        {
          "name": "Refrão de Coturno",
          "type": "melee",
          "description": "Uma bota rasteira curta quebra a postura de quem só defende alto. Saltos escapam.",
          "startup": 0.12,
          "active": 0.14,
          "recovery": 0.29,
          "range": 137,
          "damage": 91,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "spark",
          "hitHeight": "low",
          "ground": true,
          "id": "dex-1",
          "animation": {
            "pose": "dex-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "punk-boots",
            "effect": "spark",
            "storyProp": "speaker"
          },
          "storyProp": "speaker",
          "storyMotion": "strike"
        },
        {
          "name": "Teto de Porão",
          "type": "launcher",
          "description": "Uma cabeçada ascendente intercepta rivais próximos. Recuperação longa deixa Dex exposto ao errar.",
          "startup": 0.14,
          "active": 0.16,
          "recovery": 0.43,
          "range": 116,
          "damage": 110,
          "stun": 0.39,
          "push": 31,
          "cooldown": 1.8,
          "effect": "beast",
          "reachY": 198,
          "launch": 285,
          "id": "dex-2",
          "animation": {
            "pose": "dex-special2",
            "limb": "both",
            "path": "rising",
            "prop": "punk-boots",
            "effect": "beast",
            "storyProp": "broken-clock"
          },
          "storyProp": "broken-clock",
          "storyMotion": "rise"
        }
      ],
      "combos": [
        {
          "id": "dex-combo0",
          "name": "Rebites Soltos",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Nó de Rebite → Cabeçada de Rua → Coturno de Porão. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 14,
            "push": 16
          }
        },
        {
          "id": "dex-combo1",
          "name": "Rua Sem Dono",
          "sequence": [
            "light",
            "heavy",
            "special0"
          ],
          "description": "Nó de Rebite → Cabeçada de Rua → Quebra-Tudo. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 16,
            "push": 16
          }
        }
      ],
      "attackStyle": "dex",
      "defenseName": "Jaqueta de Rebites",
      "finisher": {
        "name": "O Porão Ainda Grita",
        "line": "Meu bairro não está à venda.",
        "kind": "dex"
      },
      "super": {
        "id": "dex-super",
        "name": "Motim de Meia-Noite",
        "description": "Com a energia completa, Dex Riot concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Meu bairro não está à venda.",
        "kind": "dex",
        "type": "melee",
        "effect": "dash",
        "meterCost": 100,
        "startup": 0.32,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 260,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Motim de Meia-Noite",
          "palette": [
            "#66647d",
            "#cbb594"
          ],
          "style": "speed"
        },
        "animation": {
          "pose": "dex-super",
          "prop": "punk-boots",
          "effect": "dash"
        },
        "storyProp": "punk-boots"
      },
      "entrance": {
        "name": "Dex bate um coturno numa caixa de som desligada.",
        "line": "Agora escuta a rua.",
        "style": "speed",
        "gesture": "Ajeita o moicano e arranca um papel de demolição da jaqueta.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Dex bate um coturno numa caixa de som desligada.",
            "pose": "arrive",
            "prop": "punk-boots",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Ajeita o moicano e arranca um papel de demolição da jaqueta.",
            "pose": "warmup",
            "prop": "punk-boots",
            "effect": "dash"
          },
          {
            "at": 2.25,
            "action": "Rasga o papel em quatro e fecha os punhos.",
            "pose": "signature",
            "prop": "punk-boots",
            "effect": "dash"
          },
          {
            "at": 3.25,
            "action": "Agora escuta a rua.",
            "pose": "ready",
            "prop": "punk-boots",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Nó de Rebite",
        "light": {
          "limb": "lead",
          "path": "punk-jab",
          "prop": "punk-boots"
        },
        "heavy": {
          "limb": "rear",
          "path": "headbutt",
          "prop": "punk-boots"
        },
        "kick": {
          "limb": "leg",
          "path": "combat-boot",
          "prop": "punk-boots"
        },
        "guard": {
          "prop": "punk-boots",
          "pose": "dex-guard"
        }
      },
      "movement": {
        "walk": 1.06,
        "backwalk": 0.72,
        "jump": 1.02
      },
      "passive": null,
      "visual": {
        "body": "athletic",
        "silhouette": "Moicano verde, jaqueta roxa com remendos inventados, coturnos pretos e calça vermelha gasta.",
        "outfit": "Moicano verde, jaqueta roxa com remendos inventados, coturnos pretos e calça vermelha gasta.",
        "prop": "punk-boots",
        "stance": "Nó de Rebite",
        "palette": [
          "#66647d",
          "#cbb594",
          "#c09b83",
          "#35323e"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Rasga o papel em quatro e fecha os punhos.",
        "effect": "dash",
        "line": "Meu bairro não está à venda."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Dex Riot baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "grey": {
      "normalScale": {
        "damage": 1.025,
        "speed": 0.984,
        "range": 1.12
      },
      "normalNames": {
        "light": "Ponta de Chuva",
        "heavy": "Cabo de Serviço",
        "kick": "Sapato de Sombra"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.093,
          "active": 0.092,
          "recovery": 0.183,
          "effect": "electric"
        },
        "heavy": {
          "startup": 0.217,
          "active": 0.109,
          "recovery": 0.308,
          "effect": "electric"
        },
        "kick": {
          "startup": 0.146,
          "active": 0.124,
          "recovery": 0.267,
          "effect": "electric"
        }
      },
      "specials": [
        {
          "name": "Previsão de Chuva",
          "type": "counter",
          "description": "Abre o guarda-chuva para devolver um impacto com uma descarga. Só responde a ataques frontais altos.",
          "startup": 0.055,
          "active": 0.27,
          "recovery": 0.39,
          "range": 184,
          "damage": 119,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.3,
          "effect": "electric",
          "counterWindow": 0.27,
          "counterDamage": 119,
          "id": "grey-0",
          "animation": {
            "pose": "grey-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "umbrella",
            "effect": "electric",
            "storyProp": "umbrella"
          },
          "storyProp": "umbrella",
          "storyMotion": "parry"
        },
        {
          "name": "Arquivo de Campo",
          "type": "trap",
          "description": "Uma abotoadura instala um sensor no piso. A luz âmbar avisa antes da descarga elétrica.",
          "startup": 0.25,
          "active": 0.06,
          "recovery": 0.35,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.3,
          "effect": "electric",
          "projectile": {
            "kind": "cufflink",
            "y": 12,
            "vx": 0,
            "radius": 39,
            "damage": 83,
            "stun": 0.29,
            "push": 20,
            "life": 2.3,
            "delay": 0.72,
            "anchor": "enemy",
            "maxRange": 300,
            "unique": true,
            "hitHeight": "low",
            "root": 0.35
          },
          "id": "grey-1",
          "animation": {
            "pose": "grey-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "umbrella",
            "effect": "electric",
            "storyProp": "cufflink"
          },
          "storyProp": "cufflink",
          "storyMotion": "plant"
        },
        {
          "name": "Passo Discreto",
          "type": "dash",
          "description": "Uma estocada do guarda-chuva avança pouco e alcança longe. Sem armadura ou invisibilidade.",
          "startup": 0.15,
          "active": 0.12,
          "recovery": 0.32,
          "range": 205,
          "damage": 97,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "slash",
          "move": 235,
          "id": "grey-2",
          "animation": {
            "pose": "grey-special2",
            "limb": "both",
            "path": "rising",
            "prop": "umbrella",
            "effect": "slash",
            "storyProp": "umbrella"
          },
          "storyProp": "umbrella",
          "storyMotion": "travel"
        }
      ],
      "combos": [
        {
          "id": "grey-combo0",
          "name": "Chuva e Arquivo",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Ponta de Chuva → Cabo de Serviço → Sapato de Sombra. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 15,
            "push": 20
          }
        },
        {
          "id": "grey-combo1",
          "name": "Ordem Revogada",
          "sequence": [
            "light",
            "kick",
            "special2"
          ],
          "description": "Ponta de Chuva → Sapato de Sombra → Passo Discreto. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 17,
            "push": 20
          }
        }
      ],
      "attackStyle": "grey",
      "defenseName": "Cúpula de Chuva",
      "finisher": {
        "name": "O Dossiê Sem Assinatura",
        "line": "A previsão mudou.",
        "kind": "grey"
      },
      "super": {
        "id": "grey-super",
        "name": "Protocolo da Tempestade",
        "description": "Com a energia completa, Agente Grey concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "A previsão mudou.",
        "kind": "grey",
        "type": "melee",
        "effect": "electric",
        "meterCost": 100,
        "startup": 0.34500000000000003,
        "active": 0.19,
        "recovery": 0.66,
        "range": 205,
        "reachY": 190,
        "damage": 260,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Protocolo da Tempestade",
          "palette": [
            "#66647d",
            "#cbb594"
          ],
          "style": "weapon"
        },
        "animation": {
          "pose": "grey-super",
          "prop": "umbrella",
          "effect": "electric"
        },
        "storyProp": "umbrella"
      },
      "entrance": {
        "name": "Grey atravessa a chuva com o guarda-chuva aberto.",
        "line": "Receio que a reunião acabou.",
        "style": "weapon",
        "gesture": "Sacode as gotas fora da faixa de luta e consulta uma abotoadura.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Grey atravessa a chuva com o guarda-chuva aberto.",
            "pose": "arrive",
            "prop": "umbrella",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Sacode as gotas fora da faixa de luta e consulta uma abotoadura.",
            "pose": "warmup",
            "prop": "umbrella",
            "effect": "electric"
          },
          {
            "at": 2.25,
            "action": "Fecha o guarda-chuva: um arco elétrico percorre a ponta.",
            "pose": "signature",
            "prop": "umbrella",
            "effect": "electric"
          },
          {
            "at": 3.25,
            "action": "Receio que a reunião acabou.",
            "pose": "ready",
            "prop": "umbrella",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Ponta de Chuva",
        "light": {
          "limb": "lead",
          "path": "umbrella-tip",
          "prop": "umbrella"
        },
        "heavy": {
          "limb": "rear",
          "path": "cane-hook",
          "prop": "umbrella"
        },
        "kick": {
          "limb": "leg",
          "path": "dress-shoe",
          "prop": "umbrella"
        },
        "guard": {
          "prop": "umbrella",
          "pose": "grey-guard"
        }
      },
      "movement": {
        "walk": 0.98,
        "backwalk": 0.7,
        "jump": 0.96
      },
      "passive": null,
      "visual": {
        "body": "slim",
        "silhouette": "Terno cinza perfeitamente ajustado, luvas escuras, guarda-chuva preto e abotoaduras de cobre. Cabelo grisalho sem um fio fora do lugar.",
        "outfit": "Terno cinza perfeitamente ajustado, luvas escuras, guarda-chuva preto e abotoaduras de cobre. Cabelo grisalho sem um fio fora do lugar.",
        "prop": "umbrella",
        "stance": "Ponta de Chuva",
        "palette": [
          "#66647d",
          "#cbb594",
          "#c09b83",
          "#35323e"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Fecha o guarda-chuva: um arco elétrico percorre a ponta.",
        "effect": "electric",
        "line": "A previsão mudou."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Agente Grey baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "eleanor": {
      "normalScale": {
        "damage": 0.97,
        "speed": 1.052,
        "range": 1.12
      },
      "normalNames": {
        "light": "Dedos de Véu",
        "heavy": "Palma da Sala",
        "kick": "Passo do Assoalho"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.087,
          "active": 0.067,
          "recovery": 0.176,
          "effect": "ghost"
        },
        "heavy": {
          "startup": 0.206,
          "active": 0.115,
          "recovery": 0.296,
          "effect": "ghost"
        },
        "kick": {
          "startup": 0.138,
          "active": 0.103,
          "recovery": 0.258,
          "effect": "ghost"
        }
      },
      "specials": [
        {
          "name": "Salão dos Espelhos",
          "type": "teleport",
          "description": "Reflexos se erguem ao redor do rival antes de um toque real pelas costas. A aparição pode ser interrompida.",
          "startup": 0.29,
          "active": 0.12,
          "recovery": 0.4,
          "range": 145,
          "damage": 112,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "ghost",
          "teleport": {
            "side": "behind",
            "distance": 100,
            "height": 0
          },
          "id": "eleanor-0",
          "animation": {
            "pose": "eleanor-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "veil",
            "effect": "ghost",
            "storyProp": "mirror"
          },
          "storyProp": "mirror",
          "storyMotion": "arrival"
        },
        {
          "name": "Carta Devolvida",
          "type": "projectile",
          "description": "Uma carta de névoa flutua lentamente. O primeiro contato prende os pés por um instante.",
          "startup": 0.27,
          "active": 0.06,
          "recovery": 0.34,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "ghost",
          "projectile": {
            "kind": "mistletter",
            "y": 58,
            "vx": 175,
            "radius": 29,
            "damage": 80,
            "stun": 0.3,
            "push": 38,
            "life": 3.4,
            "delay": 0.27,
            "unique": true,
            "root": 0.44,
            "arcAmplitude": 15,
            "arcFrequency": 3
          },
          "id": "eleanor-1",
          "animation": {
            "pose": "eleanor-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "veil",
            "effect": "ghost",
            "storyProp": "letter"
          },
          "storyProp": "letter",
          "storyMotion": "release"
        },
        {
          "name": "Passo da Ante-Sala",
          "type": "retreat",
          "description": "Desliza para trás e cobre a frente com o véu. A janela inicial de desaparecimento é breve e não vence agarrões preparados.",
          "startup": 0.11,
          "active": 0.17,
          "recovery": 0.29,
          "range": 172,
          "damage": 82,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "ghost",
          "move": -315,
          "invulnerable": 0.07,
          "id": "eleanor-2",
          "animation": {
            "pose": "eleanor-special2",
            "limb": "both",
            "path": "rising",
            "prop": "veil",
            "effect": "ghost",
            "storyProp": "veil"
          },
          "storyProp": "veil",
          "storyMotion": "withdraw"
        }
      ],
      "combos": [
        {
          "id": "eleanor-combo0",
          "name": "Carta e Reflexo",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Dedos de Véu → Palma da Sala → Passo do Assoalho. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 8,
            "push": 24
          }
        },
        {
          "id": "eleanor-combo1",
          "name": "Porta da Ante-Sala",
          "sequence": [
            "heavy",
            "kick",
            "special0"
          ],
          "description": "Palma da Sala → Passo do Assoalho → Salão dos Espelhos. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 10,
            "push": 24
          }
        }
      ],
      "attackStyle": "eleanor",
      "defenseName": "Véu de Prata",
      "finisher": {
        "name": "A Resposta Finalmente Chega",
        "line": "Desta vez, abra a carta.",
        "kind": "eleanor"
      },
      "super": {
        "id": "eleanor-super",
        "name": "Casa de Todas as Respostas",
        "description": "Com a energia completa, Eleanor Névoa concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Desta vez, abra a carta.",
        "kind": "eleanor",
        "type": "melee",
        "effect": "ghost",
        "meterCost": 100,
        "startup": 0.27,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 248,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Casa de Todas as Respostas",
          "palette": [
            "#66647d",
            "#cbb594"
          ],
          "style": "spectral"
        },
        "animation": {
          "pose": "eleanor-super",
          "prop": "veil",
          "effect": "ghost"
        },
        "storyProp": "mirror"
      },
      "entrance": {
        "name": "Um véu aparece preso a uma moldura vazia.",
        "line": "Esperei o suficiente.",
        "style": "spectral",
        "gesture": "Eleanor atravessa a moldura e recompõe as mãos.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Um véu aparece preso a uma moldura vazia.",
            "pose": "arrive",
            "prop": "veil",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Eleanor atravessa a moldura e recompõe as mãos.",
            "pose": "warmup",
            "prop": "veil",
            "effect": "ghost"
          },
          {
            "at": 2.25,
            "action": "Os reflexos se curvam depois dela, fora de sincronia.",
            "pose": "signature",
            "prop": "veil",
            "effect": "ghost"
          },
          {
            "at": 3.25,
            "action": "Esperei o suficiente.",
            "pose": "ready",
            "prop": "veil",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Dedos de Véu",
        "light": {
          "limb": "lead",
          "path": "veil-fingers",
          "prop": "veil"
        },
        "heavy": {
          "limb": "rear",
          "path": "ghost-palm",
          "prop": "veil"
        },
        "kick": {
          "limb": "leg",
          "path": "gliding-step",
          "prop": "veil"
        },
        "guard": {
          "prop": "veil",
          "pose": "eleanor-guard"
        }
      },
      "movement": {
        "walk": 1.02,
        "backwalk": 0.82,
        "jump": 1.02
      },
      "passive": null,
      "visual": {
        "body": "spirit",
        "silhouette": "Vestido vitoriano azul-acinzentado com saia curta na frente para ler os pés, véu flutuante, luvas claras e broche escuro.",
        "outfit": "Vestido vitoriano azul-acinzentado com saia curta na frente para ler os pés, véu flutuante, luvas claras e broche escuro.",
        "prop": "veil",
        "stance": "Dedos de Véu",
        "palette": [
          "#66647d",
          "#cbb594",
          "#c09b83",
          "#35323e"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Os reflexos se curvam depois dela, fora de sincronia.",
        "effect": "ghost",
        "line": "Desta vez, abra a carta."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Eleanor Névoa baixa a guarda e reconhece a derrota.",
        "effect": "smoke"
      }
    },
    "tommy": {
      "normalScale": {
        "damage": 1.135,
        "speed": 0.848,
        "range": 0.946
      },
      "normalNames": {
        "light": "Jab de Rebite",
        "heavy": "Direto do Turno",
        "kick": "Bota de Bancada"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.109,
          "active": 0.072,
          "recovery": 0.191,
          "effect": "block"
        },
        "heavy": {
          "startup": 0.243,
          "active": 0.121,
          "recovery": 0.326,
          "effect": "block"
        },
        "kick": {
          "startup": 0.166,
          "active": 0.11,
          "recovery": 0.279,
          "effect": "block"
        }
      },
      "specials": [
        {
          "name": "Turno Duplo",
          "type": "counter",
          "description": "Fica plantado para absorver um golpe frontal e responder com dois socos de uma única ação pesada. Falha contra baixo e agarrões.",
          "startup": 0.07,
          "active": 0.31,
          "recovery": 0.45,
          "range": 128,
          "damage": 149,
          "stun": 0.34,
          "push": 96,
          "cooldown": 2.6,
          "effect": "block",
          "counterWindow": 0.31,
          "counterDamage": 149,
          "id": "tommy-0",
          "animation": {
            "pose": "tommy-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "reinforced-gloves",
            "effect": "block",
            "storyProp": "reinforced-gloves"
          },
          "storyProp": "reinforced-gloves",
          "storyMotion": "parry"
        },
        {
          "name": "Punho da Prensa",
          "type": "melee",
          "description": "Um direto pesado de base imóvel. O preparo lento exige punir o erro ou confirmar a pressão.",
          "startup": 0.29,
          "active": 0.12,
          "recovery": 0.41,
          "range": 139,
          "damage": 139,
          "stun": 0.34,
          "push": 91,
          "cooldown": 1.8,
          "effect": "spark",
          "armor": 0.13,
          "id": "tommy-1",
          "animation": {
            "pose": "tommy-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "reinforced-gloves",
            "effect": "spark",
            "storyProp": "press"
          },
          "storyProp": "press",
          "storyMotion": "strike"
        },
        {
          "name": "Fim de Expediente",
          "type": "throw",
          "description": "Encaixa um clinche curto e empurra o rival ao fim da troca. Precisa estar colado e erra contra alvo agachado.",
          "startup": 0.17,
          "active": 0.08,
          "recovery": 0.45,
          "range": 78,
          "damage": 140,
          "stun": 0.42,
          "push": 108,
          "cooldown": 2.4,
          "effect": "beast",
          "id": "tommy-2",
          "animation": {
            "pose": "tommy-special2",
            "limb": "both",
            "path": "rising",
            "prop": "reinforced-gloves",
            "effect": "beast",
            "storyProp": "time-card"
          },
          "storyProp": "time-card",
          "storyMotion": "close"
        }
      ],
      "combos": [
        {
          "id": "tommy-combo0",
          "name": "Rebite por Rebite",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Jab de Rebite → Direto do Turno → Bota de Bancada. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 9,
            "push": 28
          }
        },
        {
          "id": "tommy-combo1",
          "name": "Dupla de Turno",
          "sequence": [
            "heavy",
            "kick",
            "special1"
          ],
          "description": "Direto do Turno → Bota de Bancada → Punho da Prensa. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 11,
            "push": 28
          }
        }
      ],
      "attackStyle": "tommy",
      "defenseName": "Guarda da Bancada",
      "finisher": {
        "name": "A Linha Pode Parar",
        "line": "Hoje todo mundo volta pra casa.",
        "kind": "tommy"
      },
      "super": {
        "id": "tommy-super",
        "name": "O Último Turno",
        "description": "Com a energia completa, Tommy Rebite concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Hoje todo mundo volta pra casa.",
        "kind": "tommy",
        "type": "melee",
        "effect": "block",
        "meterCost": 100,
        "startup": 0.29500000000000004,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 284,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "O Último Turno",
          "palette": [
            "#66647d",
            "#cbb594"
          ],
          "style": "power"
        },
        "animation": {
          "pose": "tommy-super",
          "prop": "reinforced-gloves",
          "effect": "block"
        },
        "storyProp": "reinforced-gloves"
      },
      "entrance": {
        "name": "Tommy marca o ponto num cartão de papel.",
        "line": "Vamos terminar o turno.",
        "style": "power",
        "gesture": "Dobra as mangas e aperta as tiras das luvas.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Tommy marca o ponto num cartão de papel.",
            "pose": "arrive",
            "prop": "reinforced-gloves",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Dobra as mangas e aperta as tiras das luvas.",
            "pose": "warmup",
            "prop": "reinforced-gloves",
            "effect": "block"
          },
          {
            "at": 2.25,
            "action": "Planta os pés, bloqueia dois golpes imaginários e solta um direto.",
            "pose": "signature",
            "prop": "reinforced-gloves",
            "effect": "block"
          },
          {
            "at": 3.25,
            "action": "Vamos terminar o turno.",
            "pose": "ready",
            "prop": "reinforced-gloves",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Jab de Rebite",
        "light": {
          "limb": "lead",
          "path": "planted-jab",
          "prop": "reinforced-gloves"
        },
        "heavy": {
          "limb": "rear",
          "path": "heavy-straight",
          "prop": "reinforced-gloves"
        },
        "kick": {
          "limb": "leg",
          "path": "work-boot",
          "prop": "reinforced-gloves"
        },
        "guard": {
          "prop": "reinforced-gloves",
          "pose": "tommy-guard"
        }
      },
      "movement": {
        "walk": 0.77,
        "backwalk": 0.56,
        "jump": 0.87
      },
      "passive": null,
      "visual": {
        "body": "tank",
        "silhouette": "Suspensórios marrons, camisa creme de mangas dobradas, luvas reforçadas por costuras e cabelo raspado dos lados. Postura plantada de guarda alta.",
        "outfit": "Suspensórios marrons, camisa creme de mangas dobradas, luvas reforçadas por costuras e cabelo raspado dos lados. Postura plantada de guarda alta.",
        "prop": "reinforced-gloves",
        "stance": "Jab de Rebite",
        "palette": [
          "#66647d",
          "#cbb594",
          "#c09b83",
          "#35323e"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Planta os pés, bloqueia dois golpes imaginários e solta um direto.",
        "effect": "block",
        "line": "Hoje todo mundo volta pra casa."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Tommy Rebite baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "morgan": {
      "normalScale": {
        "damage": 1.08,
        "speed": 0.916,
        "range": 1.12
      },
      "normalNames": {
        "light": "Broto de Espinheiro",
        "heavy": "Galho de Carvalho",
        "kick": "Raiz de Travessia"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.103,
          "active": 0.077,
          "recovery": 0.184,
          "effect": "roots"
        },
        "heavy": {
          "startup": 0.232,
          "active": 0.097,
          "recovery": 0.314,
          "effect": "roots"
        },
        "kick": {
          "startup": 0.158,
          "active": 0.117,
          "recovery": 0.27,
          "effect": "roots"
        }
      },
      "specials": [
        {
          "name": "Bosque Desperto",
          "type": "trap",
          "description": "Raízes fecham uma faixa marcada sob o rival. O crescimento atrasado pode ser saltado; não cria paredes permanentes.",
          "startup": 0.31,
          "active": 0.06,
          "recovery": 0.4,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.7,
          "effect": "roots",
          "projectile": {
            "kind": "oakroot",
            "y": 12,
            "vx": 0,
            "radius": 63,
            "damage": 104,
            "stun": 0.29,
            "push": 20,
            "life": 2.3,
            "delay": 0.74,
            "anchor": "enemy",
            "maxRange": 330,
            "unique": true,
            "hitHeight": "low",
            "root": 0.65
          },
          "id": "morgan-0",
          "animation": {
            "pose": "morgan-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "oak-branches",
            "effect": "roots",
            "storyProp": "oak-door"
          },
          "storyProp": "oak-door",
          "storyMotion": "plant"
        },
        {
          "name": "Braço do Carvalho",
          "type": "melee",
          "description": "O galho se estende num arco largo e lento. A ponta alcança longe e o tronco fica aberto durante a volta.",
          "startup": 0.28,
          "active": 0.17,
          "recovery": 0.43,
          "range": 254,
          "damage": 126,
          "stun": 0.34,
          "push": 79,
          "cooldown": 1.8,
          "effect": "roots",
          "id": "morgan-1",
          "animation": {
            "pose": "morgan-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "oak-branches",
            "effect": "roots",
            "storyProp": "oak-branches"
          },
          "storyProp": "oak-branches",
          "storyMotion": "strike"
        },
        {
          "name": "Semente da Vigília",
          "type": "projectile",
          "description": "Uma semente pesada viaja devagar e prende os pés brevemente ao acertar.",
          "startup": 0.25,
          "active": 0.06,
          "recovery": 0.34,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "roots",
          "projectile": {
            "kind": "acorn",
            "y": 58,
            "vx": 220,
            "radius": 21,
            "damage": 84,
            "stun": 0.3,
            "push": 38,
            "life": 2.4,
            "delay": 0.25,
            "root": 0.3,
            "arcAmplitude": 12,
            "arcFrequency": 3
          },
          "id": "morgan-2",
          "animation": {
            "pose": "morgan-special2",
            "limb": "both",
            "path": "rising",
            "prop": "oak-branches",
            "effect": "roots",
            "storyProp": "seed"
          },
          "storyProp": "seed",
          "storyMotion": "release"
        }
      ],
      "combos": [
        {
          "id": "morgan-combo0",
          "name": "Galho e Raiz",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Broto de Espinheiro → Galho de Carvalho → Raiz de Travessia. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 10,
            "push": 12
          }
        },
        {
          "id": "morgan-combo1",
          "name": "Semente que Resta",
          "sequence": [
            "light",
            "kick",
            "special1"
          ],
          "description": "Broto de Espinheiro → Raiz de Travessia → Braço do Carvalho. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 12,
            "push": 12
          }
        }
      ],
      "attackStyle": "morgan",
      "defenseName": "Casca do Carvalho",
      "finisher": {
        "name": "A Porta Volta a Ser Árvore",
        "line": "O bosque lembra de cada raiz.",
        "kind": "morgan"
      },
      "super": {
        "id": "morgan-super",
        "name": "Floresta Sem Fim",
        "description": "Com a energia completa, Morgan Espinheiro concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "O bosque lembra de cada raiz.",
        "kind": "morgan",
        "type": "melee",
        "effect": "roots",
        "meterCost": 100,
        "startup": 0.32,
        "active": 0.19,
        "recovery": 0.66,
        "range": 254,
        "reachY": 190,
        "damage": 272,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Floresta Sem Fim",
          "palette": [
            "#66647d",
            "#cbb594"
          ],
          "style": "power"
        },
        "animation": {
          "pose": "morgan-super",
          "prop": "oak-branches",
          "effect": "roots"
        },
        "storyProp": "oak-door"
      },
      "entrance": {
        "name": "Uma semente se abre na borda do chão.",
        "line": "Ainda existe chão sob a pedra.",
        "style": "power",
        "gesture": "Raízes recolhem-se e Morgan ergue a máscara de madeira.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Uma semente se abre na borda do chão.",
            "pose": "arrive",
            "prop": "oak-branches",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Raízes recolhem-se e Morgan ergue a máscara de madeira.",
            "pose": "warmup",
            "prop": "oak-branches",
            "effect": "roots"
          },
          {
            "at": 2.25,
            "action": "As folhas dos ombros voltam do vento para o próprio corpo.",
            "pose": "signature",
            "prop": "oak-branches",
            "effect": "roots"
          },
          {
            "at": 3.25,
            "action": "Ainda existe chão sob a pedra.",
            "pose": "ready",
            "prop": "oak-branches",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Broto de Espinheiro",
        "light": {
          "limb": "lead",
          "path": "branch-jab",
          "prop": "oak-branches"
        },
        "heavy": {
          "limb": "rear",
          "path": "oak-swing",
          "prop": "oak-branches"
        },
        "kick": {
          "limb": "leg",
          "path": "root-sweep",
          "prop": "oak-branches"
        },
        "guard": {
          "prop": "oak-branches",
          "pose": "morgan-guard"
        }
      },
      "movement": {
        "walk": 0.94,
        "backwalk": 0.6,
        "jump": 0.88
      },
      "passive": null,
      "visual": {
        "body": "construct",
        "silhouette": "Corpo coberto de folhas de carvalho, galhos assimétricos, máscara de madeira com olhos âmbar e raízes enroladas nas pernas.",
        "outfit": "Corpo coberto de folhas de carvalho, galhos assimétricos, máscara de madeira com olhos âmbar e raízes enroladas nas pernas.",
        "prop": "oak-branches",
        "stance": "Broto de Espinheiro",
        "palette": [
          "#66647d",
          "#cbb594",
          "#c09b83",
          "#35323e"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "As folhas dos ombros voltam do vento para o próprio corpo.",
        "effect": "roots",
        "line": "O bosque lembra de cada raiz."
      },
      "defeat": {
        "pose": "crumble",
        "action": "Morgan Espinheiro baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "alfie": {
      "normalScale": {
        "damage": 1.025,
        "speed": 0.984,
        "range": 1.12
      },
      "normalNames": {
        "light": "Borda do Wicket",
        "heavy": "Arco de Rebatida",
        "kick": "Protetor de Canela"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.097,
          "active": 0.082,
          "recovery": 0.177,
          "effect": "spark"
        },
        "heavy": {
          "startup": 0.221,
          "active": 0.103,
          "recovery": 0.302,
          "effect": "spark"
        },
        "kick": {
          "startup": 0.15,
          "active": 0.124,
          "recovery": 0.261,
          "effect": "spark"
        }
      },
      "specials": [
        {
          "name": "Último Arremesso",
          "type": "projectile",
          "description": "Rebate uma bola baixa que quica e muda de altura ao tocar o chão. Sua trajetória continua defendível e anuncia o quique.",
          "startup": 0.25,
          "active": 0.06,
          "recovery": 0.38,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "spark",
          "projectile": {
            "kind": "cricket",
            "y": 17,
            "vx": 350,
            "radius": 14,
            "damage": 104,
            "stun": 0.3,
            "push": 58,
            "life": 2.4,
            "delay": 0.25,
            "bounce": true,
            "vy": -135,
            "hitHeight": "low"
          },
          "id": "alfie-0",
          "animation": {
            "pose": "alfie-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "cricket-bat",
            "effect": "spark",
            "storyProp": "cricket-ball"
          },
          "storyProp": "cricket-ball",
          "storyMotion": "release"
        },
        {
          "name": "Resposta de Campo",
          "type": "counter",
          "description": "Apara projéteis refletíveis com a face plana do taco numa janela curta. Feixes e agarrões não são rebatidos.",
          "startup": 0.055,
          "active": 0.21,
          "recovery": 0.35,
          "range": 192,
          "damage": 103,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.3,
          "effect": "spark",
          "counterWindow": 0.21,
          "counterDamage": 103,
          "reflect": true,
          "id": "alfie-1",
          "animation": {
            "pose": "alfie-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "cricket-bat",
            "effect": "spark",
            "storyProp": "cricket-bat"
          },
          "storyProp": "cricket-bat",
          "storyMotion": "parry"
        },
        {
          "name": "Linha do Wicket",
          "type": "melee",
          "description": "Estende o taco de lado num golpe comprido. O fim do arco deixa Alfie vulnerável de perto.",
          "startup": 0.23,
          "active": 0.14,
          "recovery": 0.38,
          "range": 238,
          "damage": 113,
          "stun": 0.34,
          "push": 76,
          "cooldown": 1.8,
          "effect": "spark",
          "id": "alfie-2",
          "animation": {
            "pose": "alfie-special2",
            "limb": "both",
            "path": "rising",
            "prop": "cricket-bat",
            "effect": "spark",
            "storyProp": "cricket-bat"
          },
          "storyProp": "cricket-bat",
          "storyMotion": "strike"
        }
      ],
      "combos": [
        {
          "id": "alfie-combo0",
          "name": "Linha e Quique",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Borda do Wicket → Arco de Rebatida → Protetor de Canela. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 11,
            "push": 16
          }
        },
        {
          "id": "alfie-combo1",
          "name": "Campo de Retorno",
          "sequence": [
            "heavy",
            "kick",
            "special2"
          ],
          "description": "Arco de Rebatida → Protetor de Canela → Linha do Wicket. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 13,
            "push": 16
          }
        }
      ],
      "attackStyle": "alfie",
      "defenseName": "Face do Taco",
      "finisher": {
        "name": "A Bola Encontra a Margem",
        "line": "A próxima curva é nossa.",
        "kind": "alfie"
      },
      "super": {
        "id": "alfie-super",
        "name": "Além da Última Ponte",
        "description": "Com a energia completa, Alfie Wicket concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "A próxima curva é nossa.",
        "kind": "alfie",
        "type": "melee",
        "effect": "spark",
        "meterCost": 100,
        "startup": 0.34500000000000003,
        "active": 0.19,
        "recovery": 0.66,
        "range": 238,
        "reachY": 190,
        "damage": 260,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Além da Última Ponte",
          "palette": [
            "#66647d",
            "#cbb594"
          ],
          "style": "weapon"
        },
        "animation": {
          "pose": "alfie-super",
          "prop": "cricket-bat",
          "effect": "spark"
        },
        "storyProp": "cricket-ball"
      },
      "entrance": {
        "name": "Alfie faz a bola quicar três vezes no taco.",
        "line": "Vamos ler esse campo.",
        "style": "weapon",
        "gesture": "Confere as proteções de canela sem perder o ritmo.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Alfie faz a bola quicar três vezes no taco.",
            "pose": "arrive",
            "prop": "cricket-bat",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Confere as proteções de canela sem perder o ritmo.",
            "pose": "warmup",
            "prop": "cricket-bat",
            "effect": "spark"
          },
          {
            "at": 2.25,
            "action": "Interrompe o quarto quique com a palma e aponta a linha.",
            "pose": "signature",
            "prop": "cricket-bat",
            "effect": "spark"
          },
          {
            "at": 3.25,
            "action": "Vamos ler esse campo.",
            "pose": "ready",
            "prop": "cricket-bat",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Borda do Wicket",
        "light": {
          "limb": "lead",
          "path": "bat-edge",
          "prop": "cricket-bat"
        },
        "heavy": {
          "limb": "rear",
          "path": "cricket-swing",
          "prop": "cricket-bat"
        },
        "kick": {
          "limb": "leg",
          "path": "pad-kick",
          "prop": "cricket-bat"
        },
        "guard": {
          "prop": "cricket-bat",
          "pose": "alfie-guard"
        }
      },
      "movement": {
        "walk": 1,
        "backwalk": 0.67,
        "jump": 1
      },
      "passive": null,
      "visual": {
        "body": "athletic",
        "silhouette": "Uniforme branco com faixa verde, proteções nas pernas, taco de críquete de madeira clara e boné creme.",
        "outfit": "Uniforme branco com faixa verde, proteções nas pernas, taco de críquete de madeira clara e boné creme.",
        "prop": "cricket-bat",
        "stance": "Borda do Wicket",
        "palette": [
          "#66647d",
          "#cbb594",
          "#c09b83",
          "#35323e"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Interrompe o quarto quique com a palma e aponta a linha.",
        "effect": "spark",
        "line": "A próxima curva é nossa."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Alfie Wicket baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "clockwork": {
      "normalScale": {
        "damage": 1.025,
        "speed": 0.916,
        "range": 1.12
      },
      "normalNames": {
        "light": "Ponteiro Curto",
        "heavy": "Martelo do Minuto",
        "kick": "Passo da Engrenagem"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.105,
          "active": 0.087,
          "recovery": 0.188,
          "effect": "steam"
        },
        "heavy": {
          "startup": 0.234,
          "active": 0.109,
          "recovery": 0.318,
          "effect": "steam"
        },
        "kick": {
          "startup": 0.16,
          "active": 0.103,
          "recovery": 0.274,
          "effect": "steam"
        }
      },
      "specials": [
        {
          "name": "Hora Marcada",
          "type": "trap",
          "description": "Instala um mecanismo que dispara após três batidas visuais. Só uma formação fica armada e o aviso permite saltar.",
          "startup": 0.3,
          "active": 0.06,
          "recovery": 0.37,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.6,
          "effect": "steam",
          "projectile": {
            "kind": "clocktrap",
            "y": 12,
            "vx": 0,
            "radius": 53,
            "damage": 116,
            "stun": 0.29,
            "push": 71,
            "life": 2.7,
            "delay": 1.05,
            "anchor": "enemy",
            "maxRange": 345,
            "unique": true,
            "hitHeight": "low"
          },
          "id": "clockwork-0",
          "animation": {
            "pose": "clockwork-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "clock-arm",
            "effect": "steam",
            "storyProp": "pocket-watch"
          },
          "storyProp": "pocket-watch",
          "storyMotion": "plant"
        },
        {
          "name": "Segundo Extraviado",
          "type": "projectile",
          "description": "Um ponteiro de energia estreito cruza a linha média com saída moderada.",
          "startup": 0.2,
          "active": 0.06,
          "recovery": 0.31,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "spark",
          "projectile": {
            "kind": "clockhand",
            "y": 58,
            "vx": 400,
            "radius": 14,
            "damage": 88,
            "stun": 0.3,
            "push": 42,
            "life": 2.4,
            "delay": 0.2
          },
          "id": "clockwork-1",
          "animation": {
            "pose": "clockwork-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "clock-arm",
            "effect": "spark",
            "storyProp": "clock-hand"
          },
          "storyProp": "clock-hand",
          "storyMotion": "release"
        },
        {
          "name": "Mola de Retorno",
          "type": "counter",
          "description": "Trava um impacto frontal na engrenagem do braço e o devolve numa palma curta.",
          "startup": 0.055,
          "active": 0.25,
          "recovery": 0.36,
          "range": 147,
          "damage": 111,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.3,
          "effect": "steam",
          "counterWindow": 0.25,
          "counterDamage": 111,
          "id": "clockwork-2",
          "animation": {
            "pose": "clockwork-special2",
            "limb": "both",
            "path": "rising",
            "prop": "clock-arm",
            "effect": "steam",
            "storyProp": "gear"
          },
          "storyProp": "gear",
          "storyMotion": "parry"
        }
      ],
      "combos": [
        {
          "id": "clockwork-combo0",
          "name": "Minuto e Segundo",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Ponteiro Curto → Martelo do Minuto → Passo da Engrenagem. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 12,
            "push": 20
          }
        },
        {
          "id": "clockwork-combo1",
          "name": "Corda do Retorno",
          "sequence": [
            "light",
            "heavy",
            "special1"
          ],
          "description": "Ponteiro Curto → Martelo do Minuto → Segundo Extraviado. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 14,
            "push": 20
          }
        }
      ],
      "attackStyle": "clockwork",
      "defenseName": "Engrenagem Travada",
      "finisher": {
        "name": "O Tempo Devolvido",
        "line": "Cada minuto tem um dono.",
        "kind": "clockwork"
      },
      "super": {
        "id": "clockwork-super",
        "name": "Meia-Noite Mecânica",
        "description": "Com a energia completa, Lady Clockwork concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Cada minuto tem um dono.",
        "kind": "clockwork",
        "type": "melee",
        "effect": "steam",
        "meterCost": 100,
        "startup": 0.27,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 260,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Meia-Noite Mecânica",
          "palette": [
            "#66647d",
            "#cbb594"
          ],
          "style": "machine"
        },
        "animation": {
          "pose": "clockwork-super",
          "prop": "clock-arm",
          "effect": "steam"
        },
        "storyProp": "pocket-watch"
      },
      "entrance": {
        "name": "Um relógio de bolso chega pendurado no próprio braço.",
        "line": "Chegou exatamente na hora.",
        "style": "machine",
        "gesture": "Lady dá corda com o monóculo voltado à engrenagem.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Um relógio de bolso chega pendurado no próprio braço.",
            "pose": "arrive",
            "prop": "clock-arm",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Lady dá corda com o monóculo voltado à engrenagem.",
            "pose": "warmup",
            "prop": "clock-arm",
            "effect": "steam"
          },
          {
            "at": 2.25,
            "action": "Três mecanismos abrem e fecham no mesmo segundo.",
            "pose": "signature",
            "prop": "clock-arm",
            "effect": "steam"
          },
          {
            "at": 3.25,
            "action": "Chegou exatamente na hora.",
            "pose": "ready",
            "prop": "clock-arm",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Ponteiro Curto",
        "light": {
          "limb": "lead",
          "path": "clockhand-jab",
          "prop": "clock-arm"
        },
        "heavy": {
          "limb": "rear",
          "path": "minute-hammer",
          "prop": "clock-arm"
        },
        "kick": {
          "limb": "leg",
          "path": "gear-step",
          "prop": "clock-arm"
        },
        "guard": {
          "prop": "clock-arm",
          "pose": "clockwork-guard"
        }
      },
      "movement": {
        "walk": 0.96,
        "backwalk": 0.66,
        "jump": 0.94
      },
      "passive": null,
      "visual": {
        "body": "slim",
        "silhouette": "Casaco vitoriano verde-escuro de mangas curtas, monóculo, braço mecânico de engrenagens e bolsa com relógios de bolso.",
        "outfit": "Casaco vitoriano verde-escuro de mangas curtas, monóculo, braço mecânico de engrenagens e bolsa com relógios de bolso.",
        "prop": "clock-arm",
        "stance": "Ponteiro Curto",
        "palette": [
          "#66647d",
          "#cbb594",
          "#c09b83",
          "#35323e"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Três mecanismos abrem e fecham no mesmo segundo.",
        "effect": "steam",
        "line": "Cada minuto tem um dono."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Lady Clockwork baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "bram": {
      "normalScale": {
        "damage": 1.08,
        "speed": 1.052,
        "range": 1.004
      },
      "normalNames": {
        "light": "Garra da Névoa",
        "heavy": "Presa da Charneca",
        "kick": "Pata de Sombra"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.092,
          "active": 0.092,
          "recovery": 0.172,
          "effect": "voice"
        },
        "heavy": {
          "startup": 0.211,
          "active": 0.115,
          "recovery": 0.292,
          "effect": "voice"
        },
        "kick": {
          "startup": 0.143,
          "active": 0.11,
          "recovery": 0.254,
          "effect": "voice"
        }
      },
      "specials": [
        {
          "name": "Uivo na Neblina",
          "type": "projectile",
          "description": "Um uivo curto atordoa na média distância. O som viaja pouco e a respiração denuncia a preparação.",
          "startup": 0.3,
          "active": 0.06,
          "recovery": 0.4,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.4,
          "effect": "voice",
          "projectile": {
            "kind": "howl",
            "y": 58,
            "vx": 290,
            "radius": 37,
            "damage": 91,
            "stun": 0.49,
            "push": 33,
            "life": 1.15,
            "delay": 0.3
          },
          "id": "bram-0",
          "animation": {
            "pose": "bram-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "hound-claws",
            "effect": "voice",
            "storyProp": "hound-jaw"
          },
          "storyProp": "hound-jaw",
          "storyMotion": "release"
        },
        {
          "name": "Rastro Rente",
          "type": "dash",
          "description": "Avança de garras rente ao chão. É um ataque baixo sem armadura; saltos vencem a trajetória.",
          "startup": 0.15,
          "active": 0.26,
          "recovery": 0.36,
          "range": 124,
          "damage": 111,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "beast",
          "move": 415,
          "hitHeight": "low",
          "ground": true,
          "id": "bram-1",
          "animation": {
            "pose": "bram-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "hound-claws",
            "effect": "beast",
            "storyProp": "wolf-track"
          },
          "storyProp": "wolf-track",
          "storyMotion": "travel"
        },
        {
          "name": "Mordida da Estrada",
          "type": "launcher",
          "description": "Um salto curto de mandíbula espectral intercepta o espaço acima do peito. Recuperação lenta no pouso.",
          "startup": 0.18,
          "active": 0.16,
          "recovery": 0.45,
          "range": 139,
          "damage": 118,
          "stun": 0.39,
          "push": 31,
          "cooldown": 1.8,
          "effect": "beast",
          "reachY": 198,
          "launch": 290,
          "id": "bram-2",
          "animation": {
            "pose": "bram-special2",
            "limb": "both",
            "path": "rising",
            "prop": "hound-claws",
            "effect": "beast",
            "storyProp": "hound-jaw"
          },
          "storyProp": "hound-jaw",
          "storyMotion": "rise"
        }
      ],
      "combos": [
        {
          "id": "bram-combo0",
          "name": "Rastro e Uivo",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Garra da Névoa → Presa da Charneca → Pata de Sombra. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 13,
            "push": 24
          }
        },
        {
          "id": "bram-combo1",
          "name": "Estrada da Matilha",
          "sequence": [
            "light",
            "kick",
            "special1"
          ],
          "description": "Garra da Névoa → Pata de Sombra → Rastro Rente. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 15,
            "push": 24
          }
        }
      ],
      "attackStyle": "bram",
      "defenseName": "Garras da Charneca",
      "finisher": {
        "name": "O Nome Sob a Névoa",
        "line": "Nenhum dos nossos será esquecido.",
        "kind": "bram"
      },
      "super": {
        "id": "bram-super",
        "name": "Matilha da Meia-Noite",
        "description": "Com a energia completa, Bram Blackfang concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Nenhum dos nossos será esquecido.",
        "kind": "bram",
        "type": "melee",
        "effect": "voice",
        "meterCost": 100,
        "startup": 0.29500000000000004,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 272,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Matilha da Meia-Noite",
          "palette": [
            "#66647d",
            "#cbb594"
          ],
          "style": "spectral"
        },
        "animation": {
          "pose": "bram-super",
          "prop": "hound-claws",
          "effect": "voice"
        },
        "storyProp": "hound-jaw"
      },
      "entrance": {
        "name": "A névoa revela primeiro quatro pegadas no chão.",
        "line": "Esta estrada ainda tem guardião.",
        "style": "spectral",
        "gesture": "Bram se ergue da sombra e fareja a margem da arena.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "A névoa revela primeiro quatro pegadas no chão.",
            "pose": "arrive",
            "prop": "hound-claws",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Bram se ergue da sombra e fareja a margem da arena.",
            "pose": "warmup",
            "prop": "hound-claws",
            "effect": "voice"
          },
          {
            "at": 2.25,
            "action": "Um uivo curto abre dois olhos de luz atrás dos ombros.",
            "pose": "signature",
            "prop": "hound-claws",
            "effect": "voice"
          },
          {
            "at": 3.25,
            "action": "Esta estrada ainda tem guardião.",
            "pose": "ready",
            "prop": "hound-claws",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Garra da Névoa",
        "light": {
          "limb": "lead",
          "path": "claw-jab",
          "prop": "hound-claws"
        },
        "heavy": {
          "limb": "rear",
          "path": "fang-arc",
          "prop": "hound-claws"
        },
        "kick": {
          "limb": "leg",
          "path": "hound-paw",
          "prop": "hound-claws"
        },
        "guard": {
          "prop": "hound-claws",
          "pose": "bram-guard"
        }
      },
      "movement": {
        "walk": 1.06,
        "backwalk": 0.74,
        "jump": 1.06
      },
      "passive": null,
      "visual": {
        "body": "spirit",
        "silhouette": "Corpo humanoide coberto por pelo escuro, cabeça canina, olhos âmbar e fumaça saindo das patas. Ombros altos, pés digitígrados.",
        "outfit": "Corpo humanoide coberto por pelo escuro, cabeça canina, olhos âmbar e fumaça saindo das patas. Ombros altos, pés digitígrados.",
        "prop": "hound-claws",
        "stance": "Garra da Névoa",
        "palette": [
          "#66647d",
          "#cbb594",
          "#c09b83",
          "#35323e"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Um uivo curto abre dois olhos de luz atrás dos ombros.",
        "effect": "voice",
        "line": "Nenhum dos nossos será esquecido."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Bram Blackfang baixa a guarda e reconhece a derrota.",
        "effect": "smoke"
      }
    },
    "selene": {
      "normalScale": {
        "damage": 1.025,
        "speed": 1.052,
        "range": 1.12
      },
      "normalNames": {
        "light": "Ponta de Prisma",
        "heavy": "Corte Cartográfico",
        "kick": "Passo de Faceta"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.093,
          "active": 0.067,
          "recovery": 0.174,
          "effect": "ghost"
        },
        "heavy": {
          "startup": 0.212,
          "active": 0.121,
          "recovery": 0.294,
          "effect": "ghost"
        },
        "kick": {
          "startup": 0.144,
          "active": 0.117,
          "recovery": 0.256,
          "effect": "ghost"
        }
      },
      "specials": [
        {
          "name": "Linha da Face Oculta",
          "type": "projectile",
          "description": "Um feixe prismático estreito atravessa a linha média depois de um traço visível no ar.",
          "startup": 0.27,
          "active": 0.06,
          "recovery": 0.36,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "ghost",
          "projectile": {
            "kind": "prism",
            "y": 58,
            "vx": 450,
            "radius": 18,
            "damage": 108,
            "stun": 0.3,
            "push": 58,
            "life": 2.4,
            "delay": 0.27
          },
          "id": "selene-0",
          "animation": {
            "pose": "selene-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "prism-blade",
            "effect": "ghost",
            "storyProp": "prism"
          },
          "storyProp": "prism",
          "storyMotion": "release"
        },
        {
          "name": "Coordenada Partida",
          "type": "trap",
          "description": "Um prisma cresce sob um ponto marcado. Sua ativação atrasada pode ser saltada.",
          "startup": 0.25,
          "active": 0.06,
          "recovery": 0.35,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.3,
          "effect": "trap",
          "projectile": {
            "kind": "prismtrap",
            "y": 12,
            "vx": 0,
            "radius": 46,
            "damage": 94,
            "stun": 0.29,
            "push": 20,
            "life": 2.3,
            "delay": 0.7,
            "anchor": "enemy",
            "maxRange": 330,
            "unique": true,
            "hitHeight": "low",
            "root": 0.4
          },
          "id": "selene-1",
          "animation": {
            "pose": "selene-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "prism-blade",
            "effect": "trap",
            "storyProp": "star-map"
          },
          "storyProp": "star-map",
          "storyMotion": "plant"
        },
        {
          "name": "Espelho de Basalto",
          "type": "counter",
          "description": "Uma faceta devolve um impacto frontal ou projétil refletível. Rasteiras e agarrões vencem a leitura.",
          "startup": 0.055,
          "active": 0.22,
          "recovery": 0.35,
          "range": 183,
          "damage": 111,
          "stun": 0.34,
          "push": 42,
          "cooldown": 2.3,
          "effect": "ghost",
          "counterWindow": 0.22,
          "counterDamage": 111,
          "reflect": true,
          "id": "selene-2",
          "animation": {
            "pose": "selene-special2",
            "limb": "both",
            "path": "rising",
            "prop": "prism-blade",
            "effect": "ghost",
            "storyProp": "prism"
          },
          "storyProp": "prism",
          "storyMotion": "parry"
        }
      ],
      "combos": [
        {
          "id": "selene-combo0",
          "name": "Duas Coordenadas",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Ponta de Prisma → Corte Cartográfico → Passo de Faceta. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 14,
            "push": 28
          }
        },
        {
          "id": "selene-combo1",
          "name": "Face Revelada",
          "sequence": [
            "heavy",
            "kick",
            "special0"
          ],
          "description": "Corte Cartográfico → Passo de Faceta → Linha da Face Oculta. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 16,
            "push": 28
          }
        }
      ],
      "attackStyle": "selene",
      "defenseName": "Faceta Escura",
      "finisher": {
        "name": "O Mapa Também Muda",
        "line": "Nenhum caminho é dono de quem passa.",
        "kind": "selene"
      },
      "super": {
        "id": "selene-super",
        "name": "Atlas de Todas as Faces",
        "description": "Com a energia completa, Selene Prisma concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Nenhum caminho é dono de quem passa.",
        "kind": "selene",
        "type": "melee",
        "effect": "ghost",
        "meterCost": 100,
        "startup": 0.32,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 260,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "Atlas de Todas as Faces",
          "palette": [
            "#655bb0",
            "#bbebff"
          ],
          "style": "weapon"
        },
        "animation": {
          "pose": "selene-super",
          "prop": "prism-blade",
          "effect": "ghost"
        },
        "storyProp": "prism"
      },
      "entrance": {
        "name": "Uma linha violeta desenha a própria silhueta na poeira lunar.",
        "line": "Mostre-me um caminho que não conheço.",
        "style": "weapon",
        "gesture": "Selene retira um prisma de um mapa sobre o antebraço.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Uma linha violeta desenha a própria silhueta na poeira lunar.",
            "pose": "arrive",
            "prop": "prism-blade",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Selene retira um prisma de um mapa sobre o antebraço.",
            "pose": "warmup",
            "prop": "prism-blade",
            "effect": "ghost"
          },
          {
            "at": 2.25,
            "action": "As facetas mostram a Terra por quatro ângulos.",
            "pose": "signature",
            "prop": "prism-blade",
            "effect": "ghost"
          },
          {
            "at": 3.25,
            "action": "Mostre-me um caminho que não conheço.",
            "pose": "ready",
            "prop": "prism-blade",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Ponta de Prisma",
        "light": {
          "limb": "lead",
          "path": "prism-point",
          "prop": "prism-blade"
        },
        "heavy": {
          "limb": "rear",
          "path": "light-cut",
          "prop": "prism-blade"
        },
        "kick": {
          "limb": "leg",
          "path": "facet-kick",
          "prop": "prism-blade"
        },
        "guard": {
          "prop": "prism-blade",
          "pose": "selene-guard"
        }
      },
      "movement": {
        "walk": 0.98,
        "backwalk": 0.76,
        "jump": 1.02
      },
      "passive": null,
      "visual": {
        "body": "slim",
        "silhouette": "Traje de placas translúcidas violetas, rosto de obsidiana sob uma coroa de prismas e mapas luminosos correndo pelos antebraços.",
        "outfit": "Traje de placas translúcidas violetas, rosto de obsidiana sob uma coroa de prismas e mapas luminosos correndo pelos antebraços.",
        "prop": "prism-blade",
        "stance": "Ponta de Prisma",
        "palette": [
          "#655bb0",
          "#bbebff",
          "#b5a4d7",
          "#252641"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "As facetas mostram a Terra por quatro ângulos.",
        "effect": "ghost",
        "line": "Nenhum caminho é dono de quem passa."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Selene Prisma baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "regolith": {
      "normalScale": {
        "damage": 1.135,
        "speed": 0.848,
        "range": 1.12
      },
      "normalNames": {
        "light": "Nó de Basalto",
        "heavy": "Martelo de Rególito",
        "kick": "Passo de Cratera"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.104,
          "active": 0.072,
          "recovery": 0.203,
          "effect": "fissure"
        },
        "heavy": {
          "startup": 0.238,
          "active": 0.097,
          "recovery": 0.338,
          "effect": "fissure"
        },
        "kick": {
          "startup": 0.161,
          "active": 0.124,
          "recovery": 0.291,
          "effect": "fissure"
        }
      },
      "specials": [
        {
          "name": "Maré de Poeira",
          "type": "melee",
          "description": "Ergue um arco de poeira baixa à frente. A preparação demorada anuncia o golpe e saltos evitam o impacto.",
          "startup": 0.39,
          "active": 0.21,
          "recovery": 0.48,
          "range": 282,
          "damage": 145,
          "stun": 0.34,
          "push": 98,
          "cooldown": 1.8,
          "effect": "fissure",
          "hitHeight": "low",
          "ground": true,
          "id": "regolith-0",
          "animation": {
            "pose": "regolith-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "basalt-fists",
            "effect": "fissure",
            "storyProp": "moon-dust"
          },
          "storyProp": "moon-dust",
          "storyMotion": "strike"
        },
        {
          "name": "Peso de Uma Lua",
          "type": "throw",
          "description": "Envolve o rival nas mãos de basalto e o devolve ao chão. Muito dano, alcance curto e falha contra ar ou agachamento.",
          "startup": 0.25,
          "active": 0.08,
          "recovery": 0.56,
          "range": 89,
          "damage": 178,
          "stun": 0.42,
          "push": 50,
          "cooldown": 3,
          "effect": "fissure",
          "id": "regolith-1",
          "animation": {
            "pose": "regolith-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "basalt-fists",
            "effect": "fissure",
            "storyProp": "basalt-fists"
          },
          "storyProp": "basalt-fists",
          "storyMotion": "close"
        },
        {
          "name": "Horizonte de Pedra",
          "type": "dash",
          "description": "Desliza devagar com uma placa de basalto à frente. A armadura não vence agarrões.",
          "startup": 0.27,
          "active": 0.35,
          "recovery": 0.44,
          "range": 148,
          "damage": 126,
          "stun": 0.34,
          "push": 111,
          "cooldown": 1.8,
          "effect": "fissure",
          "move": 205,
          "armor": 0.28,
          "id": "regolith-2",
          "animation": {
            "pose": "regolith-special2",
            "limb": "both",
            "path": "rising",
            "prop": "basalt-fists",
            "effect": "fissure",
            "storyProp": "basalt-wall"
          },
          "storyProp": "basalt-wall",
          "storyMotion": "travel"
        }
      ],
      "combos": [
        {
          "id": "regolith-combo0",
          "name": "Poeira e Memória",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Nó de Basalto → Martelo de Rególito → Passo de Cratera. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 15,
            "push": 12
          }
        },
        {
          "id": "regolith-combo1",
          "name": "Cratera de Retorno",
          "sequence": [
            "light",
            "heavy",
            "special2"
          ],
          "description": "Nó de Basalto → Martelo de Rególito → Horizonte de Pedra. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 17,
            "push": 12
          }
        }
      ],
      "attackStyle": "regolith",
      "defenseName": "Placa Lunar",
      "finisher": {
        "name": "Todos os Passos Ficam",
        "line": "O chão ainda lembra de você.",
        "kind": "regolith"
      },
      "super": {
        "id": "regolith-super",
        "name": "A Memória do Solo",
        "description": "Com a energia completa, Rególito concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "O chão ainda lembra de você.",
        "kind": "regolith",
        "type": "melee",
        "effect": "fissure",
        "meterCost": 100,
        "startup": 0.34500000000000003,
        "active": 0.19,
        "recovery": 0.66,
        "range": 282,
        "reachY": 190,
        "damage": 284,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "A Memória do Solo",
          "palette": [
            "#626a7d",
            "#edbf6d"
          ],
          "style": "power"
        },
        "animation": {
          "pose": "regolith-super",
          "prop": "basalt-fists",
          "effect": "fissure"
        },
        "storyProp": "moon-dust"
      },
      "entrance": {
        "name": "A poeira se junta ao redor de duas mãos enterradas.",
        "line": "Cada passo deixa uma vida.",
        "style": "power",
        "gesture": "Rególito ergue o corpo do chão sem criar uma cratera na faixa.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "A poeira se junta ao redor de duas mãos enterradas.",
            "pose": "arrive",
            "prop": "basalt-fists",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Rególito ergue o corpo do chão sem criar uma cratera na faixa.",
            "pose": "warmup",
            "prop": "basalt-fists",
            "effect": "fissure"
          },
          {
            "at": 2.25,
            "action": "Uma rocha flutua na palma, depois se desfaz em pó.",
            "pose": "signature",
            "prop": "basalt-fists",
            "effect": "fissure"
          },
          {
            "at": 3.25,
            "action": "Cada passo deixa uma vida.",
            "pose": "ready",
            "prop": "basalt-fists",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Nó de Basalto",
        "light": {
          "limb": "lead",
          "path": "rock-knuckle",
          "prop": "basalt-fists"
        },
        "heavy": {
          "limb": "rear",
          "path": "basalt-hammer",
          "prop": "basalt-fists"
        },
        "kick": {
          "limb": "leg",
          "path": "crater-stomp",
          "prop": "basalt-fists"
        },
        "guard": {
          "prop": "basalt-fists",
          "pose": "regolith-guard"
        }
      },
      "movement": {
        "walk": 0.94,
        "backwalk": 0.58,
        "jump": 0.84
      },
      "passive": null,
      "visual": {
        "body": "construct",
        "silhouette": "Corpo largo feito de basalto negro e poeira cinza, fendas âmbar, ombros de pedra em placas e mãos como rochas partidas.",
        "outfit": "Corpo largo feito de basalto negro e poeira cinza, fendas âmbar, ombros de pedra em placas e mãos como rochas partidas.",
        "prop": "basalt-fists",
        "stance": "Nó de Basalto",
        "palette": [
          "#626a7d",
          "#edbf6d",
          "#8e94a3",
          "#252a39"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "Uma rocha flutua na palma, depois se desfaz em pó.",
        "effect": "fissure",
        "line": "O chão ainda lembra de você."
      },
      "defeat": {
        "pose": "crumble",
        "action": "Rególito baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    },
    "umbriel": {
      "normalScale": {
        "damage": 0.97,
        "speed": 1.12,
        "range": 1.062
      },
      "normalNames": {
        "light": "Dedo de Umbra",
        "heavy": "Palma do Eclipse",
        "kick": "Passo Sem Luz"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.077,
          "active": 0.077,
          "recovery": 0.155,
          "effect": "shadow"
        },
        "heavy": {
          "startup": 0.191,
          "active": 0.103,
          "recovery": 0.27,
          "effect": "shadow"
        },
        "kick": {
          "startup": 0.126,
          "active": 0.103,
          "recovery": 0.235,
          "effect": "shadow"
        }
      },
      "specials": [
        {
          "name": "Meia-Noite Sem Sol",
          "type": "teleport",
          "description": "A sombra gira atrás do rival antes de um único contato real. O destino é denunciado por uma borda prateada.",
          "startup": 0.28,
          "active": 0.12,
          "recovery": 0.38,
          "range": 118,
          "damage": 108,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "shadow",
          "teleport": {
            "side": "behind",
            "distance": 95,
            "height": 0
          },
          "id": "umbriel-0",
          "animation": {
            "pose": "umbriel-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "eclipse-veil",
            "effect": "shadow",
            "storyProp": "eclipse"
          },
          "storyProp": "eclipse",
          "storyMotion": "arrival"
        },
        {
          "name": "Fio do Eclipse",
          "type": "projectile",
          "description": "Uma pequena esfera escura viaja devagar e drena energia ao acertar. Não drena através da guarda.",
          "startup": 0.28,
          "active": 0.06,
          "recovery": 0.35,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "shadow",
          "projectile": {
            "kind": "eclipse",
            "y": 58,
            "vx": 185,
            "radius": 30,
            "damage": 81,
            "stun": 0.3,
            "push": 38,
            "life": 3.2,
            "delay": 0.28,
            "unique": true,
            "meterDrain": 16
          },
          "id": "umbriel-1",
          "animation": {
            "pose": "umbriel-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "eclipse-veil",
            "effect": "shadow",
            "storyProp": "eclipse"
          },
          "storyProp": "eclipse",
          "storyMotion": "release"
        },
        {
          "name": "Margem da Umbra",
          "type": "retreat",
          "description": "Recua enquanto o véu corta a linha do peito. A breve evasão inicial não protege a saída.",
          "startup": 0.09,
          "active": 0.17,
          "recovery": 0.28,
          "range": 181,
          "damage": 84,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "shadow",
          "move": -360,
          "invulnerable": 0.065,
          "id": "umbriel-2",
          "animation": {
            "pose": "umbriel-special2",
            "limb": "both",
            "path": "rising",
            "prop": "eclipse-veil",
            "effect": "shadow",
            "storyProp": "veil"
          },
          "storyProp": "veil",
          "storyMotion": "withdraw"
        }
      ],
      "combos": [
        {
          "id": "umbriel-combo0",
          "name": "Borda e Escuro",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Dedo de Umbra → Palma do Eclipse → Passo Sem Luz. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 8,
            "push": 16
          }
        },
        {
          "id": "umbriel-combo1",
          "name": "Vigia Sem Rosto",
          "sequence": [
            "light",
            "kick",
            "special0"
          ],
          "description": "Dedo de Umbra → Passo Sem Luz → Meia-Noite Sem Sol. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 10,
            "push": 16
          }
        }
      ],
      "attackStyle": "umbriel",
      "defenseName": "Borda Prateada",
      "finisher": {
        "name": "A Luz Pode Esperar",
        "line": "Nem toda porta precisa abrir.",
        "kind": "umbriel"
      },
      "super": {
        "id": "umbriel-super",
        "name": "A Hora Entre os Mundos",
        "description": "Com a energia completa, Umbriel Véu-Negro concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "Nem toda porta precisa abrir.",
        "kind": "umbriel",
        "type": "melee",
        "effect": "shadow",
        "meterCost": 100,
        "startup": 0.27,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 248,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "A Hora Entre os Mundos",
          "palette": [
            "#3b3d70",
            "#bed8ef"
          ],
          "style": "spectral"
        },
        "animation": {
          "pose": "umbriel-super",
          "prop": "eclipse-veil",
          "effect": "shadow"
        },
        "storyProp": "eclipse"
      },
      "entrance": {
        "name": "Uma sombra circular cobre a poeira sem cobrir a Terra.",
        "line": "Eu guardo o intervalo.",
        "style": "spectral",
        "gesture": "Umbriel sai da borda prateada e ajusta o manto.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Uma sombra circular cobre a poeira sem cobrir a Terra.",
            "pose": "arrive",
            "prop": "eclipse-veil",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Umbriel sai da borda prateada e ajusta o manto.",
            "pose": "warmup",
            "prop": "eclipse-veil",
            "effect": "shadow"
          },
          {
            "at": 2.25,
            "action": "O véu vira um eclipse completo e volta à máscara.",
            "pose": "signature",
            "prop": "eclipse-veil",
            "effect": "shadow"
          },
          {
            "at": 3.25,
            "action": "Eu guardo o intervalo.",
            "pose": "ready",
            "prop": "eclipse-veil",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Dedo de Umbra",
        "light": {
          "limb": "lead",
          "path": "shadow-finger",
          "prop": "eclipse-veil"
        },
        "heavy": {
          "limb": "rear",
          "path": "eclipse-palm",
          "prop": "eclipse-veil"
        },
        "kick": {
          "limb": "leg",
          "path": "shadow-step",
          "prop": "eclipse-veil"
        },
        "guard": {
          "prop": "eclipse-veil",
          "pose": "umbriel-guard"
        }
      },
      "movement": {
        "walk": 1.04,
        "backwalk": 0.82,
        "jump": 1.04
      },
      "passive": null,
      "visual": {
        "body": "spirit",
        "silhouette": "Manto escuro recortado, máscara lisa como um eclipse e braços de sombra com bordas prateadas. Seus pés tocam o chão em intervalos de luz.",
        "outfit": "Manto escuro recortado, máscara lisa como um eclipse e braços de sombra com bordas prateadas. Seus pés tocam o chão em intervalos de luz.",
        "prop": "eclipse-veil",
        "stance": "Dedo de Umbra",
        "palette": [
          "#3b3d70",
          "#bed8ef",
          "#9495bd",
          "#1f2134"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "O véu vira um eclipse completo e volta à máscara.",
        "effect": "shadow",
        "line": "Nem toda porta precisa abrir."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Umbriel Véu-Negro baixa a guarda e reconhece a derrota.",
        "effect": "smoke"
      }
    },
    "apogeu": {
      "normalScale": {
        "damage": 1.025,
        "speed": 1.12,
        "range": 1.062
      },
      "normalNames": {
        "light": "Pulso de Órbita",
        "heavy": "Cotovelo do Apogeu",
        "kick": "Bota de Propulsão"
      },
      "normalOverrides": {
        "light": {
          "startup": 0.078,
          "active": 0.082,
          "recovery": 0.157,
          "effect": "electric"
        },
        "heavy": {
          "startup": 0.192,
          "active": 0.109,
          "recovery": 0.272,
          "effect": "electric"
        },
        "kick": {
          "startup": 0.127,
          "active": 0.11,
          "recovery": 0.237,
          "effect": "electric"
        }
      },
      "specials": [
        {
          "name": "Correio de Meteoros",
          "type": "dash",
          "description": "Uma sequência curta de duas arrancadas propulsadas cruza a média distância. A freada permanece vulnerável.",
          "startup": 0.17,
          "active": 0.34,
          "recovery": 0.39,
          "range": 136,
          "damage": 57,
          "stun": 0.18,
          "push": 21,
          "cooldown": 2.25,
          "effect": "electric",
          "move": 460,
          "multi": 2,
          "id": "apogeu-0",
          "animation": {
            "pose": "apogeu-special0",
            "limb": "lead",
            "path": "straight",
            "prop": "orbital-ring",
            "effect": "electric",
            "storyProp": "orbital-ring"
          },
          "storyProp": "orbital-ring",
          "storyMotion": "travel"
        },
        {
          "name": "Salto do Periastro",
          "type": "launcher",
          "description": "Um chute vertical aciona a gravidade local e suspende brevemente o rival. O pouso tem recuperação longa.",
          "startup": 0.17,
          "active": 0.16,
          "recovery": 0.44,
          "range": 150,
          "damage": 108,
          "stun": 0.39,
          "push": 31,
          "cooldown": 1.8,
          "effect": "ghost",
          "reachY": 198,
          "launch": 230,
          "float": 0.4,
          "id": "apogeu-1",
          "animation": {
            "pose": "apogeu-special1",
            "limb": "rear",
            "path": "arc",
            "prop": "orbital-ring",
            "effect": "ghost",
            "storyProp": "orbital-ring"
          },
          "storyProp": "orbital-ring",
          "storyMotion": "rise"
        },
        {
          "name": "Mensagem em Trânsito",
          "type": "projectile",
          "description": "O aro quebrado lança um fragmento luminoso estreito. A saída moderada permite prever o disparo.",
          "startup": 0.2,
          "active": 0.06,
          "recovery": 0.31,
          "range": 0,
          "damage": 0,
          "stun": 0.34,
          "push": 42,
          "cooldown": 1.8,
          "effect": "electric",
          "projectile": {
            "kind": "orbit",
            "y": 58,
            "vx": 405,
            "radius": 18,
            "damage": 90,
            "stun": 0.3,
            "push": 52,
            "life": 2.4,
            "delay": 0.2,
            "arcAmplitude": 14,
            "arcFrequency": 7
          },
          "id": "apogeu-2",
          "animation": {
            "pose": "apogeu-special2",
            "limb": "both",
            "path": "rising",
            "prop": "orbital-ring",
            "effect": "electric",
            "storyProp": "message-fragment"
          },
          "storyProp": "message-fragment",
          "storyMotion": "release"
        }
      ],
      "combos": [
        {
          "id": "apogeu-combo0",
          "name": "Rota e Apogeu",
          "sequence": [
            "light",
            "heavy",
            "kick"
          ],
          "description": "Pulso de Órbita → Cotovelo do Apogeu → Bota de Propulsão. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 9,
            "push": 20
          }
        },
        {
          "id": "apogeu-combo1",
          "name": "Mensagem Recebida",
          "sequence": [
            "heavy",
            "kick",
            "special0"
          ],
          "description": "Cotovelo do Apogeu → Bota de Propulsão → Correio de Meteoros. São três contatos confirmados; bloqueio ou erro impede o próximo cancelamento.",
          "bonus": {
            "damage": 11,
            "push": 20
          }
        }
      ],
      "attackStyle": "apogeu",
      "defenseName": "Aro de Emergência",
      "finisher": {
        "name": "Ainda Há Tempo de Escolher",
        "line": "O aviso chegou a alguém.",
        "kind": "apogeu"
      },
      "super": {
        "id": "apogeu-super",
        "name": "A Última Órbita",
        "description": "Com a energia completa, Apogeu Nove concentra sua técnica em uma sequência cinematográfica. A preparação visível pode ser defendida.",
        "line": "O aviso chegou a alguém.",
        "kind": "apogeu",
        "type": "melee",
        "effect": "electric",
        "meterCost": 100,
        "startup": 0.29500000000000004,
        "active": 0.19,
        "recovery": 0.66,
        "range": 190,
        "reachY": 190,
        "damage": 260,
        "stun": 0.6,
        "push": 105,
        "cooldown": 5,
        "hitHeight": "mid",
        "cinematic": {
          "duration": 1.3,
          "title": "A Última Órbita",
          "palette": [
            "#9299c0",
            "#c4a5fb"
          ],
          "style": "aerial"
        },
        "animation": {
          "pose": "apogeu-super",
          "prop": "orbital-ring",
          "effect": "electric"
        },
        "storyProp": "orbital-ring"
      },
      "entrance": {
        "name": "Um aro quebrado pousa flutuando sobre a pedra.",
        "line": "Esta mensagem ainda pode chegar.",
        "style": "aerial",
        "gesture": "Apogeu salta através do aro e recolhe uma mensagem luminosa.",
        "duration": 4,
        "beats": [
          {
            "at": 0,
            "action": "Um aro quebrado pousa flutuando sobre a pedra.",
            "pose": "arrive",
            "prop": "orbital-ring",
            "effect": "none"
          },
          {
            "at": 1.05,
            "action": "Apogeu salta através do aro e recolhe uma mensagem luminosa.",
            "pose": "warmup",
            "prop": "orbital-ring",
            "effect": "electric"
          },
          {
            "at": 2.25,
            "action": "As botas ensaiam dois jatos sem deslocar o chão.",
            "pose": "signature",
            "prop": "orbital-ring",
            "effect": "electric"
          },
          {
            "at": 3.25,
            "action": "Esta mensagem ainda pode chegar.",
            "pose": "ready",
            "prop": "orbital-ring",
            "effect": "none"
          }
        ]
      },
      "animation": {
        "stance": "Pulso de Órbita",
        "light": {
          "limb": "lead",
          "path": "orbital-jab",
          "prop": "orbital-ring"
        },
        "heavy": {
          "limb": "rear",
          "path": "apogee-elbow",
          "prop": "orbital-ring"
        },
        "kick": {
          "limb": "leg",
          "path": "thruster-kick",
          "prop": "orbital-ring"
        },
        "guard": {
          "prop": "orbital-ring",
          "pose": "apogeu-guard"
        }
      },
      "movement": {
        "walk": 1.04,
        "backwalk": 0.76,
        "jump": 1.08
      },
      "passive": null,
      "visual": {
        "body": "aerial",
        "silhouette": "Armadura fina branco-acinzentada, aro quebrado nas costas, botas com jatos violeta e rosto visível sob uma viseira estreita.",
        "outfit": "Armadura fina branco-acinzentada, aro quebrado nas costas, botas com jatos violeta e rosto visível sob uma viseira estreita.",
        "prop": "orbital-ring",
        "stance": "Pulso de Órbita",
        "palette": [
          "#9299c0",
          "#c4a5fb",
          "#d4c0b7",
          "#303147"
        ]
      },
      "victory": {
        "pose": "celebrate",
        "action": "As botas ensaiam dois jatos sem deslocar o chão.",
        "effect": "electric",
        "line": "O aviso chegou a alguém."
      },
      "defeat": {
        "pose": "kneel",
        "action": "Apogeu Nove baixa a guarda e reconhece a derrota.",
        "effect": "none"
      }
    }
  }
};
})(typeof window!=='undefined'?window:globalThis);
/* BRASA_SPRITE_GEOMETRY_V14 */
(function(global){
 'use strict';
 const rows=[["caua",128,[3,3,4],[[47,47,128,0],[47,47,128,0],[48,46,127,0],[47,47,127,0],[47,46,127,0],[48,48,128,0],[47,47,127,0],[47,49,128,0],[50,45,127,0],[55,49,124,0],[60,47,122,0],[60,50,122,0],[60,55,121,0],[52,51,125,0],[50,50,123,0],[53,49,124,0],[53,49,126,0],[57,45,130,0],[59,47,126,1],[60,46,126,0],[54,46,128,1],[57,48,127,0],[54,49,124,1],[49,49,129,0],[59,37,93,0],[45,49,117,1],[46,44,128,2],[30,45,128,-15],[32,44,128,-22],[42,60,129,-2],[46,52,93,0],[47,49,124,0],[45,48,124,0],[49,52,118,0],[50,73,123,0],[60,91,125,0],[60,54,128,0],[58,58,123,0],[48,59,122,0],[47,49,125,0],[48,48,124,0],[54,52,120,0],[62,50,124,0],[63,86,121,1],[66,45,126,0],[59,66,126,0],[58,49,128,0],[49,47,127,0],[46,50,125,0],[36,42,93,0],[42,49,131,0],[40,85,129,0],[41,100,126,0],[40,44,120,1],[46,40,123,0],[46,49,126,0],[45,50,121,0],[47,57,85,0],[48,46,79,0],[47,60,106,0],[54,51,119,0],[54,55,108,0],[59,44,119,1],[47,48,122,0]]],["tiao",128,[3,3,3],[[41,43,128,1],[41,43,129,1],[41,44,128,1],[42,42,130,1],[47,40,130,1],[44,43,130,1],[45,41,128,1],[43,41,129,1],[44,43,125,1],[45,44,125,1],[47,45,123,1],[46,49,121,1],[49,45,121,1],[47,46,124,1],[46,44,121,1],[42,49,125,1],[36,38,126,1],[44,34,126,1],[42,36,120,1],[37,38,126,1],[39,38,125,1],[44,40,126,1],[42,41,126,1],[44,38,127,1],[47,45,110,1],[34,52,131,0],[41,45,129,-24],[45,42,129,-44],[44,39,129,-39],[36,44,130,-10],[44,45,107,1],[42,41,122,1],[42,43,124,1],[45,56,120,1],[45,52,123,1],[45,78,123,1],[64,41,119,1],[45,49,123,1],[46,43,123,1],[44,44,124,1],[42,49,122,2],[47,46,121,1],[48,50,123,1],[61,75,121,1],[52,49,77,1],[50,44,121,1],[48,46,119,1],[47,42,122,1],[45,44,121,1],[66,37,123,1],[56,39,103,1],[49,102,72,1],[46,93,68,2],[46,40,77,1],[58,42,102,1],[52,46,121,1],[43,46,129,0],[46,36,132,0],[46,39,133,1],[44,40,132,1],[53,38,129,1],[49,43,126,0],[42,43,123,1],[42,42,125,1]]],["damiao",128,[3,3,4],[[48,49,130,0],[48,51,125,0],[48,51,127,0],[49,49,127,0],[46,50,129,0],[47,50,127,0],[48,50,129,0],[47,47,128,0],[53,49,122,0],[51,52,122,0],[50,51,123,0],[52,51,122,0],[57,47,124,0],[57,47,125,0],[57,48,124,0],[51,50,122,0],[45,56,122,0],[39,55,122,0],[36,55,124,0],[36,56,124,0],[33,53,123,0],[39,52,122,0],[33,47,122,0],[40,47,123,0],[51,46,108,0],[48,54,140,1],[37,50,128,-7],[37,43,128,-21],[60,59,128,-17],[63,55,128,2],[51,47,94,0],[50,46,126,0],[45,51,120,0],[50,49,119,0],[48,72,118,0],[48,82,116,0],[51,75,121,0],[47,53,118,0],[46,54,121,0],[46,50,121,0],[47,49,119,0],[67,52,119,0],[57,68,117,0],[64,91,116,0],[68,48,118,0],[47,40,118,0],[44,52,118,0],[47,46,119,0],[45,37,120,0],[51,44,118,0],[51,43,119,0],[41,88,120,0],[31,104,106,0],[44,44,117,0],[48,36,117,0],[45,50,117,1],[38,46,113,0],[42,41,110,0],[50,42,110,1],[42,48,110,0],[44,48,111,0],[45,45,108,0],[39,46,108,0],[42,48,110,0]]],["lia",128,[3,3,3],[[42,43,128,0],[39,42,128,0],[43,44,128,1],[39,43,127,0],[40,44,129,0],[44,44,128,0],[40,44,128,0],[38,41,127,0],[51,50,124,0],[48,48,124,0],[55,47,124,0],[50,49,124,0],[51,47,123,0],[61,45,124,0],[53,51,122,0],[47,47,127,0],[44,49,128,1],[47,43,128,0],[52,46,126,1],[54,47,123,0],[50,45,126,0],[50,46,122,0],[48,44,121,1],[49,43,126,0],[45,50,100,0],[44,61,145,0],[42,46,128,-25],[43,50,128,-38],[50,47,128,-23],[51,44,129,0],[45,45,93,0],[42,46,125,0],[44,47,123,1],[50,48,123,0],[53,50,121,0],[51,84,122,0],[50,51,120,1],[50,51,121,0],[47,51,120,0],[42,46,122,0],[47,46,131,0],[62,52,127,0],[53,44,127,0],[55,86,129,1],[53,57,126,0],[53,38,126,0],[49,55,127,0],[49,46,129,0],[46,46,127,1],[56,47,133,1],[54,40,119,0],[46,109,121,0],[45,56,116,0],[38,59,104,1],[54,31,130,0],[42,44,127,0],[36,45,106,0],[39,50,102,0],[37,61,88,0],[37,55,86,0],[38,63,86,0],[42,52,103,0],[37,42,106,0],[35,43,106,0]]],["iris",128,[4,4,4],[[46,52,127,0],[45,51,128,0],[45,51,127,0],[45,51,128,0],[45,50,128,0],[45,52,127,0],[45,50,128,0],[45,51,128,0],[45,50,129,1],[55,53,125,1],[53,55,128,0],[56,52,126,0],[56,52,127,0],[57,51,127,0],[55,51,128,0],[49,54,128,0],[46,48,129,0],[41,50,129,0],[39,47,129,0],[41,47,129,0],[39,49,129,0],[37,47,129,0],[41,47,129,0],[38,50,129,0],[50,49,111,0],[50,52,140,0],[43,43,128,-15],[42,57,128,-10],[56,45,128,13],[43,52,128,-4],[46,50,102,0],[44,50,125,0],[45,54,125,0],[50,51,128,0],[56,68,126,0],[58,71,128,0],[51,85,124,0],[53,60,124,0],[45,55,125,0],[46,55,126,0],[52,53,129,0],[59,60,125,-1],[65,48,124,-1],[61,77,124,0],[69,90,123,0],[62,77,121,0],[61,57,126,0],[51,54,126,0],[49,52,129,0],[43,53,109,0],[45,34,143,0],[54,76,130,0],[40,99,130,0],[58,40,136,0],[49,38,131,0],[47,53,128,0],[50,70,188,0],[45,61,186,0],[48,61,186,0],[48,58,187,0],[49,58,188,0],[47,62,187,0],[50,58,188,0],[50,67,188,0]]],["augusto",128,[3,3,3],[[42,53,127,0],[42,55,128,0],[41,55,129,0],[40,53,129,0],[41,55,128,0],[41,53,127,0],[40,53,129,0],[41,54,126,0],[41,49,129,0],[43,47,129,0],[41,52,128,0],[39,53,128,0],[40,51,128,0],[43,51,129,0],[44,53,129,0],[40,54,128,0],[37,47,132,0],[35,36,132,0],[35,39,132,0],[36,55,129,1],[35,61,135,0],[35,36,131,0],[39,41,131,0],[38,47,132,0],[50,40,89,0],[53,59,120,0],[50,40,128,-10],[41,52,128,-25],[44,63,128,-16],[41,62,128,-4],[54,40,89,0],[41,52,124,0],[42,55,127,0],[47,62,124,0],[46,81,123,0],[52,95,124,0],[47,61,126,0],[47,62,124,0],[45,57,124,0],[43,55,126,0],[43,55,127,0],[58,46,131,0],[50,64,128,0],[51,116,127,0],[49,80,128,0],[56,52,126,0],[43,53,124,1],[40,53,125,1],[41,57,125,0],[37,47,126,0],[41,40,131,0],[45,126,121,0],[79,50,127,0],[51,40,121,0],[41,55,125,0],[42,55,124,0],[41,54,126,0],[39,50,123,0],[37,56,121,0],[35,56,123,0],[40,59,122,0],[36,59,121,0],[36,58,122,0],[37,54,126,0]]],["serena",128,[4,4,3],[[44,42,130,0],[45,44,128,1],[45,43,129,0],[45,44,129,0],[44,43,128,1],[42,42,129,0],[42,42,129,1],[43,42,129,0],[46,44,128,0],[55,45,129,0],[53,45,128,0],[50,45,128,0],[48,45,124,0],[50,44,126,0],[53,49,127,0],[49,42,126,0],[46,44,127,1],[48,42,131,0],[49,43,130,0],[46,42,127,0],[51,42,125,0],[53,43,125,0],[47,42,126,0],[42,43,127,0],[51,35,102,0],[45,49,125,0],[29,42,128,-19],[31,31,128,-30],[32,58,129,-11],[37,44,128,-12],[43,41,97,0],[43,42,126,0],[42,44,124,0],[44,46,123,1],[46,59,124,0],[53,73,124,0],[46,74,123,1],[50,51,121,0],[45,45,122,0],[41,44,122,0],[45,40,131,0],[49,45,130,1],[51,43,129,0],[51,54,127,1],[54,81,126,0],[57,78,130,0],[51,40,129,0],[44,42,125,0],[46,42,132,0],[42,39,133,0],[30,45,130,0],[39,95,127,0],[49,86,125,0],[50,30,127,0],[32,34,132,0],[46,45,130,0],[42,41,126,0],[46,37,126,0],[39,44,126,0],[42,44,125,0],[46,41,127,0],[45,42,127,0],[44,41,125,0],[42,42,123,0]]],["caio",128,[4,4,4],[[44,50,128,0],[45,49,128,0],[46,48,128,0],[46,48,129,0],[45,48,129,0],[44,49,128,0],[41,52,128,0],[41,53,128,0],[55,51,131,0],[57,46,130,0],[58,47,130,0],[57,50,131,0],[59,53,130,1],[62,52,131,1],[63,50,131,0],[59,46,129,0],[32,58,132,0],[28,54,132,0],[29,54,135,0],[45,46,133,0],[35,44,132,0],[39,45,132,0],[38,45,132,1],[34,42,135,0],[62,49,111,0],[56,45,134,0],[38,39,128,-11],[40,42,128,-30],[38,48,128,-6],[51,45,128,-5],[55,40,95,0],[43,51,135,0],[40,54,123,0],[52,76,123,0],[56,102,122,1],[56,111,123,0],[63,122,119,0],[63,76,118,0],[52,57,123,0],[42,53,124,0],[36,47,132,0],[49,57,130,0],[55,69,123,0],[74,89,122,0],[70,107,123,1],[69,96,114,0],[63,76,126,0],[36,50,128,0],[42,51,129,0],[38,39,129,0],[45,35,131,0],[50,96,132,0],[47,103,124,0],[48,68,113,0],[37,40,129,0],[41,51,130,0],[44,49,128,1],[39,48,127,0],[44,51,127,0],[47,63,124,0],[59,57,125,0],[51,59,125,0],[48,62,124,0],[43,54,127,0]]],["luz",128,[4,4,3],[[43,50,128,0],[43,50,128,0],[45,47,129,0],[46,47,127,0],[45,47,128,0],[46,47,128,0],[44,48,129,0],[49,49,128,1],[50,48,127,0],[53,59,128,1],[51,49,130,0],[58,46,131,0],[54,51,131,0],[56,50,129,0],[54,50,130,0],[46,49,129,0],[51,51,137,1],[45,47,136,1],[44,45,135,0],[41,51,130,0],[45,47,135,1],[44,47,136,1],[42,49,135,1],[44,44,135,1],[50,47,108,0],[53,45,135,0],[52,52,128,-20],[47,54,132,-23],[53,51,128,-25],[48,51,128,8],[50,46,109,0],[49,49,131,0],[46,48,118,0],[45,56,117,0],[55,56,120,0],[50,75,117,0],[55,79,120,0],[57,57,117,0],[50,47,117,0],[47,47,120,0],[49,49,130,0],[60,51,127,0],[55,50,128,0],[47,74,122,0],[54,80,120,0],[59,58,124,0],[48,56,126,0],[47,50,126,-1],[50,50,143,0],[50,49,140,0],[57,54,144,1],[52,65,145,0],[81,52,144,0],[61,45,140,0],[53,51,146,0],[50,48,143,0],[47,50,144,0],[54,48,144,0],[55,75,146,0],[43,53,147,0],[53,51,142,0],[50,46,144,0],[54,51,144,1],[49,47,144,0]]],["ti",128,[3,4,3],[[46,50,129,1],[43,51,128,0],[41,50,129,1],[42,47,127,0],[42,51,125,1],[41,49,128,1],[43,53,128,1],[39,50,127,1],[51,51,127,0],[53,54,127,0],[56,56,123,0],[56,57,124,0],[60,55,124,0],[59,55,124,0],[61,56,124,0],[58,53,123,0],[51,53,125,0],[52,52,125,0],[36,54,125,0],[41,51,125,0],[49,52,125,1],[51,51,125,0],[51,50,125,0],[50,47,125,0],[57,46,108,0],[58,55,150,0],[49,58,128,25],[43,52,129,-14],[56,62,128,3],[43,55,128,4],[60,49,101,1],[44,52,131,1],[51,53,127,0],[49,58,126,0],[61,72,129,0],[62,94,128,0],[72,90,126,0],[51,58,123,1],[52,51,123,0],[43,52,130,0],[48,51,128,1],[66,54,125,0],[66,50,125,0],[60,70,124,1],[61,93,126,1],[60,55,125,1],[52,60,126,-1],[47,53,127,1],[43,59,130,0],[70,48,128,0],[51,47,128,0],[48,105,132,0],[66,55,129,0],[56,57,126,0],[47,40,129,0],[45,51,134,0],[41,57,133,0],[39,55,138,0],[40,47,138,0],[48,66,137,0],[41,59,137,0],[47,54,134,0],[42,42,135,0],[39,55,137,0]]],["brick",128,[3,4,3],[[39,58,126,0],[40,62,127,0],[39,63,128,0],[40,64,129,0],[39,61,129,0],[40,59,126,0],[39,58,127,0],[39,63,128,0],[41,64,129,0],[50,60,132,0],[57,56,132,0],[54,57,132,0],[57,60,134,0],[57,60,131,0],[54,61,132,0],[39,58,130,1],[48,56,131,0],[49,64,131,0],[48,61,132,0],[44,60,131,0],[37,62,131,0],[35,60,131,0],[46,59,131,1],[42,61,131,0],[54,55,112,1],[44,60,152,1],[39,72,128,-9],[50,50,128,-22],[52,66,128,-8],[47,58,128,8],[61,56,109,0],[39,60,131,1],[38,60,126,0],[50,63,120,0],[58,61,136,0],[57,107,134,0],[63,83,132,0],[61,79,126,0],[40,65,124,1],[37,59,128,1],[43,62,135,0],[50,63,146,0],[57,64,149,0],[61,59,146,0],[70,73,111,0],[61,69,128,1],[52,59,116,1],[40,59,130,0],[39,62,128,1],[40,52,133,1],[53,50,136,0],[48,127,126,1],[67,54,114,1],[98,24,60,0],[47,52,123,0],[39,59,127,1],[48,51,108,0],[56,45,89,1],[50,44,104,0],[54,56,98,0],[64,62,84,0],[53,44,108,0],[51,54,103,1],[47,51,109,0]]],["steele",128,[3,3,3],[[44,49,129,0],[46,45,128,0],[44,47,125,0],[44,44,128,0],[44,47,129,0],[48,45,127,0],[48,47,128,0],[46,46,128,0],[54,51,127,0],[59,54,127,0],[56,48,126,1],[57,48,126,0],[58,53,126,0],[53,52,127,1],[50,51,129,0],[50,52,127,0],[52,48,127,0],[58,52,126,1],[56,54,125,0],[44,52,125,1],[41,54,125,0],[54,50,124,0],[50,49,124,0],[53,52,125,0],[50,49,115,0],[51,54,139,0],[38,55,128,-14],[44,50,128,-17],[42,83,128,-12],[47,44,128,1],[53,53,119,0],[40,54,125,0],[49,49,125,0],[63,46,121,0],[59,67,125,0],[55,80,125,0],[60,55,124,0],[57,54,120,0],[52,58,119,0],[46,49,125,0],[50,50,125,0],[73,41,135,0],[50,54,140,0],[59,100,125,0],[65,63,120,0],[62,58,135,0],[65,52,125,0],[46,47,125,0],[48,51,124,0],[43,44,125,0],[46,30,133,0],[38,73,128,0],[48,35,125,1],[35,43,113,0],[43,37,121,0],[44,47,123,0],[38,41,99,0],[50,33,106,0],[35,42,100,1],[40,75,94,0],[50,68,97,1],[33,41,97,0],[39,42,97,0],[43,41,97,1]]],["jack",128,[3,3,3],[[48,46,128,0],[49,46,127,0],[48,47,128,0],[47,47,127,0],[49,46,126,0],[49,46,128,0],[47,47,127,0],[47,48,128,0],[54,50,129,0],[56,51,129,0],[59,53,127,0],[57,51,125,0],[56,47,128,0],[58,50,128,0],[60,51,127,0],[60,52,127,0],[46,52,127,0],[49,46,128,0],[49,48,127,1],[53,46,126,0],[47,56,128,0],[46,59,127,0],[42,52,129,0],[46,53,128,0],[50,42,92,0],[56,53,130,0],[36,42,128,-5],[34,38,128,-18],[49,51,128,-8],[59,46,128,-20],[56,41,103,1],[48,48,127,0],[44,49,126,0],[59,51,126,0],[60,86,127,0],[65,86,128,0],[61,56,125,0],[60,45,125,0],[49,47,125,0],[49,49,128,0],[50,47,129,0],[64,53,127,0],[52,47,135,0],[71,71,130,0],[59,57,128,0],[31,48,132,0],[53,45,129,1],[49,48,132,0],[50,48,128,0],[49,50,129,0],[48,39,129,1],[49,105,126,0],[56,39,125,0],[41,45,124,1],[51,47,129,0],[49,48,129,0],[49,46,115,0],[37,39,107,0],[35,36,108,0],[35,39,105,0],[37,44,110,0],[34,40,111,0],[35,44,112,0],[49,47,115,0]]],["gloria",128,[3,3,4],[[62,49,128,0],[63,49,128,0],[60,50,128,0],[61,49,128,1],[61,50,128,0],[63,48,128,1],[61,51,128,0],[66,49,128,0],[68,57,130,0],[76,46,131,0],[79,54,129,0],[67,55,130,0],[70,54,134,0],[83,49,130,0],[74,54,129,0],[76,47,130,0],[71,60,130,1],[77,55,130,0],[76,53,132,0],[83,49,130,0],[79,55,131,0],[75,49,131,0],[71,53,130,0],[75,52,131,0],[71,50,100,0],[94,78,162,0],[75,39,128,-18],[101,31,128,-25],[95,51,128,-15],[73,56,128,4],[97,38,108,0],[68,48,137,0],[65,52,130,0],[73,54,130,1],[75,54,131,0],[81,90,129,0],[80,81,128,0],[75,52,129,0],[79,46,131,0],[68,51,130,0],[68,51,134,0],[90,54,134,0],[91,40,130,0],[71,84,129,0],[90,75,129,0],[85,56,128,0],[81,54,128,0],[68,51,134,0],[66,52,131,0],[66,55,124,0],[54,74,137,0],[50,106,129,0],[71,114,113,1],[68,53,129,0],[67,71,130,0],[68,53,133,0],[63,51,138,0],[55,48,138,1],[62,48,139,0],[61,50,138,0],[62,87,143,0],[91,52,133,0],[73,54,133,0],[71,51,132,0]]],["roxy",128,[3,4,4],[[39,71,130,0],[39,62,126,0],[38,62,128,0],[39,63,128,0],[39,63,127,0],[38,66,131,0],[42,63,127,0],[40,62,132,0],[42,68,128,1],[44,69,126,0],[47,67,128,0],[50,65,130,1],[54,67,130,1],[54,68,133,1],[50,70,128,1],[46,64,131,0],[43,63,134,0],[53,72,129,1],[46,71,131,0],[40,71,133,0],[51,64,131,1],[54,63,132,1],[49,70,132,0],[45,71,131,1],[47,60,100,1],[41,71,134,1],[32,72,128,-3],[47,61,128,-21],[54,74,128,-7],[52,70,128,5],[46,59,99,0],[37,66,126,0],[36,65,123,0],[39,78,122,0],[51,95,125,0],[66,106,127,0],[70,86,126,0],[47,83,123,0],[41,72,125,1],[36,65,124,1],[43,69,133,0],[60,71,134,0],[46,87,137,0],[71,76,123,0],[63,102,122,1],[62,71,123,0],[44,57,132,0],[42,65,124,0],[38,65,132,0],[39,57,133,0],[38,44,135,1],[29,109,137,0],[33,112,134,0],[41,58,127,1],[39,63,133,0],[37,65,125,0],[39,67,129,0],[41,62,123,0],[44,63,123,0],[40,62,121,0],[45,65,123,0],[47,79,123,0],[41,63,127,0],[39,63,128,0]]],["silas",128,[4,4,3],[[40,62,127,1],[47,66,128,0],[43,67,129,0],[40,71,127,1],[44,64,129,0],[43,65,129,0],[45,62,128,0],[42,64,128,0],[49,78,132,0],[54,73,133,0],[50,78,134,0],[47,79,133,0],[47,76,133,0],[48,78,132,0],[50,72,131,1],[49,69,131,1],[44,69,136,0],[43,68,135,0],[45,69,135,0],[39,66,136,0],[37,67,136,0],[42,75,136,0],[47,76,137,0],[44,66,135,0],[62,59,99,0],[52,67,134,0],[73,63,129,2],[64,66,128,-25],[68,65,128,-10],[65,59,128,14],[55,54,99,0],[42,68,130,0],[42,65,129,0],[44,68,127,1],[49,65,125,0],[49,103,127,0],[46,103,127,0],[45,67,127,-1],[44,71,126,0],[42,66,127,1],[44,65,129,0],[52,78,129,0],[57,79,130,1],[74,63,131,0],[114,97,135,1],[56,83,130,0],[51,76,129,0],[44,68,129,0],[42,65,131,0],[40,57,137,0],[39,68,141,0],[36,155,136,1],[106,16,54,0],[42,62,137,0],[47,77,134,0],[47,67,132,0],[42,50,137,0],[54,53,103,0],[53,53,120,0],[52,54,129,0],[76,79,133,1],[51,51,120,1],[41,67,130,0],[42,66,130,0]]],["boris",128,[3,4,3],[[53,46,128,0],[54,47,128,0],[50,46,128,1],[53,48,126,0],[53,49,126,0],[54,48,127,0],[53,49,128,0],[54,47,127,0],[62,56,131,0],[63,53,128,0],[63,56,128,1],[62,57,128,0],[65,54,129,0],[63,56,129,0],[54,48,130,1],[53,49,130,1],[63,48,129,1],[60,52,131,0],[57,51,131,0],[66,54,129,0],[64,51,129,0],[67,52,128,1],[64,50,130,0],[56,50,130,0],[58,50,93,1],[55,48,138,1],[48,44,128,-12],[57,42,131,-16],[48,60,128,-9],[48,66,128,-4],[55,46,95,1],[53,49,127,1],[56,51,129,0],[63,84,126,0],[66,81,126,0],[63,93,126,0],[64,83,126,0],[65,55,126,0],[56,60,129,0],[55,53,127,0],[56,56,133,0],[75,68,129,0],[74,69,126,1],[79,71,126,1],[72,93,126,1],[71,60,128,1],[57,59,132,0],[54,56,132,1],[57,52,133,0],[50,42,132,0],[48,46,136,1],[61,123,128,0],[91,28,122,1],[52,41,42,1],[50,45,135,1],[56,51,134,0],[55,55,132,0],[50,49,121,0],[55,49,112,1],[59,56,98,0],[53,46,131,1],[52,50,135,0],[55,55,127,0],[56,52,132,0]]],["irina",128,[3,4,3],[[40,52,127,0],[37,51,128,0],[38,51,128,0],[37,51,127,0],[40,52,127,0],[37,53,128,0],[37,54,128,0],[38,53,128,0],[43,56,126,0],[44,59,126,0],[48,57,126,0],[44,55,126,0],[46,56,126,0],[46,54,126,0],[45,57,126,0],[43,57,126,0],[32,65,126,1],[33,65,126,0],[32,63,126,1],[31,59,125,1],[31,62,126,0],[32,62,125,1],[32,60,124,0],[32,61,126,1],[53,35,98,0],[47,44,122,0],[37,38,128,-14],[46,31,128,-33],[37,45,128,-7],[54,49,128,4],[49,52,92,0],[45,52,125,0],[34,58,123,0],[43,61,124,0],[44,71,124,0],[44,82,122,0],[46,74,122,0],[45,62,123,0],[41,61,124,0],[34,60,124,0],[40,53,128,1],[50,56,126,1],[63,58,126,0],[40,72,126,0],[64,87,123,0],[52,76,124,-1],[42,52,128,0],[43,55,127,0],[39,57,134,0],[38,40,135,0],[51,65,134,0],[32,113,135,0],[27,94,135,0],[35,52,131,0],[37,50,133,0],[37,53,134,0],[43,50,140,0],[36,36,147,0],[36,29,150,0],[35,27,153,0],[60,29,152,0],[50,55,157,0],[32,38,144,0],[42,56,140,0]]],["yuri",128,[3,4,4],[[51,55,129,0],[50,52,127,0],[49,53,127,0],[51,55,129,0],[50,56,128,0],[48,53,129,0],[50,55,129,0],[50,56,127,0],[53,52,129,0],[60,59,129,0],[64,57,128,1],[62,57,129,1],[67,61,127,1],[56,59,128,1],[55,56,129,0],[57,53,130,0],[56,55,130,0],[52,62,131,0],[53,61,131,0],[56,59,130,0],[54,67,129,0],[48,56,131,0],[51,62,131,0],[51,59,129,0],[51,59,115,0],[48,63,124,1],[58,63,128,-15],[53,59,128,-18],[51,73,128,-10],[59,53,128,4],[60,52,101,0],[53,52,129,0],[51,60,129,0],[52,62,129,0],[63,69,129,0],[59,93,129,0],[48,85,131,0],[50,59,128,1],[55,58,129,0],[51,56,127,0],[52,60,129,0],[59,58,130,0],[64,86,127,1],[57,63,129,0],[78,93,135,0],[54,56,131,0],[59,59,126,1],[54,52,129,0],[57,58,123,0],[59,52,135,0],[51,88,140,0],[51,104,127,0],[66,108,136,0],[48,56,128,0],[55,60,125,0],[52,54,128,0],[49,58,128,0],[57,93,128,0],[60,57,121,0],[56,74,125,0],[55,76,125,0],[59,64,127,0],[86,56,129,0],[49,56,124,0]]],["vera",128,[3,4,4],[[38,64,126,0],[39,63,128,0],[39,63,127,0],[38,63,128,0],[41,65,128,0],[39,63,131,0],[39,64,129,0],[39,63,129,0],[45,64,130,1],[44,63,126,1],[47,59,127,0],[45,63,126,1],[50,66,126,1],[49,68,126,0],[49,68,128,0],[45,67,126,1],[40,66,131,0],[42,63,130,0],[39,63,129,0],[39,64,129,0],[41,69,128,0],[45,66,128,1],[43,66,128,0],[39,63,129,0],[44,57,120,1],[49,62,132,1],[48,59,128,-3],[46,62,128,-14],[53,67,128,4],[47,66,129,5],[55,62,103,1],[40,64,129,1],[39,63,124,0],[42,66,122,0],[45,124,120,0],[65,73,122,0],[73,30,112,0],[47,86,123,0],[47,55,122,0],[42,64,122,0],[38,63,125,1],[47,64,125,0],[56,85,121,0],[56,72,122,0],[75,98,122,0],[74,60,124,0],[44,69,122,0],[39,60,119,1],[40,65,126,0],[38,61,133,0],[68,57,122,0],[56,78,122,1],[63,84,125,0],[48,76,131,0],[44,59,129,0],[39,61,125,0],[43,68,125,0],[38,72,124,0],[37,72,125,0],[42,64,125,0],[41,66,127,0],[42,62,125,0],[40,65,124,0],[42,66,124,0]]],["maksim",128,[3,3,3],[[44,59,127,1],[44,59,130,1],[46,58,129,1],[45,58,128,1],[45,59,127,1],[46,59,128,1],[45,59,129,1],[45,58,131,1],[52,63,132,1],[57,59,132,1],[60,59,129,1],[56,59,131,1],[54,69,129,2],[56,66,129,1],[55,66,129,1],[58,63,129,1],[48,59,132,1],[53,60,134,1],[47,61,131,1],[44,63,130,1],[49,61,131,1],[54,60,131,1],[39,59,131,1],[43,57,132,1],[64,54,104,1],[55,59,123,1],[54,63,129,-21],[46,54,130,-33],[45,56,129,-4],[50,53,130,-14],[66,58,99,1],[44,59,127,1],[47,53,129,1],[59,57,131,1],[65,68,130,2],[68,103,130,1],[65,89,126,1],[53,60,129,1],[54,54,129,1],[49,59,126,1],[51,59,132,1],[64,52,129,1],[76,89,131,2],[78,93,135,2],[78,76,133,1],[49,59,135,1],[44,59,131,1],[45,57,133,2],[49,58,131,1],[43,46,138,1],[56,40,131,1],[50,120,125,1],[36,58,131,1],[65,132,125,1],[43,53,130,1],[47,55,129,1],[49,57,131,0],[52,49,131,1],[41,51,134,1],[37,49,132,1],[34,59,129,1],[41,53,129,1],[47,56,126,1],[46,56,130,1]]],["anya",128,[3,4,3],[[50,52,127,1],[50,52,128,0],[49,54,129,0],[50,52,129,1],[49,54,130,0],[50,52,128,0],[50,52,127,0],[50,53,128,1],[58,53,129,0],[57,52,128,0],[58,51,129,0],[63,54,129,0],[62,54,131,0],[59,54,127,1],[61,51,129,0],[60,51,128,0],[51,56,127,0],[52,57,127,0],[52,57,128,0],[52,59,128,0],[53,58,128,0],[52,59,127,0],[52,58,127,0],[52,54,127,0],[59,40,102,0],[39,64,125,0],[39,57,128,0],[49,44,128,-28],[49,67,128,-7],[45,56,128,1],[51,56,101,0],[46,57,119,0],[50,53,127,0],[55,54,128,0],[50,81,128,0],[50,85,128,0],[51,71,127,0],[53,56,127,0],[53,56,127,0],[50,55,127,0],[50,53,129,0],[60,53,118,1],[53,62,124,0],[54,84,121,1],[60,101,124,0],[59,84,121,0],[56,58,123,0],[51,55,127,0],[51,58,129,0],[51,57,141,0],[42,71,140,0],[36,71,144,0],[67,69,150,0],[51,64,142,0],[29,52,146,1],[51,56,130,0],[49,58,164,0],[54,53,112,0],[59,47,98,0],[54,46,93,0],[58,42,103,0],[44,42,122,0],[48,55,139,0],[52,58,163,0]]],["lev",128,[3,4,3],[[49,55,126,0],[52,56,129,0],[46,55,127,0],[45,56,128,0],[45,55,128,0],[43,55,128,0],[45,57,127,0],[44,55,128,0],[51,54,128,0],[52,54,127,0],[54,50,126,1],[55,58,130,0],[56,54,127,0],[54,53,127,0],[52,55,127,0],[55,58,128,0],[55,54,128,1],[45,62,128,1],[56,54,128,0],[53,54,127,0],[50,55,126,0],[52,54,129,0],[51,53,127,0],[50,50,131,0],[62,51,108,0],[76,49,158,0],[52,70,128,8],[62,49,128,-23],[52,64,128,-10],[57,68,128,-7],[69,43,104,0],[48,60,128,0],[49,54,127,0],[50,63,124,0],[49,86,126,0],[46,91,128,0],[52,90,125,0],[61,72,126,0],[56,54,126,0],[47,54,128,0],[49,58,129,0],[56,80,122,0],[59,91,123,-1],[59,88,119,-1],[59,100,117,-1],[59,109,114,0],[58,65,120,1],[50,57,127,0],[53,63,128,0],[50,88,138,0],[41,69,140,0],[56,100,139,0],[53,101,131,0],[37,54,137,0],[47,59,127,0],[49,61,131,0],[51,54,136,0],[52,54,136,0],[49,49,145,0],[47,48,137,0],[83,72,144,0],[60,55,141,0],[53,48,140,0],[50,56,135,0]]],["nikolai",128,[3,4,4],[[62,49,128,0],[62,49,127,0],[62,48,128,0],[61,48,128,0],[62,48,128,0],[61,47,128,0],[61,48,128,0],[61,47,128,0],[68,48,128,0],[70,47,127,0],[70,47,126,0],[71,46,127,0],[70,47,128,0],[68,47,128,0],[68,47,127,0],[70,47,128,0],[58,50,134,1],[57,62,135,0],[60,63,131,0],[56,60,131,1],[67,48,131,0],[68,49,131,0],[64,49,133,0],[61,48,131,1],[66,59,110,0],[55,60,145,0],[61,46,128,-1],[61,52,129,-24],[53,54,128,4],[64,50,129,1],[60,59,107,0],[61,51,134,1],[62,47,124,0],[75,52,123,0],[69,77,121,0],[66,74,120,0],[67,73,119,1],[67,64,121,0],[69,46,121,0],[61,47,125,0],[66,51,130,0],[68,49,125,0],[62,62,128,1],[55,75,128,1],[63,83,125,0],[65,49,127,1],[64,52,127,1],[61,47,130,0],[60,50,134,0],[61,46,133,0],[49,67,137,0],[41,101,128,0],[40,110,122,0],[59,44,128,0],[50,58,137,0],[60,49,134,0],[61,48,129,1],[62,60,131,0],[53,70,132,0],[61,54,131,0],[57,63,130,0],[57,51,131,0],[61,48,130,0],[61,47,129,0]]],["zoya",128,[4,3,3],[[39,50,128,0],[40,50,129,0],[41,49,128,0],[41,51,127,0],[41,48,127,0],[41,49,127,0],[40,50,128,0],[42,49,129,0],[46,54,127,0],[49,48,128,0],[47,49,128,0],[49,48,128,0],[45,50,127,0],[46,48,128,0],[49,46,128,0],[50,47,128,0],[44,38,130,0],[39,41,131,0],[40,41,127,0],[39,40,129,0],[37,46,129,0],[37,43,131,1],[37,49,129,0],[41,44,128,1],[53,44,108,0],[44,51,139,0],[44,52,128,13],[50,53,128,-19],[45,52,128,-1],[52,57,128,-1],[50,61,103,0],[42,49,126,0],[44,49,129,0],[42,81,128,0],[54,85,130,0],[57,86,132,0],[57,94,127,0],[57,87,130,0],[44,49,128,0],[43,50,128,0],[43,49,128,0],[60,43,128,0],[57,62,129,0],[52,107,131,0],[41,96,123,0],[75,54,127,0],[53,43,130,0],[45,51,129,0],[44,49,133,0],[47,51,131,0],[34,42,134,0],[44,89,131,0],[36,81,133,0],[46,54,131,0],[44,44,133,0],[45,51,131,0],[38,63,104,0],[44,57,122,0],[42,58,123,0],[49,51,123,1],[42,66,126,0],[46,49,123,0],[48,44,120,1],[38,49,120,0]]],["aya",128,[3,4,3],[[43,58,128,1],[42,58,128,1],[44,55,128,1],[44,55,128,0],[42,58,130,0],[40,59,129,0],[44,54,128,0],[41,56,127,1],[50,57,127,0],[57,56,126,1],[61,56,125,0],[61,55,126,1],[57,54,128,0],[59,58,127,0],[54,50,127,0],[52,55,124,1],[48,56,119,0],[50,50,119,0],[56,48,118,0],[45,57,117,1],[46,61,118,0],[43,57,118,0],[48,58,118,0],[38,56,119,0],[52,63,108,0],[49,54,135,0],[53,37,128,-7],[50,38,128,-22],[58,50,129,5],[55,45,129,-3],[47,46,99,0],[42,57,122,0],[45,63,118,0],[48,59,118,0],[43,93,120,0],[48,89,118,0],[51,89,120,0],[41,69,116,0],[48,55,115,0],[43,59,118,0],[43,58,128,1],[47,67,124,0],[43,69,122,1],[44,76,120,0],[46,93,120,0],[49,84,120,0],[45,67,123,0],[43,59,127,1],[50,64,141,0],[56,45,142,0],[37,46,144,1],[45,97,138,0],[65,72,144,0],[43,90,144,1],[26,42,141,0],[52,48,139,0],[49,42,102,1],[46,59,149,0],[35,50,158,1],[48,72,151,0],[61,56,152,0],[46,61,148,1],[53,58,149,0],[50,58,148,0]]],["tetsu",128,[4,3,4],[[49,74,129,0],[48,75,128,0],[47,73,129,0],[48,72,128,0],[47,74,128,0],[47,73,128,0],[48,74,129,0],[47,69,128,0],[49,76,126,0],[52,69,128,0],[52,77,130,0],[52,71,129,0],[51,76,129,0],[52,70,128,1],[45,76,129,0],[47,74,127,0],[45,72,129,0],[46,71,130,0],[43,69,128,1],[41,72,129,0],[41,73,130,0],[48,66,128,0],[43,70,129,0],[42,72,129,1],[59,61,98,0],[56,56,106,0],[45,74,128,1],[52,62,128,-19],[46,74,128,-2],[47,69,128,-9],[62,62,98,0],[56,56,112,0],[45,73,128,0],[47,78,128,0],[53,93,121,0],[54,92,122,0],[41,107,120,0],[43,77,122,0],[45,72,124,0],[45,72,125,0],[45,72,124,0],[48,91,124,0],[67,61,121,1],[67,115,124,0],[77,97,125,0],[69,80,123,1],[49,73,126,0],[44,72,126,1],[50,68,134,0],[48,54,137,0],[38,66,134,0],[44,84,132,0],[35,94,128,0],[52,56,131,0],[48,53,135,0],[46,73,130,0],[57,58,104,0],[52,61,126,0],[65,48,125,0],[41,67,128,0],[44,60,123,0],[52,58,124,0],[46,65,125,0],[44,71,127,0]]],["mika",128,[3,3,3],[[44,53,129,0],[41,55,128,0],[42,55,129,0],[42,55,127,0],[42,55,128,0],[43,56,127,0],[43,55,127,0],[43,54,130,0],[51,61,127,0],[48,56,125,0],[53,53,125,0],[52,54,127,0],[54,52,126,1],[55,56,128,0],[54,54,125,0],[50,55,127,0],[38,59,132,0],[35,59,130,0],[40,59,128,0],[43,56,130,1],[43,60,130,0],[38,59,130,0],[38,56,132,0],[33,57,130,0],[42,52,110,1],[52,51,141,0],[45,44,128,-36],[38,41,128,-29],[43,48,128,-7],[43,61,128,-3],[58,47,105,1],[45,57,123,0],[39,57,128,0],[44,61,126,0],[45,81,127,0],[47,89,123,0],[50,87,121,0],[50,59,124,0],[42,59,125,0],[43,56,124,0],[44,48,130,0],[39,48,110,0],[48,51,116,-1],[64,48,114,1],[66,48,120,1],[54,45,122,-1],[43,50,119,0],[42,51,125,1],[40,51,141,0],[37,52,143,0],[38,46,143,0],[36,109,145,0],[45,51,140,0],[38,46,139,0],[48,34,143,0],[41,56,138,0],[39,48,153,0],[38,52,154,0],[71,47,141,0],[48,56,145,0],[43,68,144,0],[33,41,147,0],[54,51,143,0],[46,50,144,0]]],["shiori",128,[4,3,4],[[49,52,127,1],[51,57,128,1],[49,55,129,0],[53,52,129,0],[50,57,129,0],[50,54,128,0],[49,60,128,0],[48,58,128,0],[55,58,128,0],[56,56,127,0],[59,61,127,0],[59,58,127,0],[56,60,127,0],[55,61,127,0],[59,57,126,0],[57,59,126,0],[54,66,129,0],[51,57,129,0],[52,63,127,1],[54,57,128,0],[51,63,127,0],[50,62,127,0],[52,62,125,0],[52,64,124,0],[50,51,100,0],[66,45,133,0],[68,36,128,5],[47,48,129,-25],[58,70,128,2],[53,70,128,-5],[49,56,104,0],[49,55,123,0],[53,54,125,0],[46,68,123,0],[51,73,126,0],[46,73,124,0],[53,82,124,0],[50,70,124,0],[51,63,123,0],[44,64,127,0],[51,63,129,0],[59,55,126,0],[69,43,132,0],[50,93,132,0],[54,87,132,0],[57,40,136,0],[57,52,132,1],[49,60,127,1],[58,61,123,0],[52,63,127,0],[71,48,126,0],[55,65,128,0],[61,79,123,1],[64,45,129,0],[62,56,129,0],[49,58,125,0],[48,63,118,0],[50,70,118,0],[47,69,117,0],[52,68,118,1],[51,68,117,0],[42,68,117,1],[48,66,118,0],[47,59,119,0]]],["liang",128,[4,3,4],[[48,62,125,0],[50,60,128,0],[50,60,128,0],[44,64,128,0],[48,63,129,0],[47,65,128,0],[47,63,128,0],[47,62,128,0],[47,64,125,0],[52,61,125,0],[48,60,125,0],[52,59,125,0],[58,57,126,0],[60,64,122,0],[56,63,125,0],[43,63,125,0],[39,62,133,0],[43,64,128,0],[44,63,131,0],[42,63,130,0],[38,61,130,0],[39,65,131,0],[45,65,132,0],[41,63,130,0],[57,59,104,0],[50,51,149,1],[41,50,128,12],[47,62,128,-20],[67,57,128,-6],[55,67,128,-11],[67,52,94,0],[53,60,123,0],[47,65,131,0],[48,60,130,0],[53,81,127,0],[52,90,127,0],[57,91,128,0],[53,63,125,0],[55,63,128,0],[53,62,128,0],[52,63,128,1],[65,70,125,0],[53,76,126,0],[63,98,126,0],[63,92,126,0],[56,53,122,0],[51,63,128,0],[51,63,125,0],[49,59,128,0],[38,62,127,0],[47,45,127,1],[41,62,128,0],[56,125,127,0],[31,41,123,0],[37,43,125,0],[51,58,123,0],[47,57,116,0],[48,53,117,0],[44,52,115,0],[47,58,114,0],[47,62,115,0],[47,61,119,0],[46,57,115,0],[49,60,119,0]]],["barro",128,[3,3,4],[[51,76,126,0],[51,77,128,0],[52,78,126,0],[53,75,126,0],[52,77,128,0],[52,75,128,0],[52,78,128,0],[51,77,128,0],[54,79,131,0],[53,83,134,0],[56,91,131,0],[55,91,136,0],[51,90,134,0],[46,83,136,0],[47,84,132,0],[46,80,133,1],[42,73,132,1],[48,73,131,0],[43,74,131,1],[48,77,129,1],[46,77,128,1],[52,78,128,1],[46,80,131,1],[47,73,127,1],[66,81,101,0],[48,95,129,0],[43,62,128,-12],[50,75,129,-19],[52,91,128,2],[50,75,128,-10],[64,78,104,0],[48,77,130,0],[45,84,128,0],[46,93,130,0],[50,103,130,0],[71,135,124,0],[83,91,118,0],[38,84,126,0],[49,82,127,0],[45,80,130,0],[85,53,135,0],[68,57,129,1],[50,82,128,1],[67,157,125,1],[61,111,124,1],[50,80,125,0],[47,88,128,1],[47,78,135,0],[46,80,132,1],[40,74,133,0],[42,84,133,1],[52,97,134,1],[42,99,119,1],[77,45,126,1],[80,40,132,1],[43,79,133,1],[49,80,133,0],[48,77,131,0],[48,80,131,0],[48,79,133,0],[52,75,133,0],[58,73,133,0],[51,80,131,0],[49,77,133,0]]],["vittoria",128,[3,3,3],[[54,49,130,0],[55,51,128,0],[53,49,129,0],[55,48,128,0],[54,50,128,0],[56,51,128,0],[53,49,128,0],[56,49,130,0],[59,50,133,0],[67,55,131,0],[68,52,131,0],[64,56,131,0],[61,53,131,0],[66,52,131,0],[64,52,131,0],[65,49,132,0],[54,50,132,1],[54,48,132,0],[51,46,132,0],[45,44,131,0],[56,47,132,0],[51,46,132,0],[45,50,132,0],[51,48,132,1],[65,42,99,0],[53,59,144,0],[34,47,128,-14],[33,46,128,-19],[55,46,128,-5],[60,50,128,10],[57,51,103,0],[59,45,129,0],[54,49,128,0],[56,53,126,0],[57,68,128,0],[61,86,126,0],[67,66,127,0],[66,51,126,0],[59,50,125,0],[55,51,128,0],[56,52,129,0],[59,57,129,0],[70,66,128,0],[74,87,125,0],[80,47,131,0],[68,53,129,0],[61,57,127,0],[57,51,131,0],[56,54,128,1],[42,43,134,0],[45,46,137,0],[34,103,128,0],[45,42,137,0],[36,102,123,0],[35,41,133,0],[54,50,128,1],[54,54,128,0],[50,44,131,0],[47,47,132,0],[45,48,131,0],[43,47,132,0],[43,49,130,0],[42,50,131,0],[54,50,129,0]]],["luca",128,[4,4,3],[[47,85,129,0],[47,84,128,0],[46,85,127,0],[46,87,127,0],[49,87,129,0],[48,88,128,1],[46,85,128,1],[44,85,129,1],[62,96,129,1],[63,93,129,0],[63,99,129,0],[41,99,129,0],[54,97,130,0],[41,93,129,1],[52,92,129,0],[54,86,131,0],[58,78,128,0],[61,82,129,0],[62,86,129,0],[64,82,129,0],[55,85,129,0],[57,83,128,1],[60,82,128,0],[60,82,128,0],[62,83,116,0],[48,103,147,0],[46,97,128,-14],[45,92,128,-15],[55,98,128,2],[56,88,128,12],[67,88,115,0],[47,84,129,0],[50,87,124,0],[53,88,124,0],[50,87,124,1],[51,130,125,0],[52,136,124,0],[52,98,124,0],[49,96,125,0],[49,84,125,0],[50,85,127,0],[48,95,125,0],[83,94,136,0],[91,73,128,0],[78,102,124,0],[53,97,127,0],[41,89,126,0],[48,81,127,0],[52,84,129,0],[50,78,135,0],[54,118,134,1],[37,122,130,0],[41,98,129,0],[40,97,126,0],[44,96,126,0],[53,82,121,0],[43,92,127,0],[50,77,152,0],[45,89,132,0],[71,42,141,0],[54,69,141,0],[73,36,142,0],[46,85,129,0],[51,83,128,0]]],["enzo",128,[3,4,3],[[46,47,128,0],[46,46,128,0],[44,45,128,0],[43,47,126,0],[43,46,126,0],[41,47,128,0],[41,50,129,0],[41,49,128,0],[58,42,127,0],[55,46,128,0],[63,49,126,0],[62,54,126,0],[53,48,127,0],[56,50,127,0],[53,45,127,0],[54,47,127,0],[52,50,130,0],[51,49,126,0],[48,44,128,0],[50,57,129,0],[49,56,126,0],[47,57,128,0],[45,58,127,0],[44,56,127,1],[53,56,89,0],[57,55,122,0],[54,53,128,-11],[45,48,128,-20],[47,41,128,-13],[53,46,128,-6],[52,53,98,1],[41,52,115,0],[43,52,128,0],[44,59,126,0],[50,61,130,0],[44,83,131,0],[50,82,128,0],[53,55,129,0],[47,49,127,0],[42,50,126,0],[45,52,129,0],[58,52,121,0],[59,63,123,0],[58,67,126,0],[51,103,122,0],[61,52,128,0],[48,50,131,0],[44,50,128,0],[44,49,129,0],[52,42,130,0],[57,40,130,0],[43,100,124,1],[42,92,121,1],[50,49,121,0],[48,38,125,1],[41,52,131,0],[59,52,116,0],[60,46,117,0],[52,57,115,0],[53,57,119,0],[55,60,114,0],[55,60,116,0],[53,50,123,0],[41,50,125,0]]],["rocco",128,[3,3,3],[[49,52,126,0],[47,49,129,0],[48,49,128,0],[48,49,128,0],[48,49,127,0],[49,48,127,0],[49,46,127,0],[49,46,128,0],[49,53,126,1],[67,56,124,0],[69,56,126,0],[67,56,126,0],[52,54,123,1],[52,56,123,0],[45,55,122,0],[47,50,123,0],[34,56,126,0],[47,54,127,0],[48,56,125,0],[46,51,126,2],[48,53,126,0],[49,51,126,1],[50,50,126,0],[38,54,125,0],[58,51,106,0],[60,58,131,0],[39,60,128,-7],[41,45,129,-31],[58,61,128,-4],[48,57,128,-4],[51,51,98,0],[48,50,126,0],[51,52,126,1],[64,57,124,1],[67,83,125,0],[67,92,126,0],[59,67,125,1],[53,75,124,0],[49,51,125,0],[50,47,126,0],[50,50,126,0],[63,51,123,0],[60,58,123,0],[54,89,123,0],[67,46,123,0],[61,58,124,0],[50,50,125,0],[48,48,126,0],[49,50,126,0],[46,43,128,1],[47,45,131,0],[74,56,119,0],[86,7,45,0],[57,44,131,1],[49,46,118,0],[49,48,125,0],[58,49,124,0],[49,57,119,0],[37,52,117,0],[44,50,127,0],[39,43,126,0],[40,60,124,0],[39,54,124,0],[47,50,124,0]]],["tenor",128,[3,4,4],[[52,54,127,0],[51,57,128,0],[51,56,128,0],[50,59,128,0],[51,56,129,0],[50,56,129,0],[46,59,128,0],[49,57,128,0],[46,65,130,0],[45,68,129,0],[51,65,129,0],[48,62,131,0],[48,63,127,0],[47,61,130,0],[46,60,132,0],[45,59,131,0],[48,63,131,0],[47,66,129,0],[45,66,130,0],[44,62,130,0],[51,52,133,0],[45,56,132,0],[46,59,130,0],[46,59,131,0],[69,52,109,0],[42,68,149,0],[62,55,128,-16],[63,58,128,-17],[52,64,128,-2],[51,56,128,8],[68,50,99,0],[47,58,132,0],[50,60,130,0],[53,65,127,0],[55,85,128,0],[59,99,130,0],[64,75,128,0],[52,91,127,0],[52,62,128,0],[45,58,129,0],[46,57,130,0],[49,60,132,0],[61,60,126,0],[54,86,128,0],[59,110,129,0],[52,68,124,0],[47,60,129,0],[46,60,130,0],[51,60,128,0],[51,44,127,0],[47,52,128,1],[47,53,126,0],[43,97,123,0],[42,79,123,0],[41,43,126,0],[46,58,126,0],[47,47,110,0],[46,46,110,0],[41,52,109,0],[50,53,112,0],[53,92,113,0],[48,85,113,0],[49,52,112,0],[48,47,112,0]]],["lin",128,[3,4,4],[[53,65,131,1],[80,67,130,1],[56,67,128,2],[50,69,130,1],[74,67,130,1],[53,67,131,1],[77,68,128,1],[56,68,129,1],[60,67,127,2],[73,67,123,2],[71,67,122,1],[80,66,124,1],[80,63,121,1],[76,63,120,1],[78,65,121,1],[79,67,121,1],[53,66,132,1],[49,64,122,2],[77,66,126,1],[56,67,128,1],[51,65,128,1],[82,67,127,1],[53,69,127,1],[71,68,128,1],[55,61,127,1],[78,82,154,1],[68,61,136,-9],[68,64,131,-19],[51,67,130,9],[75,70,130,19],[83,69,123,1],[73,63,128,1],[51,65,123,1],[55,62,121,1],[74,64,121,1],[84,85,119,1],[74,69,119,2],[70,65,121,1],[65,68,118,1],[73,66,122,0],[56,74,130,0],[79,53,109,0],[67,75,122,0],[92,72,120,0],[76,124,108,0],[59,115,116,1],[54,67,122,0],[55,73,125,1],[54,64,130,1],[50,68,131,1],[60,77,136,1],[80,74,134,1],[71,98,136,2],[75,70,134,1],[73,62,124,1],[68,60,132,1],[55,64,143,1],[83,51,143,1],[85,61,138,1],[89,68,140,2],[69,70,140,1],[68,49,143,1],[59,61,141,1],[58,61,141,1]]],["qiao",128,[4,4,3],[[41,48,128,0],[38,49,128,0],[40,48,130,0],[43,47,128,0],[42,47,128,0],[43,47,130,0],[41,48,129,0],[44,48,128,0],[48,47,124,0],[51,48,123,0],[47,55,123,0],[55,50,123,0],[55,48,122,0],[56,49,122,0],[54,48,120,0],[45,49,123,0],[41,44,126,0],[38,49,126,0],[41,42,123,0],[42,43,123,0],[43,45,126,0],[52,43,126,0],[48,45,125,0],[44,49,126,0],[50,40,96,0],[55,49,132,0],[48,37,128,-11],[47,33,128,-19],[48,52,128,-6],[42,49,128,-4],[50,37,99,0],[45,47,127,0],[44,47,124,0],[52,49,118,0],[46,67,124,0],[45,68,123,0],[50,70,123,0],[52,54,120,0],[46,48,122,0],[43,49,123,0],[43,49,130,0],[44,49,104,0],[59,42,123,0],[59,44,123,0],[64,64,125,0],[49,45,127,0],[47,53,123,0],[41,50,125,0],[53,45,143,0],[55,40,149,0],[61,62,153,0],[61,90,155,0],[54,37,151,0],[58,35,154,0],[55,27,149,0],[49,45,142,0],[47,37,166,0],[52,45,158,0],[44,45,156,0],[49,44,158,0],[46,41,159,0],[50,72,161,0],[51,47,159,0],[50,49,156,0]]],["bianca",128,[4,4,3],[[38,55,126,0],[38,57,126,0],[40,57,126,0],[43,55,128,0],[40,56,128,0],[41,56,130,1],[42,56,131,1],[42,55,130,1],[45,60,129,0],[48,63,128,1],[40,64,129,0],[45,66,126,0],[50,67,128,0],[51,67,128,0],[49,64,129,0],[46,65,126,0],[35,60,131,0],[34,61,130,0],[30,60,126,1],[30,65,123,0],[33,64,125,0],[33,66,127,1],[33,60,131,0],[37,66,126,0],[47,58,110,0],[43,59,140,0],[46,46,128,-19],[36,53,128,-27],[51,70,128,-8],[54,67,128,-1],[50,65,107,0],[41,56,124,0],[43,66,122,0],[49,61,125,0],[46,65,123,1],[47,75,126,0],[51,87,124,0],[44,65,125,1],[45,60,126,0],[40,58,124,0],[45,56,129,-1],[49,44,114,-1],[50,58,124,-1],[53,60,124,-1],[52,83,121,-1],[55,61,128,0],[46,57,126,0],[42,58,127,-1],[48,59,132,0],[46,44,135,0],[43,41,141,0],[35,109,140,0],[48,50,137,0],[39,71,132,0],[50,45,137,0],[44,56,136,0],[43,49,148,0],[40,47,155,1],[38,52,151,1],[41,50,156,0],[38,53,153,0],[38,49,154,0],[43,44,151,0],[43,55,155,0]]],["akari",128,[3,4,4],[[57,55,128,0],[51,58,128,0],[49,59,128,0],[48,60,127,0],[47,61,128,0],[48,59,128,0],[49,59,127,1],[48,60,128,0],[50,52,127,0],[50,51,126,0],[50,51,126,0],[52,53,127,0],[54,53,126,0],[53,52,124,0],[46,53,124,0],[45,54,124,0],[46,51,129,0],[49,51,131,0],[50,57,124,0],[56,52,120,0],[43,55,121,0],[44,52,120,0],[50,51,125,1],[51,53,128,0],[52,51,113,0],[55,57,134,0],[50,58,128,-7],[57,46,128,-24],[53,48,128,3],[50,46,128,-5],[55,51,96,0],[46,56,127,0],[50,56,124,0],[57,57,123,0],[51,81,122,0],[57,85,124,0],[49,71,121,0],[50,52,120,0],[52,54,123,0],[49,56,124,0],[58,60,128,1],[70,45,107,1],[64,53,122,0],[64,54,125,0],[65,78,116,0],[67,66,120,1],[62,58,120,0],[59,58,128,1],[51,54,132,0],[54,59,131,0],[69,33,138,1],[64,69,147,1],[49,93,134,0],[64,37,139,0],[61,47,135,0],[48,56,131,0],[50,63,180,0],[60,75,150,0],[64,58,160,0],[55,42,161,0],[57,64,155,0],[59,51,160,0],[51,57,171,0],[58,54,140,0]]],["goro",128,[3,4,3],[[61,55,129,0],[64,55,127,0],[59,56,125,0],[60,55,127,0],[62,53,129,0],[60,53,127,0],[56,52,128,0],[59,54,129,0],[62,64,121,1],[64,59,122,0],[61,61,121,0],[58,61,123,0],[58,66,124,0],[57,66,123,0],[62,62,122,0],[59,63,122,0],[60,57,131,0],[61,60,128,1],[55,54,130,1],[49,55,130,0],[49,58,130,1],[56,48,130,0],[61,53,130,0],[58,54,131,0],[64,55,122,1],[64,61,130,0],[35,52,128,12],[43,43,129,-26],[49,57,128,-15],[56,53,128,-7],[55,55,102,0],[58,54,130,1],[58,54,129,0],[62,68,126,0],[68,83,124,0],[69,83,127,0],[65,82,126,0],[64,55,126,0],[63,51,128,0],[61,55,130,0],[62,54,130,0],[71,40,94,0],[66,47,115,0],[63,50,144,0],[70,55,162,-1],[71,38,146,-1],[58,51,108,0],[57,53,125,-1],[56,54,135,0],[71,56,131,0],[46,46,149,1],[38,108,143,0],[73,53,137,0],[65,46,141,0],[56,52,135,0],[59,55,135,1],[56,57,157,0],[59,54,154,0],[61,53,153,0],[71,69,147,0],[62,58,157,0],[64,58,154,0],[61,57,149,0],[60,55,154,0]]],["ramiro",128,[4,4,3],[[40,56,129,0],[40,56,127,0],[40,57,127,0],[42,55,129,0],[40,55,128,0],[40,55,128,0],[40,55,129,0],[40,55,127,0],[42,55,130,0],[44,55,128,0],[46,57,129,0],[44,56,129,0],[54,57,128,0],[47,56,128,0],[45,54,130,0],[41,54,129,0],[42,63,128,0],[43,59,127,0],[47,76,128,0],[44,69,128,0],[45,63,129,0],[43,61,129,0],[44,63,128,0],[42,58,129,0],[58,54,104,0],[44,53,123,0],[48,51,128,8],[53,54,130,-20],[65,49,129,55],[44,58,128,-13],[56,62,90,36],[43,55,122,0],[38,58,123,0],[37,82,58,0],[51,87,119,1],[52,79,142,0],[48,128,119,1],[86,115,119,0],[72,79,117,0],[39,54,125,0],[42,56,131,1],[63,62,126,1],[56,58,128,1],[66,58,137,0],[61,63,100,1],[57,57,116,0],[55,54,125,1],[44,55,134,1],[40,53,131,0],[47,56,129,0],[48,58,131,1],[41,101,131,2],[45,53,132,1],[64,48,133,1],[47,68,127,2],[47,57,131,1],[39,43,132,0],[38,48,132,0],[37,45,126,0],[30,58,116,0],[42,70,130,0],[37,45,130,0],[36,50,125,0],[36,53,123,0]]],["nara",128,[3,4,3],[[42,45,128,0],[43,44,128,0],[44,43,128,0],[44,43,128,0],[44,43,128,0],[44,43,127,0],[43,44,129,0],[44,42,128,0],[61,46,122,0],[59,48,122,0],[59,49,122,0],[56,49,122,0],[55,49,122,0],[56,48,122,0],[57,45,124,0],[55,44,124,0],[44,56,128,0],[38,64,128,0],[38,60,128,0],[41,62,127,0],[37,57,124,0],[39,58,127,0],[37,58,127,0],[37,59,126,0],[57,43,90,0],[37,48,133,0],[50,43,128,-5],[43,45,128,-28],[53,64,128,-19],[56,52,128,-13],[47,57,93,0],[39,49,112,0],[47,45,128,0],[51,66,129,0],[51,78,128,0],[46,83,131,0],[56,72,126,0],[55,44,127,0],[49,50,127,0],[48,46,129,0],[49,48,126,0],[52,39,127,0],[58,50,125,0],[51,51,130,0],[50,87,127,0],[61,53,122,0],[53,47,122,0],[49,47,128,0],[49,47,130,0],[50,46,132,0],[54,32,130,0],[50,101,129,1],[47,37,118,0],[44,51,137,0],[49,46,126,0],[47,48,131,0],[31,31,132,0],[31,31,132,0],[29,38,132,0],[21,51,118,1],[30,53,130,1],[53,53,130,1],[44,43,120,0],[42,44,125,0]]],["breu",128,[3,3,4],[[45,46,129,0],[47,44,129,0],[45,45,129,0],[45,45,129,1],[44,47,129,0],[44,46,129,0],[44,47,128,1],[42,46,129,0],[50,43,128,1],[53,44,129,1],[55,46,127,1],[55,48,126,1],[54,45,124,1],[53,43,124,1],[55,45,128,1],[55,45,129,1],[43,51,125,1],[43,49,125,1],[44,47,124,1],[45,45,124,1],[45,47,125,1],[46,49,124,1],[47,49,124,1],[45,49,124,1],[53,50,110,1],[47,51,140,1],[44,49,129,18],[41,43,129,-28],[53,51,129,12],[51,46,129,11],[55,63,109,1],[45,46,128,1],[44,50,124,1],[52,56,119,1],[58,79,119,1],[50,108,120,1],[54,96,118,1],[52,73,118,1],[56,47,120,1],[43,48,122,0],[49,52,122,1],[50,96,122,1],[53,107,122,1],[59,114,122,1],[55,90,120,1],[53,77,121,1],[64,77,122,1],[50,47,122,1],[45,51,124,1],[48,37,124,1],[49,32,125,1],[49,86,127,1],[46,87,126,1],[46,39,125,1],[48,34,124,1],[40,49,122,1],[31,28,135,1],[38,32,134,0],[34,31,132,0],[31,54,113,0],[40,58,127,0],[43,42,126,0],[47,47,113,-1],[41,42,120,-1]]],["valter",128,[3,3,4],[[51,48,128,0],[50,49,128,0],[51,48,128,0],[51,48,128,0],[49,50,128,0],[50,49,128,0],[50,49,128,0],[48,52,128,0],[50,48,121,0],[49,50,121,0],[45,54,119,0],[48,53,119,0],[48,53,119,0],[48,53,119,0],[50,50,121,0],[45,47,119,0],[55,48,116,0],[53,48,117,0],[49,48,118,0],[44,48,118,0],[44,48,117,1],[52,48,117,0],[44,47,117,0],[54,47,116,0],[50,42,104,0],[52,48,127,0],[35,47,128,-18],[41,47,128,-23],[40,49,128,-14],[37,51,128,-5],[54,39,99,0],[44,51,121,0],[51,53,120,0],[58,52,117,0],[59,91,116,1],[59,85,116,0],[68,82,115,1],[57,48,116,0],[52,61,117,1],[47,52,120,0],[52,54,121,0],[72,52,115,0],[72,59,114,0],[67,103,114,0],[57,72,115,0],[37,37,118,0],[41,48,121,0],[42,52,120,0],[48,53,121,0],[43,39,121,1],[43,33,118,1],[40,86,119,0],[38,89,116,0],[34,99,124,1],[43,44,122,0],[46,53,121,0],[41,37,137,0],[42,44,135,0],[41,45,137,0],[43,41,133,0],[58,59,133,0],[44,39,128,0],[48,46,121,0],[48,47,119,0]]],["daigo",128,[3,4,3],[[65,63,129,0],[62,65,128,0],[62,64,128,0],[64,63,129,0],[63,64,128,0],[63,64,128,0],[62,64,128,0],[61,64,128,0],[65,68,136,0],[78,64,133,0],[68,64,131,0],[70,66,133,0],[60,62,133,0],[63,65,133,0],[66,66,132,0],[64,67,134,0],[50,66,131,0],[63,69,131,0],[63,66,131,0],[70,62,131,0],[59,68,131,0],[69,60,131,0],[58,56,133,0],[58,64,131,0],[70,58,100,0],[64,62,135,0],[57,55,128,13],[49,48,128,-6],[57,64,128,7],[60,65,128,-6],[84,65,101,0],[61,59,133,0],[64,61,134,0],[62,87,129,0],[65,84,133,0],[70,99,131,0],[68,78,131,0],[67,67,127,0],[66,64,133,0],[62,58,133,0],[63,62,132,0],[62,65,132,0],[70,61,132,0],[63,82,132,0],[61,95,132,0],[78,79,121,1],[46,64,134,1],[64,60,132,1],[68,61,134,0],[46,48,134,0],[58,45,132,1],[57,102,130,0],[42,92,131,0],[49,46,131,0],[52,45,131,0],[59,61,133,0],[57,51,144,0],[51,51,144,0],[52,52,141,0],[38,54,104,0],[76,69,132,0],[61,54,109,0],[57,52,111,0],[59,54,113,1]]],["kitsune",128,[3,3,3],[[53,61,129,0],[52,60,128,0],[52,58,128,0],[52,61,127,0],[53,61,127,0],[52,59,128,0],[53,59,130,0],[50,59,130,0],[55,60,120,0],[54,61,120,0],[56,59,119,0],[57,60,119,0],[57,61,120,0],[54,57,120,0],[55,58,120,0],[53,56,120,0],[51,64,121,0],[49,62,121,0],[51,56,119,1],[52,59,119,1],[52,56,120,0],[55,56,120,0],[51,61,120,0],[52,57,121,0],[58,61,108,0],[57,47,122,0],[50,56,128,-23],[52,57,128,-34],[55,73,128,-17],[48,61,128,-11],[54,56,109,0],[52,58,122,0],[52,60,117,0],[52,60,115,0],[56,87,120,0],[46,89,116,0],[45,68,116,0],[50,62,115,1],[50,59,115,0],[51,58,116,0],[54,61,121,0],[52,66,121,0],[57,76,123,0],[53,85,124,0],[51,80,122,0],[47,52,114,0],[52,57,122,1],[51,59,123,0],[54,62,118,0],[56,70,118,0],[43,49,118,0],[50,55,113,1],[82,53,106,1],[46,54,117,0],[53,54,118,0],[51,56,116,0],[39,40,137,0],[50,69,136,-1],[43,46,135,-1],[36,55,108,0],[42,41,134,-1],[50,72,130,0],[45,51,116,0],[47,56,119,-1]]],["shen",128,[3,3,4],[[62,61,129,0],[64,62,128,0],[62,64,129,0],[63,62,127,0],[61,63,129,0],[61,61,127,0],[64,62,127,0],[61,61,128,0],[64,64,128,0],[65,68,130,0],[67,65,127,0],[66,61,127,0],[66,65,129,0],[70,63,127,0],[67,65,127,0],[70,65,127,0],[64,64,130,0],[70,64,129,0],[64,65,128,0],[70,63,128,0],[72,64,129,0],[73,68,128,0],[75,65,128,0],[73,64,128,0],[70,56,118,0],[57,71,131,1],[44,53,128,11],[50,51,128,-13],[64,78,128,8],[55,64,128,5],[68,56,116,0],[64,58,124,0],[63,58,123,0],[52,83,126,0],[60,89,122,0],[59,111,122,1],[63,86,124,0],[57,63,122,0],[58,58,122,0],[63,60,122,0],[64,59,127,0],[54,71,123,0],[66,49,123,0],[42,87,120,0],[44,77,124,0],[50,45,125,0],[66,63,128,0],[62,60,127,0],[58,62,127,0],[59,58,125,0],[35,58,129,0],[54,64,127,0],[56,95,124,0],[38,46,122,1],[58,60,125,1],[64,58,124,0],[29,31,142,0],[30,58,135,1],[32,58,131,0],[27,58,114,0],[67,56,133,0],[40,45,127,1],[58,48,109,0],[58,48,113,1]]],["long",128,[3,4,3],[[56,61,128,0],[56,56,128,0],[56,62,128,0],[55,59,128,0],[54,60,127,0],[54,59,128,0],[53,60,127,0],[54,60,128,0],[55,62,130,0],[50,72,127,0],[55,63,128,0],[58,58,128,1],[56,62,127,0],[55,63,127,1],[56,63,129,0],[50,63,129,0],[52,56,130,0],[60,62,130,0],[52,54,130,0],[55,63,130,1],[54,65,130,0],[56,61,130,0],[55,62,130,0],[54,62,130,0],[57,51,107,0],[61,60,131,0],[51,43,128,-7],[53,42,128,-26],[54,36,128,-23],[55,69,128,-1],[62,53,106,0],[50,56,124,0],[52,60,130,0],[60,60,130,0],[55,88,130,0],[57,84,130,0],[57,74,130,0],[50,72,130,0],[52,63,130,0],[50,58,130,0],[56,62,132,-1],[50,45,126,0],[50,62,127,-1],[60,69,124,0],[71,73,123,-1],[53,85,121,-1],[52,55,122,0],[54,62,124,-1],[54,60,140,0],[62,66,140,0],[49,47,140,0],[66,84,141,0],[80,36,138,0],[59,53,141,0],[55,58,140,0],[53,61,140,0],[48,55,163,0],[58,59,157,0],[54,62,159,0],[58,67,159,0],[55,61,164,0],[54,64,165,0],[62,65,159,0],[57,62,154,0]]],["marco",128,[4,4,4],[[54,43,128,0],[56,45,130,0],[58,44,128,1],[52,43,129,1],[54,44,129,0],[53,42,129,1],[53,44,129,0],[54,44,128,0],[68,45,125,1],[68,46,126,0],[62,52,131,0],[62,53,130,0],[61,55,131,0],[66,51,127,1],[65,50,129,0],[72,44,124,1],[41,43,126,0],[42,47,126,0],[43,42,126,0],[44,43,126,0],[44,47,126,0],[43,54,126,0],[41,45,126,0],[43,44,126,0],[65,43,113,0],[52,54,148,0],[39,60,128,10],[52,51,128,-24],[40,51,128,2],[47,50,128,17],[58,45,105,0],[54,47,129,0],[56,46,126,0],[58,66,126,0],[61,90,126,0],[57,81,128,0],[59,89,126,0],[61,60,126,0],[58,43,126,0],[51,46,126,0],[48,55,130,0],[62,52,133,0],[56,59,133,0],[53,81,132,0],[39,96,133,1],[47,48,130,0],[32,73,133,0],[52,47,130,0],[54,46,128,0],[36,45,128,1],[34,44,125,0],[42,47,127,0],[37,109,125,0],[33,45,127,0],[40,48,126,0],[55,42,125,1],[42,41,137,1],[35,48,138,0],[40,39,138,-1],[37,45,126,0],[37,74,142,0],[51,60,129,1],[54,41,122,0],[54,42,118,1]]],["jana",128,[3,4,4],[[42,52,128,0],[42,52,129,0],[44,51,128,0],[45,51,128,0],[43,50,129,0],[44,53,128,0],[44,53,129,0],[43,53,128,0],[56,62,127,0],[50,60,126,0],[44,60,125,0],[51,64,125,0],[53,66,125,0],[50,64,125,1],[54,59,125,0],[54,58,125,0],[49,60,128,0],[48,62,128,0],[44,63,128,0],[54,64,128,0],[53,63,128,0],[49,57,128,0],[45,54,128,0],[50,55,127,1],[56,48,108,0],[53,46,153,0],[60,36,128,18],[61,36,128,-10],[55,54,128,9],[45,58,128,3],[51,54,99,0],[42,53,131,0],[43,55,129,0],[45,56,129,0],[49,71,129,1],[48,78,129,1],[46,78,129,0],[45,54,129,0],[44,54,129,0],[43,54,129,1],[56,59,127,1],[72,52,128,0],[62,44,127,1],[56,63,128,0],[48,85,126,0],[49,67,125,1],[54,59,126,0],[45,53,127,0],[45,57,128,1],[65,44,131,1],[61,42,131,0],[70,86,133,0],[61,108,105,0],[49,38,131,0],[64,41,130,0],[45,51,129,0],[43,41,142,0],[38,44,138,-1],[34,41,137,-1],[30,55,127,-1],[56,58,129,0],[42,67,112,0],[37,56,115,0],[38,49,115,0]]],["arthur",128,[3,3,3],[[63,95,131,1],[61,88,128,1],[59,83,126,1],[55,84,126,1],[58,83,131,1],[59,79,129,1],[62,79,127,1],[61,73,131,1],[62,81,132,1],[61,88,131,1],[63,79,130,1],[61,79,129,1],[64,79,129,1],[56,79,132,1],[55,74,133,1],[59,67,134,1],[62,88,133,1],[56,83,132,1],[56,75,131,1],[45,82,130,1],[49,81,129,1],[49,79,132,1],[49,79,132,1],[50,76,132,1],[71,79,104,1],[61,84,130,2],[34,92,129,-4],[48,78,129,-18],[55,79,129,5],[54,86,129,-3],[61,59,109,1],[54,69,128,2],[67,80,130,1],[60,84,130,1],[64,86,129,1],[64,151,129,1],[74,118,129,2],[58,83,122,1],[60,75,130,1],[57,64,128,1],[63,85,126,1],[77,49,145,1],[68,52,144,1],[61,111,129,1],[79,88,141,1],[46,79,128,1],[63,77,127,1],[56,65,134,1],[59,79,129,1],[62,77,125,1],[52,72,136,2],[52,112,141,1],[44,59,134,1],[47,69,133,2],[60,77,126,1],[58,66,134,1],[60,79,127,1],[64,79,127,1],[59,80,127,1],[60,76,127,1],[68,78,125,1],[60,81,126,1],[57,79,126,1],[58,71,125,1]]],["bento",128,[3,3,3],[[46,50,128,0],[46,51,128,1],[46,52,130,0],[46,51,127,0],[46,50,128,0],[46,51,129,0],[46,50,130,0],[46,50,128,0],[57,47,127,0],[56,54,129,0],[53,53,127,0],[50,51,129,0],[52,53,129,0],[50,55,130,1],[52,53,129,1],[51,53,130,0],[30,46,129,0],[29,59,128,0],[29,60,128,0],[27,57,127,0],[29,50,129,0],[29,47,126,0],[28,52,127,0],[27,38,129,0],[61,39,99,0],[59,43,144,0],[35,53,128,19],[34,48,128,-8],[50,61,128,16],[42,46,128,-1],[49,45,97,0],[47,53,130,0],[46,51,127,0],[46,57,124,0],[50,81,124,0],[59,92,126,0],[54,86,128,0],[46,62,124,0],[46,57,126,0],[43,52,128,0],[47,53,128,0],[47,67,127,0],[65,52,124,0],[55,96,129,0],[64,87,127,0],[65,53,128,0],[46,48,126,0],[44,51,130,0],[44,54,130,0],[44,50,128,0],[37,42,133,0],[38,122,127,0],[57,48,117,0],[43,54,129,1],[37,44,131,0],[44,53,131,0],[42,47,131,0],[45,46,130,0],[39,51,128,0],[39,53,124,-1],[43,47,127,0],[42,48,124,0],[42,50,117,0],[41,51,126,0]]],["yan",128,[3,4,4],[[62,54,129,0],[64,53,128,0],[64,53,128,0],[63,53,128,0],[66,53,128,0],[62,53,128,0],[64,53,128,0],[63,53,128,0],[63,49,124,0],[74,48,123,0],[70,48,123,0],[65,48,122,1],[70,51,123,0],[73,48,122,1],[72,48,122,1],[61,50,123,0],[65,51,123,0],[74,55,123,0],[74,53,122,1],[72,53,121,0],[67,53,123,0],[69,52,124,0],[68,51,124,0],[66,49,123,1],[79,53,108,0],[74,64,128,0],[70,57,128,7],[68,88,128,-8],[64,71,129,-1],[69,61,128,-3],[74,58,108,0],[64,66,137,0],[61,56,127,0],[80,67,123,0],[74,114,123,0],[74,117,126,0],[81,109,124,0],[64,60,123,0],[66,67,122,0],[62,56,126,0],[49,49,129,0],[56,52,122,-1],[53,54,123,-1],[62,53,123,0],[59,67,123,0],[61,67,118,0],[52,53,125,0],[49,50,129,-1],[61,68,136,0],[67,65,131,0],[66,61,136,1],[86,60,134,0],[57,129,137,0],[65,60,134,0],[59,71,133,0],[60,61,133,0],[66,82,182,1],[73,85,181,1],[71,83,181,1],[72,82,183,0],[75,86,184,1],[73,80,184,0],[74,89,177,0],[72,87,183,0]]],["eleanor",128,[4,4,4],[[66,49,128,0],[64,49,127,0],[64,50,128,0],[66,49,128,0],[67,48,128,0],[65,48,128,0],[66,47,128,0],[66,47,128,0],[65,54,126,0],[69,52,127,0],[65,55,128,0],[69,52,127,0],[69,53,127,0],[68,52,127,0],[69,52,127,0],[65,54,127,0],[69,46,127,1],[70,48,128,0],[72,49,127,1],[69,51,128,0],[69,50,128,0],[74,48,127,0],[68,48,128,1],[64,46,128,1],[59,51,104,0],[65,37,127,1],[66,48,128,-5],[55,62,129,-8],[56,59,128,-1],[65,48,128,-8],[51,57,83,0],[58,54,113,0],[66,49,126,0],[56,81,126,0],[55,72,126,0],[62,86,126,0],[64,87,126,0],[66,53,126,0],[66,49,126,0],[67,46,126,0],[66,52,129,0],[72,47,126,0],[81,48,128,1],[83,51,133,0],[55,116,130,0],[68,45,128,1],[69,53,127,0],[64,50,129,0],[62,48,125,0],[68,50,124,0],[62,44,140,0],[61,48,139,0],[58,90,130,0],[51,39,137,0],[61,46,124,0],[63,48,125,0],[75,48,124,0],[67,87,126,0],[73,51,129,0],[67,76,129,0],[50,44,133,0],[65,65,127,0],[71,47,126,1],[60,47,124,0]]],["tommy",128,[3,3,3],[[55,52,128,0],[53,52,129,0],[53,49,127,0],[55,50,126,1],[54,51,128,0],[54,51,128,0],[54,50,130,0],[51,49,128,0],[49,52,128,0],[56,55,129,1],[60,52,129,0],[64,48,130,0],[65,53,128,0],[65,51,129,0],[59,49,128,0],[54,48,132,0],[50,48,130,0],[50,49,131,0],[46,52,129,0],[53,52,128,0],[58,51,127,0],[45,51,130,0],[55,51,129,0],[46,48,128,0],[55,50,104,0],[52,48,132,0],[43,38,128,5],[42,50,128,-18],[48,51,128,-18],[50,42,128,5],[53,51,100,0],[49,50,126,0],[52,50,127,0],[60,54,124,0],[58,84,124,0],[54,92,125,0],[60,82,125,0],[60,54,124,0],[52,53,124,0],[51,50,126,0],[55,52,129,1],[73,65,130,0],[84,68,127,0],[83,95,131,0],[80,38,130,0],[71,53,131,0],[62,48,129,0],[54,51,133,0],[54,51,129,0],[62,47,129,0],[42,60,131,1],[55,103,130,0],[55,49,100,0],[39,35,130,0],[63,48,124,0],[54,48,129,1],[49,49,129,0],[49,48,131,0],[45,52,130,0],[48,51,130,0],[50,53,127,0],[51,52,128,0],[52,50,129,0],[52,49,130,0]]],["dex",128,[3,3,4],[[50,52,128,0],[50,52,128,0],[51,51,127,0],[49,51,128,0],[49,52,127,0],[52,53,128,0],[49,49,128,0],[45,51,128,0],[46,51,128,1],[53,57,128,1],[61,52,127,0],[62,52,127,0],[57,54,127,0],[59,57,127,0],[58,52,127,0],[49,49,127,1],[37,57,128,0],[35,62,128,0],[26,53,128,1],[35,58,129,0],[45,56,126,0],[50,56,127,1],[47,63,126,0],[46,49,128,0],[47,43,94,0],[50,48,129,0],[40,52,128,-13],[47,50,129,-30],[42,60,128,-5],[55,46,128,-19],[62,43,79,0],[49,48,124,0],[52,50,127,1],[52,54,129,0],[52,98,126,1],[60,92,124,0],[55,74,125,0],[55,49,126,0],[57,52,125,0],[48,51,129,0],[47,52,134,0],[60,50,134,0],[54,45,133,1],[60,80,132,0],[2,40,40,0],[50,43,134,1],[51,56,133,1],[47,52,135,1],[50,44,125,0],[38,42,124,0],[35,40,142,1],[32,61,138,0],[41,102,131,-1],[35,37,138,0],[35,35,135,-1],[51,45,130,0],[50,43,109,0],[45,41,110,1],[45,34,110,0],[43,44,107,0],[50,51,106,1],[41,43,108,0],[51,46,107,1],[48,42,108,1]]],["grey",128,[3,4,4],[[41,79,128,0],[40,80,127,0],[37,80,128,0],[39,79,127,1],[40,79,128,0],[39,79,128,0],[38,79,128,0],[39,79,128,0],[55,81,128,0],[54,83,129,0],[53,78,129,0],[54,78,129,0],[57,77,129,0],[55,83,129,1],[52,79,126,0],[48,77,126,0],[40,78,131,0],[44,75,131,0],[49,78,129,0],[44,83,128,0],[35,80,129,0],[41,79,129,0],[43,78,130,0],[42,78,129,0],[56,81,112,0],[46,80,143,0],[43,78,128,-3],[44,89,128,-11],[47,77,128,5],[55,78,128,8],[63,73,104,0],[42,79,128,0],[42,80,128,0],[54,85,128,0],[55,135,128,0],[72,126,127,0],[62,108,125,0],[55,77,127,0],[41,78,126,0],[43,77,127,0],[48,86,128,-1],[63,67,118,0],[67,82,121,0],[75,121,127,-1],[79,160,119,0],[93,145,112,-1],[63,81,126,-1],[49,86,129,-1],[42,79,128,0],[46,79,127,0],[41,62,135,0],[48,63,133,1],[45,96,125,0],[35,79,124,1],[39,74,126,0],[40,79,127,1],[53,69,140,0],[42,65,136,0],[40,31,140,0],[40,41,142,0],[49,40,139,0],[44,77,136,0],[42,75,135,0],[45,75,135,0]]],["morgan",128,[4,4,4],[[41,64,129,0],[41,65,128,0],[42,63,128,0],[41,62,128,0],[40,60,127,0],[42,59,129,0],[40,61,129,0],[43,61,126,0],[49,62,126,0],[45,65,124,0],[51,64,124,0],[50,62,125,0],[49,62,124,0],[46,62,123,1],[51,61,124,0],[51,61,124,0],[37,61,131,0],[43,63,129,0],[40,62,129,0],[37,65,129,0],[38,65,129,0],[38,63,128,0],[36,65,129,0],[37,63,131,0],[49,56,118,0],[49,53,135,0],[46,68,128,-7],[43,62,128,-19],[48,65,128,-3],[44,66,128,4],[51,54,117,0],[42,60,125,0],[42,59,120,0],[58,62,119,0],[63,80,117,0],[63,82,119,0],[61,83,119,0],[56,65,120,0],[49,59,119,0],[44,58,120,0],[45,59,131,1],[63,60,128,1],[57,49,132,0],[43,37,133,0],[51,96,133,0],[53,44,134,0],[49,59,136,0],[46,60,132,0],[53,58,126,0],[56,55,128,0],[50,51,134,-1],[47,42,135,0],[66,112,133,1],[51,45,137,0],[50,51,131,-1],[55,57,129,0],[57,53,152,0],[58,54,152,0],[56,52,160,0],[56,58,171,0],[57,56,177,0],[59,57,172,0],[52,63,152,0],[48,58,141,0]]],["alfie",128,[4,4,4],[[52,46,129,0],[51,45,128,0],[51,47,127,0],[45,49,128,0],[50,48,129,0],[51,51,129,0],[51,51,128,0],[51,50,128,0],[54,50,131,1],[58,48,127,0],[63,42,128,0],[63,46,130,1],[65,42,130,1],[71,39,122,0],[62,49,126,0],[61,47,126,0],[43,51,130,0],[44,39,129,0],[54,45,129,0],[54,42,128,1],[41,38,126,0],[47,37,125,0],[38,36,125,0],[50,41,127,0],[48,43,116,0],[33,36,134,0],[48,28,129,3],[33,40,128,-20],[36,38,128,-24],[38,40,128,8],[58,46,110,0],[54,46,135,0],[60,53,130,0],[66,51,117,1],[71,68,116,0],[69,110,116,0],[67,150,111,0],[70,74,110,0],[62,55,120,1],[62,53,126,1],[56,52,130,1],[56,69,130,1],[73,68,131,0],[99,86,116,0],[81,137,104,1],[83,121,111,0],[66,59,125,0],[63,57,126,0],[48,43,129,1],[38,42,130,1],[41,27,133,1],[46,38,133,1],[41,87,126,0],[47,29,129,0],[41,30,129,1],[46,47,126,1],[48,53,125,0],[45,54,96,0],[55,46,91,0],[51,46,91,0],[51,52,91,0],[43,61,99,0],[51,57,106,0],[51,50,122,0]]],["regolith",128,[3,3,4],[[50,56,124,0],[51,56,128,0],[49,55,128,0],[51,54,128,2],[49,53,129,0],[49,54,128,0],[49,55,129,0],[49,53,129,0],[58,57,131,0],[67,56,131,0],[61,50,129,0],[57,56,130,0],[63,61,130,0],[52,54,130,0],[43,52,130,0],[56,53,132,0],[46,62,133,0],[50,60,131,0],[46,62,131,0],[52,59,129,0],[46,58,126,0],[51,59,129,0],[47,45,129,0],[44,51,131,0],[56,54,98,0],[44,63,120,0],[46,53,128,-4],[56,58,128,-24],[48,67,128,-6],[63,48,128,-9],[58,74,88,2],[50,53,128,2],[50,52,129,0],[55,62,131,0],[58,78,132,0],[56,95,135,0],[64,91,133,0],[62,65,132,0],[52,56,130,0],[51,52,129,0],[55,54,133,2],[65,63,121,0],[68,52,133,0],[65,101,128,0],[86,77,122,2],[44,52,126,0],[61,55,131,0],[51,50,132,2],[63,49,79,0],[61,55,96,0],[51,59,122,0],[54,43,132,0],[52,113,130,0],[45,51,116,2],[52,56,120,0],[49,56,124,0],[72,50,85,2],[64,47,88,0],[55,57,94,2],[55,63,108,0],[54,60,120,0],[44,63,128,0],[48,54,126,0],[49,56,129,0]]],["clockwork",128,[4,4,4],[[45,48,127,0],[45,49,127,0],[45,48,127,0],[42,50,128,0],[41,52,128,0],[43,53,128,0],[44,50,128,0],[42,51,128,0],[49,55,130,0],[52,51,132,0],[51,53,129,0],[53,52,130,0],[51,58,130,1],[49,52,130,0],[48,48,130,0],[53,46,129,0],[35,40,134,0],[38,44,134,0],[35,61,131,0],[33,63,131,0],[30,59,129,0],[29,64,128,0],[30,65,128,0],[41,46,128,0],[44,51,109,0],[38,62,138,0],[35,40,128,-7],[39,37,128,-8],[47,53,128,11],[47,51,128,-6],[47,48,108,0],[45,47,129,1],[42,46,129,0],[51,57,126,0],[49,79,126,0],[57,72,127,0],[54,78,125,0],[64,56,127,0],[46,50,128,0],[38,50,126,0],[53,46,130,0],[48,53,114,0],[53,48,124,0],[49,52,126,0],[53,67,123,0],[51,62,123,0],[48,56,122,0],[50,49,125,1],[43,46,135,1],[49,39,145,0],[31,52,145,0],[40,42,149,0],[33,108,141,0],[35,43,148,0],[38,46,147,0],[42,47,131,0],[39,49,136,0],[43,51,137,0],[43,52,140,0],[41,55,138,0],[41,57,138,1],[42,53,137,0],[42,51,136,0],[43,49,138,0]]],["bram",128,[4,4,3],[[50,57,128,0],[50,59,128,1],[41,59,128,1],[48,59,129,0],[48,60,128,1],[47,60,129,0],[49,59,127,0],[48,58,128,0],[56,65,125,0],[61,67,124,0],[63,67,125,0],[60,66,125,0],[71,67,125,0],[59,67,124,0],[61,67,125,0],[51,63,125,0],[47,64,124,0],[40,72,125,0],[46,73,121,0],[46,73,121,1],[47,60,122,0],[44,62,122,0],[45,61,122,0],[43,59,122,0],[61,55,112,0],[63,59,136,0],[43,43,128,-10],[41,47,128,-26],[46,43,128,-20],[38,58,128,-7],[63,65,113,0],[49,58,128,0],[48,57,127,0],[54,58,124,0],[65,121,119,1],[71,91,123,0],[69,93,125,0],[61,69,126,0],[55,68,125,0],[49,56,127,0],[66,67,136,1],[90,69,128,1],[81,75,132,0],[88,71,132,1],[84,137,120,0],[90,91,120,1],[73,65,119,1],[60,61,119,1],[49,57,129,1],[70,61,128,0],[42,46,137,0],[38,71,135,0],[85,52,132,0],[36,60,135,0],[31,57,127,0],[50,56,128,0],[66,58,106,0],[61,59,123,0],[64,53,147,0],[41,82,175,0],[51,74,175,0],[51,66,156,0],[48,58,134,0],[50,57,128,0]]],["selene",128,[3,4,3],[[53,55,128,0],[54,55,128,0],[55,54,128,0],[52,55,129,0],[54,54,128,0],[54,55,128,0],[55,55,126,0],[55,52,126,0],[50,65,129,0],[51,65,129,0],[49,67,129,0],[47,66,131,0],[51,63,130,0],[51,66,130,0],[53,59,129,0],[50,65,129,0],[52,63,131,0],[45,53,134,0],[47,55,132,0],[44,57,133,0],[45,64,132,0],[43,60,134,0],[43,60,133,0],[50,60,132,0],[58,67,125,1],[50,57,142,0],[47,60,128,-8],[66,53,128,-20],[54,65,128,-6],[59,63,128,14],[63,58,116,0],[55,57,127,1],[51,62,129,1],[49,76,127,0],[62,95,127,0],[63,107,127,0],[50,95,127,1],[51,56,128,0],[55,62,128,0],[53,62,130,1],[56,53,128,0],[74,43,116,0],[63,48,128,0],[52,69,116,1],[49,91,121,1],[58,81,119,0],[59,45,117,0],[56,52,128,1],[53,67,134,0],[55,69,132,0],[64,56,135,0],[43,128,137,0],[46,73,137,0],[50,66,136,0],[49,53,136,0],[50,55,134,0],[55,66,137,0],[53,63,137,0],[55,60,137,0],[53,63,138,0],[51,63,139,0],[53,62,136,0],[55,62,134,0],[54,63,136,0]]],["umbriel",128,[3,4,4],[[44,54,128,0],[48,55,127,0],[48,53,128,0],[49,53,128,0],[49,52,128,0],[49,53,128,0],[49,53,128,0],[50,54,128,0],[55,63,127,0],[55,61,126,0],[55,61,127,0],[55,61,127,0],[56,62,127,0],[56,60,127,0],[58,63,127,0],[56,65,127,0],[54,62,125,0],[55,63,125,0],[54,64,124,0],[54,64,124,0],[55,63,124,0],[53,62,123,0],[53,61,123,0],[52,60,123,0],[58,57,114,0],[56,52,146,0],[49,61,128,10],[54,67,129,-3],[62,52,128,6],[63,55,128,5],[63,57,103,0],[50,59,125,0],[51,60,128,0],[54,57,129,0],[56,69,128,0],[60,94,123,0],[60,87,124,0],[55,55,129,0],[52,62,128,0],[51,59,128,0],[52,67,127,0],[66,64,129,0],[79,54,133,0],[77,64,129,0],[64,100,125,0],[72,60,126,0],[58,59,128,0],[53,59,128,0],[55,67,127,0],[61,60,128,0],[66,70,133,1],[60,47,133,1],[63,126,128,-1],[59,55,131,0],[61,65,129,0],[57,71,129,0],[43,61,116,0],[44,55,116,0],[41,70,115,0],[43,60,111,1],[39,77,112,0],[29,62,115,0],[37,54,115,0],[47,57,116,0]]],["apogeu",128,[3,4,4],[[51,48,128,0],[50,46,129,0],[50,47,128,0],[48,48,129,0],[52,48,126,0],[52,44,128,0],[50,46,128,0],[48,48,129,0],[53,46,128,0],[57,50,124,0],[59,54,124,0],[62,49,124,0],[61,49,123,0],[50,52,120,0],[47,51,124,0],[44,44,124,0],[52,45,131,0],[53,48,128,1],[62,48,127,0],[62,48,124,0],[52,50,129,0],[63,47,128,0],[51,47,127,0],[52,46,131,1],[58,42,112,0],[51,49,130,0],[44,47,128,-7],[39,49,128,-24],[44,49,128,3],[47,63,128,-1],[53,48,105,0],[47,46,118,0],[52,48,128,0],[51,58,126,0],[59,60,130,0],[61,73,129,0],[57,58,130,0],[55,48,126,0],[53,49,124,1],[44,48,128,0],[59,54,130,-1],[83,59,128,-1],[80,63,129,0],[88,83,123,0],[83,97,128,0],[93,96,125,0],[70,61,128,0],[59,56,126,0],[52,46,134,0],[61,48,125,0],[77,34,131,0],[63,51,139,0],[83,61,129,0],[54,34,133,0],[54,48,131,0],[56,46,134,0],[52,48,137,0],[60,48,115,0],[53,64,165,0],[47,91,157,0],[57,47,114,0],[60,66,105,0],[54,56,144,0],[51,48,138,0]]],["rosa",128,[3,3,3],[[57,48,129,1],[58,50,129,1],[59,49,129,1],[58,47,129,1],[59,50,129,1],[58,49,129,1],[58,50,129,1],[58,48,129,1],[59,50,126,1],[58,52,126,1],[57,52,126,1],[59,52,126,1],[55,52,126,2],[53,54,126,2],[50,55,126,2],[51,52,124,2],[46,47,128,1],[59,47,126,1],[56,51,127,0],[57,54,127,1],[52,52,127,1],[51,56,127,1],[55,52,127,1],[49,50,129,1],[48,54,108,0],[46,58,123,0],[47,59,129,-17],[55,48,129,-22],[49,74,129,-17],[52,56,129,-17],[57,52,89,1],[46,52,113,1],[48,54,121,1],[46,68,120,1],[51,81,118,1],[78,83,121,1],[75,68,64,3],[45,83,119,2],[57,75,120,1],[77,59,121,1],[51,61,121,1],[63,72,121,1],[59,83,120,1],[67,144,127,2],[59,24,87,2],[53,106,118,1],[55,67,120,1],[54,50,121,1],[57,47,128,1],[54,45,132,0],[68,43,127,0],[71,111,132,1],[91,23,132,1],[102,9,47,2],[59,42,129,1],[57,49,126,1],[53,47,101,1],[52,40,113,1],[52,48,117,1],[52,53,122,0],[50,57,128,1],[51,55,131,1],[52,55,128,1],[56,50,124,1]]],["davi",128,[3,4,4],[[49,40,129,0],[48,40,129,0],[47,41,128,0],[46,41,129,0],[47,41,128,1],[45,41,128,1],[47,41,128,1],[47,40,128,1],[51,46,120,0],[60,44,117,0],[60,43,117,0],[61,45,117,1],[51,43,118,0],[52,43,118,0],[58,44,117,0],[52,42,116,0],[52,40,124,0],[33,55,121,0],[33,61,119,0],[40,57,120,0],[50,51,119,0],[37,58,119,0],[33,54,120,0],[44,47,121,0],[50,46,93,0],[50,57,125,0],[56,36,128,-17],[37,43,128,-28],[51,44,128,-12],[60,41,128,1],[52,41,105,0],[46,39,126,0],[40,69,119,0],[47,64,117,0],[43,70,117,0],[58,82,119,0],[43,66,113,0],[64,74,108,0],[59,80,112,0],[43,43,119,0],[50,40,127,0],[52,42,128,0],[44,30,131,0],[72,54,129,0],[49,88,127,0],[48,74,129,0],[38,27,129,-1],[51,40,129,0],[48,41,121,0],[43,58,126,0],[28,40,126,0],[44,36,126,0],[42,85,190,0],[48,43,192,25],[36,31,124,1],[43,45,122,0],[32,46,98,0],[23,56,92,0],[33,39,90,0],[28,33,95,0],[33,36,93,0],[25,46,93,0],[35,53,92,0],[42,43,95,0]]],["voltx",128,[4,4,3],[[56,53,128,0],[56,51,128,0],[57,52,128,0],[57,52,128,0],[51,52,128,0],[53,48,128,0],[55,50,129,0],[53,47,128,0],[59,56,132,0],[62,51,130,1],[67,50,128,0],[69,51,124,0],[69,51,126,0],[51,49,126,1],[56,51,127,0],[57,52,128,0],[56,46,132,0],[45,48,132,0],[48,48,130,0],[48,53,128,0],[51,45,126,0],[51,52,127,0],[59,51,129,0],[57,51,128,0],[59,44,84,0],[57,61,143,0],[50,41,128,5],[40,45,128,-32],[44,43,128,-19],[68,49,128,15],[70,44,102,0],[55,47,131,0],[51,47,128,0],[58,61,130,1],[56,79,129,0],[56,95,127,0],[58,97,127,0],[59,57,127,0],[57,48,128,0],[54,47,128,0],[66,55,137,1],[95,56,124,0],[91,63,138,-1],[93,72,137,1],[93,83,124,-1],[93,88,124,-1],[84,57,119,1],[60,56,119,1],[60,48,140,1],[41,52,159,0],[59,46,159,0],[52,93,141,1],[95,69,154,0],[34,57,158,0],[45,42,159,1],[59,43,146,0],[61,49,151,0],[68,47,143,0],[72,42,140,0],[67,47,132,1],[73,43,146,0],[62,50,140,1],[67,53,145,0],[63,45,155,0]]],["homer",128,[3,4,3],[[52,50,129,0],[52,55,128,0],[50,51,127,0],[52,54,128,0],[53,51,128,0],[51,52,128,0],[51,51,128,0],[49,50,128,0],[56,48,129,0],[58,50,128,0],[53,42,129,0],[53,42,129,0],[54,41,126,0],[55,38,126,0],[53,35,127,1],[56,39,128,0],[51,52,127,0],[51,54,129,0],[46,41,128,0],[50,40,128,0],[50,39,128,0],[50,39,128,0],[52,39,128,0],[54,47,128,0],[58,40,127,0],[41,47,147,0],[44,37,134,-20],[41,42,129,-23],[50,67,128,-6],[55,60,128,5],[49,60,107,0],[55,53,136,0],[57,53,124,0],[59,62,127,0],[56,61,134,0],[60,85,129,0],[67,68,124,0],[75,70,127,0],[52,65,123,0],[53,51,124,0],[56,53,130,-1],[52,55,131,-1],[51,66,133,-1],[63,62,106,-1],[64,100,117,0],[76,97,98,-1],[56,57,134,-1],[55,56,127,-1],[54,53,129,0],[58,40,140,0],[74,47,142,0],[70,100,145,0],[44,70,122,0],[85,42,122,0],[39,37,139,0],[54,47,134,0],[61,53,170,0],[66,55,165,0],[73,52,174,0],[61,54,173,0],[68,54,172,0],[61,55,151,0],[61,54,147,0],[58,47,164,0]]],["dusty",128,[4,3,3],[[51,52,128,0],[51,51,128,0],[50,52,128,0],[50,52,127,0],[50,53,132,0],[48,51,130,0],[51,52,127,0],[49,53,129,0],[50,57,129,0],[50,61,127,0],[51,59,127,1],[51,56,127,0],[50,60,129,0],[48,60,130,0],[50,58,128,0],[48,58,129,0],[48,56,129,0],[46,52,129,0],[46,54,129,0],[44,57,123,0],[47,58,127,0],[44,50,126,0],[45,55,128,0],[46,54,127,0],[69,47,89,1],[53,73,127,0],[63,52,128,-11],[63,60,128,-29],[68,70,128,64],[53,54,128,-8],[83,49,87,0],[50,53,125,0],[52,51,125,0],[60,65,121,0],[58,60,121,0],[13,18,46,1],[54,164,122,0],[115,89,120,0],[68,90,117,0],[51,52,125,0],[49,55,125,0],[73,67,126,1],[62,111,120,0],[65,82,121,1],[87,35,42,0],[62,97,123,1],[72,61,123,0],[51,52,125,0],[52,51,129,0],[63,44,132,0],[57,59,132,0],[48,58,126,0],[85,5,45,0],[81,80,118,0],[49,42,130,0],[51,52,129,0],[50,55,127,1],[46,50,131,0],[51,55,126,0],[56,64,127,0],[60,59,130,0],[64,63,130,0],[58,53,129,0],[51,55,127,0]]],["ren",128,[3,4,4],[[50,53,129,0],[50,54,128,1],[49,54,129,0],[49,54,128,0],[50,54,128,0],[50,55,128,1],[50,55,127,1],[51,55,127,1],[52,64,131,0],[49,61,131,0],[48,61,133,0],[51,63,129,1],[51,67,131,0],[52,63,132,0],[50,61,132,0],[50,62,131,0],[50,66,131,0],[47,67,131,0],[50,67,131,0],[49,67,129,0],[48,68,130,0],[48,68,130,0],[49,68,130,1],[49,59,130,1],[72,52,112,0],[55,60,138,1],[61,54,128,16],[48,53,128,-17],[58,70,128,8],[57,64,128,5],[61,54,112,0],[52,56,133,0],[53,63,130,0],[59,63,127,0],[61,96,130,0],[60,90,130,0],[57,79,130,0],[58,65,130,0],[55,59,131,0],[52,56,130,0],[48,59,131,1],[57,49,117,1],[46,61,127,1],[44,73,143,0],[47,87,125,0],[56,97,121,0],[58,50,128,0],[45,54,125,0],[52,59,128,1],[60,42,131,0],[56,40,134,0],[60,98,133,0],[46,101,134,0],[60,43,128,0],[48,41,134,0],[52,54,128,1],[60,56,128,0],[60,60,127,0],[59,60,128,0],[57,62,126,0],[61,58,127,0],[53,63,128,0],[53,63,127,1],[51,58,128,0]]],["mei",128,[4,3,4],[[46,52,127,1],[50,47,127,1],[48,48,129,1],[50,47,129,1],[48,47,129,1],[45,48,129,2],[45,47,129,1],[47,47,129,1],[50,56,129,1],[58,47,131,1],[58,52,130,1],[55,46,130,1],[60,46,129,1],[57,51,130,1],[57,45,131,1],[53,48,129,1],[31,58,126,1],[29,55,127,1],[32,50,126,1],[33,54,128,1],[31,55,126,1],[30,59,126,1],[30,55,125,1],[32,55,128,1],[58,54,106,1],[45,61,146,1],[35,59,129,22],[44,44,129,-17],[62,64,129,13],[54,60,129,14],[57,53,99,1],[45,52,129,1],[48,52,127,1],[54,66,125,1],[44,78,124,1],[64,71,127,1],[81,77,130,1],[56,83,127,1],[53,48,124,1],[49,51,125,0],[48,54,128,1],[52,99,125,1],[53,102,124,1],[58,78,129,2],[76,70,129,2],[57,71,129,1],[50,55,126,1],[49,48,126,1],[43,51,120,1],[45,47,121,1],[50,85,130,1],[46,85,118,1],[46,93,122,1],[48,52,116,1],[36,57,114,1],[45,47,116,1],[45,53,109,0],[59,49,111,1],[47,55,111,1],[63,49,113,1],[66,58,108,1],[40,48,111,1],[39,57,112,1],[45,50,107,1]]],["bo",128,[3,3,4],[[73,62,128,0],[76,60,126,0],[71,60,128,0],[72,59,127,0],[69,63,128,0],[67,61,129,0],[75,58,126,0],[67,56,128,1],[81,63,126,0],[80,65,125,0],[76,68,126,0],[75,61,125,0],[76,64,127,0],[76,66,126,0],[71,63,126,0],[68,59,126,0],[59,68,127,0],[62,68,127,0],[67,54,124,0],[64,68,124,0],[64,69,123,0],[65,59,126,0],[64,54,126,0],[65,60,126,0],[85,72,111,0],[64,83,156,0],[60,59,128,-3],[59,70,129,3],[70,76,128,18],[74,62,128,3],[73,66,104,0],[57,66,136,0],[68,61,123,0],[69,70,124,0],[69,112,127,0],[73,121,129,0],[71,69,129,0],[54,61,123,0],[61,61,121,0],[62,59,123,0],[74,65,131,0],[71,63,147,0],[54,71,145,1],[72,120,130,0],[75,104,123,0],[61,78,123,0],[60,63,134,0],[67,59,121,1],[64,62,126,1],[56,65,127,0],[69,65,120,0],[62,88,127,0],[46,93,117,1],[65,54,120,1],[59,60,121,1],[64,63,126,0],[69,62,123,0],[77,66,113,0],[57,70,119,0],[57,68,128,0],[54,84,130,0],[70,58,125,0],[61,56,127,0],[67,58,118,0]]],["belladonna",128,[3,4,3],[[39,104,129,2],[40,106,129,2],[40,96,129,1],[42,98,128,1],[44,97,129,1],[47,107,129,1],[41,94,130,1],[49,82,129,1],[41,98,131,2],[46,99,132,1],[45,111,128,1],[45,97,129,1],[48,98,129,1],[43,106,128,2],[44,90,129,1],[47,82,130,1],[39,92,129,1],[49,107,130,1],[45,102,127,1],[44,104,129,1],[44,97,130,1],[47,108,129,1],[45,105,130,1],[41,87,131,1],[45,98,110,1],[51,100,146,2],[47,93,129,-18],[50,99,129,-28],[51,91,129,-4],[61,109,131,-4],[63,84,116,1],[43,82,127,1],[41,92,129,1],[52,100,129,1],[50,117,130,1],[65,123,131,1],[59,100,127,1],[46,108,128,1],[47,94,130,1],[50,83,129,1],[40,107,133,0],[44,58,114,0],[42,60,107,1],[43,101,111,0],[66,151,106,0],[61,117,103,0],[51,47,111,0],[37,89,124,1],[43,93,130,2],[50,83,134,1],[53,102,138,1],[72,116,130,1],[70,83,135,1],[42,80,135,2],[41,77,136,1],[43,85,133,1],[34,72,141,0],[31,55,137,1],[32,30,172,0],[35,78,116,0],[65,67,121,0],[37,70,123,1],[48,94,110,0],[39,87,115,1]]],["nonna",128,[4,4,4],[[42,76,129,0],[42,75,130,0],[41,73,138,0],[43,75,125,0],[42,77,127,0],[44,76,125,0],[42,76,133,0],[43,78,128,-1],[51,92,132,0],[56,94,129,0],[56,94,128,0],[54,91,121,0],[53,96,121,0],[53,79,119,0],[60,93,126,0],[50,82,119,0],[49,86,136,0],[50,80,138,0],[54,87,133,0],[58,85,131,0],[58,83,132,0],[55,95,130,0],[53,89,130,0],[49,83,127,0],[56,83,110,0],[45,84,133,0],[46,93,128,8],[50,73,129,-12],[47,83,129,2],[67,81,128,34],[56,89,116,0],[48,83,123,0],[49,88,126,0],[51,92,119,0],[52,93,125,0],[65,63,122,0],[86,90,127,0],[65,92,124,1],[54,87,118,1],[47,86,120,0],[46,88,128,1],[52,70,150,0],[55,87,127,0],[72,72,136,0],[68,93,134,0],[57,84,130,0],[46,78,122,0],[63,83,124,0],[51,92,126,0],[46,85,130,0],[51,77,131,0],[55,79,127,0],[62,100,120,0],[48,83,125,0],[52,82,125,0],[47,88,128,0],[53,64,108,0],[57,85,115,0],[52,63,115,0],[57,65,114,0],[50,81,117,0],[53,93,117,0],[50,87,117,0],[50,85,116,0]]]],kinds=['idle','walk','backwalk','jump','light','heavy','kick','intro'];
 const sequences=Object.freeze(Object.fromEntries(kinds.map((kind,row)=>[kind,Object.freeze(Array.from({length:8},(_,i)=>row*8+i))]))),actors=new Map();
 const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,Number(v)||0)),mod=(v,n)=>((v%n)+n)%n,idOf=value=>typeof value==='string'?value:value?.id;
 for(const [id,standingHeight,contacts,frames]of rows){const bounds=frames.map(([left,right,top,bottom])=>Object.freeze({left,right,top,bottom}));actors.set(id,Object.freeze({id,standingHeight,sequences,contactFrames:Object.freeze({light:contacts[0],heavy:contacts[1],kick:contacts[2]}),frames:Object.freeze(bounds),restUnion:Object.freeze(Object.fromEntries(['left','right','top','bottom'].map(key=>[key,Math.max(...bounds.slice(0,24).map(b=>b[key]))])))}));}
 function get(value){return actors.get(idOf(value))||null;}
 function contactIndex(def,kind){return def.id==='kitsune'&&kind==='kick'?4:def.contactFrames?.[kind]===4?4:3;}
 function sampleFrame(value,pose='idle',time=0,attack=null,options={}){
  const def=typeof value==='object'&&value?.sequences?value:get(value);if(!def)return null;
  const seq=def.sequences,at=(kind,n,phase)=>({authored:true,motion:false,walk:['walk','backwalk'].includes(kind),index:seq[kind][Math.max(0,Math.min(seq[kind].length-1,n))],kind,phase:phase||kind,contactMirror:phase==='contact'&&def.id==='kitsune'&&kind==='kick'});
  if(Number.isInteger(options.hitstopFrame)&&options.hitstopFrame>=0&&options.hitstopFrame<64)return{authored:true,motion:false,walk:false,index:options.hitstopFrame,kind:kinds[Math.floor(options.hitstopFrame/8)],phase:'hitstop',contactMirror:!!options.hitstopMirror};
  if(options.authoredSequence&&seq[options.authoredSequence])return at(options.authoredSequence,Math.min(7,Math.floor(clamp(options.sequenceProgress)*8)));
  if(Number.isInteger(options.techniqueFrame)){const kinds=['light','light','heavy','heavy','kick','kick','idle','idle'],kind=kinds[options.techniqueFrame]||'idle',contact=def.contactFrames?.[kind]===4?4:3;return at(kind,kind==='idle'?0:options.techniqueFrame%2?contact:1,'cinematic');}
  const strike=global.BrasaMoveTiming?.sample(attack);
  if(strike){const hit=def.contactFrames?.[strike.kind]===4?4:3,progress=clamp(strike.progress);return at(strike.kind,strike.phase==='contact'?contactIndex(def,strike.kind):strike.phase==='anticipation'?Math.min(hit-1,Math.floor(progress*hit)):Math.min(7,hit+1+Math.floor(progress*(7-hit))),strike.phase);}
  if(attack){const kick=['kick','airKick','sweep'].includes(pose)||attack.kind==='kick',kind=kick?'kick':['heavy','airHeavy','uppercut','special','grab','defenseStrike'].includes(pose)||attack.special||attack.type==='throw'?'heavy':'light';
   const t=Math.max(0,Number(attack.time)||0),start=Math.max(.001,Number(attack.startup)||.1),active=Math.max(.001,Number(attack.active)||.1),recovery=Math.max(.001,Number(attack.recovery)||.2);if(attack.type==='counter'&&!attack.triggered)return at('idle',0,'guard');
   const contact=def.contactFrames?.[kind]===4?4:3,n=t<start?Math.min(contact-1,Math.floor(t/start*contact)):t<start+active?contactIndex(def,kind):Math.min(7,contact+1+Math.floor((t-start-active)/recovery*(7-contact)));return at(kind,n,t<start?'anticipation':t<start+active?'contact':'recover');}
  const m=options.motion||{},jp=m.jumpPhase;if(typeof jp==='number')return at('jump',Math.min(7,Math.floor(clamp(jp)*8)),jp);
  if(['takeoff','rise','apex','fall','land'].includes(jp)&&['jump','land','idle','guard','walk','backwalk'].includes(pose)){const n=jp==='takeoff'?1:jp==='rise'?2:jp==='apex'?3:jp==='fall'?(m.verticalSpeed< -220?5:4):m.landingProgress>.58?7:6;return at('jump',n,jp);}
  if(pose==='jump')return at('jump',3,'apex');
  if(['walk','backwalk','run'].includes(pose)){const kind=pose==='backwalk'?'backwalk':'walk',stride=kind==='backwalk'?96:112,phase=Number.isFinite(options.walkPhase)?options.walkPhase:Number.isFinite(options.walkDistance)?options.walkDistance/stride:time/(kind==='walk'?.56:.64);return at(kind,Math.floor(mod(phase,1)*8));}
  if(['crouch','lowLight','sweep'].includes(pose))return at('jump',0,'crouch');if(['hurt','thrown','dazed','ko','lose'].includes(pose))return at('jump',6,pose);
  if(['light','heavy','kick','special','grab','uppercut','airLight','airHeavy','airKick','defenseStrike'].includes(pose))return at(pose.toLowerCase().includes('kick')?'kick':pose==='light'?'light':'heavy',4,pose);
  return at('idle',['idle','win'].includes(pose)?Math.floor(mod(time,1)*8):0,pose);
 }
 function bounds(value,pose='idle',time=0,attack=null,options={}){const def=get(value),frame=sampleFrame(value,pose,time,attack,options);if(!def||!frame)return null;const b=def.frames[frame.index];return frame.contactMirror?{left:b.right,right:b.left,top:b.top,bottom:b.bottom}:b;}
 function normalContact(value,kind){const def=get(value);if(!def||!['light','heavy','kick'].includes(kind))return null;const index=def.sequences[kind][contactIndex(def,kind)],contactMirror=def.id==='kitsune'&&kind==='kick',b=def.frames[index],right=contactMirror?b.left:b.right,left=contactMirror?b.right:b.left;return{index,contactMirror,left,right,forwardExtent:right,top:b.top,bottom:b.bottom};}
 function contactOffset(attack){const amount=Math.max(0,Number(attack?.visualContactOffset)||0);if(!amount)return 0;const t=Math.max(0,Number(attack.time)||0),start=Math.max(.001,Number(attack.startup)||.1),active=Math.max(.001,Number(attack.active)||.1),recovery=Math.max(.001,Number(attack.recovery)||.2),strike=global.BrasaMoveTiming?.sample(attack),phase=strike?.phase||(t<start?'anticipation':t<start+active?'contact':'recover'),progress=clamp(strike?.progress??(t<start?t/start:t<start+active?(t-start)/active:(t-start-active)/recovery));return amount*(phase==='contact'?1:phase==='anticipation'?Math.pow(clamp((progress-.55)/.45),2):Math.pow(1-progress,2));}
 global.BrasaSpriteGeometry=Object.freeze({get,sampleFrame,bounds,normalContact,contactOffset,alphaThreshold:48});
})(typeof window!=='undefined'?window:globalThis);
