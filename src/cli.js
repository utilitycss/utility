#!/usr/bin/env node
const program = require('commander');
const postcss = require('postcss');
const path = require('path');
const fs = require('fs');
const utility = require('..');

const packageJson = require(path.resolve(__dirname, '../package.json'));

program
  .version(packageJson.version)
  .usage('<command> [<args>]');

program.command('init [filename]')
  .usage('[options] [filename]')
  .action((fileName = 'utility.config.js') => {
    let configFile= path.resolve(fileName);

    if (!path.extname(fileName).includes('.js')) {
      configFile += '.js'
    }

    if (fs.existsSync(configFile)) {
      console.log(`Destination ${configFile} already exists, aborting.`);
      process.exit(1);
    }

    const output = fs.readFileSync(path.resolve(__dirname, '../utility.config.default.js'), 'utf8');
    fs.writeFileSync(configFile, output);
    console.log(`Generated config file: ${configFile}`);
  });

program
  .command('build [filename]')
  .usage('[options] [filename]')
  .option('-c, --config [path]', 'Path to config file')
  .option('-o, --output [path]', 'Output file')
  .action((fileName, options) => {
    const input = fileName
      ? fs.readFileSync(path.resolve(fileName), 'utf-8')
      : fs.readFileSync(path.resolve(__dirname, '../bootstrap.css'), 'utf-8');

    const write = options.output
      ? data => fs.writeFileSync(options.output, data)
      : data => process.stdout.write(data);

    const config = options.config
      ? require(path.resolve(options.config))
      : require(path.resolve(__dirname, '../utility.config.default.js'));

    console.log('Building CSS bundle...');
    postcss([utility(config)])
      .process(input)
      .then(result => {
          write(result.css);
          console.log('Success!');
      })
      .catch(e => console.log(e));
  });

program.command('*', null, { noHelp: true })
  .action(() => {
    program.help()
  });

program.parse(process.argv);

if (program.args.length === 0) {
  program.help();
}