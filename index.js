/* jshint node: true */
'use strict';

var path = require('path');
var Template = require('broccoli-templater');
var stew = require('broccoli-stew');
var funnel = require('broccoli-funnel');
var rename = stew.rename;
var find = stew.find;

var templatePath = path.resolve(__dirname + '/assets/index.js.t');

module.exports = {
  name: 'ember-natural',

  included: function(app) {
    app.import('vendor/natural.js', {
      exports: {
        default: ['default']
      }
    });
  },

  treeForVendor: function() {
    var naturalPath = expand(require.resolve('natural-sdk')).replace('lib/{index.js}', 'dist/natural.js');
    var natural = normalizeFileName(find(naturalPath));

    return natural;
  }
};

function normalizeFileName(tree) {
  return rename(tree, function() {
    return 'natural.js';
  });
}

function expand(input) {
  var dirname = path.dirname(input);
  var file = path.basename(input);

  return dirname + '/{' + file + '}';
}
