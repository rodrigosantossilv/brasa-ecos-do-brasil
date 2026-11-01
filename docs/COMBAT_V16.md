# BRASA 0.16 — combate e caminhada

Esta versão aplica mudanças ao jogo dos76 personagens. Mantém suas identidades,
os228 especiais, os supers, a campanha, os controles simples e as13 arenas.
A auditoria0.15 permanece como registro histórico, não como relatório da0.16.

## Para jogar

- Movimento em64 quadros por direção. O mesmo tecido e a mesma paleta da pose
  original são usados em todo o ciclo, sem alternar roupas entre desenhos.
  Perfis próprios definem passada, recuo, apoio, postura e balanço.
- Socos, chutes e agarrões terminam na pose correta. Foi removido um flash
  que mostrava a pose de impacto por um frame depois do fim da recuperação.
- Durante blockstun, o lutador mantém a reação de guarda, em vez de parecer
  que tomou dano. Os valores de dano e os limites dos especiais são preservados.
- Além dos botões diretos: ↓↘→ + leve chama especial1; →↓↘ + forte chama
  especial2; ↓↙← + chute chama especial3. As direções acompanham o facing.
  São alternativas: no controle PS5, △, R2 e L2 continuam chamando os três especiais.
- O buffer padrão continua seis ticks e conserva comandos durante hitstop.

## Laboratório de treino

Abra TREINO LIVRE, escolha os dois lutadores e a arena. O botão LAB/FRAMES
abre o painel. Tudo também tem botão clicável e navegação pelos menus.

| Atalho | Ação |
|---|---|
| F1 | Pausar/retomar sem esconder os dados com o menu de pausa |
| F2 | Avançar exatamente um tick lógico, inclusive durante hitstop |
| F3 | Mostrar hit/hurt/push/throw e root/pés |
| Alt+F3 | Debug anterior dos limites de mundo/cenário |
| F4 | Histórico dos últimos120 frames de input |
| F5 | Resetar treino, posições, vida, barra, ataques e projéteis |

O painel mostra estado, frame do golpe, startup/active/recovery, primeiro frame
ativo, hitstop, hitstun, blockstun e vantagem medida após o contato. No botão
ALVO, alterne entre sem guarda, guarda alta e guarda baixa. Depois de pausar,
pressione o comando de combate e F2 para observar a resposta. Um atalho
remapeado ou usado num campo de edição não é interceptado pelo laboratório.

Caixas são um adapter do resolver existente: verde mostra vulnerabilidade,
azul a caixa corporal, vermelho a região ofensiva elegível e amarelo o agarrão.
Normais e especiais conservam suas condições de altura, direção e alvo.
Vantagem é observada no cenário atual; não garante que outro golpe alcance o rival.

## Implementação e limites

`combat-frame-data.js` valida e compila os timers existentes numa timeline
inteira, preservando sua quantização. O ataque usa `moveFrame`; `time` é uma
projeção compatível para os renderers e efeitos existentes. `step()` executa
1/60s; `simulationFrame` conta todos os passos, e `actionFrame` respeita freeze.
Os estados de ação agora são expostos com `stateFrame`. Timers legados de
status e condições dos especiais permanecem no adapter; não houve reescrita total.

O baker produz128 poses por lutador, sem modificar os atlas originais. As
transformações são calculadas offline; o jogo carrega só os atlas escolhidos
e desenha cada corpo com uma chamada, sem ler pixels a cada frame. O teste
de apoio acompanha um pixel identificável da bota, evitando confundir ilhas
separadas de uma mesma sola com pés distintos. Nara, Eleanor e Umbriel têm
deslizamento intencional; Tião e Shen têm impulso/salto de apoio próprio.

Parry, knockdown/wakeup dedicados e rollback online continuam fora desta versão.
O alvo é melhorar a execução local e tornar o combate observável. Não se afirma
equivalência de qualidade artística ou de competição com Street Fighter III.

## Verificação reproduzível

```sh
npm ci
npm run check
npm test
npm run build:pc
```

O teste completo inclui regressões anteriores, todos os76 kits,9.728 poses de
locomoção, preservação de RGBA/atlas, apoios, espelhamento, hitstop, treino,
100 repetições semeadas com logs on/off e o RAF real em30/60/120/144Hz.
DOM/Canvas são simulados em parte dos testes. A interface também foi inspecionada
no navegador; isso não substitui medição de FPS/latência no notebook ou teste
físico de cada controle PS4/PS5/Xbox.
