import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const ProductSchema = Joi.object({
  name: Joi.string().min(3).required(),
  price: Joi.string().min(3).required(),
});

async function validateProduct(req: Request, res: Response, next: NextFunction):
Promise<Response | void> {
  const { name, price } = req.body;
  
  const { error } = ProductSchema.validate({ name, price });

  if (error?.message.includes('required')) {
    return res.status(mapStatusHTTP('INVALID_DATA')).json({ message: error?.message });
  } 

  if (error?.message.includes('string')) {
    return res.status(mapStatusHTTP('TYPE_INVALID')).json({ message: error?.message });
  }
  if (name.length <= 3 || price.length <= 3) {
    return res.status(mapStatusHTTP('TYPE_INVALID')).json({ message: error?.message });
  }
  return next();
}

export default {
  validateProduct,
};
