import { fileURLToPath } from 'node:url';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['page.js', 'page.jsx', 'page.ts', 'page.tsx'],
  webpack: (config) => {
    config.resolve.alias['react-router-dom'] = fileURLToPath(new URL('./src/lib/react-router-dom-next.jsx', import.meta.url));
    return config;
  },
};

export default nextConfig;
