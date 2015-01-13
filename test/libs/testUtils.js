define(function(require, exports) {
  var mockedData = {
    users: [
      {
        id: 1,
        name: '曹操',
        gender: '男',
        nationality: '曹魏',
        weapon: '青釭剑'
      },
      {
        id: 2,
        name: '刘备',
        gender: '男',
        nationality: '蜀汉',
        weapon: '双股剑'
      },
      {
        id: 3,
        name: '孙权',
        gender: '男',
        nationality: '东吴',
        weapon: '紫电剑'
      }
    ]
  };

  exports.mockedData = mockedData;
});