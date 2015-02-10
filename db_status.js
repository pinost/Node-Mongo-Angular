var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/testDB", function(err, db){
	var adminDB = db.admin();
	adminDB.serverStatus(function(err, status){
		console.log(status);
		db.close();
	})
})