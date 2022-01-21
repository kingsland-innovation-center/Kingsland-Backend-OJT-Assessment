const { parse } = require("pg-connection-string");
require("dotenv").config();

const databaseUrl = process.env.DATABASE_URL;

const dbConfig = parse(databaseUrl);
const jdbcUrl = `jdbc:postgresql://${dbConfig.host}/${dbConfig.database}`;

module.exports = {
  flywayArgs: {
    url: jdbcUrl,
    schemas: "public",
    locations: "filesystem:./migrations",
    user: dbConfig.user,
    password: dbConfig.password,
    outOfOrder: false,
  },
  downloads: {
    expirationTimeInMs: -1,
  },
};
