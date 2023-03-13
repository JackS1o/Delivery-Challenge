# Boas-vindas ao repositório do projeto ENAFOOD!

<details>
  <summary>
    <strong>Como executar o projeto</strong>
  </summary><br>

  1. Clone o repositório 
    `git clone git@github.com:JackS1o/Delivery-Challenge.git && cd Delivery-Challenge`
  
  2. Execute o comando `docker-compose up` para subir o container da aplicação e do banco de dados. O servidor estará disponível em na porta `3001`.

  3. Na raíz do projeto, execute o comando `npm run products:import` para popular o banco de dados com os produtos.
</details>

<details>
  <summary>
    <strong>Rotas desenvolvidas</strong>
  </summary><br>

  - `POST /register` - Cria um novo usuário. O corpo da requisição deve conter o `email` e `password` desejados. Exemplo de corpo de requisição:
  ```json
  {
    "email": "jack@gmail.com",
    "password": "123456",
  }
  ```
  a resposta será um objeto com o um `token` de autenticação no seguinte formato:
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphQGdtYWlsLmNvbSIsImlhdCI6MTY3ODY2NTU3NiwiZXhwIjoxNjc4NjY5MTc2fQ.svDiQTwItv4FG9_0OZNrxmKWb0EWRPsk8LFbYAtUIAc"
  }
  ```

  - `POST /login` - Realiza o login de um usuário. O corpo da requisição deve conter o `email` e `password` que existam no banco de dados. O retorno dessa requisição tabém gera um `token`. Exemplo de corpo de requisição:
  ```json
  {
    "email": "jack@gmail.com",
    "password": "123456",
  }
  ```

  - `GET /products` - Retorna todos os produtos cadastrados no banco de dados. Exemplo de resposta:
  ```json
  [
    {
      "_id": "640ebdb605aaccc707ab1507",
      "name": "Coca-Cola",
      "price": 5,
      "description": "Coca-Cola is a carbonated soft drink manufactured by The Coca-Cola Company."
    },
    {
      "_id": "640ebdb605aaccc707ab1508",
      "name": "Pepsi",
      "price": 5,
      "description": "Pepsi is a carbonated soft drink manufactured by PepsiCo."
    }
  ]
  ```

  - `GET /orders` - Retorna todas as ordens de compra cadastradas no banco de dados. Exemplo de resposta:
  ```json
  [
    {
      "_id": "640ebdb605aaccc707ab1507",
      "user": "jack@gmail.com",
      "paymentMethod": "cartão",
      "address": "Rua São Miguel",
      "order": [
        {
          "_id": "640ebdb605aaccc707ab1507",
          "name": "Coca-Cola",
          "price": 5,
          "description": "Coca-Cola is a carbonated soft drink manufactured by The Coca-Cola Company."
        },
        {
          "_id": "640ebdb605aaccc707ab1508",
          "name": "Pepsi",
          "price": 5,
          "description": "Pepsi is a carbonated soft drink manufactured by PepsiCo."
        }
      ]
    }
  ]
  ```

  - `GET /order/:id` - Retorna uma ordem de compra específica. Exemplo de resposta:
  ```json
  {
    "_id": "640ebdb605aaccc707ab1507",
    "user": "jack@gmail.com",
    "paymentMethod": "cartão",
    "address": "Rua São Miguel",
    "order": [
      {
        "_id": "640ebdb605aaccc707ab1507",
        "name": "Coca-Cola",
        "price": 5,
        "description": "Coca-Cola is a carbonated soft drink manufactured by The Coca-Cola Company."
      }
    ]
  }
  ```

  - `DELETE /order/:id` - Deleta uma ordem de compra específica. Exemplo de resposta:
  ```json
  {
    "message": "Sale deleted successfully!",
    "order": {
      "_id": "640e204bff9bfc2adbe8933f",
      "user": "ja@gmail.com",
      "paymentMethod": "cartão",
      "address": "Rua São Miguel",
      "order": [
        {
          "_id": "640ebdb605aaccc707ab1507",
          "name": "Coca-Cola",
          "price": 5,
          "description": "Coca-Cola is a carbonated soft drink manufactured by The Coca-Cola Company."
        }
      ]
    }
  }
  ```

  - `POST /mvp/order` - é possível criar uma nova ordem de compra, porém, nessa rota, o usuário consegue criar uma ordem com no `máximo 5 produtos`.
  - `POST /earlyadopters/order` - é possível criar uma nova ordem de compra, porém, nessa rota, o usuário consegue criar uma ordem com no `máximo 15 produtos`.
  - `POST /earlymajority/order` - é possível criar uma nova ordem de compra, porém, nessa rota, o usuário consegue criar uma ordem com no `máximo 20 produtos`.
  - `POST /latemajority/order` - é possível criar uma nova ordem de compra sem limite de produtos.
  - Todas as rotas de criação de ordem de compra recebem o seguinte corpo de requisição:

  ```json
  {
    "paymentMethod": "cartão",
    "address": "Rua lallala",
      "order": [
      {
        "_id": "640ebdb605aaccc707ab1507",
        "name": "Coca-Cola",
        "price": 5,
        "description": "Coca-Cola is a carbonated soft drink manufactured by The Coca-Cola Company."
      }
    ]
  }
  ```
  ```
</details>