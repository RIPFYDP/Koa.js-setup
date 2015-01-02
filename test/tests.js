var app     = require('../server'),
    request = require('co-supertest').agent(app.listen()),
    assert  = require('assert');

describe('Testing the node server', function(){
  describe('/v0', function(){

    it('Should return 200', function(done){
      request
        .get('/v0')
        .expect(200, done);
    });

    it('Should show the welcome message', function(done) {
      request
        .get('/v0')
        .expect('Hello from koajs', done);
    });

  })
})
