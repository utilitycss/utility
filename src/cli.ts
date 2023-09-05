#!/usr/bin/env ts-node

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require("debug")("utility:cli");

import program from "commander";
import postcss from "postcss";
import chalk from "chalk";
import path from "path";
import fs from "fs";
import { promises as fsAsync } from "fs";
import builder from "./index";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require("../package.json");

program.version(packageJson.version).usage("<command> [<args>]");

program
  .command("init [filename]")
  .usage("[options] [filename]")
  .action((fileName = "utility.config.js") => {
    let configFile = path.resolve(fileName);

    if (!path.extname(fileName).includes(".js")) {
      configFile += ".js";
    }

    if (fs.existsSync(configFile)) {
      // eslint-disable-next-line no-console
      console.error(
        chalk.red(`Destination ${configFile} already exists, aborting.`)
      );
      process.exit(1);
    }

    const output = fs.readFileSync(
      path.resolve(__dirname, "../utility.config.default.js"),
      "utf8"
    );
    fs.writeFileSync(configFile, output);
    debug(`Generated config file: ${configFile}`);
  });

program
  .command("build [filename]")
  .usage("[options] [filename]")
  .option("-c, --config [path]", "Path to config file")
  .option("-o, --output [path]", "Output file")
  .action(async (fileName, options) => {
    const input = fileName
      ? await fsAsync.readFile(path.resolve(fileName), "utf-8")
      : await fsAsync.readFile(
          path.resolve(__dirname, "../bootstrap.css"),
          "utf-8"
        );

    const write = options.output
      ? async (data: string) => await fsAsync.writeFile(options.output, data)
      : async (data: string) => process.stdout.write(data);

    let config;
    const localConfig = path.resolve("utility.config.js");

    if (options.config) {
      config = require(path.resolve(options.config));
    } else if (fs.existsSync(localConfig)) {
      config = require(localConfig);
    } else {
      config = require(path.resolve(__dirname, "../utility.config.default.js"));
    }

    // eslint-disable-next-line no-console
    debug("Building CSS bundle...");
    postcss([builder(config)])
      .process(input)
      .then(async (result: any) => {
        await write(result.css);
        // eslint-disable-next-line no-console
        debug("Success!");
      })
      // eslint-disable-next-line no-console
      .catch((e: Error) => console.error(chalk.red(e)));
  });

program.command("*", null, { noHelp: true }).action(() => {
  program.help();
});

program.parse(process.argv);

if (program.args.length === 0) {
  program.help();
}
