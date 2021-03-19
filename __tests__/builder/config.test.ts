import * as assert from "assert";
import configBuilder from "../../dist/builder/config";

import { promises as fsAsync } from "fs";
import path from "path";

import { defaultNames as clearDefaultNames } from "../../dist/modules/clear";
import {
  defaultNames as heightDefaultNames,
  configVariables as heightConfigVariables,
} from "../../dist/modules/height";

describe("Config builder", () => {
  it("should build clear module config", async () => {
    const output = configBuilder({
      moduleName: "clear",
      names: clearDefaultNames,
    });

    const expected = await fsAsync.readFile(
      path.join(__dirname, "./fixtures/clear.ts"),
      "utf-8"
    );

    /** Check the transformed file with the expected file */
    assert.strictEqual(expected, output);
  });

  it.only("should build clear module config", async () => {
    const output = configBuilder({
      moduleName: "height",
      names: heightDefaultNames,
      configVariables: heightConfigVariables,
    });

    const expected = await fsAsync.readFile(
      path.join(__dirname, "./fixtures/height.ts"),
      "utf-8"
    );

    /** Check the transformed file with the expected file */
    assert.strictEqual(expected, output);
  });
});
