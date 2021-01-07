module.exports = {
  css: {
    extract: false,
  },
  configureWebpack: {
    externals: {
      vue: 'vue',
      'vuetify/lib': 'vuetify/lib',
    },
  },
};
