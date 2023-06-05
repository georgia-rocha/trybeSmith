import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import ProductController from '../../../src/controllers/product.controller';
import ProductService from '../../../src/services/product.service';
import { createProduct, responseService, responseServiceError, error, createProductError } from '../../mocks/product.mock';

chai.use(sinonChai);

describe('Testa ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Testa a Criação de um novo product', async () => {
    req.body = createProduct;
    sinon.stub(ProductService, 'createProduct').resolves(responseService as any);
    await ProductController.createProduct(req, res);
    expect(res.status).to.have.been.calledWith(201);
  })

  it('Testa caso de error na criação de um product', async () => {
    req.body = createProduct;
    sinon.stub(ProductService, 'createProduct').resolves(responseServiceError as any);
    await ProductController.createProduct(req, res);
    expect(res.status).to.have.been.calledWith(400);
  });

  it('Testa se algo deu errado', async () => {
    req.body = createProductError;
    sinon.stub(ProductService, 'createProduct').rejects(error as any);
    await ProductController.createProduct(req, res);
    expect(res.status).to.have.been.calledWith(500);
  });

  it('Testa a busca por products', async () => {
    sinon.stub(ProductService, 'getProducts').resolves(responseService as any);
    await ProductController.getProducts(req, res);
    expect(res.status).to.have.been.calledWith(200);
  });

  it('Testa caso de error no get dos Products', async () => {
    sinon.stub(ProductService, 'getProducts').resolves(responseServiceError as any);
    await ProductController.getProducts(req, res);
    expect(res.status).to.have.been.calledWith(400);
  });

  it('Testa se algo deu errado', async () => {
    sinon.stub(ProductService, 'getProducts').rejects(error as any);
    await ProductController.getProducts(req, res);
    expect(res.status).to.have.been.calledWith(500);
  });
});
