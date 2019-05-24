'use strict';

const path = require('path');

const babel = {
  runtimeHelpers: true
};

const alias = {
  resolve: ['.scss', '.vue', '.js'],
  '@': path.join(__dirname, './src')
};

/** @type {import('bili').Config} */
module.exports = {
  bundleNodeModules: true,
  output: {
    format: ['cjs', 'es', 'iife', 'iife-min'],
    // TODO: Figure out how to fix `rollup-plugin-vue` issue with sourcemaps in
    //       watch mode: https://github.com/vuejs/rollup-plugin-vue/issues/238
    sourceMap: false
  },
  postcss: {
    extract: true
  },
  plugins: {
    tce: true,
    vue: true,
    babel,
    alias
  },
  resolvePlugins: {
    tce: require('./build/@tailor/rollup-plugin-tce')
  }
};
