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
    noParse: ['react', 'react-dom'],
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
    new webpack.NoErrorsPlugin()
  ]
}
