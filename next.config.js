module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/@/:name*',
        destination: '/@:name*',
        permanent: true,
      },
      {
        source: '/accounts/password/:path*',
        destination: 'https://api.qinglianjie.cn/accounts/password/:path*',
        permanent: false,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/@:name*',
        destination: '/@/:name*',
      },
    ]
  },
}
