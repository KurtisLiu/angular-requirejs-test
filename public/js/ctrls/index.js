define(function(require, exports) {
  var angular = require('angular');
  var testServices = require('services/index');
  var testDirectives = require('directives/index');

  var testCtrls = angular.module('test-ctrls', ['test-service', 'test-directives']);

  require('ctrls/userCtrls')(testCtrls);
});