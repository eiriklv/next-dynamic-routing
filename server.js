/**
 * Frontend server
 */
const next = require('next');
const express = require('express');
const config = require('./next.config.js');
const routes = require('./routes');
const { parse } = require('url');
const pathToRegexp = require('path-to-regexp');
const port = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === 'production';

/**
 * Configure Next
 */
const app = next({
  dev: !isProduction,
  dir: './',
  conf: { ...config },
});

/**
 * Create route handler
 */
const handler = routes.getRequestHandler(app);

/**
 * Serve app
 */
app
.prepare()
.then(() => {
  const server = express();
  server.use(handler).listen(port);
  console.log(`Frontend on port ${port} 🚀 -> is production: ${isProduction}`);
})
.catch((error) => {
  console.error(error)
})
