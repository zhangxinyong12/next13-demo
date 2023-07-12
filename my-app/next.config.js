/** @type {import('next').NextConfig} */

// 获取环境变量
const NODE_ENV = process.env.NODE_ENV
const BASE_URL = {
  development: "http://124.71.160.218:3008",
  production: "http://124.71.160.218:3008",
}
const nextConfig = {
  env: {
    BASE_URL: BASE_URL[NODE_ENV],
  },
}

module.exports = nextConfig
