import type { NextConfig } from 'next';

/** The repository's GitHub Pages URL is hosted beneath /vyntrava-technologies-web/. */
const isGitHubPages = process.env.DEPLOY_TARGET === 'github-pages';
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  ...(isGitHubPages ? { basePath: '/vyntrava-technologies-web' } : {}),
  images: { unoptimized: true },
  reactStrictMode: true,
  devIndicators: false,
};
export default nextConfig;
