var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Angular-Require-Test' });
});

router.get('/users', function(req, res) {
  var userList = [
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
  ];
  res.send(userList);
});

module.exports = router;
