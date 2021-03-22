const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      }, {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader",]
      },
    ]
  },
  plugins: [new VueLoaderPlugin()]
}
