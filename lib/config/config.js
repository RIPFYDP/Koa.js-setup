var config = {
  development: {
    node: {
      port: 5000
    },
    mongo: {
      url: 'localhost/koajs-setup-development'
    }
  },

  test: {
  },
  staging: {
  },
  production: {
  }
};

module.exports = config;
