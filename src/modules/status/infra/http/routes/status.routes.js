"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusRoutes = void 0;
const express_1 = __importDefault(require("express"));
const celebrate_1 = require("celebrate");
const StatusController_1 = __importDefault(require("@modules/status/infra/http/controllers/StatusController"));
const status_schema_1 = require("@modules/status/schemas/status.schema");
const ensure_authenticated_middleware_1 = require("@shared/middlewares/ensure-authenticated.middleware");
const StatusRoutes = (0, express_1.default)();
exports.StatusRoutes = StatusRoutes;
StatusRoutes.post('/', ensure_authenticated_middleware_1.ensureAuthenticatedMiddleware, StatusController_1.default.create, [
    (0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: status_schema_1.statusSchema }),
]);
StatusRoutes.put('/:id', ensure_authenticated_middleware_1.ensureAuthenticatedMiddleware, StatusController_1.default.update, [(0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: status_schema_1.statusSchema })]);
StatusRoutes.get('/', ensure_authenticated_middleware_1.ensureAuthenticatedMiddleware, StatusController_1.default.list);
StatusRoutes.get('/:id', ensure_authenticated_middleware_1.ensureAuthenticatedMiddleware, StatusController_1.default.show);
StatusRoutes.delete('/:id', ensure_authenticated_middleware_1.ensureAuthenticatedMiddleware, StatusController_1.default.delete);
