import { inject, injectable } from 'tsyringe';
import jwt from 'jsonwebtoken';
import { AuthConfigurations } from '@config/auth';
import AppError from '@shared/errors/AppError';
import { UserRepository } from '@modules/users/infra/typeorm/repositories/UserRepository';
import { IUserRepository } from '@modules/users/repositories/IUserRepository';
import { IPayloadDTO } from '@shared/dtos/IPayloadDTO';
import { compare } from 'bcrypt';

interface IAuthServiceDTO {
  email: string;
  password: string;
}

interface IAuthServiceResponse {
  token: string;
}

@injectable()
export class AuthUserService {
  constructor(
    @inject(UserRepository)
    private userRepository: IUserRepository,
    @inject(AuthConfigurations)
    private authConfigurations: AuthConfigurations,
  ) {}

  async execute({
    email,
    password,
  }: IAuthServiceDTO): Promise<IAuthServiceResponse> {
    const user = await this.userRepository.findUserByEmail(email);

    if (!user)
      throw new AppError(
        'Invalid email or password, check your credentials',
        401,
      );

    if (!(await compare(password, user.password)))
      throw new AppError(
        'Invalid email or password, check your credentials',
        401,
      );

    const payload: IPayloadDTO = {
      userId: user.id,
      name: user.name,
    } as IPayloadDTO;

    const token = jwt.sign(payload, String(this.authConfigurations.secret), {
      expiresIn: this.authConfigurations.expiresIn,
    });

    return { token };
  }
}
