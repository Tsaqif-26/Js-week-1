// JSON.stringify (3 Soal)

// // No.1

// let murid = {
//     nama: "Zyeo",
//     umur: 21,
//     jurusan: "Matematika"
// }

// let ubah = JSON.stringify(murid)
// console.log(ubah);

// // No.2

// let barang =  { produk: "Laptop", harga: 7500000, stok: 10 }

// let change = JSON.stringify(barang)
// console.log(change);

// // No.3

// let belanja = [
//     {nama: "permen" , jumlah: 30 , harga: 5000},
//     {nama: "mie"    , jumlah: 6  , harga: 15000}
// ]

// let keranjang = JSON.stringify(belanja)
// console.log(keranjang);


// JSON.parse (3 Soal)

// // No.4

// let siswa = `{"nama":"Budi", "usia":21, "status":"Mahasiswa"}`

// let parse = JSON.parse(siswa)
// console.log(parse);

// // No.5

// let buah = `{"nama": ["apel", "jeruk", "pisang"] }`

// let parse2 = JSON.parse(buah)
// parse2.nama.forEach((nama,index) => {
//     console.log(`${nama} urutan ke-${index + 1}`);
// });

// // No.6

// let motor = `{ "merk": "Honda", "model": "Civic", "tahun": 2022 }`

// let parse3 = JSON.parse(motor)

// for(let key in parse3){
//     console.log(key + ": ");
//     console.log(parse3[key]);
// }


// Callback Sederhana (3 Soal)

// // No.7

// function sapaUser(kata){
//     console.log("Halo" ,kata);
// };
// function belajar(kata,callback){
//     callback(kata)
// };

// belajar("Selamat belajar JSON! ",sapaUser)


// // No.8

// function hitung(luas){
//     console.log("Luas: " , luas);
// }

// function hitungLuas(panjang, lebar, callback){
//     callback(panjang * lebar)
// }
// hitungLuas(9, 7, hitung)   

// // No.9

// function prosesData(data, callback){
//     callback(data.length)
// };
// prosesData(["a","b","c","d"],    function(total){
//     console.log("Total array: " + total);
// } )


// Callback Anonim (2 Soal)

// No.10

// function sapaUser(nama,callback){
//     console.log(nama);
//         callback()
// }

// sapaUser("aisyah", function(){
//     console.log("Sampai Jumpa");
// })

// No.11

// function kirimPesan(pesan, callback){
//     callback(pesan)
// }

// kirimPesan("haloooo, gimana kabarnya", function(pesan){
//     console.log(pesan.toUpperCase());
// })


// Callback Timeout (2 Soal)

// No.12

// function prosesAsync(callback){
//     callback()
// }

// prosesAsync( function(){
//     setTimeout(() => {
//         console.log("Proses Selesai Dalam 2 Detik");
//     },2000)
// })

// No.13

// function ambilData(callback){
//     callback()
// }

// ambilData(function(){
//     setTimeout(() => {
//         console.log({id: 1, nama: "Laptop"});
//     },3000)
// })

