const { arch, platform } = require('os');

try {
  module.exports = require(`./${arch()}-${platform()}.node`);
} catch (err) {
  throw new Error('unsupported arch/platform: ' + err.message);
}