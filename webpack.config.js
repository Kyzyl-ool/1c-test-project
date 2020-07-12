const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : '',
  entry: {
    main: './lib/index.tsx'
  },
  output: {
    publicPath: '/1c-test-project',
    path: __dirname + '/build',
    filename: '[name].[hash].js'
  },
  devServer: {
    historyApiFallback: true,
    inline: true,
    hot: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3001,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.svg', '.ico', '.png', '.scss'],
    alias: {
      components: path.resolve(__dirname, 'lib/components/'),
      containers: path.resolve(__dirname, 'lib/containers/'),
      pages: path.resolve(__dirname, 'lib/pages/'),
      config: path.resolve(__dirname, 'lib/config/'),
      hoc: path.resolve(__dirname, 'lib/hoc/'),
      hooks: path.resolve(__dirname, 'lib/hooks/'),
      store: path.resolve(__dirname, 'lib/store/')
    }
  },
  module: {
    rules: [
      { test: /\.(tsx|ts)$/, exclude: /node_modules/, loader: ['cache-loader', 'babel-loader']},
      { test: /\.js$/, exclude: [/node_modules/], use: ['cache-loader', 'babel-loader'] },
      { test: /\.css$/, use: ['style-loader', 'cache-loader', 'css-loader'] },
      { test: /\.scss$/, exclude: /node_modules/, use: ['style-loader', 'cache-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(svg|png|jpg|ico)$/, exclude: [/node_modules/, /-import-icon.svg$/], use: ['file-loader'] },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'less-loader',
          options: {
            lessOptions: {
              javascriptEnabled: true,
            }
          }
        }]
      },
      {test: /\.(svg|png|jpg|ico)$/, exclude: [/node_modules/, /-import-icon.svg$/], use: ['file-loader']},
      {
        test: /-import-icon.svg$/,
        use: [
          'babel-loader',
          {
            loader: 'react-svg-loader',
            options: {
              svgo: {
                plugins: [{removeTitle: false}],
                floatPrecision: 2
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      favicon: './public/favicon.ico'
    }),
    new CopyWebpackPlugin({patterns: [{from: './public/manifest.json', to: 'public/manifest.json'}]}),
    new CopyWebpackPlugin({patterns: [{from: './public/favicon.ico', to: 'public/favicon.ico'}]}),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({filename: 'app.css'}),
    new webpack.HashedModuleIdsPlugin(),
    //new BundleAnalyzerPlugin()
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        sourceMap: process.env.NODE_ENV === 'development',
        terserOptions: {
          ecma: 6
        }
      })
    ],
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `npm.${packageName.replace('@', '')}`;
          }
        }
      }
    }
  }
};
