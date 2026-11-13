# Daniel Fretes e Mudanças — Landing page

Site institucional estático de uma empresa de mudanças e fretes em Governador Valadares, MG.
Apresenta serviços, galeria de fotos reais, apresentação do responsável, formulário de orçamento e contatos oficiais.

## Tecnologia

- HTML, CSS e JavaScript puros, sem build e sem dependências.
- Nenhum backend, banco de dados ou envio automático de mensagens.
- Formulário de orçamento que monta a mensagem e abre o WhatsApp para o usuário confirmar.

## Estrutura

```
index.html      página principal
styles.css      estilos
script.js       menu móvel e formulário de orçamento
assets/fotos/   imagens WebP usadas nas páginas
```

As fotos que aparecem no site são reais, otimizadas em WebP e ficam em `assets/fotos/`,
que é a pasta pública de imagens do site. Os originais permanecem intactos em `fotos/`
no computador e não são enviados ao repositório.

## Como visualizar localmente

1. Abra `index.html` diretamente no navegador, ou
2. Na raiz do projeto, inicie um servidor local:

```
python -m http.server 8765 --bind 127.0.0.1
```

Depois acesse `http://127.0.0.1:8765`.

A validação local já foi realizada, sem falhas reproduzíveis.

## Publicação no GitHub Pages

1. Crie o repositório `daniel-fretes-site`.
2. Envie os arquivos do projeto para a branch `main`.
3. No GitHub, abra **Settings → Pages**.
4. Em **Source**, escolha **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/ (root)`.

A raiz do repositório é a pasta publicada, incluindo `assets/fotos/` com as imagens em WebP.
Os caminhos são relativos, então a página funciona direto no endereço do GitHub Pages.

Repositório: https://github.com/juanmurta/daniel-fretes-site
Após ativar o Pages, o endereço padrão será https://juanmurta.github.io/daniel-fretes-site/.

## Contato

Telefone, WhatsApp, e-mail, endereço e redes sociais oficiais estão na própria página.
