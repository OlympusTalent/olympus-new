/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: false,
  },
  // 301 redirects for stale URLs from the previous (Wix) site that are still
  // indexed by Google. Permanent redirects consolidate ranking signals onto the
  // current pages and let the old off-brand URLs drop out of the index.
  async redirects() {
    return [
      { source: "/hr-1", destination: "/hr", permanent: true },
      { source: "/payroll-courses", destination: "/payroll", permanent: true },
      { source: "/the-recruitment-charter", destination: "/doctrine", permanent: true },
      { source: "/automotive", destination: "/", permanent: true },
      { source: "/sustainability-policy-1", destination: "/", permanent: true },
      // Old Wix blog/feed paths (/f/... and /blog/...)
      { source: "/f/:slug*", destination: "/", permanent: true },
      { source: "/blog/:slug*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
