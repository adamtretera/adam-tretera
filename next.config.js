

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer({

i18n: {
    locales: ['en', 'cs'],
    defaultLocale: 'cs'
  },
  images: {
    domains: ['www.notion.so']
  }
});