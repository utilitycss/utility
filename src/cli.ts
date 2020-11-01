#!/usr/bin/env ts-node
import program from "commander";
import postcss from "postcss";
import chalk from "chalk";
import path from "path";
import fs from "fs";
import { builder } from "../";

import packageJson from "../package.json";

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
    // eslint-disable-next-line no-console
    console.log(chalk.green(`Generated config file: ${configFile}`));
  });

program
  .command("build [filename]")
  .usage("[options] [filename]")
  .option("-c, --config [path]", "Path to config file")
  .option("-o, --output [path]", "Output file")
  .action((fileName, options) => {
    const input = fileName
      ? fs.readFileSync(path.resolve(fileName), "utf-8")
      : fs.readFileSync(path.resolve(__dirname, "../bootstrap.css"), "utf-8");

    const write = options.output
      ? (data) => fs.writeFileSync(options.output, data)
      : (data) => process.stdout.write(data);

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
    console.log(chalk.blue("Building CSS bundle..."));
    postcss([builder(config)])
      .process(input)
      .then((result) => {
        write(result.css);
        // eslint-disable-next-line no-console
        console.log(chalk.green("Success!"));
      })
      // eslint-disable-next-line no-console
      .catch((e) => console.error(chalk.red(e)));
  });

program.command("*", null, { noHelp: true }).action(() => {
  program.help();
});

program.parse(process.argv);

if (program.args.length === 0) {
  program.help();
}
