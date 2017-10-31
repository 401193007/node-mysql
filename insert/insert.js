var connection = require("../index").connection;


//插入多条数据
var values = [[6,"rain"],[7,"tam"]];
//添加数据  注意 ？ 为占位符
connection.query("INSERT INTO mytable VALUES ?",[values],function(err,result){
	if(err){
		return console.error(err);
	}
	console.log("result:" + JSON.stringify(result));
});

//插入单条数据
var values2 = [8,"jack"];
//添加数据  注意 ？ 为占位符
connection.query("INSERT INTO mytable VALUES (?,?)",values2,function(err,result){
	if(err){
		return console.error(err);
	}
	console.log("result:" + JSON.stringify(result));
});