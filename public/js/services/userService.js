define(function(require, exports) {
  return function(testServices) {
    testServices.factory('userService', ['$resource', function($resource) {
      return $resource('/users/:id', {}, {
        update: {
          method: 'PUT',
          isArray: false
        }
      });
    }]);
  }
});