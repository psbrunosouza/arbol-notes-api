import AppError from '@shared/errors/AppError';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
const authConfig = require('../../config/auth.json');

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

export const ensureAuthenticate = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { authorization } = request.headers;

  if (!authorization) {
    throw new AppError('Unauthorized acess', 401);
  }

  const token = authorization.replace('Bearer', '').trim();

  try {
    const data = jwt.verify(token, authConfig.secret);
    const { id } = data as TokenPayload;
    request.userId = id;
    return next();
  } catch {
    throw new AppError('Unauthorized acess', 401);
  }
};
