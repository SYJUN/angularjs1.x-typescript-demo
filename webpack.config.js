const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ParallelUglify = require('webpack-parallel-uglify-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: './src/index.ts',
  output: {
    filename: '[name].bundle.[hash:4].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].[hash].js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'src'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ng-annotate-loader',
            options: {
              ngAnnotate: 'ng-annotate-patched',
              sourcemap: true,
            },
          },
          {
            loader: 'ts-loader',
            options: {
              // configFile: sourcePath + '/tsconfig.app.json',
              // disable type checker - we will use it in fork plugin
              transpileOnly: true,
            }
          },
        ],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: { minimize: true }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'resolve-url-loader']
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'resolve-url-loader', 'sass-loader']
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:4].css',
      chunkFilename: '[id].[contenthash:4].css'
    }),
    new ParallelUglify({
      uglifyJS: {
        output: {
          comments: false,
        },
        compress: {
          warnings: false,
          drop_debugger:  true,
          drop_console:  true
        },
      },
    }),
  
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    stats: {
      modules: false,
      cached: false,
      chunk: true,
      colors: true,
    },
    host: 'localhost',
    port: 3000,
    hot: true,
  }
};
