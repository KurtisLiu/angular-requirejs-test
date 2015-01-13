var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/.*Spec\.js$/i.test(file)) {
      tests.push(file);
    }
  }
}

require.config({
  baseUrl: '/base/public/js',
  paths: {
    angular: '../libs/angular/angular',
    jquery: '../libs/jquery',
    ngRoute: '../libs/angular/angular-route',
    ngSanitize: '../libs/angular/angular-sanitize',
    ngResource: '../libs/angular/angular-resource',
    ngMocks: '../../test/libs/angular-mocks',
    testUtils: '../../test/libs/testUtils',
    dialogTpl: '../tpls/directives/dialog.html'
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
    ngResource: ['angular'],
    ngMocks: ['angular'],
    dialogTpl: ['angular']
  },
  deps: tests,
  callback: window.__karma__.start
});