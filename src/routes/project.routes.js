import { Router } from "express";
import { createProject, listProjects } from "../controllers/project.controller.js";

const router = Router();
router.post("/", createProject);
router.get("/", listProjects);
export default router;
