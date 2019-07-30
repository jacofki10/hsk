const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimazeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contentHash].js'
  },
  plugins: [
     new CleanWebpackPlugin(),
      new HtmlWebpackPlugin(
      {
        template: "./src/index.html",
         minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
      }
    )
  ],
  optimization: {
    minimizer:
      [new OptimazeCssAssetsPlugin(), 
      new TerserPlugin()
      ]
  }
});
