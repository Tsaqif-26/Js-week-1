// // LATIHAN LOOPING

// let makanan = [                                                   //Contoh looping
//          "Nasi",                                                 //Bisa dibuat jadi list
//          "bakso",                                               //pake [] agar bisa di isi banyak
//          "pentol",
//          "bubur",
//          "mie",
//          "es teh",
//          "es jeruk",
//          "air putih",
// ]

// for (let start = 0; start < makanan.length; start++) {          //cara menggunakan for
//      console.log((start + 1) + '.' + makanan[start]) }         //agar hasil jadi lurus kebawah dan awalnya ada nomornya

// for (let i = 10; i >= 1; i--) {
//     let k = "";
//     for (let j = 1; j <= i; j++) {                          //Bisa buat gambar kalo jago
//         k +="-.-"}
//     console.log(k);} 


// function tambah(start) {{                                       //membuat function utama/pertama
//      return function (end) {                                   //function kedua didalam function utama
//         return start+end;                                     //membuat function pertama + function kedua
//      }
//     }
// }console.log(tambah(5)(10));                               //() pertama untuk function pertama & () kedua untuk function kedua
                                                             //Contoh console.log(tambah(5)(10)) hasilnya 15 karena 
                                                            //Function 1 ditambah function 2

// const lemari = (function() {
//   let barang = [];                                              //agar bisa memuat banyak data
//   return {
//     tambah: function(item) { barang.push(item); },            //untuk memindah barang ke item
//     tampil: function() { return barang.join(', '); },        //Untuk menambah ', ' ke item
//     kurang: function(item) {                                    
//       let index = barang.indexOf(item);                    //untuk mendetect index dari item
//       if (index !== -1) {                                 
//         barang.splice(index, 1);                         //untuk menghapus ,kebalikan dari join   (1) untuk item yg mau dihapus
//       }
//     }
//   }
// })();

// lemari.tambah("Pensil 1");                          //untuk mengisi (item)
// lemari.tambah("Penghapus 1");                      //untuk pemanggilan function trs ditambah .(yg mau dipakai)
// lemari.tambah("Pensil 2");                        //Contoh .tambah agar output keluar "Pensil 2"
// lemari.tambah("Buku 1");

// console.log(lemari.tampil());                  //untuk mengeluarkan output menggunakan .tampil
// lemari.kurang('Pensil 1');                    //Contoh .kurang untuk mengurangi output yang ada di .tambah 
// console.log(lemari.tampil());                //cara pemanggilan  



