"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthConfigurations = void 0;
class AuthConfigurations {
    constructor() {
        this.secret = process.env.JWT_SECRET;
        this.expiresIn = process.env.JWT_EXPIRES_IN;
    }
}
exports.AuthConfigurations = AuthConfigurations;
