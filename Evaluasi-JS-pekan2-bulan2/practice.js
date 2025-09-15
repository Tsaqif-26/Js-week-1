// Contoh yang sudah saya pelajari dalam seminggu ini

// dari yang dasar

let angka = [1,2,3,4];       // =====> VARIABEL DASAR

// .push dan pop

// .push ==> untuk menambah value pada urutan terakhir

// .unshift ==> untuk menghapus value pada urutan terakhir


angka.push(5);
console.log(angka);

angka.pop()
console.log(angka);


// .unshift dan .shift

// .unshift ==> untuk menambah value pada urutan pertama

// .shift ==> untuk menghapus value pada urutan pertama

angka.unshift(0);
console.log(angka);


angka.shift();
console.log(angka);


// .splice  ==> untuk menghapus dan menambah value dalam array

angka.splice(2,2,5,6);
console.log(angka);


// .slice ==> untuk mengambil value dalam array

console.log(angka.slice(0,3));


// .map ==> untuk memodifikasi suatu array

let a = angka.map((angka,i) => `angka ${angka} = index ${i}`)
console.log(a);


// .forEach  ==> versi simple dari for, hasilnya sama tetapi lebih ringkas

let urutanAngka = angka.forEach(function(a,i) {
    console.log(`${a} urutan ke-${i + 1}`); } );


// .indexOf ==> untuk mencari index sebuah value dalam array

let cariIndexAngka = angka.indexOf(5);
console.log(cariIndexAngka);


// .includes ==> mengecek apa value tersebut ada didalam array / tidak ,jika ada true dan jika tidak false

console.log(angka.includes(2));


// .concat ==> untuk menggabung 2 buah array menjadi 1 array baru

let angka2 = [7,8,9];
let gabung = angka.concat(angka2);
console.log(gabung);


// .join  ==> untuk keluar dari array ,yg sebelumnya [1,2,5,6,7,8,9] menjadi 1,2,5,6,7,8,9

console.log(gabung.join(','));


// .reverse  ==> untuk membalikkan value didalam array dari yang [1,2,5,6,7,8,9] menjadi [9,8,7,6,5,2,1]

console.log(gabung.reverse());


// .sort ==> Untuk mengurutkan value dalam array agar urutan sesuai Alfabet

let nama = ['Qyo','Lyna','Zhe','Agam']
console.log(nama.sort());


// .filter  ==> seperti namanya .filter digunakan untuk mem filter suatu array

let ganjil = gabung.filter(function(a){
    return a % 2 !== 0;   })

console.log(ganjil);


// .reduce ==> untuk menghitung penjumlahan yang kompleks

let hargaBelanja = [12000,21000,53000,74000];
let totalHarga   = hargaBelanja.reduce(function(harga,total){
    return harga + total;  },0);

console.log(totalHarga);


// .find  ==> untuk mencari object didalam array menggunakan 'key'

let asal  = [
    {nama: 'Qyo' ,asal: 'bogor'},
    {nama: 'Lyna',asal: 'malang'},
    {nama: 'Zhe' ,asal: 'jakarta'}
];

let cariAsal = asal.find(function(n) {
    return n.asal === 'bogor';  })

console.log(cariAsal);


// .some dan .every ==> untuk mengecek true atau false

// .some jika hanya ada 1 saja yang memenuhi syarat maka hasilnya akan true ini mirip kayak fardhu kifayah

// .every harus semuanya memenuhi syarat jika tidak maka akan false

let tinggi = [197,184,170,199,153];
let cekTinggi = tinggi.some(function(t){
    return t > 165 ;  })

console.log(cekTinggi);

let cekPendek = tinggi.every(function(p){
    return p < 165 ; })

console.log(cekPendek);


// .findIndex ==> untuk mencari index sebuah value dalam array


let hewan = ['gagak','gurita','rubah'];
let cariIndex = hewan.findIndex(function(h){
    return h === 'rubah' ; })

console.log(cariIndex);



// .flat dan .flatMap

// .flat ==> untuk menggabungkan ,agar array yg didalam array dapat keluar / menjadi 1 array, yg sebelumnya di 'ruangan'
// menjadi outputnya: ['kelas 1','kelas 2','ruang guru','UKS'],

// dan .flatMap ==> Sama seperti flat untuk memodifikasi array tapi .flatMap juga dapat merubah isinya,
// .flat hanya menggabungkan jika .flatMap dapat memodifikasi isinya


let ruangan = [['kelas 1','kelas 2'],['ruang guru','UKS']];
let sekolah = ruangan.flat();
console.log(sekolah);


let perkalian = [3,5,2];
let jumlah    = perkalian.flatMap(function(x){
    return x * 4 ;  })
console.log(jumlah);


// Spread ==> untuk menggabungkan kedua array mirip .concat dan juga spread ini bisa menambah value didalamnya contoh: 'pakai blender'

let buah = ['pisang','strawberry','buah naga'];
let bahan = ['gula','susu','es batu'];

let jus = [...buah,...bahan,'pakai blender'];
console.log(jus);


// Destructuring ==> untuk memecah array yaitu dari num = [2,4,6,8] menjadi w = 2, x = 4, y = 6, z = 8

let num = [2,4,6,8];

let [w,x,y,z] = num;

console.log(x);

 







