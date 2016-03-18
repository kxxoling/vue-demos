var config = require('./webpack.base.conf')
var webpack = require('webpack')

config.devtool = 'eval-source-map'
config.debug = true

config.devServer = {
  host: '0.0.0.0',
  historyApiFallback: true,
  noInfo: true
}

config.plugins = (config.plugins || []).concat([
  // http://vuejs.github.io/vue-loader/workflow/production.html
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  })
])

module.exports = config
