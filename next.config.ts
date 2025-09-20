import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  basePath: isProd ? '/portfolio.github.io' : '',
  assetPrefix: isProd ? '/portfolio.github.io/' : '',
  output: 'export'
};

export default nextConfig;
