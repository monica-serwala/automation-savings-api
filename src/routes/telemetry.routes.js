import { Router } from "express";
import { createTelemetry, listTelemetry } from "../controllers/telemetry.controller.js";

const router = Router();
router.post("/", createTelemetry);
router.get("/", listTelemetry);
export default router;
