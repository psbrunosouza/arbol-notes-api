import { getRepository, Repository } from 'typeorm';
import { injectable } from 'tsyringe';
import { IProfileDTO } from '@modules/profile/dtos/IProfileDTO';
import { IStatusRepository } from '@modules/status/repositories/IStatusRepository';
import { Status } from '@modules/status/infra/typeorm/entities/Status';

@injectable()
export class StatusRepository implements IStatusRepository {
  private repository: Repository<Status>;

  constructor() {
    this.repository = getRepository(Status);
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
