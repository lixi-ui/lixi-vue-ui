import webpack from "webpack";
import webpackDevServer from "webpack-dev-server";

var config = {
  mode: "product",
  entry : "src/index.js",
  output: 'index.js',
  alert: {},
  modules: {
    roles:[
      {
        test: /\.vue|tex/,
        loader: "loader-vue",
        option: {},
      },
      {
        test: 'js',
        loader: 'bable-loader',
        option: {},
      },
      {
        test: 'sass',
        loader: ["sass-loader","css-loader","style-loader"]
      },
      {
        test: "url",
        loader: "url-loader"
      },
      {
        test: "png,jpg",
        loader: ""
      },
      {
        test: "md",
        loader: "mkdown",
      }
    ]
  },
  puckage: [
    new HTMLWebpackExtion()
  ]
}