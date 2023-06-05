import { Request, Response } from 'express';
import OrderService from '../services/order.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function getOrderAll(req: Request, res: Response) {
  try {
    const serviceResponse = await OrderService.getOrdersAll();
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    res.status(200).json(serviceResponse.data);
  } catch (error) {
    console.log(error);
    return res.status(500).json('Algo deu Errado');
  }
}

async function createOrder(req: Request, res: Response) {
  try {
    const order = req.body;
    const serviceResponse = await OrderService.createOrder(order);
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    return res.status(201).json(order);
  } catch (error) {
    console.log(error);
    return res.status(500).json('Algo deu errado');
  }
}

export default {
  getOrderAll,
  createOrder,
};