import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "http",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "a.espncdn.com"
      }
    ],
  },
};


export default nextConfig;
