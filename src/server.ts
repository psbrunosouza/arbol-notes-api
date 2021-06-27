import express from "express";
import cors from "cors";

/** Start server using express */
const app = express();
/** manage requests from frontend */
app.use(cors());
/** allow json return in the server */
app.use(express.json());

/** server listen on port 3333 */
app.listen(3333, () => console.log('[API] Server started'));
