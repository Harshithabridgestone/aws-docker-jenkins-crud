module.exports = {
  HOST: "mysql-db",
  USER: "appuser",
  PASSWORD: "apppassword",
  DB: "appdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
