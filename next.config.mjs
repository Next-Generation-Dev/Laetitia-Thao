/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [""],
    unoptimized: true,
  },
  experimental: {
    scrollRestoration: true,
  },
  staticPageGenerationTimeout: 30,
  generateEtags: true,
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  // Ici c'est le build
  // output: "export",
  // basePath: process.env.BASE_PATH ? process.env.BASE_PATH : "",
  // assetPrefix: process.env.URL ? process.env.URL : undefined,
};

export default nextConfig;
