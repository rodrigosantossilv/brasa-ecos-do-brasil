# BRASA 0.16 — ledger

Usuário autorizou sair da auditoria e alterar o jogo. Executar plano combat-v16.
Baseline remoto47d2a116 (auditoria), gameplay0.15. Novo worktree nativo recebeu
overlay dos arquivos exatos já publicados; git HEAD local82c55b2 é histórico
antigo, publicação usa conector com lease e árvore verificada como nas entregas anteriores.

Ruling: interpretar “tudo jogo” como aplicar as melhorias do combate e apresentação
aos76, preservando a identidade — contexto é o plano entregue — risco se incorreto:
o usuário pode também desejar novas artes, que precisam de direção visual específica.
Ruling: execução inline; os três workers anteriores estão indisponíveis por erro
de limite de uso. Não repetir dispatches que já falharam; revisão final própria
se a disponibilidade não mudar — custa menor independência da revisão.
Ruling: manter seis ticks no padrão e5 configurável, motions opcionais, nenhum
atalho de controle removido. Parry/knockdown/rede não entram sem contrato próprio.

Task1: clock/AttackData/state e correção de blockstun implementados; testes RED→GREEN.
Task2: input history120, motions opcionais, buffer5/6 e consumo único implementados; RED→GREEN.
Task3: caixas reais e vantagem contextual implementadas; snapshots isolados e teste de bloqueio passaram.
Task4: treino F1–F5, GUI e dummy com guarda;3 checks de interface e inspeção real em8953.
Task5: 9.728 poses geradas; textura única, sola rígida, campo contínuo. Marcadores RGBA únicos mediram380 segmentos com drift menor que1 pixel nativo. Ilhas da sola/centroides eram métricas enganosas e foram substituídas pelo rastreamento de um pixel identificável.
Ruling: não copiar a locomoção experimental incompleta; gerar novamente a partir de idle0 e validar RGBA e apoio. Isso reduz a atuação desenhada dos braços durante a caminhada; preserva a roupa e evita popping.
Final review: self-review (workers anteriores indisponíveis). Encontrado e corrigido flash da pose de impacto no fim do recovery, com teste RED→GREEN nos76 lutadores×4 normais. Encontradas dependências dos fixtures HUD no novo laboratório; isolamento das fixtures atualizado e10 checks do HUD passaram. Nenhum Critical/Important conhecido pendente. Testes completos/build/publicação em conferência final.

Task6: check com19scripts/198hashes passou;16suítes completas passaram, incluindo a correção do flash. Build Windows local183.037.051bytes com CRC/hash/extração/reparo/perfil verificados; SHA256d129a18b7bba79293ce93149386bb156bddc20f665a709aa0faacca454b8e337. Interface final verificou jab bloqueado no frame6,2hitstop e8blockstun, console sem erros. Publicação em andamento.
