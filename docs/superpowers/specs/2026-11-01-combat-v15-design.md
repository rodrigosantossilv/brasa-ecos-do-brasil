# BRASA 0.15 — combate justo e personagens com mobilidade própria

O usuário pediu para estudar quatro projetos de luta e melhorar o BRASA, e autorizou que atualizações verificadas sejam enviadas ao GitHub e distribuídas em Releases. Esta etapa mantém JavaScript/Canvas, os mapas e as artes originais, a simulação de 60 Hz e os atalhos simples de PlayStation/Xbox. A escolha de implementação abaixo é do agente, dentro desse pedido de execução.

## Abordagem

Comparar os projetos com o motor atual e corrigir diferenças reproduzíveis oferece resultado verificável sem migração de engine. Migrar para Godot/Unity descartaria o runtime e o launcher atuais; importar personagens/arquivos das referências não está no escopo. Aplicaremos independentemente os princípios de fases sincronizadas, resolução de contato consistente, dados de movimento por personagem e leitura clara do dano. Fontes e limites de reutilização ficam documentados em `docs/COMBAT_REFERENCES.md`.

## Resultado esperado

- Ataques normais elegíveis que se tocam no mesmo passo podem trocar golpes, sem prioridade arbitrária do slot P1. Contadores, invulnerabilidade, interrupções anteriores e projéteis não ganham contatos extras.
- Pulo com ataque no mesmo passo produz ataque aéreo; ao pousar, um ataque aéreo deixa de ameaçar como overhead e permite retomar os comandos no chão. A trajetória permanece fixa e o buffer de seis passos continua válido.
- Defesa e recuo contra projéteis usam o lado de chegada do projétil, inclusive se quem disparou trocou de lado. Ataques corpo a corpo preservam suas regras atuais.
- Os 76 kits têm movimento coerente com velocidade e estilo; pesados são distintos dos ágeis sem mudar dano, roupa, escala, hitboxes ou atalhos. Perfis já deliberadamente específicos são preservados. O motor dá precedência ao perfil explícito em vez de antigos atalhos de identidade.
- As barras de vida mostram imediatamente o HP real e deixam um segmento de dano desaparecer depois de uma pausa curta. Ambos os lados, combos, cura e mudança de round são tratados; o efeito respeita movimento reduzido.

## Aceitação

Testes de regressão reais cobrem os defeitos antes das correções, as duas orientações/slots, os 76 perfis e o ciclo do indicador de dano. As oito suítes atuais continuam verdes, assim como a checagem estática, o build Windows, a verificação SHA/CRC e a extração do launcher. A revisão independente examina o diff integrado. O jogo é executado e a mudança relevante é inspecionada na interface. A publicação usa o head remoto atual com lease, conserva a apresentação do README e cria v0.15.0 sem sobrescrever releases anteriores.

## Limites

Não redesenhar mapas, roupas ou sprites, não adicionar narração ou comandos obrigatórios complexos, não mudar engine nem adicionar dependências. Não declarar teste físico de controle, benchmark de fluidez ou aprovação Steam sem evidência. Não copiar código, sprites ou áudio das referências.
