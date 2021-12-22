import app from './app';
import { ApiConfigurations } from '@config/api';

const apiConfigurations = new ApiConfigurations();
// eslint-disable-next-line no-console
app.listen(apiConfigurations.port, () => console.log('[API] Server started'));
