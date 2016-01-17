var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/reg', function(req, res, next) {
  res.render("users/reg",{title:"注册页面"})
});
router.get('/login', function(req, res, next) {
  res.render("users/login",{title:"登录页面"})
});
router.get('/logout', function(req, res, next) {
  res.render("users/logout",{title:"退出页面"})
});

module.exports = router;
