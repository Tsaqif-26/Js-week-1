
## Bagian A: Pertanyaan Teori (5 soal)

### Apa perbedaan mendasar antara callback function dan Promise dalam menangani proses asynchronous? Clue: pikirkan soal "pyramid of doom" vs chaining .then()

Promise hanya bisa menggunakan 1 function ,sementara jika callback function bisa menggunakan lebih dari 1 => 
bisa memanggil ulang function lain.

### Mengapa async/await sering dianggap lebih mudah dibaca dibandingkan Promise chaining? Berikan contoh singkat. Clue: bayangkan kode sinkron biasa, tapi ada await.

async function lebih simple dan juga lebih rapi dalam codingannya dibandingkan dengan promise chaining yang panjang dan juga tidak rapi

```javascript

function number() {
     return 88
}

async function getNumber() {
    let angka = await number()
    console.log(angka);
}
getNumber()
```

### Jelaskan apa fungsi try...catch dalam JavaScript, dan berikan contoh kasus nyata yang membutuhkan error handling. Clue: gimana kalau koneksi API gagal atau data kosong.

try untuk menangkap hasil jika berhasil dan catch untuk menangkap hasil yang gagal 

``` javascript
function tambah(a, b) {
    return new Promise((resolve) => {
            resolve(a + b)
    })
}

async function hitung() {
    try {
        let hasil = await tambah(30, 40)
        console.log("hasilnya ", hasil)
    } catch(e) {
        console.error("eror", e)
    }
}
hitung()
```

### Sebutkan perbedaan antara JSON.stringify() dan JSON.parse(), lalu berikan contoh penggunaan keduanya pada data objek JavaScript Clue: satunya ubah ke string, satunya balik lagi ke objek.

JSON.stringify() untuk mengubah Object menjadi string dan JSON.parse() untuk mengubah String menjadi Object

```javascript
const santri = {nama: 'Zhye' , umur: 21}
const stringify = JSON.stringify(santri)                       
const parse = JSON.parse(stringify) 
                      
console.log(stringify);
console.log(parse);

```

### Mengapa modularisasi (import/export) sangat penting dalam proyek besar? Apa resiko kalau semua code ditulis dalam satu file?  Clue: bayangkan proyek 5000 baris kode jadi 1 file.

Karena dengan Import dan export dapat memudahkan kita dalam momodifikasi ulang jika ada codingan yang salah, yaitu dapat
memudahkan kita mencari dimana coding yang salah ,karena kita sudah memisahkan bagian bagian sendiri dengan menggunakan
export dan import sehingga mudah dicari dimana letak salahnya. 




