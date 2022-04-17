import { IStatusDTO } from '@modules/status/dtos/IStatusDTO';

export interface IStatusRepository {
  create(data: IStatusDTO): Promise<IStatusDTO>;
  list(): Promise<IStatusDTO[]>;
  find(id: number): Promise<IStatusDTO | undefined>;
  delete(id: number): Promise<void>;
  update(id: number, data: IStatusDTO): Promise<void>;
}
