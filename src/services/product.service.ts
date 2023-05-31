/* ProductSequelizeModel */
import ProductModel, {
  ProductInputtableTypes,
} from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

async function createProduct(
  product: ProductInputtableTypes,
): Promise<ServiceResponse<Product>> {
  let responseService: ServiceResponse<Product>;

  const newProduct = await ProductModel.create(product);
  const { orderId, ...response } = newProduct.dataValues;
  // eslint-disable-next-line prefer-const
  responseService = { status: 'SUCCESSFUL', data: response };
  return responseService;
}
export default {
  createProduct,
};
