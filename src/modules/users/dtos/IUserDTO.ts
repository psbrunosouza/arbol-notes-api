import { IDefaultDTO } from '@shared/dtos/IDefaultDTO';
import { IImageDTO } from '@modules/image/dtos/IImageDTO';
import { IProfileDTO } from '@modules/profile/dtos/IProfileDTO';

export interface IUserDTO extends IDefaultDTO {
  name: string;
  description: string | null;
  email: string;
  password: string;
  imageId: IImageDTO['id'] | null;
  profileId: IProfileDTO['id'] | null;
}
