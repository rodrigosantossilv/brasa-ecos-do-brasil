# BRASA 0.16 — Apresentação e animação

76/76 personagens com novas folhas de 64 quadros; 0 personagens ainda usam animação anterior.

A luta usa uma superfície nativa de 480 × 270 pixels, ampliada sem suavização. O elenco e os 13 cenários permanecem em pixel art. Os mapas têm piso próprio, sombras de contato e elementos ambientais discretos.

## Novas folhas de animação

Cada personagem refeito possui uma folha independente de 64 quadros: oito de espera, oito de avanço, oito de recuo, oito de salto, oito de golpe leve, oito de golpe forte, oito de chute e oito de entrada. As poses são desenhos distintos. O recuo mantém o lutador voltado para o adversário. A animação do salto acompanha as fases físicas de saída, subida, ápice, descida e contato com o chão.

Os deslocamentos da entrada usam o ciclo de caminhada. O gesto dedicado é reproduzido uma vez, em aproximadamente um segundo, e termina na postura de combate. As entradas conservam a atuação dos quadros autorais; a luta mantém a composição limpa, sem os antigos figurantes extras de entrada.

Personagens que já receberam a folha nova: Cauã Rubro; Tião Redemoinho; Damião Sete-Luas; Lia do Viaduto; Íris Ferrugem; Augusto Sem-Rosto; Serena Maré; Caio Leme; Luz do Grave; TI; Brick; Major Steele; Jack Bell; Capitão Glória; Roxy Riot; Silas Nightwing; Boris Granito; Irina Nevasca; Yuri Vazio; Vera dos Corvos; Maksim Caldeira; Anya Presa-Branca; Lev dos Mil Rostos; Nikolai Geada; Zoya Faísca; Aya Fumaça; Tetsu-9; Mika Turbo; Shiori Papel-Vivo; Liang Punho de Bronze; General Barro; Vittoria Rosso; Luca Farina; Enzo Engrenagem; Rocco Cinzas; Tenor Tempesta; Lin da Lua Branca; Qiao Nuvem; Bianca Mármore; Akari Neon; Goro Máscara-Vermelha; Ramiro Ferro; Nara do Fundo; Dona Breu; Valter Verbo; Daigo Montanha; Kitsune Rubra; Shen Passo-Selado; Long Escama-Jade; Marco Arena; Jana Faísca; Arthur Ferrugem; Bento Brasa; Yan Máscara Mutável; Eleanor Névoa; Tommy Rebite; Dex Riot; Agente Grey; Morgan Espinheiro; Alfie Wicket; Rególito; Lady Clockwork; Bram Blackfang; Selene Prisma; Umbriel Véu-Negro; Apogeu Nove; Rosa Mandacaru; Davi Camisa Dez; VOLT-X; Homer; Dusty Graves; Ren da Bainha Partida; Mei Fita de Seda; Bo Panela de Ferro; Belladonna; Nonna Notte.

## Especiais ligados à história

As 228 técnicas conservam seus efeitos, regras e nomes ligados à história. Consulte [PLAYER_SPECIALS.md](PLAYER_SPECIALS.md) para os três especiais de cada lutador. O primeiro especial de Vittoria combina uma arrancada curta com jab, cruzado e chute usando suas próprias poses. A preparação e a recuperação permanecem vulneráveis; defesa e salto oferecem respostas.

## Ritmo de luta

Na versão 0.16, os lutadores voltam à escala maior, com altura nominal de 215 pixels na área lógica de 960 × 540. A espera tem respiração leve de 1,5 pixel em um segundo; os ciclos autorais de avanço e recuo recebem balanço discreto. O pulo estica levemente na subida e comprime ao pousar. A reação a dano usa recuo e tremor, sem alterar as cores do personagem. Golpes rápidos deixam um rastro discreto dos próprios pixels.

