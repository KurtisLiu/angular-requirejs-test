define(['ngMocks', 'services/index', 'testUtils'], function(ngMocks, services, testUtils) {
  describe('test user service', function() {
    var $httpBackend;
    var userService;

    beforeEach(function() {
      angular.mock.module('test-service');
      angular.mock.inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');
        userService = $injector.get('userService');
      });
    });

    it('fetch user list data', function() {
      $httpBackend.when('GET', '/users').respond(testUtils.mockedData.users);
      
      var users = userService.query();
      $httpBackend.flush();
      expect(users.length).toBe(3);
    });
  });
});