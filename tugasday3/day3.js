// SOAL 1

// SOAL 2

// IF ELSE

// 1.
// function cekWaktuShalat(jam) {                   //Contoh If Else bertingkat
    // if (jam >= 4 && jam <= 5) {console.log("Waktu shubuh");
    // } else if (jam >= 12 && jam <=13) {console.log("Waktu Dhuhur");
    // } else if (jam >= 15 && jam <=16) {console.log("Waktu Ashar");
    // } else if (jam >= 18 && jam < 19) {console.log("Waktu Maghrib");
    // } else if (jam >= 19 && jam <=20) {console.log("Waktu Isya");
    // } else {console.log("Bukan Waktu Sholat")
    // }{   }{  }}

// cekWaktuShalat(20)        //Contoh hasil : Sholat Isya

// 2.
// function validasiUsia(usia) {      //Contoh If Else Biasa
    // if (usia >= 12 && usia <= 18) {console.log("Layak Mondok");
    // } else {console.log("Tidak Layak Mondok");
    // }}

// validasiUsia(15)   //Hasil "Layak Mondok"      Cara Pemanggilan If Else

// 3
// function nilaiAkhlak(nilai) {
    // if (nilai >= 85) {console.log("Akhlak Mulia");        
    // } else {console.log("Perlu Pembinaan");
    // }}

// nilaiAkhlak(50)      //Hasil "Perlu Pembinaan"

// 4.
// function perlengkapanSholat(pakaiKopiah,pakaiSarung,bawaSajadah) {        //contoh If else menggunakan Boolean
    // if (pakaiKopiah,pakaiSarung,bawaSajadah) { console.log("Siap Sholat")
    // } else if (!pakaiKopiah) {console.log("Ga pakai kopiah");
    // } else if (!pakaiSarung) {console.log("Ga pakai sarung");
    // } else if (!bawaSajadah) {console.log("Ga bawa sajadah");
    // } else {console.log("Ga siap Sholat");
    // }{
    // }}

// perlengkapanSholat(true,true,true)   //Contoh menggunakan Boolean

// 5.
// function izinPondok(alasan) {
    // let izin = alasan.toLowerCase()               //agar funciton bisa dipanggil walau tidak sesuai huruf besa atau huruf kecil
    //   if (izin==="sakit" || izin==="keluarga" || izin==="prestasi") {console.log("Izin Diterima");    // || sebagai "Atau"
    //   } else {console.log("Izin Ditolak");        
    //   }}
    
// izinPondok("SakIt")    //Hasil "izin diterima" walau tdk sesuai

// SWITCH

// 6.
// let x = "rabu".toLowerCase();                     //cara memanggilnya hasil "ekstrakurikuler"
// switch (x) {                                     //contoh penggunaan switch
//     case 'senin':
//         console.log('Sekolah');             //contoh case case 
//         break;                             //berhenti agar tidak tembus ke case lainnya
//     case 'selasa':
//         console.log('Les');
//          break;
//     case 'rabu':
//         console.log('Ekstrakurikuler');
//         break;
//     case 'kamis':
//         console.log('Lomba');
//         break;
//     case 'jumat':
//         console.log("Setor hafalan");
//         break;
//     case 'sabtu':
//         console.log('Libur');
//         break;
//     case 'minggu':
//         console.log('Nyantai');
//         break;
//     default:                           //jika salah semua langsung ke default
//         console.log("Aktivitas 1 minggu");
//         break;
// }

// 7.
// let v = 4;                   
// switch (v) {                          
//     case 1:
//         console.log('Nasi goreng');             
//         break;                            
//     case 2:
//         console.log('Ayam goreng');
//          break;
//     case 3:
//         console.log('Mie ayam');
//         break;
//     case 4:
//         console.log('Es Teh');
//         break;
//     case 5:
//         console.log("Air Putih");
//         break;
//      default:                           
//         console.log("Menu habis");
//         break;
// }

// 8.
// let code = 5
// switch (code) {
//   case 1:
//     console.log("Asrama A");
//     break;
//   case 2:
//     console.log("Asrama B");
//     break;
//   case 3:
//     console.log("Asrama C");
//     break;
//   case 4:
//     console.log("Asrama D");
//     break;
//   default:
//     console.log("Asrama Orang");
// }

// 9.
// let hukuman = 3
// switch (hukuman) {
//   case 1:
//     console.log("Nasihat");
//     break;
//   case 2:
//     console.log("Hafalan Taubat");
//     break;
//   case 3:
//     console.log("Kerja Sosial");
//     break;
//   case 4:
//     console.log("Skors");
//     break;
//   default:
//     console.log("Drop out");
// }

// 10.
// let jabatan = 'OsIs'.toLowerCase();
// switch (jabatan) {
//   case 'pimpinan':
//     console.log("Memimpin pondok");
//     break;
//   case 'pengurus':
//     console.log("Mengurus para musyrif");
//     break;
//   case 'musyrif':
//     console.log("Mengurus para santri");
//     break;
//   case 'osis':
//     console.log("Mengurus para santri di sekolah ");
//     break;
//   default:
//     console.log("Santri biasa");
// }

// FOR LOOP

// 11.
// let nama = [            //untuk membuat daftarnya
//     'asep',            //menggunakan array[] 
//     'bokem',
//     'cici',
//     'daluh'
// ]
// for (let start = 0; start < nama.length; start++) {            //Cara menggunakan for loop start < nama sehingga start +1
//     console.log((start+1) + '.' + nama[start] + ' Hadir')      //cara memanggil for loop
// }

