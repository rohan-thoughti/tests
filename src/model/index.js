const dbconfig = require("../config/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
  host: dbconfig.HOST,
  dialect: dbconfig.dialect,
  operatorAliases: false,
  pool: {
    max: dbconfig.pool.max,
    min: dbconfig.pool.min,
    acquire: dbconfig.pool.acquire,
    idle: dbconfig.pool.idle,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log(`Drop and re-sync db.`);
});

module.exports = db;
