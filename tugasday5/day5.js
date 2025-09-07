//SOAL 1

//SOAL 2

// 1.
//Ada 4 function yg sudah di ajari

     //fungsi deklaratif

// function nama(a) {                
//     return `Hei , ${a} sini!`
// }
// console.log(nama('Asep'));

// function hewan(jenis) {
//     return `Hewan kepiting adalah hewan ${jenis}`
// }
// console.log(hewan('amfibi'));

       //fungsi ekspresi

// const buah = function jenis(b) {
//     return `Buah ${b} enak sekali!!`
// }
// console.log(buah('Durian'));

// const barang = function benda(bahan) {
//     return `Lemari terbuat dari ${bahan}`
// }
// console.log(barang('Kayu'))

        //fungsi parameter dan return

// function perkalian(x,y) {
//     return x * y ;
// }
// let hasil = perkalian(7,9);
// console.log(hasil);

// function pengurangan(k,l) {
//     return k - l ;
// }
// let hasil = pengurangan(89,29);
// console.log(hasil)

      //Arrow fungsi

// const pembagian = (y,z) => y / z; 
// console.log(pembagian(63,7));

// const penambahan = (i,j) => i + j ;
// console.log(penambahan(23,77));


// 2.

// function tambah () {                                 //NO.1
//     let angka = 0;

//     return function(){
//         angka++;
//         return angka;
//     }
// }
// const jumlah = tambah();
// console.log(jumlah());
// console.log(jumlah());
// console.log(jumlah())

// function tabungan() {                             //NO.2
//     let nominal = 0;
//     return function(tambah) {
//     nominal += tambah
//     return nominal;}  ;
// }
// const hasil = tabungan();
// console.log(hasil(10000));
// console.log(hasil(15000));

// function rahasia(pesan) {                           //NO.3
//     return function () {
//         return `Pesan : ${pesan}`;
//     }
// }
// const pesan = rahasia("Ini Rahasia")
// console.log(pesan());

// function list() {                                        //NO.4
//     let isi = [];
//     return function(nama){
//         isi.push(nama);
//         return isi;
//     }
// }
// const isiNama = list();
// console.log(isiNama("Cici"));
// console.log(isiNama("leo"));

// function hitungan() {                            //NO.5
//     let angka = 10;
//     return {
//         tambah : function () {
//          angka++ ;   
//         return angka;},
    
//         kurang : function(){
//             angka-- ;
//             return angka;}
//     }
// }
// const angka = hitungan();
// console.log(angka.tambah());
// console.log(angka.kurang());
// console.log(angka.tambah());


// 3.

// let namaSantri = ["Ahmad", "Budi"];                                      //NO 1
// namaSantri.push("Citra");   // tambah ke array
// console.log(namaSantri);   // ["Ahmad", "Budi", "Citra"]


// let buah = ["Pisang", "Apel"];                                        //NO 2
// buah.push("Salak");            
// console.log(buah);      // ["Pisang", "Apel", "Salak"]


// let santri = { nama: "Asep", umur: 10 };                           //NO 3
// santri.umur = 18;            // update umur
// console.log(santri);        // { nama: "Asep", umur: 18 }


// let murid = { nama: "Cici", hafalan: 3 };                       //NO 4
// murid.hafalan += 2;  
// console.log(`${murid.nama} hafalan: ${murid.hafalan} juz`); // Cici hafalan: 5 juz

// let barang = [
//   { nama: "Pedang", harga: 5000000 },                       //NO 5
//   { nama: "Perisai", harga: 2000000 }
// ];
// barang.push({ nama: "Bom", harga: 10000000 });
// console.log(barang);
