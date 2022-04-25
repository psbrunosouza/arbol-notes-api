import { createConnection, getConnectionManager } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

const path = process.env.NODE_ENV === 'production' ? '/build/src' : '/src';
const extension = process.env.NODE_ENV === 'production' ? '.js' : '.ts';

const databaseConfig: any = {
  type: process.env.TYPEORM_CONNECTION,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  extra: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  entities: [`.${path}/modules/**/typeorm/entities/*${extension}`],
  migrations: [`.${path}/shared/infra/typeorm/migrations/*${extension}`],
  cli: {
    migrationsDir: `.${path}/shared/infra/typeorm/migrations`,
  },
  synchronize: process.env.TYPEORM_SYNCHRONIZE,
};

createConnection(databaseConfig).then(() => {
  // eslint-disable-next-line no-console

  console.log('[DB] db connection started');
});
