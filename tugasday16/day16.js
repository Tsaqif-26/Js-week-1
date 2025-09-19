// SOAL

// LEVEL 1

// 1.

// async function helloAsync() {
//     console.log("Halo dari Async");
// }
// helloAsync()

// 2.

// function ambilData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data Berhassil Diambil")
//         }, 3000);
//     })
// }

// async function data() {
//     let isi = await ambilData();
//     console.log(isi);
// }
// data()

// 3.

// function number() {
//      return 42
// }

// async function getNumber() {
//     let angka = await number()
//     console.log(angka);
// }
// getNumber()

// 4.

// function tambahLima(x) {
//     return x + 5
// }

// async function hasil() {
//     let ang = await tambahLima()
//     console.log(ang);
// }
// console.log(tambahLima(10));

// 5.

// async function throwError() {
//     try {
//         throw new Error("Ada Masalah");
//     } catch (err) {
//         console.log("Terjadi Kesalahan:",err.message);
//     }
// }
// throwError()

// LEVEL 2

// 6.

// async function surat() {
//     let namaLatin = await fetch ("https://equran.id/api/v2/surat/1");
//     let json = await namaLatin.json()
//     console.log(json.data.namaLatin);                 // Masuk ke 'data' terus ke 'namaLatin'
// }
// surat()

// 7.

// async function surat() {
//     let namaLatin = await fetch ("https://equran.id/api/v2/surat/1");
//         try {
//             if (!namaLatin.ok === false){
//             throw new Error("Gagal Mengambil Data")};
            
//         } catch (err) {
//             console.log("Pengambilan data =>",err.message);
//         }
// }
// surat()

// 8.

// async function surat() {
//     let namaLatin = await fetch ("https://equran.id/api/v2/surat/1");
//         try {
//             if (!namaLatin.ok === false){
//             throw new Error("Gagal Mengambil Data")};
            
//         } catch (err) {
//             console.log("Pengambilan data =>",err.message);
//         }
//          finally{
//             console.log("Proses Selesai");
//          }
// }
// surat()

// 9.

// async function tafsir() {
//     let arti = await fetch ("https://equran.id/api/v2/tafsir/112");
//     let json = await arti.json()
//     console.log(json.data.tafsir);
// }
// tafsir()

// 10.

// async function salah() {
//     let s = await fetch("https://equran.id/api/v2/surattidakada")
//     let json = await s.json()
//     try {
//         console.log("Berhasil");
//     } catch (err) {
//         console.error(err.message);
//     }

// }
// salah()

// LEVEL 3

// 11.

// async function cari() {
//     let [s,n] = await Promise.all([
//         fetch ("https://equran.id/api/v2/surat/1"),
//         fetch ("https://equran.id/api/v2/surat/112")    
//     ]);

//     let [s1,n2] = await Promise.all ([
//         s.json(),
//         n.json()
//     ])
//     console.log(s1.data.namaLatin);
//     console.log(n2.data.namaLatin);
// }
// cari()

// 12.

// let juara1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve ("Juara")
//     }, 2000);
// })

// let juara2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve ("kalah")
//     }, 3000);
// })

// Promise.race([juara1,juara2])
//        .then((juara) => console.log("Pemenang:",juara)) 

// 13.


// async function contoh() {
// let allsetled = await Promise.allSettled([
//         Promise.resolve("Data 1"),
//         Promise.resolve("Data 2") ,
//         Promise.reject("Error 3")
// ])
//     console.log(allsetled);
// }
// contoh()

// 14.

// async function x() {
//     const [surat, asmaulhusna, arbain] = await Promise.all([
//     fetch("https://api.myquran.com/v2/quran/surat/semua"),
//     fetch("https://api.myquran.com/v2/husna/semua"),
//     fetch("https://api.myquran.com/v2/hadits/arbain/semua")
//   ]);
//         let [s1,a1,a2] = await Promise.all([
//         surat.json(),
//         asmaulhusna.json(),
//         arbain.json()
//         ])

// console.log(s1);
// console.log(a1);
// console.log(a2);
// }
// x()

// 15.

// async function fetchSurat(id) {
//   try {
//     if (typeof id !== "number") throw new Error("ID surat harus angka");

//     const data = await (await fetch(`https://api.myquran.com/v2/quran/surat/semua`)).json();
//     if (!data.data.name_id) throw new Error("Surat tidak ditemukan");

//     console.log(data);
//   } catch (err) {
//     console.error(err.message);
//   }
// }

// fetchSurat(2); 
// fetchSurat("abc"); 

