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
exports.UserRepository = void 0;
const typeorm_1 = require("typeorm");
const tsyringe_1 = require("tsyringe");
const User_1 = require("../entities/User");
let UserRepository = class UserRepository {
    constructor() {
        this.repository = (0, typeorm_1.getRepository)(User_1.User);
    }
    create(data) {
        return this.repository.save(data);
    }
    async delete(id) {
        await this.repository.delete(id);
    }
    find(id) {
        return this.repository.findOne(id);
    }
    list() {
        return this.repository.find();
    }
    async update(id, data) {
        await this.repository.update(id, data);
    }
    findUserByEmail(email) {
        return this.repository.findOne({
            select: ['id', 'email', 'name', 'password'],
            where: { email },
        });
    }
};
UserRepository = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [])
], UserRepository);
exports.UserRepository = UserRepository;