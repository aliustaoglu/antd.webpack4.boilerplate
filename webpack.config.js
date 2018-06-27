const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['react-hot-loader/patch', './src/index.js'],
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        issuer: {
          exclude: /\.less$/
        }
      },
      {
        test: /\.scss$/,
        issuer: /\.less$/,
        use: {
          loader: './sassVarsToLess.js'
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    alias: {
      reducers: path.resolve(__dirname, './src')
    }
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map'
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
