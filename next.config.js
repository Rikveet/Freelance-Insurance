/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
      domains: ["scontent.cdninstagram.com", "video.cdninstagram.com"]
  },
}

module.exports = nextConfig
