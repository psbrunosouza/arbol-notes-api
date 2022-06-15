import { inject, injectable } from 'tsyringe';
import { UserRepository } from '@modules/users/infra/typeorm/repositories/UserRepository';
import { IUserDTO } from '@modules/users/dtos/IUserDTO';
import { PrismaUserRepository } from '@modules/users/infra/prisma/repositories/PrismaUserRepository';
import { IUserRepository } from '@modules/users/repositories/IUserRepository';

@injectable()
export default class ShowUserService {
  constructor(
    @inject(PrismaUserRepository)
    private userRepository: IUserRepository,
  ) {}

  public async execute(id: string): Promise<IUserDTO | null> {
    return this.userRepository.find(id);
  }
}
