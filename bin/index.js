#!/usr/bin/env node

const program = require('commander');
const fs = require('fs');
const prompts = require('prompts');
const shell = require('shelljs');
const dot = require('dot-object');
const log = require('great-logs');

const APP_FOLDER = `${__dirname}/..`;
const EXCLUDED_FOLDERS = new Set([
  '.git',
  'node_modules',
  'dist',
  'template',
  'package-lock.json'
]);
const PACKAGE_INFO = JSON.parse(fs.readFileSync(`${APP_FOLDER}/package.json`));

const GENERATE_MODULE_QUESTIONS = [
  {
    type: 'text',
    name: 'name',
    message: 'Name of the package',
    validate: v => v.trim().length > 0
  },
  {
    type: 'text',
    name: 'description',
    message: 'Description of the package',
    validate: v => v.trim().length > 0
  },
  {
    type: 'text',
    name: 'license',
    message: 'License type',
    initial: 'MIT',
    validate: v => v.trim().length > 0
  },
  {
    type: 'text',
    name: 'author.name',
    message: "What's your name?",
    initial: ''
  },
  {
    type: 'text',
    name: 'author.email',
    message: "What's your email?",
    initial: ''
  },
  {
    type: 'text',
    name: 'author.url',
    message: "What's your website url?",
    initial: ''
  },
  {
    type: 'text',
    name: 'author.git',
    message: "What's your GitHub repo?",
    initial: ''
  }
];

program.command('start').action(async () => generateModule());

async function generateModule() {
  try {
    fs.readFileSync('package.json');
    console.error('This folder already has a package.json');
    process.exit(-1);
  } catch {
    const response = await prompts(GENERATE_MODULE_QUESTIONS);
    copyFiles();
    const packageInfo = { ...PACKAGE_INFO, ...dot.object(response) };
    delete packageInfo.dependencies['dot-object'];
    delete packageInfo.dependencies['shelljs'];
    const packageInfoText = JSON.stringify(packageInfo, null, 2);
    fs.writeFileSync('package.json', packageInfoText, 'utf8');
  }
}

function copyFiles() {
  const files = fs.readdirSync(APP_FOLDER);
  for (const file of files) {
    if (EXCLUDED_FOLDERS.has(file)) {
    } else {
      shell.exec(`cp -r ${APP_FOLDER}/${file} ./`);
      log.info('copying: %s', file);
    }
  }
}

program.parse(process.argv);

if (process.argv.length === 2) {
  generateModule();
}
