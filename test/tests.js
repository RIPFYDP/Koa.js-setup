var app = require('../server');
var request = require('co-supertest').agent(app.listen());
var assert = require('assert');

describe('Testing the node server', function(){
  describe('/', function(){

    it('Should return 200', function(done){
      request
        .get('/')
        .expect(200, done);
    });

    it('Should show the welcome message', function(done) {
      request
        .get('/')
        .expect('Hello from koajs', done);
    });

  })
})
