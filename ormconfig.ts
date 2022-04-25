module.exports = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  cli: {
    migrationsDir: './src/shared/infra/typeorm/migrations/migrations',
  },
  extra: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};
