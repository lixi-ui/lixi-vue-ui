const path = require('path');
const webpack = require('webpack');
const webpackDevServer = require("webpack-dev-server");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugins = require('vue-loader/lib/plugin');

var config = {
  entry: {
    docs: path.resolve(process.cwd(), "./examples/main.js") 
  },
  output: {
    path: path.resolve(process.cwd(), './examples/lixi-ui/'),
    publicPath: '',
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: ['node_modules']
  },
  devServer: {
    host: '0.0.0.0',
    port: 8888,
    publicPath: '/',
    noInfo: true
  },
  module: {
    rules:[
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          preserveWhitespace: false
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './examples/index.html',
      filename: './index.html',
      favicon: './examples/lixi-logo.png'
    }),
    new VueLoaderPlugins()
  ]
}

var server = new webpackDevServer(webpack(config));

server.listen(8888, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
});