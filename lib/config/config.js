var config = {
  development: {
    node: {
      port: 5000
    },
    mongo: {
      host: 'localhost',
      name: 'koajs-setup-development',
      url: 'localhost/koajs-setup-development',
      fullUrl: 'mongodb://localhost:27017/koajs-setup-development'
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
