import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // General configuration options
  experimental: {
    ppr: true, // Ensure this is a valid flag for the version of Next.js
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Specify the protocol if needed (https/http)
        hostname: 'avatar.vercel.sh', // This should match the domain of the remote images
        pathname: '/**', // Allow all paths for this domain
      },
    ],
  },
};

export default nextConfig;
