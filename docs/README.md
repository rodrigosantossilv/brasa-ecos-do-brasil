# Documentação de BRASA

Guias para conhecer os lutadores, aprender os comandos e trabalhar no motor de **BRASA — Ecos do Brasil**.

[← Página do projeto](../README.md) · [English overview](i18n/README.en.md) · [Baixar v0.15.0](https://github.com/rodrigosantossilv/brasa-ecos-do-brasil/releases/tag/v0.15.0)

## Para jogar

| Guia | O que você encontra |
|---|---|
| [Golpes e controles](guides/GUIA-GOLPES.md) | Teclado P1/P2, PlayStation e Xbox; defesa, dash, esquivas, combos e comandos de cada lutador. |
| [Elenco e atlas de arenas](guides/GUIA-ELENCO.md) | Origens, histórias, estilos de luta e cenários dos 76 lutadores e 13 arenas. |
| [Especiais ligados à história](guides/PLAYER_SPECIALS.md) | As três técnicas especiais de cada personagem e sua ligação com os causos do jogo. |
| [Apresentação e animação](guides/GUIA-ANIMACOES.md) | Pixel art, folhas de animação, entradas e ritmo visual do combate. |

Para começar, veja [como jogar no Windows](../README.md#jogar) ou abra o [resumo de controles](../README.md#controles). A interface do jogo está em português. A [visão geral em inglês](i18n/README.en.md) traduz a apresentação e os comandos principais; os guias detalhados estão em português.

## Para desenvolver

| Documento | O que você encontra |
|---|---|
| [Arquitetura](ARCHITECTURE.md) | Canvas 2D, simulação de combate, renderização, entradas, história e launcher Windows. |
| [Execução e build](BUILD.md) | Node.js 24, comandos do projeto, pacote Windows, workflow de publicação e checksums. |
| [Validação](VALIDATION.md) | Motor real, entradas simuladas, rasterização, verificação de recursos e limites das suítes. |
| [Artes e recursos](ART_ASSETS.md) | Origem e tratamento das artes, manifesto de recursos e informações sobre direitos. |

O [início rápido do código-fonte](../README.md#desenvolver) usa `npm start`. As dependências de desenvolvimento são instaladas com `npm ci` para executar as verificações e os testes.

## Versões e execução automatizada

- [Referências de combate](COMBAT_REFERENCES.md): projetos estudados e técnicas adaptadas na versão 0.15.
- [Histórico de versões](../CHANGELOG.md): mudanças do jogo e do motor.
- [Release v0.15.0](https://github.com/rodrigosantossilv/brasa-ecos-do-brasil/releases/tag/v0.15.0): pacote Windows de desenvolvimento e checksums.
- [Qualidade no GitHub Actions](https://github.com/rodrigosantossilv/brasa-ecos-do-brasil/actions/workflows/ci.yml): execuções das verificações e testes.
- [Pacote Windows no GitHub Actions](https://github.com/rodrigosantossilv/brasa-ecos-do-brasil/actions/workflows/build-windows.yml): build e publicação da prerelease privada.

## Direitos

BRASA está em desenvolvimento e mantém **todos os direitos reservados**. Consulte [LICENSE](../LICENSE) para as condições de uso e distribuição e [Artes e recursos](ART_ASSETS.md) para a documentação dos materiais.
