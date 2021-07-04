
import {Request, Response} from 'express';
import { getCustomRepository } from 'typeorm';
import {UserRepository} from '../repositories/user.repository';
import {compare} from 'bcrypt';
import jwt from 'jsonwebtoken';
const authConfig = require('../config/auth');
export class AuthService {
  async authenticate(request: Request, response: Response){
    const {email, password} = request.body;
    const userRepository = getCustomRepository(UserRepository);
    
    const user = await userRepository.findOne({where: {email: email}});

    if(!user){
      return response.status(422).json({
        response: {
          data: {},
          errors: ["user is not registered"],
          status: 422,
          success: false,
        },
      });
    }
    
    if(!await compare(password, user.password as string)){
      return response.status(422).json({
        response: {
          data: {},
          errors: ["email or password is incorrect"],
          status: 422,
          success: false,
        },
      });
    }

    const token = jwt.sign({id: user.id}, 
      authConfig.secret, {
      expiresIn: 86400
    })

    user.password = undefined;

    return response.status(200).json({
      response: {
        data: {hasUser: user, token},
        errors: [],
        status: 200,
        success: true,
      },
    });
  }
}