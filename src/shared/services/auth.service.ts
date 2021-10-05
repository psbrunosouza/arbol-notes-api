import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../../modules/user/typeorm/repositories/user.repository';
import { compare } from 'bcrypt';
import AppError from '@shared/errors/AppError';
import jwt from 'jsonwebtoken';
import { secret } from '../../config/auth';
export class AuthService {
  async authenticate(request: Request, response: Response) {
    const { email, password } = request.body;
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne({ where: { email: email } });

    if (!user) {
      throw new AppError('User is not registered', 404);
    }

    if (!(await compare(password, user.password as string))) {
      throw new AppError('Invalid credentials', 401);
    }

    const token = jwt.sign({ id: user.id }, secret, {
      expiresIn: 86400,
    });

    user.password = undefined;

    return response.status(200).json({
      response: {
        data: { hasUser: user, token },
        errors: [],
        status: 200,
        success: true,
      },
    });
  }
}

export default new AuthService();
