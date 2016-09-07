var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var jsonParser = bodyParser.json();
var mongoose = require('mongoose')
// var SavedGame = require('./models/game.js')
app.use(express.static('build'));

app.get('/all', function(req, res) {
    // SavedGame.find(function(err, game) {
    //
    //         if (err) {
    //             return res.status(500).json({
    //                 message: 'Internal Server Error'
    //             });
    //         }
        res.json({message: "boo ya"});
    // });
});


//
// app.post('/fewest', jsonParser, function(req, res) {
//
//     // SavedGame.create({
//     //     username: req.body.username
//     // }).then(function(user) {
//     //     res.location('/users/' + user._id);
//     //     res.status(201).json({});
//     // }).catch(function(err) {
//     //     if (err) {
//     //         console.log(err);
//     //         return res.status(500).json({
//     //             message: 'Internal Server Error'
//     //         });
//     //     }
//     // });
//
//
// });

var runServer = function(callback) {
       var databaseUri = process.env.DATABASE_URI || global.databaseUri || 'mongodb://localhost/todos';
       mongoose.connect(databaseUri).then(function() {
           var port = process.env.PORT || 8080;
           var server = app.listen(port, function() {
               console.log('Listening on localhost:' + port);
               if (callback) {
                   callback(server);
               }
           });
       });
   };

   if (require.main === module) {
       runServer();
   }

   exports.app = app; exports.runServer = runServer;
