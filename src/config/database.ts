export const database = {
  database: process.env.DB_NAME || '',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  username: process.env.DB_USER || '',
  password: process.env.DB_PASSWORD || '',
};
