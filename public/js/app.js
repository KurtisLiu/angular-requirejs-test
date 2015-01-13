define(function(require, exports) {
  require('angular');
  require('ngRoute');
  require('ctrls/index');

  var testApp = angular.module('testApp', ['ngRoute', 'test-ctrls']);

  testApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/users', {
        templateUrl: '/tpls/users.html',
        controller: 'userCtrl'
      })
      .otherwise({
        redirectTo: '/users'
      });

  }]);

  testApp.start = function() {
    angular.bootstrap(document, ['testApp']);
  }

  return testApp;
});