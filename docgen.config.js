module.exports = {
  outDir: 'apidocs',
  componentsRoot: 'packages',
  components: '*/src/**/*.vue',
  apiOptions: {
    ...require('./webpack.config').resolve
  }
}
