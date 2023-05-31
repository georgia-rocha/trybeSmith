/* ProductSequelizeModel */
import ProductModel, {
  ProductInputtableTypes,
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
export default {
  createProduct,
};
