module.exports = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASS,
  DB: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT,
  pool: {
    max: parseInt(process.env.DB_MAX),
    min: parseInt(process.env.DB_MIN),
    acquire: process.env.DB_ACQUIRE,
    idle: process.env.DB_IDLE,
  },
};
