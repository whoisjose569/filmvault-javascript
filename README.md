# FilmVault - Pesquisa de Filmes

**FilmVault** é um projeto de estudo desenvolvido com o objetivo de praticar JavaScript básico. O projeto consome a API **OMDb** para realizar a pesquisa de filmes e exibir detalhes sobre o filme pesquisado.

## 💡 Objetivo

O objetivo desse projeto foi praticar os conceitos básicos de JavaScript, como manipulação de DOM, uso de `fetch` para realizar requisições a APIs, e a estruturação de um projeto simples que consome dados de uma API externa.

## 🚀 Funcionalidades

- Pesquisa de filmes pelo título.
- Exibição de detalhes como título, ano, gênero, sinopse e poster do filme.

## 🔧 Tecnologias Usadas

- **HTML**: Estruturação da página.
- **CSS**: Estilização básica da interface.
- **JavaScript**: Manipulação de DOM, requisições HTTP e exibição de dados dinâmicos.

## 🔧 Como Usar

1. Abra o arquivo `index.html` no navegador.
2. Pesquise pelo título de um filme utilizando o campo de input.

## 🛠️ Como Funciona

O projeto realiza a consulta à API **OMDb** usando a chave de API obtida no site [OMDb API](https://www.omdbapi.com/). Quando o título de um filme é inserido no campo de pesquisa, o sistema faz uma requisição para obter os detalhes desse filme e exibe as informações na interface.

## 🗂️ Estrutura do Projeto

- `index.html`: Contém a estrutura da página.
- `omdb-api.js`: Realiza as requisições à API OMDb e converte os dados retornados para um formato mais amigável.
- `film-model.js`: Define a classe `Film`, que representa os dados do filme.

## 📝 Observações

Este projeto foi feito com fins educativos e como uma forma de aprender a consumir APIs e manipular a DOM com JavaScript. Ele não possui backend ou autenticação de usuários, e a chave da API está hardcoded no código para facilitar o aprendizado.

## 🔒 Contribuindo

Este é um projeto pessoal de aprendizado, mas se você tiver alguma sugestão ou correção, fique à vontade para fazer um pull request!

---

Desenvolvido com 💻 por **José Vitor**
