var path = require('path')
var autoprefixer = require('autoprefixer')

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/static/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      'src': path.resolve(__dirname, './src')
    }
  },
  module: {
    loaders: [{
        test: /\.vue$/,
        loader: 'vue'
      }, {
        test: /\.js$/,
        loader: 'babel!eslint',
        exclude: /(node_modules)|(src\/vendors)/
      }, {
        test: /\.json$/,
        loader: 'json',
        exclude: /node_modules/
      }, {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      }, {
        test: /\.styl$/,
        loader: 'style!css!stylus'
      }, {
        test: /\.(png|jpg|gif|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }]
  },
  postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
  vue: {
    loaders: {
      js: 'babel!eslint',
      sass: 'style!css!sass?indentedSyntax',
      scss: 'style!css!sass',
      styl: 'style!css!stylus'
    }
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  }
}

