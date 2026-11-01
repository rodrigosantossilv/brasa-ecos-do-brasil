# Arquitetura

JavaScript e Canvas 2D sem framework. `game/index.html` carrega recursos locais; `app.js` controla telas e o loop de exibição.

`combat.js` simula a 60 Hz. O app acumula o tempo de exibição e interpola posições/relógios sem alterar o estado autoritativo. Hitstop pausa câmera/animação, enquanto comandos continuam no buffer.

`render-fighters.js` escolhe os quadros e aplica transformações leves. `moves.js` contém os kits, o relógio compartilhado de contato e a geometria opaca extraída de 4.864 poses. O runtime não lê pixels para colidir.

A caixa neutra dá estabilidade à distância entre corpos. O envelope das poses de locomoção fica reservado aos limites de mundo/câmera. Mãos, cabelos e roupas podem se tocar no movimento/ataque, sem empurrar o rival a cada quadro.

As coordenadas dos lutadores pertencem a um mundo de 2.880 unidades; a câmera segue seu ponto médio com suavização e limites. Os mapas restaurados usam a composição completa original na tela. A reconstrução experimental por blocos de parallax foi descartada.

`assets.js` é o manifesto do navegador. `input.js` trata teclado, dois controles e persistência. `story.js` mantém a jornada; `presentation.js`, entradas e apresentações.

Os normais elegíveis para uma troca no mesmo passo são examinados antes de aplicar os impactos. Ataques aéreos pertencem ao estado de salto e terminam na aterrissagem. Projéteis informam seu sentido de chegada ao resolver guarda e recuo, independentemente da posição atual do dono.

Cada kit possui `movement` com avanço, recuo e salto. A velocidade base considera os atributos; perfis explícitos têm precedência sobre os valores antigos por identidade. A barra de dano recente pertence ao HUD: não altera HP, roda com o tempo de apresentação, pausa com o jogo e sincroniza em cura, novo round e movimento reduzido.

O launcher Windows incorpora HTML e PNGs com manifesto SHA-256. Extrai para a pasta local do aplicativo, preserva `BrowserData` e abre Edge/Chrome em modo aplicativo. O build do repositório é independente do workspace original.
