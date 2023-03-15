/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  assetPrefix: './',
  optimizeFonts: false,
  webpack(config) {
    config.module.rules.push({
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            fallback: 'file-loader',
            publicPath: '/_next/static/',
            outputPath: 'static/',
            name: '[name].[hash].[ext]',
          },
        },
      ],
    });
    return config;
  },
}

module.exports = nextConfig
