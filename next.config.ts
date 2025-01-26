const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Matches any domain
      },
    ],
  },
};

module.exports = nextConfig;
