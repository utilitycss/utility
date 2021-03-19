import {
  UtilityConfig,
  PseudoClass,
  PSEUDO_CLASS,
  GenericObject,
  BuilderConfigVariable,
} from "../types";
import prettier from "prettier";
import { camelCase } from "lodash";

import emmetConfig from "./emmetConfig.json";

type Output = UtilityConfig<Record<string, unknown>>;
type ObjectType = {
  [key: string]: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stringify = (input: any): string => JSON.stringify(input, null, 2);

interface Input {
  moduleName: string;
  names: GenericObject;
  configVariables?: BuilderConfigVariable[];
}
type ConfigBuild = (input: Input) => string;

const configBuild: ConfigBuild = ({
  moduleName,
  names,
  configVariables = [],
}) => {
  const mainConfig: Output = {
    names: Object.keys(names).reduce((acc, curr) => {
      acc[curr] = curr;
      return acc;
    }, {} as Record<string, string>),
    whitelist: Object.keys(names),
    blacklist: [],
    isResponsive: false,
    responsiveWhiteList: Object.keys(names),
    responsiveBlackList: [],
    pseudoClasses: Object.keys(names).reduce((acc, curr) => {
      acc[curr] = Object.values(PSEUDO_CLASS);
      return acc;
    }, {} as Record<string, PseudoClass[]>),
  };

  const configName = camelCase(`${moduleName}-config`);

  return prettier.format(
    `
/**
 * =========
 * CSS "${moduleName}" module definitions.
 * =========
 * */
const ${configName} = {
    /** 
     * Supported CSS definitions
     * **/
    names: {
    ${Object.keys(mainConfig.names)
      .map((key) => {
        return `
/** ${(emmetConfig as ObjectType)[key]} **/
            "${key}": "${mainConfig.names[key]}",`;
      })
      .join("")}
    },
    ${configVariables
      .map(
        ({ name, variable }) => `
      /**
       * Variables for ${(emmetConfig as ObjectType)[name]}
       * 
       * eg., {
       *  [key]: [value];
       * }
       * */
      ${variable}: {},`
      )
      .join("")}
    /** 
     * List of definitions to include.
     * Remove items from this list if you do not 
     * want it to be
     *  included in the output
     * **/
    whitelist: ${stringify(mainConfig.whitelist)},
    /** 
     * List of definitions to exclude.
     * If the number of exclusions is very minimal 
     * use this config instead of "whitelist"
     * **/
    blacklist: ${stringify(mainConfig.blacklist)},
    /** 
     * Flag to enable definitions with responsive 
     * breakpoints
     * **/
    isResponsive: ${stringify(mainConfig.isResponsive)},
    /** 
     * List of responsive definitions to include 
     * Remove items from this list if you do not 
     * want it to be
     *  included in the output
     * **/
    responsiveWhiteList: ${stringify(mainConfig.responsiveWhiteList)},
    /** 
     * List of responsive definitions to exclude.
     * If the number of exclusions is very minimal 
     * use this config instead of "responsiveWhiteList"
     * **/
    responsiveBlackList: ${stringify(mainConfig.responsiveBlackList)},
}

module.exports = ${configName};
`,
    {
      parser: "typescript",
    }
  );
};

export default configBuild;