// 12.
// let hafalan = [3,10,5,7,1,4,9]                    //setoran ayat selama 1 minggu
// let total = 0                                    //untuk hasil
// for (let start = 0; start < hafalan.length; start++) {    
    // total += hafalan[start];      }                        //untuk menghitung total ayat
// console.log(" total hafalan minggu ini " + total + " ayat")    //cara memanggil

// 13.
// let jam = ["4-5 ","12-13 ","15-16 ","17-18 ","19-20 "]
// let Sholat = ["Sholat shubuh","Sholat dhuhur","Sholat ashar","Sholat maghrib","Sholat isya"]
// for (let i = 0; i < jam.length; i++) {
//     console.log((i+1) + '.' + " jam " + jam[i] + Sholat[i] )}          //[] agar keluar satu per satu

// 14.
// for (let n = 1; n <= 10; n++) {
//     let h ="Semangat Santri!"             //Untuk menulis "semangat santri!"
//     console.log(h);}                     //pemanggilan dengan jumlah 'n'

// 15.
// for (let i = 20; i >= 1; i--) {         //untuk kondisi 1
//     let l = "";                          //output pertama
//     for (let j = 1; j <= i; j++) {         //kondisi 2
//         l +="*"}                         //output ke2
//     console.log(l);} 

// OPERATOR

// 16.
// let harta = 300000000                         //Jumlah harta
// let emas = 2000000                           //Harga emas
// let nisab = emas * 85                       //Jumlah nisab
// if (harta >= nisab) {
//     let zakat = harta * 0.025              //Zakat yg dibayar 2.5% jumlah harta
//     console.log(`Zakat yang wajib dibayar ${zakat.toLocaleString()} rupiah`);     //toLocalString() sebagai ',' contoh:1,000
// } else {console.log("Belum wajib zakat");}            //Hasil "Zakat yang wajib dibayar 7,000,000 rupiah"

// 17.
// let dataUser = 'kiki'                           //sebagai data user dan password
// let dataPass = 'kiki123'
// let username = 'kiki'                          
// let password = '123'
// if (dataUser === username && dataPass === password) {      //jika sama maka "login berhasil"
//     console.log("Login berhasil");                          
// } else {console.log("Login gagal");}                       //hasil "Login gagal" karena password beda

// 18.
// let hafalan = 20
// let nilaiAkhlak = 79
// if (hafalan >= 10 && nilaiAkhlak >= 80) {
//     console.log("Lulus");
// } else {console.log("Tidak lulus");}         //Hasil "tidak lulus" karena nilai akhlak kurang

// 19.
// let umur = 18                                  //umur pembeli
// let totalBelanja = 2000000                     //total belanja
// if (umur >= 18 && totalBelanja >= 1000000) {
    // let diskon = totalBelanja * 0.9;                    //10% = 0.9
    // console.log(`Total belanja anda ${totalBelanja.toLocaleString()} karena mendapatkan diskon menjadi ${diskon.toLocaleString()}`);
// } else {console.log(`Total belanja anda ${totalBelanja.toLocaleString()}`);}      //total belanja menjadi 1,800,000

// 20.
// let password = 'sAntri23456';

// let panjang = password.length >= 8;                       //password harus lebih atau sama 8 huruf
// let kapital = password.match(/[A-Z]/);                   // match A-Z agar mengecek huruf kapital 
// let kecil   = password.match(/[a-z]/);                  // mastch a-z untuk mengecek huruf kecil 
// let angka   = password.match(/[0-9]/);                 // match 0-9 mengecek ada angka atau tidak
// if (panjang && kapital && kecil && angka) {           //password aman gabungan dari semuanya
//     console.log("Password aman");
// } else {console.log("Password tidak aman")}         // kalo belum sesuai password tidak aman

//FUNCTION SEDERHANA

// 21.
// let ustadz = ['Gabi','Heru','Seki','jim'];
// let hari   = ['Senin','Rabu','Kamis','Jumat'];

// function jadwal(ustadz,hari) {
//     console.log(`Ngaji bersama Ust.${ustadz} pada hari ${hari}`)}   //Gabungan function dan for
 
// for (let i = 0; i < ustadz.length; i++) {
// jadwal(ustadz[i],hari[i])}

// 22.
// function luas(panjang,lebar) {
// let luas = panjang*lebar;
// let keliling = 2*(panjang+lebar);

// return{                               //untuk mengubah variabel
//     luas : luas,
//     keliling : keliling
// };}
// let hasil = luas(15,20)                //pemanggilan
//  console.log(hasil)                   //hasil (Luas:300,Keliling:70)

// 23.
// function masehi(hijriyah) {
//     console.log(hijriyah + 622 + ' Masehi')
// }
// masehi(1403)

// 24.
// let totalHafalan = 0
// function hafalan(ayat) {
//     for (let i = 0; i < ayat.length; i++) {
//     totalHafalan += ayat[i];
//     }return totalHafalan;}
// let ayatSeminggu = [9,7,6,5,3,8,1,2,5]                      //jumlah ayat dimasukkan ke let sebelum dimasukkan ke function
// console.log(`total hafalan ${hafalan(ayatSeminggu)} ayat`); // hasil ' total hafalan 46 ayat'

// 25.
// function balikNama(nama) {                             //Split untuk membuat string menjadi array('asep') => ('a','s','e','p')
    //     return nama.split('').reverse().join('') }    //reverse agar diputar balik  ('a','s','e','p') => ('p','e','s','a')
// console.log( balikNama('Leya'));                     //join agar array balik menjadi string ('p','e','s','a') => ('pesa')
