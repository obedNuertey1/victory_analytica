import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,  // don’t fail production builds on ESLint errors
  },
  images: {
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: '**.example.com',
    //   },
    // ],
    unoptimized: true,
  }
};

export default nextConfig;
