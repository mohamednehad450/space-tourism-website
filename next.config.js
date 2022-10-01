/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? '/space-tourism-website/' : '/',
  images: {
    unoptimized: true
  },
  publicRuntimeConfig: {
    assetsPrefix: isProd ? '/space-tourism-website' : '',
  }
}

module.exports = nextConfig