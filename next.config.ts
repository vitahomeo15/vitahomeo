import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  async redirects() {
    return [
      {
        source: "/treatments",
        destination: "/treatment",
        permanent: true,
      },
      {
        source: "/doctors/in/:location*",
        destination: "/doctor/:location*",
        permanent: true,
      },
      {
        source: "/doctor",
        destination: "/doctors",
        permanent: true,
      },
      {
        source: "/reviews",
        destination: "/treatment",
        permanent: true,
      },
      {
        source: "/reviews/write",
        destination: "/treatment",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
