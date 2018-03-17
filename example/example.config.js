const path = require("path");
const {
  plugins: { docs },
  util: { defineClass },
  modules: { font }
} = require("../src/index");

const breakPoints = {
  ns: "screen and (min-width: 48rem)",
  m: "screen and (min-width: 48rem) and (max-width: 80rem)",
  l: "screen and (min-width: 80rem)"
};

const plugins = [
  docs({
    output: path.join(__dirname, "/dist/docs.html"),
    openFile: true
  })
];

const modules = [
  font({
    names: { fz: "f" },
    whitelist: ["fw:b", "fz", "ff"],
    fontSizeValues: [
      "0.875rem",
      "1rem",
      "1.125rem",
      "1.25rem",
      "1.375rem",
      "1.5rem",
      "1.625rem",
      "1.75rem",
      "1.875rem",
      "2rem"
    ],
    isResponsive: true
  })
];

module.exports = {
  config: {
    breakPoints,
    breakPointSeparator: "_"
  },
  modules,
  plugins
};
