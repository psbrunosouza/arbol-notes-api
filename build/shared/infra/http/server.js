"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const api_1 = __importDefault(require("../../../config/api"));
const apiConfigurations = (0, api_1.default)();
// eslint-disable-next-line no-console
app_1.default.listen(apiConfigurations.PORT, () => console.log('[API] Server started'));
