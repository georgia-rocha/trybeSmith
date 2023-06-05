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
    const { productIds, userId, id } = order.dataValues;
    
    return {
      id,
      userId,
      productIds,
    };
  });
  return { status: 'SUCCESSFUL', data: response };
}

async function createOrder(
  order: Order,
): Promise<ServiceResponse<Order>> {
  const { userId, productIds } = order;
  const newOrder = await OrderModel.create({ userId });
  // console.log(newOrder);
  
  if (productIds) {
    const updateProducts = productIds
      .map((prod) => ProductModel
        .update({ orderId: newOrder.dataValues.id }, { where: { id: prod } }));
    await Promise.all(updateProducts);
  }

  const responseService: ServiceResponse<Order> = {
    status: 'SUCCESSFUL', data: order };
  return responseService;
}

export default {
  getOrdersAll,
  createOrder,
};