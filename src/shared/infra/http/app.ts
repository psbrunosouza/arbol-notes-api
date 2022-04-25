import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import { routes } from './routes';
import cors from 'cors';
import errorsHandler from '@shared/handlers/errorHandler';
import { errors as validationErrorsHandler } from 'celebrate';
import api from '@config/api';
import createTypeORMConnection from '../typeorm';

const app = express();

createTypeORMConnection()
  // eslint-disable-next-line no-console
  .then(() => console.info('[DB]: Database connected'))
  // eslint-disable-next-line no-console
  .catch(err => console.error(`[DB]: Database connection error: ${err}`));

const apiConfiguration = api();

app.use(cors());

app.use(express.json());

app.use(`/${apiConfiguration.BASE_URL}`, routes);

app.use(validationErrorsHandler());

app.use(errorsHandler);

export default app;
