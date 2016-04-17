/*
 Work in progress. Will eventually implement a one-module-per-opcode architecture. For 
 now it just implements the 0000 opcode to ensure the program exits.
*/
module.exports = function(instruction) {
  if(instruction == '0000') { this.running = false; }
}
