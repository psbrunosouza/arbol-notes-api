"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const celebrate_1 = require("celebrate");
const ensure_authenticated_middleware_1 = require("@shared/middlewares/ensure-authenticated.middleware");
const UserController_1 = __importDefault(require("@modules/users/infra/http/controllers/UserController"));
const user_schema_1 = require("@modules/users/schemas/user.schema");
const UserRoutes = (0, express_1.default)();
exports.UserRoutes = UserRoutes;
UserRoutes.post('/auth', UserController_1.default.auth);
UserRoutes.post('/', UserController_1.default.create, [
    (0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: user_schema_1.userSchema }),
]);
UserRoutes.put('/:id', ensure_authenticated_middleware_1.ensureAuthenticatedMiddleware, UserController_1.default.update, [
    (0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: user_schema_1.userSchema }),
]);
UserRoutes.get('/', ensure_authenticated_middleware_1.ensureAuthenticatedMiddleware, UserController_1.default.list);
UserRoutes.get('/:id', ensure_authenticated_middleware_1.ensureAuthenticatedMiddleware, UserController_1.default.show);
UserRoutes.delete('/:id', ensure_authenticated_middleware_1.ensureAuthenticatedMiddleware, UserController_1.default.delete);
