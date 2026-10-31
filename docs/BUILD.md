# Execução e build

Requisitos: Node.js 24/npm; `npm ci` instala ferramentas de teste. Para gerar/executar o EXE, Windows 10/11 e compilador C# do .NET Framework 4.x. O script procura Framework64/Framework e aceita `CSC_PATH` explícito.

| Comando | Resultado |
|---|---|
| `npm start` | Servidor local, porta 8943; `PORT` altera a porta |
| `npm run check` | Sintaxe, referências e hashes dos recursos |
| `npm test` | Motor, app e rasterização |
| `npm run geometry` | Geometria alfa das folhas autorais |
| `npm run assets:manifest` | Atualiza hashes dos PNGs usados |
| `npm run build:pc` | EXE, ZIP e checksums em `dist/` |

O build incorpora CSS/JS, empacota apenas recursos referenciados, compila o launcher e verifica a extração. O ZIP inclui executável e guias, sem credenciais. O pacote é de desenvolvimento e não possui assinatura digital.

No GitHub, abra **Actions → Pacote Windows → Run workflow** para gerar o pacote no runner Windows. O workflow executa as verificações e testes antes do build e mantém o artifact privado `BRASA-PC` por 14 dias. Ao final, cria a prerelease privada de desenvolvimento `v0.14.0`, vinculada ao commit da execução, com `BRASA-PC-v0.14.zip` e `SHA256SUMS.txt` anexados. Os arquivos são gerados e enviados pelo próprio runner; o ZIP não precisa ser enviado pelo navegador.

O download fica em **Releases → BRASA 0.14 — versão de desenvolvimento → Assets**, acessível a quem tem acesso ao repositório privado. Extraia o ZIP antes de executar o jogo. Para conferir a integridade, compare `Get-FileHash .\BRASA-PC-v0.14.zip -Algorithm SHA256` com o valor em `SHA256SUMS.txt`.

A publicação usa o GitHub CLI já disponível no runner e o `GITHUB_TOKEN` temporário da execução, sem token pessoal ou segredo adicional. Apenas o workflow manual de build recebe `contents: write`; o workflow de qualidade mantém `contents: read`. A criação da prerelease é limitada a este repositório enquanto privado. Se `v0.14.0` já existir, a etapa falha com uma mensagem e não substitui a release nem seus anexos. Para uma nova versão, atualize a tag e o nome do ZIP no workflow junto com a versão do projeto.

Esta prerelease é um pacote de desenvolvimento sem assinatura digital. Não representa aprovação da Steam nem comprova teste físico em outro computador.
