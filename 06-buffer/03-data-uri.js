#!/usr/bin/node

const fs = require('fs'),
      log = console.log,
      http = require('http');

var buf = fs.readFileSync('./qr-code.jpg').toString('base64');
//log(data)
var html = ' ' ;
http.createServer((req,res) => {

}).listen(8080);
