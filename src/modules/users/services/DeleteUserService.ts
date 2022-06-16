import { inject, injectable } from 'tsyringe';
import { PrismaUserRepository } from '@modules/users/infra/prisma/repositories/PrismaUserRepository';
import { IUserRepository } from '@modules/users/repositories/IUserRepository';

@injectable()
export default class DeleteUserService {
  constructor(
    @inject(PrismaUserRepository)
    private userRepository: IUserRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    return this.userRepository.delete(id);
  }
}
