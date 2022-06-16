"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const ListProfileService_1 = __importDefault(require("../../../services/ListProfileService"));
const CreateProfileService_1 = __importDefault(require("../../../services/CreateProfileService"));
const ShowProfileService_1 = __importDefault(require("../../../services/ShowProfileService"));
const UpdateProfileService_1 = __importDefault(require("../../../services/UpdateProfileService"));
const DeleteProfileService_1 = __importDefault(require("../../../services/DeleteProfileService"));
class ProfileController {
    async list(request, response) {
        const listProfileService = tsyringe_1.container.resolve(ListProfileService_1.default);
        return response.json(await listProfileService.execute());
    }
    async create(request, response) {
        const data = request.body;
        const createProfileService = tsyringe_1.container.resolve(CreateProfileService_1.default);
        return response.json(await createProfileService.execute(data));
    }
    async show(request, response) {
        const { id } = request.params;
        const showProfileService = tsyringe_1.container.resolve(ShowProfileService_1.default);
        return response.json(await showProfileService.execute(id));
    }
    async update(request, response) {
        const { id } = request.params;
        const data = request.body;
        const updateProfileService = tsyringe_1.container.resolve(UpdateProfileService_1.default);
        return response.json(await updateProfileService.execute(id, data));
    }
    async delete(request, response) {
        const { id } = request.params;
        const deleteProfileService = tsyringe_1.container.resolve(DeleteProfileService_1.default);
        return response.json(await deleteProfileService.execute(id));
    }
}
exports.default = new ProfileController();
