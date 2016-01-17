var express = require('express');
var router = express.Router();

router.get("/add",function(req,res,next){
    console.log("dd")
    res.render("articles/add",{title:"文章页"})
})
module.exports=router;