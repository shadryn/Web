var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  content: __dirname + "/client/app",
  entry: {
    "vendor": "./client/app/vendor",
    "app": "./client/app/boot"
  },
  output: {
    path: __dirname,
    filename: "./dist/[name].js",
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  devtool: 'source-map',
  module: {
    preLoaders: [ { test: /\.ts$/, loader: 'tslint-loader' } ],
    loaders: [
      // Support for .ts files.
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        query: {
          'ignoreDiagnostics': [
            2403, // 2403 -> Subsequent variable declarations
            2300, // 2300 Duplicate identifier
            2304, // 2304 Cannot find name
            2374, // 2374 -> Duplicate number index signature
            2375  // 2375 -> Duplicate string index signature
          ]
        },
        exclude: [ /\.spec\.ts$/, /\.e2e\.ts$/, /node_modules/ ]
      },

      // Support for *.json files.
      { test: /\.json$/,  loader: 'json-loader' },

      // Support for CSS as raw text
      { test: /\.css$/,   loader: 'raw-loader' },

      // support for .html as raw text
      { test: /\.html$/,  loader: 'raw-loader' },

      {
        test: /(\.scss)$/,
        loaders: ['raw-loader', 'sass-loader']
      },

      {
        test: /(\.css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
      }
    ],
    noParse: [
     /zone\.js\/dist\/.+/,
     /reflect-metadata/,
     /es(6|7)-.+/,
     /.zone-microtask/,
     /.long-stack-trace-zone/
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: './dist/vendor.js', minChunks: Infinity }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'common', filename: './dist/common.js', minChunks: 2, chunks: ['app', 'vendor'] }),
    new ExtractTextPlugin('./dist/[name].css'),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: false,
      compress : { screw_ie8 : true },
      comments: false
    })
  ],

  // Other module loader config
  tslint: {
    emitErrors: false,
    failOnHint: false
  },
}
