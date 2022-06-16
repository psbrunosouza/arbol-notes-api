"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = __importDefault(require("../errors/AppError"));
const errorsHandler = (error, _request, response, _) => {
    if (error instanceof AppError_1.default) {
        return response.status(error.status).json({
            status: error.status,
            message: error.message,
        });
    }
    return response.status(500).json({
        status: 500,
        message: error.message,
    });
};
exports.default = errorsHandler;
