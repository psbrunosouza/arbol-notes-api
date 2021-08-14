import 'reflect-metadata';
import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import Routes from './routes/index.routes';
import AppError from '@shared/errors/AppError';
import '../typeorm';
/** Start server using express */
const app = express();
/** manage requests from frontend */
app.use(cors());
/** allow json return in the server */
app.use(express.json());

app.use(Routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.status).json({
        message: error.message,
        status: error.status,
      });
    } else {
      return response.status(500).json({
        message: 'Internal server error',
        status: 500,
      });
    }
  },
);
/** server listen on port 3333 */
app.listen(3333, () => console.log('[API] Server started'));
