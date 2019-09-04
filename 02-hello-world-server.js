#!/usr/bin/node
sudo chmod u+x 01-hello-world.js

const http=require('http')
http.createServer(req,res=>{
  console.log('hello world!')
}).listen(8080)

http.createServer(req,res=>{
  res.end('<DOCTYPE html><html><head><title>hello</title></head><body><h1>hello node.js</h1></body></html>')
}).listen(8080)
