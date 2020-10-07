const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugins = require('vue-loader/lib/plugin');

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
  // entry: {
  //   app: ['./src/index.js']
  // },
  // output: {
  //   path: path.resolve(process.cwd(), './lib'),
  //   publicPath: '/dist/',
  //   filename: 'index.js',
  //   chunkFilename: '[id].js',
  //   libraryTarget: 'umd',
  //   library: 'LIXI',
  //   umdNamedDefine: true
  // },
  // externals: {
  //   vue: {
  //     root: 'Vue',
  //     commonjs: 'vue',
  //     commonjs2: 'vue',
  //     amd: 'vue'
  //   }
  // },
  // entry: {
  //   app: ['./src/index.js']
  // },
  // output: {
  //   path: path.resolve(process.cwd(), './lib'),
  //   publicPath: '/dist/',
  //   filename: 'lixi-ui.common.js',
  //   chunkFilename: '[id].js',
  //   libraryTarget: 'commonjs2'
  // },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: ['node_modules'],
    alias: {
      'src': path.join(__dirname,'../src',
      ),
    }
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
        test: /\.(jsx?|babel|es6|tsx?)$/,
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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './examples/index.html',
      filename: './index.html',
      favicon: './examples/assets/images/lixi-logo.png'
    }),
    new VueLoaderPlugins()
  ]
}


webpack(config,function(err,res){
  // console.log("err", err);
  // console.log("res", res);
});