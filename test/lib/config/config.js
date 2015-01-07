var supertest = require('co-supertest'),
    assert    = require('assert'),
    _         = require('lodash'),
    config    = require('../../../lib/config/config');


describe('Config object', function(){
  it('Should have four environments', function() {
    var environments = ['development', 'test', 'staging', 'production'];

    _(environments).each(function(environment){
      assert.equal(typeof(eval("config." + environment)), 'object');
    });

  })
})
