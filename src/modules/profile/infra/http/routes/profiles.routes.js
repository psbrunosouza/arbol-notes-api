"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilesRoutes = void 0;
const express_1 = __importDefault(require("express"));
const celebrate_1 = require("celebrate");
const ProfileController_1 = __importDefault(require("@modules/profile/infra/http/controllers/ProfileController"));
const profile_schema_1 = require("@modules/profile/schemas/profile.schema");
const ensure_authenticated_middleware_1 = require("@shared/middlewares/ensure-authenticated.middleware");
const ProfilesRoutes = (0, express_1.default)();
exports.ProfilesRoutes = ProfilesRoutes;
ProfilesRoutes.post('/', ensure_authenticated_middleware_1.ensureAuthenticatedMiddleware, ProfileController_1.default.create, [(0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: profile_schema_1.profileSchema })]);
ProfilesRoutes.put('/:id', ensure_authenticated_middleware_1.ensureAuthenticatedMiddleware, ProfileController_1.default.update, [(0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: profile_schema_1.profileSchema })]);
ProfilesRoutes.get('/', ensure_authenticated_middleware_1.ensureAuthenticatedMiddleware, ProfileController_1.default.list);
ProfilesRoutes.get('/:id', ensure_authenticated_middleware_1.ensureAuthenticatedMiddleware, ProfileController_1.default.show);
ProfilesRoutes.delete('/:id', ensure_authenticated_middleware_1.ensureAuthenticatedMiddleware, ProfileController_1.default.delete);
