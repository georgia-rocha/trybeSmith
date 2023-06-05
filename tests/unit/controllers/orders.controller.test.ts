import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import OrderService from '../../../src/services/order.service';
import OrderController from '../../../src/controllers/order.controller';
import { responseService, error, responseServiceError } from '../../mocks/product.mock';
 
chai.use(sinonChai);

describe('OrdersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Testa a busca por orders', async () => {
    sinon.stub(OrderService, 'getOrdersAll').resolves(responseService as any);
    await OrderController.getOrderAll(req, res);
    expect(res.status).to.have.been.calledWith(200);
  });

  it('Testa se algo deu errado', async () => {
    sinon.stub(OrderService, 'getOrdersAll').rejects(error as any);
    await OrderController.getOrderAll(req, res);
    expect(res.status).to.have.been.calledWith(500);
  });

  it('Testa caso de error no get das Orders', async () => {
    sinon.stub(OrderService, 'getOrdersAll').resolves(responseServiceError as any);
    await OrderController.getOrderAll(req, res);
    expect(res.status).to.have.been.calledWith(400);
  });

  it('Testa se é possível criar uma Order com sucesso', async () => {
    sinon.stub(OrderService, 'createOrder').resolves(responseService as any);
    await OrderController.createOrder(req, res);
    expect(res.status).to.have.been.calledWith(201);
  });
  it('Testa se algo deu errado', async () => {
    sinon.stub(OrderService, 'createOrder').rejects(error as any);
    await OrderController.createOrder(req, res);
    expect(res.status).to.have.been.calledWith(500);
  });

  it('Testa caso de error no post das Orders', async () => {
    sinon.stub(OrderService, 'createOrder').resolves(responseServiceError as any);
    await OrderController.createOrder(req, res);
    expect(res.status).to.have.been.calledWith(400);
  });


});
