const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  "watch": true,
  watchOptions: {
    aggregateTimeout: 500,
    poll: 1000
  },
};