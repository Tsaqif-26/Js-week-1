
// import sayHalo, {salamDenganUmur,subject} from "./export.js"   // ==> Cara pemanggilan Manual

// sayHalo sebagai export default (nama bisa bebas diganti dan hanya bisa menggunakan 1 default)
// salamDenganUmur dan subject => export biasa (nama gabisa diganti harus sama di file export.js tapi bisa banyak digunakan)

sayHalo("Qyo","syd","miu","dea","piol","wyve","lloyd")

salamDenganUmur("Ghi",'45')

// cara pemanggilannya sama seperti function pada umumnya


import * as x from "./export.js"  // ==> Ini untuk langsung Pemanggilan semua export 
// * = semua, jadi semua export diambil terus diubah dengan 'as' menjadi 'x'

console.log(x.subject("Aku bElaJar JaVA sCrIpt","Aku bElaJar HtML cSS"));

x.default("Javier","Comp")    

x.salamDenganUmur("queen","30")

console.log(x.contoh);

// Cara pemanggilannya diawali dengan 'x' baru namanya export nya (kecuali default,tetap ditulis default)


