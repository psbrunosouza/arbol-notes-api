import { Response, Request, NextFunction } from 'express';
import AppError from '../errors/AppError';

const errorsHandler = (
  error: Error,
  _request: Request,
  response: Response,
  _: NextFunction,
): Response => {
  if (error instanceof AppError) {
    return response.status(error.status).json({
      status: error.status,
      message: error.message,
    });
  }

  return response.status(500).json({
    status: 500,
    message: error.message,
  });
};

export default errorsHandler;
