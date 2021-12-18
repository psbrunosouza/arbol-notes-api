import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableBranches1639842570989 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'branches',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isNullable: false,
            isGenerated: true,
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'text',
            isNullable: true,
          },

          {
            name: 'user_id',
            type: 'integer',
            isNullable: false,
          },

          {
            name: 'status_id',
            type: 'integer',
            isNullable: true,
            default: null,
          },

          {
            name: 'category_id',
            type: 'integer',
            isNullable: true,
            default: null,
          },

          {
            name: 'parent_branch_id',
            type: 'integer',
            isNullable: true,
            default: null,
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
        foreignKeys: [
          {
            name: 'fk_user_id',
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'fk_status_id',
            columnNames: ['status_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'statuses',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'fk_category_id',
            columnNames: ['category_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'categories',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'fk_parent_branch_id',
            columnNames: ['parent_branch_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'branches',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('branches');
  }
}
