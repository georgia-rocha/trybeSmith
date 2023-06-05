import { Order } from '../../src/types/Order';

const mockOrdersAll: Order[] = [
  {
    "id": 1,
    "userId": 2,
    "productIds": [1, 2]
  },
  {
    "id": 2,
    "userId": 1,
    "productIds": [3, 4]
  }
]

const mock = [
  {
    dataValues: {
      ...mockOrdersAll[0],
      "productIds": [{ "id": 1 }, { "id": 2 }]
    }
  },
  {
    dataValues: {
      ...mockOrdersAll[1],
      "productIds": [{ "id": 3 }, { "id": 4 }]
    }
  }
]

const orderCreated = {
  "productIds": [1, 2],
  "userId": 1
}

const orderUserId = {
  "userId": 1
}

const order = {
  "id": 1,
  "userId": 2
}

const mockcreatedOrders: Order[] = [
  {
    "id": 1,
    "userId": 2,
    "productIds": [1, 2]
  },
  {
    "id": 2,
    "userId": 1,
    "productIds": [1, 2]
  }
]

export default {
  mockOrdersAll,
  mock,
  orderCreated,
  mockcreatedOrders,
  order,
  orderUserId,
}