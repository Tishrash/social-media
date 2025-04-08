/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['tishrash.github.io'],
    unoptimized: true
  },
  output: 'export',
  basePath: '/social-media'
}

module.exports = nextConfig 