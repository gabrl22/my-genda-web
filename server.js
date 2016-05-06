var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('my-genda', ['myGenda']);
var bodyParser = require('body-parser');

var port = process.env.PORT || 3002;
app.listen(port);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.post('/myGenda', function(req, res) {

    db.myGenda.insert(req.body, function(err, doc) {
        res.json(doc);
        console.log("Tarea agregada a la base de datos");
    });
});

app.get('/myGenda', function(req, res) {

    db.myGenda.find(function(err, doc) {
        res.json(doc);
        console.log("Datos actualizados en la aplicacion");
    });
});

app.delete("/myGenda/:index", function(req, res){
    var id = req.params.index;
	console.log(id);
	//Remueve un objeto de la base de datos
	db.myGenda.remove({_id: mongojs.ObjectId(id)}, 
	function(err, doc){
		res.json(doc);	
	});  
});

console.log("Server running at port: " + port);

/*db.myGenda.find(function(err, doc){
    console.log(doc);
})*/