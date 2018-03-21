module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  env: {
    es6: true,
    node: true
  },
  extends: ["eslint:recommended", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error"
  }
};
