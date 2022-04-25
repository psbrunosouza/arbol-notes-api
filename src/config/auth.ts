export default (): {
  SECRET: string;
  EXPIRES_IN: string;
} => {
  return {
    SECRET: process.env.JWT_SECRET || '',
    EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1d',
  };
};
