var Compiler = require('angular-gettext-tools').Compiler;
var loaderUtils = require('loader-utils');

module.exports = function (source) {
  this.cacheable();

  var options = loaderUtils.parseQuery(this.query);
  var compiler = new Compiler(options);

  result = compiler.convertPo([source]);
  return result;
};
