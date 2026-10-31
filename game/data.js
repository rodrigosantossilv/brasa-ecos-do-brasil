/* BRASA0.10 — original character and arena catalog. */
(function(global){global.BRASA_DATA={
  "fighters": [
    {
      "id": "bento",
      "name": "Bento Brasa",
      "title": "O Cangaceiro Amaldiçoado",
      "origin": "Sertão de Pernambuco",
      "state": "PE",
      "region": "Nordeste",
      "archetype": "Pressão terrestre",
      "color": "#9f653c",
      "accent": "#ff763a",
      "skin": "#b9764e",
      "hair": "#2b211c",
      "description": "Chapéu de couro com estrela rachada, lenço vermelho, gibão gasto e botas de poeira. O braço esquerdo exibe fissuras de brasa. Sua silhueta combina ombros largos, contorno escuro e uma postura baixa e firme.",
      "personality": "Orgulhoso, econômico nas palavras e protetor de quem não consegue se defender. A dureza esconde o medo de se tornar a presença que o salvou.",
      "story": "Depois de uma emboscada, Bento aceitou o pacto de uma presença enterrada sob a terra seca. Regressou com fogo sob a pele e procura quem o traiu, enquanto impede que o pacto cobre a vida de sua comunidade.",
      "inspiration": "Cangaço, vestuário de couro sertanejo, literatura de cordel e causos de pactos. É um personagem inventado, sem representar uma figura histórica específica.",
      "style": "Golpes pesados, rasteiras longas e fogo que percorre o chão. Avança devagar e encurrala com pressão terrestre; sua recuperação longa oferece aberturas para saltos e contra-ataques.",
      "specials": [
        {
          "name": "Sol Rachado",
          "description": "Abre uma fissura de brasa longa que atinge apenas o rival no chão; saltos escapam e a recuperação é lenta."
        },
        {
          "name": "Passo de Cinza",
          "description": "Avança com uma cotovelada e recebe armadura breve durante o início. Agarrões vencem a proteção."
        },
        {
          "name": "Ferro em Brasa",
          "description": "Soco ascendente curto que lança o alvo e alcança saltos baixos; uma defesa deixa Bento exposto."
        }
      ],
      "stats": {
        "power": 5,
        "speed": 2,
        "reach": 3,
        "defense": 4
      },
      "stage": "sertao",
      "attackStyle": "cangaco",
      "defenseName": "Guarda do Gibão",
      "finisher": {
        "name": "Cerco da Brasa",
        "line": "O sertão nunca luta sozinho.",
        "kind": "cangaco"
      },
      "country": "BR",
      "nationality": "Brasileira",
      "originalStage": "sertao",
      "locked": false,
      "secret": false,
      "intro": "O sertão não chega sozinho.",
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
      }
    },
    {
      "id": "ramiro",
      "name": "Ramiro Ferro",
      "title": "O Gaúcho do Inverno",
      "origin": "Campanha do Rio Grande do Sul",
      "state": "RS",
      "region": "Sul",
      "archetype": "Gelo, terreno e agarrão",
      "color": "#47779a",
      "accent": "#bdefff",
      "skin": "#d39970",
      "hair": "#37312e",
      "description": "Bombacha prata, botas altas, lenço branco e poncho azul de bordas cobertas por geada. Cabelos escuros grisalhos nas têmporas e luvas de couro desenham uma silhueta larga. Cristais de gelo acompanham as boleadeiras e o vapor da respiração anuncia seus ataques.",
      "personality": "Tem humor seco, fala pausada e uma paciência que termina de repente. Trata promessas como compromissos, mesmo quando precisa cumpri-las sozinho.",
      "story": "O irmão desapareceu numa geada fora de época que cobriu as porteiras do pampa por dentro. Ao seguir as pegadas, Ramiro encontrou as boleadeiras da família presas a um coração de gelo. Agora atravessa as estâncias atrás do frio que leva as pessoas sem deixar sangue nem despedida.",
      "inspiration": "Paisagem do pampa, vestuário campeiro, vento minuano e causos de estância. A geada que guarda memórias e o poder de congelar são invenções do universo de BRASA.",
      "style": "Controla a aproximação com uma boleadeira de gelo e espinhos atrasados no chão. O congelamento abre uma oportunidade curta, seguido de resistência ao novo gelo. De perto usa um agarrão que troca os lados; saltos e pressão durante as preparações exploram sua mobilidade modesta.",
      "specials": [
        {
          "name": "Boleadeira de Geada",
          "description": "Lança um núcleo de gelo à altura do tronco. O acerto congela por 0,42 s; o projétil pode ser defendido ou saltado e não congela através da guarda."
        },
        {
          "name": "Espinhos da Estância",
          "description": "Planta cristais com atraso perto do rival, até 245 de distância. Só uma formação fica armada; saltos escapam e o contato terrestre congela por 0,55 s."
        },
        {
          "name": "Pampa Fechado",
          "description": "Agarrão de comando que troca os lados e prende o alvo numa crosta de gelo por 0,70 s. Falha contra rivais no ar ou agachados; não renova um congelamento já ativo."
        }
      ],
      "stats": {
        "power": 4,
        "speed": 2,
        "reach": 5,
        "defense": 4
      },
      "stage": "pampa",
      "attackStyle": "ice",
      "defenseName": "Parede de Geada",
      "finisher": {
        "name": "Inverno do Pampa",
        "line": "Até a saudade aprende a esperar o degelo.",
        "kind": "ice"
      },
      "country": "BR",
      "nationality": "Brasileira",
      "originalStage": "pampa",
      "locked": false,
      "secret": false,
      "intro": "O minuano trouxe a conta.",
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
      }
    },
    {
      "id": "jana",
      "name": "Jana Faísca",
      "title": "A Capoeirista do Relâmpago",
      "origin": "Salvador, Bahia",
      "state": "BA",
      "region": "Nordeste",
      "archetype": "Esquiva e contra-ataque",
      "color": "#e8d9a4",
      "accent": "#f8d548",
      "skin": "#8e4e32",
      "hair": "#242126",
      "description": "Tranças presas, roupa esportiva branca e amarela, tênis leves e faixas nos punhos. Pequenos pontos de luz marcam o arco dos pés. A ginga mantém uma silhueta aberta e reconhecível.",
      "personality": "Brincalhona, solidária e corajosa. Converte tensão em humor, mas não aceita que o bairro pague pelas ambições de gente poderosa.",
      "story": "Eletricista e capoeirista, Jana recebeu uma descarga ao desligar a máquina que roubava energia do bairro. Seus passos passaram a guardar eletricidade; ela procura o responsável pelos apagões e pelo aparelho.",
      "inspiration": "Capoeira, trabalho urbano e convivência nos largos de Salvador. A eletricidade é uma invenção narrativa e não representa prática religiosa.",
      "style": "Ginga, esquivas baixas, chutes giratórios e respostas rápidas. Favorece aproximações em ângulo e leitura do adversário; tem pouco alcance parado e sofre ao errar uma sequência.",
      "specials": [
        {
          "name": "Volta do Mundo",
          "description": "Avança girando em três contatos eletrificados. Cada contato pode ser defendido e a saída do giro é vulnerável."
        },
        {
          "name": "Negativa de Luz",
          "description": "Baixa a ginga e arma uma resposta: um golpe frontal comum na janela ativa provoca a rebatida elétrica. Sem ataque rival, Jana apenas conclui o movimento; rasteiras e agarrões vencem a leitura."
        },
        {
          "name": "Faísca de Roda",
          "description": "Chute rápido de avanço que encurta a distância em um contato; não atravessa ataques ou projéteis sem sofrer dano."
        }
      ],
      "stats": {
        "power": 3,
        "speed": 5,
        "reach": 2,
        "defense": 3
      },
      "stage": "pelourinho",
      "attackStyle": "electric",
      "defenseName": "Negativa da Ginga",
      "finisher": {
        "name": "Roda de Mil Faíscas",
        "line": "A luz voltou pro bairro.",
        "kind": "electric"
      },
      "country": "BR",
      "nationality": "Brasileira",
      "originalStage": "pelourinho",
      "locked": false,
      "secret": false,
      "intro": "O bairro inteiro está ouvindo.",
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
      }
    },
    {
      "id": "caua",
      "name": "Cauã Rubro",
      "title": "O Guardião ao Contrário",
      "origin": "Floresta do Amazonas",
      "state": "AM",
      "region": "Norte",
      "archetype": "Fintas e armadilhas",
      "color": "#548047",
      "accent": "#ff793f",
      "skin": "#ac6944",
      "hair": "#f16a32",
      "description": "Pequeno guardião de pés voltados para trás, cabelo em chamas e marcas de casca no corpo. Faixas de fibras e folhas formam uma roupa inventada. Seu cabelo funciona como a principal leitura de direção.",
      "personality": "Desconfiado, atento e provocador. Primeiro desorienta quem invade a mata; enfrenta sem hesitar quem ameaça seus habitantes.",
      "story": "Rastros interrompidos e clareiras silenciosas revelam uma força que faz pessoas e animais desaparecerem. Cauã abandona sua trilha habitual para perseguir algo que aprendeu a caminhar sem deixar pegadas.",
      "inspiration": "Releitura ficcional do Curupira e de narrativas de proteção da floresta. O Amazonas é a residência desta versão, sem afirmar origem exclusiva da lenda nem representar um povo indígena específico.",
      "style": "Trocas de direção, falsas partidas e raízes que limitam o avanço. Exige preparação para produzir vantagem; é frágil quando o rival consegue pressioná-lo de perto.",
      "specials": [
        {
          "name": "Trilha Perdida",
          "description": "Deixa um clarão no ponto de partida e surge às costas do rival. Depois da preparação, a pancada de raiz prende os pés; a mudança de lado não impede que Cauã seja interrompido."
        },
        {
          "name": "Raiz Acordada",
          "description": "Planta uma raiz atrasada perto do rival, até uma distância limitada. Só uma raiz fica armada por vez e saltos passam sobre ela."
        },
        {
          "name": "Rastro ao Contrário",
          "description": "Desliza para trás olhando o rival e solta um rastro baixo de brasa no sentido oposto ao recuo. O rastro lento dá um contato; Cauã continua vulnerável durante a saída."
        }
      ],
      "stats": {
        "power": 2,
        "speed": 5,
        "reach": 3,
        "defense": 2
      },
      "stage": "igarape",
      "attackStyle": "roots",
      "defenseName": "Casca Guardiã",
      "finisher": {
        "name": "O Caminho Te Esqueceu",
        "line": "A mata fecha o rastro que você abriu.",
        "kind": "roots"
      },
      "country": "BR",
      "nationality": "Brasileira",
      "originalStage": "mata",
      "locked": false,
      "secret": false,
      "intro": "Quem abre trilha também deve saber voltar.",
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
      }
    },
    {
      "id": "nara",
      "name": "Nara do Fundo",
      "title": "A Voz do Rio",
      "origin": "Margens de rio no Pará",
      "state": "PA",
      "region": "Norte",
      "archetype": "Projéteis e espaço",
      "color": "#287d85",
      "accent": "#95e9d6",
      "skin": "#a96d4f",
      "hair": "#202938",
      "description": "Cabelos longos e escuros, roupa verde-azulada com barras em ondas e escamas luminosas nos braços. Sua sombra assume forma aquática durante os especiais; a postura permanece serena e vertical.",
      "personality": "Serena ao falar e implacável ao proteger o rio. Observa antes de agir e considera cada promessa uma corrente que une duas pessoas.",
      "story": "Um veneno sobrenatural altera as águas e apaga a memória dos peixes antigos. Nara sobe à superfície para rastrear sua origem, seguindo recipientes vazios que chegam aos portos durante a madrugada.",
      "inspiration": "Lendas de Iara e encantados dos rios, reinterpretadas livremente. O Pará é a origem narrativa desta personagem; essas tradições não se limitam a um único estado.",
      "style": "Mantém distância com água, ondas curtas e bolhas lentas. Combina trajetórias para conduzir o rival, mas precisa de espaço para preparar ataques e tem defesa física limitada.",
      "specials": [
        {
          "name": "Espelho do Rio",
          "description": "Dispara uma onda de água em linha reta. A trajetória visível permite defender ou saltar."
        },
        {
          "name": "Abraço da Correnteza",
          "description": "Uma espiral de água próxima lança o rival; alcança saltos baixos e deixa Nara exposta ao errar."
        },
        {
          "name": "Bolha de Remanso",
          "description": "Uma bolha lenta avança e imobiliza o deslocamento por pouco tempo ao acertar. Só uma bolha fica ativa por vez."
        }
      ],
      "stats": {
        "power": 3,
        "speed": 3,
        "reach": 5,
        "defense": 2
      },
      "stage": "igarape",
      "attackStyle": "water",
      "defenseName": "Manto de Água",
      "finisher": {
        "name": "Nome no Fundo",
        "line": "O rio devolveu o que você tomou.",
        "kind": "water"
      },
      "country": "BR",
      "nationality": "Brasileira",
      "originalStage": "igarape",
      "locked": false,
      "secret": false,
      "intro": "O rio ouviu seu nome.",
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
      }
    },
    {
      "id": "tiao",
      "name": "Tião Redemoinho",
      "title": "O Dono do Atalho",
      "origin": "Estradas rurais do Paraná",
      "state": "PR",
      "region": "Sul",
      "archetype": "Mobilidade e troca de lado",
      "color": "#945034",
      "accent": "#ec493c",
      "skin": "#6e3d2a",
      "hair": "#242026",
      "description": "Jovem negro de uma perna só, gorro vermelho comprido, colete e pulseiras de cobre. Equilibra-se com naturalidade; fitas de vento sustentam os deslocamentos e mantêm a silhueta clara.",
      "personality": "Irreverente, curioso e estrategista. Gosta de pregar peças, mas se irrita quando alguém confunde sua brincadeira com crueldade.",
      "story": "Tião roubou uma chave que abre atalhos entre o mundo humano e o das assombrações. Perseguido pelos dois lados, usa as passagens para descobrir por que todas as portas começaram a levar ao mesmo casarão.",
      "inspiration": "Releitura do Saci e de causos transmitidos por todo o Brasil. O Paraná é a moradia desta versão ficcional, sem reivindicar exclusividade regional da lenda.",
      "style": "Saltos curtos, mudanças de lado e fintas de vento. Conquista oportunidades com movimento, mas seus ataques individuais causam pouco dano e teletransportes previsíveis podem ser punidos.",
      "specials": [
        {
          "name": "Sumiu, Achou!",
          "description": "Surge no ar perto do rival e desce com uma pancada de vento que lança o alvo. A chegada tem preparação visível."
        },
        {
          "name": "Gorro de Rajada",
          "description": "Lança uma rajada curta à altura do tronco; a distância de viagem é menor que a dos projéteis de Nara."
        },
        {
          "name": "Atalho Torto",
          "description": "Gasta 15 de energia para recuar depressa e deixar uma rajada baixa. Sem energia, o comando não é executado."
        }
      ],
      "stats": {
        "power": 2,
        "speed": 5,
        "reach": 2,
        "defense": 2
      },
      "stage": "igarape",
      "attackStyle": "wind",
      "defenseName": "Vento de Esquiva",
      "finisher": {
        "name": "A Saída Era Ontem",
        "line": "Quem corre atrás de mim chega antes de sair.",
        "kind": "wind"
      },
      "country": "BR",
      "nationality": "Brasileira",
      "originalStage": "atalho",
      "locked": false,
      "secret": false,
      "intro": "Se me seguir, chega ontem.",
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
      }
    },
    {
      "id": "breu",
      "name": "Dona Breu",
      "title": "A Costureira dos Pesadelos",
      "origin": "São Luís, Maranhão",
      "state": "MA",
      "region": "Nordeste",
      "archetype": "Invocação e preparação",
      "color": "#735187",
      "accent": "#d2a4ea",
      "skin": "#b48769",
      "hair": "#c8c1b3",
      "description": "Senhora alta e curvada, vestido roxo de remendos discretos, óculos redondos e cabelo preso. Uma sombra alongada move-se por conta própria e a tesoura de costura surge apenas como ferramenta cênica.",
      "personality": "Fala com delicadeza, oferece conselhos e lembra detalhes que ninguém contou. Sua gentileza inquietante contrasta com a violência de seus pesadelos.",
      "story": "Costurava fantasias até aprender a prender pesadelos no tecido. Quando os sonhos aprisionados começaram a escapar, Dona Breu reconheceu um ponto que jamais usara e saiu atrás da mão que desfez seu trabalho.",
      "inspiration": "Causos de assombração, costura artesanal e atmosfera de casarões antigos. A ligação com São Luís é uma escolha narrativa e não identifica uma figura tradicional específica.",
      "style": "Instala fios, convoca pequenos bonecos e força decisões com ataques atrasados. É perigosa com tempo para preparar o terreno; o rival pode interromper as invocações ao pressionar de perto.",
      "specials": [
        {
          "name": "Ponto Cego",
          "description": "Arma um fio de sombra com atraso perto do rival, dentro do alcance. Só um fio fica ativo; o contato prende os pés."
        },
        {
          "name": "Hora de Dormir",
          "description": "Garras de sombra fecham um arco à frente, com alcance médio e preparação lenta."
        },
        {
          "name": "Retalho Vivo",
          "description": "Um boneco de sombra avança como projétil lento, dá um contato e desaparece. Só um retalho fica ativo por vez."
        }
      ],
      "stats": {
        "power": 3,
        "speed": 1,
        "reach": 5,
        "defense": 3
      },
      "stage": "igarape",
      "attackStyle": "shadow",
      "defenseName": "Véu de Retalhos",
      "finisher": {
        "name": "Último Ponto",
        "line": "Agora durma. Eu cuido da bainha.",
        "kind": "shadow"
      },
      "country": "BR",
      "nationality": "Brasileira",
      "originalStage": "atelie",
      "locked": false,
      "secret": false,
      "intro": "Sempre falta o último ponto.",
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
      }
    },
    {
      "id": "damiao",
      "name": "Damião Sete-Luas",
      "title": "O Ferreiro Lobisomem",
      "origin": "Interior de Minas Gerais",
      "state": "MG",
      "region": "Sudeste",
      "archetype": "Agarrões e transformação",
      "color": "#74513e",
      "accent": "#d5cda8",
      "skin": "#b37a54",
      "hair": "#9c9d98",
      "description": "Homem grande, avental de couro, camisa de mangas arregaçadas e cabelos grisalhos. Um braço parcialmente transformado exibe pelo cinza, com mão humana ainda visível; as unhas se alongam na fúria.",
      "personality": "Gentil e cuidadoso com objetos frágeis. Teme ferir quem ama, por isso tenta preservar a calma mesmo quando a maldição reage à dor.",
      "story": "Um ataque numa estrada da serra transmitiu a maldição que Damião tenta controlar na ferraria. Ele procura a criatura que o marcou e forja pequenos amuletos na esperança de reconhecer o próprio nome durante a transformação.",
      "inspiration": "Histórias brasileiras de lobisomem, ofícios de ferreiro e paisagens serranas mineiras. A regra das sete luas pertence ao universo inventado do jogo.",
      "style": "Socos pesados e agarrões próximos, com transformação temporária planejada. Tem grande dano e defesa, mas precisa vencer a distância; ataques longos podem mantê-lo afastado.",
      "specials": [
        {
          "name": "Sétima Lua",
          "description": "A fúria lança uma investida e mantém armadura temporária. Damião ainda sofre dano e pode ser agarrado."
        },
        {
          "name": "Abraço da Bigorna",
          "description": "Agarrão próximo de dano alto. Falha contra alvos no ar ou agachados e tem recuperação longa."
        },
        {
          "name": "Uivo da Forja",
          "description": "Um uivo de curto alcance empurra com força. A preparação longa permite interromper antes da explosão."
        }
      ],
      "stats": {
        "power": 5,
        "speed": 1,
        "reach": 2,
        "defense": 5
      },
      "stage": "pampa",
      "attackStyle": "beast",
      "defenseName": "Braço da Bigorna",
      "finisher": {
        "name": "A Bigorna da Sétima Lua",
        "line": "Meu nome ainda é Damião.",
        "kind": "beast"
      },
      "country": "BR",
      "nationality": "Brasileira",
      "originalStage": "ferraria",
      "locked": false,
      "secret": false,
      "intro": "Meu nome ainda é Damião.",
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
      }
    },
    {
      "id": "lia",
      "name": "Lia do Viaduto",
      "title": "A Entregadora Fantasma",
      "origin": "São Paulo, São Paulo",
      "state": "SP",
      "region": "Sudeste",
      "archetype": "Avanço veloz",
      "color": "#315e73",
      "accent": "#82deef",
      "skin": "#bb8568",
      "hair": "#352a3c",
      "description": "Jaqueta refletiva, capacete rachado e mochila de entregas com névoa azul escapando pelo zíper. Tênis gastos e faixas luminosas nas mangas ajudam a ler suas arrancadas; nenhuma marca comercial aparece.",
      "personality": "Sarcástica, persistente e sempre reclamando da demora dos outros. Por trás da pressa, guarda lembranças de pessoas que talvez já tenham esquecido seu rosto.",
      "story": "Lia desapareceu levando uma encomenda sem remetente e voltou como assombração. Acredita que concluir a entrega devolverá sua vida, mas o endereço reaparece em bairros diferentes a cada madrugada.",
      "inspiration": "Vida de entregadores urbanos, chuva sob viadutos e lendas contemporâneas de passageiros e estradas assombradas.",
      "style": "Arrancadas, sequências curtas e avanços espectrais. Encosta depressa, mas tem pouco dano por golpe e recuperação arriscada ao atravessar o adversário sem acertar.",
      "specials": [
        {
          "name": "Última Entrega",
          "description": "Arrancada espectral muito veloz que pode atravessar o rival. A proteção breve cobre a partida, mas o fim do trajeto é punível."
        },
        {
          "name": "Corredor Azul",
          "description": "Ombrada de avanço mais curta e controlada, sem invulnerabilidade e sem atravessar o oponente."
        },
        {
          "name": "Capacete de Volta",
          "description": "Uma pancada próxima acompanha o recuo. O alcance curto exige acertar a saída da distância do rival."
        }
      ],
      "stats": {
        "power": 2,
        "speed": 5,
        "reach": 3,
        "defense": 2
      },
      "stage": "vila",
      "attackStyle": "ghost",
      "defenseName": "Faixa Espectral",
      "finisher": {
        "name": "Entrega Concluída",
        "line": "Assina aqui. Eu tenho outra vida pra encontrar.",
        "kind": "ghost"
      },
      "country": "BR",
      "nationality": "Brasileira",
      "originalStage": "viaduto",
      "locked": false,
      "secret": false,
      "intro": "A entrega tem destinatário.",
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
      }
    },
    {
      "id": "iris",
      "name": "Íris Ferrugem",
      "title": "A Sucateira de Aço",
      "origin": "Belo Horizonte, Minas Gerais",
      "state": "MG",
      "region": "Sudeste",
      "archetype": "Preparação e alcance",
      "color": "#cf743d",
      "accent": "#79c6bc",
      "skin": "#945c40",
      "hair": "#342930",
      "description": "Macacão laranja, óculos de proteção e enormes luvas mecânicas feitas de peças incompatíveis. Cabelos presos, botas reforçadas e tubos de resfriamento desenham uma silhueta pesada e assimétrica.",
      "personality": "Inventiva, teimosa e afetuosa com suas máquinas. Gosta de explicar como tudo funciona, especialmente enquanto demonstra que o rival não devia ter quebrado aquilo.",
      "story": "Íris construiu as manoplas para proteger sua oficina de uma empresa que procura metal sobrenatural sob o terreno. Descobre que o material responde ao som de seu trabalho e atrai visitas que não constam em registro algum.",
      "inspiration": "Oficinas, reaproveitamento de peças, trabalho industrial e paisagem urbana de Belo Horizonte. A empresa e o metal são inteiramente fictícios.",
      "style": "Manoplas mecânicas combinam um pistão de alcance longo, um agarrão de pressão e uma descarga curta de vapor. Os golpes têm preparação fixa e recuperação longa: Íris precisa medir a distância antes de soltar a potência e sofre contra rivais que chegam durante as pausas.",
      "specials": [
        {
          "name": "Pistão de Sucata",
          "description": "Um pistão de alcance muito longo dispara após preparação demorada. O brilho anuncia o ataque; não exige manter botão pressionado."
        },
        {
          "name": "Prensa Hidráulica",
          "description": "As manoplas agarram o alvo próximo e o comprimem. O intervalo de uso e a recuperação limitam a repetição."
        },
        {
          "name": "Sangria de Vapor",
          "description": "Uma descarga de vapor próxima afasta o rival. Há preparação e recuperação longa, sem proteção automática."
        }
      ],
      "stats": {
        "power": 4,
        "speed": 1,
        "reach": 5,
        "defense": 5
      },
      "stage": "vila",
      "attackStyle": "steam",
      "defenseName": "Guarda de Pistão",
      "finisher": {
        "name": "Prensa de Corpo Fechado",
        "line": "Sucata ainda sabe dar a volta por cima.",
        "kind": "steam"
      },
      "country": "BR",
      "nationality": "Brasileira",
      "originalStage": "ferrovelho",
      "locked": false,
      "secret": false,
      "intro": "Sucata ainda dá a volta por cima.",
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
      }
    },
    {
      "id": "rosa",
      "name": "Rosa Mandacaru",
      "title": "A Vaqueira dos Espinhos",
      "origin": "Interior da Bahia",
      "state": "BA",
      "region": "Nordeste",
      "archetype": "Meia distância e terreno",
      "color": "#8a6844",
      "accent": "#bfdd7c",
      "skin": "#a8704c",
      "hair": "#3f2c27",
      "description": "Chapéu de couro, gibão curto, lenço verde e flores bordadas na roupa. Um braço ganhou a textura do mandacaru; o chicote vegetal dobra a silhueta sem esconder a mão que o controla.",
      "personality": "Prática, firme e desconfiada de promessas fáceis. Valoriza decisões coletivas e protege a água da comunidade com a mesma atenção que dedica às pessoas.",
      "story": "Durante uma seca, Rosa encontrou uma nascente encantada e recebeu parte de seu poder. Agora protege a água de sua comunidade de compradores insistentes e de uma sombra que bebe durante a noite.",
      "inspiration": "Caatinga, trabalho de vaqueiros e vaqueiras, cisternas comunitárias e flores do mandacaru. Sua nascente encantada é ficcional.",
      "style": "Chicote vegetal a média distância e espinhos que delimitam o chão. Controla uma faixa do campo com precisão, mas sofre quando o rival entra no espaço entre seu corpo e a ponta do chicote.",
      "specials": [
        {
          "name": "Flor da Seca",
          "description": "Dispara três espinhos em alturas diferentes e pequenos intervalos. Cada espinho pode acertar uma vez."
        },
        {
          "name": "Cerca Viva",
          "description": "Espinhos nascem com atraso perto do rival dentro de um alcance limitado; só uma cerca pode permanecer armada."
        },
        {
          "name": "Laçada Verde",
          "description": "O chicote alcança a meia distância e traz o alvo atingido para perto. Pode ser defendido como um golpe comum."
        }
      ],
      "stats": {
        "power": 3,
        "speed": 3,
        "reach": 5,
        "defense": 3
      },
      "stage": "sertao",
      "attackStyle": "thorns",
      "defenseName": "Cerca do Gibão",
      "finisher": {
        "name": "Flor da Última Água",
        "line": "Esta água fica com a comunidade.",
        "kind": "thorns"
      },
      "country": "BR",
      "nationality": "Brasileira",
      "originalStage": "mandacaru",
      "locked": false,
      "secret": false,
      "intro": "Esta água fica com a gente.",
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
      }
    },
    {
      "id": "augusto",
      "name": "Augusto Sem-Rosto",
      "title": "O Homem do Retrato",
      "origin": "Região serrana do Rio de Janeiro",
      "state": "RJ",
      "region": "Sudeste",
      "archetype": "Cópia e portais",
      "color": "#454452",
      "accent": "#dbc9a4",
      "skin": "#c7b9aa",
      "hair": "#2b2931",
      "description": "Terno antigo de corte estreito, luvas brancas e rosto inteiramente vazio. Feições alheias surgem por um instante nos especiais; molduras flutuantes e uma inclinação rígida do pescoço sustentam sua presença.",
      "personality": "Cerimonioso, controlador e obcecado por ser lembrado. Imita gestos de outras pessoas para disfarçar os intervalos vazios de sua memória.",
      "story": "Apagado de fotografias e lembranças, Augusto recolhe pedaços de identidade para voltar a existir. Seus retratos conectam ocorrências espalhadas pelo país, tornando-o um candidato a chefe para o futuro modo história.",
      "inspiration": "Casarões assombrados, fotografias familiares e retratos amaldiçoados. A região serrana fluminense é o cenário escolhido para seu casarão fictício.",
      "style": "Copia o especial neutro do rival e usa molduras luminosas para mudar de lado. O agarrão prende de perto; o teletransporte precisa completar a preparação antes da pancada. É versátil, mas a cópia não replica sistemas exclusivos inteiros e errar a posição oferece uma abertura.",
      "specials": [
        {
          "name": "Memória Roubada",
          "description": "Executa uma cópia do especial neutro do adversário a cada uso, com intervalo adicional. Contra outro Augusto, usa um eco de pistão."
        },
        {
          "name": "Você Nunca Existiu",
          "description": "Agarrão curto em que uma moldura sombria expulsa o rival com dano alto; falha no ar e contra alvos agachados."
        },
        {
          "name": "Moldura Vazia",
          "description": "Uma moldura luminosa anuncia o reaparecimento atrás do rival, seguido de um golpe curto. Não deixa um portal permanente."
        }
      ],
      "stats": {
        "power": 4,
        "speed": 3,
        "reach": 4,
        "defense": 3
      },
      "stage": "pelourinho",
      "attackStyle": "portrait",
      "defenseName": "Moldura Fechada",
      "finisher": {
        "name": "Retrato Sem Testemunha",
        "line": "Agora você sabe como é ser esquecido.",
        "kind": "portrait"
      },
      "country": "BR",
      "nationality": "Brasileira",
      "originalStage": "retratos",
      "locked": false,
      "secret": false,
      "intro": "Não se mova antes da memória.",
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
      }
    },
    {
      "id": "valter",
      "name": "Valter Verbo",
      "title": "O Candidato do Eco",
      "origin": "Brasília, Distrito Federal",
      "state": "DF",
      "region": "Centro-Oeste",
      "archetype": "Voz e controle de espaço",
      "color": "#28454f",
      "accent": "#e0c481",
      "skin": "#bd8560",
      "hair": "#6b6260",
      "description": "Candidato fictício de meia-idade, terno azul-petróleo de mangas dobradas, gravata dourada solta e cabelo curto grisalho. Um microfone antigo projeta ondas geométricas. Roupa e palanque têm símbolos inventados, sem partido, número eleitoral ou slogan real.",
      "personality": "Teatral, falante e competitivo. Aprendeu a ouvir depois que as próprias palavras começaram a responder de volta; prefere resolver conflitos em debate, mas não foge do combate.",
      "story": "Durante um comício de bairro, um microfone captou promessas esquecidas e libertou um eco que passou a cobrar seu cumprimento. Valter entra na disputa de BRASA para encontrar a origem da voz e impedir que ela transforme a cidade num discurso sem fim.",
      "inspiration": "Oratória de praça, arquitetura de Brasília e sátira de um candidato inteiramente inventado. Não representa nem apoia uma pessoa, partido ou campanha existente.",
      "style": "Anda com cautela e mantém o adversário distante com uma onda sonora larga e lenta. A preparação visível permite saltar ou avançar antes do disparo; quando encurralado, depende de golpes curtos.",
      "specials": [
        {
          "name": "Voz de Palanque",
          "description": "Uma onda sonora grande e lenta percorre a arena na altura do peito e empurra o alvo."
        },
        {
          "name": "Questão de Ordem",
          "description": "Ergue o microfone e espera uma interrupção: um golpe frontal comum na janela ativa desperta a réplica sonora. Rasteiras e agarrões atravessam a resposta; sem ataque recebido, fica aberto na recuperação."
        },
        {
          "name": "Virada de Discurso",
          "description": "Recua e lança um eco menor e mais rápido. O gesto não concede invulnerabilidade e a recuperação deixa espaço para perseguição."
        }
      ],
      "stats": {
        "power": 3,
        "speed": 2,
        "reach": 5,
        "defense": 3
      },
      "stage": "sertao",
      "attackStyle": "voice",
      "defenseName": "Aparte de Guarda",
      "finisher": {
        "name": "Palavra Final",
        "line": "Promessa boa é a que se cumpre.",
        "kind": "voice"
      },
      "country": "BR",
      "nationality": "Brasileira",
      "originalStage": "palanque",
      "locked": false,
      "secret": false,
      "intro": "Agora a palavra vale o que faz.",
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
      }
    },
    {
      "id": "serena",
      "name": "Serena Maré",
      "title": "A Guardiã da Baía",
      "origin": "Salvador, Bahia",
      "state": "BA",
      "region": "Nordeste",
      "archetype": "Defesa e avanço protegido",
      "color": "#28384a",
      "accent": "#66c9cf",
      "skin": "#865237",
      "hair": "#231d24",
      "description": "Policial negra de tranças presas, uniforme tático azul-marinho com faixas turquesa, botas e escudo compacto translúcido. O emblema de onda pertence a uma corporação fictícia; não há brasões, patentes ou identificação de uma força real.",
      "personality": "Calma, firme e atenta aos detalhes. Prioriza proteger quem está por perto e exige de si a mesma responsabilidade que cobra dos outros.",
      "story": "Ao investigar luzes que saem dos armazéns da baía, Serena encontra um escudo que vibra com as marés. Quando embarcações começam a regressar sem tripulação, ela segue a ressonância até os objetos que ligam as assombrações do país.",
      "inspiration": "Paisagem da Baía de Todos-os-Santos, trabalho de proteção comunitária e aventura policial sobrenatural. Sua corporação e seus poderes são inteiramente fictícios.",
      "style": "Avança atrás do escudo, reduzindo dano e interrupção durante uma janela curta, para acertar uma pancada próxima. Agarrões vencem a proteção; esperar a recuperação ou manter distância também abre respostas.",
      "specials": [
        {
          "name": "Escudo de Maré",
          "description": "Avança com o escudo e uma janela breve de armadura, encerrando numa pancada. Agarrões vencem a proteção."
        },
        {
          "name": "Passo da Baía",
          "description": "Escudada curta acompanhada de um recuo moderado. Reposiciona Serena sem invulnerabilidade."
        },
        {
          "name": "Quebra de Onda",
          "description": "Ergue o escudo num golpe ascendente que lança o alvo próximo. A queda tem recuperação longa."
        }
      ],
      "stats": {
        "power": 4,
        "speed": 2,
        "reach": 2,
        "defense": 5
      },
      "stage": "pelourinho",
      "attackStyle": "shield",
      "defenseName": "Guarda da Baía",
      "finisher": {
        "name": "Maré de Regresso",
        "line": "A baía sempre traz a verdade de volta.",
        "kind": "shield"
      },
      "country": "BR",
      "nationality": "Brasileira",
      "originalStage": "baia",
      "locked": false,
      "secret": false,
      "intro": "A baía merece voltar pra casa.",
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
      }
    },
    {
      "id": "caio",
      "name": "Caio Leme",
      "title": "O Vigia da Madrugada",
      "origin": "Rio de Janeiro, Rio de Janeiro",
      "state": "RJ",
      "region": "Sudeste",
      "archetype": "Investida e contenção",
      "color": "#3d4651",
      "accent": "#a6cce0",
      "skin": "#c38c63",
      "hair": "#292c32",
      "description": "Policial de cabelo escuro curto, uniforme cinza-azulado, colete leve e bastão retrátil fictício que projeta um aro de luz. Faixas claras desenham sua silhueta, sem símbolos ou distintivos de corporações reais.",
      "personality": "Observador, ágil no improviso e reservado. Faz humor discreto para acalmar os colegas, mas não deixa uma pista incompleta para trás.",
      "story": "Patrulhando uma rua que reaparece em horários impossíveis, Caio testemunha passageiros descerem de um bonde vazio e sumirem sob os arcos. Seu equipamento passa a registrar rastros de luz, e ele segue essas trilhas para encerrar o circuito assombrado.",
      "inspiration": "Arcos da Lapa, bondes, histórias urbanas de madrugada e ficção investigativa. Personagem e corporação não retratam um policial ou uma instituição real.",
      "style": "Percorre distância numa investida de bastão e prende brevemente os pés de quem atinge. É veloz, mas não recebe armadura ou invulnerabilidade; uma defesa antecipada deixa sua recuperação exposta.",
      "specials": [
        {
          "name": "Cerco da Lapa",
          "description": "Investe com o bastão de luz e imobiliza brevemente o deslocamento ao acertar. Não recebe armadura ou invulnerabilidade."
        },
        {
          "name": "Ronda Curta",
          "description": "Gira o bastão em dois contatos próximos, cobrindo os arredores à frente sem avançar."
        },
        {
          "name": "Linha de Retorno",
          "description": "Recua enquanto estende o bastão num golpe longo. A janela de acerto é curta e não protege de ataques rivais."
        }
      ],
      "stats": {
        "power": 3,
        "speed": 4,
        "reach": 4,
        "defense": 3
      },
      "stage": "vila",
      "attackStyle": "baton",
      "defenseName": "Guarda da Lapa",
      "finisher": {
        "name": "Ronda Encerrada",
        "line": "Nem toda sombra conhece um caminho de volta.",
        "kind": "baton"
      },
      "country": "BR",
      "nationality": "Brasileira",
      "originalStage": "lapa",
      "locked": false,
      "secret": false,
      "intro": "A ronda termina quando todos voltam.",
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
      }
    },
    {
      "id": "davi",
      "name": "Davi Camisa Dez",
      "title": "O Craque da Maré",
      "origin": "Santos, São Paulo",
      "state": "SP",
      "region": "Sudeste",
      "archetype": "Chutes e projétil baixo",
      "color": "#e2e1d9",
      "accent": "#79d2bd",
      "skin": "#74472e",
      "hair": "#201d21",
      "description": "Jogador negro de cabelo curto, físico atlético, camisa branca com detalhes pretos, calção preto, meiões brancos e chuteiras verdes. Uniforme e bola não têm escudo, marca, patrocinador ou identificação de atleta real.",
      "personality": "Criativo, competitivo e generoso. Traz o raciocínio rápido do futebol para a luta e acredita que o melhor lance é aquele que também dá espaço aos companheiros.",
      "story": "Num treino noturno na Vila Belmiro, Davi encontra uma bola que retorna sozinha do gol e traz areia de praias distantes. Ao chutá-la, ouve vozes presas entre as marés; decide seguir esse chamado antes que o próximo apito trave a cidade numa partida eterna.",
      "inspiration": "Cultura do futebol de Santos, dribles de rua e atmosfera da Vila Belmiro. É um jogador inteiramente inventado; o estádio inspira a arena, sem associação oficial com clube ou atleta.",
      "style": "Move-se mais rápido que os demais recém-chegados e combina chutes com uma bola rasteira veloz. O projétil ergue o alvo ao acertar, mas pode ser saltado; a preparação do chute oferece tempo para avançar.",
      "specials": [
        {
          "name": "Chute de Maré",
          "description": "Chuta uma bola baixa e veloz que lança o alvo no contato. A trajetória pode ser saltada."
        },
        {
          "name": "Drible da Vila",
          "description": "A finta vira um chute lateral de avanço rápido. Um único contato e recuperação visível limitam a pressão."
        },
        {
          "name": "Bicicleta de Ressaca",
          "description": "Chute ascendente acrobático de alcance curto que lança o alvo, com recuperação longa ao errar."
        }
      ],
      "stats": {
        "power": 3,
        "speed": 5,
        "reach": 4,
        "defense": 2
      },
      "stage": "vila",
      "attackStyle": "football",
      "defenseName": "Bloqueio de Tabela",
      "finisher": {
        "name": "Gol de Ressaca",
        "line": "A Vila guarda o último lance.",
        "kind": "football"
      },
      "country": "BR",
      "nationality": "Brasileira",
      "originalStage": "vila",
      "locked": false,
      "secret": false,
      "intro": "A Vila guarda o último lance.",
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
      }
    },
    {
      "id": "luz",
      "name": "Luz do Grave",
      "title": "A Voz da Virada",
      "origin": "Recife, Pernambuco",
      "state": "PE",
      "region": "Nordeste",
      "archetype": "Ritmo e pressão próxima",
      "color": "#722d48",
      "accent": "#62d9dd",
      "skin": "#a66a48",
      "hair": "#251b2a",
      "description": "Cantor de cabelo crespo alto, jaqueta vinho com vivos ciano, camiseta escura, calça preta e botas. Um microfone de mão e cabos luminosos marcam os gestos; não reproduz a aparência ou o figurino de um artista real.",
      "personality": "Carismático, inquieto e atento ao público. Usa a voz para reunir pessoas, mas aprende a deixar o silêncio entrar entre duas frases.",
      "story": "Uma caixa de som encontrada num antigo armazém devolve ao cantor versos que ele nunca compôs. Cada refrão revela uma memória roubada; Luz embarca nos caminhos de BRASA para descobrir quem aprisionou aquelas vozes e trazê-las de volta.",
      "inspiration": "Shows de rua, experimentação sonora recifense e encontros entre percussão e música eletrônica. Músicas, personagem e palco são criações originais.",
      "style": "Mantém os pés no lugar ao soltar três pulsos próximos de som, criando pressão em ritmo regular. Precisa acertar a distância antes de cantar; saltos altos e ataques longos exploram seu alcance limitado.",
      "specials": [
        {
          "name": "Refrão de Impacto",
          "description": "Emite três pulsos de som próximos sem avançar. Fora do alcance, o rival pode punir a recuperação."
        },
        {
          "name": "Retorno de Palco",
          "description": "Recua e deixa um eco sonoro de disparo atrasado. A trajetória do eco é reta e o recuo não protege Luz."
        },
        {
          "name": "Nota Suspensa",
          "description": "Um pulso de som ascendente alcança saltos próximos e lança o alvo, com recuperação longa ao errar."
        }
      ],
      "stats": {
        "power": 3,
        "speed": 3,
        "reach": 3,
        "defense": 3
      },
      "stage": "pelourinho",
      "attackStyle": "music",
      "defenseName": "Pausa do Compasso",
      "finisher": {
        "name": "Bis das Vozes Livres",
        "line": "Esse refrão não tem mais dono.",
        "kind": "music"
      },
      "country": "BR",
      "nationality": "Brasileira",
      "originalStage": "palco",
      "locked": false,
      "secret": false,
      "intro": "Esse refrão não tem dono.",
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
      }
    },
    {
      "id": "ti",
      "name": "TI",
      "title": "O Taxista da Última Corrida",
      "origin": "Rio de Janeiro, Rio de Janeiro",
      "state": "RJ",
      "region": "Sudeste",
      "archetype": "Finta, recuo e trajetos curtos",
      "color": "#dfb23c",
      "accent": "#80bdd9",
      "skin": "#a96d48",
      "hair": "#38302a",
      "description": "Taxista brasileiro de meia-idade, pele parda, bigode curto e cabelo grisalho nas laterais. Usa camisa amarela de manga curta, jaqueta azul leve aberta, calça azul-marinho, sapatos gastos e luvas sem dedos. O boné traz um pequeno símbolo de táxi inventado; suas mãos ficam sempre à vista durante as fintas.",
      "personality": "Conversador, observador e bem-humorado. Conhece atalhos e sabe sair de uma discussão, mas não abandona alguém no meio da noite. Trata o próprio apelido, TI, como a única apresentação necessária.",
      "story": "TI aceitou uma corrida sem destino marcada para o último minuto da madrugada. Ao chegar à Lapa, o passageiro sumiu e o taxímetro passou a contar lembranças em vez de dinheiro. Cada luta devolve um trecho da rota; TI procura a pessoa que o espera no banco de trás e uma maneira de terminar a corrida sem perder a cidade.",
      "inspiration": "Conversas de táxi, trajetos noturnos cariocas e causos de passageiros que desaparecem antes de chegar. O apelido, o motorista, a empresa de táxi e todos os símbolos são fictícios.",
      "style": "Palmas curtas, cotoveladas e chutes de calçada criam espaço para uma ficha rápida do taxímetro. Alterna uma entrada curta de ombro com recuo e cotovelo para convidar a perseguição. Não recebe proteção automática ao se mover e sofre quando o rival ocupa o fim de seu trajeto.",
      "specials": [
        {
          "name": "Taxímetro",
          "description": "Estala uma ficha do taxímetro em linha reta. O disco pequeno sai rápido, dá um contato e exige pontaria; saltos e defesa vencem a trajetória à altura do peito."
        },
        {
          "name": "Bandeira Livre",
          "description": "Faz a finta de abrir passagem e avança com o ombro numa corrida curta. Um único contato encerra a entrada; a investida não atravessa o rival nem concede invulnerabilidade."
        },
        {
          "name": "Retorno da Lapa",
          "description": "Recua meio passo e estende o cotovelo para cortar uma perseguição próxima. Pode errar se a distância já estiver grande; o recuo não protege contra golpes ou projéteis."
        }
      ],
      "stats": {
        "power": 3,
        "speed": 4,
        "reach": 3,
        "defense": 3
      },
      "stage": "vila",
      "attackStyle": "taxi",
      "defenseName": "Porta Fechada",
      "finisher": {
        "name": "A Última Bandeirada",
        "line": "Fim da linha, parceiro. O troco fica comigo.",
        "kind": "taxi"
      },
      "country": "BR",
      "nationality": "Brasileira",
      "originalStage": "taxi",
      "locked": false,
      "secret": false,
      "intro": "A corrida chegou, parceiro.",
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
      }
    },
    {
      "id": "brick",
      "name": "Brick",
      "title": "O Tanque do Futebol Americano",
      "origin": "Pittsburgh, Pensilvânia",
      "state": "US",
      "region": "América do Norte",
      "country": "US",
      "nationality": "Estadunidense",
      "description": "Enorme, ombreiras azul-marinho lascadas, uniforme sem marca, capacete preso ao cinto e joelheiras de couro. Pescoço curto e braços largos desenham uma silhueta triangular.",
      "personality": "Leal e paciente fora da arena; encara cada queda como mais uma jogada.",
      "story": "Um antigo capitão de liga comunitária procura o responsável por vender seu campo a uma empresa que escava fendas sob os estádios.",
      "inspiration": "Tanque do Futebol Americano, tradições e imaginário de Estados Unidos; personagem fictício de BRASA.",
      "style": "Tanque de curta distância. Avança com armadura, usa agarrões de impacto e perde para saltos e recuos durante a preparação.",
      "archetype": "Tanque de curta distância",
      "stats": {
        "power": 5,
        "speed": 1,
        "reach": 2,
        "defense": 5
      },
      "stage": "ny_docks",
      "color": "#244b80",
      "accent": "#f5e3c1",
      "skin": "#c78e6b",
      "hair": "#3a2a29",
      "attackStyle": "brick",
      "defenseName": "Linha Intransponível",
      "finisher": {
        "name": "Última Jardada",
        "line": "O campo ainda é nosso.",
        "kind": "brick"
      },
      "intro": "Ainda temos uma jogada.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "shoulder-check",
        "double-hammer",
        "punt"
      ],
      "superName": "Prorrogação de Aço",
      "movement": {
        "walk": 0.79,
        "backwalk": 0.57,
        "jump": 0.85
      }
    },
    {
      "id": "steele",
      "name": "Major Steele",
      "title": "O Soldado",
      "origin": "Norfolk, Virgínia",
      "state": "US",
      "region": "América do Norte",
      "country": "US",
      "nationality": "Estadunidense",
      "description": "Veterano de cabelo grisalho curto, colete gasto, braço mecânico pesado e carabina presa ao suporte. Insígnias e unidade são inteiramente fictícias.",
      "personality": "Disciplina rígida, fala breve e aversão a ordens sem motivo.",
      "story": "Ao descobrir que seus implantes registravam a abertura de um portal, desertou de uma operação clandestina e guardou a única cópia das coordenadas.",
      "inspiration": "Soldado, tradições e imaginário de Estados Unidos; personagem fictício de BRASA.",
      "style": "Pressão metódica com coronha, cotoveladas e rajada de preparação longa. Precisa proteger a linha de tiro e é vulnerável ao ser cercado.",
      "archetype": "Pressão metódica com coronha, cotoveladas e rajada de preparação longa",
      "stats": {
        "power": 4,
        "speed": 2,
        "reach": 4,
        "defense": 4
      },
      "stage": "ny_docks",
      "color": "#244b80",
      "accent": "#f5e3c1",
      "skin": "#c78e6b",
      "hair": "#3a2a29",
      "attackStyle": "steele",
      "defenseName": "Antebraço Balístico",
      "finisher": {
        "name": "Operação Último Eco",
        "line": "Missão encerrada. Sem baixas de memória.",
        "kind": "steele"
      },
      "intro": "Agora, por minha conta.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "elbow",
        "rifle-butt",
        "stomp"
      ],
      "superName": "Código Zero"
    },
    {
      "id": "voltx",
      "name": "VOLT-X",
      "title": "O Robô Elétrico",
      "origin": "Detroit, Michigan",
      "state": "US",
      "region": "América do Norte",
      "country": "US",
      "nationality": "Estadunidense",
      "description": "Chassi automotivo branco, juntas azul-elétrico, roda dobrada em cada panturrilha e mãos que revelam ferramentas. Faróis estreitos formam os olhos.",
      "personality": "Curioso, literal e obcecado por descobrir por que os humanos guardam sucata com afeto.",
      "story": "Projetado para percorrer uma cidade esvaziada, desenvolveu memória própria após absorver um relâmpago que trazia vozes do outro lado das fissuras.",
      "inspiration": "Robô Elétrico, tradições e imaginário de Estados Unidos; personagem fictício de BRASA.",
      "style": "Investidas rápidas de alto compromisso. Rodas mudam a distância; o Modo Plaid superaquecido impõe uma pausa antes da próxima pressão.",
      "archetype": "Investidas rápidas de alto compromisso",
      "stats": {
        "power": 4,
        "speed": 5,
        "reach": 3,
        "defense": 2
      },
      "stage": "ny_docks",
      "color": "#244b80",
      "accent": "#f5e3c1",
      "skin": "#c78e6b",
      "hair": "#3a2a29",
      "attackStyle": "voltx",
      "defenseName": "Chassi Fechado",
      "finisher": {
        "name": "Horizonte de Cobalto",
        "line": "Memória preservada. Caminho livre.",
        "kind": "voltx"
      },
      "intro": "Nova rota calculada.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "piston",
        "tool-uppercut",
        "wheel-sweep"
      ],
      "superName": "Sobrecarga Autônoma"
    },
    {
      "id": "jack",
      "name": "Jack Bell",
      "title": "O Boxeador das Ruas",
      "origin": "Filadélfia, Pensilvânia",
      "state": "US",
      "region": "América do Norte",
      "country": "US",
      "nationality": "Estadunidense",
      "description": "Nariz marcado, moletom sem mangas, luvas marrons antigas e tênis gastos. Postura leve com cabeça móvel e ombro dianteiro alto.",
      "personality": "Persistente, irônico e protetor dos alunos que treinam depois do expediente.",
      "story": "Seu ginásio foi tomado por uma névoa que repete vozes de antigos campeões. Jack entra no circuito para devolver o lugar aos vivos.",
      "inspiration": "Boxeador das Ruas, tradições e imaginário de Estados Unidos; personagem fictício de BRASA.",
      "style": "Boxe de esquiva e volume. Entra e sai com passos curtos, castiga erros com sequências rápidas e perde trocas plantadas contra guardas pesadas.",
      "archetype": "Boxe de esquiva e volume",
      "stats": {
        "power": 3,
        "speed": 5,
        "reach": 2,
        "defense": 2
      },
      "stage": "ny_docks",
      "color": "#244b80",
      "accent": "#f5e3c1",
      "skin": "#c78e6b",
      "hair": "#3a2a29",
      "attackStyle": "jack",
      "defenseName": "Esquiva da Esquina",
      "finisher": {
        "name": "O Sino Ainda Toca",
        "line": "Mais um assalto. Ainda de pé.",
        "kind": "jack"
      },
      "intro": "Não me conte antes do sino.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "boxing-jab",
        "cross",
        "step-kick"
      ],
      "superName": "Décimo Segundo Assalto",
      "movement": {
        "walk": 1.18,
        "backwalk": 0.88,
        "jump": 1
      },
      "comboSequences": [
        [
          "light",
          "light",
          "heavy"
        ],
        [
          "light",
          "heavy",
          "special0"
        ]
      ]
    },
    {
      "id": "homer",
      "name": "Homer",
      "title": "O Rebatedor",
      "origin": "Chicago, Illinois",
      "state": "US",
      "region": "América do Norte",
      "country": "US",
      "nationality": "Estadunidense",
      "description": "Uniforme creme com faixa vermelha inventada, boné virado, luva no cinto e taco de madeira marcado. Ombros giram antes das rebatidas.",
      "personality": "Brincalhão até errar uma bola; trata o próximo lance com respeito absoluto.",
      "story": "Quando uma bola atravessou o estádio e retornou em chamas sem cair, Homer percebeu que o jogo continuava em outra dimensão.",
      "inspiration": "Rebatedor, tradições e imaginário de Estados Unidos; personagem fictício de BRASA.",
      "style": "Alcance de taco com recuperação longa. Pode rebater projéteis numa janela curta, mas fica vulnerável a esquivas e ataques próximos.",
      "archetype": "Alcance de taco com recuperação longa",
      "stats": {
        "power": 4,
        "speed": 2,
        "reach": 5,
        "defense": 3
      },
      "stage": "ny_docks",
      "color": "#244b80",
      "accent": "#f5e3c1",
      "skin": "#c78e6b",
      "hair": "#3a2a29",
      "attackStyle": "homer",
      "defenseName": "Taco na Linha",
      "finisher": {
        "name": "Fim de Temporada",
        "line": "Essa bola leva uma lembrança.",
        "kind": "homer"
      },
      "intro": "Pode mandar a próxima.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "bat-tap",
        "bat-swing",
        "base-slide"
      ],
      "superName": "Além do Placar"
    },
    {
      "id": "gloria",
      "name": "Capitão Glória",
      "title": "O Herói de Comercial",
      "origin": "Los Angeles, Califórnia",
      "state": "US",
      "region": "América do Norte",
      "country": "US",
      "nationality": "Estadunidense",
      "description": "Sorriso impecável, roupa branca e vermelha com patrocinadores fictícios, capa curta dourada e cabelos presos por excesso de brilho.",
      "personality": "Vaidoso e teatral, mas descobre coragem quando as câmeras deixam de transmitir.",
      "story": "Criado como mascote de uma emissora, recebeu poderes ao protagonizar uma transmissão de um portal ao vivo. Agora quer saber quem escreve seu roteiro.",
      "inspiration": "Herói de Comercial, tradições e imaginário de Estados Unidos; personagem fictício de BRASA.",
      "style": "Pressão aérea de preparação visível, avanço luminoso e poses que prolongam a recuperação. Forte ao surpreender, frágil ao errar o mergulho.",
      "archetype": "Pressão aérea de preparação visível, avanço luminoso e poses que prolongam a recuperação",
      "stats": {
        "power": 4,
        "speed": 4,
        "reach": 3,
        "defense": 2
      },
      "stage": "ny_docks",
      "color": "#244b80",
      "accent": "#f5e3c1",
      "skin": "#c78e6b",
      "hair": "#3a2a29",
      "attackStyle": "gloria",
      "defenseName": "Capa de Estúdio",
      "finisher": {
        "name": "Em Rede Nacional",
        "line": "Agora eu escolho o final.",
        "kind": "gloria"
      },
      "intro": "Ao vivo, pela última vez.",
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
      },
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
      "locked": false,
      "secret": false,
      "superName": "Última Transmissão",
      "normalPaths": [
        "hero-jab",
        "diving-fist",
        "high-side"
      ]
    },
    {
      "id": "dusty",
      "name": "Dusty Graves",
      "title": "O Caubói Fantasma",
      "origin": "Tombstone, Arizona",
      "state": "US",
      "region": "América do Norte",
      "country": "US",
      "nationality": "Estadunidense",
      "description": "Chapéu perfurado, sobretudo de pó, pele transparente nas mãos e esporas que soltam brasas azuis. Revólveres espectrais não reproduzem armas reais.",
      "personality": "Cortês e cansado; só ameaça quem já sabe o preço da promessa.",
      "story": "Traído numa diligência que levava um sino enterrado, volta todas as noites para encontrar o passageiro que nunca desceu.",
      "inspiration": "Caubói Fantasma, tradições e imaginário de Estados Unidos; personagem fictício de BRASA.",
      "style": "Laço de puxão, disparo lento e avanço espectral. Domina a média distância, sofre sob pressão sem espaço para preparar o cavalo.",
      "archetype": "Laço de puxão, disparo lento e avanço espectral",
      "stats": {
        "power": 3,
        "speed": 3,
        "reach": 5,
        "defense": 2
      },
      "stage": "ny_docks",
      "color": "#244b80",
      "accent": "#f5e3c1",
      "skin": "#c78e6b",
      "hair": "#3a2a29",
      "attackStyle": "dusty",
      "defenseName": "Aba do Túmulo",
      "finisher": {
        "name": "A Última Estação",
        "line": "Nenhuma promessa fica enterrada.",
        "kind": "dusty"
      },
      "intro": "Seu bilhete acaba aqui.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "lasso-jab",
        "revolver-butt",
        "spur-kick"
      ],
      "superName": "Diligência dos Ausentes"
    },
    {
      "id": "roxy",
      "name": "Roxy Riot",
      "title": "A Guitarrista do Caos",
      "origin": "Seattle, Washington",
      "state": "US",
      "region": "América do Norte",
      "country": "US",
      "nationality": "Estadunidense",
      "description": "Moicano magenta caído para um lado, jaqueta de couro azul, jeans rasgado e guitarra com um remendo em forma de raio.",
      "personality": "Contestadora e solidária; usa o palco para dar voz a quem cortaram o microfone.",
      "story": "Seu amplificador captou o grito de uma cidade futura em ruínas. Roxy procura as frequências capazes de impedir o desastre.",
      "inspiration": "Guitarrista do Caos, tradições e imaginário de Estados Unidos; personagem fictício de BRASA.",
      "style": "Golpes de guitarra lentos, ondas rasteiras de múltiplos contatos e controle de ritmo. Os saltos punem sua dependência do chão.",
      "archetype": "Golpes de guitarra lentos, ondas rasteiras de múltiplos contatos e controle de ritmo",
      "stats": {
        "power": 3,
        "speed": 3,
        "reach": 5,
        "defense": 2
      },
      "stage": "ny_docks",
      "color": "#244b80",
      "accent": "#f5e3c1",
      "skin": "#c78e6b",
      "hair": "#3a2a29",
      "attackStyle": "roxy",
      "defenseName": "Braço de Retorno",
      "finisher": {
        "name": "O Silêncio Acabou",
        "line": "Você também vai ouvir.",
        "kind": "roxy"
      },
      "intro": "Hoje ninguém corta o som.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "pick",
        "guitar-smash",
        "boot-kick"
      ],
      "superName": "Frequência da Rebelião"
    },
    {
      "id": "silas",
      "name": "Silas Nightwing",
      "title": "A Criatura da Estrada",
      "origin": "Point Pleasant, Virgínia Ocidental",
      "state": "US",
      "region": "América do Norte",
      "country": "US",
      "nationality": "Estadunidense",
      "description": "Silhueta alta, asas negras com bordas claras, tórax coberto de penas curtas e dois olhos vermelhos. Pés estreitos seguram o chão como garras.",
      "personality": "Observador e inquietante; avisa dos perigos por gestos que os humanos confundem com ameaças.",
      "story": "Aparece antes das pontes que desaparecem. Pela primeira vez uma das previsões mostra sua própria sombra abrindo a fissura.",
      "inspiration": "Criatura da Estrada, tradições e imaginário de Estados Unidos; personagem fictício de BRASA.",
      "style": "Mobilidade aérea e trocas de lado. Os ataques amplos de asa são lentos ao pousar e exigem evitar guardas pacientes.",
      "archetype": "Mobilidade aérea e trocas de lado",
      "stats": {
        "power": 3,
        "speed": 5,
        "reach": 4,
        "defense": 1
      },
      "stage": "ny_docks",
      "color": "#244b80",
      "accent": "#f5e3c1",
      "skin": "#c78e6b",
      "hair": "#3a2a29",
      "attackStyle": "silas",
      "defenseName": "Asas Sobrepostas",
      "finisher": {
        "name": "O Último Presságio",
        "line": "A ponte caiu antes de você chegar.",
        "kind": "silas"
      },
      "intro": "O caminho já avisou.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "wing-tip",
        "wing-arc",
        "claw-dive"
      ],
      "superName": "Noite Sem Estrada",
      "movement": {
        "walk": 1.1,
        "backwalk": 0.72,
        "jump": 1.23
      }
    },
    {
      "id": "boris",
      "name": "Boris Granito",
      "title": "O Lutador de Sambo",
      "origin": "São Petersburgo",
      "state": "RU",
      "region": "Eurásia",
      "country": "RU",
      "nationality": "Russa",
      "description": "Jaqueta esportiva vermelha de gola gasta, cinto azul, mãos enfaixadas e orelhas marcadas por anos de tatame. Tronco largo e base baixa.",
      "personality": "Rigoroso no treino e acolhedor com iniciantes; não confunde violência com técnica.",
      "story": "Seu antigo treinador voltou da margem congelada do Neva sem lembrar dos próprios alunos. Boris segue um circuito de combates para encontrar o nome roubado.",
      "inspiration": "Lutador de Sambo, tradições e imaginário de Rússia; personagem fictício de BRASA.",
      "style": "Sambo de agarrão. Precisa conquistar a curta distância; quedas fortes trocam os lados, enquanto a pouca velocidade permite manter distância.",
      "archetype": "Sambo de agarrão",
      "stats": {
        "power": 5,
        "speed": 2,
        "reach": 2,
        "defense": 5
      },
      "stage": "neva",
      "color": "#a63847",
      "accent": "#cce8ee",
      "skin": "#d3af91",
      "hair": "#453433",
      "attackStyle": "boris",
      "defenseName": "Gola Fechada",
      "finisher": {
        "name": "O Tatame Lembra",
        "line": "Técnica antes da força.",
        "kind": "boris"
      },
      "intro": "Não se esqueça de cair.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "palm-entry",
        "jacket-hook",
        "leg-reap"
      ],
      "superName": "Peso do Granito",
      "movement": {
        "walk": 0.86,
        "backwalk": 0.6,
        "jump": 0.9
      }
    },
    {
      "id": "irina",
      "name": "Irina Nevasca",
      "title": "A Bailarina de Gelo",
      "origin": "São Petersburgo",
      "state": "RU",
      "region": "Eurásia",
      "country": "RU",
      "nationality": "Russa",
      "description": "Figurino azul com saia cristalina curta, meias claras, sapatilhas reforçadas e trança presa por uma pequena estrela de gelo.",
      "personality": "Exigente e silenciosa; transforma cada erro em mais uma repetição.",
      "story": "Após dançar para uma plateia que desapareceu, Irina encontrou as cadeiras cheias de gelo. O aplauso ainda soa nas margens do rio.",
      "inspiration": "Bailarina de Gelo, tradições e imaginário de Rússia; personagem fictício de BRASA.",
      "style": "Giros e pontas longas de perna, gelo breve e recuo elegante. Congela apenas sem guarda e sofre se o rival chega antes do giro.",
      "archetype": "Giros e pontas longas de perna, gelo breve e recuo elegante",
      "stats": {
        "power": 3,
        "speed": 4,
        "reach": 5,
        "defense": 2
      },
      "stage": "neva",
      "color": "#a63847",
      "accent": "#cce8ee",
      "skin": "#d3af91",
      "hair": "#453433",
      "attackStyle": "irina",
      "defenseName": "Braços de Cristal",
      "finisher": {
        "name": "A Última Plateia",
        "line": "Ouça o silêncio entre os aplausos.",
        "kind": "irina"
      },
      "intro": "O palco também guarda pegadas.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "fingertip",
        "ballet-spin",
        "arabesque"
      ],
      "superName": "Cisne da Meia-Noite"
    },
    {
      "id": "yuri",
      "name": "Yuri Vazio",
      "title": "O Cosmonauta Perdido",
      "origin": "Baikonur — missão soviética fictícia",
      "state": "RU",
      "region": "Eurásia",
      "country": "RU",
      "nationality": "Russa",
      "description": "Traje espacial antigo ocre, anéis metálicos no pescoço, botas largas e visor rachado. Em vez de rosto, estrelas se movem no vidro escuro.",
      "personality": "Calmo, distante e atento a ruídos que ninguém mais ouve.",
      "story": "Sua missão foi apagada dos arquivos. Reapareceu décadas depois com alguns minutos a menos no relógio e um mapa impossível do outro lado da Lua.",
      "inspiration": "Imaginário da exploração espacial soviética; a missão, o traje e a história são fictícios.",
      "style": "Controle vertical de gravidade e golpes de traje pesado. Arma uma zona de suspensão curta, com pouca defesa a ataques rápidos próximos.",
      "archetype": "Controle vertical de gravidade e golpes de traje pesado",
      "stats": {
        "power": 3,
        "speed": 2,
        "reach": 5,
        "defense": 4
      },
      "stage": "neva",
      "color": "#a63847",
      "accent": "#cce8ee",
      "skin": "#d3af91",
      "hair": "#453433",
      "attackStyle": "yuri",
      "defenseName": "Casco Pressurizado",
      "finisher": {
        "name": "Além do Horizonte",
        "line": "Ainda há alguém ouvindo?",
        "kind": "yuri"
      },
      "intro": "Controle, estou em solo desconhecido.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "glove-push",
        "helmet-punch",
        "reentry-boot"
      ],
      "superName": "Horizonte de Eventos"
    },
    {
      "id": "vera",
      "name": "Vera dos Corvos",
      "title": "A Bruxa da Floresta",
      "origin": "Carélia",
      "state": "RU",
      "region": "Eurásia",
      "country": "RU",
      "nationality": "Russa",
      "description": "Xale vinho remendado, cajado torto com uma chave pendurada, caldeirão pequeno no cinto e cabelo branco em trança solta.",
      "personality": "Hospitalidade severa: oferece chá antes de cobrar uma verdade.",
      "story": "Uma floresta inteira deixou de lançar sombras. Vera segue as chaves roubadas de sua casa ambulante para impedir que a fome do portal chegue às aldeias.",
      "inspiration": "Baba Yaga e narrativas eslavas de casas ambulantes; identidade e história próprias.",
      "style": "Armadilhas de preparação longa e golpes de cajado de bom alcance. Os corvos marcam o momento do ataque e permitem escapar com salto.",
      "archetype": "Armadilhas de preparação longa e golpes de cajado de bom alcance",
      "stats": {
        "power": 3,
        "speed": 2,
        "reach": 5,
        "defense": 3
      },
      "stage": "neva",
      "color": "#a63847",
      "accent": "#cce8ee",
      "skin": "#d3af91",
      "hair": "#453433",
      "attackStyle": "vera",
      "defenseName": "Cajado na Soleira",
      "finisher": {
        "name": "A Porta Só Abre por Dentro",
        "line": "Minha casa sabe quem você é.",
        "kind": "vera"
      },
      "intro": "Entre, se conhece o caminho.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "staff-tip",
        "cauldron-hook",
        "shawl-sweep"
      ],
      "superName": "Ceia da Casa Andante"
    },
    {
      "id": "maksim",
      "name": "Maksim Caldeira",
      "title": "O Operário de Aço",
      "origin": "Magnitogorsk",
      "state": "RU",
      "region": "Eurásia",
      "country": "RU",
      "nationality": "Russa",
      "description": "Avental industrial cinza, camisa sem mangas, manoplas de cobre com válvulas e sobrancelhas queimadas por vapor.",
      "personality": "Pragmático e solidário, desconfia de qualquer ferramenta sem conserto possível.",
      "story": "A fábrica passou a forjar metal que conserva a dor de quem o toca. Maksim desmontou a primeira prensa e encontrou um coração de pedra lunar.",
      "inspiration": "Operário de Aço, tradições e imaginário de Rússia; personagem fictício de BRASA.",
      "style": "Soco pesado com preparação carregada e armadura. A distância curta e a recuperação do vapor exigem paciência para entrar.",
      "archetype": "Soco pesado com preparação carregada e armadura",
      "stats": {
        "power": 5,
        "speed": 1,
        "reach": 3,
        "defense": 5
      },
      "stage": "neva",
      "color": "#a63847",
      "accent": "#cce8ee",
      "skin": "#d3af91",
      "hair": "#453433",
      "attackStyle": "maksim",
      "defenseName": "Manoplas Cruzadas",
      "finisher": {
        "name": "A Última Prensa",
        "line": "Toda máquina pode parar.",
        "kind": "maksim"
      },
      "intro": "Vamos fazer isso direito.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "rivet-jab",
        "steam-hammer",
        "forge-stomp"
      ],
      "superName": "Coração da Fundição"
    },
    {
      "id": "anya",
      "name": "Anya Presa-Branca",
      "title": "A Guardiã da Taiga",
      "origin": "República de Sakha",
      "state": "RU",
      "region": "Eurásia",
      "country": "RU",
      "nationality": "Russa",
      "description": "Casaco verde pesado, cabelo claro cortado curto, luvas escuras e um pingente de osso entalhado. Sua sombra às vezes tem quatro patas.",
      "personality": "Econômica em gestos e ferozmente protetora da floresta.",
      "story": "Salvou um lobo de uma armadilha de sombra e recebeu seu juramento. Os dois procuram a mão que deixou armadilhas onde nenhuma pessoa passa.",
      "inspiration": "Guardiã da Taiga, tradições e imaginário de Rússia; personagem fictício de BRASA.",
      "style": "Pressão por duas alturas. O espírito de lobo ocupa a linha baixa enquanto Anya usa ataques altos de alcance médio.",
      "archetype": "Pressão por duas alturas",
      "stats": {
        "power": 3,
        "speed": 4,
        "reach": 4,
        "defense": 3
      },
      "stage": "neva",
      "color": "#a63847",
      "accent": "#cce8ee",
      "skin": "#d3af91",
      "hair": "#453433",
      "attackStyle": "anya",
      "defenseName": "Manto da Patrulha",
      "finisher": {
        "name": "Juramento da Taiga",
        "line": "Nenhuma armadilha fica para trás.",
        "kind": "anya"
      },
      "intro": "Você não atravessa sozinha esta mata.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "claw-jab",
        "forest-hook",
        "hunter-kick"
      ],
      "superName": "Noite da Alcateia"
    },
    {
      "id": "lev",
      "name": "Lev dos Mil Rostos",
      "title": "O Ilusionista",
      "origin": "Kazan",
      "state": "RU",
      "region": "Eurásia",
      "country": "RU",
      "nationality": "Russa",
      "description": "Casaco reversível roxo e verde, cinto com máscaras de madeira, cabelo penteado com uma mecha branca e luvas assimétricas.",
      "personality": "Carismático e esquivo; conta a verdade como se fosse um truque.",
      "story": "Uma máscara do circo começou a imitar pessoas que ainda não haviam chegado. Lev segue o rosto que roubou sua infância.",
      "inspiration": "Ilusionista, tradições e imaginário de Rússia; personagem fictício de BRASA.",
      "style": "Troca de lado e cópias de um contato. A posição real fica visível na preparação e o rival pode punir o fim da ilusão.",
      "archetype": "Troca de lado e cópias de um contato",
      "stats": {
        "power": 2,
        "speed": 5,
        "reach": 4,
        "defense": 2
      },
      "stage": "neva",
      "color": "#a63847",
      "accent": "#cce8ee",
      "skin": "#d3af91",
      "hair": "#453433",
      "attackStyle": "lev",
      "defenseName": "Máscara de Reserva",
      "finisher": {
        "name": "O Rosto que Faltava",
        "line": "Até a verdade tem outro lado.",
        "kind": "lev"
      },
      "intro": "Qual de nós chegou primeiro?",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "magician-palm",
        "lining-hook",
        "backstage-step"
      ],
      "superName": "Circo Sem Espelhos"
    },
    {
      "id": "nikolai",
      "name": "Nikolai Geada",
      "title": "O Cavaleiro Congelado",
      "origin": "Novgorod",
      "state": "RU",
      "region": "Eurásia",
      "country": "RU",
      "nationality": "Russa",
      "description": "Armadura medieval azul-escura coberta de gelo, elmo aberto com sobrancelhas brancas e metade de um escudo redondo.",
      "personality": "Solenemente paciente, honra até os nomes dos inimigos.",
      "story": "Guardava uma ponte quando o rio congelou também o tempo. Acordou no presente com uma metade do escudo e o dever intacto.",
      "inspiration": "Cavaleiro Congelado, tradições e imaginário de Rússia; personagem fictício de BRASA.",
      "style": "Guarda pesada e contra-ataque de gelo. Pouca mobilidade e alcance previsível equilibram a armadura e o bloqueio forte.",
      "archetype": "Guarda pesada e contra-ataque de gelo",
      "stats": {
        "power": 4,
        "speed": 1,
        "reach": 4,
        "defense": 5
      },
      "stage": "neva",
      "color": "#a63847",
      "accent": "#cce8ee",
      "skin": "#d3af91",
      "hair": "#453433",
      "attackStyle": "nikolai",
      "defenseName": "Escudo do Juramento",
      "finisher": {
        "name": "O Juramento Não Derrete",
        "line": "Enquanto eu estiver aqui, ninguém passa.",
        "kind": "nikolai"
      },
      "intro": "A ponte permanece guardada.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "shield-rim",
        "gauntlet-hook",
        "greave-kick"
      ],
      "superName": "A Ponte dos Invernos"
    },
    {
      "id": "zoya",
      "name": "Zoya Faísca",
      "title": "A Mecânica do Ferro-Velho",
      "origin": "Ecaterimburgo",
      "state": "RU",
      "region": "Eurásia",
      "country": "RU",
      "nationality": "Russa",
      "description": "Baixa, macacão amarelo manchado, mochila de ferramentas, tranças curtas e dois drones montados de sucata.",
      "personality": "Impulsiva e inventiva; acredita que nenhuma peça fica sem segunda vida.",
      "story": "Encontrou um rádio que recebia pedidos de socorro de máquinas ainda não construídas. Seus drones seguem o sinal para a origem.",
      "inspiration": "Mecânica do Ferro-Velho, tradições e imaginário de Rússia; personagem fictício de BRASA.",
      "style": "Mobilidade rápida com armadilhas elétricas. Danos diretos modestos, drones atrasados e pouca resistência no corpo a corpo.",
      "archetype": "Mobilidade rápida com armadilhas elétricas",
      "stats": {
        "power": 2,
        "speed": 5,
        "reach": 4,
        "defense": 2
      },
      "stage": "neva",
      "color": "#a63847",
      "accent": "#cce8ee",
      "skin": "#d3af91",
      "hair": "#453433",
      "attackStyle": "zoya",
      "defenseName": "Chave Isolada",
      "finisher": {
        "name": "A Cidade Liga de Novo",
        "line": "Sucata também tem futuro.",
        "kind": "zoya"
      },
      "intro": "Só precisa de um pequeno ajuste.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "wrench-tap",
        "mallet",
        "mechanic-boot"
      ],
      "superName": "Apagão Reverso"
    },
    {
      "id": "ren",
      "name": "Ren da Bainha Partida",
      "title": "O Ronin",
      "origin": "Kyoto",
      "state": "JP",
      "region": "Ásia",
      "country": "JP",
      "nationality": "Japonesa",
      "description": "Roupas índigo gastas, espada de lâmina reparada, bainha amarrada por cordas e cabelo preso baixo. Ombros relaxados, mão próxima à guarda.",
      "personality": "Contido e atento; só desembainha depois de ouvir o adversário.",
      "story": "O último corte do mestre deixou uma rachadura no mundo. Ren carrega a espada quebrada para fechar o que não soube impedir.",
      "inspiration": "Ronin, tradições e imaginário de Japão; personagem fictício de BRASA.",
      "style": "Cortes de alcance longo e tempo exato. O saque tem espera visível e saída veloz; errar a distância oferece uma punição grande.",
      "archetype": "Cortes de alcance longo e tempo exato",
      "stats": {
        "power": 4,
        "speed": 3,
        "reach": 5,
        "defense": 2
      },
      "stage": "kyoto",
      "color": "#c34846",
      "accent": "#ffe6aa",
      "skin": "#d8a480",
      "hair": "#272b3c",
      "attackStyle": "ren",
      "defenseName": "Bainha do Retorno",
      "finisher": {
        "name": "A Última Emenda",
        "line": "Nem toda quebra é o fim.",
        "kind": "ren"
      },
      "intro": "Eu termino o corte que faltou.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "scabbard-jab",
        "draw-cut",
        "heel-kick"
      ],
      "superName": "Linha do Horizonte"
    },
    {
      "id": "aya",
      "name": "Aya Fumaça",
      "title": "A Ninja Urbana",
      "origin": "Osaka",
      "state": "JP",
      "region": "Ásia",
      "country": "JP",
      "nationality": "Japonesa",
      "description": "Jaqueta curta cinza, calça de corrida escura, máscara azul e pequenas faixas luminosas nos pulsos. Lenço solto acompanha o giro.",
      "personality": "Provocadora e veloz; ri quando descobrem sua rota de fuga.",
      "story": "Mensageira de um bairro isolado por névoa, aprendeu a atravessar sombras para levar remédios. Agora procura quem fechou as saídas.",
      "inspiration": "Ninja Urbana, tradições e imaginário de Japão; personagem fictício de BRASA.",
      "style": "Mobilidade de teleporte com preparação e ataques aéreos. Pouco dano por golpe e recuperação vulnerável depois de trocar de lado.",
      "archetype": "Mobilidade de teleporte com preparação e ataques aéreos",
      "stats": {
        "power": 2,
        "speed": 5,
        "reach": 3,
        "defense": 2
      },
      "stage": "kyoto",
      "color": "#c34846",
      "accent": "#ffe6aa",
      "skin": "#d8a480",
      "hair": "#272b3c",
      "attackStyle": "aya",
      "defenseName": "Véu de Beco",
      "finisher": {
        "name": "O Beco Escolhe a Porta",
        "line": "Ainda existe um caminho.",
        "kind": "aya"
      },
      "intro": "Tente acompanhar.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "finger-jab",
        "ninja-elbow",
        "wall-kick"
      ],
      "superName": "Todas as Saídas",
      "movement": {
        "walk": 1.2,
        "backwalk": 0.89,
        "jump": 1.13
      }
    },
    {
      "id": "daigo",
      "name": "Daigo Montanha",
      "title": "O Lutador de Sumô",
      "origin": "Tóquio",
      "state": "JP",
      "region": "Ásia",
      "country": "JP",
      "nationality": "Japonesa",
      "description": "Corpo enorme, cabelo em nó tradicional e mawashi azul sem inscrições. Mãos abertas e base baixa transmitem firmeza.",
      "personality": "Sereno e respeitoso; dedica a vitória a quem mantém o bairro vivo.",
      "story": "O chão do salão de treino abriu para um ringue enterrado há séculos. Daigo protege os moradores enquanto busca o nome do antigo dono.",
      "inspiration": "Lutador de Sumô, tradições e imaginário de Japão; personagem fictício de BRASA.",
      "style": "Palmas, empurrões e agarrões curtos. Investidas protegidas compensam o caminhar lento, mas saltos e projéteis punem entradas previsíveis.",
      "archetype": "Palmas, empurrões e agarrões curtos",
      "stats": {
        "power": 5,
        "speed": 1,
        "reach": 3,
        "defense": 5
      },
      "stage": "kyoto",
      "color": "#c34846",
      "accent": "#ffe6aa",
      "skin": "#d8a480",
      "hair": "#272b3c",
      "attackStyle": "daigo",
      "defenseName": "Palmas do Dohyō",
      "finisher": {
        "name": "O Ringue Permanece",
        "line": "O chão é de todos nós.",
        "kind": "daigo"
      },
      "intro": "Vamos honrar este chão.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "open-palm",
        "two-hand-push",
        "sumo-stomp"
      ],
      "superName": "Raiz da Montanha"
    },
    {
      "id": "kitsune",
      "name": "Kitsune Rubra",
      "title": "A Raposa de Mil Truques",
      "origin": "Kyoto",
      "state": "JP",
      "region": "Ásia",
      "country": "JP",
      "nationality": "Japonesa",
      "description": "Máscara de raposa branca, roupa vermelha de mangas largas, pés leves e caudas espectrais de fogo que surgem apenas nos poderes.",
      "personality": "Travessa, orgulhosa e protetora de promessas antigas.",
      "story": "Uma promessa esquecida apagou as lanternas de seu santuário. Segue o som de uma festa que não termina para recuperar o nome de quem prometeu voltar.",
      "inspiration": "Raposa de Mil Truques, tradições e imaginário de Japão; personagem fictício de BRASA.",
      "style": "Ilusões e fogo lento. Muda os lados com um único corpo real e mistura projéteis de ritmos diferentes.",
      "archetype": "Ilusões e fogo lento",
      "stats": {
        "power": 2,
        "speed": 4,
        "reach": 4,
        "defense": 2
      },
      "stage": "kyoto",
      "color": "#c34846",
      "accent": "#ffe6aa",
      "skin": "#d8a480",
      "hair": "#272b3c",
      "attackStyle": "kitsune",
      "defenseName": "Máscara do Santuário",
      "finisher": {
        "name": "A Lanterna que Faltava",
        "line": "Você lembrou de voltar.",
        "kind": "kitsune"
      },
      "intro": "Não esqueça a promessa.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "claw-flick",
        "tail-fan",
        "fox-step"
      ],
      "superName": "Mil Lanternas Rubras"
    },
    {
      "id": "tetsu",
      "name": "Tetsu-9",
      "title": "O Piloto de Mecha",
      "origin": "Nagoya",
      "state": "JP",
      "region": "Ásia",
      "country": "JP",
      "nationality": "Japonesa",
      "description": "Armadura compacta de metal amarelo, cockpit aberto sobre o peito, braço direito enorme e esquerdo estreito com ferramentas. Jovem piloto de óculos de proteção.",
      "personality": "Entusiasmado e teimoso, mede confiança em reparos bem-feitos.",
      "story": "Construiu a armadura para salvar colegas de um laboratório soterrado. O motor respondeu a uma rocha lunar e continua apontando para o mesmo lugar.",
      "inspiration": "Piloto de Mecha, tradições e imaginário de Japão; personagem fictício de BRASA.",
      "style": "Punho assimétrico de alcance médio, projétil curto e investida de propulsão. A carga forte superaquece e o chassi grande facilita punições.",
      "archetype": "Punho assimétrico de alcance médio, projétil curto e investida de propulsão",
      "stats": {
        "power": 5,
        "speed": 2,
        "reach": 4,
        "defense": 4
      },
      "stage": "kyoto",
      "color": "#c34846",
      "accent": "#ffe6aa",
      "skin": "#d8a480",
      "hair": "#272b3c",
      "attackStyle": "tetsu",
      "defenseName": "Placa Assimétrica",
      "finisher": {
        "name": "O Motor Não Para",
        "line": "Ainda não terminamos o teste.",
        "kind": "tetsu"
      },
      "intro": "Desta vez vai funcionar.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "small-piston",
        "large-punch",
        "actuator-kick"
      ],
      "superName": "Décima Ignição"
    },
    {
      "id": "akari",
      "name": "Akari Neon",
      "title": "A Ídolo do Som",
      "origin": "Tóquio",
      "state": "JP",
      "region": "Ásia",
      "country": "JP",
      "nationality": "Japonesa",
      "description": "Jaqueta violeta curta, botas ciano luminosas, cabelo azul preso em duas mechas e microfone flutuante com anéis digitais.",
      "personality": "Alegre e determinada a cantar fora do roteiro imposto pela produtora.",
      "story": "Sua voz começou a chegar a rádios desligados. Ao ouvir uma segunda cantora presa no eco, Akari seguiu a frequência para libertá-la.",
      "inspiration": "Ídolo do Som, tradições e imaginário de Japão; personagem fictício de BRASA.",
      "style": "Ritmo de projéteis e passos rápidos. Pulsos separados controlam a distância, enquanto dano individual e defesa corporal permanecem baixos.",
      "archetype": "Ritmo de projéteis e passos rápidos",
      "stats": {
        "power": 2,
        "speed": 5,
        "reach": 4,
        "defense": 2
      },
      "stage": "kyoto",
      "color": "#c34846",
      "accent": "#ffe6aa",
      "skin": "#d8a480",
      "hair": "#272b3c",
      "attackStyle": "akari",
      "defenseName": "Pausa de Luz",
      "finisher": {
        "name": "A Voz Fora do Roteiro",
        "line": "Pode cantar comigo agora.",
        "kind": "akari"
      },
      "intro": "Essa voz é minha.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "beat-tap",
        "chorus-palm",
        "dance-kick"
      ],
      "superName": "Mil Vozes de Neon"
    },
    {
      "id": "goro",
      "name": "Goro Máscara-Vermelha",
      "title": "O Herdeiro Oni",
      "origin": "Yokohama",
      "state": "JP",
      "region": "Ásia",
      "country": "JP",
      "nationality": "Japonesa",
      "description": "Jaqueta aberta, cabelos pretos curtos, pequenos chifres e metade de uma máscara vermelha presa ao cinto. Braços marcados por veios carmesim.",
      "personality": "Temperamental, mas teme a força mais do que qualquer rival.",
      "story": "Herdou a máscara de um avô que sempre recusou explicar os chifres da família. Os portais acordaram a outra metade da linhagem.",
      "inspiration": "Herdeiro Oni, tradições e imaginário de Japão; personagem fictício de BRASA.",
      "style": "Pressão de curta distância que troca uma preparação longa por aumento temporário de força. Sem transformação precisa usar entradas simples.",
      "archetype": "Pressão de curta distância que troca uma preparação longa por aumento temporário de força",
      "stats": {
        "power": 4,
        "speed": 3,
        "reach": 2,
        "defense": 3
      },
      "stage": "kyoto",
      "color": "#c34846",
      "accent": "#ffe6aa",
      "skin": "#d8a480",
      "hair": "#272b3c",
      "attackStyle": "goro",
      "defenseName": "Guarda do Herdeiro",
      "finisher": {
        "name": "O Nome Não É a Maldição",
        "line": "Minha força responde a mim.",
        "kind": "goro"
      },
      "intro": "Eu ainda escolho quem sou.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "horn-fist",
        "oni-hammer",
        "heavy-heel"
      ],
      "superName": "A Outra Metade"
    },
    {
      "id": "mika",
      "name": "Mika Turbo",
      "title": "A Pilota das Madrugadas",
      "origin": "Yokohama",
      "state": "JP",
      "region": "Ásia",
      "country": "JP",
      "nationality": "Japonesa",
      "description": "Jaqueta verde-escura de motociclista, capacete grafite ao braço, cabelo curto roxo e botas largas com pequenos propulsores.",
      "personality": "Competitiva e generosa; sempre volta para buscar quem ficou na estrada.",
      "story": "Venceu uma corrida cuja linha de chegada se abria dentro de um túnel impossível. O motor ainda reproduz a voz do piloto desaparecido.",
      "inspiration": "Pilota das Madrugadas, tradições e imaginário de Japão; personagem fictício de BRASA.",
      "style": "Chutes e derrapagens velozes, grande deslocamento e pouca permanência. Arrancadas longas podem ser interceptadas e a freada exige espaço.",
      "archetype": "Chutes e derrapagens velozes, grande deslocamento e pouca permanência",
      "stats": {
        "power": 3,
        "speed": 5,
        "reach": 3,
        "defense": 2
      },
      "stage": "kyoto",
      "color": "#c34846",
      "accent": "#ffe6aa",
      "skin": "#d8a480",
      "hair": "#272b3c",
      "attackStyle": "mika",
      "defenseName": "Antebraço do Guidão",
      "finisher": {
        "name": "A Estrada Ainda Tem Volta",
        "line": "Ninguém fica no túnel.",
        "kind": "mika"
      },
      "intro": "Depois da curva eu espero você.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "handle-jab",
        "turn-elbow",
        "racing-kick"
      ],
      "superName": "Última Curva da Noite"
    },
    {
      "id": "shiori",
      "name": "Shiori Papel-Vivo",
      "title": "A Guardiã dos Selos",
      "origin": "Nara",
      "state": "JP",
      "region": "Ásia",
      "country": "JP",
      "nationality": "Japonesa",
      "description": "Roupa cerimonial branca e verde estilizada, mangas curtas para combate e tiras de papel presas ao cinto. Cabelo longo preso com uma dobra de origami.",
      "personality": "Gentil e precisa; escolhe cada palavra como escolhe cada dobra.",
      "story": "A biblioteca do santuário começou a perder páginas por dentro. Shiori aprendeu a animar o papel para perseguir a história que alguém apaga.",
      "inspiration": "Guardiã dos Selos, tradições e imaginário de Japão; personagem fictício de BRASA.",
      "style": "Armadilhas e projéteis em leque. Frágil de perto, precisa organizar a distância e não pode manter mais de um selo de cada tipo.",
      "archetype": "Armadilhas e projéteis em leque",
      "stats": {
        "power": 2,
        "speed": 3,
        "reach": 5,
        "defense": 2
      },
      "stage": "kyoto",
      "color": "#c34846",
      "accent": "#ffe6aa",
      "skin": "#d8a480",
      "hair": "#272b3c",
      "attackStyle": "shiori",
      "defenseName": "Leque de Selos",
      "finisher": {
        "name": "A Página que Resiste",
        "line": "Ninguém vai apagar seu nome.",
        "kind": "shiori"
      },
      "intro": "Toda história deixa uma dobra.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "paper-edge",
        "folded-palm",
        "crane-step"
      ],
      "superName": "Biblioteca das Asas"
    },
    {
      "id": "liang",
      "name": "Liang Punho de Bronze",
      "title": "O Mestre do Templo",
      "origin": "Luoyang, Henan",
      "state": "CN",
      "region": "Ásia",
      "country": "CN",
      "nationality": "Chinesa",
      "description": "Cabeça raspada, roupas de treino ocre, braceletes de bronze e faixa verde. A postura equilibra uma mão aberta e outra fechada.",
      "personality": "Paciente, firme e disposto a aprender mesmo de um rival novato.",
      "story": "O sino do templo passou a soar sem vento. Liang procura o eco perdido que fazia seus alunos dormirem sem pesadelos.",
      "inspiration": "Mestre do Templo, tradições e imaginário de China; personagem fictício de BRASA.",
      "style": "Palmas e chutes equilibrados. Possui projétil simples, resposta de guarda e golpe ascendente sem extremos de dano ou alcance.",
      "archetype": "Palmas e chutes equilibrados",
      "stats": {
        "power": 3,
        "speed": 3,
        "reach": 3,
        "defense": 4
      },
      "stage": "longmen",
      "color": "#bc7340",
      "accent": "#e6d387",
      "skin": "#bc8a68",
      "hair": "#293a36",
      "attackStyle": "liang",
      "defenseName": "Braceletes do Pátio",
      "finisher": {
        "name": "O Sino Volta a Soar",
        "line": "O próximo passo ainda ensina.",
        "kind": "liang"
      },
      "intro": "Encontre a sua medida.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "open-palm",
        "bronze-punch",
        "temple-roundhouse"
      ],
      "superName": "Oitavo Eco de Bronze"
    },
    {
      "id": "mei",
      "name": "Mei Fita de Seda",
      "title": "A Acrobata",
      "origin": "Hangzhou, Zhejiang",
      "state": "CN",
      "region": "Ásia",
      "country": "CN",
      "nationality": "Chinesa",
      "description": "Roupa turquesa e coral, mangas ajustadas, duas fitas compridas nos punhos e cabelo em coque baixo. Silhueta leve, pernas alongadas.",
      "personality": "Acolhedora fora do palco, impiedosa com quem puxa os fios dos outros.",
      "story": "Sua companhia desapareceu durante uma apresentação à beira do lago. As fitas continuam formando os nomes das pessoas ausentes.",
      "inspiration": "Acrobata, tradições e imaginário de China; personagem fictício de BRASA.",
      "style": "Alcance elástico e puxões. Os golpes largos anunciam o lado e deixam abertura curta para ataques por dentro das fitas.",
      "archetype": "Alcance elástico e puxões",
      "stats": {
        "power": 2,
        "speed": 4,
        "reach": 5,
        "defense": 2
      },
      "stage": "longmen",
      "color": "#bc7340",
      "accent": "#e6d387",
      "skin": "#bc8a68",
      "hair": "#293a36",
      "attackStyle": "mei",
      "defenseName": "Círculo do Punho",
      "finisher": {
        "name": "O Fio dos Ausentes",
        "line": "Ninguém vai puxar nossos nomes.",
        "kind": "mei"
      },
      "intro": "O próximo laço é seu.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "ribbon-tip",
        "ribbon-loop",
        "cartwheel"
      ],
      "superName": "Constelação de Seda"
    },
    {
      "id": "barro",
      "name": "General Barro",
      "title": "O Guerreiro de Terracota",
      "origin": "Xi’an, Shaanxi",
      "state": "CN",
      "region": "Ásia",
      "country": "CN",
      "nationality": "Chinesa",
      "description": "Corpo de argila vermelha, armadura moldada, lança curta rachada e luz dourada nas fissuras. Movimentos angulares de peso mineral.",
      "personality": "Solenemente curioso com a vida que lhe negaram observar.",
      "story": "Abriu os olhos quando um colecionador roubou o nome de seu exército. Caminha para devolver cada soldado ao descanso.",
      "inspiration": "Guerreiro de Terracota, tradições e imaginário de China; personagem fictício de BRASA.",
      "style": "Tanque de lança e armadilhas terrestres. Domina a ponta da arma, mas a mobilidade baixa e a preparação da argila permitem saltos.",
      "archetype": "Tanque de lança e armadilhas terrestres",
      "stats": {
        "power": 5,
        "speed": 1,
        "reach": 5,
        "defense": 5
      },
      "stage": "longmen",
      "color": "#bc7340",
      "accent": "#e6d387",
      "skin": "#bc8a68",
      "hair": "#293a36",
      "attackStyle": "barro",
      "defenseName": "Couraça de Terracota",
      "finisher": {
        "name": "O Exército Pode Dormir",
        "line": "Cada nome será devolvido.",
        "kind": "barro"
      },
      "intro": "Soldados, guardem seus nomes.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "spear-thrust",
        "spear-butt",
        "stone-step"
      ],
      "superName": "A Última Formação"
    },
    {
      "id": "lin",
      "name": "Lin da Lua Branca",
      "title": "A Espadachim Errante",
      "origin": "Suzhou, Jiangsu",
      "state": "CN",
      "region": "Ásia",
      "country": "CN",
      "nationality": "Chinesa",
      "description": "Roupa clara de abas curtas, espada fina de guarda jade, cabelo preso por fita branca e botas macias.",
      "personality": "Reservada, mas incapaz de deixar um pedido sem resposta.",
      "story": "A espada herdada da mãe passou a refletir uma Lua partida. Lin segue os rios para entender qual reflexo ainda é verdadeiro.",
      "inspiration": "Espadachim Errante, tradições e imaginário de China; personagem fictício de BRASA.",
      "style": "Espada de precisão, desvio e mobilidade aérea. Cortes finos de pouco dano punem erros; lutar plantada contra peso é arriscado.",
      "archetype": "Espada de precisão, desvio e mobilidade aérea",
      "stats": {
        "power": 3,
        "speed": 5,
        "reach": 5,
        "defense": 2
      },
      "stage": "longmen",
      "color": "#bc7340",
      "accent": "#e6d387",
      "skin": "#bc8a68",
      "hair": "#293a36",
      "attackStyle": "lin",
      "defenseName": "Fio do Reflexo",
      "finisher": {
        "name": "A Lua Escolhe o Rio",
        "line": "O reflexo não muda meu caminho.",
        "kind": "lin"
      },
      "intro": "Uma só lua basta.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "jian-tip",
        "crescent-cut",
        "moon-kick"
      ],
      "superName": "Margem da Lua Partida"
    },
    {
      "id": "bo",
      "name": "Bo Panela de Ferro",
      "title": "O Cozinheiro Lutador",
      "origin": "Chengdu, Sichuan",
      "state": "CN",
      "region": "Ásia",
      "country": "CN",
      "nationality": "Chinesa",
      "description": "Avental chamuscado sobre camisa azul, wok escura, concha de metal e lenço laranja. Braços fortes e base firme.",
      "personality": "Barulhento e generoso; não permite que alguém saia de sua porta com fome.",
      "story": "Seu restaurante passou a servir refeições pedidas por pessoas desaparecidas. Bo segue os pedidos até a cozinha que abastece as fissuras.",
      "inspiration": "Cozinheiro Lutador, tradições e imaginário de China; personagem fictício de BRASA.",
      "style": "Luta próxima de panela e calor. A wok fortalece respostas frontais, enquanto chamas curtas afastam pressão e perdem para distância longa.",
      "archetype": "Luta próxima de panela e calor",
      "stats": {
        "power": 4,
        "speed": 2,
        "reach": 3,
        "defense": 4
      },
      "stage": "longmen",
      "color": "#bc7340",
      "accent": "#e6d387",
      "skin": "#bc8a68",
      "hair": "#293a36",
      "attackStyle": "bo",
      "defenseName": "Panela na Frente",
      "finisher": {
        "name": "A Última Mesa",
        "line": "Tem comida para todo mundo.",
        "kind": "bo"
      },
      "intro": "Quem terminar primeiro lava a louça.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "ladle-tap",
        "wok-smash",
        "counter-kick"
      ],
      "superName": "Banquete das Chamas"
    },
    {
      "id": "qiao",
      "name": "Qiao Nuvem",
      "title": "A Inventora de Drones",
      "origin": "Shenzhen, Guangdong",
      "state": "CN",
      "region": "Ásia",
      "country": "CN",
      "nationality": "Chinesa",
      "description": "Jaqueta branca de bolsos verdes, óculos digitais quadrados, luvas finas e drone dobrável no ombro.",
      "personality": "Rápida no raciocínio, impaciente com burocracia e cuidadosa com cada criação.",
      "story": "Seus drones mapearam uma avenida que não existe, sempre sob a mesma Lua. Qiao entra no torneio seguindo a rua fantasma.",
      "inspiration": "Inventora de Drones, tradições e imaginário de China; personagem fictício de BRASA.",
      "style": "Controle de espaço com máquinas lentas e armadilhas marcadas. Pouca defesa corporal torna a pressão próxima seu maior risco.",
      "archetype": "Controle de espaço com máquinas lentas e armadilhas marcadas",
      "stats": {
        "power": 2,
        "speed": 3,
        "reach": 5,
        "defense": 1
      },
      "stage": "longmen",
      "color": "#bc7340",
      "accent": "#e6d387",
      "skin": "#bc8a68",
      "hair": "#293a36",
      "attackStyle": "qiao",
      "defenseName": "Placa de Emergência",
      "finisher": {
        "name": "A Cidade que Não Existia",
        "line": "O mapa agora é nosso.",
        "kind": "qiao"
      },
      "intro": "Encontrei o ponto de origem.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "sensor-tap",
        "antenna-cut",
        "board-step"
      ],
      "superName": "Céu em Formação"
    },
    {
      "id": "shen",
      "name": "Shen Passo-Selado",
      "title": "O Jiangshi",
      "origin": "Cantão, Guangdong",
      "state": "CN",
      "region": "Ásia",
      "country": "CN",
      "nationality": "Chinesa",
      "description": "Roupa antiga azul-escura, pele pálida, braços estendidos e selo amarelo na testa. Botas rígidas deixam pequenos rastros de pó.",
      "personality": "Fala por fragmentos de memórias; resiste à ordem escrita no selo.",
      "story": "Enterrado com um nome falso, despertou ao ouvir seu nome verdadeiro do outro lado de uma parede. Salta atrás da voz para recuperar a própria história.",
      "inspiration": "Jiangshi, tradições e imaginário de China; personagem fictício de BRASA.",
      "style": "Saltos curtos, agarrão de drenagem e projétil lento. Mantém energia ao acertar perto, mas sua aproximação previsível pode ser interceptada.",
      "archetype": "Saltos curtos, agarrão de drenagem e projétil lento",
      "stats": {
        "power": 3,
        "speed": 2,
        "reach": 4,
        "defense": 3
      },
      "stage": "longmen",
      "color": "#bc7340",
      "accent": "#e6d387",
      "skin": "#bc8a68",
      "hair": "#293a36",
      "attackStyle": "shen",
      "defenseName": "Braços Selados",
      "finisher": {
        "name": "O Nome Sob o Selo",
        "line": "Eu me lembro.",
        "kind": "shen"
      },
      "intro": "Meu nome não é essa ordem.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "stiff-fingers",
        "stiff-palm",
        "hopping-kick"
      ],
      "superName": "Memória Devolvida"
    },
    {
      "id": "long",
      "name": "Long Escama-Jade",
      "title": "O Guardião do Rio",
      "origin": "Guilin, Guangxi",
      "state": "CN",
      "region": "Ásia",
      "country": "CN",
      "nationality": "Chinesa",
      "description": "Chifres curtos, escamas verdes nos antebraços, faixa jade, calça escura e cabelos longos presos por um aro de cobre.",
      "personality": "Digno e curioso; prefere convencer, mas não negocia o leito do rio.",
      "story": "O rio começou a correr para cima nos sonhos da cidade. Long procura a pedra arrancada de sua nascente, agora usada para alimentar um portal.",
      "inspiration": "Guardião do Rio, tradições e imaginário de China; personagem fictício de BRASA.",
      "style": "Água sinuosa, projétil de empurrão e excelente golpe ascendente. A defesa paciente pune o pouso e a preparação de ondas.",
      "archetype": "Água sinuosa, projétil de empurrão e excelente golpe ascendente",
      "stats": {
        "power": 3,
        "speed": 4,
        "reach": 4,
        "defense": 3
      },
      "stage": "longmen",
      "color": "#bc7340",
      "accent": "#e6d387",
      "skin": "#bc8a68",
      "hair": "#293a36",
      "attackStyle": "long",
      "defenseName": "Escamas do Leito",
      "finisher": {
        "name": "O Rio Retoma o Leito",
        "line": "Ninguém desvia toda a água.",
        "kind": "long"
      },
      "intro": "O rio conhece a volta.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "scale-palm",
        "jade-arc",
        "tail-sweep"
      ],
      "superName": "Céu da Nascente"
    },
    {
      "id": "yan",
      "name": "Yan Máscara Mutável",
      "title": "O Artista dos Rostos",
      "origin": "Chengdu, Sichuan",
      "state": "CN",
      "region": "Ásia",
      "country": "CN",
      "nationality": "Chinesa",
      "description": "Figurino teatral roxo e dourado com abas curtas, máscara de ópera vermelha e pequenos leques nos punhos.",
      "personality": "Expressivo e atento, guarda sentimentos que não cabem nas máscaras.",
      "story": "Uma máscara roubada começou a representar uma peça antes de ela acontecer. Yan procura o ator que representa seu próprio desaparecimento.",
      "inspiration": "Bian lian, arte de mudança de máscaras da ópera de Sichuan; o artista e o conflito são fictícios.",
      "style": "Três posturas: velocidade, guarda e força. A troca custa uma preparação sem golpe e o bônus temporário precisa ser aproveitado.",
      "archetype": "Três posturas: velocidade, guarda e força",
      "stats": {
        "power": 3,
        "speed": 3,
        "reach": 4,
        "defense": 3
      },
      "stage": "longmen",
      "color": "#bc7340",
      "accent": "#e6d387",
      "skin": "#bc8a68",
      "hair": "#293a36",
      "attackStyle": "yan",
      "defenseName": "Face Imóvel",
      "finisher": {
        "name": "O Rosto Por Trás",
        "line": "Hoje eu escolho a peça.",
        "kind": "yan"
      },
      "intro": "Cada rosto conta uma verdade.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "fan-flick",
        "opera-palm",
        "stage-step"
      ],
      "superName": "A Peça que Não Foi Escrita"
    },
    {
      "id": "marco",
      "name": "Marco Arena",
      "title": "O Gladiador Retornado",
      "origin": "Roma",
      "state": "IT",
      "region": "Europa",
      "country": "IT",
      "nationality": "Italiana",
      "description": "Capacete antigo de crista curta, escudo redondo pequeno, couraça incompleta e sandálias reforçadas. Cicatrizes de pedra cruzam os braços.",
      "personality": "Direto e leal; deseja lutar por escolha, sem dono nem arquibancada mandando.",
      "story": "Retornou quando uma escavação abriu a arena onde perdera o nome. Procura as placas que registravam os lutadores como pessoas.",
      "inspiration": "Gladiador Retornado, tradições e imaginário de Itália; personagem fictício de BRASA.",
      "style": "Pressão de escudo e contra-ataques curtos. O avanço protegido perde para agarrões; sem alcance precisa conquistar terreno.",
      "archetype": "Pressão de escudo e contra-ataques curtos",
      "stats": {
        "power": 4,
        "speed": 2,
        "reach": 3,
        "defense": 5
      },
      "stage": "venezia",
      "color": "#386e75",
      "accent": "#d9ac6a",
      "skin": "#c79273",
      "hair": "#342d35",
      "attackStyle": "marco",
      "defenseName": "Escudo de Escolha",
      "finisher": {
        "name": "O Nome da Arena",
        "line": "Eu escolho por quem lutar.",
        "kind": "marco"
      },
      "intro": "Meu nome não pertence à plateia.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "shield-jab",
        "gladiator-cross",
        "greave-kick"
      ],
      "superName": "Arena dos Nomes Livres"
    },
    {
      "id": "vittoria",
      "name": "Vittoria Rosso",
      "title": "A Pilota de Corrida",
      "origin": "Modena",
      "state": "IT",
      "region": "Europa",
      "country": "IT",
      "nationality": "Italiana",
      "description": "Macacão vermelho sem marcas reais, cabelo preto curto, luvas reforçadas e braceletes que acumulam luz conforme ela se move.",
      "personality": "Competitiva e franca; prefere perder uma corrida a vencer com motor alheio.",
      "story": "Sua equipe testou uma bateria feita de rocha lunar. O protótipo sumiu na reta e os cronômetros continuaram contando.",
      "inspiration": "Pilota de Corrida, tradições e imaginário de Itália; personagem fictício de BRASA.",
      "style": "Arrancadas em série e esquivas curtas. A velocidade cobra recuperação no fim da sequência, abrindo espaço a guardas pacientes.",
      "archetype": "Arrancadas em série e esquivas curtas",
      "stats": {
        "power": 3,
        "speed": 5,
        "reach": 3,
        "defense": 2
      },
      "stage": "venezia",
      "color": "#386e75",
      "accent": "#d9ac6a",
      "skin": "#c79273",
      "hair": "#342d35",
      "attackStyle": "vittoria",
      "defenseName": "Braço de Frenagem",
      "finisher": {
        "name": "A Reta Depois do Tempo",
        "line": "Ainda cabe mais uma volta.",
        "kind": "vittoria"
      },
      "intro": "Eu trouxe meu próprio tempo.",
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "wrist-jab",
        "race-elbow",
        "straight-kick"
      ],
      "superName": "Cronômetro Vermelho",
      "passive": {
        "kind": "movementCharge",
        "description": "Movimento carrega o efeito visual dos braceletes; energia segue as regras normais de combate."
      }
    },
    {
      "id": "luca",
      "name": "Luca Farina",
      "title": "O Pizzaiolo Brigão",
      "origin": "Nápoles",
      "state": "IT",
      "region": "Europa",
      "country": "IT",
      "nationality": "Italiana",
      "description": "Avental de farinha, camiseta verde, pá de forno comprida e cabelo escuro preso por um lenço branco. Braços fortes, sorriso aberto.",
      "personality": "Bem-humorado e teimoso com as receitas da família.",
      "story": "O forno começou a aquecer mesmo apagado e a assar bilhetes com pedidos de ajuda. Luca procura quem está preso além da chama.",
      "inspiration": "Pizzaiolo Brigão, tradições e imaginário de Itália; personagem fictício de BRASA.",
      "style": "Grande alcance de pá e varreduras baixas. Forte ao manter distância, vulnerável entre o corpo e a ponta da ferramenta.",
      "archetype": "Grande alcance de pá e varreduras baixas",
      "stats": {
        "power": 4,
        "speed": 2,
        "reach": 5,
        "defense": 3
      },
      "stage": "venezia",
      "color": "#386e75",
      "accent": "#d9ac6a",
      "skin": "#c79273",
      "hair": "#342d35",
      "attackStyle": "luca",
      "defenseName": "Pá de Porta",
      "finisher": {
        "name": "A Última Fornada",
        "line": "A casa ainda está aberta.",
        "kind": "luca"
      },
      "intro": "Vai querer a conta agora?",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "peel-tap",
        "peel-swing",
        "flour-kick"
      ],
      "superName": "Calor de Casa"
    },
    {
      "id": "belladonna",
      "name": "Belladonna",
      "title": "A Duelista de Veneza",
      "origin": "Veneza",
      "state": "IT",
      "region": "Europa",
      "country": "IT",
      "nationality": "Italiana",
      "description": "Máscara branca de carnaval, capa curta vinho, florete fino, luva longa e botas ajustadas. A ponta da arma nunca fica imóvel.",
      "personality": "Elegante e provocadora; gosta mais de uma resposta precisa do que de um aplauso.",
      "story": "Seu retrato foi visto numa festa marcada para o século seguinte. Duelou para retirar o quadro e encontrou atrás dele um canal sem água.",
      "inspiration": "Duelista de Veneza, tradições e imaginário de Itália; personagem fictício de BRASA.",
      "style": "Punição por alcance e desvio. Estocadas rápidas e contra-ataques leves vencem erros; a defesa e o dano sustentado são modestos.",
      "archetype": "Punição por alcance e desvio",
      "stats": {
        "power": 3,
        "speed": 5,
        "reach": 5,
        "defense": 2
      },
      "stage": "venezia",
      "color": "#386e75",
      "accent": "#d9ac6a",
      "skin": "#c79273",
      "hair": "#342d35",
      "attackStyle": "belladonna",
      "defenseName": "Guarda de Salão",
      "finisher": {
        "name": "O Baile Escolhe o Fim",
        "line": "Sua resposta chegou tarde.",
        "kind": "belladonna"
      },
      "intro": "Aceita o convite?",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "rapier-point",
        "lunge",
        "cape-step"
      ],
      "superName": "Carnaval da Última Lâmina"
    },
    {
      "id": "enzo",
      "name": "Enzo Engrenagem",
      "title": "O Inventor Renascentista",
      "origin": "Florença",
      "state": "IT",
      "region": "Europa",
      "country": "IT",
      "nationality": "Italiana",
      "description": "Avental de couro, óculos redondos e exoesqueleto de madeira escura com engrenagens de bronze. As asas dobradas formam um volume nas costas.",
      "personality": "Meticuloso ao desenhar e imprudente ao testar.",
      "story": "Encontrou o desenho de sua máquina num caderno séculos mais velho que ele. Cada teste revela uma peça do mapa lunar.",
      "inspiration": "Inventor Renascentista, tradições e imaginário de Itália; personagem fictício de BRASA.",
      "style": "Saltos mecânicos, ferramentas extensas e ataques de descida. Precisa prever a aproximação por causa das preparações longas.",
      "archetype": "Saltos mecânicos, ferramentas extensas e ataques de descida",
      "stats": {
        "power": 4,
        "speed": 2,
        "reach": 5,
        "defense": 3
      },
      "stage": "venezia",
      "color": "#386e75",
      "accent": "#d9ac6a",
      "skin": "#c79273",
      "hair": "#342d35",
      "attackStyle": "enzo",
      "defenseName": "Placas de Bancada",
      "finisher": {
        "name": "O Desenho Sai do Papel",
        "line": "A queda também faz parte do teste.",
        "kind": "enzo"
      },
      "intro": "Desta vez eu calculei a volta.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "pin-jab",
        "lever-punch",
        "cam-kick"
      ],
      "superName": "Caderno do Céu"
    },
    {
      "id": "bianca",
      "name": "Bianca Mármore",
      "title": "A Escultura Viva",
      "origin": "Carrara",
      "state": "IT",
      "region": "Europa",
      "country": "IT",
      "nationality": "Italiana",
      "description": "Corpo de mármore branco, rachaduras douradas, tecido esculpido num ombro e cabelos moldados em ondas curtas. Cada passo solta pequenos grãos claros.",
      "personality": "Curiosa e intensa; aprende a distinguir admiração de posse.",
      "story": "Despertou quando uma colecionadora tentou completar seu rosto com pedra lunar. Bianca partiu antes que outra pessoa decidisse sua expressão.",
      "inspiration": "Escultura Viva, tradições e imaginário de Itália; personagem fictício de BRASA.",
      "style": "Tanque lento com punhos de pedra e armadura curta. Alcance pesado pune erros, enquanto agarrões e pressão baixa exploram a pouca mobilidade.",
      "archetype": "Tanque lento com punhos de pedra e armadura curta",
      "stats": {
        "power": 5,
        "speed": 1,
        "reach": 4,
        "defense": 5
      },
      "stage": "venezia",
      "color": "#386e75",
      "accent": "#d9ac6a",
      "skin": "#c79273",
      "hair": "#342d35",
      "attackStyle": "bianca",
      "defenseName": "Mármore Cruzado",
      "finisher": {
        "name": "A Forma que Escolhi",
        "line": "Meu rosto ainda é meu.",
        "kind": "bianca"
      },
      "intro": "Eu não sou a peça que faltava.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "marble-knuckle",
        "stone-fist",
        "quarry-step"
      ],
      "superName": "Autorretrato de Pedra"
    },
    {
      "id": "rocco",
      "name": "Rocco Cinzas",
      "title": "O Herdeiro do Vulcão",
      "origin": "Catânia, Sicília",
      "state": "IT",
      "region": "Europa",
      "country": "IT",
      "nationality": "Italiana",
      "description": "Botas de trabalho pesadas, calça cinza, braços nus com fissuras incandescentes e cabelo coberto de cinza clara.",
      "personality": "Intenso e protetor; aprendeu a parar antes de deixar a raiva queimar a casa.",
      "story": "Uma erupção revelou um túnel que o chamava pelo nome do pai. Rocco saiu com calor sob a pele e uma cidade inteira para proteger.",
      "inspiration": "Herdeiro do Vulcão, tradições e imaginário de Itália; personagem fictício de BRASA.",
      "style": "Acúmulo de calor e explosão curta. O dano alto exige proximidade e preparação; projéteis longos forçam aproximações pacientes.",
      "archetype": "Acúmulo de calor e explosão curta",
      "stats": {
        "power": 5,
        "speed": 2,
        "reach": 3,
        "defense": 3
      },
      "stage": "venezia",
      "color": "#386e75",
      "accent": "#d9ac6a",
      "skin": "#c79273",
      "hair": "#342d35",
      "attackStyle": "rocco",
      "defenseName": "Antebraço de Escória",
      "finisher": {
        "name": "A Montanha Respira",
        "line": "O calor também sabe proteger.",
        "kind": "rocco"
      },
      "intro": "Eu seguro esta montanha.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "slag-jab",
        "ash-hammer",
        "crater-stomp"
      ],
      "superName": "Coração do Vulcão"
    },
    {
      "id": "tenor",
      "name": "Tenor Tempesta",
      "title": "A Voz que Quebra Pedra",
      "origin": "Milão",
      "state": "IT",
      "region": "Europa",
      "country": "IT",
      "nationality": "Italiana",
      "description": "Casaca azul de abas curtas, lenço prateado, bigode bem aparado e colete escuro. Peito aberto, braço esquerdo sempre conduzindo a frase.",
      "personality": "Grandioso no palco e delicado com quem está começando.",
      "story": "Sua nota mais longa revelou um segundo teatro atrás da cortina. As cadeiras guardavam as vozes de todos os cantores esquecidos.",
      "inspiration": "Voz que Quebra Pedra, tradições e imaginário de Itália; personagem fictício de BRASA.",
      "style": "Ondas de som com preparações diferentes. Controla empurrão e distância, mas sofre quando o rival interrompe a respiração de perto.",
      "archetype": "Ondas de som com preparações diferentes",
      "stats": {
        "power": 4,
        "speed": 2,
        "reach": 5,
        "defense": 3
      },
      "stage": "venezia",
      "color": "#386e75",
      "accent": "#d9ac6a",
      "skin": "#c79273",
      "hair": "#342d35",
      "attackStyle": "tenor",
      "defenseName": "Pausa de Compasso",
      "finisher": {
        "name": "O Teatro se Lembra",
        "line": "Nenhuma voz merece o esquecimento.",
        "kind": "tenor"
      },
      "intro": "Escute até o último compasso.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "conductor-tap",
        "audience-palm",
        "opera-step"
      ],
      "superName": "Ária dos Esquecidos"
    },
    {
      "id": "nonna",
      "name": "Nonna Notte",
      "title": "A Viajante da Meia-Noite",
      "origin": "Urbania, Marche",
      "state": "IT",
      "region": "Europa",
      "country": "IT",
      "nationality": "Italiana",
      "description": "Xale remendado, bolsa encantada, vassoura torta e botas de vários consertos. Cabelo branco curto, olhos atentos sob um lenço verde.",
      "personality": "Afetuosa e sarcástica; lembra de cada presente e de cada dívida.",
      "story": "Uma noite sua bolsa devolveu cartas de crianças ainda não nascidas. Seguiu os pedidos para impedir que o futuro fosse trocado por cinzas.",
      "inspiration": "Befana, viajante do folclore italiano; personagem e magia próprias de BRASA.",
      "style": "Carvões atrasados e vassoura de alcance. Muito preparo, ótima ocupação de chão e dificuldade ao defender pressão imediata.",
      "archetype": "Carvões atrasados e vassoura de alcance",
      "stats": {
        "power": 2,
        "speed": 2,
        "reach": 5,
        "defense": 3
      },
      "stage": "venezia",
      "color": "#386e75",
      "accent": "#d9ac6a",
      "skin": "#c79273",
      "hair": "#342d35",
      "attackStyle": "nonna",
      "defenseName": "Cabo na Soleira",
      "finisher": {
        "name": "A Noite Ainda Entrega",
        "line": "Seu futuro não cabe nessa cinza.",
        "kind": "nonna"
      },
      "intro": "Eu sei quem merece qual presente.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "broom-tip",
        "bag-swing",
        "chimney-boot"
      ],
      "superName": "Bolsa das Noites Futuras"
    },
    {
      "id": "arthur",
      "name": "Arthur Ferrugem",
      "title": "O Último Cavaleiro",
      "origin": "York",
      "state": "GB",
      "region": "Europa",
      "country": "GB",
      "nationality": "Inglesa",
      "description": "Armadura antiga remendada com placas modernas, espada larga de ponta gasta, escudo de ombro e barba curta avermelhada.",
      "personality": "Sério e generoso; mede juramentos por quem será protegido.",
      "story": "Acordou quando uma ponte de seu antigo reino apareceu numa estação moderna. A promessa gravada na espada não revela a quem foi feita.",
      "inspiration": "Último Cavaleiro, tradições e imaginário de Inglaterra; personagem fictício de BRASA.",
      "style": "Espada de longo alcance, guarda firme e pouca mobilidade. Golpes fortes exigem preparo e são vulneráveis a entradas por baixo.",
      "archetype": "Espada de longo alcance, guarda firme e pouca mobilidade",
      "stats": {
        "power": 5,
        "speed": 1,
        "reach": 5,
        "defense": 5
      },
      "stage": "london",
      "color": "#66647d",
      "accent": "#cbb594",
      "skin": "#c09b83",
      "hair": "#35323e",
      "attackStyle": "arthur",
      "defenseName": "Guarda do Juramento",
      "finisher": {
        "name": "A Promessa Atravessa o Tempo",
        "line": "Eu ainda respondo pelo juramento.",
        "kind": "arthur"
      },
      "intro": "Meu dever ainda tem um nome.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "sword-pommel",
        "broad-slash",
        "greave-kick"
      ],
      "superName": "Reino de Palavra"
    },
    {
      "id": "dex",
      "name": "Dex Riot",
      "title": "O Punk de Londres",
      "origin": "Londres",
      "state": "GB",
      "region": "Europa",
      "country": "GB",
      "nationality": "Inglesa",
      "description": "Moicano verde, jaqueta roxa com remendos inventados, coturnos pretos e calça vermelha gasta.",
      "personality": "Provocador, solidário e incapaz de obedecer por hábito.",
      "story": "Seu porão de ensaio foi tomado por relógios que contam a demolição do bairro. Dex busca quem vendeu o amanhã de sua rua.",
      "inspiration": "Punk de Londres, tradições e imaginário de Inglaterra; personagem fictício de BRASA.",
      "style": "Agressão de curtíssimo alcance, cabeçadas e cotovelos. Pressão rápida perde para alcance, guarda sólida e ataques aéreos bem espaçados.",
      "archetype": "Agressão de curtíssimo alcance, cabeçadas e cotovelos",
      "stats": {
        "power": 3,
        "speed": 5,
        "reach": 2,
        "defense": 2
      },
      "stage": "london",
      "color": "#66647d",
      "accent": "#cbb594",
      "skin": "#c09b83",
      "hair": "#35323e",
      "attackStyle": "dex",
      "defenseName": "Jaqueta de Rebites",
      "finisher": {
        "name": "O Porão Ainda Grita",
        "line": "Meu bairro não está à venda.",
        "kind": "dex"
      },
      "intro": "Agora escuta a rua.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "punk-jab",
        "headbutt",
        "combat-boot"
      ],
      "superName": "Motim de Meia-Noite"
    },
    {
      "id": "grey",
      "name": "Agente Grey",
      "title": "O Espião Impecável",
      "origin": "Londres",
      "state": "GB",
      "region": "Europa",
      "country": "GB",
      "nationality": "Inglesa",
      "description": "Terno cinza perfeitamente ajustado, luvas escuras, guarda-chuva preto e abotoaduras de cobre. Cabelo grisalho sem um fio fora do lugar.",
      "personality": "Cortês, calculista e mais fiel às pessoas do que ao arquivo.",
      "story": "Recebeu uma ordem assinada por sua própria mão, com data futura. A missão apontava para a extinção de todos os registros de seu país.",
      "inspiration": "Espião Impecável, tradições e imaginário de Inglaterra; personagem fictício de BRASA.",
      "style": "Guarda-chuva de resposta e dispositivos de preparação. Controla a média distância, mas armadilhas marcadas permitem ao rival saltar.",
      "archetype": "Guarda-chuva de resposta e dispositivos de preparação",
      "stats": {
        "power": 3,
        "speed": 3,
        "reach": 5,
        "defense": 4
      },
      "stage": "london",
      "color": "#66647d",
      "accent": "#cbb594",
      "skin": "#c09b83",
      "hair": "#35323e",
      "attackStyle": "grey",
      "defenseName": "Cúpula de Chuva",
      "finisher": {
        "name": "O Dossiê Sem Assinatura",
        "line": "A previsão mudou.",
        "kind": "grey"
      },
      "intro": "Receio que a reunião acabou.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "umbrella-tip",
        "cane-hook",
        "dress-shoe"
      ],
      "superName": "Protocolo da Tempestade"
    },
    {
      "id": "eleanor",
      "name": "Eleanor Névoa",
      "title": "A Dama do Casarão",
      "origin": "Northumberland",
      "state": "GB",
      "region": "Europa",
      "country": "GB",
      "nationality": "Inglesa",
      "description": "Vestido vitoriano azul-acinzentado com saia curta na frente para ler os pés, véu flutuante, luvas claras e broche escuro.",
      "personality": "Suave e incisiva; guarda raiva sob a educação impecável.",
      "story": "Esperou uma carta num casarão que foi demolido sem abrir as portas. Voltou para descobrir quem devolvia suas respostas sem sequer lê-las.",
      "inspiration": "Dama do Casarão, tradições e imaginário de Inglaterra; personagem fictício de BRASA.",
      "style": "Deslizamento, mudança de lado e recuo. Pouca resistência de perto, ilusões sem hitbox e ataques reais sempre com aviso de chegada.",
      "archetype": "Deslizamento, mudança de lado e recuo",
      "stats": {
        "power": 2,
        "speed": 4,
        "reach": 5,
        "defense": 2
      },
      "stage": "london",
      "color": "#66647d",
      "accent": "#cbb594",
      "skin": "#c09b83",
      "hair": "#35323e",
      "attackStyle": "eleanor",
      "defenseName": "Véu de Prata",
      "finisher": {
        "name": "A Resposta Finalmente Chega",
        "line": "Desta vez, abra a carta.",
        "kind": "eleanor"
      },
      "intro": "Esperei o suficiente.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "veil-fingers",
        "ghost-palm",
        "gliding-step"
      ],
      "superName": "Casa de Todas as Respostas"
    },
    {
      "id": "tommy",
      "name": "Tommy Rebite",
      "title": "O Boxeador da Fábrica",
      "origin": "Birmingham",
      "state": "GB",
      "region": "Europa",
      "country": "GB",
      "nationality": "Inglesa",
      "description": "Suspensórios marrons, camisa creme de mangas dobradas, luvas reforçadas por costuras e cabelo raspado dos lados. Postura plantada de guarda alta.",
      "personality": "Prático e paciente; fala de luta como quem explica um turno de trabalho.",
      "story": "As máquinas da fábrica passaram a seguir o batimento de um trabalhador desaparecido. Tommy luta para desligar a linha sem desligar os colegas.",
      "inspiration": "Boxeador da Fábrica, tradições e imaginário de Inglaterra; personagem fictício de BRASA.",
      "style": "Boxe de guarda e punição pesada. Caminha devagar e não tem investida: vence bloqueando, lendo o golpe e respondendo com peso.",
      "archetype": "Boxe de guarda e punição pesada",
      "stats": {
        "power": 5,
        "speed": 1,
        "reach": 2,
        "defense": 5
      },
      "stage": "london",
      "color": "#66647d",
      "accent": "#cbb594",
      "skin": "#c09b83",
      "hair": "#35323e",
      "attackStyle": "tommy",
      "defenseName": "Guarda da Bancada",
      "finisher": {
        "name": "A Linha Pode Parar",
        "line": "Hoje todo mundo volta pra casa.",
        "kind": "tommy"
      },
      "intro": "Vamos terminar o turno.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "planted-jab",
        "heavy-straight",
        "work-boot"
      ],
      "superName": "O Último Turno",
      "movement": {
        "walk": 0.77,
        "backwalk": 0.56,
        "jump": 0.87
      },
      "comboSequences": [
        [
          "light",
          "heavy",
          "kick"
        ],
        [
          "heavy",
          "kick",
          "special1"
        ]
      ]
    },
    {
      "id": "morgan",
      "name": "Morgan Espinheiro",
      "title": "O Guardião do Bosque",
      "origin": "Floresta de Sherwood",
      "state": "GB",
      "region": "Europa",
      "country": "GB",
      "nationality": "Inglesa",
      "description": "Corpo coberto de folhas de carvalho, galhos assimétricos, máscara de madeira com olhos âmbar e raízes enroladas nas pernas.",
      "personality": "Antigo e paciente; observa as cidades como quem observa uma tempestade.",
      "story": "Cada árvore derrubada passou a deixar uma porta escura no toco. Morgan segue a última semente que ainda recorda o caminho de volta.",
      "inspiration": "Homem Verde e imagens folhosas do folclore britânico; guardião e conflito próprios.",
      "style": "Raízes de controle terrestre e braços de grande alcance. O preparo das armadilhas e o corpo largo permitem pressão pelo alto.",
      "archetype": "Raízes de controle terrestre e braços de grande alcance",
      "stats": {
        "power": 4,
        "speed": 2,
        "reach": 5,
        "defense": 4
      },
      "stage": "london",
      "color": "#66647d",
      "accent": "#cbb594",
      "skin": "#c09b83",
      "hair": "#35323e",
      "attackStyle": "morgan",
      "defenseName": "Casca do Carvalho",
      "finisher": {
        "name": "A Porta Volta a Ser Árvore",
        "line": "O bosque lembra de cada raiz.",
        "kind": "morgan"
      },
      "intro": "Ainda existe chão sob a pedra.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "branch-jab",
        "oak-swing",
        "root-sweep"
      ],
      "superName": "Floresta Sem Fim"
    },
    {
      "id": "alfie",
      "name": "Alfie Wicket",
      "title": "O Rebatedor de Críquete",
      "origin": "Manchester",
      "state": "GB",
      "region": "Europa",
      "country": "GB",
      "nationality": "Inglesa",
      "description": "Uniforme branco com faixa verde, proteções nas pernas, taco de críquete de madeira clara e boné creme.",
      "personality": "Analítico e bem-humorado; aprecia uma surpresa bem colocada.",
      "story": "Uma bola quicou sobre o rio e atravessou três pontes sem afundar. Alfie segue sua trajetória para recuperar o irmão que foi buscá-la.",
      "inspiration": "Rebatedor de Críquete, tradições e imaginário de Inglaterra; personagem fictício de BRASA.",
      "style": "Rebatidas precisas e bola de quique. Controla alturas alternadas e reflexão curta, mas deixa aberturas depois dos arcos largos do taco.",
      "archetype": "Rebatidas precisas e bola de quique",
      "stats": {
        "power": 3,
        "speed": 3,
        "reach": 5,
        "defense": 3
      },
      "stage": "london",
      "color": "#66647d",
      "accent": "#cbb594",
      "skin": "#c09b83",
      "hair": "#35323e",
      "attackStyle": "alfie",
      "defenseName": "Face do Taco",
      "finisher": {
        "name": "A Bola Encontra a Margem",
        "line": "A próxima curva é nossa.",
        "kind": "alfie"
      },
      "intro": "Vamos ler esse campo.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "bat-edge",
        "cricket-swing",
        "pad-kick"
      ],
      "superName": "Além da Última Ponte"
    },
    {
      "id": "clockwork",
      "name": "Lady Clockwork",
      "title": "A Inventora do Relógio",
      "origin": "Londres",
      "state": "GB",
      "region": "Europa",
      "country": "GB",
      "nationality": "Inglesa",
      "description": "Casaco vitoriano verde-escuro de mangas curtas, monóculo, braço mecânico de engrenagens e bolsa com relógios de bolso.",
      "personality": "Precisa e espirituosa; odeia desperdiçar o tempo de alguém.",
      "story": "Um mecanismo de sua oficina começou a marcar os minutos perdidos por outras pessoas. Ela segue a corda que liga cada relógio à Lua.",
      "inspiration": "Inventora do Relógio, tradições e imaginário de Inglaterra; personagem fictício de BRASA.",
      "style": "Dispositivos atrasados e controle de ritmo. Precisa prever a posição rival, enquanto os preparos deixam espaço para pressão rápida.",
      "archetype": "Dispositivos atrasados e controle de ritmo",
      "stats": {
        "power": 3,
        "speed": 2,
        "reach": 5,
        "defense": 3
      },
      "stage": "london",
      "color": "#66647d",
      "accent": "#cbb594",
      "skin": "#c09b83",
      "hair": "#35323e",
      "attackStyle": "clockwork",
      "defenseName": "Engrenagem Travada",
      "finisher": {
        "name": "O Tempo Devolvido",
        "line": "Cada minuto tem um dono.",
        "kind": "clockwork"
      },
      "intro": "Chegou exatamente na hora.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "clockhand-jab",
        "minute-hammer",
        "gear-step"
      ],
      "superName": "Meia-Noite Mecânica"
    },
    {
      "id": "bram",
      "name": "Bram Blackfang",
      "title": "O Cão da Charneca",
      "origin": "Dartmoor, Devon",
      "state": "GB",
      "region": "Europa",
      "country": "GB",
      "nationality": "Inglesa",
      "description": "Corpo humanoide coberto por pelo escuro, cabeça canina, olhos âmbar e fumaça saindo das patas. Ombros altos, pés digitígrados.",
      "personality": "Territorial e leal; guarda caminhos que os vivos já esqueceram.",
      "story": "Uma estrada nova atravessou a sepultura de sua matilha. Bram acompanha a névoa que levou os nomes dos mortos e não aceita deixá-los sumir.",
      "inspiration": "Lendas inglesas de cães negros espectrais, com forma e história originais.",
      "style": "Avanços baixos e uivo de alcance curto. Movimentos rápidos exigem proximidade; o uivo lento e o fim da corrida podem ser punidos.",
      "archetype": "Avanços baixos e uivo de alcance curto",
      "stats": {
        "power": 4,
        "speed": 4,
        "reach": 3,
        "defense": 2
      },
      "stage": "london",
      "color": "#66647d",
      "accent": "#cbb594",
      "skin": "#c09b83",
      "hair": "#35323e",
      "attackStyle": "bram",
      "defenseName": "Garras da Charneca",
      "finisher": {
        "name": "O Nome Sob a Névoa",
        "line": "Nenhum dos nossos será esquecido.",
        "kind": "bram"
      },
      "intro": "Esta estrada ainda tem guardião.",
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
      },
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
      "locked": false,
      "secret": false,
      "normalPaths": [
        "claw-jab",
        "fang-arc",
        "hound-paw"
      ],
      "superName": "Matilha da Meia-Noite"
    },
    {
      "id": "selene",
      "name": "Selene Prisma",
      "title": "A Cartógrafa da Face Oculta",
      "origin": "Lua — Borda do Mare Serenitatis",
      "state": "MOON",
      "region": "Lua",
      "country": "MOON",
      "nationality": "Lunar",
      "description": "Traje de placas translúcidas violetas, rosto de obsidiana sob uma coroa de prismas e mapas luminosos correndo pelos antebraços.",
      "personality": "Precisa e curiosa; deseja conhecer a Terra sem possuí-la.",
      "story": "Traçou durante séculos os caminhos que os sonhos abrem entre os mundos. Uma linha do mapa passou a apagar todas as outras, obrigando-a a guardar a primeira passagem.",
      "inspiration": "Cartógrafa da Face Oculta, tradições e imaginário de Lua; personagem fictício de BRASA.",
      "style": "Controle de ângulos com prismas, reflexo e cortes de luz. Armadilhas atrasadas e pouca resistência equilibram o alcance.",
      "archetype": "Controle de ângulos com prismas, reflexo e cortes de luz",
      "stats": {
        "power": 3,
        "speed": 4,
        "reach": 5,
        "defense": 2
      },
      "stage": "mare",
      "color": "#655bb0",
      "accent": "#bbebff",
      "skin": "#b5a4d7",
      "hair": "#252641",
      "attackStyle": "selene",
      "defenseName": "Faceta Escura",
      "finisher": {
        "name": "O Mapa Também Muda",
        "line": "Nenhum caminho é dono de quem passa.",
        "kind": "selene"
      },
      "intro": "Mostre-me um caminho que não conheço.",
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
      },
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
      "locked": true,
      "secret": true,
      "normalPaths": [
        "prism-point",
        "light-cut",
        "facet-kick"
      ],
      "superName": "Atlas de Todas as Faces"
    },
    {
      "id": "regolith",
      "name": "Rególito",
      "title": "O Colosso da Poeira",
      "origin": "Lua — Planície de Basalto",
      "state": "MOON",
      "region": "Lua",
      "country": "MOON",
      "nationality": "Lunar",
      "description": "Corpo largo feito de basalto negro e poeira cinza, fendas âmbar, ombros de pedra em placas e mãos como rochas partidas.",
      "personality": "Lento ao falar e impossível de apressar; escuta o solo antes de agir.",
      "story": "Nasceu da poeira deixada por todos os passos que chegaram à Lua. As fissuras roubam o chão sob suas memórias, por isso protege o coração da planície.",
      "inspiration": "Colosso da Poeira, tradições e imaginário de Lua; personagem fictício de BRASA.",
      "style": "Peso e agarrão de grande dano, ondas baixas e mobilidade mínima. Saltos e pressão durante os preparos evitam as mãos de pedra.",
      "archetype": "Peso e agarrão de grande dano, ondas baixas e mobilidade mínima",
      "stats": {
        "power": 5,
        "speed": 1,
        "reach": 5,
        "defense": 5
      },
      "stage": "mare",
      "color": "#626a7d",
      "accent": "#edbf6d",
      "skin": "#8e94a3",
      "hair": "#252a39",
      "attackStyle": "regolith",
      "defenseName": "Placa Lunar",
      "finisher": {
        "name": "Todos os Passos Ficam",
        "line": "O chão ainda lembra de você.",
        "kind": "regolith"
      },
      "intro": "Cada passo deixa uma vida.",
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
      },
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
      "locked": true,
      "secret": true,
      "normalPaths": [
        "rock-knuckle",
        "basalt-hammer",
        "crater-stomp"
      ],
      "superName": "A Memória do Solo"
    },
    {
      "id": "umbriel",
      "name": "Umbriel Véu-Negro",
      "title": "O Vigia do Eclipse",
      "origin": "Lua — Cratera da Umbra",
      "state": "MOON",
      "region": "Lua",
      "country": "MOON",
      "nationality": "Lunar",
      "description": "Manto escuro recortado, máscara lisa como um eclipse e braços de sombra com bordas prateadas. Seus pés tocam o chão em intervalos de luz.",
      "personality": "Reservado e vigilante, teme o que pode atravessar quando ninguém observa.",
      "story": "É a sombra do primeiro eclipse guardada numa cratera. Uma luz artificial abriu um buraco em seu véu, e ele caça a claridade que atravessa mundos sem pedir licença.",
      "inspiration": "Vigia do Eclipse, tradições e imaginário de Lua; personagem fictício de BRASA.",
      "style": "Troca de lado, recuo e captura de energia. Baixo dano direto e preparações visíveis pedem leitura e distância.",
      "archetype": "Troca de lado, recuo e captura de energia",
      "stats": {
        "power": 2,
        "speed": 5,
        "reach": 4,
        "defense": 2
      },
      "stage": "eclipse",
      "color": "#3b3d70",
      "accent": "#bed8ef",
      "skin": "#9495bd",
      "hair": "#1f2134",
      "attackStyle": "umbriel",
      "defenseName": "Borda Prateada",
      "finisher": {
        "name": "A Luz Pode Esperar",
        "line": "Nem toda porta precisa abrir.",
        "kind": "umbriel"
      },
      "intro": "Eu guardo o intervalo.",
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
      },
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
      "locked": true,
      "secret": true,
      "normalPaths": [
        "shadow-finger",
        "eclipse-palm",
        "shadow-step"
      ],
      "superName": "A Hora Entre os Mundos"
    },
    {
      "id": "apogeu",
      "name": "Apogeu Nove",
      "title": "O Mensageiro sem Órbita",
      "origin": "Lua — Torre do Apogeu",
      "state": "MOON",
      "region": "Lua",
      "country": "MOON",
      "nationality": "Lunar",
      "description": "Armadura fina branco-acinzentada, aro quebrado nas costas, botas com jatos violeta e rosto visível sob uma viseira estreita.",
      "personality": "Impaciente e compassivo; traz mensagens mesmo quando já sabe a resposta.",
      "story": "Foi criado para levar um aviso antes da primeira fissura, mas chegou depois de todas. Agora atravessa as órbitas procurando uma escolha que ainda possa mudar.",
      "inspiration": "Mensageiro sem Órbita, tradições e imaginário de Lua; personagem fictício de BRASA.",
      "style": "Mobilidade aérea, chutes de propulsão e suspensão breve. O pouso previsível e a pouca defesa corporal punem voos sem planejamento.",
      "archetype": "Mobilidade aérea, chutes de propulsão e suspensão breve",
      "stats": {
        "power": 3,
        "speed": 5,
        "reach": 4,
        "defense": 1
      },
      "stage": "eclipse",
      "color": "#9299c0",
      "accent": "#c4a5fb",
      "skin": "#d4c0b7",
      "hair": "#303147",
      "attackStyle": "apogeu",
      "defenseName": "Aro de Emergência",
      "finisher": {
        "name": "Ainda Há Tempo de Escolher",
        "line": "O aviso chegou a alguém.",
        "kind": "apogeu"
      },
      "intro": "Esta mensagem ainda pode chegar.",
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
      },
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
      "locked": true,
      "secret": true,
      "normalPaths": [
        "orbital-jab",
        "apogee-elbow",
        "thruster-kick"
      ],
      "superName": "A Última Órbita"
    }
  ],
  "stages": [
    {
      "id": "sertao",
      "country": "BR",
      "nationality": "Brasileira",
      "name": "Sertão — Povoado do Sol Rachado",
      "state": "PE",
      "region": "América do Sul",
      "location": "Sertão de Pernambuco — praça de povoado fictício",
      "tagline": "Uma praça de pedra irregular diante de uma capela caiada, casa de taipa, venda e serra de caatinga.",
      "time": "Pôr do sol de verão",
      "kind": "village",
      "fighter": "bento",
      "palette": {
        "sky": "#e07546",
        "far": "#774960",
        "mid": "#b27c4f",
        "ground": "#815239",
        "accent": "#f7c96b"
      },
      "description": "Uma praça de pedra irregular diante de uma capela caiada, casa de taipa, venda e serra de caatinga. O poente laranja desenha três planos de morro; mandacarus e uma cerca de couro marcam a margem sem invadir o chão dos lutadores.",
      "animations": [
        "folhagem da caatinga",
        "bandeirolas"
      ],
      "details": [
        "Capela caiada com porta azul e sino visível",
        "Casas baixas com beiral de telha e alpendres",
        "Figurantes rasterizados de proporção humana",
        "Faixa central contínua de pedra e terra"
      ],
      "nativeResolution": {
        "width": 480,
        "height": 270
      },
      "pixelArt": true,
      "animationMode": "pingpong",
      "fightLine": 455,
      "foregroundClear": true,
      "music": "arena-sertao",
      "secret": false,
      "pixelNative": [
        480,
        270
      ],
      "backgroundActors": false,
      "art": "assets/stage-v07-sertao.png"
    },
    {
      "id": "pelourinho",
      "country": "BR",
      "nationality": "Brasileira",
      "name": "Salvador — Largo das Faíscas",
      "state": "BA",
      "region": "América do Sul",
      "location": "Salvador — centro histórico em releitura artística",
      "tagline": "Casarões altos de fachadas azul, amarelo e rosa descem por um largo de pedra.",
      "time": "Fim de tarde após chuva",
      "kind": "salvador",
      "fighter": "jana",
      "palette": {
        "sky": "#5077aa",
        "far": "#7972b6",
        "mid": "#edb374",
        "ground": "#8d7081",
        "accent": "#ffcd79"
      },
      "description": "Casarões altos de fachadas azul, amarelo e rosa descem por um largo de pedra. Uma igreja ocupa o fundo, sacadas de ferro sustentam tecidos e uma roda de capoeira mantém livre o corredor central. O brilho da pedra molhada reflete a luz quente das janelas.",
      "animations": [
        "palmeira",
        "toldos de tecido"
      ],
      "details": [
        "Arquitetura colonial reconhecível por volumes e janelas",
        "Calçamento com perspectiva consistente",
        "Músicos de atabaque e berimbau ao fundo",
        "Igreja distante sem bloquear os lutadores"
      ],
      "nativeResolution": {
        "width": 480,
        "height": 270
      },
      "pixelArt": true,
      "animationMode": "pingpong",
      "fightLine": 455,
      "foregroundClear": true,
      "music": "arena-pelourinho",
      "secret": false,
      "pixelNative": [
        480,
        270
      ],
      "backgroundActors": false,
      "art": "assets/stage-v07-pelourinho.png"
    },
    {
      "id": "igarape",
      "country": "BR",
      "nationality": "Brasileira",
      "name": "Pará — Porto das Duas Luas",
      "state": "PA",
      "region": "América do Sul",
      "location": "Pará — cais ribeirinho amazônico fictício",
      "tagline": "Um cais largo de madeira termina numa comunidade de palafitas coloridas.",
      "time": "Crepúsculo azul",
      "kind": "river",
      "fighter": "nara",
      "palette": {
        "sky": "#35618a",
        "far": "#254e64",
        "mid": "#478d7c",
        "ground": "#80634b",
        "accent": "#9ae1c7"
      },
      "description": "Um cais largo de madeira termina numa comunidade de palafitas coloridas. A floresta forma camadas escuras além da água, barcos de passageiros e uma canoa estão amarrados fora do plano de luta. A lua nascente e lampiões de varanda ocupam reflexos separados no rio.",
      "animations": [
        "reflexos do igarapé",
        "roupas no varal",
        "copa da margem"
      ],
      "details": [
        "Três profundidades de floresta e água",
        "Palafitas de madeira e escadas até o rio",
        "Embarcações com escala de pessoas",
        "Tábuas longas e faixa de combate desimpedida"
      ],
      "nativeResolution": {
        "width": 480,
        "height": 270
      },
      "pixelArt": true,
      "animationMode": "pingpong",
      "fightLine": 455,
      "foregroundClear": true,
      "music": "arena-igarape",
      "secret": false,
      "pixelNative": [
        480,
        270
      ],
      "backgroundActors": false,
      "art": "assets/stage-v07-igarape.png"
    },
    {
      "id": "pampa",
      "country": "BR",
      "nationality": "Brasileira",
      "name": "Rio Grande do Sul — Estância do Minuano",
      "state": "RS",
      "region": "América do Sul",
      "location": "Campanha gaúcha — estância fictícia",
      "tagline": "Campo aberto de coxilhas baixas, cerca de madeira, galpão de estância e umbu isolado.",
      "time": "Amanhecer de geada",
      "kind": "pampa",
      "fighter": "ramiro",
      "palette": {
        "sky": "#809bb0",
        "far": "#627e8a",
        "mid": "#879b8d",
        "ground": "#7b8f7c",
        "accent": "#d5edf0"
      },
      "description": "Campo aberto de coxilhas baixas, cerca de madeira, galpão de estância e umbu isolado. A geada azul cobre o capim próximo às porteiras, sem esconder o chão batido onde ocorre a luta. Um cavalo e um trabalhador aparecem no mesmo plano de escala atrás da cerca.",
      "animations": [
        "lenço gaúcho",
        "araucária"
      ],
      "details": [
        "Horizonte aberto de coxilhas",
        "Cavalo de tamanho adulto proporcional ao humano",
        "Geada em dither de pixels sem textura fotográfica",
        "Galpão com fogo de chão e ferramentas"
      ],
      "nativeResolution": {
        "width": 480,
        "height": 270
      },
      "pixelArt": true,
      "animationMode": "pingpong",
      "fightLine": 455,
      "foregroundClear": true,
      "music": "arena-pampa",
      "secret": false,
      "pixelNative": [
        480,
        270
      ],
      "backgroundActors": false,
      "art": "assets/stage-v07-pampa.png"
    },
    {
      "id": "vila",
      "country": "BR",
      "nationality": "Brasileira",
      "name": "Santos — Dentro da Vila Belmiro",
      "state": "SP",
      "region": "América do Sul",
      "location": "Santos — interior da Vila Belmiro em releitura artística original",
      "tagline": "A arena fica dentro do estádio, no gramado junto à lateral do campo.",
      "time": "Noite sob refletores",
      "kind": "stadium",
      "fighter": "davi",
      "palette": {
        "sky": "#273b68",
        "far": "#3c5574",
        "mid": "#b0b6b4",
        "ground": "#478152",
        "accent": "#f5e7b0"
      },
      "description": "A arena fica dentro do estádio, no gramado junto à lateral do campo. Arquibancadas compactas, túneis, gol de rede e refletores formam uma composição de futebol brasileiro. Bandeiras pretas e brancas usam grafismos originais sem escudos ou publicidade real.",
      "animations": [
        "bandeira alvinegra",
        "bandeira alvinegra alta"
      ],
      "details": [
        "Gol de tamanho coerente com a escala dos jogadores",
        "Bola de futebol rasterizada de diâmetro realista",
        "Arquibancadas em três planos de profundidade",
        "Gramado com linhas brancas e perspectiva baixa"
      ],
      "nativeResolution": {
        "width": 480,
        "height": 270
      },
      "pixelArt": true,
      "animationMode": "pingpong",
      "fightLine": 455,
      "foregroundClear": true,
      "music": "arena-vila",
      "secret": false,
      "pixelNative": [
        480,
        270
      ],
      "backgroundActors": false,
      "art": "assets/stage-v07-vila.png"
    },
    {
      "id": "ny_docks",
      "country": "US",
      "nationality": "Estadunidense",
      "name": "Nova York — Cais da Meia-Noite",
      "state": "US",
      "region": "América do Norte",
      "location": "Nova York — terminal portuário fictício",
      "tagline": "Guindastes recortam um horizonte de armazéns de tijolo e pontes de aço.",
      "time": "Noite de neblina leve",
      "kind": "docks",
      "fighter": "brick",
      "palette": {
        "sky": "#353d6f",
        "far": "#4a5683",
        "mid": "#94726e",
        "ground": "#685970",
        "accent": "#ecbe68"
      },
      "description": "Guindastes recortam um horizonte de armazéns de tijolo e pontes de aço. Um rebocador passa ao fundo do cais molhado, cercado por contêineres sem marcas e letreiros de carga inventados. O combate acontece numa plataforma larga de madeira e metal.",
      "animations": [
        "bandeira do porto",
        "água do cais"
      ],
      "details": [
        "Armazém de tijolos e escadas de incêndio",
        "Guindastes e ponte de aço em silhuetas distintas",
        "Reflexos de lâmpadas âmbar em poças",
        "Carga presa com cabos visíveis"
      ],
      "nativeResolution": {
        "width": 480,
        "height": 270
      },
      "pixelArt": true,
      "animationMode": "pingpong",
      "fightLine": 455,
      "foregroundClear": true,
      "music": "arena-ny_docks",
      "secret": false,
      "pixelNative": [
        480,
        270
      ],
      "backgroundActors": false,
      "art": "assets/stage-v07-ny_docks.png"
    },
    {
      "id": "neva",
      "country": "RU",
      "nationality": "Russa",
      "name": "São Petersburgo — Margem do Neva",
      "state": "RU",
      "region": "Eurásia",
      "location": "São Petersburgo — cais de granito em releitura original",
      "tagline": "O rio escuro corre além de um parapeito de granito; uma ponte erguida e fachadas palacianas pastel constroem o fundo.",
      "time": "Noite branca de inverno",
      "kind": "neva",
      "fighter": "irina",
      "palette": {
        "sky": "#6378ac",
        "far": "#6b77a2",
        "mid": "#b8a6a1",
        "ground": "#8e91ad",
        "accent": "#e8c88e"
      },
      "description": "O rio escuro corre além de um parapeito de granito; uma ponte erguida e fachadas palacianas pastel constroem o fundo. Lâmpadas quentes e geada nos corrimãos opõem luz humana ao azul do inverno. O passeio oferece um piso único e amplo.",
      "animations": [
        "estandartes",
        "galhos gelados"
      ],
      "details": [
        "Ponte levadiça em escala de horizonte",
        "Granito com juntas desenhadas em pixels",
        "Palácios pastel e janelas âmbar",
        "Rio com faixas de reflexo descontínuas"
      ],
      "nativeResolution": {
        "width": 480,
        "height": 270
      },
      "pixelArt": true,
      "animationMode": "pingpong",
      "fightLine": 455,
      "foregroundClear": true,
      "music": "arena-neva",
      "secret": false,
      "pixelNative": [
        480,
        270
      ],
      "backgroundActors": false,
      "art": "assets/stage-v07-neva.png"
    },
    {
      "id": "kyoto",
      "country": "JP",
      "nationality": "Japonesa",
      "name": "Kyoto — Rua das Lanternas",
      "state": "JP",
      "region": "Ásia",
      "location": "Kyoto — rua de madeira fictícia",
      "tagline": "Fachadas de madeira escura, noren de tecido, lanternas vermelhas e um torii distante acompanham uma rua de pedra.",
      "time": "Anoitecer de festival",
      "kind": "kyoto",
      "fighter": "ren",
      "palette": {
        "sky": "#38476f",
        "far": "#63597c",
        "mid": "#a07b69",
        "ground": "#776771",
        "accent": "#efb65c"
      },
      "description": "Fachadas de madeira escura, noren de tecido, lanternas vermelhas e um torii distante acompanham uma rua de pedra. Uma ponte baixa revela água além do corredor de luta; folhas de bordo desenham pontos de vermelho no azul da noite.",
      "animations": [
        "cerejeira",
        "lanternas"
      ],
      "details": [
        "Casas machiya com treliças de madeira",
        "Lampiões originais sem caracteres inventados ilegíveis",
        "Torii pequeno no plano distante",
        "Ponte e canal separados do piso central"
      ],
      "nativeResolution": {
        "width": 480,
        "height": 270
      },
      "pixelArt": true,
      "animationMode": "pingpong",
      "fightLine": 455,
      "foregroundClear": true,
      "music": "arena-kyoto",
      "secret": false,
      "pixelNative": [
        480,
        270
      ],
      "backgroundActors": false,
      "art": "assets/stage-v07-kyoto.png"
    },
    {
      "id": "longmen",
      "country": "CN",
      "nationality": "Chinesa",
      "name": "Luoyang — Pátio dos Dragões",
      "state": "CN",
      "region": "Ásia",
      "location": "Luoyang — pátio fictício inspirado em margens e templos de Henan",
      "tagline": "Uma escadaria de templo e telhados de beirais curvos cercam um pátio largo de lajes.",
      "time": "Manhã dourada após chuva",
      "kind": "longmen",
      "fighter": "liang",
      "palette": {
        "sky": "#8db2b5",
        "far": "#6f9095",
        "mid": "#9f826d",
        "ground": "#8c928c",
        "accent": "#edcb76"
      },
      "description": "Uma escadaria de templo e telhados de beirais curvos cercam um pátio largo de lajes. O rio aparece além de um parapeito talhado, montanhas verdes fecham o horizonte e duas esculturas originais de dragão vigiam as bordas.",
      "animations": [
        "bambu",
        "rio do templo"
      ],
      "details": [
        "Telhados de cerâmica com beirais curvos",
        "Rio e montanhas em quatro planos",
        "Estátuas de dragão criadas para BRASA",
        "Lajes amplas com centro de luta limpo"
      ],
      "nativeResolution": {
        "width": 480,
        "height": 270
      },
      "pixelArt": true,
      "animationMode": "pingpong",
      "fightLine": 455,
      "foregroundClear": true,
      "music": "arena-longmen",
      "secret": false,
      "pixelNative": [
        480,
        270
      ],
      "backgroundActors": false,
      "art": "assets/stage-v07-longmen.png"
    },
    {
      "id": "venezia",
      "country": "IT",
      "nationality": "Italiana",
      "name": "Veneza — Ponte do Último Baile",
      "state": "IT",
      "region": "Europa",
      "location": "Veneza — canal e praça fictícios",
      "tagline": "Um canal estreito, ponte de pedra e fachadas de reboco pastel se abrem para uma pequena praça de combate.",
      "time": "Pôr do sol de carnaval",
      "kind": "venice",
      "fighter": "belladonna",
      "palette": {
        "sky": "#a782a2",
        "far": "#9a8598",
        "mid": "#c3a17e",
        "ground": "#9a8694",
        "accent": "#e4c187"
      },
      "description": "Um canal estreito, ponte de pedra e fachadas de reboco pastel se abrem para uma pequena praça de combate. Gôndolas presas às estacas permanecem no plano de água; máscaras e tecidos originais sugerem um carnaval que está terminando.",
      "animations": [
        "estandarte",
        "canal"
      ],
      "details": [
        "Ponte arqueada com guarda-corpo de pedra",
        "Janelas góticas e varandas de ferro",
        "Gôndolas proporcionais a seus condutores",
        "Praça inteira em um único nível de combate"
      ],
      "nativeResolution": {
        "width": 480,
        "height": 270
      },
      "pixelArt": true,
      "animationMode": "pingpong",
      "fightLine": 455,
      "foregroundClear": true,
      "music": "arena-venezia",
      "secret": false,
      "pixelNative": [
        480,
        270
      ],
      "backgroundActors": false,
      "art": "assets/stage-v07-venezia.png"
    },
    {
      "id": "london",
      "country": "GB",
      "nationality": "Inglesa",
      "name": "Londres — Relógio sob a Chuva",
      "state": "GB",
      "region": "Europa",
      "location": "Londres — rua industrial fictícia próxima ao Tâmisa",
      "tagline": "Fachadas vitorianas de tijolo, uma oficina iluminada, poste de ferro e ponte sobre o rio compõem a rua.",
      "time": "Meia-noite chuvosa",
      "kind": "london",
      "fighter": "clockwork",
      "palette": {
        "sky": "#424762",
        "far": "#5e637c",
        "mid": "#8f7c72",
        "ground": "#666d7c",
        "accent": "#d7b979"
      },
      "description": "Fachadas vitorianas de tijolo, uma oficina iluminada, poste de ferro e ponte sobre o rio compõem a rua. Um relógio industrial ao fundo insiste em marcar o mesmo minuto; o combate ocupa paralelepípedos úmidos livres de carros.",
      "animations": [
        "bandeira britânica",
        "reflexos do Tâmisa"
      ],
      "details": [
        "Fábrica de tijolos e oficina de engrenagens",
        "Ônibus distante proporcional aos pedestres",
        "Paralelepípedos com reflexos em dither",
        "Relógio de torre original"
      ],
      "nativeResolution": {
        "width": 480,
        "height": 270
      },
      "pixelArt": true,
      "animationMode": "pingpong",
      "fightLine": 455,
      "foregroundClear": true,
      "music": "arena-london",
      "secret": false,
      "pixelNative": [
        480,
        270
      ],
      "backgroundActors": false,
      "art": "assets/stage-v07-london.png"
    },
    {
      "id": "mare",
      "country": "MOON",
      "nationality": "Lunar",
      "name": "Lua — Mar de Basalto",
      "state": "MOON",
      "region": "Lua",
      "location": "Lua — Mare Serenitatis, releitura fantástica",
      "tagline": "Crateras de bordas escalonadas cercam uma planície de basalto e poeira cinza-azulada.",
      "time": "Terra cheia sobre o horizonte",
      "kind": "moon",
      "fighter": "selene",
      "palette": {
        "sky": "#171c36",
        "far": "#454c74",
        "mid": "#737e9d",
        "ground": "#9ba1ba",
        "accent": "#b7e5ec"
      },
      "description": "Crateras de bordas escalonadas cercam uma planície de basalto e poeira cinza-azulada. A Terra brilha acima do horizonte sem ocupar o centro dos lutadores, enquanto pequenos prismas enterrados sugerem uma cartografia antiga.",
      "animations": [
        "Poeira espacial discreta",
        "Brilho periódico das estrelas"
      ],
      "details": [
        "Crateras com profundidade de pixels, sem textura fotográfica",
        "Terra pequena com continentes reconhecíveis",
        "Basalto em planos de cinza e violeta",
        "Faixa central de poeira lisa para leitura dos golpes"
      ],
      "nativeResolution": {
        "width": 480,
        "height": 270
      },
      "pixelArt": true,
      "animationMode": "pingpong",
      "fightLine": 455,
      "foregroundClear": true,
      "music": "lunar-mare",
      "secret": true,
      "pixelNative": [
        480,
        270
      ],
      "backgroundActors": false,
      "art": "assets/stage-v07-mare.png"
    },
    {
      "id": "eclipse",
      "country": "MOON",
      "nationality": "Lunar",
      "name": "Lua — Cratera do Eclipse",
      "state": "MOON",
      "region": "Lua",
      "location": "Lua — cratera fictícia da face oculta",
      "tagline": "Uma cratera ampla abre um anfiteatro de pedra escura, com o aro quebrado de uma torre ao fundo.",
      "time": "Luz de eclipse",
      "kind": "eclipse",
      "fighter": "umbriel",
      "palette": {
        "sky": "#11182d",
        "far": "#373856",
        "mid": "#615e82",
        "ground": "#8989a8",
        "accent": "#c1a4ee"
      },
      "description": "Uma cratera ampla abre um anfiteatro de pedra escura, com o aro quebrado de uma torre ao fundo. A Terra aparece na borda de uma faixa de luz prateada; poeira suspensa e cristais apagados dão à arena uma quietude própria.",
      "animations": [
        "Poeira espacial discreta",
        "Brilho periódico das estrelas"
      ],
      "details": [
        "Luz recortada de eclipse sobre rochas escalonadas",
        "Ruína original com aro orbital quebrado",
        "Profundidade criada por três bordas de cratera",
        "Centro plano sem objetos à frente dos personagens"
      ],
      "nativeResolution": {
        "width": 480,
        "height": 270
      },
      "pixelArt": true,
      "animationMode": "pingpong",
      "fightLine": 455,
      "foregroundClear": true,
      "music": "lunar-eclipse",
      "secret": true,
      "pixelNative": [
        480,
        270
      ],
      "backgroundActors": false,
      "art": "assets/stage-v07-eclipse.png"
    }
  ],
  "countries": [
    {
      "id": "BR",
      "name": "Brasil",
      "label": "BRASIL",
      "nationality": "Brasileira",
      "flag": "🇧🇷",
      "color": "#218954",
      "accent": "#f6d34c",
      "description": "Cangaço, encantaria, ruas e memórias de cinco paisagens brasileiras.",
      "stageIds": [
        "sertao",
        "pelourinho",
        "igarape",
        "pampa",
        "vila"
      ],
      "mapPosition": {
        "x": 0.33,
        "y": 0.7
      },
      "continent": "América do Sul",
      "fighterIds": [
        "bento",
        "ramiro",
        "jana",
        "caua",
        "nara",
        "tiao",
        "breu",
        "damiao",
        "lia",
        "iris",
        "rosa",
        "augusto",
        "valter",
        "serena",
        "caio",
        "davi",
        "luz",
        "ti"
      ]
    },
    {
      "id": "US",
      "name": "Estados Unidos",
      "label": "ESTADOS UNIDOS",
      "nationality": "Estadunidense",
      "flag": "🇺🇸",
      "color": "#b83e46",
      "accent": "#a8c9f6",
      "description": "Esportes, rock de garagem e lendas das estradas se encontram no cais.",
      "stageIds": [
        "ny_docks"
      ],
      "mapPosition": {
        "x": 0.21,
        "y": 0.32
      },
      "continent": "América do Norte",
      "fighterIds": [
        "brick",
        "steele",
        "voltx",
        "jack",
        "homer",
        "gloria",
        "dusty",
        "roxy",
        "silas"
      ]
    },
    {
      "id": "RU",
      "name": "Rússia",
      "label": "RÚSSIA",
      "nationality": "Russa",
      "flag": "🇷🇺",
      "color": "#4772b6",
      "accent": "#e0edff",
      "description": "Sambo, inverno, folclore, indústria e a memória de uma missão perdida.",
      "stageIds": [
        "neva"
      ],
      "mapPosition": {
        "x": 0.73,
        "y": 0.21
      },
      "continent": "Eurásia",
      "fighterIds": [
        "boris",
        "irina",
        "yuri",
        "vera",
        "maksim",
        "anya",
        "lev",
        "nikolai",
        "zoya"
      ]
    },
    {
      "id": "JP",
      "name": "Japão",
      "label": "JAPÃO",
      "nationality": "Japonesa",
      "flag": "🇯🇵",
      "color": "#db4354",
      "accent": "#fff0d7",
      "description": "Espadas, sumô, invenções e espíritos sob a luz dos lampiões.",
      "stageIds": [
        "kyoto"
      ],
      "mapPosition": {
        "x": 0.88,
        "y": 0.38
      },
      "continent": "Ásia",
      "fighterIds": [
        "ren",
        "aya",
        "daigo",
        "kitsune",
        "tetsu",
        "akari",
        "goro",
        "mika",
        "shiori"
      ]
    },
    {
      "id": "CN",
      "name": "China",
      "label": "CHINA",
      "nationality": "Chinesa",
      "flag": "🇨🇳",
      "color": "#c93435",
      "accent": "#ffe379",
      "description": "Templos, ópera de máscaras, terracota e dragões de rio.",
      "stageIds": [
        "longmen"
      ],
      "mapPosition": {
        "x": 0.78,
        "y": 0.39
      },
      "continent": "Ásia",
      "fighterIds": [
        "liang",
        "mei",
        "barro",
        "lin",
        "bo",
        "qiao",
        "shen",
        "long",
        "yan"
      ]
    },
    {
      "id": "IT",
      "name": "Itália",
      "label": "ITÁLIA",
      "nationality": "Italiana",
      "flag": "🇮🇹",
      "color": "#2c996e",
      "accent": "#fae4b6",
      "description": "Duelo, invenção, cozinha e assombrações no reflexo dos canais.",
      "stageIds": [
        "venezia"
      ],
      "mapPosition": {
        "x": 0.52,
        "y": 0.33
      },
      "continent": "Europa",
      "fighterIds": [
        "marco",
        "vittoria",
        "luca",
        "belladonna",
        "enzo",
        "bianca",
        "rocco",
        "tenor",
        "nonna"
      ]
    },
    {
      "id": "GB",
      "name": "Inglaterra",
      "label": "INGLATERRA",
      "nationality": "Inglesa",
      "flag": "🇬🇧",
      "color": "#7b67af",
      "accent": "#e9c99b",
      "description": "Fábricas, punk, relojoaria e lendas da neblina.",
      "stageIds": [
        "london"
      ],
      "mapPosition": {
        "x": 0.47,
        "y": 0.27
      },
      "continent": "Europa",
      "fighterIds": [
        "arthur",
        "dex",
        "grey",
        "eleanor",
        "tommy",
        "morgan",
        "alfie",
        "clockwork",
        "bram"
      ]
    },
    {
      "id": "MOON",
      "name": "Lua",
      "label": "MAPA LUA",
      "nationality": "Lunar",
      "flag": "☾",
      "color": "#7e86b8",
      "accent": "#9cecff",
      "description": "Quatro presenças secretas aguardam além das rotas terrestres. Vença cada uma no modo história para libertá-la.",
      "stageIds": [
        "mare",
        "eclipse"
      ],
      "mapPosition": {
        "x": 0.94,
        "y": 0.08
      },
      "continent": "Lua",
      "secret": true,
      "fighterIds": [
        "selene",
        "regolith",
        "umbriel",
        "apogeu"
      ]
    }
  ],
  "version": 10,
  "world": {
    "title": "BRASA — Ecos do Mundo",
    "countries": [
      "BR",
      "US",
      "RU",
      "JP",
      "CN",
      "IT",
      "GB",
      "MOON"
    ],
    "playableCountries": [
      "BR",
      "US",
      "RU",
      "JP",
      "CN",
      "IT",
      "GB"
    ],
    "moonSecretIds": [
      "selene",
      "regolith",
      "umbriel",
      "apogeu"
    ],
    "brazilStageIds": [
      "sertao",
      "pelourinho",
      "igarape",
      "pampa",
      "vila"
    ],
    "selectionOrder": [
      "countryP1",
      "fighterP1",
      "countryP2",
      "fighterP2",
      "stageCountry",
      "stage"
    ],
    "unlockRule": "Derrote cada guardião lunar no modo história para liberá-lo nos outros modos.",
    "artDirection": "Pixel art original de arcade em resolução nativa baixa, sem fotografias, palitos ou proporções de brinquedo."
  }
};global.BRASA_COUNTRIES=global.BRASA_DATA.countries;})(typeof window!=="undefined"?window:globalThis);
