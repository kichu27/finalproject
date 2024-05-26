/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
    transpilePackages: ['crypto-js'],
    images: {
        domains: ['res.cloudinary.com'],
      },


}

module.exports = nextConfig
