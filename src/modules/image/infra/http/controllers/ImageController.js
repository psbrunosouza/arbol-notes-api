"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const ListImageService_1 = __importDefault(require("@modules/image/services/ListImageService"));
const CreateImageService_1 = __importDefault(require("@modules/image/services/CreateImageService"));
const ShowImageService_1 = __importDefault(require("@modules/image/services/ShowImageService"));
const UpdateImageService_1 = __importDefault(require("@modules/image/services/UpdateImageService"));
const DeleteImageService_1 = __importDefault(require("@modules/image/services/DeleteImageService"));
class ImageController {
    async list(request, response) {
        const listImageService = tsyringe_1.container.resolve(ListImageService_1.default);
        return response.json(await listImageService.execute());
    }
    async create(request, response) {
        const data = request.body;
        const createImageService = tsyringe_1.container.resolve(CreateImageService_1.default);
        return response.json(await createImageService.execute(data));
    }
    async show(request, response) {
        const { id } = request.params;
        const showImageService = tsyringe_1.container.resolve(ShowImageService_1.default);
        return response.json(await showImageService.execute(id));
    }
    async update(request, response) {
        const { id } = request.params;
        const data = request.body;
        const updateImageService = tsyringe_1.container.resolve(UpdateImageService_1.default);
        return response.json(await updateImageService.execute(id, data));
    }
    async delete(request, response) {
        const { id } = request.params;
        const deleteImageService = tsyringe_1.container.resolve(DeleteImageService_1.default);
        return response.json(await deleteImageService.execute(id));
    }
}
exports.default = new ImageController();
