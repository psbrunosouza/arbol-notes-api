"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("../../../config/database"));
const node_path_1 = require("node:path");
dotenv_1.default.config();
exports.default = async (name = 'default') => {
    const databaseConfig = (0, database_1.default)();
    return (0, typeorm_1.createConnection)({
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
            (0, node_path_1.resolve)(__dirname, 'entities/*.{ts,js}'),
            (0, node_path_1.resolve)(__dirname, '..', '..', '..', 'modules/**/infra/typeorm/entities/**/*.{ts,js}'),
        ],
        migrations: [(0, node_path_1.resolve)(__dirname, 'migrations/*.{ts,js}')],
        cli: {
            migrationsDir: (0, node_path_1.resolve)(__dirname, 'migrations/*.{ts,js}'),
        },
        synchronize: false,
    });
};
