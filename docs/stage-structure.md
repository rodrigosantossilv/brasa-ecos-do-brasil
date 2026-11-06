# Estrutura de cenário — 4 de novembro de 2026

Esta alteração corrige a composição do cenário, a câmera, a escala e a separação dos lutadores e a depuração.

O mundo tem 2880 × 540 unidades. Cada arena usa cinco imagens de 1920 × 270 pixels, todas desenhadas com escala 2. Os fatores são 0.05 para o céu, 0.2 para as montanhas, 0.4 para árvores e pavilhão, 0.7 para a cerca e 1.0 para o chão. A altura de contato vem da arena original.

O compositor usa exclusivamente os 13 PNG existentes. Máscaras separam as regiões em cinco planos. O preenchimento de áreas encobertas reutiliza trechos espelhados da imagem original. Quatro cópias espelhadas de cada plano formam uma imagem de 3840 unidades de largura, suficiente para cobrir o mundo. O cache retém até três arenas. O enquadramento central recompõe a arte original pixel por pixel. Durante a rolagem, `offset = 960 * (1 - fator) + camera.x * fator` define a posição de cada imagem e o módulo mantém a continuidade.

Câmera fixa em zoom 1, seguindo o ponto médio com alpha 0.1 por tick de 60 Hz e clamp em 0..1920. Lutadores a 55% da escala de combate anterior, com separação calculada pela silhueta real e sombra elíptica. F3 mostra limites de cada camada e do mundo, incluindo no treino.

Execute `npm test`. A suíte mede o parallax no desenho real, compara pixels nas junções, valida a cobertura em todas as posições inteiras da câmera e confere amostras do raster ao longo da rolagem. Também testa câmera, escala, separação, sombras e F3. A folha `test-results/stage-structure/all-arenas-left-center-right.png` permite conferir os extremos e o centro de cada arena.

As sobreposições de cenário do renderizador anterior foram retiradas. A figura sobre a cerca e o quadrado verde não foram identificados nos PNG atuais. A comparação de imagens e de hashes confirma a preservação dos arquivos de arte originais.

O teste manual no treino da Estância do Minuano registra o F3 ligado e desligado depois de deslocar a câmera. Os PNG originais já têm os planos compostos. O espelhamento preserva as junções dos pixels, mas a revisão dos extremos ainda mostra transições de textura nas áreas que estavam atrás de construções e da cerca. A ausência de emendas perceptíveis em todas essas áreas continua pendente de revisão visual.
