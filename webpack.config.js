const path = require('path')
const pkg = require('./package.json')
const UglifyjsPlugin = require('uglifyjs-webpack-plugin')
const { BannerPlugin } = require('webpack')
const { version, license, author } = require('./package')

const banner = `Extenso.js v${version} | ${license} (c) 2015-${(new Date()).getFullYear()} by ${author}`

module.exports = {
  entry: {
    'extenso': './index.js',
    'extenso.min': './index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'extenso',
    libraryTarget: 'umd',

    // Para resolver um problema com o Webpack 4 (webpack#6522).
    globalObject: `typeof self !== 'undefined' ? self : this`
  },
  module: {
    rules: [{
      test: /\.js$/i,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }]
      
    }]
  },
  optimization: {
    minimize: false
  },
  plugins: [
    new UglifyjsPlugin({
      include: /\.min\.js$/,
      uglifyOptions: {
        output: {
          comments: false
        }
      }
    }),
    new BannerPlugin(banner)
  ]
}
