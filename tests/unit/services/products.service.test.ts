import { expect } from 'chai';
import sinon from 'sinon';
import ProductModel from '../../../src/database/models/product.model';
import { createProduct, responseProduct, responseService, mockProductsAll } from '../../mocks/product.mock';
import ProductService from '../../../src/services/product.service';

describe('Testa ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  it('Testa retorno da função createProduct', async () => {
    sinon.stub(ProductModel, 'create').resolves(responseProduct);

    const response = await ProductService.createProduct(createProduct);
    expect(response).to.deep.equal(responseService);
  });

  it('Testa a função getProducts', async () => {
    const mock = mockProductsAll.map((product) => ProductModel.build(product));
    sinon.stub(ProductModel, 'findAll').resolves(mock);

    const response = await ProductService.getProducts();
    expect(response.data).to.deep.equal(mock);
  });
});
