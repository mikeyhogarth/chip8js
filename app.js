const Chip8 = require('./chip8');
const chip8 = new Chip8();

chip8.loadProgram(__dirname + '/roms/example', function() {
  chip8.run();
});
