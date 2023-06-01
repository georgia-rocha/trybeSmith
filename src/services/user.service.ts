import bcrypt from 'bcryptjs';
import jwt from '../utils/jwt';
import { ServiceResponse } from '../types/ServiceResponse';
import UserModel from '../database/models/user.model';
import { Token } from '../types/Token';
import { User } from '../types/User';

async function decodePassword(senha: string, senhaCode: string): Promise<boolean> {
  if (senha && senhaCode) {
    return bcrypt.compare(senha, senhaCode);
  }
  return false;
}

async function verifyLogin(login: User): Promise<ServiceResponse<Token>> {
  if (!login.username || !login.password) {
    return { status: 'INVALID_DATA', data: { message: '"username" and "password" are required' } };
  }

  const foundUser = await UserModel.findOne({ where: { username: login.username } });
  const returnDecode = await decodePassword(
    login.password,
    foundUser?.dataValues.password as string,
  );
  // console.log(returnDecode);
  
  if (foundUser && returnDecode) {
    const { id, username } = foundUser.dataValues;
    
    const token = jwt.sign({ id, username });
    
    return { status: 'SUCCESSFUL', data: { token } };
  }
  return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
}

export default {
  verifyLogin,
};