/*
    Chip8 system model, see http://devernay.free.fr/hacks/chip8/C8TECH10.HTM
*/
const fileLoader = require('./util/file_loader');
const controller = require('./controller');

module.exports = Chip8;

function Chip8() {
  this.memory     = new Array(4096);    // Memory
  this.v          = new Int8Array(16);  // Registers v0 through vF
  this.stack      = [];                 // Stack
  this.i          = 0;                  // 16 bit register used for storing memory addresses
  this.pc         = 0;                  // Program Counter
  this.sp         = 0;                  // Stack Pointer
  this.delayTimer = 0;                  // Delay timer
  this.soundTimer = 0;                  // Sound timer
  this.running    = false;
}

Chip8.prototype.loadProgram = function(file, cb) {
  fileLoader.loadIntoMemory(file, this.memory, cb);
}

Chip8.prototype.run = function() {
  controller.emit('start', this);
  while(this.running) { 
    controller.emit('instruction', this, this.memory[this.pc]); 
  }
  controller.emit('exit', this);
}
