/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos", "localhost"],
  }
}

// // next.config.js
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });


module.exports = nextConfig;
// module.exports = withPlugins([
//   [withBundleAnalyzer],
// ])
