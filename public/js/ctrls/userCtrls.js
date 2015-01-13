define(function(require, exports) {
  return function(testCtrls) {
    testCtrls.controller('userCtrl', ['$scope', 'userService', function($scope, userService) {
      $scope.users = userService.query();
      $scope.deleteUser = function(user) {
        dialog.content = '删除用户' + user.id + '后不能再恢复了，你确定要删除吗?'
        dialog.open();
      };

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
      $scope.dialog = dialog;
    }]);
  };
});