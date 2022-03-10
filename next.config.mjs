/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @type {import('next').NextConfig}
 **/

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    urlImports: ["https://cdn.skypack.dev"],
  },
};

export default nextConfig;
