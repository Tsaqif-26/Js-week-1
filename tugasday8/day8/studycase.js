//TUGAS

// 1.  .push
// let hewan = ['kuda','ikan'];
// hewan.push('naga');
// console.log(hewan);

// 2.   .pop
// let kota = ['surabaya','malang','kertosono'];
// kota.pop();
// console.log(kota);

// 3.  .shift
// let buah = ['nanas','leci','jeruk'];
// buah.shift();
// console.log(buah);

// 4.    .unshift
// let nama = ['kiya','rev'];
// nama.unshift('jeo');
// console.log(nama);

// 5.    .splice
// let buah = ['apel','semangka','jambu'];
// buah.splice(0,2,'durian','duku');
// console.log(buah);

// 6.    .slice
// let hewan = ['kelinci','kuda','ayam'];
// let potong = hewan.slice(0,2)
// console.log(potong);

// 7.    .map
// let angka = [2,4,6];
// let tambah = angka.map(function(a){
//     return a + 5 ;})
// console.log(tambah);

// 8.    .forEach
// let urutan = ['asya','joy','kiko'];
// let antri = urutan.forEach(function(v,i){
// console.log(`${v} urutan ke-${i + 1}`);})

// 9.    .indexOf
// let pc = ['mouse','monitor','casing'];
// let bongkar = pc.indexOf('monitor');
// console.log(bongkar);

// 10.   .includes
// let siswa = ['teo','gigan','wey'];
// console.log(siswa.includes('gigan'));

// 11.   .concat
// let makanan = ['bakso','mie ayam'];
// let minuman = ['es teh','es jeruk'];
// let gabung = makanan.concat(minuman);
// console.log(gabung);

// 12.   .join
// let random = ['satu','dua',3,4]
// let ran = random.join('|')
// console.log(ran);

// 13.   .revere
// let angka = [1,2,3,4,5]
// console.log(angka.reverse());

// 14.   .sort
// let nama = ['sey','zade','apuy'];
// console.log(nama.sort());

// 15.   .filter
// let angka = [3,4,6];
// let genap = angka.filter(function(a){
//     return a % 2 == 0;})
// console.log(genap);

// 16.   .reduce
// let harga = [15000,23000,7000];
// let total = harga.reduce(function(harga,semua){
//     return harga + semua;  },0);
// console.log(total);

// 17.   .find
// let rumah = [
//     {pass: 123 , nama: 'frei' },
//     {pass: 321 , nama: 'kiki' },
//     {pass: 231 , nama: 'yero' }
// ]
// let cari = rumah.find(function(prod){
//     return prod.pass === 231;})
// console.log(cari);

// 18.   .some
// let tinggi = [132,165,186];
// let satuTinggi = tinggi.some(function(a){
//     return a > 170; })
// console.log(satuTinggi);

// 19.   .every
// let pendek = [125,149,146]
// let pendekSemua = pendek.every(function(b){
//     return b < 150; })
// console.log(pendekSemua);

// 20.   .findIndex
// let animals = ['tiger','elephant','leopard','eagle'];
// let index   = animals.findIndex(function(a){
//     return a === 'eagle';});
// console.log(index);

// 21.   .flat
// let komputer = [['mouse','monitor','keyboard'],['pc','casing','earphone']];
// let gabung   = komputer.flat();
// console.log(gabung);

// 22.   .flatMap
// let angka = [2,4,6];
// let pangkat2 = angka.flatMap(function(a,b){
//     return [a , a ** 2]  })
// console.log(pangkat2);

// 23.   Spread
// let asli = ['asli','true','fact'];
// let copy = [...asli]
// copy.push('copy');
// console.log(asli);
// console.log(copy);

// 24.   Destructuring array
// let eropa = ['inggris','spanyol','prancis'];
// let asia  = ['jepang','korea','thailand'];
// let fusion = [...eropa, ...asia, 'amerika'];
// console.log(fusion);

// 25.   CONTOH GABUNGAN
let fruits = ['melon','grapes','mango'];
let add    = ['milk','cheese','jelly'];
let salad  = fruits
            .concat(add)
            .splice(0,6)
            .slice(1)
            .sort()
            .join('|')

console.log(salad);