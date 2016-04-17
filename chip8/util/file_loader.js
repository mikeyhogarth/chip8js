/*
  Reads file into passed-in memory array
 */
'use strict'
const fs = require('fs');

module.exports.loadIntoMemory = function(file, memory, cb) {
  const stream = fs.createReadStream(file, { encoding: 'hex' });
  console.log('Loading file into memory...');

  stream.on('readable', function() {
    let buf, blockCounter = 0;
    while(buf = stream.read(4)) {
      memory[blockCounter] = buf;
      blockCounter++;
    }
  });

  stream.on('end', function() {
    cb();
  });
}
