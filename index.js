var koa          = require('koa'),
    mount        = require('koa-mount'),
    Router       = require('koa-router'),
    responseTime = require('koa-response-time'),
    logger       = require('koa-logger'),
    redisModule  = require('redis'),
    application  = require('./lib/config/application'),
    mongo        = require('./lib/db/mongo'),
    redis        = require('./lib/db/redis'),
    app          = koa();

module.exports = app;

// Set environment
var env = process.env.NODE_ENV || 'development';

// Set environment configs
app.config = application(env);

// Set mongodb connection
mongo.setMongo(app);

// logging
app.use(logger());

// x-response-time
app.use(responseTime());

// API versioning and routing
var APIv0 = new Router();

APIv0.get('/', function *(){
  this.body = 'Hello from koajs';
});
APIv0.get('/mongo', mongo.users);
APIv0.get('/redis', function *(){
  redis.set("string key", "string val", redisModule.print);
  redis.get("string key", function(err, reply) {
    console.log(reply);
  });
  this.body = 'Looks like redis is working';
});

app.use(mount('/v0', APIv0.middleware()));

// assign port number
app.listen(app.config.node.port);
