"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const celebrate_1 = require("celebrate");
const userSchema = celebrate_1.Joi.object({
    name: celebrate_1.Joi.string().required(),
    description: celebrate_1.Joi.string().optional().allow(null),
    email: celebrate_1.Joi.string().email().required(),
    password: celebrate_1.Joi.string().required(),
    profile: celebrate_1.Joi.object().optional().allow(null),
    image: celebrate_1.Joi.object().optional().allow(null),
});
exports.userSchema = userSchema;
userSchema.options({
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
});
