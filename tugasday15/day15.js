// STUDI KASUS

// LEVEL 1

// 1.

// const janji = new Promise((resolve, reject) => {
//    setTimeout(() => {
//         resolve("Operasi Berhasil!")
//    },2000);
// })

// janji.then(isi => console.log(isi))

// 2.

// const janji2 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//     let sukses = true/false;
//     if (sukses === true) {
//          resolve("Operasi Berhasil!")
//     } else {
//         reject("Operasi Gagal")
//     }   
//    },2000);
// })

// janji2.catch(isi2 => console.log(isi2))

// // 3.

// const mtk = new Promise((resolve) => {
//     setTimeout(() => { resolve(5) }, 1000);
// })

// mtk
//     .then(angka => {console.log(angka)
//         return angka * 2
//     })
//     .then(angka =>{console.log(angka)
//         return angka + 10
//     })
//     .then(angka => (console.log(angka)))

// LEVEL 2

// 4.

// fetch("https://equran.id/api/v2/surat/114")

// .then(respon => {console.log(respon)
//     return respon.json()
// })

// 5.

// fetch("https://equran.id/api/v2/surat/114")

// .then(res => {
//     if (!res.ok) {
//         throw Error("API Gagal Diambil")
//     } return res.json()
// })
// .then(d => console.log("isi:",d))
// .catch(e => console.log("Error:",e.message))

// 6.

// console.log("Memproses...");

// fetch("https://equran.id/api/v2/surat/114")

// .then(res => {
//     if (!res.ok) {
//         throw Error("API Gagal Diambil")
//     } return res.json()
// })
// .then(d => console.log("isi:",d))
// .catch(e => console.log("Error:",e.message))
// .finally(() => console.log("Proses Selesai apapun Hasilnya"))

//LEVEL 3

// 7.

// let asma = fetch ("https://api.myquran.com/v2/husna/semua")
// let hadits = fetch ("https://api.myquran.com/v2/hadits/arbain/semua")
// Promise.race([asma,hadits])
//  .then(response => response.json())
//  .then(data => {
//    console.log("API yang paling cepat =>", data)
//  })
//  .catch(Error => {
//    console.log("response gagal", Error)
// })

// 8.

// let semua = fetch ("https://api.myquran.com/v2/quran/surat/semua")
// let husna = fetch ("https://api.myquran.com/v2/husna/semua")
// let salah = fetch ("https://api.myquran.com/v2/husna/salah")

// Promise.allSettled([semua, husna, salah])
//  .then(result => {
//   result.forEach((result, index) => {
//       if(result.status === 'fulfilled') {
//          console.log(`API ${index + 1} sukses =>`, result.value)
//       } else {
//          console.log(`API ${index + 1} gagal`, result.reason)
//       }
//    });
// })


// LEVEL 4

// 9.

// function dashboard() {
//     let asmaulhusna  = fetch ("https://api.myquran.com/v2/husna/semua")
//     let surat        = fetch("https://api.myquran.com/v2/quran/surat/semua")
//     let arbain       = fetch ("https://api.myquran.com/v2/hadits/arbain/semua")

// Promise.all([asmaulhusna,surat,arbain])
//         .then(isi => {
//             console.log("DASHBOARD SIAP!");
//             console.log("Asmaul Husna",isi[0]);
//             console.log("Surat" , isi[1]);
//             console.log("Arbain", isi[2]);
//         })
//         .catch(() => {
//             console.log("Gagal Memuat Dashboard");
//         })
// }
// dashboard()

// 10.

// let fetch2 = fetch("https://equran.id/api/v2/surat/1")
//            .then(s => s.json()) 

// let time = new Promise((reject) => {
//     setTimeout(() => {
//         reject("Timeout: API terlalu lama")
//     }, 5000);
// })

// Promise.race([fetch2,time])
//        .then(isi => {
//         console.log(isi);
//        }) 
//        .catch(e => {
//         console.error(e);
//        })