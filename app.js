const bodyParser = require('koa-bodyparser');
const router = require('./routes/router');
const koaJwt = require('koa-jwt');
const util = require('./utils');
const Koa = require('koa');

const app = new Koa();
const publicKey = util.getPublicKey();

app
  .use(bodyParser())
  .use(koaJwt({ secret: publicKey }).unless({ path: [/^\/api\/login/] }))
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);

console.log('app started at port 3000...');