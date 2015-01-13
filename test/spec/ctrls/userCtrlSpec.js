define(['testUtils', 'angular', 'ngMocks', 'ctrls/index'], function(testUtils) {
  describe('test user controllers', function() {
    var $rootScope;
    var $controller;
    var $httpBackend;

    beforeEach(function() {
      angular.mock.module('test-ctrls');
      angular.mock.inject(function($injector) {
        $rootScope = $injector.get('$rootScope');
        $controller = $injector.get('$controller');
        $httpBackend = $injector.get('$httpBackend');
      })
    });

    it('test user list', function() {
      $httpBackend.when('GET', '/users').respond(testUtils.mockedData.users);

      var $scope = $rootScope.$new();
      var userCtrl = $controller('userCtrl', {$scope: $scope});
      $httpBackend.flush();
      expect($scope.users.length).toBe(3);
    });
  });
});