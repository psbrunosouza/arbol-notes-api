import { IDefaultDTO } from '@shared/dtos/IDefaultDTO';

export interface IProfileDTO extends IDefaultDTO {
  name: string;
  description?: string;
}
