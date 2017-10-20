'use strict'

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    app: ['react-hot-loader/patch', path.resolve(__dirname, './src/index.js')]
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
      // {
      //   test: /\.scss$/,
      //   exclude: /node_modules/,
      //   use: ['style-loader', 'css-loader', 'sass-loader']
      // },
      // {
      //   test: /\.(gif|png|jpg|jpeg|svg)$/,
      //   exclude: /node_modules/,
      //   include: path.resolve(__dirname, './src/assets/'),
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 10000
      //       }
      //     }
      //   ]
      // }
    ]
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

  devtool: 'cheap-eval-source-map', //delete in production

  resolve: {
    extensions: ['.js', '.jsx', '.json', '*'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },

  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    port: 3000,
    historyApiFallback: true,
    inline: true,
    hot: true,
    host: '0.0.0.0'
  }
}
