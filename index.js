// !Silahkan cek readme.md terlebih dahulu untuk mengetahui rules test ini!

function informasiKelulusanSiswa(nilaiMatematika, nilaiIps, nilaiIpa) {
  // your code here
}

console.log(informasiKelulusanSiswa(80, 80, 80)) // "Lulus"
console.log(informasiKelulusanSiswa(65, 65, 65)) // "Tidak Lulus. Mengulang secara gratis"
console.log(informasiKelulusanSiswa(40, 40, 40)) // "Tidak Lulus. Mengulang tetapi berbayar"
console.log(informasiKelulusanSiswa(80, 80, -1)) // "Nilai Invalid"
console.log(informasiKelulusanSiswa(80, 80, 101)) // "Nilai Invalid"
console.log(informasiKelulusanSiswa(0, -1, 101)) // "Nilai Invalid"