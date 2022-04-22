import { DatabaseConfigurations } from '@config/database';
import dotenv from 'dotenv';

const databaseConfigurations = new DatabaseConfigurations();

dotenv.config({
  path: process.env.NODE_ENV === 'dev' ? '.env' : '.env.prod',
});

module.exports = {
  type: 'postgres',
  host: databaseConfigurations.host,
  port: databaseConfigurations.port,
  username: databaseConfigurations.username,
  password: databaseConfigurations.password,
  database: databaseConfigurations.database,
  entities: [process.env.ORM_ENTITIES],
  migrations: [process.env.ORM_MIGRATIONS],
  cli: {
    migrationsDir: process.env.ORM_MIGRATIONS_DIR,
  },
  synchronize: true,
};
