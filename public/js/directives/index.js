define(function(require, exports) {
  var angular = require('angular');
  var testDirectives = angular.module('test-directives', []);

  require('directives/dialog')(testDirectives);
});