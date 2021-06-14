import path from "path";
import fs, { promises as fsAsync } from "fs";
import prettier from "prettier";
import * as assert from "assert";
import postcss from "postcss";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const assertDiff = require("assert-diff");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettydiff = require("prettydiff");

import utility, { plugins as availablePlugins } from "../../src/index";
import defaultConfig from "../../src/utility.config.default";
const { docs, json } = availablePlugins;
const plugins = [
  json({
    output: path.join(__dirname, "./dist/modules.json"),
  }),
];

const waitForFile = (path: string) =>
  new Promise<void>(async (resolve) => {
    while (!fs.existsSync(path)) {
      await new Promise((a) => setTimeout(a, 50));
    }
    await new Promise((a) => setTimeout(a, 0));
    resolve();
  });

describe("Default with json", () => {
  it("should transform css and module json", async () => {
    /** Path to the input css file */
    const cssFilePath = path.join(__dirname, "./main.css");
    /** Dummy output file */
    const cssOutputFilePath = path.join(__dirname, "./main-out.css");
    /** Read the expected css file from fixtures */
    const expectedCss = await fsAsync
      .readFile(path.join(__dirname, "./fixtures/expected.css"), "utf-8")
      .then((data) =>
        prettier.format(data, {
          parser: "css",
        })
      );
    /** Read the expected JSON file from fixtures */
    const expectedJSON = JSON.parse(
      await fsAsync.readFile(
        path.join(__dirname, "./fixtures/expected-modules.json"),
        "utf-8"
      )
    );

    //* Read the input css file */
    const cssFile = await fsAsync.readFile(
      path.join(__dirname, "./main.css"),
      "utf-8"
    );

    /** Transform the css file */
    const generatedCss = await postcss([
      utility({
        config: defaultConfig.config,
        modules: defaultConfig.modules,
        plugins,
      }),
    ])
      .process(cssFile, {
        from: cssFilePath,
        to: cssOutputFilePath,
      })
      .then(({ css }) =>
        prettier.format(css, {
          parser: "css",
        })
      );

    await waitForFile(path.join(__dirname, "./dist/modules.json"));

    const generateJSON = JSON.parse(
      await fsAsync.readFile(
        path.join(__dirname, "./dist/modules.json"),
        "utf-8"
      )
    );

    /** Check the transformed file with the expected file */
    assert.strictEqual(generatedCss, expectedCss);
    /** Check if the length of diff is zero */
    assertDiff.deepEqual(expectedJSON, generateJSON);
  });
});
