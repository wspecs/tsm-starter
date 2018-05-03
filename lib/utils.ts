import {existsSync, readFileSync, exists} from 'fs';
import {join} from 'path';
const shell = require('shelljs'); 
const minimist = require('minimist')

const ARGV = minimist(process.argv.slice(2));
export const CONFIG_PATH = '~/.tsm_starter'

// path for the tsm starter files used to generate module.
export const TEMPLATE_FOLDER = join(__dirname, '/../../template');
export const DEFAULT_CONFIG = {
  author: {
    name: 'Author Name',
    email: 'author@email.com',
    url: '',
  }
}
export interface TsmConfig {
  name: string;
  destination: string;
  author: {
    name: string;
    email: string;
    url: string;
  };
  repository: string;
  help?: boolean;
}

export function validateConfig(config: TsmConfig) {
  if (!config.destination) {
    throw new Error('missing destination: --help for more info');
  }
  if (!config.name) {
    throw new Error('missing module name: --help for more info');
  }
  if (!config.repository) {
    throw new Error('missing repository name: --help for more info');
  }
  return true;
}

export function readArgs(config: TsmConfig) {
  try {
    config = {...config, ...JSON.parse(readFileSync(
      ARGV.config || CONFIG_PATH, 'utf8'))};
  } catch {
    console.log('failed to read config');
  }
  return {...config};
}

export function generate(config: TsmConfig) {
  const args = readArgs(config);
  validateConfig(args);
  if (existsSync(args.destination)) {
    throw new Error(`${args.destination} already exists.`);
  }
  shell.exec(`mkdir -p ${TEMPLATE_FOLDER}`);
  shell.exec(`cp -r ${TEMPLATE_FOLDER} ${args.destination}`)

  const replacements = [
    {original: 'tsm.repository', replacement: args.repository},
    {original: 'tsm.name', replacement: args.name},
    {original: 'tsm.author.name', replacement: args.author.name},
    {original: 'tsm.author.email', replacement: args.author.email},
    {original: 'tsm.author.url', replacement: args.author.url},
  ];

  shell.exec('echo');
  shell.exec('echo "git init"');
  shell.exec('echo "git add --all"');
  shell.exec('echo "git commit -am init"');
  shell.exec(`echo "git remote add origin https://github.com/${args.repository}/${args.name}.git"`);
  shell.exec(`echo "git push -u origin master"`);

  for (const rep of replacements) {
    console.log(rep);
    shell.exec(`sed -i 's/${rep.original}/${rep.replacement}/g' ${args.destination}/*.*`);
  }
}