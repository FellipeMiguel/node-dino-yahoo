# Dino's Yahoo
Este é um projeto de um sistema de perguntas e respostas no estilo do Yahoo, criado usando Node.js e EJS. O objetivo deste projeto é permitir que os usuários possam fazer perguntas e receber respostas de outros usuários. 

## Instalação

Para instalar o projeto, siga os seguintes passos:

1. Clone o repositório usando o comando  git clone https://github.com/FellipeMiguel/node-dino-yahoo.git
2. Instale as dependências usando o comando  npm install

## Como usar

Para executar o projeto, siga os seguintes passos:

1. Execute o comando  npm run dev para iniciar o servidor
2. Acesse o sistema através do navegador, digitando a URL  http://localhost:8080

## Funcionalidades

O sistema possui as seguintes funcionalidades:


- Criação de perguntas
- Descrição da pergunta
- Resposta da pergunta

## Tecnologias utilizadas

O projeto foi criado utilizando as seguintes tecnologias:

- Node.js
- Express
- mysql
## Criação do Banco de Dados

Para criar o banco de dados MySQL, edite o arquivo  database.js  com o seguinte código:

```
const Sequelize = require('sequelize');

const connection = new Sequelize('schema_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = connection;
```
