var path = require('path')
var pkg = require('./package.json')
var UglifyjsPlugin = require('uglifyjs-webpack-plugin')
var BannerPlugin = require('webpack').BannerPlugin

module.exports = {
  entry: {
    'extenso': 'src/index.js',
    'extenso.min': 'src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'extenso',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.js$/i,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env'
          ]
        }
      }]
    }]
  },
  plugins: [
    new UglifyjsPlugin({
      include: /\.min\.js$/
    }),
    new BannerPlugin([
      'Extenso.js ' + pkg.version,
      '© 2015-' + (new Date()).getFullYear() + ' ' + pkg.author,
      'License: ' + pkg.license
    ].join('\n'))
  ]
}
