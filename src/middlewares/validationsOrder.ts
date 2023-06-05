import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import userModel from '../database/models/user.model';

const OrderSchema = Joi.object({
  userId: Joi.number().min(3).required(),
});

async function validateUserId(req: Request, res: Response, next: NextFunction) {
  const { userId } = req.body;
  
  const { error } = OrderSchema.validate({ userId });

  if (error?.message.includes('required')) {
    return res.status(mapStatusHTTP('INVALID_DATA')).json({ message: error?.message });
  } 

  if (typeof userId !== 'number') {
    return res.status(mapStatusHTTP('TYPE_INVALID')).json({ message: '"userId" must be a number' });
  }

  const foundUser = await userModel.findOne({ where: { id: userId } });

  if (!foundUser) {
    return res.status(mapStatusHTTP('NOT_FOUND')).json({ message: '"userId" not found' });
  }

  return next();
}

async function validateProductIds(req: Request, res: Response, next: NextFunction) {
  const { productIds } = req.body;
  
  if (!productIds) {
    return res.status(mapStatusHTTP('INVALID_DATA')).json({ message: '"productIds" is required' });
  } 

  if (typeof productIds !== 'object') {
    return res.status(mapStatusHTTP('TYPE_INVALID'))
      .json({ message: '"productIds" must be an array' });
  }

  if (productIds.length === 0) {
    return res.status(mapStatusHTTP('TYPE_INVALID'))
      .json({ message: '"productIds" must include only numbers' });
  }

  return next();
}

export default {
  validateUserId,
  validateProductIds,
};