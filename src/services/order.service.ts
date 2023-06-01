import { Order } from '../types/Order';
import ProductModel from '../database/models/product.model';
import OrderModel from '../database/models/order.model';
import { ServiceResponse } from '../types/ServiceResponse';

async function getOrdersAll(): Promise<ServiceResponse<Order[]>> {
  const orders = await OrderModel.findAll({ include: {
    model: ProductModel,
    as: 'productIds',
    attributes: ['id'],
  } });
 
  const response = orders.map((order) => {
    const productIds = order.dataValues.productIds?.map((o) => (o as unknown as Order).id).sort();
    
    return {
      id: order.dataValues.id,
      userId: order.dataValues.userId,
      productIds,
    };
  });
  return { status: 'SUCCESSFUL', data: response };
}

export default {
  getOrdersAll,
};