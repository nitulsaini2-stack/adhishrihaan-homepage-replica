import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//    images: {
//     domains: ['adhishrihaan.org'],
//   },
// };

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "adhishrihaan.org",
      },
    ],
  },
};

export default nextConfig;
