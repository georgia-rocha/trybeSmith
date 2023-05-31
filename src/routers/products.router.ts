import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const productRouter = Router();

productRouter.get('/products', ProductController.getProducts);
productRouter.post('/products', ProductController.createProduct);

export default productRouter;