/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    serverComponentsExternalPackages: ['genkit', '@genkit-ai/google-genai'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // founditsoftware.com is the canonical domain (Trevor, 2026-08-12).
  // The old brand domain 301s here path-for-path, preserving link equity
  // and keeping every old ad/email link alive.
  async redirects() {
    return [
      // /team merged into /about (8/16) — old links land on the team section.
      {
        source: '/team',
        destination: '/about#team',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'founditmarketing.com' }],
        destination: 'https://www.founditsoftware.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.founditmarketing.com' }],
        destination: 'https://www.founditsoftware.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
