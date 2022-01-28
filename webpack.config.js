const path = require('path'); // библиотека позволяющая создавать относитьные пути для файлов
const HtmlWebpackPlugin = require('html-webpack-plugin'); // плагин для работы с .html
const miniCss = require('mini-css-extract-plugin'); // плагин для работы с .css

module.exports = {
  mode: 'development', // уровень сборки (для промежуточной проверки или для окончательной публикации)
  entry: { // свойство говорит где находится точка входа - index.js или main.js
    main: path.resolve(__dirname, './src/index.js'), // адрес входной точки 
    //"__dirname" - замена имени текущей директории
  },
  output: { // свойство говорит куда webpack'у помещать конечный bundle
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [{
      test: /\.(s*)css$/,
      use: [
        miniCss.loader,
        'css-loader',
        'sass-loader',
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'AleksandrKozlov',
      template: path.resolve(__dirname, './public/template.html'), // адрес входной точки
      filename: 'index.html' // название итогового файла
    }),
    new miniCss({
      filename: 'style.css',
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000
    // proxy: {
    //   '/api/v1': 'http://localhost:3000',
    // },
  }
};