#!/usr/bin/node

var circle={
  'area':function(radius){
    return Math.PI*radius*radius;
  },
  'cir':function(radius){
    return 2*Math.PI*radius;
  },
  'diameter':function(radius){
    return 2*radius;
      
  }
};

console.dir(module);
module.exports = circle;
