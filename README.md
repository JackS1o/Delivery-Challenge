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

  - `POST /orders` - Cria uma nova ordem de compra. O corpo da requisição deve conter o método de pagamento, o endereço e um array de produtos, onde cada produto deve conter o `id`, `name`, `price` e `description` desejada. Exemplo de corpo de requisição:
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
      },
      {
        "_id": "640ebdb605aaccc707ab1508",
        "name": "Pepsi",
        "price": 5,
        "description": "Pepsi is a carbonated soft drink manufactured by PepsiCo."
      }
    ]
  }
  ```
  ```
</details>