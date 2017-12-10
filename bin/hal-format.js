#!/usr/bin/env node

const defaultConfig = require('../config/default.json');
const pkg = require('../package.json');
const program = require('commander');
const tasks = require('../src/tasks.js');

program
  .option('-s, --src <src>', `src for project. [string] [required]`)
  .option(
    '-w, --watch',
    `watch filesystem for changes. [boolean] [default: ${defaultConfig.watch}]`
  )
  .on('--help', () => {
    console.log(`

  Examples:

    One time run format
    $ hal -s src/ format

    Watch files and run format on file change
    $ hal -w -s src/ format
  `);
  })
  .parse(process.argv);

function getFormatOptions(options) {
  if (!options.src) {
    console.error('error: option -s, --src with value is required');
    process.exit(1);
  }

  return Object.freeze({
    src: options.src,
    watch: options.watch || defaultConfig.watch
  });
}

main();
function main() {
  const opt = getFormatOptions(program);
  tasks.format(opt);
}
