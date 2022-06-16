"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const imageSchema = joi_1.default.object({
    link: joi_1.default.string().required(),
    description: joi_1.default.string().allow(null),
});
exports.imageSchema = imageSchema;
imageSchema.options({
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
});
