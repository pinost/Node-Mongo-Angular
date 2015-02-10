var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://dbadmin:test@localhost:27017", {
		db: { w: 1, native_parser: false},
		server: {
			poolSize: 5,
			socketOptions: {connectionTimeoutMS: 500},
			auto_reconnect: true
		},
		replSet: {},
		mongos: {}
	}, function(err, db){
		if(err){
			console.log("Connection Failed via Connection string .");
		} else {
			console.log("Connected via Connection string...");
			db.logout(function(err, result){
				if(!err){
					console.log("Logged out via Connection string ...");
				}
				db.close();
				console.log("Connection closed ...");
			});
		}
	}
);