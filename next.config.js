/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'scontent.cdninstagram.com',
              port: '',
              pathname: '**',
          },
          {
              protocol: 'https',
              hostname: 'video.cdninstagram.com',
              port: '',
              pathname: '**',
          },
      ],
      domains: ["scontent.cdninstagram.com", "video.cdninstagram.com"]
  },
}

module.exports = nextConfig
