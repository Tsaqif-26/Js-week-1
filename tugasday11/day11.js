// SOAL 1

// const mahasiswa = {
//     alice: { math: 85, english: 90, science: 88 },
//     bob: { math: 78, english: 85, science: 82 },
//     carol: { math: 92, english: 89, science: 94 }
// };

// let namaMahasiswa = Object.keys(mahasiswa);
// console.log(namaMahasiswa);

// let nilai = Object.values(mahasiswa);
// // console.log(nilai);

// const rataRata1 = Object.values(mahasiswa.alice).reduce((sum, n) => sum + n, 0) / Object.keys(nilai).length;
// const rataRata2 = Object.values(mahasiswa.bob).reduce((sum, n) => sum + n, 0) / Object.keys(nilai).length;
// const rataRata3 = Object.values(mahasiswa.carol).reduce((sum, n) => sum + n, 0) / Object.keys(nilai).length;
// console.log(`Alice rata-rata:  ${rataRata1}`);
// console.log(`Bob rata-rata:  ${rataRata2}`);
// console.log(`Carol rata-rata:  ${rataRata3}`);


// for (let [nama, pelajaran] of Object.entries(mahasiswa)) {
//   let detail = Object.entries(pelajaran)
//                      .map(([mapel, nilai]) => `${mapel} = ${nilai}`)
//                      .join(", ");
//   console.log(`${nama}: ${detail}`);
// }

// const dataTambahan = {...mahasiswa};
// console.log(dataTambahan);


// SOAL 2

// const playlist = [
//     { judul: "Al-Fatihah", qari: "Mishary Rashid", durasi: 42, juz: 1 },
//     { judul: "Al-Baqarah", qari: "Abdul Rahman As-Sudais", durasi: 7380, juz: 1 },
//     { judul: "Ar-Rahman", qari: "Saad Al-Ghamdi", durasi: 810, juz: 27 },
//     { judul: "Al-Mulk", qari: "Maher Al Muaiqly", durasi: 540, juz: 29 }
// ];

// let juz1 = playlist.filter(({juz}) => juz == 1 );
// console.log(juz1);

// let durasi1 = playlist.reduce((l,{durasi}) => l + durasi,0);
// console.log('Total Durasi: ' + durasi1 + ' Detik');

// let list = playlist.map(({judul,qari}) => `${judul} - ${qari}`);
// console.log(list);

// let panjang = playlist.reduce((n,{durasi}) => durasi < n ? n : durasi );
// console.log(panjang);

// let juzBaru = { judul: "Al-falaq", qari: "Maher Al Muaiqly", durasi: 60, juz: 30 }
// let playlistBaru = [{...playlist,...juzBaru}];
// console.log(playlistBaru);


// SOAL 3

// const pengeluaran = [
//     { hari: "Senin", kategori: "makan", jumlah: 25000 },
//     { hari: "Senin", kategori: "transport", jumlah: 15000 },
//     { hari: "Selasa", kategori: "makan", jumlah: 30000 },
//     { hari: "Selasa", kategori: "hiburan", jumlah: 50000 },
//     { hari: "Rabu", kategori: "makan", jumlah: 20000 }
// ];

// let totalPengeluaran = pengeluaran.reduce((h,{jumlah}) => h + jumlah,0)
// console.log('Total: Rp.' + totalPengeluaran);

// let grup = pengeluaran.reduce((a,x) => (a [x.kategori] = (a [x.kategori] || 0) + x.jumlah,a) ,{});
// console.log(grup);


// let perHari = pengeluaran.reduce((a,x) => (a [x.hari]=(a [x.hari] || 0) + x.jumlah,a) ,{});
// console.log(perHari); 

// let terbesar = pengeluaran.reduce((a,b) => a.jumlah > b.jumlah ? a : b);
// console.log(terbesar); 

// let mahal = pengeluaran.filter(x => x.jumlah >= 25000);
// console.log(mahal); 

//SOAL 4

// const kontakLama = { mama: "08123456789", papa: "08987654321" };
// const kontakBaru = [["adik", "08111222333"], ["kakak", "08444555666"]];

// let kontak = {...kontakLama,...Object.fromEntries(kontakBaru)};
// console.log(kontak);

// let nomor = Object.values(kontak);
// console.log(nomor);

// let format = Object.entries(kontak)
//   .map(([nama, telp]) => `${nama}: ${telp}`);

// console.log(format);

// let prefix = {};
// for (let [nama, telp] of Object.entries(kontak)) {
//   prefix[nama] = "+62" + telp;   
// }
// console.log(prefix);


// SOAL 5

// const nilaiKelas = [
//     { nama: "Alice", tugas: [80, 85, 90], uts: 88, uas: 92 },
//     { nama: "Bob", tugas: [75, 80, 85], uts: 82, uas: 86 },
//     { nama: "Carol", tugas: [90, 95, 88], uts: 91, uas: 89 }
// ];

// nilaiKelas.forEach(s => {
//   let rataTugas = [...s.tugas].reduce((a,b) => a + b ,0) / s.tugas.length;
//   console.log(`${s.nama}: ${rataTugas}`);
// });

// nilaiKelas.forEach(s => {
//   let { tugas, uts, uas } = s;
//   let rataTugas = tugas.reduce((a,b) => a + b ,0) / tugas.length;
//   let nilaiAkhir = (rataTugas * 0.3) + (uts * 0.3) + (uas * 0.4);
//   console.log(`${s.nama}: ${nilaiAkhir}`);
// });

// let lulus = nilaiKelas.filter(s => {
//   let rata = s.tugas.reduce((a,b) => a + b ,0) / s.tugas.length;
//   let akhir = (rata * 0.3) + (s.uts * 0.3) + (s.uas * 0.4);
//   return akhir >= 80;
// });

// console.log("Semua siswa Lulus");

// let terbaik = nilaiKelas.reduce((a,b) => {
//   let rataA = a.tugas.reduce((x,y) => x + y ,0) / a.tugas.length;
//   let akhirA = (rataA * 0.3) + (a.uts * 0.3) + (a.uas * 0.4);

//   let rataB = b.tugas.reduce((x,y) => x + y ,0) / b.tugas.length;
//   let akhirB = (rataB * 0.3) + (b.uts * 0.3) + (b.uas * 0.4);

//   return akhirB > akhirA ? b : a;
// });

// console.log(terbaik.nama + ' (Nilai akhir tertinggi)');

// let laporan = nilaiKelas.map(s => {
//   let rata = s.tugas.reduce((a,b) => a + b ,0) / s.tugas.length;
//   let akhir = (rata * 0.3) + (s.uts * 0.3) + (s.uas * 0.4);
//   return `${s.nama}: ${akhir} (${akhir >= 80 ? "Lulus":"Tidak Lulus"})`;
// });

// console.log(laporan);