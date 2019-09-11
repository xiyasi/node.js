#!/usr/bin/node

const EventEmiter = requir('events').EventEmiter;
var e = new EventEmiter();
setInterval(function(){
  e.emit('hello');
},1000);
setTimeout(()=>{
  e.emit('hello');
},1000);
e.on('hello',()=>{
  console.log('hello world!');
});
e.on('bye',()=>{
  console.log('goodbye!');
});

