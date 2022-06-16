"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaProfileRepository = void 0;
const prisma_1 = require("../../../../../shared/infra/prisma");
const Profile_1 = require("../entities/Profile");
const tsyringe_1 = require("tsyringe");
let PrismaProfileRepository = class PrismaProfileRepository {
    constructor() {
        this.profile = prisma_1.prisma.profile;
    }
    create(data) {
        const profileWithData = Object.assign(new Profile_1.Profile(), data);
        return this.profile.create({
            data: profileWithData,
        });
    }
    async delete(id) {
        await this.profile.delete({
            where: {
                id,
            },
        });
    }
    find(id) {
        return this.profile.findFirst({
            where: {
                id,
            },
        });
    }
    list() {
        return this.profile.findMany();
    }
    update(id, data) {
        const profileWithData = Object.assign(new Profile_1.Profile(), data);
        return this.profile.update({
            data: Object.assign(Object.assign({}, profileWithData), { id }),
            where: {
                id,
            },
        });
    }
};
PrismaProfileRepository = __decorate([
    (0, tsyringe_1.injectable)()
], PrismaProfileRepository);
exports.PrismaProfileRepository = PrismaProfileRepository;
