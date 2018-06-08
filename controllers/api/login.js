const jwt = require('jsonwebtoken');
const util = require('../../utils');

const secret = util.getPublicKey();

const login = async (ctx) => {
  const user = ctx.request.body;

  if (user && user.name) {
    const userToken = {
      name: user.name
    };
    const token = jwt.sign(userToken, secret, {expiresIn: '1h'}); // token签名 有效期为1小时
    ctx.body = {
      message: '获取token成功',
      token
    };
  } else {
    ctx.body = {
      message: '参数错误'
    };
  }
};

module.exports = login;