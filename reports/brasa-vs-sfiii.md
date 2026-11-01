# BRASA e SFIII: comparação de engenharia, não cópia de números

Baseline BRASA 0.15, auditado em 1/11/2026. A coluna SFIII descreve princípios
de design e observabilidade, não frame data oficial universal. Não executamos
ROM/emulador nem medimos a partida do vídeo com inputs sincronizados.

| Metric | BRASA Current | SFIII Reference | Proposed BRASA Target |
|---|---|---|---|
| simulation rate | App com acumulador fixo 60 Hz; agendas 30/60/120/144 passaram | Combate expresso em frames | Preservar 60 Hz e formalizar `step`/contador; não reescrever RAF |
| startup | Timers em segundos; Bento light 5 ticks S, primeiro ativo6 | MOVE-DEPENDENT | Inteiro por move com convenção explícita e migração compatível |
| active | Envelope em segundos; sequência pode abrir janelas menores | MOVE-DEPENDENT | Timeline ofensiva por frame, separada da pose |
| recovery | Base/override ÷speed, normais×.72; Bento light10ticks R | MOVE-DEPENDENT | Recovery inteiro e testável, com compromisso por ação |
| hitstop | 6/8/10 no hit, 2 no block comuns; super tem trava cinematográfica | MOVE-DEPENDENT | Campos próprios por hit/block/move; manter baseline antes de tuning |
| hitstun | .42 light, .58 heavy/kick; especiais por spec; Bento26/35ticks | MOVE-DEPENDENT | Inteiro por ataque/estado e regras de juggle explícitas |
| blockstun | .13 s /8ticks compartilhados | MOVE-DEPENDENT | Independente por golpe, derivado e testável |
| pushback | Impulso hit=(push ou20)×5; block75; damping e paredes | MOVE-DEPENDENT | Impulsos hit/block declarados e distância resultante medida em contexto |
| input buffer | Seis ticks ativos; um comando; preservado no freeze | Dependente da ação/sistema; não assumimos um número universal | Manter seis na compatibilidade; experimento opt-in com INPUT_BUFFER_FRAMES=5 depois |
| cancel windows | Confirmação e envelope ativo, categorias/rotas e limite3; exceção de acorde super | MOVE-DEPENDENT | Intervalos autorais e categorias; atalhos continuam acessíveis |
| frame advantage | Não há HUD/runtime dedicado; auditor calcula por término das travas | MOVE-DEPENDENT, contado por disponibilidade dos atores | Medição em treino; armazenar causas e contexto, não vantagem manual |
| parry window | NÃO IMPLEMENTADO; guarda precisa/counter é outro sistema | Contextual, ground/air/red; nenhum número universal adotado | Especificação/testes separados; opt-in posterior, não bloqueia Fase2 |
| jump startup | Já sai do chão no primeiro tick; .04 s é fase visual | CHARACTER/MOVE-DEPENDENT | Separar salto lógico de antecipação visual, preservar arco no adapter |
| landing recovery | .1 s visual, cancelável por ação no próximo tick | MOVE/STATE-DEPENDENT | Regra explícita por pouso/ataque; definir antes de alterar |
| walk speed | 76 perfis; Bento183,3frente/120,9trás; Jana270,3/198,9unid/s | CHARACTER-DEPENDENT | Preservar diferenças e medir spacing; sem copiar pixels de outro jogo |
| dash duration | .16frente/.14trás, cooldown.36; timers, não frame data autoral | CHARACTER/MOVE-DEPENDENT | Inteiros e deslocamento autoral sob teste |
| knockdown duration | NÃO IMPLEMENTADO como estado; há launch e thrownTime.44 | MOVE-DEPENDENT | Estado/tipo/duração próprios quando a mecânica for especificada |
| wakeup invulnerability | NÃO IMPLEMENTADO como regra dedicada | MOVE/STATE-DEPENDENT | Flags por frame e cenários de meaty/reversal antes de tuning |

## O que aprender e preservar

O objetivo é permitir leitura de startup, punição de recovery, controle de
distância e confirmação de hits. A unidade comum deve ser o tick de combate,
e as ferramentas devem explicar por que houve hit/block/whiff. Nenhum valor
do quadro é uma proposta de transformar os lutadores do BRASA nos da Capcom.
Preservar nomes, silhuetas, arenas, histórias, comandos simples e progressão.

