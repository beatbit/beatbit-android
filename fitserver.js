var express = require('express');
var app = express();
var OAuth = require('oauthio');
OAuth.initialize('d04b6c7d91005317a02515f55373abf0', 'fae1a4233418c72617cd51c6f8c8f772');
//OAuth.popup('fitbit').done(function(result) {
//    console.log(result)
//});
console.log("sdafa");
app.get('/OAuth/redirect', OAuth.redirect(function(result, req, res) {
    //todo
    console.log(result);
    console.log("dsfa");
}));