const { Pool } = require("pg");
const { parse } = require("pg-connection-string");
require("dotenv").config();

const databaseUrl =
  process.env.NODE_ENV == "test"
    ? process.env.DATABASE_URL_TEST
    : process.env.DATABASE_URL;
const dbConfig = parse(databaseUrl);

const pool = new Pool({
  user: dbConfig.user,
  host: dbConfig.host,
  password: dbConfig.password,
  database: dbConfig.database,
});

module.exports = pool;
