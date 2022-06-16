import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import { IUserRepository } from '@modules/users/repositories/IUserRepository';
import { IPayloadDTO } from '@shared/dtos/IPayloadDTO';
import { PrismaUserRepository } from '@modules/users/infra/prisma/repositories/PrismaUserRepository';
import { compare } from 'bcrypt';
import auth from '@config/auth';
import jwt from 'jsonwebtoken';

const authConfig = auth();

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
    @inject(PrismaUserRepository)
    private userRepository: IUserRepository,
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
    } as unknown as IPayloadDTO;

    const token = jwt.sign(payload, String(authConfig.SECRET), {
      expiresIn: authConfig.EXPIRES_IN,
    });

    return { token };
  }
}
