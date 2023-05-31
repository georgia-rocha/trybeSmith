import { Request, Response } from 'express';
import productService from '../services/product.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function getProducts(req: Request, res: Response) {
  try {
    const serviceResponse = await productService.getProducts();
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    res.status(200).json(serviceResponse.data);
  } catch (error) {
    console.log(error);
    return res.status(500).json('Algo deu Errado');
  }
}

async function createProduct(req: Request, res: Response) {
  try {
    const { name, price, orderId } = req.body;

    const serviceResponse = await productService.createProduct({ name, price, orderId });

    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    return res.status(201).json(serviceResponse.data);
  } catch (error) {
    console.log(error);
    return res.status(500).json('Algo deu Errado');
  }
}

export default {
  getProducts,
  createProduct,
};