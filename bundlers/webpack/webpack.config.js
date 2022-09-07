const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry: "./js/index.js",
  // mode: "development",
  output: {
    //filename: "main.bungle.js",
    filename: "main.[contenthash].js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        //* обработка картинок
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: "file-loader",
        //* сохраняет первоначальное имя файла
        options: {
          name: "[path][name].[ext]",
        },
      },
      /*
      {
        //* обработка стилей (чистый css , зашивается в bungle)
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        //* обработка стилей (scss , зашивается в bungle)
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
        */
      {
        //* обработка стилей (scss , записывается в отдельный файл)
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: resolve(__dirname, "index.html") }),
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    //    new BundleAnalyzer(),
  ],
  devServer: {
    port: 3000,
  },
};
