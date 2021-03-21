/**
 * =========
 * CSS "height" module definitions.
 * =========
 * */
const heightConfig = {
  /**
   * Supported CSS definitions
   *
   * Define identifiers for each declaration based on your preference.
   * Defaults to https://docs.emmet.io/cheat-sheet/
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
   * want it to be included in the output
   * **/
  whitelist: [
    /** height:; **/
    "h",
    /** height:auto; **/
    "h:a",
    /** max-height:; **/
    "mah",
    /** max-height:none; **/
    "mah:n",
    /** min-height:; **/
    "mih",
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
    /** height:; **/
    "h",
    /** height:auto; **/
    "h:a",
    /** max-height:; **/
    "mah",
    /** max-height:none; **/
    "mah:n",
    /** min-height:; **/
    "mih",
  ],
  /**
   * List of responsive definitions to exclude.
   * If the number of exclusions is very minimal
   * use this config instead of "responsiveWhiteList"
   * **/
  responsiveBlackList: [],
  pseudoClasses: {
    /** height:; **/
    h: [":hover", ":focus", ":active"],
    /** height:auto; **/
    "h:a": [":hover", ":focus", ":active"],
    /** max-height:; **/
    mah: [":hover", ":focus", ":active"],
    /** max-height:none; **/
    "mah:n": [":hover", ":focus", ":active"],
    /** min-height:; **/
    mih: [":hover", ":focus", ":active"],
  },
};

module.exports = heightConfig;
