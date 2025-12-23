// src/app/api/contributions/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const token = process.env.GITHUB_TOKEN;
    const username = "birukdjn";

    if (!token) {
      return NextResponse.json({ error: "Token missing" }, { status: 500 });
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
      // Cache the result for 1 hour (3600 seconds)
      next: { revalidate: 3600 } 
    });

    const data = await response.json();
    const total = data?.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions || 0;

    return NextResponse.json({ totalContributions: total });
  } catch (error) {
    return NextResponse.json({ totalContributions: 0 }, { status: 500 });
  }
}