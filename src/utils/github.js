// Function to fetch data for a single GitHub repository
export async function getRepoData(repoPath) {
  // repoPath format: "birukdjn/ai-news-hub"
  const apiUrl = `https://api.github.com/repos/${repoPath}`;

  // Optional: Use a GitHub Personal Access Token for higher rate limits
  // const token = process.env.GITHUB_TOKEN;
  //const headers = token ? { Authorization: `token ${token}` } : {};

  try {
    const response = await fetch(apiUrl, {
      // headers: headers, 
      // Cache response for one hour (using Next.js fetch cache)
      next: { revalidate: 3600 }, 
    });

    if (!response.ok) {
      // Fallback for non-existent or private repos
      console.error(`Failed to fetch repo data for: ${repoPath}`);
      return null;
    }

    const data = await response.json();

    // Extract the relevant data
    return {
      stars: data.stargazers_count,
      forks: data.forks_count,
      // GitHub API uses 'subscribers_count' for "watches"
      watches: data.subscribers_count,
      language: data.language,
      // Fetch the last commit date separately
      lastCommit: await getLastCommitDate(repoPath),
      branch: data.default_branch,
    };
  } catch (error) {
    console.error(`Error fetching GitHub data for ${repoPath}:`, error);
    return null;
  }
}

// Function to get the last commit date (since it's not in the main repo endpoint)
async function getLastCommitDate(repoPath) {
  const commitsUrl = `https://api.github.com/repos/${repoPath}/commits/main`; // Assuming main branch
  try {
    const response = await fetch(commitsUrl, {
       // next: { revalidate: 3600 }, 
       // You need a specific branch or SHA to use the main branch endpoint
    });
    
    // Fallback if main branch doesn't exist (use the default branch)
    if (!response.ok) {
        return "Not found";
    }

    const data = await response.json();
    
    // Format the date (e.g., "2025-10-07T12:00:00Z")
    const dateString = data.commit.author.date;

    // Optional: Format this date into a human-readable string (e.g., "5 days ago")
    return formatRelativeDate(dateString);

  } catch (error) {
    // console.error(`Error fetching commit data for ${repoPath}:`, error);
    return "Unknown";
  }
}

// Basic utility to format date (you can use a library like 'date-fns' for better results)
function formatRelativeDate(dateString) {
    const now = new Date();
    const then = new Date(dateString);
    const diffInDays = Math.floor((now - then) / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) return "today";
    if (diffInDays === 1) return "1 day ago";
    if (diffInDays < 30) return `${diffInDays} days ago`;
    
    return then.toLocaleDateString();
}