import Telemetry from "../models/Telemetry.js";
import { computeSavings } from "../utils/savings.js";

export async function createTelemetry(req, res) {
  try {
    const { manualMinutes, automatedMinutes, runs, projectId, runDate, notes } = req.body;
    const hourlyRate = Number(process.env.HOURLY_RATE) || 250;

    const derived = computeSavings({ manualMinutes, automatedMinutes, runs, hourlyRate });

    const doc = await Telemetry.create({
      projectId,
      runDate: runDate ? new Date(runDate) : new Date(),
      manualMinutes,
      automatedMinutes,
      runs,
      ...derived,
      notes
    });

    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function listTelemetry(req, res) {
  const { projectId } = req.query;
  const filter = projectId ? { projectId } : {};
  const items = await Telemetry.find(filter)
    .populate({ path: "projectId", select: "name clientId", populate: { path: "clientId", select: "name" } })
    .sort({ runDate: -1, createdAt: -1 });
  res.json(items);
}
