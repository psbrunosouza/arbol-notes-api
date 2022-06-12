"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
const errorHandler_1 = __importDefault(require("../../handlers/errorHandler"));
const celebrate_1 = require("celebrate");
const api_1 = __importDefault(require("../../../config/api"));
const typeorm_1 = __importDefault(require("../typeorm"));
const app = (0, express_1.default)();
(0, typeorm_1.default)()
    // eslint-disable-next-line no-console
    .then(() => console.info('[DB]: Database connected'))
    // eslint-disable-next-line no-console
    .catch(err => console.error(`[DB]: Database connection error: ${err}`));
const apiConfiguration = (0, api_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(`/${apiConfiguration.BASE_URL}`, routes_1.routes);
app.use((0, celebrate_1.errors)());
app.use(errorHandler_1.default);
exports.default = app;
