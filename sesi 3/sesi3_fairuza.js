let tinggi = 4; // jumlah tinggi (mis: 4)

for (let i = 1; i <= tinggi; i++) {
  let baris = ''; // variable untuk tempat di setiap baris sesuai jumlah tingginya, (mis: *)

for (let j = 1; j <= i; j++) {
    baris = baris + '*'; // tambahkan satu logo (mis: *) di setiap baris
  }

  console.log(baris); // tampilkan semua baris sesuai jumlah tinggi
}