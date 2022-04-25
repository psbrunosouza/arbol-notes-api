import { Connection, createConnection } from 'typeorm';
import dotenv from 'dotenv';
import database from '@config/database';
import { resolve } from 'node:path';

dotenv.config();

export default async (name = 'default'): Promise<Connection> => {
  const databaseConfig = database();

  return createConnection({
    name,
    type: databaseConfig.TYPE,
    host: databaseConfig.HOST,
    port: databaseConfig.PORT,
    username: databaseConfig.USERNAME,
    password: databaseConfig.PASSWORD,
    database: databaseConfig.NAME,
    extra: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    entities: [
      resolve(__dirname, 'entities/*.{ts,js}'),
      resolve(
        __dirname,
        '..',
        '..',
        '..',
        'modules/**/infra/typeorm/entities/**/*.{ts,js}',
      ),
    ],
    migrations: [resolve(__dirname, 'migrations/*.{ts,js}')],
    cli: {
      migrationsDir: resolve(__dirname, 'migrations/*.{ts,js}'),
    },
    synchronize: false,
  } as any);
};
