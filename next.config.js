/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.GITHUB_ACTIONS ? '/kais-room' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/kais-room' : '',
  trailingSlash: true,
};

module.exports = nextConfig;
