"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTableImage1639840249028 = void 0;
const typeorm_1 = require("typeorm");
class createTableImage1639840249028 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'images',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isNullable: false,
                    isGenerated: true,
                },
                {
                    name: 'link',
                    type: 'varchar',
                },
                {
                    name: 'description',
                    type: 'text',
                    isNullable: true,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                    isNullable: true,
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    isNullable: true,
                },
                {
                    name: 'deleted_at',
                    type: 'timestamp',
                    isNullable: true,
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('images');
    }
}
exports.createTableImage1639840249028 = createTableImage1639840249028;
