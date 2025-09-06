import Project from "../models/Project.js";

export async function createProject(req, res) {
  try {
    const project = await Project.create(req.body);
  res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function listProjects(req, res) {
  const { clientId } = req.query;
  const filter = clientId ? { clientId } : {};
  const items = await Project.find(filter)
    .populate("clientId", "name")
    .sort({ createdAt: -1 });
  res.json(items);
}
