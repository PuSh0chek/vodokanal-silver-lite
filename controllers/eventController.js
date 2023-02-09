"use strict";

import * as eventData from "../data/events/index.js";

export const getEvent = async (req, res, next) => {
  try {
    const event = await eventData.getEvent();
    res.send(event);
  } catch (err) {
    res.status(400).send(err.message);
  }
};
