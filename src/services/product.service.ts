import ProductModel, {
  ProductInputtableTypes,
  ProductSequelizeModel,
} from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

async function createProduct(
  product: ProductInputtableTypes,
): Promise<ServiceResponse<Product>> {
  const newProduct = await ProductModel.create(product);
  const { orderId, ...response } = newProduct.dataValues;

  const responseService: ServiceResponse<Product> = { status: 'SUCCESSFUL', data: response };
  return responseService;
}

async function getProducts(): Promise<ServiceResponse<ProductSequelizeModel[]>> {
  const products = await ProductModel.findAll();
  return { status: 'SUCCESSFUL', data: products };
}

export default {
  getProducts,
  createProduct,
};
