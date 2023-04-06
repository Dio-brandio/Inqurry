/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    JWT_SECRET: process.env.JWT_SECRET,
  },
  runtime: 'edge', // for Edge API Routes only
  unstable_allowDynamic: [
    '/node_modules/function-bind/**'// use a glob to allow anything in the function-bind 3rd party module
  ],
}

module.exports = nextConfig
