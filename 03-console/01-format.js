#!/usr/bin/node

const user - {
  name:'司宁',
  age: 20,
  qq: 873070555
};

const log = console.log;

//三种占位符
log('name:%s',user.name);//字符串
log('age:%d',user.age);//整数
log('ISON:%j',user);//对象

log('qq:%s',user.qq);//占位符
log('qq:',user.qq);//逗号
log('qq: ${user.qq}');//模板

console.error('Error| something wrong!');
