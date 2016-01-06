var WebpackDevServer = require('webpack-dev-server')
var webpack = require('webpack')

var config = require('./webpack.dev.config.js')
var compiler = webpack(config)
var server = new WebpackDevServer(compiler, {
  historyApiFallback: false,
  quiet: false,
  noInfo: false,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  publicPath: "/",
  stats: { colors: true },
});
server.listen(8080, "localhost", function() {});
