#!/usr/bin/env node

const program = require('commander');
const fs = require('fs');
const prompts = require('prompts');
const shell = require('shelljs');
const dot = require('dot-object');
const log = require('great-logs');
const os = require('os');

// Default answers for the quesionts.
let defaultAnswers = { author: {} };
try {
  defaultAnswers = JSON.parse(
    fs.readFileSync(`${os.homedir()}/.tsm-starter.json`)
  );
} catch {
  // No default config file
}

const APP_FOLDER = `${__dirname}/..`;
const EXCLUDED_FOLDERS = new Set([
  '.git',
  'node_modules',
  'dist',
  'template',
  'package-lock.json',
  'bin'
]);
const PACKAGE_INFO = JSON.parse(
  fs.readFileSync(`${APP_FOLDER}/package.json`, 'utf8')
);

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
    initial: defaultAnswers.author.name || ''
  },
  {
    type: 'text',
    name: 'author.email',
    message: "What's your email?",
    initial: defaultAnswers.author.email || ''
  },
  {
    type: 'text',
    name: 'author.url',
    message: "What's your website url?",
    initial: defaultAnswers.author.url || ''
  },
  {
    type: 'text',
    name: 'author.git',
    message: "What's your GitHub repo?",
    initial: defaultAnswers.repository
  }
];

program.command('start').action(async () => generateModule());

async function generateModule() {
  const response = await prompts(GENERATE_MODULE_QUESTIONS);
  if (response.name == null || response.description == null) {
    log.error('Failed to create package');
    process.exit(-1);
  }
  const folderName = response.name;
  copyFiles(folderName);
  const packageInfo = {
    ...PACKAGE_INFO,
    ...dot.object(response),
    version: '0.0.1'
  };
  delete packageInfo.dependencies['dot-object'];
  delete packageInfo.dependencies['shelljs'];
  for (const key of Object.keys(packageInfo)) {
    if (key.startsWith('_')) delete packageInfo[key];
  }
  const packageInfoText = JSON.stringify(packageInfo, null, 2).replace(
    /tsm-starter/g,
    response.name
  );
  fs.writeFileSync(`${folderName}/package.json`, packageInfoText, 'utf8');
  log.info('run the following command to continue');
  console.log('******************************');
  console.log(`cd ${folderName}`);
  console.log('npm i');
  console.log('npm run readme');
  console.log('******************************');
}

function copyFiles(folderName) {
  const files = fs.readdirSync(APP_FOLDER);
  shell.exec(`mkdir ./${folderName}`);
  for (const file of files) {
    if (EXCLUDED_FOLDERS.has(file)) {
    } else {
      shell.exec(`cp -r ${APP_FOLDER}/${file} ./${folderName}/`);
      log.info('copying: %s', file);
    }
  }
  shell.exec(`mkdir ./${folderName}/bin`);
  shell.exec(
    `cp -r ${APP_FOLDER}/template/binary.js ./${folderName}/bin/index.js`
  );
  shell.exec(
    `cp -r ${APP_FOLDER}/template/rm.template.md ./${folderName}/.README.md`
  );
}

program.parse(process.argv);

if (process.argv.length === 2) {
  generateModule();
}
