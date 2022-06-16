"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppError {
    constructor(message, status = 400) {
        this.message = message;
        this.status = status;
    }
}
exports.default = AppError;
