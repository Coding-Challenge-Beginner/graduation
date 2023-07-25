# Graduation

### RESTRICTION

- Tidak boleh menggunakan built-in function apapun

---

## Objectives

- Mengerti Cara Menggunakan `If-Else`
- Mengerti Logika `If-Else`
- Mengerti Cara Menggunakan Operator Evaluasi `===`, `!==`

## Directions

Kerjakan menggunakan javascript untuk kasus berikut: Seorang siswa akan mendapatkan informasi kelulusan berdasarkan nilai rata-rata yang ia peroleh dari 3 mata pelajaran berbeda dengan ketentuan sebagai berikut:

- Nilai rata-rata >74: "Lulus"
- Nilai rata-rata 60-74: "Mengulang secara gratis"
- Nilai rata-rata <60: "Mengulang tetapi berbayar"

Tampilkan nilai rata-rata dan berikan informasi kelulusan kepada siswa.

```js
Contoh 1:
let nilaiMatematika = 80;
let nilaiIps = 80;
let nilaiIpa = 80;

'nilai rata-rata yang diperoleh adalah 80'

//output yang diharapkan
'Selamat Anda lulus dengan nilai rata rata 80!'

===============================

Contoh 2:
let nilaiMatematika = 65;
let nilaiIps = 65;
let nilaiIpa = 65;

'nilai rata-rata yang diperoleh adalah 65'

//output yang diharapkan
'Mohon maaf, Anda tidak lulus karena nilai rata-rata Anda kurang dari 75. Tidak perlu khawatir, Anda berhak mengulang kelas secara gratis karena nilai rata-rata Anda adalah 65, dan syarat mengulang kelas secara gratis adalah mendapatkan nilai rata-rata antara 60-74'

===============================

Contoh 3:
let nilaiMatematika = 40;
let nilaiIps = 40;
let nilaiIpa = 40;

'nilai rata-rata yang diperoleh adalah 40'

//output yang diharapkan
'Mohon maaf, Anda tidak lulus karena nilai rata-rata Anda kurang dari 75. Karena nilai rata-rata Anda adalah 40 dan syarat mengulang gratis adalah mendapatkan nilai rata-rata antara 60-74, maka Anda akan dikenakan biaya sebesar Rp100.000 jika ingin mengulang kelas.'
```

**NOTED**: Jika salah satu nilai siswa kurang dari 0 atau lebih dari 100 maka tampilkan 'Nilai Invalid'
