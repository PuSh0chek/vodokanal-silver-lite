import * as dotenv from "dotenv";
import assert from "node:assert/strict";

dotenv.config();
const { PORT, HOST, HOST_URL, SQL_USER, SQL_PWD, SQL_DATABASE, SQL_SERVER } =
  process.env;
const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

assert(PORT, "PORT is required");
assert(HOST, "HOST is required");

// Create connection to database
export const sqlConfig = {
  port: PORT,
  host: HOST,
  url: HOST_URL,
  sql: {
    server: SQL_SERVER,
    database: SQL_DATABASE,
    user: SQL_USER,
    password: SQL_PWD,
    options: {
      encrypt: sqlEncrypt,
      enableArithAbort: true,
    },
  },
  // authentication: {
  //   type: "default",
  //   options: {
  //     userName: SQL_USER, // update me
  //     password: SQL_PWD, // update me
  //   },
  // },
  // options: {
  //   database: SQL_DATABASE,
  //   // else -> ConnectionError: Failed to connect to localhost:1433 - self-signed certificate
  //   trustServerCertificate: true,
  // },
};
