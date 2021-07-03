import { UserRepository } from "../repositories/user.repository";
import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserModel } from "../models/user.model";
import { ResponseModel } from "../models/response.model";

export class UserController {


  async index(request: Request, response: Response) {
    const userRepository: UserRepository = getCustomRepository(UserRepository);
    const users = await userRepository.find();

    response.status(200).json({response: {
      data: {users},
      errors: [],
      status: 200,
      success: true
    }});
  }

  async store(request: Request, response: Response) {
    const {name, email, password} = request.body;
    const userRepository: UserRepository = getCustomRepository(UserRepository);
    const hasUser = await userRepository.findOne({email: email});

    if(hasUser){
      response.status(422).json({
        response: {
          data: {},
          errors: ["user already exists"],
          status: 422,
          success: false
        },
      });
    }

    const user = {
      name,
      email,
      password
    } as UserModel;

    await userRepository.save(user);

    response.status(200).json({
      response: {
        data: {},
        errors: [],
        status: 200,
        success: true
      }  
    });
  }

  async edit(request: Request, response: Response) {}

  async delete(request: Request, response: Response) {}
}
