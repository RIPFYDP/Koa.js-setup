var koa    = require('koa'),
    mount  = require('koa-mount'),
    Router = require('koa-router');

var app = module.exports = koa();

var APIv0 = new Router();

APIv0.get('/', function *(){
  this.body = 'Hello from koajs';
});

app.use(mount('/v0', APIv0.middleware()));
app.listen(5000);
