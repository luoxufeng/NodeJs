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

function AccountType(account){
	this.typevalue=account.typevalue;
	this.typename=account.typename;
}
module.exports=AccountType;

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
	AccountType.prototype.save=function save(callback){
		var account={
			typevalue:this.typevalue,
			typename:this.typename
		};

		var insertAccount_Sql="insert into AccountType(Id,TypeValue,TypeName) values(0,?,?)";
		connection.query(insertAccount_Sql,[account.typevalue,account.typename],function(err,result){
			if(err){
				console.log("insert user error:"+err.message);
				return;
			}
			//connection.release();

			console.log("invoked[save]");
			callback(err,result);
		});
	}

	
});

