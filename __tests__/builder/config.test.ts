import configBuilder from "../../dist/builder/config";

import { defaultNames as clearDefaultNames } from "../../dist/modules/clear";

describe("Config builder", () => {
  it.only("should build a empty config", () => {
    const output = configBuilder<Record<string, string>, any>(
      clearDefaultNames,
      {}
    );

    console.log(output);
  });
});
