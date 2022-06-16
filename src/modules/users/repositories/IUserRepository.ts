import { User } from '@modules/users/infra/prisma/entities/User';

export interface IUserRepository {
  create(data: User): Promise<User>;
  list(): Promise<User[]>;
  find(id: string): Promise<User | null>;
  findUserByEmail(email: string): Promise<User | null>;
  delete(id: string): Promise<void>;
  update(id: string, data: User): Promise<User>;
}
