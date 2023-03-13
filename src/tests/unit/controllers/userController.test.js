const { expect } = require('chai');
const sinon = require("sinon");

const userController = require('../../../controllers/userController');
const userService = require('../../../services/userService');

describe('Teste do controller criação de usuário', () => {
  describe('Quando o usuário é criado com sucesso', () => {
    const request = {
      body: {
        email: 'ja@gmail.com',
        password: '123456',
      },
    };

    const response = {
      json: sinon.stub(),
      status: sinon.stub(),
    };

    before(() => {
      sinon.stub(userService, 'createUser').resolves();
      response.status.returns(response);
      userController.createUser(request, response);
    });

    after(() => {
      userService.createUser.restore();
    });

    it('Retorna o código de status 200', () => {
      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('Retorna um objeto', () => {
      expect(response.json.calledOnce).to.be.equal(true);
    });

    it('Retorna o objeto com um token', () => {
      const [{ token }] = response.json.firstCall.args;
      expect(token).to.be.a('string');
    });
  });
});