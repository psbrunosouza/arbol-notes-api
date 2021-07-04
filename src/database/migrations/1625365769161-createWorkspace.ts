import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createWorkspace1625365769161 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "workspaces",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },

          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },

          {
            name: "image",
            type: "varchar",
            isNullable: true,
          },

          {
            name: "description",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "now()",
            isNullable: true,
          },
          {
            name: "updatedAt",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "deletedAt",
            type: "timestamp",
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('workspaces');
  }
}
