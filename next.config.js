/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  env: { dataPrefix: isProd ? '/space-tourism-website' : '', },
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? '/space-tourism-website/' : '/',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig