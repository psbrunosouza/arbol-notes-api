"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaImageRepository = void 0;
const prisma_1 = require("../../../../../shared/infra/prisma");
const Image_1 = require("../entities/Image");
class PrismaImageRepository {
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
}
exports.PrismaImageRepository = PrismaImageRepository;
