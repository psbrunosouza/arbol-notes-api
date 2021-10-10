import { UserRepository } from '../typeorm/repositories/user.repository';
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { CreateUser } from '../services/create-users.service';
import { ListUsers } from '../services/list-users.service';
import { EditUsers } from '../services/edit-users.service';
export class UserController {
  async index(request: Request, response: Response): Promise<Response> {
    const listUsers = new ListUsers();
    const users = await listUsers.execute();
    return response.json(users);
  }

  async store(request: Request, response: Response): Promise<Response> {
    const createUser = new CreateUser();
    const user = await createUser.execute(request.body);
    return response.json(user);
  }

  async edit(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const editUsers = new EditUsers();
    const user = await editUsers.execute({ id: id, ...request.body });
    return response.json(user);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const userRepository: UserRepository = getCustomRepository(UserRepository);

    try {
      const hasUser = await userRepository.findOneOrFail({ id: id });

      if (!hasUser) {
        return response.status(422).json({
          response: {
            data: {},
            errors: ['is not possible delete user'],
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
    } catch (err) {
      return response.status(500).json({
        response: {
          data: {},
          errors: ['internal server error', err.message],
          status: 500,
          success: false,
        },
      });
    }
  }

  async show(request: Request, response: Response) {}
}
