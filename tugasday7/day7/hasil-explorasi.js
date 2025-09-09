//Soal No 1

// let nama = ['Faiz','Fairuz','Yusuf','Farid','Xena'];
// console.log(nama[0]);
// console.log(nama[4]);
// console.log(nama.length); 

//Soal No 2

// let hobi = [];
// hobi.push('Baca buku');
// hobi.push('Main game');
// hobi.push('Tidur');
// console.log(hobi);

//Soal No 3

// let pelajaran = ['matematika','pkn','ipa','b.indo'];
// pelajaran.pop();
// console.log(pelajaran);

// Soal No 4

// let angka = [5,4,3,2,1];
// for (let i = 0; i < angka.length; i++) {
// console.log(`Angka ke ${i+1} = ${angka[i]}`);
// }

// Soal No 5

// let kota = ['surabaya','jakarta','kertosono','jember'];
// let asal = kota.indexOf('jember');
// console.log(asal);

// Soal No 6

// let film = ['Ready player one','The conjuring','Drawing closer','Harry potter'];
// console.log(film);                            //Ada conjuring
// film[1] = 'Assassination classroom'
// console.log(film);                           //Conjuring diganti Assassination classroom

//Soal No 7

// let olahraga = ['Berenang','Memanah','Bola'];
// olahraga.unshift('Badminton');
// console.log(olahraga);

//Soal No 8

// let bulan = ['maret','januari','september','desember'];
// let bulan1 = bulan.shift();
// console.log(bulan1);          // output: maret
// console.log(bulan);

//Soal No 9

// let makananR = ['pentol','risol'];
// let makananB = ['nasi padang','mie ayam'];
// let fusion   = makananR.concat(makananB);
// console.log(fusion);

//Soal No 10

// let huruf = ['A','B','C','D','E'];
// console.log(huruf);                  // A B C D E
// huruf.reverse();
// console.log(huruf);                // E D C B E

// Soal No 11

// let nama = ['Zyo','Ash','Hyke','Frez','Ghi','Piro'];
// console.log(nama);                                 // output: 'Zyo','Ash','Hyke','Frez','Ghi','Piro'
// nama.sort();
// console.log(nama);                               // output: 'Ash', 'Frez', 'Ghi', 'Hyke', 'Piro', 'Zyo'

//Soal No 12

// let pelajaran = ['mtk','inggris','ipa'];
// let ada       = pelajaran.includes('mtk');
// console.log(ada);                           // true

//Soal No 13

// let hari = ['senin','selasa','rabu','kamis','jumat','sabtu','minggu'];
// let kerja = hari.slice(0,5);                  // 0 => index , 5 => length
// console.log(kerja);

// Soal No 14

// let negara = ['portugal','spanyol','prancis','argentina','jepang'];
// negara.forEach(function(n,i) {
//     console.log(`Negara ke-${i + 1}: ${n}`);
// });

//Soal No 15

// let angka = [2,3,4,5];
// let pangkat = angka.map(function(a){
//     return a**2 ;
// });
// console.log(pangkat);

//Soal No 16

// let nilai = [99,68,82,50,70];
// let lulus = nilai.filter(function(n){
//     return n >= 70;
// });
// console.log(lulus);                  // output: 99,82,70

// Soal No 17

// let harga = [200000,350000,1200000,500000,15000];
// let total = harga.reduce(function(x,y){
//     return x + y;
// });
// console.log(total);

// Soal No 18

// let nama = ['Thoriq','Irgi','Zidan','Rizky','Kahfi'];
// let lacak = nama.find(function(n){
//     return n = 'T';
// });
// console.log(lacak);

//Soal No 19

// let tinggi = [168,155,180];
// let cekTinggi = tinggi.some(function(cm){
//     return cm >= 170;
// });
// console.log(cekTinggi);                     // output: true => karena ada salah satu yang tingginya lebih dari 170cm
// let tinggiSemua = tinggi.every(function(cm){
//     return cm >= 150;       
// });
// console.log(tinggiSemua);               // output: true => karena semuanya di atas 150cm , jika ada salah satu dibawah 150cm => false 

// Soal No 20

// let angka = [1,2,3,4,5,6,7,8,9,10];
// let jumlah = angka.filter(function(a){
//     return a % 2 !== 0;})                                // output => [1,3,5,7,9]
//     .map(function(a){   
//         return a * 2;})                                // output => [2,6,10,14,18]
//     .reduce(function(z,x){
//         return z + x ;});                            // => 2 + 6 + 10 + 14 + 18
// console.log(jumlah);                                // output => 50

