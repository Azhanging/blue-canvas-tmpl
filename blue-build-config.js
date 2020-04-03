const package = require('./package');

//输出源
const output = {
  library: "BlueCanvasTmpl",
  libraryTarget: 'umd',
  globalObject: "typeof self !== 'undefined' ? self : this",
  libraryExport: 'default'
};

const name = `blue-canvas-tmpl`;

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
      output
    }
  }
};