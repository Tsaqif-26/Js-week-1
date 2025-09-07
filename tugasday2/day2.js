// SOAL DAY 2

// LEVEL 1

// 1.
// let namaLengkap = ("M.Tsaqif A.")     //let sebagai variabel karena paling efektif dibanding var / const
// console.log(namaLengkap)             

// let angka1 = 15                //membuat deklarasi menggunakan let
// let angka2 = 5
// console.log(angka1 + angka2)    //untuk menjumlahkan

// 2.
// angka1 = 20                     //untuk mengubah nilai 'angka1'
// console.log(angka1 * angka2)    //untuk mengalikan

// 3.
// let x =10
// let y =3
// console.log(x % y)       //untuk menghitung hasil dari pembagian 'x' dibagi 'y'

// 4.
// let saldo = 100000
// console.log(saldo - 25000)  //untuk pengurangan 'saldo' dikurangi 25000

// 5.
// let isStudent = true    //true sebagai typedata boolean
// console.log(isStudent)

// 6.
// let l = 5
// let p = 3
// let t = 2
// console.log(l * p * t)   //pengkalian 3 variabel

// 7.
// let harga = 50000
// console.log(harga += 10000)   //untuk 'harga' ditambah 10000 sama dengan

// 8.
// let greeting = 'Selamat '
// console.log(greeting += 'Pagi')

// 9.
// let totalPembelian = 150000
// console.log(totalPembelian *= 0.9)  //untuk 15000 di kali 0.9 /10% sama dengan

// LEVEL 2

// 1.
// let umurBudi = 25
// let umurAndi = 30
// if (umurBudi > umurAndi) {console.log("budi lebih tua dari andi")
// } else {console.log("Andi lebih tua dari budi")}   //sebagai kondisi 'jika' atau 'maka'

// 2.
// let password = ('rahasia123')
// if (password == 'rahasia123') {console.log("Password Benar")
// } else {console.log("Password Salah")}   //'==' ketika nilainya sama walau beda tipe data

// 3.
// let nilai = 85
// if (nilai > 80 & nilai < 90) {console.log("Nilai diatas diatas rata rata")  //& sebagai 'dan'
// } else {console.log("Nilai dibawah rata rata")}

// 4.
// let cuaca = "Hujan"
// let adaPayung = true
// if (cuaca || adaPayung) {console.log("Gass , Keluar")
// } else {console.log("Gajadi keluar")}   // || artinya jika salah satu kondisi benar

// 5.
// function sapa() {console.log("Halo , Selamat Siang")}    //Membuat function 
// sapa()                                                 //Untuk memanggil function

// 6.
// function jumlahkan(a,b) { return a + b}  //return untuk memanggil penjumlahan
// console.log(jumlahkan(5,4))      //contoh hasil = 9

// 7.
// let nilai = 75
// if (nilai >= 70) {console.log("Anda Lulus")
// } else {console.log("Anda Belum Lulus")}

// 8.
// let angka = 10
// if (angka % 2 === 0) {console.log('Genap')  //apabila dibagi 2 hasilnya 0 berarti genap
// } else {console.log('Ganjil')}

// 9.
// function cekUmur(umur){
    // if (umur > 17) {console.log("Anda Dewasa")
    // } else {console.log("Anda Bocil")
    // }}
// cekUmur(20);            //contoh if
// cekUmur(15)            //contoh else

// 10.
// function cekNilai(nilai) {
    // if (nilai > 90) {console.log("Nilai anda A")
    // } else {console.log("Anda Remedial")
    // }}
// cekNilai(95);
// cekNilai(80)

// LEVEL 3

// 1.
// let j = prompt("Masukkan Nama ")              //untuk membuat pop up yg bisa di isi
// if (j) {console.log("Selamat Datang, " + j)
// } else {console.log("Anda tidak memasukkan nama")}

// 2.
// function hitungDiskon(totalBelanja,persenDiskon){
    //  return totalBelanja - (totalBelanja * persenDiskon / 100)}
// console.log(hitungDiskon(100000,10))    //contoh penggunaan

// 3.
// function hitungPajak(gaji,persenPajak){
//   return gaji - (gaji * persenPajak / 100)}
//  console.log(hitungPajak(2000000,5))       //contoh penggunaan

// 4.
// function  cekKelayakan(umur, punyaSim) {
    // if (umur >= 18 && punyaSim == true) {console.log("Anda layak mengemudi")
    // } else {console.log("Anda tidak layak")}}
// cekKelayakan(18,true)        //contoh untuk mengecek 

// 5.
// function cekSuhu(suhu) {
    // if (suhu > 30) {console.log("Suhu panas")
    // } else {if (suhu >= 20 && suhu <= 30) {console.log("Suhu Normal");    //untuk membuat 2 kondisi if else
    // } else {console.log("Suhu Dingin");} } }
// cekSuhu(30)                      // contoh hasil:suhu normal
