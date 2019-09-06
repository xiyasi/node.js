#!/urs/bin/node

function task(){
  var num = 0;
  for(var i = 0;i < 1000;i++){
    for(var j = 0; j < 1000;j++){
      num += i*j;
    }
  }
  return num;
}

console.time('DOWNLODE FILE');
var n = task();
console.timeEnd('DOWMLODE FILE');

console.log('n = %d',n);
