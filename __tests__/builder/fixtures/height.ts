/**
 * =========
 * CSS "height" module definitions.
 * =========
 * */
const heightConfig = {
  /**
   * Supported CSS definitions
   * **/
  names: {
    /** height:; **/
    h: "h",
    /** height:auto; **/
    "h:a": "h:a",
    /** max-height:; **/
    mah: "mah",
    /** max-height:none; **/
    "mah:n": "mah:n",
    /** min-height:; **/
    mih: "mih",
  },

  /**
   * Variables for height:;
   *
   * eg., {
   *  [key]: [value];
   * }
   * */
  heightValues: {},
  /**
   * Variables for max-height:;
   *
   * eg., {
   *  [key]: [value];
   * }
   * */
  maxHeightValues: {},
  /**
   * Variables for min-height:;
   *
   * eg., {
   *  [key]: [value];
   * }
   * */
  minHeightValues: {},
  /**
   * List of definitions to include.
   * Remove items from this list if you do not
   * want it to be
   *  included in the output
   * **/
  whitelist: ["h", "h:a", "mah", "mah:n", "mih"],
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
  responsiveWhiteList: ["h", "h:a", "mah", "mah:n", "mih"],
  /**
   * List of responsive definitions to exclude.
   * If the number of exclusions is very minimal
   * use this config instead of "responsiveWhiteList"
   * **/
  responsiveBlackList: [],
};

module.exports = heightConfig;
