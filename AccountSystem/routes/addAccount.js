var express = require('express');
var AccountType=require("../models/Account.js");
var AccountDetail=require("../models/AccountDetail.js");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var accountType=AccountType.GetAllType(function(err,result){
		 if(err){
				res.locals.error=err;
				res.render("addAccount",{items:""});
				return;
			}

         console.log(result);
         res.render('addAccount',{items:result});
	});

    
});

/* GET home page. */
router.post('/', function(req, res, next) {
     var typevalue=req.body["inputType"];
     var typename=req.body["inputTypeName"];
     var costmoney=req.body["inputMoney"];
     var accountsource=req.body["inputSource"];//来源
     var costtime=req.body["inputDate"];
     var desc=req.body["inputDes"];

     console.log("来源："+accountsource);

     var account=new AccountDetail({
     	typeid:typevalue,
		typename:typename,
		accountmoney:costmoney,
		accountsource:accountsource,
		costtime:costtime,
		accountdesc:desc
     });

     account.save(function(err,result){
			if(err){
				res.locals.error=err;
				res.render("addAccount",{items:""});
				return;
			}

			if(result.insertId>0){
				res.locals.success='（支出/收入）信息添加成功';
			}else{
				res.locals.error=err;
			}

			res.render("addAccount",{items:""});

     });
 });

module.exports = router;
