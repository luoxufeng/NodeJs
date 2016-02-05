var mysql=require("mysql");
var db_name="nodesample";

var pool=mysql.createPool({
	host:"localhost",
	user:"root",
	password:"luoxufeng",
	port:"3306"
});

pool.on("connection",function(connection){
	connection.query("set session auto_increment_increment=1");
});

function AccountDetail(account){
	this.typeid=account.typeid;
	this.typename=account.typename;
	this.accountmoney=account.accountmoney;
	this.accountsource=account.accountsource;
	this.costtime=account.costtime;
	this.accountdesc=account.accountdesc;
}
module.exports=AccountDetail;

pool.getConnection(function(err,connection){
	var userdbsql="use "+db_name;
	connection.query(userdbsql,function(err){
		if(err){
			console.log("use error:"+err.message);
			return;
		}
		console.log("use succeed");
	});

	//保存数据
	AccountDetail.prototype.save=function save(callback){
		var account={
			typeid:this.typeid,
			typename:this.typename,
			accountmoney:this.accountmoney,
			accountsource:this.accountsource,
			costtime:this.costtime,
			accountdesc:this.accountdesc
		};

		var insertAccount_Sql="insert into AccountDetail(Id,TypeId,TypeName,AccountMoney,AccountSource,CostTime,AccountDesc) values(0,?,?,?,?,?,?)";
		connection.query(insertAccount_Sql,[account.typeid,account.typename,account.accountmoney,account.accountsource,account.costtime,account.accountdesc],function(err,result){
			if(err){
				console.log("insert accountdetail error:"+err.message);
				return;
			}
			//connection.release();

			console.log("invoked[accountdetail save]");
			callback(err,result);
		});
	}


    //获取全部数据
	AccountDetail.GetAllAccount=function GetAllAccount(callback){
        var getAllAccount_sql="select * from AccountDetail";
		connection.query(getAllAccount_sql,function(err,result){
			if(err){
				console.log("invoked[GetAllAccount] error:"+err.message);
				return;
			}

			//connnection.release();
			console.log("invoked[GetAllAccount] is success");
			callback(err,result);
		});
	}

	
});

