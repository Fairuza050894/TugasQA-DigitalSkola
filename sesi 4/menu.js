// menu.js

const readline = require('readline');
const kalkulator = require('./rumus');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukkan angka pertama: ", (input1) => {
  rl.question("Masukkan operator (+, -, *, /): ", (operator) => {
    rl.question("Masukkan angka kedua: ", (input2) => {
      const angka1 = parseFloat(input1);
      const angka2 = parseFloat(input2);

      const hasil = kalkulator(angka1, angka2, operator);
      console.log(`Hasil: ${hasil}`);
      
      rl.close();
    });
  });
});