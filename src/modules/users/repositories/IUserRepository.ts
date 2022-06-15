import { IUserDTO } from '@modules/users/dtos/IUserDTO';

export interface IUserRepository {
  create(data: IUserDTO): Promise<IUserDTO>;
  list(): Promise<IUserDTO[]>;
  find(id: string): Promise<IUserDTO | null>;
  findUserByEmail(email: string): Promise<IUserDTO | null>;
  delete(id: string): Promise<void>;
  update(id: string, data: IUserDTO): Promise<IUserDTO>;
}
