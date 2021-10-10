import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { UserModel } from '../typeorm/entities/user.model';
import { UserRepository } from '../typeorm/repositories/user.repository';
import { hash } from 'bcrypt';

export class CreateUser {
  public async execute(user: UserModel): Promise<UserModel> {
    const userRepository: UserRepository = getCustomRepository(UserRepository);
    const hasUser = await userRepository.findOne({
      where: { email: user.email },
    });

    if (hasUser) {
      throw new AppError('Email already in use', 409);
    }

    const createdUser = userRepository.create({ ...user });

    const hashedPassword = await hash(createdUser.password, 8);

    await userRepository.save({ ...user, password: hashedPassword });
    return createdUser;
  }
}