A separação entre regras e apresentação já existe parcialmente. O problema
não é “falta total de hitstop ou 60 Hz”: é a dificuldade de inspecionar e editar
os parâmetros sem passar por vários ramos. O relatório usa medidas do runtime,
não deduz frames a partir da velocidade aparente de um vídeo.

## Fontes primárias consultadas e limites

Nenhum código ou asset desses projetos foi incorporado. Ler um README não
certifica implementação nem qualidade de gameplay; quando houve leitura de
código, isso é distinguido abaixo.

- **3rd Training Lua**, commit
  [`d0f8e551`](https://github.com/effie3rd/3rd_training_lua/tree/d0f8e551dbfc3d5e22e91c0978f7b908149ff6dd):
  leitura de [frame_advantage.lua](https://github.com/effie3rd/3rd_training_lua/blob/d0f8e551dbfc3d5e22e91c0978f7b908149ff6dd/src/data/frame_advantage.lua)
  e [input_history.lua](https://github.com/effie3rd/3rd_training_lua/blob/d0f8e551dbfc3d5e22e91c0978f7b908149ff6dd/src/ui/input_history.lua).
  O código acompanha disponibilidade dos dois atores e superfreeze para
  calcular vantagem; é a referência para medir readiness em contexto.
  É ferramenta comunitária, não especificação oficial da Capcom.
- **Shoto Fighter**, commit
  [`3d44da0a`](https://github.com/aminRX/shoto-fighter-godot/tree/3d44da0a26db269e3b6d7a4939fb657533548d39):
  [MoveData](https://github.com/aminRX/shoto-fighter-godot/blob/3d44da0a26db269e3b6d7a4939fb657533548d39/core/move_data.gd),
  [MovePhase](https://github.com/aminRX/shoto-fighter-godot/blob/3d44da0a26db269e3b6d7a4939fb657533548d39/core/move_phase.gd)
  e fighter previamente inspecionados. Referência de organização por dados;
  não motivo para migrar o BRASA de engine.
- **Neon Fist**, commit
  [`c28ffb7e`](https://github.com/developerrutu/neon-fist/tree/c28ffb7e7e81ed8f9cec274772c43c30d2876d42):
  leitura de [ENGINEERING.md](https://github.com/developerrutu/neon-fist/blob/c28ffb7e7e81ed8f9cec274772c43c30d2876d42/docs/ENGINEERING.md)
  e [public/index.html](https://github.com/developerrutu/neon-fist/blob/c28ffb7e7e81ed8f9cec274772c43c30d2876d42/public/index.html#L748).
  Código contém ring buffer de direções, `matchMotion`, save/load de fighter,
  hitbox limitada por moveFrame, hurtboxes e pushbox, e acumulador 60 Hz.
  Isso sustenta a comparação arquitetural; não validamos seu netcode,
  determinismo ou sensibilidade em execução. `hitbox()` usa uma caixa do move
  dentro da janela: não supor múltiplas caixas autorais diferentes em cada frame.
- [Godot Framitor](https://github.com/0xEvsky/Godot-Framitor),
  [Rollback Fighter Demo](https://github.com/blast-harbour/Godot-Rollback-Fighter-Demo),
  [Fray](https://github.com/Pyxus/fray) e
  [GoHitHurt](https://github.com/wokidoo/GoHitHurt): READMEs consultados sobre
  edição de timelines, simulação ordenada, input composto e caixas modulares.
  Não foram instalados/executados; Fray se declara alpha. São referências
  complementares, não dependências do BRASA.
- **The Last Stand:** endereço fornecido redirecionou no endpoint consultado;
  fonte/código final **NÃO VERIFICADO**. Nenhuma afirmação técnica sobre ele
  é usada para justificar mudanças.
- As outras três referências anteriores — FosterFight, 2D-FightingGame e
  Unity Fighting Game Framework — permanecem documentadas, com commits e
  arquivos estudados, em [COMBAT_REFERENCES.md](../docs/COMBAT_REFERENCES.md).

Números de janela de parry de SFIII: **NÃO ESPECIFICADO nesta auditoria**.
O plano exige testes nos limites da janela antes de introduzir parry no BRASA.
