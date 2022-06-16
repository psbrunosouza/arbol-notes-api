import { Status } from '@modules/status/infra/prisma/entities/Status';

export interface IStatusRepository {
  create(data: Status): Promise<Status>;
  list(): Promise<Status[]>;
  find(id: string): Promise<Status | null>;
  delete(id: string): Promise<void>;
  update(id: string, data: Status): Promise<Status>;
}
