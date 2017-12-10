#!/usr/bin/env node

const defaultConfig = require('../config/default.json');
const pkg = require('../package.json');
const program = require('commander');
const tasks = require('../src/tasks.js');

program
  .option(
    '--env [env]',
    `environment. [string] [default: ${defaultConfig.env}]`
  )
  .option(
    '-t, --template <template>',
    `template for project. [string] [required]`
  )
  .option('-e, --entry <entry>', `entry for project. [string] [required]`)
  .option('-o, --output <output>', `output for project. [string] [required]`)
  .option('-l, --lint <src>', `lint entry folder before build. [string]`)
  .option('-f, --format <src>', `format entry folder before build. [string]`)
  .option(
    '-p, --port [port]',
    `port webpack-dev-server listens on. [integer] [default: ${
      defaultConfig.port
    }]`
  )
  .option(
    '-w, --watch',
    `start development server. [boolean] [default: ${defaultConfig.watch}]`
  )
  .on('--help', () => {
    console.log(`

  Examples:
    Production build
    $ hal build -t src/index.html -e src/app.js -o dist

    Start webpack-dev-server
    $ hal build -w -p 3001 -t src/index.html -e src/app.js -o dist
  `);
  })
  .parse(process.argv);

function getBuildOptions(options) {
  if (!options.template) {
    console.error('error: option -t, --template with value is required');
    process.exit(1);
  }

  if (!options.entry) {
    console.error('error: option -e, --entry with value is required');
    process.exit(1);
  }

  if (!options.output) {
    console.error('error: option -o, --output with value is required');
    process.exit(1);
  }

  return Object.freeze({
    entry: options.entry,
    env: options.env || defaultConfig.env,
    lint: options.lint,
    format: options.format,
    output: options.output,
    port: options.port || defaultConfig.port,
    template: options.template,
    watch: options.watch || defaultConfig.watch
  });
}

main();
function main() {
  const opt = getBuildOptions(program);
  tasks.build(opt);
}