var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/words');
var wordSchema = require('./word_schema.js').wordSchema;
var Words = mongoose.model('Words', wordSchema);
mongoose.connection.once('open', function(){
	var query = Words.findOne().where('word', 'intelligences');
	query.exec(function(err, doc){
		console.log("Before update: ");
		console.log(doc.toJSON());
		var query = doc.update({$set: {word: 'intelligenced',
								size:13, last:'d'},
								$push: {letters:'d'}});
		query.exec(function(err, results){
			console.log("\n%d Documents updated", results);
			Words.findOne({word:'intelligenced'}, function(err, doc){
				console.log("\nAfter Update: ");
				console.log(doc.toJSON());
				mongoose.disconnect();
			});
		});
	});
});