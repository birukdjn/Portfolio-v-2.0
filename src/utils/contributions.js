// src/utils/contributions.js

/**
 * Fetch total GitHub contributions (all-time) for a user.
 * Uses GitHub GraphQL API.
 */

export async function getTotalContributions() {
  try {
    const token = process.env.GITHUB_TOKEN; // Your GitHub Personal Access Token
    const username = "birukdjn"; // Replace with your GitHub username

    if (!token) {
      throw new Error("GITHUB_TOKEN not found in environment variables");
    }

    // GraphQL query: get total contributions from contributionCalendar
    const query = `
      query {
        user(login: "${username}") {
          contributionsCollection {
            contributionCalendar {
              totalContributions
            }
          }
        }
      }
    `;

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    // Return total contributions or 0 if undefined
    const total = data?.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions || 0;
    return total;

  } catch (error) {
    console.error("Error fetching GitHub contributions:", error.message);
    return 0; // fallback
  }
}
