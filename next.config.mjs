/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/express/:path*",
        destination: "http://localhost:9001/server/:path*",
      },
    ];
  },
};

export default nextConfig;
