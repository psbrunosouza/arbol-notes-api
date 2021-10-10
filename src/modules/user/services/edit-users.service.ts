import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { UserModel } from '../typeorm/entities/user.model';
import { UserRepository } from '../typeorm/repositories/user.repository';

export class EditUsers {
  public async execute(user: UserModel): Promise<UserModel> {
    const userRepository: UserRepository = getCustomRepository(UserRepository);
    const hasUser = await userRepository.findOne({
      where: { email: user.email },
    });

    if (!hasUser) {
      throw new AppError('user not found', 404);
    }

    await userRepository.save(user);
    return user;
  }
}
