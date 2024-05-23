/** @type {import('next').NextConfig} */
const nextConfig = {

    transpilePackages: ['crypto-js'],
    images: {
        domains: ['res.cloudinary.com'],
      },


}

module.exports = nextConfig
