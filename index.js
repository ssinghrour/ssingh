/** Main Class
* @author Sarvesh Singhrour
* @version 0.0.1
*/

const Koa = require('koa');
const app = new Koa();
const Logger = require('./logger.js');
const Router = require('./routers.js');
const responseHeaders = require('./responseHeaders.js');
const compose = require('koa-compose');

// x-response-time, moved to responseHeaders.js
/*app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time' , `${ms}ms`);
});*/

// logger -- moved this funtion to logger.js
/*app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});*/

app.use(responseHeaders.setResponseTime());

const allLoggers = compose([Logger.logMethod(), Logger.logTime()]);
app.use(allLoggers);

const allRouters = compose([Router.home(), Router.random(), Router.pi()]);
app.use(allRouters);

/*app.use(async ctx => {
  ctx.body = 'Hello World from Sample Koa App';
});*/
/**
*/
app.listen(process.env.PORT || 3000);
