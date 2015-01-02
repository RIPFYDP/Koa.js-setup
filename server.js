var koa    = require('koa'),
    mount  = require('koa-mount'),
    Router = require('koa-router'),
    logger = require('koa-logger');

var app = module.exports = koa();

// logging
app.use(logger());

// API versioning and routing
var APIv0 = new Router();

APIv0.get('/', function *(){
  this.body = 'Hello from koajs';
});

app.use(mount('/v0', APIv0.middleware()));

// assign port number
app.listen(5000);
