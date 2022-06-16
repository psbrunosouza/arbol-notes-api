"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
const Default_1 = require("@shared/infra/prisma/entities/Default");
const uuid_1 = require("uuid");
class Status extends Default_1.Default {
    constructor() {
        super();
        this.id = (0, uuid_1.v4)();
    }
}
exports.Status = Status;
