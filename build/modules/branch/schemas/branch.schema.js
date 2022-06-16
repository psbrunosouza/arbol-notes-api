"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.branchSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const branchSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    description: joi_1.default.string().allow(null),
    category: joi_1.default.object().allow(null),
    user: joi_1.default.object().required(),
    status: joi_1.default.object().allow(null),
    parent: joi_1.default.object().allow(null),
});
exports.branchSchema = branchSchema;
branchSchema.options({
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
});
