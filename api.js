//Express 4 router feature
var express 	= require('express'),
	//Research more on Bourne
	Bourne 		= require('bourne'),
	bodyParser 	= require('body-parser'),

	//Create Database
	db 			= new Bourne('data.json'),
	//Call express router object
	router 		= express.Router();

router
	.use(function(req, res, next){
		//Temp Middleware for testing autentication
		if(!req.user) req.user = { id: 1 };
		next();
	})
	// Use the Middleware
	.use(bodyParser.json())
	//Set the route. If the router changes, change it here.
	.route('/contact')
		.get(function(req, res){
			db.find({ userId: parseInt(req.user.id, 10)}, function(err, data){
				res.json(data);
			});
		})
		.post(function(req, res){
			var contact = req.body;
			contact.userId = req.user.id;

			db.insert(contact, function(err, data){
				res.json(data);
			});
		});
router
	.param('id', function(req, res, next){
		req.dbQuery = { id: parseInt(req.params.id, 10)}
	})
	.route('/contact/:id')
		.get(function(req, res){
			db.findOne(req.dbQuery, function(err, data){
				res.json(data);
			});
		})
		.put(function(req, res){
			var contact = req.body;
			//Delete data from the Front-End
			delete contact.$promise;
			delete contact.$resolved;
			db.update(req.dbQuery, contact, function(err, data){
				res.json(data[0]);
			});
		})
		.delete(function(req, res){
			db.delete(req.dbQuery, function(){
				res.json(null);
			})
		});
module.exports = router;