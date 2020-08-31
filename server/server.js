'use strict';
const express = require("express");
var cors = require('cors');

const app = express();
app.use(cors());
var fs = require('fs');
var http = require('http');
var https = require('https');
const { Console } = require("console");

var httpServer = http.createServer(app);



httpServer.listen(3000);



app.get('/', function (req, res) {
    res.header('Content-type', 'text/html');
let rawdata = fs.readFileSync('products.json');
let products = JSON.parse(rawdata);


    var myObj = products
    res.end(JSON.stringify(myObj))
    return res.end(myObj);
});
