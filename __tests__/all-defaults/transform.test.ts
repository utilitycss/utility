import path from "path";
import { promises as fsAsync } from "fs";
import prettier from "prettier";
import * as assert from "assert";
import postcss from "postcss";

import utility from "../../src/index";

describe("All defaults", () => {
  it("should transform css for default options", async () => {
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
    //* Read the input css file */
    const cssFile = await fsAsync.readFile(
      path.join(__dirname, "./main.css"),
      "utf-8"
    );

    /** Transform the css file */
    const generatedCss = await postcss([utility()])
      .process(cssFile, {
        from: cssFilePath,
        to: cssOutputFilePath,
      })
      .then(({ css }) =>
        prettier.format(css, {
          parser: "css",
        })
      );
    /** Check the transformed file with the expected file */
    assert.strictEqual(generatedCss, expectedCss);
  });
});
