# Site Pessoal / Portfólio — CP4

Versão final do projeto individual de Clara Puerta Lopes da Purificação, consolidando os checkpoints CP1, CP2 e CP3.

## Páginas
- `index.html` — apresentação e interesses.
- `curriculo.html` — formação, cursos e experiência.
- `formulario.html` — formulário validado com armazenamento demonstrativo no navegador.
- `multimidia.html` — áudio, vídeo local e incorporação do YouTube.
- `graficos.html` — desenho Canvas e formas SVG.

## Recursos do CP4
- Bootstrap 5.3.3 integrado por CDN; classes utilizadas incluem `container`, `btn`, `btn-primary`, `row`, `g-3`, `form-control`, `form-select` e `img-fluid`.
- Layout responsivo com CSS mobile-first, Flexbox e Grid.
- Alternância de tema claro/escuro salva em `localStorage` e preservada após F5.
- Formulário com validação nativa/JavaScript, feedback acessível e mensagens salvas no `localStorage`.
- Canvas desenhado por JavaScript e SVG com título/descrição acessíveis.
- Acessibilidade: link para pular ao conteúdo, foco visível, labels associados, `alt` nas imagens, navegação por teclado, regiões semânticas e respeito à preferência por movimento reduzido.

## Privacidade do formulário
O formulário é uma demonstração front-end. As mensagens ficam somente no `localStorage` do navegador atual. Não são enviadas a e-mail ou servidor. Não insira informações sensíveis.

## Publicar no GitHub Pages
1. Envie os arquivos da pasta para a branch `main` do repositório `CP3_Clara_Puerta_Lopes_da_Purificacao`.
2. Em **Settings → Pages**, selecione **Deploy from a branch**, branch `main`, pasta `/ (root)`.
3. Aguarde o deploy e confirme em janela anônima: `https://phgomes05.github.io/CP3_Clara_Puerta_Lopes_da_Purificacao/`.
4. Confira as cinco páginas, áudio, vídeo, tema e formulário.
5. Crie e envie a tag: `git tag -a cp4-entrega -m "Entrega final CP4"` e `git push origin cp4-entrega`.

## Teste da persistência
Mude o tema e atualize a página (F5). Na página Formulário, salve uma mensagem demonstrativa e atualize a página; ela continuará listada. O DevTools → Application → Local Storage permite visualizar as chaves `clara-cp4-theme` e `clara-cp4-messages`.
