import Client from "../models/Client.js";

export async function createClient(req, res) {
  try {
    const client = await Client.create(req.body);
    res.status(201).json(client);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function listClients(_req, res) {
  const items = await Client.find().sort({ createdAt: -1 });
  res.json(items);
}
