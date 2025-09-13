// SOAL

const menuMakanan = {
    data: [],
    nextId: 1,

tambahBanyak: function (...makanan) {
    makanan.forEach(item => {
      if (item && typeof item === "object") {
        let pesanan = {
          id: this.nextId++,
          nama: item.nama || "Tanpa Nama",
          harga: item.harga || 0,
          tersedia: item.tersedia !== undefined ? item.tersedia : true
        };
        this.data.push(pesanan);
        console.log(`✅ "${pesanan.nama}" ditambahkan ke menu!`);
      }
    });
  },

  lihat: function () {
    console.log(`\n    === MENU MAKANAN ===`);
    if (this.data.length === 0) {
      console.log(`Menu Habis`);
      return;
    }
    this.data.forEach((menu, i) => {
      const status = menu.tersedia ? "Tersedia" : "Habis";
      console.log(`${i + 1}. [ID ${menu.id}] ${menu.nama} - Rp.${menu.harga} ✅ ${status}`);
    });
  },


 editHarga: function(updateData){
    let index = this.data.findIndex(item => item.id === updateData.id);

    if(index !== -1){
        this.data[index] = {...this.data[index],harga: updateData.harga};
        console.log(`✅ Harga Menu ID ${updateData.id} Berhasil di update!`);
    }else{
        console.log(`Pesanan Tidak Tersedia`);
    }
 },

  hapusBanyak: function(...ids){
    const dihapus = [];
        
        ids.forEach(id => {
            const index = this.data.findIndex(item => item.id === id);
            if (index !== -1) {
                const { nama } = this.data[index]; 
                this.data.splice(index, 1);
                dihapus.push(nama);
                console.log(`✅ "${nama}" Dihapus!`);
            }
        });
  },

salinMenu: function(...pilihId) {
    if (pilihId.length === 0) {
    
        return [...this.data];
    } else {
      
      let filtered = this.data.filter(item => pilihId.includes(item.id));
      return [...filtered];
    }
  }

}


console.log(" TESTING MENU MAKANAN");
console.log("Akan Menambah 4 Menu:");

// 1. REST OPERATOR: tambah banyak makanan sekaligus
menuMakanan.tambahBanyak(
    { nama: "Nasi Goreng", harga: 25000 },
    { nama: "Mie Ayam", harga: 20000 },
    { nama: "Es Teh", harga: 5000 },
    { nama: "Ayam Bakar", harga: 35000 }
); 

// 2. DESTRUCTURING: lihat semua
menuMakanan.lihat();

// 3. SPREAD OPERATOR: edit harga
menuMakanan.editHarga({ id: 1, harga: 28000 });
menuMakanan.editHarga({ id: 3, harga: 6000 });

// 4. REST + DESTRUCTURING: hapus banyak
menuMakanan.hapusBanyak(2, 4);

// 5. Lihat hasil akhir
menuMakanan.lihat();

// 6. SPREAD: salin menu
const menuBackup = menuMakanan.salinMenu(); // copy semua
const menuPilihan = menuMakanan.salinMenu(1, 3); // copy ID 1 dan 3

// console.log("Backup semua menu:", menuBackup);
// console.log("Menu pilihan:", menuPilihan);