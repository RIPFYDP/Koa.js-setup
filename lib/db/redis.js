var redisModule = require('redis'),
    redis = redisModule.createClient();

redis.on("error", function (err) {
  console.log("Error " + err);
});

module.exports = redis;
