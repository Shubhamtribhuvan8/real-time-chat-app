module.exports = {
  // Other webpack configuration options...

  resolve: {
    fallback: {
      path: require.resolve("path-browserify"),
      os: require.resolve("os-browserify/browser"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      url: require.resolve("url/"),
      fs: false,
      net: false,
      tls: false,
      crypto: false,
      util: require.resolve("util/"),
    },
  },
};
