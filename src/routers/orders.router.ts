import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import validadeToken from '../middlewares/validationsToken';
import validate from '../middlewares/validationsOrder';

const ordersRouter = Router();

ordersRouter.get('/orders', OrderController.getOrderAll);
ordersRouter.post(
  '/orders',
  validadeToken.validateToken,
  validate.validateUserId,
  validate.validateProductIds,
  OrderController.createOrder,
);

export default ordersRouter;