"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const ListCategoryService_1 = __importDefault(require("../../../services/ListCategoryService"));
const CreateCategoryService_1 = __importDefault(require("../../../services/CreateCategoryService"));
const ShowCategoryService_1 = __importDefault(require("../../../services/ShowCategoryService"));
const UpdateCategoryService_1 = __importDefault(require("../../../services/UpdateCategoryService"));
const DeleteCategoryService_1 = __importDefault(require("../../../services/DeleteCategoryService"));
class CategoryController {
    async list(request, response) {
        const listCategoryService = tsyringe_1.container.resolve(ListCategoryService_1.default);
        return response.json(await listCategoryService.execute());
    }
    async create(request, response) {
        const data = request.body;
        const createCategoryService = tsyringe_1.container.resolve(CreateCategoryService_1.default);
        return response.json(await createCategoryService.execute(data));
    }
    async show(request, response) {
        const { id } = request.params;
        const showCategoryService = tsyringe_1.container.resolve(ShowCategoryService_1.default);
        return response.json(await showCategoryService.execute(+id));
    }
    async update(request, response) {
        const { id } = request.params;
        const data = request.body;
        const updateCategoryService = tsyringe_1.container.resolve(UpdateCategoryService_1.default);
        return response.json(await updateCategoryService.execute(+id, data));
    }
    async delete(request, response) {
        const { id } = request.params;
        const deleteCategoryService = tsyringe_1.container.resolve(DeleteCategoryService_1.default);
        return response.json(await deleteCategoryService.execute(+id));
    }
}
exports.default = new CategoryController();
