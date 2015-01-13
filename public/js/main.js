require.config({
  paths: {
    angular: '../libs/angular/angular',
    jquery: '../libs/jquery',
    ngRoute: '../libs/angular/angular-route',
    ngSanitize: '../libs/angular/angular-sanitize',
    ngResource: '../libs/angular/angular-resource'
  },
  shim: {
    jquery: {
      exports: '$'
    },
    angular: {
      exports: 'angular',
      deps: ['jquery']
    },
    ngRoute: ['angular'],
    ngSanitize: ['angular'],
    ngResource: ['angular']
  }
});

require(['app'], function(testApp) {
  testApp.start();
});