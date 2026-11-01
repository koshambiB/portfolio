import type { NextConfig } from "next";

// The site is served from https://koshambib.github.io/portfolio, so production
// builds need the /portfolio prefix. In development it's left empty so the site
// opens at http://localhost:3000 directly.
const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  agentRules: false,
};

export default nextConfig;
