import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  contactEmail: String,
  notes: String
}, { timestamps: true });

export default mongoose.model("Client", ClientSchema);
