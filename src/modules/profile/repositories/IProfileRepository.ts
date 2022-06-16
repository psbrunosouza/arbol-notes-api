import { Profile } from '@modules/profile/infra/prisma/entities/Profile';

export interface IProfileRepository {
  create(data: Profile): Promise<Profile>;
  list(): Promise<Profile[]>;
  find(id: string): Promise<Profile | null>;
  delete(id: string): Promise<void>;
  update(id: string, data: Profile): Promise<Profile>;
}
