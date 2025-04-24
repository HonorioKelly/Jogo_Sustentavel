import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/Jogo_Sustentavel',
  assetPrefix: '/Jogo_Sustentavel/',
};

export default nextConfig;
