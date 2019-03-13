const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  // 入口文件
  entry: './main.js',
  output: {
    // 把所有依赖的模块合并输出到一个bundle.js文件
    filename: 'bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        // 用正则去匹配要用该 loader 转换的 CSS 文件  先使用css-loader读取CSS文件，再交给 style-loader 把CSS内容注入到 JS 中
        test: /\.css$/,
        use: ['style-loader', 'css-loader?minimize'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        exclude: [resolve('images')],
        options: {
          limit: 500000
        }
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      // 从 .js 文件中提取出来的 .css 文件的名称
      filename: `[name]_[contenthash:8].css`,
    }),
  ]
};