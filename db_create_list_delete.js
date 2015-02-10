var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/", function(err, db){
	var adminDB = db.admin();
	adminDB.listDatabases(function(err, databases){
		console.log("Before Add database list: ");
		console.log(databases);
	});
	var newDB = db.db("newDB");
	newDB.createCollection("newCollection", function(err, collection){
		if(!err){
			console.log("New Database and Collection Created");
			adminDB.listDatabases(function(err, databases){
				console.log("After add Database list: ");
				console.log(databases);
				db.db("newDB").dropDatabase(function(err, results){
					if(!err){
						console.log("Database dropped");
						setTimeout(function(){
							adminDB.listDatabases(function(err, results){
								var found = false;
								for (var i = 0; i < results.databases.length; i++){
									if(results.databases[i].name == "newDB") found = true;
								}
								if (!found){
									console.log("After Delete Database list: ");
									console.log(results);
								}
								db.close();
							});
						}, 15000);
					}
				});
			});
		}
	});
});