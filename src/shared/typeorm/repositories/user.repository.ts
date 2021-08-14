import { EntityRepository, Repository } from 'typeorm';
import { UserModel } from '../entities/user.model';

@EntityRepository(UserModel)
export class UserRepository extends Repository<UserModel> {}
