define(['testUtils', 'angular', 'ngMocks', 'directives/index', 'dialogTpl'], function(testUtils) {
  describe('test dialog directive', function() {
    var $rootScope;
    var $compile;

    beforeEach(function() {
      angular.mock.module('/tpls/directives/dialog.html');
      angular.mock.module('test-directives');
      angular.mock.inject(function($injector) {
        $rootScope = $injector.get('$rootScope');
        $compile = $injector.get('$compile');
      });
    });

    it('test dialog directive close method', function() {
      var dialog = {
        title: '删除用户',
        content: '',
        draggable: true,
        actions: [
          {
            label: 'OK'
          },
          {
            label: 'cancle'
          }
        ]
      };
      $rootScope.dialog = dialog;
      var element = $compile('<div dialog="dialog">{{dialog.content}}</div>')($rootScope);
      $rootScope.$digest();
      expect(element.find('.dialog-title').text()).toBe(dialog.title);


      $rootScope.$apply(function() {
        $rootScope.dialog.content = 'This is a test';
      });
      expect(element.find('.dialog-content').text()).toBe(dialog.content);
      
      $rootScope.dialog.open();
      expect(element.css('display')).toBe('block');

      $rootScope.dialog.close();
      expect(element.css('display')).toBe('none');
    });


  });
});