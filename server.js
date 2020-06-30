const express = require('express')
const app = express()
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var router = express.Router();

app.use('/CSS', express.static(path.join(__dirname, '/CSS/')))
app.use('/HTML', express.static(path.join(__dirname, '/HTML/')))
app.use('/Images', express.static(path.join(__dirname, '/Images/')))
app.use('/Webapp', express.static(path.join(__dirname, '/Webapp/')))

app.get('/', function(req, res){
    res.sendFile(__dirname + '/HTML/index.html');
});

app.listen(6969)
