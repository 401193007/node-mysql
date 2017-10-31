var connection = require("../index").connection;

var values = ["tam"];
connection.query("SELECT * FROM mytable WHERE name=?",values,function(err,results){
	if(err){
		console.error(err);
	}else{
		console.log("result:" + results);
	}
});