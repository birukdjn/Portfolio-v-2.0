// pages/api/contributions.js
import { getTotalContributions } from "../../utils/contributions";

export default async function handler(req, res) {
  const total = await getTotalContributions();
  res.status(200).json({ totalContributions: total });
}
