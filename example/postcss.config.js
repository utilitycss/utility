const {
  builder: utility
} = require('../src/index');
const utilityConfig = require('./example.config');

module.exports = {
  plugins: [
    utility(utilityConfig),
  ],
};
