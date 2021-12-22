import { IUserDTO } from '@modules/users/dtos/IUserDTO';

export interface IUserRepository {
  create(data: IUserDTO): Promise<IUserDTO>;
  list(): Promise<IUserDTO[]>;
  find(id: number): Promise<IUserDTO | undefined>;
  findUserByEmail(email: string): Promise<IUserDTO | undefined>;
  delete(id: number): Promise<void>;
  update(id: number, data: IUserDTO): Promise<void>;
}
