var express = require('express'),
    app = express(),
	bodyParser = require('body-parser');
   

app.use(bodyParser.json())

app.get('/contacts', function(req, res) {

       var pgp = require("pg-promise")(/*options*/);
       var db = pgp("postgres://postgres:admin@localhost:5432/contactsDB");

	db.any("select * from contacts")
		.then(function(data) {
			data.forEach(function(row, index, data) {
				console.log(data);
			});
			
			res.send(data);
		});		
});

app.post('/contacts', function(req, res) {

    var pgp = require("pg-promise")(/*options*/);
    var db = pgp("postgres://postgres:admin@localhost:5432/contactsDB");

	db.one("insert into contacts(name, description,phone) values($1, $2,$3) returning *", [req.body.name, req.body.description,req.body.phone])
		.then(function (data) {	
			res.send(data);
		})
		.catch(function (error) {
			res.send(error);
		});
});


app.get('/contacts/:id', function(req, res) {
	
	
    var pgp = require("pg-promise")(/*options*/);
    var db = pgp("postgres://postgres:admin@localhost:5432/contactsDB");

	db.any("select * from contacts where id = $1",[req.params.id])
		.then(function(data) {
			data.forEach(function(row, index, data) {
				console.log(data);
			});
			
			res.send(data);
		});		
});
	
app.use(function(req, res){
    res.sendStatus(404);
});

   var server = app.listen(3000, function() {
       var port = server.address().port;
       console.log("Express server listening on port %s.", port);
});
