const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname,'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
  },
  module: {
    rules: [{
      test: /\.html$/,
      use:[
        {
          loader: 'html-loader',
        }
      ]
    },
      // make sure that we can import other modules
      {
        test: /\.(js)$/,
        // exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    })
  ],
  devtool: 'eval-source-map',
};
