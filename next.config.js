/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    //   contentDispositionType: 'attachment',
    //   contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hugoleonardodev.github.io',
        port: '',
        pathname: '/**',
      }
    ],
  },
  async rewrites() {
    return [
      {
        source: '/:locale/assets/:path*',
        destination: '/assets/:path*',
      },
      {
        source: '/:path*.xml',
        destination: '/:path*.xml',
      },
      {
        source: '/robots.txt',
        destination: '/robots.txt',
      },
    ]
  },
}

module.exports = nextConfig
