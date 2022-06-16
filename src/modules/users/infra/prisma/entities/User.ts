import { IUserDTO } from '@modules/users/dtos/IUserDTO';
import { IProfileDTO } from '@modules/profile/dtos/IProfileDTO';
import { IImageDTO } from '@modules/image/dtos/IImageDTO';
import { Default } from '@shared/infra/prisma/entities/Default';
import { v4 as uuidv4 } from 'uuid';

export class User extends Default implements IUserDTO {
  description: string | null;
  email: string;
  name: string;
  password: string;
  imageId: IImageDTO['id'] | null;
  profileId: IProfileDTO['id'] | null;

  constructor() {
    super();
    this.id = uuidv4();
  }
}
