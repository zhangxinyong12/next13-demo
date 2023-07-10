/** @type {import('next').NextConfig} */
const nextConfig = {
  // 修改端口号
  devIndicators: {
    autoPrerender: false,
  },
  // 后台接口代理
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://124.71.160.218:3008/:path*",
      },
    ]
  },
}

module.exports = nextConfig
