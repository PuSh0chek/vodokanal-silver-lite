"use strict";

import * as utils from "../utils.js";

import * as sql from "mssql";

import { sqlConfig } from "../../dbconfig.js";

export const getEvents = async () => {
  try {
    let pool = await sql.connect(sqlConfig.sql);
    const sqlQueries = await utils.loadSqlQueries("events");

    console.message(pool.request());
    const list = await pool.request().query(sqlQueries.eventslist);
    return list.recordset;
  } catch (err) {
    return err.message;
  }
};

export const getById = async (eventId) => {
  try {
    let pool = await sql.connect(sqlConfig.sql);
    const sqlQueries = await utils.loadSqlQueries("events");
    const oneEvent = await pool
      .request()
      .input("eventId", sql.Int, eventId)
      .query(sqlQueries.eventbyid);
    return oneEvent.recordset;
  } catch (err) {
    return err.message;
  }
};
