/** @type {import('next').NextConfig} */
const nextConfig = {};
const apiKey = process.env.API_KEY;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn2.thedogapi.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
