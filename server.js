var koa          = require('koa'),
    mount        = require('koa-mount'),
    Router       = require('koa-router'),
    responseTime = require('koa-response-time'),
    logger       = require('koa-logger');

var app = module.exports = koa();

// logging
app.use(logger());

// x-response-time
app.use(responseTime());

// API versioning and routing
var APIv0 = new Router();

APIv0.get('/', function *(){
  this.body = 'Hello from koajs';
});

app.use(mount('/v0', APIv0.middleware()));

// assign port number
app.listen(5000);
