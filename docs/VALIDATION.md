# Validação

As suítes exercitam o motor real em VM e PNGs reais em Canvas nativo. Incluem entradas simuladas, buffer, cancels, dash, salto, hitstop, câmera e consistência entre taxas de exibição.

O alcance dos normais é comparado às poses renderizadas, com contatos e golpes fora do alcance nas duas orientações. Referências e recursos são verificados por hashes.

As suítes da versão 0.15 cobrem contatos simultâneos nas duas posições de jogador, pulo com ataque, aterrissagem, lado de impacto dos projéteis, perfis de mobilidade dos 76 kits e apresentação do dano na barra de vida. Os casos de cura, novo round e movimento reduzido também são exercitados.

São verificações automatizadas; não avaliam FPS em janela de navegador, latência Bluetooth ou sensação de controle físico. Não há alegação de aprovação da Steam ou liberação comercial.

Resultados são escritos em diretórios ignorados. Consulte Actions para a execução correspondente ao commit.

## 0.16

O runner inclui16 suítes: as11 regressões anteriores e5 grupos para combate/treino/apoios/raster/determinismo. A revisão final foi feita pelo implementador, pois os workers independentes estavam indisponíveis. Ver [combate 0.16](COMBAT_V16.md) para escopo e limites; imagens de caminhada e laboratório foram inspecionadas.
