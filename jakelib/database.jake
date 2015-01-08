var _      = require('lodash'),
    faker  = require('faker'),
    Mongo  = require('mongodb').MongoClient,
    assert = require('assert'),
    config = require('../lib/config/config');

namespace('db', function(){

  desc('Drop database');
  task('drop', function(){

    Mongo.connect(config.development.mongo.fullUrl, function(err, db) {
      assert.equal(null, err);
      console.log("Connected correctly to server");

      db.dropDatabase(function(err, result) {
        assert.equal(null, err);

        // Wait to seconds to let it replicate across
        setTimeout(function() {

          // Get the admin database
          db.admin().listDatabases(function(err, dbs) {

            // Grab the databases
            dbs = dbs.databases;

            // Did we find the db
            var found = false;

            // Check if we have the db in the list
            for (var i = 0; i < dbs.length; i++) {
              if (dbs[i].name === config.development.mongo.name) {
                found = true;
              }
            }

            // We should not find the databases
            if (process.env['JENKINS'] == null) {
              assert.equal(false, found);
            }

            db.close();
          });
        }, 2000);
      });

    });
  });

  desc('Seed database');
  task('seed', function() {
    console.log('Seed database');

    var users = [];

    // Create an array of 100 fake users
    _.times(100, function() {
      users.push({
        username: faker.internet.userName(),
        email:    faker.internet.email(),
        password: faker.internet.password()
      });
    });

    // Connect to the database
    Mongo.connect(config.development.mongo.fullUrl, function(err, db) {
      assert.equal(null, err);
      console.log("Connected correctly to server");

      // Create users collection
      db.createCollection('users', {}, function(err, collection) {
        assert.equal(null, err);

        // Insert users
        collection.insert(users, function(err, result) {
          assert.equal(null, err);

          db.close();
        })
      });
    });
  });
});
