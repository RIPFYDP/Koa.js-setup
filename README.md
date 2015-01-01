# Koa.js setup

1. Check that you have node.js installed. `$ node -v`
2. If you don't have node.js, [go here and install node.js](http://nodejs.org/).
3. Install *n*. `$ npm install -g n`.
4. Install the latest node.js that's higher than **0.11.13**. `$ sudo n latest`
5. Create package.json file. `$ echo {} > package.json`
6. Install koa.js `$ npm install koa`
7. Install gulp globally `$ sudo npm install --global gulp`
8. Install mocha globally `$ sudo npm install --global mocha`

## To run the server

`$ node --harmony server.js`

## To run mocha tests

`$ mocha --harmony`

Or using gulp, create the alias below

`$ gulp test`

## Using gulp-mocha-co

We need to create an alias using the command below.

    $ alias gulp='node --harmony `which gulp`'

Follow the [node style guide](https://github.com/felixge/node-style-guide).
