"use strict";

import * as express from "express";
import * as eventController from "../controllers/eventController.js";

export const router = express.Router();
const { getEvents, getSameEvent } = eventController;

router.get("/events", getEvents);
router.get("/event/:id", getSameEvent);
