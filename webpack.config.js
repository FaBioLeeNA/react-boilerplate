

module.exports = {
  entry: './client/index.jsx',
  output: {
    path: `${__dirname}/public`,
    filename: 'app.js',
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
 };
