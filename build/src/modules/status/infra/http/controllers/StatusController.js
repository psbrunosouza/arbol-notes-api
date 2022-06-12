"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const ListStatusService_1 = __importDefault(require("../../../services/ListStatusService"));
const CreateStatusService_1 = __importDefault(require("../../../services/CreateStatusService"));
const ShowStatusService_1 = __importDefault(require("../../../services/ShowStatusService"));
const UpdateStatusService_1 = __importDefault(require("../../../services/UpdateStatusService"));
const DeleteStatusService_1 = __importDefault(require("../../../services/DeleteStatusService"));
class StatusController {
    async list(request, response) {
        const listStatusService = tsyringe_1.container.resolve(ListStatusService_1.default);
        return response.json(await listStatusService.execute());
    }
    async create(request, response) {
        const data = request.body;
        const createStatusService = tsyringe_1.container.resolve(CreateStatusService_1.default);
        return response.json(await createStatusService.execute(data));
    }
    async show(request, response) {
        const { id } = request.params;
        const showStatusService = tsyringe_1.container.resolve(ShowStatusService_1.default);
        return response.json(await showStatusService.execute(+id));
    }
    async update(request, response) {
        const { id } = request.params;
        const data = request.body;
        const updateStatusService = tsyringe_1.container.resolve(UpdateStatusService_1.default);
        return response.json(await updateStatusService.execute(+id, data));
    }
    async delete(request, response) {
        const { id } = request.params;
        const deleteStatusService = tsyringe_1.container.resolve(DeleteStatusService_1.default);
        return response.json(await deleteStatusService.execute(+id));
    }
}
exports.default = new StatusController();
