var monk = require('monk'),
    wrap = require('co-monk'),
    mongo = {},
    db,
    users;

mongo = {
  setMongo: function(app) {
    db       = monk(app.config.mongo.url);

    users = wrap(db.get('users'));
  },

  users: function *() {
    var list = yield users.find({});
    this.body = list;
  }
};

module.exports = mongo;
