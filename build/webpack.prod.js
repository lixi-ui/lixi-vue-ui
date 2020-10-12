const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugins = require('vue-loader/lib/plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var config = {
  mode: "development",
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
    modules: ['node_modules'],
    alias: {
      'src': path.join(__dirname,'../src'),
      'lixiv-ui':  path.join(__dirname,'../')
    }
  },
  module: {
    rules:[
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        exclude: /popper\.js/,
        loader: 'babel-loader',
        options: {
          presets:[
            ["@babel/preset-env", { "modules": false }],
            [
              '@vue/babel-preset-jsx',
              {
                functional: false,
              },
            ],
          ]
        }
      },
      {
        test: /\.(tsx?)$/,
        include: process.cwd(),
        loader: 'babel-loader',
        options: {
          presets:[
            [
              '@babel/preset-typescript',
              {
                allExtensions: true
              }
            ]
          ]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          preserveWhitespace: false
        }
      },
      {
        test: /\.md/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          },
          {
            loader: path.resolve(__dirname, './md-loader/index.js')
          }
        ]
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10,
          name: path.posix.join("static", 'img/[name].[hash:7].[ext]'),
          esModule: false
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './examples/index.html',
      filename: './index.html',
      favicon: './examples/assets/images/lixi-logo.png'
    }),
    new VueLoaderPlugins(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:7].css'
    })
    // new BundleAnalyzerPlugin()
  ]
}


webpack(config,function(err,res){
  console.log("成功");
  // console.log("res", res);
});