var express = require('express');
var app = express();
var fs = require("fs");

var __dirname = "Data"

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "Users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})