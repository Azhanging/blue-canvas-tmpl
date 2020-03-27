const package = require('./package');

//输出源
const output = {
  library: "BlueCanvasTmpl",
  libraryTarget: 'umd',
  libraryExport: 'default'
};

const name = `blue-canvas-tmpl`;

const externals = {
  'blue-utils': {
    commonjs: "blueUtils",
    commonjs2: "blueUtils",
    amd: "blueUtils",
    root: "blueUtils"
  },
  'blue-queue-pipe':{
    commonjs: "BlueQueuePipe",
    commonjs2: "BlueQueuePipe",
    amd: "BlueQueuePipe",
    root: "BlueQueuePipe"
  }
};

module.exports = {
  library: {
    name,
    github: `https://github.com/azhanging/${name}`,
    date: `2016-2020`,
    version: package.version,
    author: package.author
  },
  webpackConfig: {
    dev: {
      output
    },
    prod: {
      output,
      externals
    }
  }
};