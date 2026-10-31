# Contribuir

1. Abra uma issue com o problema/proposta e passos para reproduzir.
2. Crie uma branch a partir de `main`.
3. Mantenha alterações de combate, arte e interface com escopo claro.
4. Execute `npm ci`, `npm run check` e `npm test`.
5. Para mudanças visuais, anexe captura ou sequência de quadros e informe a escala.
6. Descreva comportamento anterior, resultado, testes e limites no pull request.

Não inclua credenciais, perfis de navegador, arquivos pessoais ou pacotes antigos. Não incorpore sprites, personagens ou áudio de terceiros sem autorização documentada. Não substitua artes apenas para fazer testes passarem.

Após uma alteração autorizada de arte, `npm run geometry` reextrai a geometria dos sprites. Revise as diferenças e atualize os hashes com `npm run assets:manifest`.
