export class DatabaseConfigurations {
  database;
  host;
  port;
  username;
  password;
  orm_entities;
  orm_migrations;
  orm_migrations_dir;

  constructor() {
    this.host = process.env.DB_HOST ?? 'localhost';
    this.database = process.env.DB_NAME ?? '';
    this.port = process.env.DB_PORT ?? 5432;
    this.username = process.env.DB_USER ?? '';
    this.password = process.env.DB_PASSWORD ?? '';
    this.orm_entities = process.env.ORM_ENTITIES;
    this.orm_migrations = process.env.ORM_MIGRATIONS;
    this.orm_migrations_dir = process.env.ORM_MIGRATIONS_DIR;
  }
}
