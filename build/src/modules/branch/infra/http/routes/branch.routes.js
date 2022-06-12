"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchRoutes = void 0;
const express_1 = __importDefault(require("express"));
const celebrate_1 = require("celebrate");
const BranchController_1 = __importDefault(require("../controllers/BranchController"));
const branch_schema_1 = require("../../../schemas/branch.schema");
const ensure_authenticated_middleware_1 = require("../../../../../shared/middlewares/ensure-authenticated.middleware");
const BranchRoutes = (0, express_1.default)();
exports.BranchRoutes = BranchRoutes;
BranchRoutes.post('/', ensure_authenticated_middleware_1.ensureAuthenticatedMiddleware, BranchController_1.default.create, [
    (0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: branch_schema_1.branchSchema }),
]);
BranchRoutes.put('/:id', ensure_authenticated_middleware_1.ensureAuthenticatedMiddleware, BranchController_1.default.update, [(0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: branch_schema_1.branchSchema })]);
BranchRoutes.get('/roots', ensure_authenticated_middleware_1.ensureAuthenticatedMiddleware, BranchController_1.default.listBranchesWithoutChildren);
BranchRoutes.get('/:id', ensure_authenticated_middleware_1.ensureAuthenticatedMiddleware, BranchController_1.default.show);
BranchRoutes.delete('/:id', ensure_authenticated_middleware_1.ensureAuthenticatedMiddleware, BranchController_1.default.delete);
