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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUserService = void 0;
const tsyringe_1 = require("tsyringe");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("@config/auth");
const AppError_1 = __importDefault(require("@shared/errors/AppError"));
const bcrypt_1 = require("bcrypt");
const PrismaUserRepository_1 = require("@modules/users/infra/prisma/repositories/PrismaUserRepository");
let AuthUserService = class AuthUserService {
    constructor(userRepository, authConfigurations) {
        this.userRepository = userRepository;
        this.authConfigurations = authConfigurations;
    }
    async execute({ email, password, }) {
        const user = await this.userRepository.findUserByEmail(email);
        if (!user)
            throw new AppError_1.default('Invalid email or password, check your credentials', 401);
        if (!(await (0, bcrypt_1.compare)(password, user.password)))
            throw new AppError_1.default('Invalid email or password, check your credentials', 401);
        const payload = {
            userId: user.id,
            name: user.name,
        };
        const token = jsonwebtoken_1.default.sign(payload, String(this.authConfigurations.secret), {
            expiresIn: this.authConfigurations.expiresIn,
        });
        return { token };
    }
};
AuthUserService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(PrismaUserRepository_1.PrismaUserRepository)),
    __param(1, (0, tsyringe_1.inject)(auth_1.AuthConfigurations)),
    __metadata("design:paramtypes", [Object, auth_1.AuthConfigurations])
], AuthUserService);
exports.AuthUserService = AuthUserService;
