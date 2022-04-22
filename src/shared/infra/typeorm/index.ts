import { createConnection } from 'typeorm';

createConnection().then(() => {
  // eslint-disable-next-line no-console
  console.log('[DB] db connection started');
});
