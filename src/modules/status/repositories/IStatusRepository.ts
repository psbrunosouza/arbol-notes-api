import { IStatusDTO } from '@modules/status/dtos/IStatusDTO';

export interface IStatusRepository {
  create(data: IStatusDTO): Promise<IStatusDTO | null>;
  list(): Promise<IStatusDTO[]>;
  find(id: string): Promise<IStatusDTO | null>;
  delete(id: string): Promise<void>;
  update(id: string, data: IStatusDTO): Promise<void>;
}
