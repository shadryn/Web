var webpack = require("webpack");

module.exports = {
  entry: {
    "vendor": "./app/vendor",
    "app": "./app/boot"
  },
  output: {
    path: __dirname,
    filename: "./dist/[name].bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.ts/,
        loaders: ['awesome-typescript-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "./dist/vendor.bundle.js")
  ]
}
