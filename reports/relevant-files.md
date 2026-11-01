# Inventário de arquivos relevantes — árvore publicada 0.15

Busca textual nos arquivos versionados, por nomes e pelos padrões solicitados. Exclui imagens/binários, que não contêm código pesquisável. As linhas abaixo pertencem à árvore base, não à branch experimental0.16. Arquivos de documentação podem descrever versões históricas: o runtime é a fonte para conclusões atuais.

| Arquivo | Função / classificação | Evidência (primeiras linhas com padrões) |
|---|---|---|
| [.github/ISSUE_TEMPLATE/bug_report.yml](../.github/ISSUE_TEMPLATE/bug_report.yml) | Automação/CI | L6 |
| [.github/workflows/ci.yml](../.github/workflows/ci.yml) | Automação/CI | L3, L11 |
| [CHANGELOG.md](../CHANGELOG.md) | Configuração ou documentação do projeto | L7, L10, L16, L18, L29 |
| [CONTRIBUTING.md](../CONTRIBUTING.md) | Configuração ou documentação do projeto | L5 |
| [README.md](../README.md) | Configuração ou documentação do projeto | L40, L44, L50, L70, L78, L80, L105, L111, L123, L124 … (11 linhas) |
| [asset-manifest.json](../asset-manifest.json) | Metadados/manifest de recursos | L391, L396, L401, L406, L411, L416, L421, L426, L431, L436 … (26 linhas) |
| [docs/ARCHITECTURE.md](../docs/ARCHITECTURE.md) | Documentação e contexto histórico | L3, L5, L7, L13, L15, L17 |
| [docs/BUILD.md](../docs/BUILD.md) | Documentação e contexto histórico | L3 |
| [docs/COMBAT_REFERENCES.md](../docs/COMBAT_REFERENCES.md) | Documentação e contexto histórico | L1, L7, L8, L9, L10, L14, L15, L16, L17, L21 … (11 linhas) |
| [docs/README.md](../docs/README.md) | Documentação e contexto histórico | L11, L13, L14, L22, L31 |
| [docs/VALIDATION.md](../docs/VALIDATION.md) | Documentação e contexto histórico | L3 |
| [docs/guides/GUIA-ANIMACOES.md](../docs/guides/GUIA-ANIMACOES.md) | Documentação e contexto histórico | L11, L17, L23, L55 |
| [docs/guides/GUIA-ELENCO.md](../docs/guides/GUIA-ELENCO.md) | Documentação e contexto histórico | L5, L29, L41, L49, L59, L69, L71, L75, L89, L109 … (131 linhas) |
| [docs/guides/GUIA-GOLPES.md](../docs/guides/GUIA-GOLPES.md) | Documentação e contexto histórico | L5, L7, L17, L30, L38, L40, L41, L45, L49, L51 … (190 linhas) |
| [docs/guides/PLAYER_SPECIALS.md](../docs/guides/PLAYER_SPECIALS.md) | Documentação e contexto histórico | L21, L27, L163, L181, L214, L221, L227, L270, L283, L302 … (20 linhas) |
| [docs/i18n/README.en.md](../docs/i18n/README.en.md) | Documentação e contexto histórico | L40, L44, L46, L48, L50, L70, L73, L78, L80, L105 … (15 linhas) |
| [docs/superpowers/plans/2026-11-01-combat-v15.md](../docs/superpowers/plans/2026-11-01-combat-v15.md) | Documentação e contexto histórico | L5, L7, L11, L15, L17, L24, L26, L28, L30, L31 … (18 linhas) |
| [docs/superpowers/specs/2026-11-01-combat-v15-design.md](../docs/superpowers/specs/2026-11-01-combat-v15-design.md) | Documentação e contexto histórico | L1, L7, L12, L14, L15 |
| [game/app.js](../game/app.js) | Runtime; consultar mapa funcional em docs/combat-audit.md | L3, L4, L5, L7, L9, L10, L15, L16, L17, L20 … (247 linhas) |
| [game/assets.js](../game/assets.js) | Metadados/manifest de recursos | L1, L2 |
| [game/assets/authored-v10.json](../game/assets/authored-v10.json) | Metadados/manifest de recursos | L4, L12, L2103, L2110, L2148, L3962, L3969, L4007, L6062, L6069 … (229 linhas) |
| [game/assets/canonical-v09.json](../game/assets/canonical-v09.json) | Metadados/manifest de recursos | L4, L11, L25, L27, L28, L29, L33, L175, L219, L233 … (513 linhas) |
| [game/assets/companions-v08.json](../game/assets/companions-v08.json) | Metadados/manifest de recursos | L1 |
| [game/camera.js](../game/camera.js) | Runtime; consultar mapa funcional em docs/combat-audit.md | L1, L5, L7, L8, L13, L14, L20, L25, L26, L35 … (22 linhas) |
| [game/combat-fx.js](../game/combat-fx.js) | Runtime; consultar mapa funcional em docs/combat-audit.md | L1, L17, L21, L27, L45, L47, L72, L79, L96, L122 … (35 linhas) |
| [game/combat.js](../game/combat.js) | Runtime; consultar mapa funcional em docs/combat-audit.md | L5, L6, L8, L9, L10, L12, L16, L17, L18, L34 … (555 linhas) |
| [game/data.js](../game/data.js) | Runtime; consultar mapa funcional em docs/combat-audit.md | L1, L3, L9, L42, L43, L107, L122, L132, L137, L155 … (430 linhas) |
| [game/index.html](../game/index.html) | Runtime; consultar mapa funcional em docs/combat-audit.md | L19 |
| [game/input.js](../game/input.js) | Runtime; consultar mapa funcional em docs/combat-audit.md | L4, L6, L7, L9, L11, L50, L53, L54, L55, L56 … (31 linhas) |
| [game/moves.js](../game/moves.js) | Runtime; consultar mapa funcional em docs/combat-audit.md | L1, L3, L4, L5, L6, L7, L9, L10, L11, L12 … (3031 linhas) |
| [game/presentation.js](../game/presentation.js) | Runtime; consultar mapa funcional em docs/combat-audit.md | L16, L22, L34, L40, L52, L64, L82, L91, L94, L100 … (155 linhas) |
| [game/render-fighters.js](../game/render-fighters.js) | Runtime; consultar mapa funcional em docs/combat-audit.md | L4, L5, L6, L22, L39, L49, L51, L52, L53, L54 … (68 linhas) |
| [game/render-stages.js](../game/render-stages.js) | Runtime; consultar mapa funcional em docs/combat-audit.md | L11, L26, L35, L36, L44, L88, L89, L90, L92, L102 … (11 linhas) |
| [game/render.js](../game/render.js) | Runtime; consultar mapa funcional em docs/combat-audit.md | L1, L9, L10, L12, L13 |
| [game/story.js](../game/story.js) | Runtime; consultar mapa funcional em docs/combat-audit.md | L7, L8, L15, L18, L20, L22, L26, L27, L28, L29 … (14 linhas) |
| [game/style.css](../game/style.css) | Runtime; consultar mapa funcional em docs/combat-audit.md | L3, L5, L6, L8, L10, L12, L13, L14, L15, L16 … (43 linhas) |
| [game/world-map.js](../game/world-map.js) | Runtime; consultar mapa funcional em docs/combat-audit.md | L10, L13, L14, L20, L31, L32, L39, L40, L41 |
| [scripts/build-pc.cjs](../scripts/build-pc.cjs) | Ferramenta Node de build, integridade ou teste | L4, L9, L10, L15, L17, L18, L20, L21 |
| [scripts/check.cjs](../scripts/check.cjs) | Ferramenta Node de build, integridade ou teste | L10 |
| [scripts/generate-geometry.cjs](../scripts/generate-geometry.cjs) | Ferramenta Node de build, integridade ou teste | L7, L8, L10, L11, L12, L13, L21, L23, L24, L27 … (29 linhas) |
| [scripts/lib.cjs](../scripts/lib.cjs) | Ferramenta Node de build, integridade ou teste | L4, L6, L8 |
| [scripts/test.cjs](../scripts/test.cjs) | Ferramenta Node de build, integridade ou teste | L3, L5 |
| [scripts/zip.cjs](../scripts/zip.cjs) | Ferramenta Node de build, integridade ou teste | L6 |
| [src/launcher/Launcher.cs](../src/launcher/Launcher.cs) | Launcher Windows offline | L96, L114, L115, L146, L150, L153, L157, L158, L160, L167 … (20 linhas) |
| [tests/animation-v09-mesh.cjs](../tests/animation-v09-mesh.cjs) | Fixture/assertivas de regressão; não executado no jogo | L4, L8, L10, L13, L15, L17 |
| [tests/app-regression-v14-check.cjs](../tests/app-regression-v14-check.cjs) | Fixture/assertivas de regressão; não executado no jogo | L16, L17, L18, L19, L24, L25, L27, L28, L30, L31 … (61 linhas) |
| [tests/authored-v10-decode.cjs](../tests/authored-v10-decode.cjs) | Fixture/assertivas de regressão; não executado no jogo | L8, L16, L17, L18, L19, L21, L27, L34, L38, L39 … (29 linhas) |
| [tests/combat-v15-check.cjs](../tests/combat-v15-check.cjs) | Fixture/assertivas de regressão; não executado no jogo | L2, L5, L6, L9, L10, L11, L12, L13, L15, L17 … (70 linhas) |
| [tests/damage-hud-v15-check.cjs](../tests/damage-hud-v15-check.cjs) | Fixture/assertivas de regressão; não executado no jogo | L2, L3, L8, L16, L17, L30, L31, L33, L34, L35 … (39 linhas) |
| [tests/fluid-app-v14-check.cjs](../tests/fluid-app-v14-check.cjs) | Fixture/assertivas de regressão; não executado no jogo | L2, L8, L14, L15, L16, L18, L19, L20, L21, L23 … (82 linhas) |
| [tests/fluid-combat-v14-check.cjs](../tests/fluid-combat-v14-check.cjs) | Fixture/assertivas de regressão; não executado no jogo | L2, L5, L6, L8, L9, L10, L11, L12, L14, L15 … (69 linhas) |
| [tests/fluid-render-v14-check.cjs](../tests/fluid-render-v14-check.cjs) | Fixture/assertivas de regressão; não executado no jogo | L8, L10, L16, L17, L23, L24, L28, L32, L33, L40 … (48 linhas) |
| [tests/impact-clock-v14-check.cjs](../tests/impact-clock-v14-check.cjs) | Fixture/assertivas de regressão; não executado no jogo | L4, L5, L6, L8, L9, L12, L13, L14 |
| [tests/movement-v15-check.cjs](../tests/movement-v15-check.cjs) | Fixture/assertivas de regressão; não executado no jogo | L2, L5, L6, L11, L13, L14, L15, L17, L20, L21 … (47 linhas) |
| [tests/palette-v08-lib.cjs](../tests/palette-v08-lib.cjs) | Fixture/assertivas de regressão; não executado no jogo | L3, L5, L6 |
| [tests/renderer-regression-v14-check.cjs](../tests/renderer-regression-v14-check.cjs) | Fixture/assertivas de regressão; não executado no jogo | L7, L10, L18, L20, L21, L22, L23, L24, L30, L38 … (48 linhas) |
| [tests/renderer-v09-check.cjs](../tests/renderer-v09-check.cjs) | Fixture/assertivas de regressão; não executado no jogo | L2, L4, L7, L8, L12, L14, L15, L16, L23, L25 … (15 linhas) |
| [tests/renderer-v10-check.cjs](../tests/renderer-v10-check.cjs) | Fixture/assertivas de regressão; não executado no jogo | L2, L6, L9, L15 |
| [tests/story-specials-check.cjs](../tests/story-specials-check.cjs) | Fixture/assertivas de regressão; não executado no jogo | L2, L4, L5, L7, L9, L10, L11 |
| [tests/tools-check.cjs](../tests/tools-check.cjs) | Fixture/assertivas de regressão; não executado no jogo | L13, L17, L24, L29, L47 |

Total: **60 arquivos** encontrados.

Adicionados pela Fase1 (fora do runtime): `scripts/audit-combat.cjs`, `scripts/audit-inventory.cjs`, `tests/combat-audit-check.cjs`, os relatórios em `reports/` e os documentos `docs/combat-audit.md` e `docs/combat-phase-2-plan.md`.

Recursos de arte referenciados por manifest: `assets/authored-v10.json`, `assets/canonical-v09.json`, `assets/companions-v08.json`, `assets/prebaked-stages-v07.json`. Nenhum asset foi modificado.
