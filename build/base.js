const path = require('path');

module.exports = {

  //file start path
  context: path.resolve(__dirname, '../'),

  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    publicPath: './dist'
  },

  //alias path
  resolve: {
    extensions: ['.js'],
    alias: {
      '@util': path.resolve(__dirname, '../src/util')
    }
  },

  // devDependencies require no in entry
  externals: {
    /*['blue-utils']: {
      commonjs: "blue-utils",
      commonjs2: "blue-utils",
      root:'blueUtils'
    },
    ['blue-queue-pipe']: {
      commonjs: "blue-queue-pipe",
      commonjs2: "blue-queue-pipe",
      root:'BlueQueuePipe'
    }*/
  },

  // use loader
  module: {
    rules: [{
      test: /\.html$/,
      use: [
        'html-loader'
      ]
    }, {
      test: /\.js$/,
      use: [
        'babel-loader'
      ]
    }]
  },

  // map file
  /*devtool: '#source-map'*/
};