/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "digitalhippo-production-b103.up.railway.app"],
    // remotePatterns: [
    //   {
    //     hostname: "localhost",
    //     pathname: "**",
    //     port: "3000",
    //     protocol: "http",
    //   },
    // ],
  },
};

module.exports = nextConfig;
