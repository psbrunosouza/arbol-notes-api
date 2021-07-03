import "reflect-metadata";
import express from "express";
import cors from "cors";
import './database';
import {UserController} from './controllers/user.controller';
/** Start server using express */
const app = express();
/** manage requests from frontend */
app.use(cors());
/** allow json return in the server */
app.use(express.json());

/** instance all controllers */
const userController = new UserController();
/** allow to access http routes */
app.get('/list_users', userController.index);
app.post('/create_users', userController.store);
app.delete('/delete_users/:id', userController.delete);

/** server listen on port 3333 */
app.listen(3333, () => console.log('[API] Server started'));

