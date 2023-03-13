const { expect } = require("chai");
const sinon = require("sinon");

const orderController = require("../../../controllers/ordersController");
const orderService = require("../../../services/ordersService");

describe("Teste do controller de criação de pedidos", () => {
  describe("quando o pedido é criado com sucesso", () => {
    const request = {
      body: {
        userId: 1,
        totalPrice: 100,
        deliveryAddress: "Rua do Bob",
        deliveryNumber: "123",
      },
      auth: {
        data: {
          id: 1,
        },
      },
    };

    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    before(async () => {
      sinon.stub(orderService, "createOrder").resolves();

      await orderController.createOrder(request, response);
    });

    after(() => {
      orderService.createOrder.restore();
    });

    it("Retorna o código de status 201", () => {
      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it("Retorna uma mensagem de sucesso", () => {
      expect(
        response.json.calledWith({ message: "Sale created successfully!" })
      ).to.be.equal(true);
    });
  });

  describe("Trazer todos os pedidos", () => {
    const request = {
      auth: {
        data: {
          id: 1,
        },
      },
    };

    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    before(async () => {
      sinon.stub(orderService, "getUserOrders").resolves();

      await orderController.getUserOrders(request, response);
    });

    after(() => {
      orderService.getUserOrders.restore();
    });

    it("Retorna o código de status 200", () => {
      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it("Retorna uma mensagem de sucesso", () => {
      expect(response.json.calledWith()).to.be.equal(true);
    });

    it("Retorna um array de pedidos", () => {
      expect(response.json.calledWith()).to.be.equal(true);
    });
  });

  describe("Trazer um pedido pelo id", () => {
    const request = {
      params: {
        id: 1,
      },
    };

    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    before(async () => {
      sinon.stub(orderService, "getUserOrdersById").resolves();

      await orderController.getUserOrdersById(request, response);
    });

    after(() => {
      orderService.getUserOrdersById.restore();
    });

    it("Retorna o código de status 200", () => {
      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it("Retorna uma mensagem de sucesso", () => {
      expect(response.json.calledWith()).to.be.equal(true);
    });

    it("Retorna um array de pedidos", () => {
      expect(response.json.calledWith()).to.be.equal(true);
    });
  });

  describe("Atualizar um pedido", () => {
    const request = {
      params: {
        id: 1,
      },
      body: {
        userId: 1,
        totalPrice: 100,
        deliveryAddress: "Rua do Bob",
        deliveryNumber: "123",
        order: [
          {
            productId: 1,
            quantity: 1,
          },
        ],
      },
    };

    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    before(async () => {
      sinon.stub(orderService, "updateOrder").resolves();

      await orderController.updateOrder(request, response);
    });

    after(() => {
      orderService.updateOrder.restore();
    });

    it("Retorna o código de status 200", () => {
      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it("Retorna uma mensagem de sucesso", () => {
      expect(
        response.json.calledWith({
          message: "Sale updated successfully!",
          order: undefined,
        })
      ).to.be.equal(true);
    });
  });

  describe("Deletar um pedido", () => {
    const request = {
      params: {
        id: 1,
      },
    };

    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    before(async () => {
      sinon.stub(orderService, "deleteOrder").resolves();

      await orderController.deleteOrder(request, response);
    });

    after(() => {
      orderService.deleteOrder.restore();
    });

    it("Retorna o código de status 200", () => {
      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it("Retorna uma mensagem de sucesso", () => {
      expect(
        response.json.calledWith({ message: "Sale deleted successfully!", order: undefined })
      ).to.be.equal(true);
    });
  });
});
