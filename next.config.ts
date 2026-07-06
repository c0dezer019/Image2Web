import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Pin the workspace root. A stray ~/package-lock.json sits above this
  // project, so Turbopack otherwise infers the wrong root and writes an
  // empty/mismatched build manifest.
  turbopack: { root: __dirname },
};

export default nextConfig;
