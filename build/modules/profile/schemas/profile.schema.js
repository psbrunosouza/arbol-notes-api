"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const profileSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    description: joi_1.default.string().allow(null),
});
exports.profileSchema = profileSchema;
profileSchema.options({
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
});
