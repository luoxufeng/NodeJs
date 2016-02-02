var express = require('express');
var AccountType=require("../models/Account.js");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET home page. */
router.post('/', function(req, res, next) {
    var typeValue=req.body['inputType'];
	var typeName=req.body["inputName"];
	

	var accountType=new AccountType({
		typevalue:typeValue,
		typename:typeName
	});

    accountType.save(function(err,result){
    	if(err){
				res.locals.error=err;
				res.render("index");
				return;
			}

			if(result.insertId>0){
				res.locals.success='添加成功！！';
			}else{
				res.locals.error=err;
			}

			res.render("index");
    });


});

module.exports = router;
