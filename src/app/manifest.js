export default function manifest() {
  return {
    name: "Biruk Dejene — Software Engineer",
    short_name: "Birukdjn",
    description:
      "Software Engineer specializing in .NET Core, C#, React, Next.js, and secure Payment Gateway Integrations.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d1117",
    theme_color: "#1f6feb",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    categories: ["developer", "portfolio", "technology"],
  };
}
