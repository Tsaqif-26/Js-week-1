


export default {
    hitungJumlah: (buku) => buku.length ,
    cariBuku: (buku, judul) => buku.find(b => b.judul === judul),
    bukuTebal: (buku) => buku.filter(b => b.halaman > 600)
};
