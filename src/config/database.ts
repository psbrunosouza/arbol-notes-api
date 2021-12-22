export class DatabaseConfigurations {
  database;
  host;
  port;
  username;
  password;

  constructor() {
    this.host = process.env.DB_HOST ?? 'localhost';
    this.database = process.env.DB_NAME ?? '';
    this.port = process.env.DB_PORT ?? 5432;
    this.username = process.env.DB_USER ?? '';
    this.password = process.env.DB_PASSWORD ?? '';
  }
}
