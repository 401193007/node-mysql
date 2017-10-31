var connection = require("../index").connection;

var values = ["john",8];
connection.query("UPDATE mytable SET name=? WHERE id=?",values,function(err,results){
	if(err){
		console.error(err);
	}else{
		console.log("result:" + results);
	}
});