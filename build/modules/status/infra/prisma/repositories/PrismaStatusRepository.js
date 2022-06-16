"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaStatusRepository = void 0;
const prisma_1 = require("../../../../../shared/infra/prisma");
const Status_1 = require("../entities/Status");
class PrismaStatusRepository {
    constructor() {
        this.status = prisma_1.prisma.status;
    }
    create(data) {
        const statusWithData = Object.assign(new Status_1.Status(), data);
        return this.status.create({
            data: statusWithData,
        });
    }
    async delete(id) {
        await this.status.delete({
            where: { id },
        });
    }
    find(id) {
        return this.status.findFirst({
            where: { id },
        });
    }
    list() {
        return this.status.findMany();
    }
    async update(id, data) {
        const statusWithData = Object.assign(new Status_1.Status(), data);
        return this.status.update({
            data: Object.assign(Object.assign({}, statusWithData), { id }),
            where: { id },
        });
    }
}
exports.PrismaStatusRepository = PrismaStatusRepository;
