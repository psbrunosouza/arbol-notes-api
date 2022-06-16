"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("@config/database");
const databaseConfigurations = new database_1.DatabaseConfigurations();
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
    synchronize: true,
};
