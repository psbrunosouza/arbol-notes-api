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
var Branch_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Branch = void 0;
const typeorm_1 = require("typeorm");
const DefaultEntity_1 = require("../../../../../shared/infra/typeorm/entities/DefaultEntity");
const Category_1 = require("../../../../category/infra/typeorm/entities/Category");
const Status_1 = require("../../../../status/infra/typeorm/entities/Status");
const User_1 = require("../../../../users/infra/typeorm/entities/User");
let Branch = Branch_1 = class Branch extends DefaultEntity_1.DefaultEntity {
    afterLoad() {
        this.childrenQtd = this.children ? this.children.length : undefined;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Branch.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Branch.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Branch.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Branch_1, branch => branch.children),
    (0, typeorm_1.JoinColumn)({ name: 'parent_branch_id' }),
    __metadata("design:type", Object)
], Branch.prototype, "parent", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Branch_1, branch => branch.parent),
    (0, typeorm_1.JoinColumn)({ name: 'parent_branch_id' }),
    __metadata("design:type", Array)
], Branch.prototype, "children", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Status_1.Status, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'status_id' }),
    __metadata("design:type", Object)
], Branch.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", Object)
], Branch.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Category_1.Category, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'category_id' }),
    __metadata("design:type", Object)
], Branch.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.AfterLoad)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Branch.prototype, "afterLoad", null);
Branch = Branch_1 = __decorate([
    (0, typeorm_1.Entity)('branches')
], Branch);
exports.Branch = Branch;
