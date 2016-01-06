var path = require('path')
var webpack = require('webpack')

module.exports = {
  context: __dirname + '/modules',
  entry: './app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'modules')],
        loaders: ['babel?cacheDirectory=true'],
      },
      { test: /\.css$/, loader: 'style!css' }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    })
  ]
}
