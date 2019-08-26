module.exports = {
  entry: {
    index: './src/views/index.jsx'
  },
  output: {
    path: __dirname + '/src/public/js',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(jsx)$/,
        loader: 'babel-loader',
        exclude: /node-modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};
