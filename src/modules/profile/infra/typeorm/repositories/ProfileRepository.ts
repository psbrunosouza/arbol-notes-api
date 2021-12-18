import { getRepository, Repository } from 'typeorm';
import { injectable } from 'tsyringe';
import { IImageDTO } from '@modules/image/dtos/IImageDTO';
import { IProfileRepository } from '@modules/profile/repositories/IProfileRepository';
import { Profile } from '@modules/profile/infra/typeorm/entities/Profile';
import { IProfileDTO } from '@modules/profile/dtos/IProfileDTO';

@injectable()
export class ProfileRepository implements IProfileRepository {
  private repository: Repository<Profile>;

  constructor() {
    this.repository = getRepository(Profile);
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
