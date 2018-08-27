const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
/* const webpack = require('webpack'); */

module.exports = {
  entry: {/* 入口（可多入口） */
    index: './src/script/index.js',
    /*     vendor: ['react', 'react-dom'] */
  },
  output: {/* 出口 */
    path: path.resolve(__dirname, 'build/script'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,/* 匹配文件类型 */
        include: [
          path.resolve(__dirname, 'src/script')
        ],
        loader: 'babel-loader'
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'less-loader' // compiles Less to CSS
        }]
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin()
  ]
  /*   plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: ['vendor', 'runtime']
      })
    ] */
  /* 
    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM'
    } */
};