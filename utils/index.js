const path = require('path');
const fs = require('fs');

function getPublicKey () {
  return fs.readFileSync(path.join(__dirname, '../publicKey.pub'));
}

module.exports = {
  getPublicKey
};