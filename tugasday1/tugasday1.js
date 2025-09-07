// SOAL NO.1

//  1. Log  (untuk informasi biasa)
//  2. Info (untuk informasi yg lebih penting)
//  3. Warn (sebagai peringatan)
//  4. Error (pemberitahuan error)
//  5. Assertion (seperti membuat syarat)
//  6. Table (untuk membuat table)
//  7. Time - TimeLog - TimeEnd (penunjuk waktu,seperti stopwatch)
//  8. Count - CountReset (menghitung banyak percobaan)
//  9. Group - GroupEnd (agar log bisa lebih rapi)
// 10. Alert (pop up web, ok)
// 11. Confirm  (pop up, ok atau cancel)
// 12. prompt  (pop up, bisa di isi)
// 13. document.getElementById('id').innerHTML (agar bisa masuk ke html)

// SOAL NO.2
// LEVEL 1

// 1.
// console.log(Halo,JavaScript)

// 2.
// console.log(100-50)
// console.log(10*5)

// 3.
// console.log('Nama saya Tsaqif')
// console.log('Usia saya 18 tahun')

// 4.
// alert('Selamat Datang')

// 5.
// alert(15+20)

// 6.
// prompt("Buah favorit kamu")

// 7.
// let asal = prompt("Anda berasal dari mana ?");
// alert("Anda berasal dari " + asal)

// 8.
// document.getElementById('pesan').innerHTML = "Ini paragraf dari JavaScript"

// 9.
// document.getElementById('judul').innerHTML = "Tugas Selesai"

// 10.
// document.getElementById('hasil-hitung').innerHTML = (20/5+10)

// LEVEL 2

// 1.
// var me = ('M.Tsaqif A.')
// console.log("Halo " + me)

// 2.
// var hargaBarang1 = (5000)
// var hargaBarang2 = (10000)
// console.log(hargaBarang1 + hargaBarang2)

// 3.
// let angka = prompt("Masukkan Angka")
// console.log(angka * 2)

// 4.
// let kata = prompt("Masukkan sebuah kata")
// alert(kata)

// 5.
// let con = confirm("Apakah Anda setuju dengan kebijakan kami?")
// console.log(con)

// 6.
// let nam = prompt("Masukkan nama")
// console.log("Informasi Pengguna : " + nam)

// 7.
// let x = prompt("Masukkan angka")
// let y = prompt("Masukkan angka lagi")
// document.getElementById('hasil-kali').innerHTML = x * y 

// 8.
// console.warn("Website ini sedang dalam perbaikan!")

// 9. 
// function tombol(){
//  console.error("Kesalahan pada data!")}

// 10.
// let salam = "Selamat "
// let waktu = "Pagi"
// console.log(salam + waktu)

// LEVEL 3

// 1.
// let c = prompt("Masukkan angka")
// if (c % 2 == 0) {
        //   console.log( " adalah GENAP.");
        // } else {
        //   console.log(" adalah GANJIL.");}

// 2.
// let n = prompt("masukkan nilai")
// if (n < 70) {console.warn("Nilai anda " + n)

// } else {console.log("Nilai anda " + n )}

// 3.
// let t = prompt("Siapa Pencipta JavaScript ?")
// if (t == 'Brendan Eich' ) {alert("Jawaban anda benar!")

// } else {alert("Jawaban anda salah.Coba lagi") }

// 4.
// console.group("me");
// console.log("Nama : tsaqif");
// console.log("Umur : 18");
// console.log("Pekerjaan : Pelajar");
// console.groupEnd("End")

// 5.
// let f = prompt("Masukkan Angka")
// let e = prompt("Masukkan Angka Lagi")
// if (f > e) {
        // console.log("Angka pertama lebih besar dari angka kedua");
//       } else if (f < e) {
        // console.log("Angka pertama lebih kecil dari angka kedua");
//       } else {
        // console.log("Kedua angka sama");}

// 6.
// let u = prompt("Masukkan Usia Anda")
// if (u > 13 & u < 19 ) {alert("Anda Berusia remaja")
// }  else {alert("Anda bukan Remaja")}

// 7.
// let d = prompt("Total Belanja")
// if (d > 100000) {alert("Selamat anda mendapatkan Diskon 10%")
// } else {alert("Belanja lagi untuk mendapatkan diskon")}

// 8.
// let s = confirm("Apakah anda ingin melanjutkan ?")
// if (s) {document.getElementById('status').innerHTML="Anda melanjutkan"
// } else {document.getElementById('status').innerHTML="Anda membatalkan"}

// 9.
// console.time("Loop"); 
// for (let i = 1; i <= 1000; i++) {}
// console.timeEnd("Loop");

// 10.
// let n = prompt("Nama anda ?")
// let u = prompt("Usia Anda ?")
// console.log("Halo " + n + " Usia Anda " + u + " Tahun")