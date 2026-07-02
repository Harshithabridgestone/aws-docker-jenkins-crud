module.exports = {
  HOST: "postgres-db",
  USER: "appuser",
  PASSWORD: "apppassword",
  DB: "appdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
