# Referências de combate — BRASA 0.15

Estudo de código realizado em 1 de novembro de 2026 a pedido do criador do BRASA. As referências orientaram a análise; as alterações foram implementadas no motor JavaScript/Canvas do jogo. Nenhum código, personagem, sprite ou áudio desses projetos foi importado. Não executamos nem avaliamos a sensação de controle dos jogos de referência.

| Projeto e versão estudada | Ideias observadas no código | Aplicação no BRASA |
|---|---|---|
| [Shoto Fighter — `3d44da0`](https://github.com/aminRX/shoto-fighter-godot/tree/3d44da0a26db269e3b6d7a4939fb657533548d39) | Dados de movimento, fases do ataque e caixas relativas à orientação. | Manter o relógio único já existente e testar os estados na troca de golpes, salto e aterrissagem. |
| [2D-FightingGame — `32efa7b`](https://github.com/rahemk/2D-FightingGame/tree/32efa7b8f4a880be74939a2c4e07e23f99b534d5) | Histórico de comandos, respostas distintas de bloqueio/dano e CPU que emite comandos. | Preservar buffer e controles compartilhados; corrigir a direção da reação e da guarda contra projéteis. |
| [FosterFight — `7fc0f8e`](https://github.com/marchugue/fosterfight/tree/7fc0f8ea170cf443ababc5ecf55264e066ee4fa5) | Cancelamentos explícitos e barra secundária que evidencia o dano recente. | Conservar os cancels limitados do BRASA e adicionar segmento atrasado de dano nas duas barras. |
| [Unity Fighting Game Framework — `6a3f091`](https://github.com/EliteBAM/Unity-Fighting-Game-Framework/tree/6a3f091b7079be672de516943825ccf184481805) | Dados de personagens/moves e caixas de contato amostradas em uma linha do tempo. | Tornar a mobilidade dos kits explícita, mantendo poses e contato no mesmo passo de simulação. |

## Fontes específicas

- Shoto: [MoveData](https://github.com/aminRX/shoto-fighter-godot/blob/3d44da0a26db269e3b6d7a4939fb657533548d39/core/move_data.gd), [MovePhase](https://github.com/aminRX/shoto-fighter-godot/blob/3d44da0a26db269e3b6d7a4939fb657533548d39/core/move_phase.gd), [fighter.gd](https://github.com/aminRX/shoto-fighter-godot/blob/3d44da0a26db269e3b6d7a4939fb657533548d39/fighter/fighter.gd).
- 2D-FightingGame: [Player.cs](https://github.com/rahemk/2D-FightingGame/blob/32efa7b8f4a880be74939a2c4e07e23f99b534d5/Scripts/Player.cs), [AIBrain.cs](https://github.com/rahemk/2D-FightingGame/blob/32efa7b8f4a880be74939a2c4e07e23f99b534d5/Scripts/AIBrain.cs).
- FosterFight: [CancelManager.cs](https://github.com/marchugue/fosterfight/blob/7fc0f8ea170cf443ababc5ecf55264e066ee4fa5/Scripts/Character/CancelManager.cs), [HealthBarComponent.cs](https://github.com/marchugue/fosterfight/blob/7fc0f8ea170cf443ababc5ecf55264e066ee4fa5/Scripts/UI/HealthBarComponent.cs).
- Unity framework: [HitBoxData.cs](https://github.com/EliteBAM/Unity-Fighting-Game-Framework/blob/6a3f091b7079be672de516943825ccf184481805/Project/FightingGameTesting/Assets/Code/Animation%20System/HitBoxData.cs), [HitBoxAnimator.cs](https://github.com/EliteBAM/Unity-Fighting-Game-Framework/blob/6a3f091b7079be672de516943825ccf184481805/Project/FightingGameTesting/Assets/Code/HitBox%20System/HitBoxAnimator.cs).

## Escolhas e limites

O BRASA já tinha simulação de 60 Hz, hitstop, buffer de seis passos, dash e cancels por contato. Esses sistemas foram preservados. Não migramos para callbacks de animação ou tempo variável, nem adicionamos sequências direcionais obrigatórias: os especiais continuam acessíveis pelos atalhos simples dos controles.

O código do Shoto traz licença MIT, enquanto seus créditos distinguem a licença dos sprites. Não foi encontrada licença explícita nos outros três repositórios durante o estudo. Esses fatos não concedem direitos sobre as artes ou marcas de terceiros; a atualização usa implementação e recursos próprios do BRASA.

Veja [arquitetura](ARCHITECTURE.md), [validação](VALIDATION.md) e [comandos](guides/GUIA-GOLPES.md).
