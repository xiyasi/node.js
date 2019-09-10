#!/usr/bin/node

function circle(radius){
  function area(){
    return Math.PI * radius * radius;
  }

  function cir(){
    return 2*Math.PI*radius;
  }

  return{
    area:area,
    cir:cir
  }
}

module.exports = circle;
