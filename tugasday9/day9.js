// BAGIAN 1

// 1.
let perpustakaan = {};

// 2.
let daftarPengunjung = [];

// 3.
// Object => Berisi tentang key dan value, dan juga ada array , object memakai pembuka dan penutup {}
// Array  => Berisi tentang banyak value dan index, array memakai pembuka dan penutup []

// 4.
// Bagian dari object : ada properti key dan value,
// Bagian dari array  : Berisi banyak value (bisa "string",number,boolean),
// Nama identifier dalam object => Key sebagai wadah value,
// Isi identifier => value bisa berisi bebas (string,number,boolean)

// BAGIAN 2

// 5.
perpustakaan = {
    nama : "Perpustakaan Kota" ,
    alamat: "Jl. Pendidikan No. 123" ,
    tahunBerdiri: 1995 
}; 

// 6.
daftarPengunjung = ["Zizey","Ghi","Qyo"];

// 7. 
perpustakaan.nama = "Perpustakaan Digital Kota";

// 8.
daftarPengunjung[0] = "Ahmad Budi";

// 9.
perpustakaan.jumlahBuku = 5000;

// 10.
daftarPengunjung.push("Sari Dewi")

// BAGIAN 3

// 11.
let kategoriBuku = [["Fiksi", "Non-Fiksi"], ["Sains", "Sejarah", "Biografi"]];

// 12.
perpustakaan.fasilitasPerpustakaan = {
    ruangBaca: {kapasitas: 100, lantai: 1},
    ruangKomputer: {kapasitas: 30, lantai: 2}
}

// 13.
delete perpustakaan.tahunBerdiri;

//BAGIAN 4

// 14.
let anggota = {
    tipe: 'biasa',
    jenis: "Premium",
    id: 1221,
    qris: "Pembayaran-digital" 
}

// 15.
for (let p in perpustakaan){
    console.log(`${p} : ${perpustakaan[p]}`);};

// 16.
for (let f in perpustakaan) {
  if (typeof perpustakaan[f] === "object") {
    for (let ff in perpustakaan[f]) {
      if (typeof perpustakaan[f][ff] === "object") {
        for (let fff in perpustakaan[f][ff]) {
          console.log(`${ff} => ${fff} : ${perpustakaan[f][ff][fff]}`);
        }
      } else {
        console.log(`${ff} : ${perpustakaan[f][ff]}`);
      }
    }
  } else {
    console.log(`${f} : ${perpustakaan[f]}`);
  }
}

// 17.
let cabangPerpustakaan = {...perpustakaan};
cabangPerpustakaan.nama = "Perpustakaan Digital cabang selatan"

console.log(cabangPerpustakaan);

//BAGIAN 5

// 18.
let  buku = [];
let sistemPerpustakaan =  {
    tambahBuku: function(judul,pengarang){
        buku.push({judul,pengarang});
        perpustakaan.jumlahBuku++
    },

  cariBuku: function(judul) {
    for (let i = 0; i < buku.length; i++){
      if (buku[i].judul === judul) {
        return buku[i];
      }
    }
    return "Tidak ditemukan";
  },

    hitungTotalBuku: function () {
        return buku.length;
    },

    tampilkanInfo: function(){
        console.log("Total buku " + buku.length);
    }
}

sistemPerpustakaan.tambahBuku("Laskar Pelangi", "Andrea Hirata");
sistemPerpustakaan.tambahBuku("Bumi Manusia", "Pramoedya Ananta Toer");
console.log(sistemPerpustakaan.cariBuku("Laskar Pelangi"));
console.log(sistemPerpustakaan.hitungTotalBuku());
sistemPerpustakaan.tampilkanInfo();

// BAGIAN AKHIR

console.log('========================================');
console.log("     INFORMASI PERPUSTAKAAN DIGITAL");
console.log('========================================');

console.log('Nama: ' + perpustakaan.nama);
console.log('Alamat: ' + perpustakaan.alamat);
console.log('Total Koleksi Buku: ' + perpustakaan.jumlahBuku);

console.log('========================================');
console.log("          FASILITAS TERSEDIA");
console.log('========================================');

console.log('Ruang Baca');
console.log(perpustakaan.fasilitasPerpustakaan.ruangBaca);
console.log('Ruang Komputer');
console.log(perpustakaan.fasilitasPerpustakaan.ruangKomputer);

console.log('========================================');
console.log("         KOLEKSI BUKU TERSEDIA");
console.log('========================================');

console.log(sistemPerpustakaan.cariBuku("Laskar Pelangi"));
console.log(sistemPerpustakaan.cariBuku("Bumi Manusia"));

console.log('========================================');
console.log("         PENGUNJUNG HARI INI");
console.log('========================================');

console.log(daftarPengunjung);

console.log('========================================');
console.log("Status Sistem: ✅ Online");
console.log("Terakhir diupdate: 11 September 2025");
console.log('========================================');



