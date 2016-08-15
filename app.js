var express = require('express'),
    app = express(),
	bodyParser = require('body-parser');
   

app.use(bodyParser.json())

app.get('/', function(req, res) {

       res.send("hello world from heroku");		
});


	
app.use(function(req, res){
    res.sendStatus(404);
});

   var server = app.listen(80, function() {
       var port = server.address().port;
       console.log("Express server listening on port %s.", port);
});
