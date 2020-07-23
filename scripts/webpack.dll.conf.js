/*
 * @desc 静态公共资源打包配置
 */


const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    // 定义程序中打包公共文件的入口文件vendor.js
    vendor: [
      'vue',
      'vue-router',
      'vuex',
      '@babel/polyfill', // 提前打包一些基本不怎么修改的文件
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', 'dll'),
    filename: '[name].dll.js',
    library: '[name]_[hash]',
    libraryTarget: 'this',
  },
  plugins: [
    new webpack.DllPlugin({
      // 定义程序中打包公共文件的入口文件vendor.js
      context: process.cwd(),

      // manifest.json文件的输出位置
      path: path.resolve(__dirname, '..', 'dll/[name]-manifest.json'),

      // 定义打包的公共vendor文件对外暴露的函数名
      name: '[name]_[hash]',
    }),
  ],
};