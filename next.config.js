/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    JWT_SECRET: process.env.JWT_SECRET,
    API_ROUTE:process.env.API_ROUTE
  },
  runtime: 'edge',
  
}

module.exports = nextConfig
