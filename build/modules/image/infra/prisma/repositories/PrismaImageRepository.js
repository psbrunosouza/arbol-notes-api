"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaImageRepository = void 0;
const prisma_1 = require("../../../../../shared/infra/prisma");
const Image_1 = require("../entities/Image");
const tsyringe_1 = require("tsyringe");
let PrismaImageRepository = class PrismaImageRepository {
    constructor() {
        this.image = prisma_1.prisma.image;
    }
    create(data) {
        const imageWithData = Object.assign(new Image_1.Image(), data);
        return this.image.create({
            data: imageWithData,
        });
    }
    async delete(id) {
        await this.image.delete({
            where: { id },
        });
    }
    find(id) {
        return this.image.findFirst({
            where: {
                id,
            },
        });
    }
    list() {
        return this.image.findMany();
    }
    update(id, data) {
        const imageWithData = Object.assign(new Image_1.Image(), data);
        return this.image.update({
            where: {
                id,
            },
            data: Object.assign(Object.assign({}, imageWithData), { id }),
        });
    }
};
PrismaImageRepository = __decorate([
    (0, tsyringe_1.injectable)()
], PrismaImageRepository);
exports.PrismaImageRepository = PrismaImageRepository;
