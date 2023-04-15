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
    new HtmlWebpackPlugin({
      template: "./src/html/beverages.html",
      filename: "beverages.html",
      chunks: ["beverages"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/breakfast.html",
      filename: "breakfast.html",
      chunks: ["breakfast"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/lunch.html",
      filename: "lunch.html",
      chunks: ["lunch"],
    }),
  ],
};
