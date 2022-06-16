"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const ListUserService_1 = __importDefault(require("../../../services/ListUserService"));
const CreateUserService_1 = __importDefault(require("../../../services/CreateUserService"));
const ShowUserService_1 = __importDefault(require("../../../services/ShowUserService"));
const UpdateUserService_1 = __importDefault(require("../../../services/UpdateUserService"));
const DeleteUserService_1 = __importDefault(require("../../../services/DeleteUserService"));
const AuthUserService_1 = require("../../../services/AuthUserService");
class UserController {
    async auth(request, response) {
        const data = request.body;
        const authUserService = tsyringe_1.container.resolve(AuthUserService_1.AuthUserService);
        return response.json(await authUserService.execute(data));
    }
    async list(request, response) {
        const listUserService = tsyringe_1.container.resolve(ListUserService_1.default);
        return response.json(await listUserService.execute());
    }
    async create(request, response) {
        const data = request.body;
        const createUserService = tsyringe_1.container.resolve(CreateUserService_1.default);
        return response.json(await createUserService.execute(data));
    }
    async show(request, response) {
        const { id } = request.params;
        const showUserService = tsyringe_1.container.resolve(ShowUserService_1.default);
        return response.json(await showUserService.execute(id));
    }
    async update(request, response) {
        const { id } = request.params;
        const data = request.body;
        const updateProfileService = tsyringe_1.container.resolve(UpdateUserService_1.default);
        return response.json(await updateProfileService.execute(id, data));
    }
    async delete(request, response) {
        const { id } = request.params;
        const deleteUserService = tsyringe_1.container.resolve(DeleteUserService_1.default);
        return response.json(await deleteUserService.execute(id));
    }
}
exports.default = new UserController();
