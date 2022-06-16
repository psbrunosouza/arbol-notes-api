import { inject, injectable } from 'tsyringe';
import { IUserDTO } from '@modules/users/dtos/IUserDTO';
import { PrismaUserRepository } from '@modules/users/infra/prisma/repositories/PrismaUserRepository';
import { IUserRepository } from '@modules/users/repositories/IUserRepository';

@injectable()
export default class ListUserService {
  constructor(
    @inject(PrismaUserRepository)
    private userRepository: IUserRepository,
  ) {}

  public async execute(): Promise<IUserDTO[]> {
    return this.userRepository.list();
  }
}
