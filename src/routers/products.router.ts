import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import validateProduct from '../middlewares/validationsProduct';

const productRouter = Router();

productRouter.get('/products', ProductController.getProducts);
productRouter.post(
  '/products',
  validateProduct.validateProduct, 
  ProductController.createProduct,
);

export default productRouter;