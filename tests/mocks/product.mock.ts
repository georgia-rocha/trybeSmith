import { Product } from '../../src/types/Product';
import { ServiceResponse } from '../../src/types/ServiceResponse';
import ProductModel from '../../src/database/models/product.model';

export const createProduct = {
  "name": "Martelo de Thor",
  "price": "30 peças de ouro",
  "orderId": 4
}

export const createProductError = {
  "price": "30 peças de ouro",
  "orderId": 4
}

export const responseProduct = ProductModel.build({
  "id": 8,
  "name": "Martelo de Thor",
  "price": "30 peças de ouro"
});

export const responseService ={
  status: 'SUCCESSFUL',
  data: responseProduct.dataValues,
}

export const responseServiceError ={
  status: 'INVALID_DATA',
  data: responseProduct.dataValues,
}

export const error = {
  status: 500,
  data: 'Algo deu Errado',
}

export const mockProductsAll = [
  {
    "id": 1,
    "name": "Pedra Filosofal",
    "price": "20 gold",
    "orderId": 2
  },
  {
    "id": 2,
    "name": "Lança do Destino",
    "price": "100 diamond",
    "orderId": 1
  }
]

export default {
  createProduct,
  createProductError,
  responseProduct,
  responseService,
  responseServiceError,
  error,
  mockProductsAll,
}