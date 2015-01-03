var koa          = require('koa'),
    mount        = require('koa-mount'),
    Router       = require('koa-router'),
    responseTime = require('koa-response-time'),
    logger       = require('koa-logger'),
    mongo        = require('koa-mongo');

var app = module.exports = koa();

// Set environment
var env = process.env.NODE_ENV || 'development';

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

// Use mongodb
if (env === 'development') {
  app.use(mongo({
    host: 'localhost',
    port: 27017,
    user: 'admin',
    pass: '',
    max: 100,
    min: 1,
    timeout: 30000,
    log: false
  }));
  app.use(function* (next) {
    this.mongo.db('test').collection('data').findOne({}, function (err, doc) {
      console.log(doc);
    });
  });
}

// assign port number
app.listen(5000);
