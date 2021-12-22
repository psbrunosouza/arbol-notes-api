import { DatabaseConfigurations } from './src/config/database';

const databaseConfigurations = new DatabaseConfigurations();

module.exports = {
  type: 'postgres',
  host: databaseConfigurations.host,
  port: databaseConfigurations.port,
  username: databaseConfigurations.username,
  password: databaseConfigurations.password,
  database: databaseConfigurations.database,
  entities: ['./src/modules/**/typeorm/entities/*.ts'],
  migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
  cli: {
    migrationsDir: './src/shared/infra/typeorm/migrations',
  },
};
