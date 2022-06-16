import { IDefaultDTO } from '@shared/dtos/IDefaultDTO';

export interface IImageDTO extends IDefaultDTO {
  link: string;
  description: string | null;
}
