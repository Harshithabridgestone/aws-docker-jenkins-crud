module.exports = {
  HOST: "10.100.145.228",
  USER: "appuser",
  PASSWORD: "password",
  DB: "appdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
