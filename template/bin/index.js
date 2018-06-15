#!/usr/bin/env node

const lib = require('../dist/index');
const program = require('commander');

// program
  // .version('0.0.1')
  // .command('[name]', 'name of the TS module to generate.')
  // .option('-c, --config [config]', 'Path for the config file')
  // .option('-d, --destination [destination]', 'Where to generates the files.')
  // .action((env, options) => {
  //   generator.generate(Object.assign({}, {name: env}, options));
  // });

// Parse the args for the program
program.parse(process.argv);
