var webpack = require('webpack');
var ManifestPlugin = require('webpack-manifest-plugin');
var path = require('path');


module.exports = {
  entry: {
    main: './app/index.js',
    vendor: [
      'moment',
      'lodash'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.optimize.SplitChunksPlugin({
      optimization: {
          splitChunks: {
            cacheGroups: {
              vendor: {
                chunks: 'initial',
                name: 'vendor',
                enforce: true,
              },
            },
          },
          runtimeChunk: {
            name: 'manifest',
          }
        },
    }),
    new ManifestPlugin({
      fileName: 'manifest.json',
      basePath: './dist/'
    })
  ]
}