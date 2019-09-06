#!/usr/bin/node

process.on('SIGINT',()=>{
  console.log('you process ctrl+c or kill -2');
  process.exit();
});

process.on('SIGTSTP',()=>{
  console.log('you process ctrl+z')
});

process.stdin.resume();
