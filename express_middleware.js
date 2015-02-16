var express = require('express');
var app = express();
function queryRemover(req, res, next){
	console.log("\nBefore url");
	console.log(req.url);
	req.url = req.url.split('?')[0];
	console.log("\nAfter utl");
	console.log(req.url);
	next();
};
app.use(queryRemover);
app.get('/no/query', function(req, res){
	res.send("test");
});
app.listen(8080);