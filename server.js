var express = require('express'),
    api     = require('./api'),
    users   = require('./accounts'),
    path    = require('path'),
    app     = express();

app
    .use(express.static('./public'))
    .use(users)
    .use('/api', api)
    .get('*', function (req, res) {
        if (!req.user) {
            res.redirect('/login');
        } else {
            //With res.sendFile, you need to supply an absolute path:
            res.sendFile( path.join(__dirname + '/public','main.html'));
            //To use path.join you need to require the path. See above
        }
    })
    .listen(3080);