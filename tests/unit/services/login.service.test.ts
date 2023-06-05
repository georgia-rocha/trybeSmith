import { expect } from 'chai';
import sinon from 'sinon';
import UserModel from '../../../src/database/models/user.model';
import userMock from '../../mocks/user.mock';
import UserService from '../../../src/services/user.service';

describe('Testa LoginService', function () {
  beforeEach(function () { sinon.restore(); });
  it('ao não receber um userName, retorne um erro', async function () {
    sinon.stub(UserModel, 'findOne').resolves(null);
    const parameters = userMock.noUserName;
    const serviceResponse = await UserService.verifyLogin(parameters);

    expect(serviceResponse.status).to.eq('INVALID_DATA');
    expect(serviceResponse.data).not.to.have.key('token');
    expect(serviceResponse.data).to.deep.eq({ message: '"username" and "password" are required' });
  });

  it('ao não receber um password, retorne um erro', async function () {
    sinon.stub(UserModel, 'findOne').resolves(null);
    const parameters = userMock.noPassword;
    const serviceResponse = await UserService.verifyLogin(parameters);
    
    expect(serviceResponse.status).to.eq('INVALID_DATA');
    expect(serviceResponse.data).not.to.have.key('token');
    expect(serviceResponse.data).to.deep.eq({ message: '"username" and "password" are required' });
  });
  
  it('ao passar userNAme invcalid, retorne um erro', async function () {
    sinon.stub(UserModel, 'findOne').resolves(null);
    const parameters = userMock.notExistingUser;
    const serviceResponse = await UserService.verifyLogin(parameters);
    
    expect(serviceResponse.status).to.eq('UNAUTHORIZED');
    expect(serviceResponse.data).to.deep.eq({ message: 'Username or password invalid' });
  });

/*   it('ao passar dados no login, retorna o token', async function () {
    const parameters = userMock.existingUser.dataValues;
    const mockReturn = UserModel.build(userMock.existingUser.dataValues);
    sinon.stub(UserModel, 'findOne').resolves(mockReturn as any);

    const serviceResponse = await UserService.verifyLogin(parameters as any);
   
    expect(serviceResponse.status).to.eq('SUCCESSFUL');
    expect(serviceResponse.data).to.have.key('token');
  }); */
});
