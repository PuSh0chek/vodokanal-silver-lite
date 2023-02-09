"use strict";

import * as express from "express";
import * as eventController from "../controllers/eventController.js";

const router = express.Router();
const { getEvent, getSameEvent } = eventController;

router.get("/events", getEvent);
router.get("/event/:id", getSameEvent);

export { router as routes };
