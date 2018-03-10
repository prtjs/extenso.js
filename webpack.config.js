const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const pkg = require("./package.json");
const name = "Extenso.js";
const version = `v${pkg.version}`;
const license = pkg.license;
const currentYear = (new Date()).getFullYear();
const banner1 = `${name} ${version}`
const banner2 = `(c) 2015-${currentYear} Matheus Alves`;
const banner3 = `License: ${license}`;
const banner = banner1 + "\n" + banner2 + "\n" + banner3;

module.exports = {
  entry: {
    extenso: "./src/index.js",
    "extenso.min": "./src/index.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    library: "extenso",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      include: /\.min\.js$/
    }),
    new webpack.BannerPlugin(banner)
  ]
};

