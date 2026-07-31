export async function GET() {
  return Response.json({
    status: "ok",
    service: "birukdjn-portfolio",
    version: "2.0.0",
    uptime: process.uptime ? Math.floor(process.uptime()) : null,
    timestamp: new Date().toISOString(),
    region: process.env.VERCEL_REGION ?? "local",
  });
}
