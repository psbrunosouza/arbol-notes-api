"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaProfileRepository = void 0;
const prisma_1 = require("@shared/infra/prisma");
const Profile_1 = require("@modules/profile/infra/prisma/entities/Profile");
class PrismaProfileRepository {
    constructor() {
        this.profile = prisma_1.prisma.profile;
    }
    create(data) {
        const profileWithData = Object.assign(new Profile_1.Profile(), data);
        return this.profile.create({
            data: profileWithData,
        });
    }
    async delete(id) {
        await this.profile.delete({
            where: {
                id,
            },
        });
    }
    find(id) {
        return this.profile.findFirst({
            where: {
                id,
            },
        });
    }
    list() {
        return this.profile.findMany();
    }
    update(id, data) {
        const profileWithData = Object.assign(new Profile_1.Profile(), data);
        return this.profile.update({
            data: Object.assign(Object.assign({}, profileWithData), { id }),
            where: {
                id,
            },
        });
    }
}
exports.PrismaProfileRepository = PrismaProfileRepository;
