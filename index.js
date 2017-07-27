/* jshint node: true */
'use strict';
var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-tinycolor',
  included() {
    this._super.included.apply(this, arguments);
    this.import('vendor/tinycolor.js');
    this.import('vendor/shims/tinycolor.js');
  },
  treeForVendor(vendorTree) {
    var tinyColorTree = new Funnel(path.dirname(require.resolve('tinycolor2')), {
      files: ['tinycolor.js'],
    });

    return new MergeTrees([vendorTree, tinyColorTree]);
  },
};
