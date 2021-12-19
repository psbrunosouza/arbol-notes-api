import { getRepository, Repository } from 'typeorm';
import { injectable } from 'tsyringe';
import { IProfileDTO } from '@modules/profile/dtos/IProfileDTO';
import { User } from '@modules/users/infra/typeorm/entities/User';
import { IUserRepository } from '@modules/users/repositories/IUserRepository';

@injectable()
export class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  create(data: IProfileDTO): Promise<IProfileDTO> {
    return this.repository.save(data);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  find(id: number): Promise<IProfileDTO | undefined> {
    return this.repository.findOne(id);
  }

  list(): Promise<IProfileDTO[]> {
    return this.repository.find();
  }

  async update(id: number, data: IProfileDTO): Promise<void> {
    await this.repository.update(id, data);
  }
}
