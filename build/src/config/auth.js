"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    return {
        SECRET: process.env.JWT_SECRET || '',
        EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1d',
    };
};
