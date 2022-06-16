"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaStatusRepository = void 0;
const prisma_1 = require("../../../../../shared/infra/prisma");
const Status_1 = require("../entities/Status");
const tsyringe_1 = require("tsyringe");
let PrismaStatusRepository = class PrismaStatusRepository {
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
};
PrismaStatusRepository = __decorate([
    (0, tsyringe_1.injectable)()
], PrismaStatusRepository);
exports.PrismaStatusRepository = PrismaStatusRepository;
