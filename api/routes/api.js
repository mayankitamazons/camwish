var express = require('express'),
 bodyParser = require('body-parser');
const request=require('request');
const router=express.Router();
const User=require('../Model/usermodel');
const Category=require('../Model/categorymodel');
const Willness=require('../Model/willnessmodel');
const Apperencess=require('../Model/apperencesmodel');
router.post('/login',function(req,res,next){
   var user_name=req.body.user_name;
   var pass=req.body.password;
     User.findOne({user_name:user_name,pass:password}).then(function(userdata){
		 if(userdata)
          {
			   res.send({"status":true,"code":200,"message":"Login Successfully"});
		  }
		  else
		  {
			   res.send({"status":false,"code":404,"message":"Invaid Login Detail"});
		  }
	 });
 
});  
router.post('/dashboard',function(req,res,next){
  var data={
        "Category":10,
        "model":6,
        "wild":4,
        "recent_model":[{
             "_id":"1",
             "name":"Model 1",
             "img":"assets/img/avatars/1.jpg",
             "sex":"female",
             "category":"wild"
        },{
             "_id":"2",
             "name":"Model 2",
             "img":"assets/img/avatars/1.jpg",
             "sex":"male",
             "category":"wild"
        }]
  };
  res.send({"status":true,"code":200,"message":"Data found",data:data});
});
router.post('/categorylist',function(req,res,next){
  var data=[{
       "_id":"1",
       "category_name":"master category"
  }];
  res.send({"status":true,"code":200,"message":"Category Data",data:data});
});
router.post('/addcategory',function(req,res,next){
  res.send({"status":true,"code":200,"message":"Category Added Successfully"});
});
module.exports=router;
