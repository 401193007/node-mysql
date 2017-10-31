var connection = require("../index").connection;

//删除单条数据
var value = [1];
connection.query("DELETE FROM mytable where id=?",value,function(err,result){
	if(err){
		console.error(err)
	}else{
		console.log("result:" + result);
	}
});

//删除多条数据
connection.query("DELETE FROM mytable",function(err,result){
	if(err){
		console.error(err);
	}else{
		console.log("result:" + result);
	}
});