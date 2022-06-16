"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchRepository = void 0;
const typeorm_1 = require("typeorm");
const tsyringe_1 = require("tsyringe");
const Branch_1 = require("../entities/Branch");
let BranchRepository = class BranchRepository {
    constructor() {
        this.repository = (0, typeorm_1.getRepository)(Branch_1.Branch);
    }
    create(data) {
        return this.repository.save(data);
    }
    async delete(id) {
        await this.repository.delete(id);
    }
    find(id) {
        return this.repository
            .createQueryBuilder('branches')
            .leftJoinAndSelect('branches.children', 'children')
            .leftJoinAndSelect('branches.status', 'status')
            .leftJoinAndSelect('branches.user', 'user')
            .leftJoinAndSelect('branches.category', 'category')
            .where({ id })
            .getOne();
    }
    async listRoots(loggedUserId) {
        return this.repository
            .createQueryBuilder('branches')
            .leftJoinAndSelect('branches.children', 'children')
            .leftJoinAndSelect('branches.status', 'status')
            .leftJoinAndSelect('branches.user', 'user')
            .leftJoinAndSelect('branches.category', 'category')
            .where('branches.parent_branch_id IS NULL')
            .andWhere('branches.user_id = :loggedUserId', { loggedUserId })
            .getMany();
    }
    async update(id, data) {
        await this.repository.update(id, data);
    }
};
BranchRepository = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [])
], BranchRepository);
exports.BranchRepository = BranchRepository;