import AppError from '@shared/errors/AppError';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import auth from '@config/auth';

interface TokenPayload {
  userId: number;
  name: string;
  iat: number;
  exp: number;
}

export const ensureAuthenticatedMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const authConfigurations = auth();

  const { authorization } = request.headers;

  if (!authorization) {
    throw new AppError('Unauthorized access', 401);
  }

  const token = authorization.replace('Bearer', '').trim();

  try {
    const data = jwt.verify(token, String(authConfigurations.SECRET));
    const { userId } = data as TokenPayload;
    request.userId = userId;
    return next();
  } catch {
    throw new AppError('Unauthorized access', 401);
  }
};
