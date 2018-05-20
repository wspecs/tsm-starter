"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var replace = require('replace');
var shell = require('shelljs');
var minimist = require('minimist');
var ARGV = minimist(process.argv.slice(2));
exports.CONFIG_PATH = '~/.tsm_starter';
// path for the tsm starter files used to generate module.
exports.TEMPLATE_FOLDER = path_1.join(__dirname, '/../../template');
exports.DEFAULT_CONFIG = {
    author: {
        name: 'Author Name',
        email: 'author@email.com',
        url: '',
    }
};
function validateConfig(config) {
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
exports.validateConfig = validateConfig;
function readArgs(config) {
    try {
        config = __assign({}, config, JSON.parse(fs_1.readFileSync(ARGV.config || exports.CONFIG_PATH, 'utf8')));
    }
    catch (_a) {
        console.log('failed to read config');
    }
    return __assign({}, config);
}
exports.readArgs = readArgs;
function generate(config) {
    var args = readArgs(config);
    validateConfig(args);
    if (fs_1.existsSync(args.destination)) {
        throw new Error(args.destination + " already exists.");
    }
    shell.exec("mkdir -p " + exports.TEMPLATE_FOLDER);
    shell.exec("cp -r " + exports.TEMPLATE_FOLDER + " " + args.destination);
    var replacements = [
        { original: 'tsm.repository', replacement: args.repository },
        { original: 'tsm.name', replacement: args.name },
        { original: 'tsm.author.name', replacement: args.author.name },
        { original: 'tsm.author.email', replacement: args.author.email },
        { original: 'tsm.author.url', replacement: args.author.url }
    ];
    for (var _i = 0, replacements_1 = replacements; _i < replacements_1.length; _i++) {
        var rep = replacements_1[_i];
        replace({
            regex: rep.original,
            replacement: rep.replacement,
            paths: ["" + args.destination],
            recursive: true,
        });
    }
    shell.exec("cd " + args.destination);
    shell.exec('npm install');
}
exports.generate = generate;
