/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/stats",
        destination: "http://localhost:5005/stats",
      },
    ];
  },
};

export default nextConfig;
