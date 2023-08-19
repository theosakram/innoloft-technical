const defaultURL = 'https://api-test.innoloft.com';
const baseSource = '/api-innoloft';

/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    baseSource,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bit.ly',
      },
      {
        protocol: 'https',
        hostname: 'img.innoloft.com',
      },
    ],
  },
  rewrites: async () => {
    return [
      {
        source: `${baseSource}/:path*`,
        destination: `${defaultURL}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
