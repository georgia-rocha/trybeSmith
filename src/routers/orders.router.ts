import { Router } from 'express';
import OrderController from '../controllers/order.controller';

const ordersRouter = Router();

ordersRouter.get('/orders', OrderController.getOrderAll);

export default ordersRouter;