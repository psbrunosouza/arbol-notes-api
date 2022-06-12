"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const userSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    description: joi_1.default.string().optional().allow(null),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required(),
    profile: joi_1.default.object().optional().allow(null),
    image: joi_1.default.object().optional().allow(null),
});
exports.userSchema = userSchema;
userSchema.options({
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
});
