"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticatedMiddleware = void 0;
const AppError_1 = __importDefault(require("../errors/AppError"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = __importDefault(require("../../config/auth"));
const ensureAuthenticatedMiddleware = (request, response, next) => {
    const authConfigurations = (0, auth_1.default)();
    const { authorization } = request.headers;
    if (!authorization) {
        throw new AppError_1.default('Unauthorized access', 401);
    }
    const token = authorization.replace('Bearer', '').trim();
    try {
        const data = jsonwebtoken_1.default.verify(token, String(authConfigurations.SECRET));
        const { userId } = data;
        request.userId = userId;
        return next();
    }
    catch {
        throw new AppError_1.default('Unauthorized access', 401);
    }
};
exports.ensureAuthenticatedMiddleware = ensureAuthenticatedMiddleware;
