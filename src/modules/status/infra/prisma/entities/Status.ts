import { Default } from '@shared/infra/prisma/entities/Default';
import { IStatusDTO } from '@modules/status/dtos/IStatusDTO';
import { v4 as uuidv4 } from 'uuid';

export class Status extends Default implements IStatusDTO {
  description: string | null;
  name: string;

  constructor() {
    super();

    this.id = uuidv4();
  }
}
