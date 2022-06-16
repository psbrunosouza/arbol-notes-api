import { Default } from '@shared/infra/prisma/entities/Default';
import { IProfileDTO } from '@modules/profile/dtos/IProfileDTO';
import { v4 as uuidv4 } from 'uuid';

export class Profile extends Default implements IProfileDTO {
  description: string | null;
  name: string;

  constructor() {
    super();
    this.id = uuidv4();
  }
}
