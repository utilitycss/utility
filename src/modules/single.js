const defineClass = require("../util/defineClass");
const responsive = require("../util/responsive");

const meta = {
  module: "single"
};

module.exports = config => globalConfig => {
  const { className, props, isResponsive = false } = config || {};

  const { breakPointSeparator = "", breakPoints = {} } = globalConfig || {};

  const single = [defineClass(className, props, meta)];

  if (isResponsive) {
    return single.concat(
      responsive(single, breakPoints, {
        breakPointSeparator
      })
    );
  }

  return single;
};
