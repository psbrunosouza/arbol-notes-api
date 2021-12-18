import app from './app';
import { api } from '@config/api';

// eslint-disable-next-line no-console
app.listen(api.port, () => console.log('[API] Server started'));
