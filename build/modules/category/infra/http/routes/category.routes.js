"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const celebrate_1 = require("celebrate");
const CategoryController_1 = __importDefault(require("../controllers/CategoryController"));
const category_schema_1 = require("../../../schemas/category.schema");
const ensure_authenticated_middleware_1 = require("../../../../../shared/middlewares/ensure-authenticated.middleware");
const CategoryRoutes = (0, express_1.default)();
exports.CategoryRoutes = CategoryRoutes;
CategoryRoutes.post('/', ensure_authenticated_middleware_1.ensureAuthenticatedMiddleware, CategoryController_1.default.create, [(0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: category_schema_1.categorySchema })]);
CategoryRoutes.put('/:id', ensure_authenticated_middleware_1.ensureAuthenticatedMiddleware, CategoryController_1.default.update, [(0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: category_schema_1.categorySchema })]);
CategoryRoutes.get('/', ensure_authenticated_middleware_1.ensureAuthenticatedMiddleware, CategoryController_1.default.list);
CategoryRoutes.get('/:id', ensure_authenticated_middleware_1.ensureAuthenticatedMiddleware, CategoryController_1.default.show);
CategoryRoutes.delete('/:id', ensure_authenticated_middleware_1.ensureAuthenticatedMiddleware, CategoryController_1.default.delete);
