/**
 * =========
 * CSS "clear" module definitions.
 * =========
 * */
const clearConfig = {
  /**
   * Supported CSS definitions
   *
   * Define identifiers for each declaration based on your preference.
   * Defaults to https://docs.emmet.io/cheat-sheet/
   * **/
  names: {
    /** clear:none; **/
    "cl:n": "cl:n",
    /** clear:left; **/
    "cl:l": "cl:l",
    /** clear:right; **/
    "cl:r": "cl:r",
    /** clear:both; **/
    "cl:b": "cl:b",
  },

  /**
   * List of definitions to include.
   * Remove items from this list if you do not
   * want it to be included in the output
   * **/
  whitelist: [
    /** clear:none; **/
    "cl:n",
    /** clear:left; **/
    "cl:l",
    /** clear:right; **/
    "cl:r",
    /** clear:both; **/
    "cl:b",
  ],
  /**
   * List of definitions to exclude.
   * If the number of exclusions is very minimal
   * use this config instead of "whitelist"
   * **/
  blacklist: [],
  /**
   * Flag to enable definitions with responsive
   * breakpoints
   * **/
  isResponsive: false,
  /**
   * List of responsive definitions to include
   * Remove items from this list if you do not
   * want it to be included in the output
   * **/
  responsiveWhiteList: [
    /** clear:none; **/
    "cl:n",
    /** clear:left; **/
    "cl:l",
    /** clear:right; **/
    "cl:r",
    /** clear:both; **/
    "cl:b",
  ],
  /**
   * List of responsive definitions to exclude.
   * If the number of exclusions is very minimal
   * use this config instead of "responsiveWhiteList"
   * **/
  responsiveBlackList: [],
  pseudoClasses: {
    /** clear:none; **/
    "cl:n": [":hover", ":focus", ":active"],
    /** clear:left; **/
    "cl:l": [":hover", ":focus", ":active"],
    /** clear:right; **/
    "cl:r": [":hover", ":focus", ":active"],
    /** clear:both; **/
    "cl:b": [":hover", ":focus", ":active"],
  },
};

module.exports = clearConfig;
