var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var Sighting = require('./sightings.js');

var app = express();


mongoose.connect('mongodb://localhost/mini-birds');

app.use(bodyParser.json());
app.use(cors());

app.get('/api/sighting', function(req, res) {
	if (req.query) {
		console.log(req.query);
		Sighting.find(req.query).exec().then(function(results) {
			return res.status(201).json(results);
		});
		// console.log("Its arrived", req.query);
		// return res.status(200).end();
	}
	// else {
	// 	// Sighting.find({}).exec().then(function(results) {
	// 	// 	return res.status(201).json(results);
	// 	// });
	// 	console.log("Its arrived", req.query);
	// 	return res.status(200).end();
	// }
});

app.post('/api/sighting', function(req, res) {
	var sighting = new Sighting(req.body);
	sighting.save().then(function(err, result) {
		return res.status(201).end();
	});
});

app.put('/api/sighting', function(req, res) {
	Sighting.update(req.query, req.body).then(function(results) {
		return res.status(200).end();
	})
});

app.delete('/api/sighting', function(req, res) {
	Sighting.remove(req.query).then(function(results) {
		return res.status(200).end();
	})
});

app.listen(8080);
