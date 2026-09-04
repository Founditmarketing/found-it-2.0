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
      // Wichita OFF the site (Trevor 9/4): the Kansas experiment LP is gone.
      { source: '/lp/wichita', destination: '/lp/walkthrough', permanent: true },
      // THE MAP IS OFF THE SITE (Trevor 9/4): page deleted, every CTA points
      // at the walkthrough. Old ads/links land there too.
      { source: '/map', destination: '/lp/walkthrough', permanent: true },
      { source: '/blog/what-is-a-software-map', destination: '/blog/nursery-management-software', permanent: true },
      // AI SEO / marketing RETIRED for new clients (Trevor 9/4): selling
      // pages deleted; legacy marketing redirects chain through here.
      { source: '/ai-search-optimization', destination: '/foundit-os', permanent: true },
      { source: '/ai-visibility-check', destination: '/', permanent: true },
      // /team merged into /about (8/16) — old links land on the team section.
      {
        source: '/team',
        destination: '/about#team',
        permanent: true,
      },
      // 8/18 audit: duplicate-intent industry pages merged into their
      // custom-software counterparts — one definitive page per vertical.
      { source: '/industries/contractors', destination: '/custom-software/contractors', permanent: true },
      { source: '/industries/dealerships', destination: '/custom-software/car-dealerships', permanent: true },
      { source: '/industries/retail', destination: '/custom-software/retail-stores', permanent: true },
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
