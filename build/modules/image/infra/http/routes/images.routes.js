"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagesRoutes = void 0;
const express_1 = __importDefault(require("express"));
const ImageController_1 = __importDefault(require("../controllers/ImageController"));
const image_schema_1 = require("../../../schemas/image.schema");
const celebrate_1 = require("celebrate");
const ensure_authenticated_middleware_1 = require("../../../../../shared/middlewares/ensure-authenticated.middleware");
const ImagesRoutes = (0, express_1.default)();
exports.ImagesRoutes = ImagesRoutes;
ImagesRoutes.post('/', ensure_authenticated_middleware_1.ensureAuthenticatedMiddleware, ImageController_1.default.create, [
    (0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: image_schema_1.imageSchema }),
]);
ImagesRoutes.put('/:id', ensure_authenticated_middleware_1.ensureAuthenticatedMiddleware, ImageController_1.default.update, [(0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: image_schema_1.imageSchema })]);
ImagesRoutes.get('/', ensure_authenticated_middleware_1.ensureAuthenticatedMiddleware, ImageController_1.default.list);
ImagesRoutes.get('/:id', ensure_authenticated_middleware_1.ensureAuthenticatedMiddleware, ImageController_1.default.show);
ImagesRoutes.delete('/:id', ensure_authenticated_middleware_1.ensureAuthenticatedMiddleware, ImageController_1.default.delete);
