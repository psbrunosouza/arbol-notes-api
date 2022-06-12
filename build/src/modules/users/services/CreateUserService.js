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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const UserRepository_1 = require("../infra/typeorm/repositories/UserRepository");
const bcrypt_1 = require("bcrypt");
let CreateUserService = class CreateUserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(user) {
        user.password = await (0, bcrypt_1.hash)(user.password, 8);
        const createdUser = await this.userRepository.create({ ...user });
        return { ...createdUser, password: undefined };
    }
};
CreateUserService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(UserRepository_1.UserRepository)),
    __metadata("design:paramtypes", [UserRepository_1.UserRepository])
], CreateUserService);
exports.default = CreateUserService;
