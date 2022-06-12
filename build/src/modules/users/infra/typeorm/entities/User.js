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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const DefaultEntity_1 = require("../../../../../shared/infra/typeorm/entities/DefaultEntity");
const Image_1 = require("../../../../image/infra/typeorm/entities/Image");
const Profile_1 = require("../../../../profile/infra/typeorm/entities/Profile");
let User = class User extends DefaultEntity_1.DefaultEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ select: false }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Image_1.Image, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'image_id' }),
    __metadata("design:type", Image_1.Image)
], User.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Profile_1.Profile, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'profile_id' }),
    __metadata("design:type", Profile_1.Profile)
], User.prototype, "profile", void 0);
User = __decorate([
    (0, typeorm_1.Entity)('users')
], User);
exports.User = User;
