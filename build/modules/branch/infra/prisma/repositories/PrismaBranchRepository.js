"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaBranchRepository = void 0;
const Branch_1 = require("../entities/Branch");
const prisma_1 = require("../../../../../shared/infra/prisma");
const tsyringe_1 = require("tsyringe");
let PrismaBranchRepository = class PrismaBranchRepository {
    constructor() {
        this.branch = prisma_1.prisma.branch;
    }
    create(data) {
        const BranchWithData = Object.assign(new Branch_1.Branch(), data);
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
};
PrismaBranchRepository = __decorate([
    (0, tsyringe_1.injectable)()
], PrismaBranchRepository);
exports.PrismaBranchRepository = PrismaBranchRepository;
