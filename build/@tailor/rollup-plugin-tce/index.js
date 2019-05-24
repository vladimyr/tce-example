'use strict';

const { readFileSync } = require('fs');
const { render } = require('mustache');
const { package: pkg, path: packagePath } = require('read-pkg-up').sync();
const path = require('path');
const virtual = require('rollup-plugin-virtual');

const PLUGIN_ENTRY = require.resolve('./__plugin__');
const TCE_REGISTRY = '__TAILOR_CONTENT_ELEMENTS__';

const moduleName = name => [TCE_REGISTRY, name].join('.');
const normalize = modulePath => path.resolve(process.cwd(), modulePath);

module.exports = () => ({
  options(options) {
    // Create virtual entry module.
    const name = path.basename(PLUGIN_ENTRY, path.extname(PLUGIN_ENTRY));
    const template = readFileSync(PLUGIN_ENTRY, 'utf-8');
    const code = render(template, {
      packagePath: normalize(packagePath),
      sourcePath: normalize(options.input[0])
    });
    options.plugins.push(virtual({ [name]: code }));
    // Set `options.input` to newly created entry.
    const input = { [pkg.name]: name };
    return Object.assign(options, { input });
  },
  outputOptions(options) {
    const name = moduleName(pkg.name);
    return Object.assign(options, { name });
  }
});
