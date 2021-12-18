import AppError from '@shared/errors/AppError';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { auth } from '@config/auth';

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

export const ensureAuthenticated = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { authorization } = request.headers;

  if (!authorization) {
    throw new AppError('Unauthorized access', 401);
  }

  const token = authorization.replace('Bearer', '').trim();

  try {
    const data = jwt.verify(token, auth.secret);
    const { id } = data as TokenPayload;
    request.userId = id;
    return next();
  } catch {
    throw new AppError('Unauthorized access', 401);
  }
};
