var express = require('express'),
	api 	= require('./api'),
	app 	= express(),
	//Require the path
	path 	= require('path');

app
	.use(express.static('./public'))
	.use('/api', api)
	.get('*', function(req, res){
		//With res.sendFile, you need to supply an absolute path:
		res.sendFile( path.join(__dirname + '/public','main.html'));
		//To use path.join you need to require the path. See above
	})
	.listen(3080);