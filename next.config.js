const withFlowbiteReact = require('flowbite-react/plugin/nextjs')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for better SEO
  // output: 'export',
  trailingSlash: true,

  // Image optimization
  images: {
    unoptimized: false, // Set to false if using Vercel or similar with image optimization
    formats: ['image/webp', 'image/avif'],
  },

  // Experimental features
  experimental: {
    optimizeCss: true,
  },

  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Headers for better SEO and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

module.exports = withFlowbiteReact(nextConfig)
