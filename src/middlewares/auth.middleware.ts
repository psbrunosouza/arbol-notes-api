import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

interface TokenPayload{
  id: string,
  iat: number,
  exp: number,
}

export const authMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
) => {

  const {authorization} = request.headers;
  
  if(!authorization){
    return response.status(401).json({
      response: {
        data: {},
        errors: ["access denied"],
        status: 401,
        success: false,
      },
    });
  }

  const token = authorization.replace('Bearer', '').trim();

  try{
    const data = jwt.verify(token, 'd41d8cd98f00b204e9800998ecf8427e');
    const {id} = data as TokenPayload;
    request.userId = id;
    return next();
  }catch{
    return response.status(401).json({
      response: {
        data: {},
        errors: ["access denied"],
        status: 401,
        success: false,
      },
    });
  }
};
