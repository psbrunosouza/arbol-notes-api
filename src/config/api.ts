export default (): {
  PORT: number;
  BASE_URL: string;
} => {
  return {
    PORT: Number(process.env.PORT) || 3333,
    BASE_URL: process.env.API_BASE_URL || 'v1/arbol',
  };
};
