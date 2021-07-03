import "reflect-metadata";
import express from "express";
import cors from "cors";
import './database';
import Routes from './routes/index.routes';
/** Start server using express */
const app = express();
/** manage requests from frontend */
app.use(cors());
/** allow json return in the server */
app.use(express.json());

app.use(Routes);

/** server listen on port 3333 */
app.listen(3333, () => console.log('[API] Server started'));

