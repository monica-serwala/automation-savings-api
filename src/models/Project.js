import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: "Client", required: true },
  name: { type: String, required: true },
  description: String,
  status: { type: String, enum: ["active", "paused", "archived"], default: "active" }
}, { timestamps: true });

ProjectSchema.index({ clientId: 1, name: 1 }, { unique: true });

export default mongoose.model("Project", ProjectSchema);
