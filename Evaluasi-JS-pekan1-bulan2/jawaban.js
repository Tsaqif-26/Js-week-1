//SOAL NO 1-5

// 1.
// let ayamGoreng = 12000 ;
// let gudeg      = 8000 ;
// let esTeh      = 3000 ;
// let bayar      = 0;
// function total(isi) {
//     for (let i = 0; i < isi.length; i++){
//     bayar+=isi[i]
//     }return bayar
// }
// let pesanan = [ayamGoreng,esTeh,esTeh,gudeg]
// console.log(total(pesanan));

// 2.
// let ayamGoreng = 12000 ;
// let gudeg      = 8000 ;
// let esTeh      = 3000 ;
// let bayar      = 0;
// function total(isi) {
//     for (let i = 0; i < isi.length; i++){
//     bayar+=isi[i]
//     }return bayar
// }
//     let pesanan = [ayamGoreng,esTeh,esTeh,gudeg,ayamGoreng,ayamGoreng,gudeg,ayamGoreng];
//     console.log("Total " + total(pesanan));
// if (bayar > 50000) {
//     console.log(`Setelah diskon menjadi ${bayar * 0.9}`)
// }

// 3.
// let ayamGoreng = 7;
// let gudeg      = 2;
// let esTeh      = 5;
// if (ayamGoreng > gudeg && ayamGoreng > esTeh) {
//     console.log("Ayam goreng paling laris")
// } else if (gudeg > ayamGoreng && gudeg > esTeh) {
//     console.log("Gudeg paling laris");
// } else {console.log("Es teh paling laris");}

// 4.
// let bayar      = 52000;
// let pelanggan = {
//     biasa: bayar*0.95,
//     member: bayar*0.9,
//     vip: bayar*0.85
// };
// console.log("karena member totalnya menjadi " + pelanggan.member);

// 5.
// let penjualan = [145000,150000,165000,175000,180000,190000,200000]

// let total = 0
// for (let i = 0; i < penjualan.length; i++) {
//     total += penjualan[i]
// }
// let rataRata = total/penjualan.length;

// console.log(`Total penjualan seminggu ini Rp.${total}` );
// console.log(`Rata rata penjualan Rp.${rataRata.toFixed()}`);

//SOAL 6-10

// 6.
// let stok = {
//     kaos : 50,
//     celana : 30,
//     jaket : 15
// }

// console.log(stok.jaket);

// 7.
// function point(total) {
// let poin = 0;

// if (total < 10000) {
//     console.log("Transaksi berhasil");
// } else {
//     while (total >= 10000) {
//         poin++;
//         total -= 10000
//     }
// }
// return poin;
// }
// console.log(`Transaksi berhasil anda mendapatkan ${point(65000)} poin`);

// 8.
// let stok = {
//     kaos : 4,
//     celana : 1,
//     jaket : 3,
// }
// let harga = {
//     kaos : 10000,
//     celana : 15000,
//     jaket : 25000
// }
// function bonus(barang) {
// let diskon = 0;
//     if (stok[barang] <= 10) {
//     diskon = harga[barang] * 0.95       
//     } else {
//         diskon = 0;
//     }
//     return diskon
// }
// console.log(bonus("jaket"));

// 9.

// let stok = {
//     kaos : 10,
//     celana : 16,
//     jaket : 7
// }
// function cek(item) {
//     if (stok[item] < 20) {
//         console.log("Item tersedia " + stok[item] + ' Pcs');
//     } else {
//         console.log("Item tersedia");
//     }
// }
// cek("kaos")

// 10.
// let poin = 500

// if (poin >= 0 && poin <= 99) {
//     console.log("Anda level Bronze");
// } else if (poin >= 100 && poin <= 499) {
//     console.log("Anda level Silver");
// } else {console.log("Anda level Gold");
// } 

//SOAL NO 11-15

// 11.
// let nilai = [
//     70,80,65,90,86,
//     93,70,85,99,66,
//     87,87,59,87,79,
//     80,90,75,77,80,
//     76,82,45,91,96
// ]

// function rata(angka) {
//     let total = 0;
// for (let i = 0; i < angka.length; i++) {
//     total+= angka[i];
// }
//     return total/angka.length
// }
// let rataRata = rata(nilai)
// console.log("Rata rata kelas : " + rataRata);

// 12.
// function grade(nilai) {
//     if (nilai >= 85 && nilai <= 100) {
//         console.log("Grade A");
//     } else if (nilai >= 70 && nilai <= 84 ){
//         console.log("Grade B");
//     } else if (nilai >= 60 && nilai <= 69) {
//         console.log("Grade C");
//     } else if (nilai < 60) {
//         console.log("Grade D");
//     }
// }
// grade(79)

// 13.
// let data = [
//     {nama:"Acha" , nilai:99},
//     {nama:"Deqi" , nilai:86},
//     {nama:"Reiy" , nilai:75},
//     {nama:"Zeze" , nilai:100}
// ]

// function cari(murid) {
//     for (let i = 0; i < data.length; i++) {
//         if (data[i].nama === murid ) {
//             return "Nama : " + data[i].nama + ", Nilai : " + data[i].nilai
//         } else {
//             return "Tidak ada"
//         }
//     }
// }
// console.log(cari("Acha"))

// 14.
// function rataRataKelas(nilai) {
//     if (nilai > 80) {
//         return "Kelas anda mendapatkan Rewards"
//     } else {
//         return "Kelas anda tidak dapat Rewards"
//     }
// }
// console.log(rataRataKelas(90));

// 15.
// let nama = [
//     {nama:"jeje" , nilai:96},
//     {nama:"kaef" , nilai:76},
//     {nama:"teeo" , nilai:98}
// ] 

