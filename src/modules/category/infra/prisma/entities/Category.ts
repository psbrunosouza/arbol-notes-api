import { Default } from '@shared/infra/prisma/entities/Default';
import { ICategoryDTO } from '@modules/category/dtos/ICategoryDTO';
import { v4 as uuidv4 } from 'uuid';

export class Category extends Default implements ICategoryDTO {
  description: string | null;
  name: string;

  constructor() {
    super();

    this.id = uuidv4();
  }
}
