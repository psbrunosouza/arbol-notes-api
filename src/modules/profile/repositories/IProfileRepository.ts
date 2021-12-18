import { IProfileDTO } from '@modules/profile/dtos/IProfileDTO';

export interface IProfileRepository {
  create(data: IProfileDTO): Promise<IProfileDTO>;
  list(): Promise<IProfileDTO[]>;
  find(id: number): Promise<IProfileDTO | undefined>;
  delete(id: number): Promise<void>;
  update(id: number, data: IProfileDTO): Promise<void>;
}
