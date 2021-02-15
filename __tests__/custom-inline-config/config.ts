import path from "path";
import { plugins, modules } from "../../src/index";
import { PluginConfig } from "../../src/types";

const { docs, json } = plugins;
const { font, colors, border, boxShadow } = modules;

const breakPoints = {
  s: "screen and (min-width: 48rem)",
  m: "screen and (min-width: 48rem) and (max-width: 80rem)",
  l: "screen and (min-width: 80rem)",
};

const configPlugins = [
  json({
    output: path.join(__dirname, "/dist/modules.json"),
  }),
  docs({
    output: path.join(__dirname, "/dist/docs.html"),
    openFile: true,
  }),
];

const configModules = [
  boxShadow({
    names: {
      "bxsh:n": "boxShadowNone",
      bxsh: "boxShadow",
    },
    boxShadowValues: {
      xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    },
    whitelist: ["bxsh:n", "bxsh"],
  }),
  border({
    names: {
      "bd:w": "borderWidth",
      "bd:s": "borderStyle",
      "bd:n": "borderNone",
    },
    whitelist: ["bd:w", "bd:s", "bd:n"],
    borderStyleValues: ["solid", "dotted"],
    borderWidthValues: ["1px", "2px"],
    pseudoClasses: { "bd:n": [":hover"] },
    isResponsive: true,
    responsiveWhiteList: ["bd:n"],
  }),
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
      "2rem",
    ],
    isResponsive: true,
  }),
  colors({
    nestedRules: {
      ".dark {}": {
        whitelist: ["c"],
        isResponsive: true,
        colorValues: {
          black: "#ffffff",
          white: "#1a1a1a",
        },
      },
      "@media foo": {
        whitelist: ["c"],
        colorValues: {
          black: "#ffffff",
          white: "#1a1a1a",
        },
      },
    },
    whitelist: ["c", "bgc", "bdc"],
    pseudoClasses: { c: [":hover"], bgc: [":hover", ":active"] },
    colorValues: {
      orange: "#ff6900",
      black: "#1a1a1a",
      white: "#ffffff",
      grey: "#777777",
      grey2: "#a5a5a5",
      grey3: "#dddddd",
      red: "#ce3535",
      green: "#0f7e4a",
      blue: "#0062b4",
    },
    backgroundColorValues: {
      white: "#f3f3f3",
      pink: "#fde5e5",
      green: "#e0f3ea",
      yellow: "#fffdc0",
    },
    borderColorValues: {
      orange: "#ff6900",
      black: "#1a1a1a",
      white: "#ffffff",
      grey: "#a5a5a5",
      green: "#0f7e4a",
      red: "#ce3535",
    },
  }),
];

const moduleConfig: PluginConfig = {
  config: {
    breakPoints,
    seriesSeparator: "",
    breakPointSeparator: "_",
    pseudoClassesSeparator: "_",
  },
  plugins: configPlugins,
  modules: configModules,
};

export default moduleConfig;
