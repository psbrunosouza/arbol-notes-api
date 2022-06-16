"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaCategoryRepository = void 0;
const prisma_1 = require("@shared/infra/prisma");
const Category_1 = require("@modules/category/infra/prisma/entities/Category");
class PrismaCategoryRepository {
    constructor() {
        this.category = prisma_1.prisma.category;
    }
    create(data) {
        const categoryWithData = Object.assign(new Category_1.Category(), data);
        return this.category.create({
            data: categoryWithData,
        });
    }
    async delete(id) {
        await this.category.delete({
            where: { id },
        });
    }
    find(id) {
        return this.category.findFirst({
            where: { id },
        });
    }
    list() {
        return this.category.findMany();
    }
    async update(id, data) {
        const categoryWithData = Object.assign(new Category_1.Category(), data);
        return this.category.update({
            where: { id },
            data: Object.assign(Object.assign({}, categoryWithData), { id }),
        });
    }
}
exports.PrismaCategoryRepository = PrismaCategoryRepository;
