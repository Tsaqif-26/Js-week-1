// SOAL

// LEVEL GAMPANG

// 1.

// let barang = { nama: "Buku", harga: 10000 }
// let stringify = JSON.stringify(barang)
// console.log(stringify);

// 2.


// function hitungLuas(p,l,callback) {
//     let luas = p * l
//     callback(luas) 
// }
// function hasil(angka) {
//     console.log("Hasilnya:" , angka);
// }

// hitungLuas(9,4,hasil)

// 3.

// fetch ("https://jsonplaceholder.typicode.com/users")
// .then (res => {
//     console.log(res);
//    }
// )

// 4.

// let nama = `{ "nama": "Andi", "umur": 20}`
// let parse = JSON.parse(nama)

// console.log(parse.nama);

// 5.

// function sayHello(nama,callback) {
//     setTimeout(() => {
//     console.log("halo",nama);
//     callback()
//     }, 2000);
// }

// sayHello("Zko",function(){
//     console.log("Dadah");
// })

// 6.

// document.getElementById("judul").innerText = "Belajar DOM Selection"

// 7.

// let data = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Data Berhasil Diambil")
//     }, 3000);
// })
// data.then(i => console.log(i))

// 8.

// let Chaining = new Promise(() => {})

// Chaining
//        .then(console.log("Login User"))
//        .then(console.log("Data Di Ambil"))
//        .then(console.log("Tamplikan Dashboard"))
//        return Chaining

// 9.

// let warna = document.querySelectorAll('p')

// warna.forEach(i => {
//     i.style.color = "blue"
// });

// 10.

// function bagi(a,b) {
//     if (b == 0) {
//         throw new Error("Tidak Bisa Membagi Dengan Nol");
//     }
//    return a / b
// }
// async function hasil() {
//     try {
//         let hasil = bagi(20,0)
//         console.log(hasil);
//     } catch (e) {
//         console.error(e.message)
//     }   
// }
// hasil()

// LEVEL MEDIUM

// 11.

// Ada Di Folder no.11

// 12.

// async function ambilUser(id) {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//     const data = await res.json()
//     console.log(data);
// }
// ambilUser(1)

// 13.

// let angka = [1,2,3,4,5]
// console.log(angka.map((num) => num * num));

// 14.

// async function soal() {
//    try {
//      const res = await fetch ("https://jsonplaceholder.typicode.com/posts")
//      const json = await res.json()
//      console.log(json);
//     } catch (error) {
//         console.error(error.message);
//    }
// }
// soal()

// 15.

// let jsonData = '{"id":1,"name":"HAQI","status": "inactive"}'
// let parse = JSON.parse(jsonData)
// parse["status"] = "active"
// console.log(parse);

// 16.

// function getProduct(stok) {
//     return new Promise((resolve, reject) => {
//         if ( stok > 0 ) {
//             resolve ("Produk Tersedia")
//         } else {
//             reject ("Produk habis")
//         }
//     })
// }
// getProduct(0)
//             .then(i => console.log(i))
//             .catch(e => console.error(e))

// 17.

// let b = document.getElementById("banner")
// b.src = "banner.jpg"
// b.style.width = "300px"

// 18.

// new Promise(res => setTimeout(() => res("Connect Database"), 1000))
//   .then(i => {
//     console.log(i);
//     return new Promise(res => setTimeout(() => res("Ambil Data Produk"), 1000));
//   })
//   .then(i => {
//     console.log(i);
//     return new Promise(res => setTimeout(() => res("Tampilkan Data"), 1000));
//   })
//   .then(console.log);

// LEVEL SULIT

// 19.

// Ada di Folder No.19

// 20.

// setTimeout(() => {
//     console.log("Login");
//     setTimeout(() => {
//         console.log("Ambil Data");
//         setTimeout(() => {
//             console.log("Tampilkan data");
//             setTimeout(() => {
//                 console.log("Ambil Log");
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// function set(time) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(time), 1000);
//     })
// }
// set("Login")
//     .then (console.log)
//     .then (() => set("Ambil Data"))
//     .then (console.log)
//     .then (() => set("Tampilkan Data"))
//     .then (console.log)
//     .then (() => set("Ambil Log"))
//     .then (console.log)


// 21.

// async function com() {
//     let co = await fetch ("https://jsonplaceholder.typicode.com/comments")
//     let json = await co.json()

//     let fil = json.filter(c => c.email.includes("@gmail.com"))
//     console.log(fil);
// }
// com()

// 22.

// async function prosesData(data) {
//     if (!data) {
//         try {
//             throw new Error("Data Tidak Boleh Kosong");
            
//         } catch (error) {
//             console.error(error.message)
//         }
//     }
// }
// prosesData()

// 23.

// let ubah = document.querySelectorAll(".card")
// let warna = ["blue","red","yellow"]
// let border = ["2px","3px","4px"]
// ubah.forEach((p,i) => {
//     p.innerHTML = "Halo"
//     p.style.color = warna[i]
//     p.style.border = `${border[i]} solid ${warna[i]}`
// });

// LEVEL EXTRA SULIT

// 24.

// async function khususSurat() {
//     let link = await fetch ("https://equran.id/api/v2/surat")
//     let json = await link.json()

//     let Tampilkan = document.getElementById("surat")
//     json.data.forEach(s => 
//         Tampilkan.innerHTML +=`<li>${s.namaLatin}</li>`
//     );
// }
// khususSurat()

// 25.

// async function todo() {
//     let web = await fetch ("https://jsonplaceholder.typicode.com/todos")
//     let json = await web.json()

//     let f = json.filter(todo => todo.completed).length
//     console.log(f);
// }
// todo()