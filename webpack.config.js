const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    menu: "./src/js/menu.js",
    appetizers: "./src/js/appetizers.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: __dirname + "/dist",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/html/menu.html",
      filename: "menu.html",
      chunks: ["menu"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/appetizers.html",
      filename: "appetizers.html",
      chunks: ["appetizers"],
    }),
  ],
};
