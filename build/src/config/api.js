"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    return {
        PORT: Number(process.env.PORT) || 3333,
        BASE_URL: process.env.API_BASE_URL || 'v1/arbol',
    };
};
