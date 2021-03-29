import * as assert from "assert";

import { promises as fsAsync } from "fs";
import path from "path";

import { clear, height } from "../../src/modules/sampleConfig";

describe("Config builder", () => {
  it("should build clear module config", async () => {
    const output = clear();

    const expected = await fsAsync.readFile(
      path.join(__dirname, "./fixtures/clear.ts"),
      "utf-8"
    );

    /** Check the transformed file with the expected file */
    assert.strictEqual(expected, output);
  });

  it("should build clear module config", async () => {
    const output = height();

    const expected = await fsAsync.readFile(
      path.join(__dirname, "./fixtures/height.ts"),
      "utf-8"
    );

    /** Check the transformed file with the expected file */
    assert.strictEqual(expected, output);
  });
});
