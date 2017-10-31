var mysql = require("mysql");

var connection = mysql.createConnection({
	host : "localhost",
	user : "root",
	password : "1234",
	database  : "node"
});

connection.connect();  //必须先连接

exports.connection = connection;

