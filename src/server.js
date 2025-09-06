import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import clientRoutes from "./routes/client.routes.js";
import projectRoutes from "./routes/project.routes.js";
import telemetryRoutes from "./routes/telemetry.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => res.json({ok: true}));

app.use("/api/clients", clientRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/telemetry", telemetryRoutes);

const {PORT = 4000, MONGODB_URI, HOURLY_RATE = 250} = process.env;

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () =>
      console.log(`🚀 API running at http://localhost:${PORT} (rate ZAR ${HOURLY_RATE}/hr)`)
    );
  })
  .catch(err => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });