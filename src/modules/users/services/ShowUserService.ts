import { inject, injectable } from 'tsyringe';
import { UserRepository } from '@modules/users/infra/typeorm/repositories/UserRepository';
import { IUserDTO } from '@modules/users/dtos/IUserDTO';

@injectable()
export default class ShowUserService {
  constructor(
    @inject(UserRepository)
    private userRepository: UserRepository,
  ) {}

  public async execute(id: number): Promise<IUserDTO | undefined> {
    return this.userRepository.find(id);
  }
}
