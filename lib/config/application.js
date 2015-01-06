var config   = require('./config'),
    application;

application = function(env) {
  return eval('config.' + env);
};

module.exports = application;
