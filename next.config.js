/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_APP_REST_API_LOCATION: process.env.NEXT_APP_REST_API_LOCATION,
    NEXT_APP_REST_API_VERSION: process.env.NEXT_APP_REST_API_VERSION,
    NEXT_APP_REST_API_KEY: process.env.NEXT_APP_REST_API_KEY,
  },
  images: {
    domains: ['assets.vercel.com'],
    formats: ['image/avif', 'image/webp'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    })

    return config
  },
}
