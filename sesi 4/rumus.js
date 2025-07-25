// rumus.js

function kalkulator(angka1, angka2, operator) {
  switch (operator) {
    case '+':
      return angka1 + angka2;
    case '-':
      return angka1 - angka2;
    case '*':
      return angka1 * angka2;
    case '/':
      if (angka2 === 0) {
        return "Tidak bisa dibagi dengan nol!";
      }
      return angka1 / angka2;
    default:
      return "Operator tidak dikenali. Gunakan +, -, *, atau /";
  }
}

// Ekspor fungsi agar bisa digunakan di menu.js
module.exports = kalkulator;
