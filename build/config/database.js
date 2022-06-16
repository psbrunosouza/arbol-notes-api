"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    return {
        TYPE: process.env.DATABASE_TYPE || 'postgres',
        HOST: process.env.DATABASE_HOST || 'localhost',
        USERNAME: process.env.DATABASE_USERNAME || 'postgres',
        PASSWORD: process.env.DATABASE_PASSWORD || 'postgres',
        NAME: process.env.DATABASE_NAME || '',
        PORT: Number(process.env.DATABASE_PORT) || 5432,
    };
};
