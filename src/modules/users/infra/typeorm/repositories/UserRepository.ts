import { getRepository, Repository } from 'typeorm';
import { injectable } from 'tsyringe';
import { User } from '@modules/users/infra/typeorm/entities/User';
import { IUserRepository } from '@modules/users/repositories/IUserRepository';
import { IUserDTO } from '@modules/users/dtos/IUserDTO';

@injectable()
export class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  create(data: IUserDTO): Promise<IUserDTO> {
    return this.repository.save(data);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  find(id: number): Promise<IUserDTO | undefined> {
    return this.repository.findOne(id);
  }

  list(): Promise<IUserDTO[]> {
    return this.repository.find();
  }

  async update(id: number, data: IUserDTO): Promise<void> {
    await this.repository.update(id, data);
  }

  findUserByEmail(email: string): Promise<IUserDTO | undefined> {
    return this.repository.findOne({
      select: ['id', 'email', 'name', 'password'],
      where: { email },
    });
  }
}
