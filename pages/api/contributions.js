// pages/api/contributions.js
import { getTotalContributions } from "../../utils/contributions";

export default async function handler(req, res) {
  try {
    const total = await getTotalContributions();
    res.status(200).json({ totalContributions: total });
  } catch (error) {
    console.error("API error:", error.message);
    res.status(500).json({ totalContributions: 0, error: error.message });
  }
}
