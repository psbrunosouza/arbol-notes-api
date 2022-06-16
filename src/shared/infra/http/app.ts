import 'reflect-metadata';
import 'express-async-errors';
import dotenv from 'dotenv';
import express from 'express';
import Routes from './routes';
import cors from 'cors';
import errorsHandler from '@shared/handlers/errorHandler';
import { errors as validationErrorsHandler } from 'celebrate';
import { PrismaBranchRepository } from '@modules/branch/infra/prisma/repositories/PrismaBranchRepository';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(Routes);

app.use(validationErrorsHandler());

app.use(errorsHandler);

new PrismaBranchRepository();

export default app;
