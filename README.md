# Koa.js setup

1. Check that you have node.js installed. `$ node -v`
2. If you don't have node.js, [go here and install node.js](http://nodejs.org/).
3. Install *n*. `$ npm install -g n`.
4. Install the latest node.js that's higher than **0.11.13**. `$ sudo n latest`
5. Install koa.js `$ npm install koa`
6. Install gulp globally `$ sudo npm install --global gulp`
7. Install mocha globally `$ sudo npm install --global mocha`

## To run the server

### New way using live-reloading

`$ gulp server`

### Old way

`$ node --harmony server.js`

The server runs on port 5000, so go to [http://localhost:5000/v0](http://localhost:5000/v0).

## To run mocha tests

`$ npm test`

## Using mongodb

In another terminal, run

`$ mongod`

Make sure this runs.

## Useful links

- [koa.js screencasts](http://knowthen.com/)
- [used to set up live-reloading](http://russmatney.com/techsposure/2014/10/04/basic-koa-api-gulp-supertest/)
