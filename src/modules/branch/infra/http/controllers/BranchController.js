"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const CreateBranchService_1 = __importDefault(require("@modules/branch/services/CreateBranchService"));
const ShowBranchService_1 = __importDefault(require("@modules/branch/services/ShowBranchService"));
const UpdateBranchService_1 = __importDefault(require("@modules/branch/services/UpdateBranchService"));
const DeleteBranchService_1 = __importDefault(require("@modules/branch/services/DeleteBranchService"));
const ListRootBranchesService_1 = __importDefault(require("@modules/branch/services/ListRootBranchesService"));
class BranchController {
    async listBranchesWithoutChildren(request, response) {
        const listBranchesWithoutChildrenService = tsyringe_1.container.resolve(ListRootBranchesService_1.default);
        const loggedUserId = request.userId;
        return response.json(await listBranchesWithoutChildrenService.execute(loggedUserId));
    }
    async create(request, response) {
        const data = request.body;
        const id = request.userId;
        const createBranchService = tsyringe_1.container.resolve(CreateBranchService_1.default);
        return response.json(await createBranchService.execute(Object.assign(Object.assign({}, data), { userId: id })));
    }
    async show(request, response) {
        const { id } = request.params;
        const showBranchService = tsyringe_1.container.resolve(ShowBranchService_1.default);
        return response.json(await showBranchService.execute(id));
    }
    async update(request, response) {
        const { id } = request.params;
        const data = request.body;
        const updateBranchService = tsyringe_1.container.resolve(UpdateBranchService_1.default);
        return response.json(await updateBranchService.execute(id, data));
    }
    async delete(request, response) {
        const { id } = request.params;
        const deleteBranchService = tsyringe_1.container.resolve(DeleteBranchService_1.default);
        return response.json(await deleteBranchService.execute(id));
    }
}
exports.default = new BranchController();
