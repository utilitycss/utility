import { BuildHelperFunction, Meta } from "../../types";

import configBuilder from "../../builder/config";

import { defaultNames, configVariables } from "./declarations";

/**
 * Module meta data
 */
export const meta: Meta = {
  module: "opacity",
};

/** Helper function to build sample config for this module */
const sampleConfigBuilder: BuildHelperFunction = () =>
  configBuilder({
    moduleName: meta.module,
    names: defaultNames,
    configVariables,
  });

export default sampleConfigBuilder;
