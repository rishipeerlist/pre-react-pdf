/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      process.env.NEXT_PUBLIC_PEERLIST_CLOUDFRONT_ENDPOINT,
      process.env.NEXT_PUBLIC_PEERLIST_AWS_ENDPOINT,
    ],
  },
};

module.exports = nextConfig;
