var express = require('express');
var AccountDetail=require("../models/AccountDetail.js");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var accountType=AccountDetail.GetAllAccount(function(err,result){
		 if(err){
				res.locals.error=err;
				res.render("AccountManage",{items:""});
				return;
			}

         console.log(result);
         res.render('AccountManage',{items:result});
	});

    
});
module.exports = router;