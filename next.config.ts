import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  basePath: isProd ? '/<repo-name>' : '',
  assetPrefix: isProd ? '/<repo-name>/' : '',
  output: 'export'
};

export default nextConfig;
