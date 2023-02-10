"use strict";

import * as eventData from "../data/events/index.js";

export const getEvents = async (req, res, next) => {
  try {
    const events = await eventData.getEvents();
    res.send(events);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const getSameEvent = async (req, res, next) => {
  try {
    const eventId = req.params.id;
    const oneEvent = await eventData.getById(eventId);
    res.send(oneEvent);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
