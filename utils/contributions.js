// utils/contributions.js
/**
 * Fetch total GitHub contributions (all-time) for a user.
 * Uses GitHub GraphQL API.
 */

export async function getTotalContributions() {
  try {
    const token = process.env.GITHUB_TOKEN; // Your GitHub Personal Access Token
    const username = "birukdjn"; // Your GitHub username

    if (!token) {
      throw new Error("GITHUB_TOKEN not found in environment variables");
    }

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
    return data?.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions || 0;

  } catch (error) {
    console.error("Error fetching GitHub contributions:", error.message);
    return 0;
  }
}
