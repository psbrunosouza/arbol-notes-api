import app from './app';
import api from '@config/api';

const apiConfigurations = api();
// eslint-disable-next-line no-console
app.listen(apiConfigurations.PORT, () => console.log('[API] Server started'));
