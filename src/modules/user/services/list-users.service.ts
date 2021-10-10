import { getCustomRepository } from 'typeorm';
import { UserModel } from '../typeorm/entities/user.model';
import { UserRepository } from '../typeorm/repositories/user.repository';

export class ListUsers {
  public async execute(): Promise<UserModel[]> {
    const userRepository: UserRepository = getCustomRepository(UserRepository);
    const users = await userRepository.find();
    return users;
  }
}
