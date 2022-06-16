"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaUserRepository = void 0;
const tsyringe_1 = require("tsyringe");
const User_1 = require("@modules/users/infra/prisma/entities/User");
const prisma_1 = require("@shared/infra/prisma");
let PrismaUserRepository = class PrismaUserRepository {
    constructor() {
        this.user = prisma_1.prisma.user;
    }
    async create(data) {
        const userWithData = Object.assign(new User_1.User(), data);
        return this.user.create({
            data: userWithData,
        });
    }
    async delete(id) {
        await this.user.delete({
            where: {
                id,
            },
        });
    }
    find(id) {
        return this.user.findUnique({
            where: {
                id,
            },
        });
    }
    findUserByEmail(email) {
        return this.user.findUnique({
            where: {
                email,
            },
        });
    }
    list() {
        return this.user.findMany({
            include: {
                Branch: true,
            },
        });
    }
    update(id, data) {
        const userWithData = Object.assign(new User_1.User(), data);
        return this.user.update({
            where: {
                id,
            },
            data: Object.assign(Object.assign({}, userWithData), { id }),
        });
    }
};
PrismaUserRepository = __decorate([
    (0, tsyringe_1.injectable)()
], PrismaUserRepository);
exports.PrismaUserRepository = PrismaUserRepository;
