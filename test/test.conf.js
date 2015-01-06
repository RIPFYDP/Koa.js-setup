var app       = require('../index'),
    supertest = require('co-supertest'),
    assert    = require('assert'),
    request   = supertest.agent(app.listen());

exports.request = request;
