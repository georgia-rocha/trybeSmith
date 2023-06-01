import ProductModel from '../database/models/product.model';
import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';
import { ServiceResponse } from '../types/ServiceResponse';

async function getOrdersAll(): Promise<ServiceResponse<OrderSequelizeModel[]>> {
  const orders = await OrderModel.findAll({ include: {
    model: ProductModel,
    as: 'productIds',
    attributes: ['id'],
  } });

  orders.forEach((o) => {
    console.log(o.dataValues.productId);
  });

  return { status: 'SUCCESSFUL', data: orders };
}

export default {
  getOrdersAll,
};