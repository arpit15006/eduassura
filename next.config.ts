import type { NextConfig } from 'next'

// Public site URL used for canonical links, Open Graph images, the sitemap and JSON-LD.
// Set NEXT_PUBLIC_APP_URL for a custom domain; on Vercel it otherwise falls back to the project's production domain.
const appUrl =
  process.env.NEXT_PUBLIC_APP_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')

const nextConfig: NextConfig = {
  basePath: process.env.BASEPATH ?? '',
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  env: {
    NEXT_PUBLIC_APP_URL: appUrl
  }
}

export default nextConfig
