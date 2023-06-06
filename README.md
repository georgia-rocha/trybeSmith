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
</details>

<details>
  <summary><strong>Rodando Projeto no Docker vs Localmente</strong></summary><br />
  
  ## Com Docker
 
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

  > Rode o serviço `node` com o comando `docker-compose up -d`.
  - Esse serviço irá inicializar um container chamado `trybesmith_api`.
  - A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it trybesmith_api bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências [**Caso existam**] com `npm install`

  > A aplicação é executada automaticamente

  ---
  
  ## Sem Docker
  
  > Instale as dependências [**Caso existam**] com `npm install`
</details>

## Descrição da aplicação

  ```
  - POST /login
  ```
 <details>
    <summary>Exemplo de body para cadastro</summary>

  ```
  {
    "username": "string",
    "password": "string"
  }
  ```
</details>

<details>
    <summary>Validações Necessárias para o Login</summary>
  Se o login não tiver o campo "username", o resultado retornado deverá ser um status http `400` e
  
  ```
  { "message": "\"username\" and \"password\" are required" }
  ```

  Se o login não tiver o campo "password", o resultado retornado deverá ser um status http 400 e

  ```
    { "message": "\"username\" and \"password\" are required" }
  ```

  Se o login tiver um username que não exista no banco de dados ele será considerado inválido e o resultado retornado deverá ser um status http 401 e

  ```
   { "message": "Username or password invalid" }
  ```

  Se o login tiver uma senha que não corresponda à senha salva no banco de dados, ela será considerada inválida e o resultado retornado deverá ser um status http 401 e

  ```
   { "message": "Username or password invalid" }
  ```
</details>

<details>
    <summary>Resposta com status code 200</summary>
    
  ```
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    }
  ```
</details>

 > Use o Token nos para fazer a autenticação passando ele no Headers da sua requisição como valor da chave  `authorization`.
</br>
</br>

 ```
 - POST /products
 ```
 <details>
    <summary>Exemplo de body para cadastro</summary>

  ```
    {
      "name": "Martelo de Thor",
      "price": "30 peças de ouro",
      "orderId": 4
    }
  ```
</details>
<details>
    <summary>Resposta com status code 201</summary>
    
  ```
    {
      "id": 6,
      "name": "Martelo de Thor",
      "price": "30 peças de ouro"
    }
  ```
</details>

<details>
    <summary>Validações Necessárias para Products</summary>

  <strong>Validação para name</strong>

  Se o campo "name" não for informado, o resultado retornado deverá ser um status http 400 e
  
  ```
    { "message": "\"name\" is required" }
  ```

  Se o campo "name" não for do tipo string, o resultado retornado deverá ser um status http 422 e

  ```
    { "message": "\"name\" must be a string" }
  ```

  Se o campo "name" não for uma string com mais de 2 caracteres, o resultado retornado deverá ser um status http 422 e

  ```
    { "message": "\"name\" length must be at least 3 characters long" }
  ```

  <strong>Validação para price</strong>

  Se o campo "price" não for informado, o resultado retornado deverá ser um status http 400 e

  ```
   { "message": "\"price\" is required" }
  ```

  Se o campo "price" não for do tipo string, o resultado retornado deverá ser um status http 422 e

  ```
   { "message": "\"price\" must be a string" }
  ```

   Se o campo "price" não for uma string com mais de 2 caracteres, o resultado retornado deverá ser um status http 422 e

  ```
   { "message": "\"price\" length must be at least 3 characters long" }
  ```
</details>
</br>
</br>

```
 - GET /products
```
<details>
    <summary>Resposta com status code 200</summary>
    
  ```
  [
    {
      "id": 1,
      "name": "Pedra Filosofal",
      "price": "20 gold",
      "orderId": null
    },
    {
      "id": 2,
      "name": "Lança do Destino",
      "price": "100 diamond",
      "orderId": 1
    }
  ]
  ```
</details>
</br>
</br>

```
 - GET /orders
```

<details>
    <summary>Resposta com status code 200</summary>
    
  ```
    [
      {
        "id": 1,
        "userId": 2,
        "productIds": [1, 2]
      },
      {
        "id": 2,
        "userId": 1,
        "productIds": [3, 4]
      }
    ]
  ```
</details>
</br>
</br>

 
```
  POST /orders
```
<details>
    <summary>Exemplo de body para cadastro</summary>

  ```
  {
    "productIds": [1, 2],
    "userId": 1
  }
  ```
</details>

<details>
    <summary>Validações Necessárias para o POST de orders</summary>
  Se o token não for informado, o resultado retornado deverá ser um status http 401 e
  
  <strong>Validação do Token</strong>

  ```
    { "message": "Token not found" }
  ```

  Se o token informado não for válido, o resultado retornado deverá ser um status http 401 e

  ```
   { "message": "Invalid token" }
  ```

  <strong>Validação para o user</strong>

  Se o corpo da requisição não possuir o campo "userId", o resultado retornado deverá ser um status http 400 e

  ```
   { "message": "\"userId\" is required" }
  ```

  Se o campo "userId" não for do tipo number, o resultado retornado deverá ser um status http 422 e

  ```
   { "message": "\"userId\" must be a number" }
  ```

    Se o campo "userId" não for um usuário, o resultado retornado deverá ser um status http 404 e

  ```
    { "message": "\"userId\" not found" }
  ```

  <strong>Validação para products</strong>

  Se o corpo da requisição não possuir o campo "productIds", o resultado retornado deverá ser um status http 400 e

  ```
   { "message": "\"productIds\" is required" }
  ```

  Se o valor do campo "productIds" não for um array, o resultado retornado deverá ser um status http 422 e

  ```
   { "message": "\"productIds\" must be an array" }
  ```

  Se o campo "productIds" possuir um array vazio, o resultado retornado deverá ser um status http 422 e

  ```
    { "message": "\"productIds\" must include only numbers" }
  ```
</details>

<details>
    <summary>Resposta com status code 201</summary>
    
  ```
  {
    "userId": 1,
    "productIds": [1, 2]
  }
  ```
</details>
</br>
</br>

## Testes de Corbetura

- Os testes de cobertura apresentam uma média de 93%, onde são testadas todas as funções e rotas;
  ![tests-coverage](trybeSmith.png)

1. Para rodar a aplicação:

```
A aplicação é executada automaticamente
```


2. Para abrir o terminal do docker
```
 docker exec -it trybesmith_api bash
```
3. Para criar e popular as tabelas:
```
npx db:reset
```

4. Para testar a aplicação:
Testar todas:
```
npm test
```
Testar individuamente:
 - Colocar o número do requisito a ser testado;
```
npm test **01** 
```

5. Para testar a cobertura da aplicação:

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
