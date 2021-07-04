import { UserRepository } from "../repositories/user.repository";
import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserModel } from "../models/user.model";
import { hash } from "bcrypt";

export class UserController {
  async index(request: Request, response: Response) {
    const userRepository: UserRepository = getCustomRepository(UserRepository);
    const [users, count] = await userRepository.findAndCount({
      withDeleted: false,
    });

    users.forEach((user, index) => {
      users[index].password = undefined;
    })

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
    const saltRounds: number = 10;

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

    const hashedPassword = await hash(password, saltRounds);

    const user = {
      name,
      email,
      password: hashedPassword,
    } as UserModel;

    await userRepository.save(user);

    user.password = undefined;

    return response.status(201).json({
      response: {
        data: {user},
        errors: [],
        status: 201,
        success: true,
      },
    });
  }

  async edit(request: Request, response: Response) {
    const { id } = request.params;
    const { name } = request.body;
    const userRepository: UserRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne({
      where: { id: id },
    });

    if (!user) {
      return response.status(422).json({
        response: {
          data: {},
          errors: ["is not possible update entity"],
          status: 422,
          success: false,
        },
      });
    }

    await userRepository.save({
      ...user,
      id,
      name,
    });

    user.password = undefined;

    return response.status(200).json({
      response: {
        data: {user},
        errors: [],
        status: 200,
        success: true,
      },
    });
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const userRepository: UserRepository = getCustomRepository(UserRepository);

    const hasUser = await userRepository.findOneOrFail({ id: id });

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

  async restore(request: Request, response: Response) {
    const { id } = request.params;
    const userRepository: UserRepository = getCustomRepository(UserRepository);

    const hasUser = await userRepository.findOne(id);

    if (hasUser) {
      return response.status(422).json({
        response: {
          data: {},
          errors: ["is not possible restore user"],
          status: 422,
          success: false,
        },
      });
    }

    await userRepository.restore(id);

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
