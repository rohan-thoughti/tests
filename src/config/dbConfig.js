module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "user_post",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 100000,
  },
};
