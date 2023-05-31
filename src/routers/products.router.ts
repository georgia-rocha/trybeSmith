import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const productRouter = Router();

productRouter.post('/products', ProductController.createProduct);

export default productRouter;