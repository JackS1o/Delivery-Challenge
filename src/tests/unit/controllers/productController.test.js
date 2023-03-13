const { expect } = require("chai");
const sinon = require("sinon");

const productController = require("../../../controllers/productController");
const productService = require("../../../services/productService");

describe("Teste do controller de produtos", () => {
  describe("Quando o usuário faz uma requisição para listar todos os produtos", () => {
    const request = {};

    const response = {
      json: sinon.stub(),
      status: sinon.stub(),
    };

    const products = [
      {
        _id: "640e29b1a364a804a49726f3",
        name: "Coca-Cola",
        price: 5,
        description:
          "Coca-Cola is a carbonated soft drink manufactured by The Coca-Cola Company.",
      },
      {
        _id: "640e29b1a364a804a49726f4",
        name: "Pepsi",
        price: 5,
        description:
          "Pepsi is a carbonated soft drink manufactured by PepsiCo.",
      },
      {
        _id: "640e29b1a364a804a49726f5",
        name: "Fanta",
        price: 5,
        description:
          "Fanta is a brand of fruit-flavored carbonated soft drinks created by The Coca-Cola Company.",
      },
    ];

    before(() => {
      sinon.stub(productService, "getAllProducts").resolves(products);
      response.status.returns(response);
      response.json.returns(products);
      productController.getAllProducts(request, response);
    });

    after(() => {
      productService.getAllProducts.restore();
    });

    it("Retorna o código de status 200", () => {
      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it("Retorna um array", () => {
      expect(response.json.calledOnce).to.be.equal(true);
      expect(response.json.returnValues[0]).to.be.a("array");
    });

    it("Retorna um array de produtos", () => {
      expect(response.json.calledOnce).to.be.equal(true);
      expect(response.json.returnValues[0]).to.deep.equal(products);
    });
  });
});
