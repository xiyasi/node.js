#!/usr/bin/node

const log = console.log;
var buf1 = new Buffer(256);
buf1[0] = 0*11;

log('buf1 length',buf1.length);
log('buf1:',buf1);

for(var i = 1; i < buf1.length; i++)buf1[1]=i;
log('buf1',buf1);

buf1.fill(0,0,256);

var buf2 = buf1.slic(250,256);
log('buf2',buf2);

log('buf2',buf2.toJSON());
log('buf2',JSON.stringify(buf2));

var arr = ['a',0xba,0xdf,0x00,255,10];
var buf3 = new Buffer(arr);
log('buf3',buf3);

var buf4 = new Buffer('hello world');
log('buf4',buf4);

buf4.copy(buf3,0,0,buf3.length);
log('buf3',buf3);

var str = '你好 sining';
var buf5 = new Buffer(str);
log('buf5 length',buf4.length);
log('string length',str.length);
