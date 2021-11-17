var Compiler = require('angular-gettext-tools').Compiler;
var loaderUtils = require('loader-utils');

module.exports = function (source) {
  this.cacheable();

  var options = loaderUtils.getOptions(this);
  var compiler = new Compiler(options);

  // https://github.com/rubenv/grunt-angular-gettext/blob/master/tasks/compile.js#L7
  if (options.format && !Compiler.hasFormat(options.format)) {
    throw new Error('There is no "' + options.format + '" output format.');
  }

  result = compiler.convertPo([source]);
  return result;
};
