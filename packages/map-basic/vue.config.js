module.exports = {
  css: {
    extract: true,
  },
  configureWebpack: {
    externals: {
      vue: 'vue',
      'vuetify/lib': 'vuetify/lib',
    },
  },
};
