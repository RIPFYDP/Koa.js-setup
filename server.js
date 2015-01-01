var koa = require('koa');

var app = module.exports = koa();

app.use(function *(){
  this.body = 'Hello from koajs';
});

app.listen(5000);
