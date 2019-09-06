#!/usr/bin/node

const log = console.log;
var data = process.argv[2];
var buf = new Buffer(process.argv[2],'base64'),
    info = buf.toString('uft8').split(':');

log('usr:%s,ped；%s',info[0],info[1]);
