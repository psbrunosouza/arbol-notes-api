"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConfigurations = void 0;
class DatabaseConfigurations {
    constructor() {
        var _a, _b, _c, _d, _e;
        this.host = (_a = process.env.DB_HOST) !== null && _a !== void 0 ? _a : 'localhost';
        this.database = (_b = process.env.DB_NAME) !== null && _b !== void 0 ? _b : '';
        this.port = (_c = process.env.DB_PORT) !== null && _c !== void 0 ? _c : 5432;
        this.username = (_d = process.env.DB_USER) !== null && _d !== void 0 ? _d : '';
        this.password = (_e = process.env.DB_PASSWORD) !== null && _e !== void 0 ? _e : '';
    }
}
exports.DatabaseConfigurations = DatabaseConfigurations;
