import path from "path";
import { promises as fsAsync } from "fs";
import prettier from "prettier";
import * as assert from "assert";
import postcss from "postcss";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettydiff = require("prettydiff");

import utility, { plugins as availablePlugins } from "../../src/index";
import defaultConfig from "../../src/utility.config.default";
const { docs } = availablePlugins;
const plugins = [
  docs({
    output: path.join(__dirname, "./dist/docs.html"),
  }),
];

describe("Default with docs", () => {
  it("should transform css for default options + docs", async () => {
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
    /** Read the expected HTML file from fixtures */
    const expectedHTML = await fsAsync.readFile(
      path.join(__dirname, "./fixtures/expected-docs.html"),
      "utf-8"
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

    const generateHTML = await fsAsync.readFile(
      path.join(__dirname, "./dist/docs.html"),
      "utf-8"
    );

    /** Get the diff  */
    const htmlDiffOutput = prettydiff({
      source: expectedHTML,
      mode: "diff",
      diff: generateHTML,
      lang: "html",
    });
    /** Check the transformed file with the expected file */
    assert.strictEqual(generatedCss, expectedCss);

    /** Check if the length of diff is zero */
    assert.strictEqual(htmlDiffOutput.length, 0);
  });
});
