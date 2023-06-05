import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import UserService from '../../../src/services/user.service';
import UserController from '../../../src/controllers/user.controller';
import {  } from '../../mocks/user.mock';
import { responseService, error, responseServiceError } from '../../mocks/product.mock';

chai.use(sinonChai);

describe('LoginController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Testa caso de sucesso no login', async () => {
    sinon.stub(UserService, 'verifyLogin').resolves(responseService as any);
    await UserController.login(req, res);
    expect(res.status).to.have.been.calledWith(200);
  });

  it('Testa se algo deu errado', async () => {
    sinon.stub(UserService, 'verifyLogin').rejects(error as any);
    await UserController.login(req, res);
    expect(res.status).to.have.been.calledWith(500);
  });

  it('Testa caso de error no login', async () => {
    sinon.stub(UserService, 'verifyLogin').resolves(responseServiceError as any);
    await UserController.login(req, res);
    expect(res.status).to.have.been.calledWith(400);
  });
});
