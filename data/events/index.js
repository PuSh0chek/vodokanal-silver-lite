"use strict";

import * as utils from "../utils.js";

import * as sql from "mssql";

import { sqlConfig } from "../../dbconfig.js";

export const getEvent = async () => {
  try {
    const pool = await sql.connect(sqlConfig.sql);
    const sqlQueries = await utils.loadSqlQueries("events");
    const list = await pool.request().query(sqlQueries.eventlist);
    return list.recordset;
  } catch (err) {
    return err.message;
  }
};
