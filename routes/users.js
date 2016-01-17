var express = require('express');
var router = express.Router();
var flash=require("flash")
/* GET users listing. */
router.get('/reg', function(req, res, next) {
  console.log("ddde")
  res.render("users/reg",{title:"注册页面"})
});
router.post('/reg', function(req, res, next) {
  var user=req.body;
  if(user.pwd !== user.repwd){
    return res.redirect("back");
  }
  delete user.repwd;
  user.pwd=md5(user.pwd)
  //console.log(user)
  console.log(new Model("User"))
  new Model("Users")(user).save(function(err,doc){
    console.log(err)
    if(err){
      return res.redirect("back")
    }else{
      return res.redirect("/")
    }
  })
  res.render("users/reg",{title:"注册页面"})
});
router.get('/login', function(req, res, next) {
  res.render("users/login",{title:"登录页面"})
});
router.get('/logout', function(req, res, next) {
  res.render("users/logout",{title:"退出页面"})
});

module.exports = router;
