// eslint-disable-next-line @typescript-eslint/no-var-requires
const utility = require("../../dist/index").default;

module.exports = {
  plugins: [utility()],
};
