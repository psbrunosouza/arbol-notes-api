"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiConfigurations = void 0;
class ApiConfigurations {
    constructor() {
        var _a, _b;
        this.port = (_a = process.env.API_REST_PORT) !== null && _a !== void 0 ? _a : 3333;
        this.baseUrl = (_b = process.env.API_BASE_URL) !== null && _b !== void 0 ? _b : 'v1/arbol';
    }
}
exports.ApiConfigurations = ApiConfigurations;
