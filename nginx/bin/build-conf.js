#!/usr/bin/env node

const render = require('mustache').render;
const fs = require('fs');
const resolve = require('path').resolve;

const nginxConf = require('../nginx.conf');

const template = fs.readFileSync(resolve(__dirname, '../server.nginx.mustache'), 'utf-8');
const conf = render(template, nginxConf);

fs.writeFileSync(resolve(__dirname, '../server.nginx'), conf);
