import { inject, injectable } from 'tsyringe';
import { UserRepository } from '@modules/users/infra/typeorm/repositories/UserRepository';
import { IUserDTO } from '@modules/users/dtos/IUserDTO';

@injectable()
export default class ListUserService {
  constructor(
    @inject(UserRepository)
    private userRepository: UserRepository,
  ) {}

  public async execute(): Promise<IUserDTO[]> {
    return this.userRepository.list();
  }
}
