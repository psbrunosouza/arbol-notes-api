"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("express-async-errors");
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
const errorHandler_1 = __importDefault(require("../../handlers/errorHandler"));
const celebrate_1 = require("celebrate");
const PrismaBranchRepository_1 = require("../../../modules/branch/infra/prisma/repositories/PrismaBranchRepository");
const api_1 = __importDefault(require("../../../config/api"));
const apiConfig = (0, api_1.default)();
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(`/${apiConfig.BASE_URL}`, routes_1.routes);
app.use((0, celebrate_1.errors)());
app.use(errorHandler_1.default);
new PrismaBranchRepository_1.PrismaBranchRepository();
exports.default = app;
