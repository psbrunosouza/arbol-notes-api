import { IProfileDTO } from '@modules/profile/dtos/IProfileDTO';

export interface IProfileRepository {
  create(data: IProfileDTO): Promise<IProfileDTO>;
  list(): Promise<IProfileDTO[]>;
  find(id: string): Promise<IProfileDTO | null>;
  delete(id: string): Promise<void>;
  update(id: string, data: IProfileDTO): Promise<void>;
}
