"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Branch = void 0;
const Default_1 = require("../../../../../shared/infra/prisma/entities/Default");
const uuid_1 = require("uuid");
class Branch extends Default_1.Default {
    constructor() {
        super();
        this.id = (0, uuid_1.v4)();
    }
}
exports.Branch = Branch;
