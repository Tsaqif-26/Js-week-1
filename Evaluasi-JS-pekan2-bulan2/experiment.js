// Buat Contoh Kasus Menggunakan Gabungan Function

let bahan = ['bawang','cingur','bumbu rujak','petis'];
let add    = ['lontong','tahu','tempe','sayur'];
let rujak  = bahan
            .concat(add)
            .splice(0,8)
            .slice(1)
            .sort()
            .join(',')

console.log(rujak);





