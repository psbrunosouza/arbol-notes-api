"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categorySchema = void 0;
const joi_1 = __importDefault(require("joi"));
const categorySchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    description: joi_1.default.string().allow(null),
});
exports.categorySchema = categorySchema;
categorySchema.options({
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
});
