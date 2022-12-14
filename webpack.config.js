const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/index.jsx"),
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "static"),
  },
  module: {
    rules: [
      {
        //Jsx & Js
        test: /\.(js|jsx)$/,
        exclude: /(node-modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        //CSS
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        //SVGs
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
      {
        //Imagens
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "./public/index.html"),
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    hot: true,
    port: 3333,
  },
};