Golpes possuem preparação, contato e recuperação. O instante de impacto coincide com o quadro de extensão do ataque. Avanço e parada respondem ao comando; o salto mantém uma trajetória definida no momento da saída, sem mudar de direção no ar. Especiais ficam em botões próprios do controle e continuam sujeitos aos limites de dano. A recuperação dos golpes básicos foi reduzida em 28%. A pausa de impacto dura seis passos para golpes leves, oito para fortes e dez para especiais; a câmera e o relógio de animação acompanham essa pausa. A simulação executa 60 passos por segundo e a exibição interpola entre eles. O buffer de seis passos permanece disponível durante a pausa de impacto.

## Arenas

- **Sertão — Povoado do Sol Rachado:** Sertão de Pernambuco — praça de povoado fictício.
- **Salvador — Largo das Faíscas:** Salvador — centro histórico em releitura artística.
- **Pará — Porto das Duas Luas:** Pará — cais ribeirinho amazônico fictício.
- **Rio Grande do Sul — Estância do Minuano:** Campanha gaúcha — estância fictícia.
- **Santos — Dentro da Vila Belmiro:** Santos — interior da Vila Belmiro em releitura artística original.
- **Nova York — Cais da Meia-Noite:** Nova York — terminal portuário fictício.
- **São Petersburgo — Margem do Neva:** São Petersburgo — cais de granito em releitura original.
- **Kyoto — Rua das Lanternas:** Kyoto — rua de madeira fictícia.
- **Luoyang — Pátio dos Dragões:** Luoyang — pátio fictício inspirado em margens e templos de Henan.
- **Veneza — Ponte do Último Baile:** Veneza — canal e praça fictícios.
- **Londres — Relógio sob a Chuva:** Londres — rua industrial fictícia próxima ao Tâmisa.
- **Lua — Mar de Basalto:** Lua — Mare Serenitatis, releitura fantástica.
- **Lua — Cratera do Eclipse:** Lua — cratera fictícia da face oculta.

O centro das arenas fica livre para a luta. Lutadores ativos não são reutilizados como pessoas passeando ao fundo. Vegetação, reflexos, bandeiras, partículas e iluminação permanecem separados dos personagens.

## Áudio e controles

As falas e a locução continuam removidas. SOM controla os impactos e os temas instrumentais. Os comandos de teclado e controle podem ser remapeados e são preservados no perfil local. Consulte GUIA-GOLPES.md.

## Registros de produção

As novas folhas foram criadas com image_gen, usando os personagens originais como referência. A preparação técnica utiliza recorte, registro de piso e escala uniforme com amostragem de vizinho mais próximo. As fontes, instruções e relatórios permanecem na pasta-fonte do projeto: [configuração](../../work/authored-v10-config-all.json), [relatório de construção](../../work/authored-v10-build-report.json) e [manifest de execução](../brasa/assets/authored-v10.json). Os pedidos individuais seguem o nome work/authored-v10-ID-prompt.txt. Os registros não são necessários para executar o jogo.

Verificações automáticas conferem sequência, transparência, escala e integridade dos arquivos. A aparência e o movimento exigem inspeção visual; esses testes não representam medição de fluidez no computador do jogador.

## Campanha

Os quatro guardiões lunares começam bloqueados nos modos normais. Cada vitória sobre um guardião no Modo História salva seu desbloqueio no perfil local.




## Mapas originais0.13

As13pinturas detalhadas de0.10foram restauradas integralmente, junto de suas animações originais. O cenário volta à composição original da tela; a câmera dos lutadores, escala55%, distância mínima, sombras elípticas, golpes e controles atuais foram mantidos. F3 identifica o quadro original e os limites do mundo.


## Caminhada 0.16

Além dos64 quadros originais preservados, cada lutador usa128 novas poses de caminhada:64 para frente e64 para trás. O ciclo mantém a mesma textura de roupa e cor da pose base. Os novos atlas são gerados offline, respeitam o chão e não exigem deformação por pixel durante as partidas.
