"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaCategoryRepository = void 0;
const prisma_1 = require("../../../../../shared/infra/prisma");
const Category_1 = require("../entities/Category");
const tsyringe_1 = require("tsyringe");
let PrismaCategoryRepository = class PrismaCategoryRepository {
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
};
PrismaCategoryRepository = __decorate([
    (0, tsyringe_1.injectable)()
], PrismaCategoryRepository);
exports.PrismaCategoryRepository = PrismaCategoryRepository;
