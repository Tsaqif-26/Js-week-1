
# Pembahasan Tentang practice.js

Dalam practice.js saya mempraktekkan beberapa contoh function yang ada didalam JS,mulai dari yang simple hingga yang lumayan kompleks .
yaitu bagaimana cara penggunaannya, apa manfaatnya, bagaimana contohnya, nah ,didalam practice.js saya sudah mencoba beberapa function dan juga memberikan sedikit penjelasan yang menurut saya mudah untuk dipahami karena simple.
walau mungkin belum semuanya karena saya masih mempelajari isi - isi dari JS dan juga contoh - contoh yang saya berikan merupakan contoh dasar.

Jadi saya akan terus coba mempelajari isi dari JS ini hingga bisa membuat contoh yang lebih kompleks lagi dan menggunakan beberapa function sekaligus, dan juga dapat menjelaskan dengan lebih detail tetapi tetap menggunakan bahasa yang mudah dipahami sehingga orang yang membaca ngga akan kebingungan


# Pembahasan Tentang experiment.js

```javascript

// Variabel dasar
let bahan = ['bawang','cingur','bumbu rujak','petis'];

// Variabel tambahan
let add    = ['lontong','tahu','tempe','sayur'];

// Variabel baru
let rujak  = bahan

// .concat untuk menggabungkan
.concat(add)

// .splice untuk mengambil valuenya berdasarkan index dan length
.splice(0,8)

// .slice untuk menghapus valuenya menggunakan index
.slice(1)

// .sort agar value berurutan sesuai alfabet (a - z)
.sort()

// .join agar dapat keluar dari array[] dan menambahkan ',' pada antar value
.join(',')

// Cara pemanggilannya / cara penggunaan
console.log(rujak);

// Output ===> bumbu rujak,cingur,lontong,petis,sayur,tahu,tempe