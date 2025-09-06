import { Router } from "express";
import { createClient, listClients } from "../controllers/client.controller.js";

const router = Router();
router.post("/", createClient);
router.get("/", listClients);
export default router;
