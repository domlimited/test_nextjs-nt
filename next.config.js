/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['codingthailand.com', 'api.codingthailand.com'],
  },
}

module.exports = nextConfig
