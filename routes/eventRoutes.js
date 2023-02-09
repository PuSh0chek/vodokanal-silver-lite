"use strict";

import * as express from "express";
import * as eventController from "../controllers/eventController.js";

const router = express.Router();
const { getEvent } = eventController;

router.get("/events", getEvent);

export { router as routes };
