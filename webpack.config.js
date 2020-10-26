const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
   entry: './index.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
   },
   devServer: {
      port: 8001,
      open: true,
      contentBase: path.resolve(__dirname, 'dist'),
      clientLogLevel: 'silent',
      hot: true
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
         },
         {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ["style-loader","css-loader"]
         }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './public/index.html'
      }),
      new webpack.HotModuleReplacementPlugin()
   ]
}