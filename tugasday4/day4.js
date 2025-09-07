// //SOAL 1

// //SOAL 2

// // 1.
// function hitungAbsen(absen) {                                                                //Sebagai function utama
//     if (absen < 1) {                                                                        //jika absen < 1 function gagal
//         return "Absen harus diisi";
//     }
// let hadir = 0 , alpa = 0 , izin = 0;

// for (let i = 0; i < absen.length; i++) {
//     if (absen[i] === "Hadir") {hadir++;
//     }else if (absen[i] === "Alpa") {alpa++;
//     }else if (absen [i] === "Izin"){izin++}
// }

// let rekap = [
//     {jenis : "Hadir" , jumlah : hadir},
//     {jenis : "Alpa"  , jumlah : alpa },
//     {jenis : "Izin"  , jumlah : izin }
// ]

// rekap.forEach(rek =>{
//     switch (rek.jenis) {
//         case "Hadir": console.log(`Hadir : ${hadir} kali`); break;
//         case "Alpa" : console.log(`Alpa : ${alpa} kali` ) ;break; 
//         case "Izin" : console.log(`Izin : ${izin} kali`) ;break;
//     }
// });

// let persen = (hadir / absen.length)*100;

// return `Hadir : ${hadir} kali , Alpa : ${alpa} kali , Izin : ${izin} kali , Dan Persentasi Hadir : ${persen.toFixed(0)} %;`

// }

// console.log(hitungAbsen(["Hadir","Izin","Hadir","Izin","Hadir","Alpa"]));

