# Boas vindas ao repositório do projeto Trybesmith

![node-version](https://img.shields.io/badge/Node-v16.13.0-yellow)
![typeSript](https://img.shields.io/badge/types-Flow%20%7C%20TypeScript-blue)

## Objetivo 👩‍🎓
 O objetivo deste projeto foi simular uma loja de itens Medievais feitos por encomenda, onde desenvolvi uma API, utilizando TypeScript e Sequelize;
 Foi desenvolvido as camadas Services e Controller da aplicação, utilizando JWT para autenticar algumas rotas e as validações do userId, product, também foi criado os testes unitários para cada função; 
 

# Tecnologias utilizadas <a name="tecnologias"></a>
- [**TypeScript**](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [**Node JS**](https://nodejs.org/en/)
- [**Express**](https://expressjs.com/pt-br/)
- [**Https Status Code**](https://www.npmjs.com/package/http-status-codes)
- [**Thunder Client**](https://www.thunderclient.com/)
- [**Mocha**](https://mochajs.org/)
- [**Jest**](https://jestjs.io/docs/getting-started)
- [**Nodemon**](https://www.npmjs.com/package/nodemon)
- [**Linter**](https://eslint.org/docs/latest/)
- [**Sequelize**](https://sequelize.org/docs/v6/)
- [**Json Web Token**](https://jwt.io/introduction)
- [**Joi**](https://www.npmjs.com/package/joi)

<details>
  <summary><strong>Para Clonar e testar a aplicação</strong></summary>
  
### Será necessário ter instalado na sua máquina:
      Git
      Thunder Client
      MySQL
      Node v16.13.0
      TypeScript
  
1. Clone o repositório

```
git clone git@github.com:georgia-rocha/trybeSmith.git
```

2. Entre na pasta do repositório que você acabou de clonar:

```
cd trybeSmith
```

 <strong>! É necessário ter um arquivo <strong>.env</strong> na raiz da aplicação, com o conteúdo:</strong>

  ```
    FROM node:16.14

    RUN mkdir -p /app && chown -R node:node /app
    USER node

    WORKDIR /app

    COPY --chown=node:node package*.json ./

    RUN npm install

    COPY --chown=node:node src src
    COPY --chown=node:node .editorconfig .
    COPY --chown=node:node .eslintignore .
    COPY --chown=node:node .eslintrc.json .
    COPY --chown=node:node .sequelizerc .
    COPY --chown=node:node tsconfig.json .

  ```

<details>
  <summary><strong>:whale: Rodando Projeto no Docker vs Localmente</strong></summary><br />
  
  ## Com Docker
 
  > Rode o serviço `node` com o comando `docker-compose up -d`.
  - Esse serviço irá inicializar um container chamado `trybeSmith`.
  - A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it trybeSmith bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências [**Caso existam**] com `npm install`

  > A aplicação é executada automaticamente

  ---
  
  ## Sem Docker
  
  > Instale as dependências [**Caso existam**] com `npm install`
</details>


1. Para rodar a aplicação:

```
A aplicação é executada automaticamente
```


2. Para criar e popular as tabelas:
```
npx db:reset
```

3. Para testar a aplicação:
Testar todas:
```
npm test
```
Testar individuamente:
 - Colocar o número do requisito a ser testado;
```
npm test **01** 
```

1. Para testar a cobertura da aplicação:

```
npm run test:coverage
```


</details>

## Requisitos 100%

- [x] 1 - Criei um endpoint para o cadastro de produtos e os testes das funcionalidades deste endpoint;
- [x] 2 - Criei um endpoint para a listagem de produtos e testes das funcionalidades deste endpoint;
- [x] 3 - Criei um endpoint para listar todos os pedidos e testes das funcionalidades deste endpoint;
- [x] 4 - Criei um endpoint para o login de pessoas usuárias e testes das funcionalidades deste endpoint;
- [x] 5 - Criei as validações dos produtos e testes das funcionalidades deste endpoint;
- [x] 6 - Criei um endpoint para o cadastro de um pedido e testes das funcionalidades deste endpoint;
