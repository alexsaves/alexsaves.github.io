const path = require('path');

var paths = {
  APP_SRC: './src/js/',
  DIST: './dist/'
};

module.exports = {
  entry: paths.APP_SRC + 'index.jsx',
  output: {
    path: path.resolve(__dirname, paths.DIST),
    filename: 'app.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: 'babel-loader'
    }]
  }
};