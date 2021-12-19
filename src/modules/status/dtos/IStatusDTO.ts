import { IDefaultDTO } from '@shared/dtos/IDefaultDTO';

export interface IStatusDTO extends IDefaultDTO {
  name: string;
  description?: string;
}
