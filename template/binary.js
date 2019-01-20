#!/usr/bin/env node

const app = require('../dist/index');
const program = require('commander');
const fs = require('fs');
const log = require('great-logs');

const APP_FOLDER = `${__dirname}/..`;
const PACKAGE_INFO = JSON.parse(fs.readFileSync(`${APP_FOLDER}/package.json`));

program
  .version(PACKAGE_INFO.version)
  .command('info')
  .action(async () => log.info(app));

program.parse(process.argv);
