import { expect } from 'chai';
import sinon from 'sinon';
import OrderModel from '../../../src/database/models/order.model';
import mock from '../../mocks/order.mock';
import OrderService from '../../../src/services/order.service';
import ProductModel from '../../../src/database/models/product.model';

describe('OrdersService', function () {
  beforeEach(function () { sinon.restore(); });
  it('Testa a função getOrdersAll', async () => {
    sinon.stub(OrderModel, 'findAll').resolves(mock.mock as any);

    const response = await OrderService.getOrdersAll();
    
    expect(response.data).to.deep.equal(mock.mockOrdersAll);
  });

  it('Testa a função createOrders', async () => {
    const build = OrderModel.build(mock.orderCreated);
    sinon.stub(OrderModel, 'create').resolves(build as any);
    sinon.stub(ProductModel, 'update').resolves(mock.order as any);

    const response = await OrderService.createOrder(mock.orderCreated);
    expect(response.data).to.deep.equal(mock.orderCreated);
  });

  it('Testa a função createOrders quando não tem o campo productIds', async () => {
    const build = OrderModel.build(mock.orderUserId);
    sinon.stub(OrderModel, 'create').resolves(build as any);

    const response = await OrderService.createOrder(mock.orderUserId);
    expect(response.data).to.deep.equal(mock.orderUserId);
  });
});
