/**
 * =========
 * CSS "clear" module definitions.
 * =========
 * */
const clearConfig = {
  /**
   * Supported CSS definitions
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
   * want it to be
   *  included in the output
   * **/
  whitelist: ["cl:n", "cl:l", "cl:r", "cl:b"],
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
   * want it to be
   *  included in the output
   * **/
  responsiveWhiteList: ["cl:n", "cl:l", "cl:r", "cl:b"],
  /**
   * List of responsive definitions to exclude.
   * If the number of exclusions is very minimal
   * use this config instead of "responsiveWhiteList"
   * **/
  responsiveBlackList: [],
};

module.exports = clearConfig;
