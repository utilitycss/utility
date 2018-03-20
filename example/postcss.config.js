const _ = require("lodash");
const utility = require("../src/index");
const utilityConfig = require("./example.config");

module.exports = {
  plugins: [
    utility(
      Object.assign({}, utilityConfig, {
        forceInsert: _.includes(process.argv, "forceInsert")
      })
    )
  ]
};
