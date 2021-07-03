import { UserRepository } from "../repositories/user.repository";
import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserModel } from "../models/user.model";

export class UserController {
  async index(request: Request, response: Response) {
    const userRepository: UserRepository = getCustomRepository(UserRepository);
    const [users, count] = await userRepository.findAndCount({ withDeleted: false });

    return response.status(200).json({
      response: {
        data: { users, count },
        errors: [],
        status: 200,
        success: true,
      },
    });
  }

  async store(request: Request, response: Response) {
    const { name, email, password } = request.body;
    const userRepository: UserRepository = getCustomRepository(UserRepository);
    const hasUser = await userRepository.findOne({ email: email });

    if (hasUser) {
      return response.status(422).json({
        response: {
          data: {},
          errors: ["user already exists"],
          status: 422,
          success: false,
        },
      });
    }

    const user = {
      name,
      email,
      password,
    } as UserModel;

    await userRepository.save(user);

    return response.status(200).json({
      response: {
        data: {},
        errors: [],
        status: 200,
        success: true,
      },
    });
  }

  async edit(request: Request, response: Response) {}

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const userRepository: UserRepository = getCustomRepository(UserRepository);

    console.log(id);

    const hasUser = await userRepository.findOneOrFail({id: id});

    if (!hasUser) {
      return response.status(422).json({
        response: {
          data: {},
          errors: ["is not possible delete user"],
          status: 422,
          success: false,
        },
      });
    }

    hasUser.deletedAt = new Date;
    console.log(hasUser);
    await userRepository.softDelete(id);

    return response.status(200).json({
      response: {
        data: {},
        errors: [],
        status: 200,
        success: true,
      },
    });
  }
}
