module.exports = {
    type: "mysql",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME,
    synchronize: process.env.DB_SYNC,
    entities: ["dist/models/*.js"],
  };