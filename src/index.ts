import fs from "fs";
import chalk from "chalk";
import path from "path";
import { AtRule } from "postcss";
import deepmerge from "deepmerge";

import computeStyles from "./util/computeStyles";

const AT_RULE_NAME = "utility";
const DEFAULT_CONFIG_PATH = "./utility.config.default";

import { PluginConfig } from "./types";

function utilityPlugin(config?: PluginConfig) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const defaultConfig = require(DEFAULT_CONFIG_PATH).default;
  const {
    plugins = [],
    modules = [],
    config: globalConfig = {},
    forceInsert = false,
  } = config || defaultConfig;
  return {
    postcssPlugin: "utility",
    AtRule: {
      [AT_RULE_NAME]: async (atRule: AtRule) => {
        const {
          /**
           * This give the full path of the file
           * the plugin is running. Helps to fetch the custom config
           */
          source: { input: { file: sourceFilename } = {} } = {},
          params,
        } = atRule;

        /** Kept this as an mutable array */
        let modulesToGenerate = [];

        const { dir: sourceDirname } = path.parse(sourceFilename);

        /**
         * Check if params is empty before considering to build all the
         * modules as part of the config file which was sent
         */
        if (params) {
          /**
           * ------------------------------
           * NEEDS IMPLEMENTATION -  ADDED PLUGIN SUPPORT
           * ------------------------------
           * Can rely on this check since postcss always give is a string
           */
          const [moduleName, moduleConfigFile] = params.split(" ");
          /**
           * @utility <module-name> <module-config-file>;
           * map[<module-name>] = <module-config-file>
           */
          let moduleConfig = {};
          const modulePath = moduleName
            ? require.resolve(path.join(__dirname, `./modules/${moduleName}`))
            : "";
          const moduleConfigPath = moduleConfigFile
            ? path.join(sourceDirname, moduleConfigFile)
            : "";

          console.log(modulePath, moduleName, path.resolve(modulePath));

          /**
           * Exit if the module name or
           * the provided module name is not supported
           */
          if (moduleName && !fs.existsSync(modulePath)) {
            // eslint-disable-next-line no-console
            console.log(
              chalk.red(`Module => ${moduleName} : is not supported`)
            );
            process.exit(-1);
          }
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          const moduleFunction = require(modulePath).default;
          /**
           * Deep merge the config if user has provided custom
           * config file
           */
          if (moduleConfigPath && fs.existsSync(moduleConfigPath)) {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const customModuleConfig = require(moduleConfigPath);
            /**
             * Using deepmerge here
             * https://github.com/KyleAMathews/deepmerge
             */
            moduleConfig = deepmerge(moduleConfig, customModuleConfig);
          }
          // Push.
          modulesToGenerate.push(moduleFunction(moduleConfig));
        } else {
          /**
           * This means the user has provided a config which has everything
           * Blindly reply on the config send to the plugin
           */
          modulesToGenerate = [].concat(modules);
        }

        const computedStyles = await computeStyles({
          modules: modulesToGenerate,
          plugins,
          config: globalConfig,
        });

        atRule.before(computedStyles);
        atRule.remove();
      },
    },
  };
}

export default utilityPlugin;

export const postcss = true;

export * as plugins from "./plugins";
export * as modules from "./modules";
export { default as util } from "./util";
