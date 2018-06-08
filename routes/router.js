const Router = require('koa-router');
const controllers = require('../controllers');

const router = new Router({
  prefix: '/api'
});

router
  .post('/login', controllers.api.login);

module.exports = router;