module.exports = {
  i18n: {
    locales: ['en', 'cs'],
    defaultLocale: 'cs'
  },
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: { mode: ['react-component'] }
    });
    return cfg;
  },
  target: 'serverless'
};
