const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "main"),
  watch: true,
  output: {
    path: path.join(__dirname, "dist"),
    // publicPath: "/dist/",
    filename: "bundle.js",
    chunkFilename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /.js?$/,
        include: [path.resolve(__dirname, "src")],
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader",
        query: {
          presets: [
            [
              "@babel/env",
              {
                targets: {
                  browsers: "last 2 chrome versions",
                },
              },
            ],
          ],
        },
      },
      {
        test:/\.css$/,
        loader:"css-loader"
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  resolve: {
    extensions: [".json", ".js", ".jsx"],
  },
  devtool: "source-map",
  plugins:[
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src",'index.html'),
      title:"VueScaffold",
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "/dist/"),
    inline: true,
    host: "localhost",
    port: 8080,
  },
};
