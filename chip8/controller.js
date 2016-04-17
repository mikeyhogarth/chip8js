const opcodes    = require('./opcodes'); 
const EventEmitter = require('events').EventEmitter;
const controller = new EventEmitter();

module.exports = controller;

controller.on('start', function(cpu) {
  cpu.running = true;
});

controller.on('exit', function(cpu) {
  cpu.running = false;
  console.log('Exiting.');
});

controller.on('instruction', function(cpu, instruction) {
  console.log('Executing ' + instruction);
  opcodes.call(cpu, instruction);
  cpu.pc++;
});

