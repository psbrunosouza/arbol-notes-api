import { Default } from '@shared/infra/prisma/entities/Default';
import { IImageDTO } from '@modules/image/dtos/IImageDTO';
import { v4 as uuidv4 } from 'uuid';

export class Image extends Default implements IImageDTO {
  description: string | null;
  link: string;

  constructor() {
    super();

    this.id = uuidv4();
  }
}
