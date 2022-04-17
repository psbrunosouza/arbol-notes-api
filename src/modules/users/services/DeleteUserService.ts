import { inject, injectable } from 'tsyringe';
import { UserRepository } from '@modules/users/infra/typeorm/repositories/UserRepository';

@injectable()
export default class DeleteUserService {
  constructor(
    @inject(UserRepository)
    private userRepository: UserRepository,
  ) {}

  public async execute(id: number): Promise<void> {
    return this.userRepository.delete(id);
  }
}
