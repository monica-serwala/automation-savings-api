import mongoose from "mongoose";

const TelemetrySchema = new mongoose.Schema({
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
  runDate:   { type: Date, required: true, default: () => new Date() },

  manualMinutes:    { type: Number, required: true, min: 0 },
  automatedMinutes: { type: Number, required: true, min: 0 },
  runs:             { type: Number, required: true, min: 1 },

  timeSavedMinutes: { type: Number, required: true, min: 0 },
  costSaved:        { type: Number, required: true, min: 0 },

  notes: String
}, { timestamps: true });

export default mongoose.model("Telemetry", TelemetrySchema);
