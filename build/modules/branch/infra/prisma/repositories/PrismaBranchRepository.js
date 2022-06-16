"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaBranchRepository = void 0;
const Branch_1 = require("../entities/Branch");
const prisma_1 = require("../../../../../shared/infra/prisma");
class PrismaBranchRepository {
    constructor() {
        this.branch = prisma_1.prisma.branch;
    }
    create(data) {
        const BranchWithData = Object.assign(new Branch_1.Branch(), data);
        console.log(BranchWithData);
        return this.branch.create({
            data: BranchWithData,
        });
    }
    async delete(id) {
        await this.branch.delete({
            where: { id },
        });
    }
    find(id) {
        return this.branch.findFirst({
            where: {
                id,
            },
        });
    }
    listRoots(loggedUserId) {
        return this.branch.findMany({
            where: {
                id: loggedUserId,
            },
        });
    }
    update(id, data) {
        const BranchWithData = Object.assign(new Branch_1.Branch(), data);
        return this.branch.update({
            data: Object.assign(Object.assign({}, BranchWithData), { id }),
            where: {
                id,
            },
        });
    }
}
exports.PrismaBranchRepository = PrismaBranchRepository;