// function rank(a) {
//     for (let i = 0; i < nama.length; i++) {
//     if (nama[i].nama === a )
//     if (nama[i].nilai > 99) {
//         return "Nama : " + nama[i].nama + " Ranking " + 1
//     } else if (nama[i].nilai < 99 && nama[i].nilai > 97) {
//          return "Nama : " + nama[i].nama + " Ranking " + 2
//     } else if (nama[i].nilai < 97 && nama[i].nilai > 95) {
//          return "Nama : " + nama[i].nama + " Ranking " + 3
//     } else { return "Bukan Ranking 3 besar"
//     }
//     }
// }
// console.log(rank("jeje"));
// console.log(rank("teeo"));
// console.log(rank("kaef"));

// SOAL NO 16-20

// 16.
// let servis = [
//     {jenis:'ringan' , waktu:'2 jam'},
//     {jenis:'sedang', waktu:'4 jam'},
//     {jenis:'berat', waktu:'8 jam'},
// ]
// function service(tipe) {
//     if (tipe === 'ringan' ) {
//         return "Service selesai dalam waktu " + servis[0].waktu;
//     } else if (tipe === 'sedang') {
//         return "Service selesai dalam waktu " + servis[1].waktu;
//     } else if (tipe === 'berat') {
//         return "Service selesai dalam waktu " + servis[2].waktu;
//     } else {
//         return "Tambal ban ? 30 Menit"
//     }
// }
// console.log(service('sedang'));

// 17.
// function jadwal(jam) {
//     if (jam > 8) {
//         return 'Bengkel sudah mau tutup'
//     } else {
//         return 'Bengkel masih buka'
//     }
// }
// console.log(jadwal(7));

// 18.
// let antrian = [                                                   
//          "juy",                                                 
//          "bento",                                               
//          "kely",
//          "fuhar",
//          "mire",
// ]

// for (let urutan = 0; urutan < antrian.length; urutan++) {          
//      console.log((urutan + 1) + '.' + antrian[urutan]) }         

// 19.
// function garansi(jenis) {
//     if (jenis === "berat") {
//         return "Mendapatkan garansi servis selama 1 bulan"
//     } else if (jenis === "sedang") {
//         return "Mendapatkan garansi servis selama 2 minggu"
//     } else if (jenis === "ringan") {
//         return "Mendapatkan garansi servis selama 1 minggu"
//     }
// }
// console.log(garansi("berat"));

// 20.
// function total(tipe,harga) {
//     let komisi = 0;
//     if (tipe === 'berat') {
//         komisi = harga * 0.20
//     } else if (tipe === 'sedang') {
//         komisi = harga * 0.15
//     } else if (tipe === 'ringan') {
//         komisi = harga * 0.10
//     }
//     return "Komisi untuk tipe " + tipe + " adalah Rp." + komisi  
// }
// console.log(total('berat',50000));

// SOAL NO 21-25

// 21.
// function les(paket) {
//     let hargaPerPertemuan = 0;
//     if (paket === 'basic') {
//         hargaPerPertemuan = 500000 / 4
//     } else if (paket === 'standard') {
//         hargaPerPertemuan = 800000 / 8
//     } else if (paket === 'premium') {
//         hargaPerPertemuan = 1200000 / 12
//     }
//     return "Biaya 1 pertemuan adalah : Rp." + hargaPerPertemuan
// }
// console.log(les('basic'));

// 22.
// function les(paket) {
//     let cicilan = 0;
//     if (paket === 'basic') {
//         cicilan = 500000 / 2
//     } else if (paket === 'standard') {
//         cicilan = 800000 / 3
//     } else if (paket === 'premium') {
//         cicilan = 1200000 / 4
//     }
//     return "Cicilan : Rp." + cicilan
// }
// console.log(les('premium'));

// 23.
// let kelas = {
//   A: { kapasitas: 20, terisi: 20 },
//   B: { kapasitas: 15, terisi: 15 },
//   C: { kapasitas: 25, terisi: 25 },
//   D: { kapasitas: 10, terisi: 5 },
//   E: { kapasitas: 30, terisi: 0 }
// };

// function jumlahKapasitas(nama, ruangan) {
//   if (!kelas[ruangan]) {
//     return "kelas tidak tersedia";
//   }
//   if (kelas[ruangan].terisi < kelas[ruangan].kapasitas) {
//     return `Silahkan atas nama ${nama} masuk ke kelas ${ruangan}`;
//   }
//   return `kelas ${ruangan} sudah Full`;
// }
// console.log(jumlahKapasitas("Beo","A"));

// 24.
// let absen = ["hadir","hadir","tidak hadir","hadir"]
// let hadir = 0
// for (let p = 0; p < absen.length; p++) {
//     if (absen[p] === "hadir") {
//         hadir++;
//     }
// }
// let total = hadir / absen.length * 100 
// console.log("Hadir : " + total + ' %');

// 25.
// let murid = {
//     nama:'jeki' , bayar:0 , hadir:0 , total:0
// };
// function bayar(uang) {
//     murid.bayar += uang
// };
// function hadir(masuk) {
//     murid.total++;
//     if (masuk === "hadir") {
//         murid.hadir++
//     }
// };
// function semua() {
//     let persennya = murid.hadir / murid.total * 100;
//     console.log("Nama:" + murid.nama + " , Pembayaran:Rp." + murid.bayar + " , Kehadiran:" + persennya + " %");
// }
// bayar(1250000);
// hadir("hadir");
// hadir("alpa");
// hadir("hadir");
// hadir("alpa");

// semua()

