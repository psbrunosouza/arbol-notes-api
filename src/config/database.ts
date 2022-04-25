export default (): {
  TYPE: string;
  HOST: string;
  USERNAME: string;
  PASSWORD: string;
  NAME: string;
  PORT: number;
} => {
  return {
    TYPE: process.env.DATABASE_TYPE || 'postgres',
    HOST: process.env.DATABASE_HOST || 'localhost',
    USERNAME: process.env.DATABASE_USERNAME || 'postgres',
    PASSWORD: process.env.DATABASE_PASSWORD || 'postgres',
    NAME: process.env.DATABASE_NAME || '',
    PORT: Number(process.env.DATABASE_PORT) || 5432,
  };
};
