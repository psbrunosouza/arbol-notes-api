import { IDefaultDTO } from '@shared/dtos/IDefaultDTO';

export class Default implements IDefaultDTO {
  id: string;
  createdAt: Date;
  deletedAt: Date | null;
  updatedAt: Date;
}
