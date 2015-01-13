define(function(require, exports) {
  var angular = require('angular');
  var ngResource = require('ngResource');

  var testServices = angular.module('test-service', ['ngResource']);
  require('services/userService')(testServices);
});