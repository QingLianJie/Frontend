module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/@/:name*',
        destination: '/@:name*',
        permanent: true,
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
