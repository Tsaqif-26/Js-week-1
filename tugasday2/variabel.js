// // DAY 2


// // 🟡 DEKLARASI VARIABEL 🟡             =====================

// // let a = 10;
// // let A = 20;
// // let c = a;
// // c = c + 100;

// // console.log(c);



// // 🟡 UNIQUE IDENTIFIER RULES 🟡        ======================

// // 🔸 Valid examples:
// let firstName = "John";
// let _privateVar = true;
// let $price = 99.99;
// let camelCase = "standard naming";
// let user123 = "allowed";

// // 🔸 Invalid examples (commented out):
// // let 123user = "invalid";   
// // let my-var = "invalid";   
// // let let = "invalid";    

// // let a = 100000000; // Global Scope
// function f1(){
// //    var andi = 1000;
//     /// Function Scope
//     if(true){
//         // Block Scope
//         ////////
//         let andi = 10;
//         // let andi = 20;
//         console.log("ini dalam scope if punya: " + andi);
//         /////////
//     }
//     /////////
//     let andi = 100;
//     console.log("Ini Di luar scope if: " +  andi);
// }

// // f1();

// // const a1 = firstName;
// // console.log(a1);    

// // let a2;
// // console.log(a2);




// let naml = 1;

// function f2(){
//     //////
//     naml = 100;
//     console.count('f2');
// }
// function f3(){
//     console.countReset('f2');
//     var exampl1 = 100;
//     {
//         exampl1; {
//             exampl1;
//         }
//     }
// }


// // console.log(exampl1);
// // f2();
// // f2();
// // f2();
// // f2();
// // f2();
// // f3();

// // console.log("Ini line 56: " + naml );
// var namv = 2;
// const namc = 3;

// // 🟡 CONTOH DENGAN VAR 🟡               ======================

// // 🔸 Global Scope
// // var x = 100; 

// // 🔸 Block Scope
// if (true) {
//     // var a = 10;
// }

// // 🔸 function Scope
// function f() {
//     var b = 20;
// }

// // 🔸 Redeclare - Deklarasi Ulang Variable
// var y = 80;
// var y = 90;

// // 🔸 Reassign - Ubah Nilai
// var t = 100;
// t = 200;

// // 🔸 Hoisting - Akses Sebelum inisialisasi
// // document.getElementById('tag1').innerHTML = z;
// // console.log(z);
// var z = 100;
// // console.log(z);


// // 🟡 CONTOH DENGAN LET 🟡                         ======================

// // 🔸 Global Scope
// // let x = 100;

// // 🔸 Block Scope
// if (true) {
//     let a = 10;
//     console.log('Test ' + x);  
// }

// console.log("Ini Test " + a);


// // 🔸 function Scope
// function f() {
//     let b = 20;
// }

// // 🔸 Redeclare - Deklarasi Ulang Variable
// let x = 100;
// // let x = 200;

// // 🔸 Reassign - Ubah Nilai
// // let y = 100;
// // y = 200;

// // 🔸 Hoisting - Akses Sebelum inisialisasi
// // document.getElementById('tag1').innerHTML = y;
// // let y = 100;


// // 🟡 CONTOH DENGAN CONST 🟡                         ======================

// // 🔸 Global Scope
// // const x = 100;

// // 🔸 Block Scope
// // if (true) {
// //     const a = 10;
// // }

// // 🔸 function Scope
// // function f() {
// //     const b = 20;
// // }

// // 🔸 Redeclare - Deklarasi Ulang Variable
// // const x = 100;
// // const x = 200;

// // 🔸 Reassign - Ubah Nilai
// // const y = 100;
// // y = 200;

// // 🔸 Hoisting - Akses Sebelum inisialisasi
// // document.getElementById('tag1').innerHTML = y;
// // const y = 100;

// // 🔸 Const - Immutable
// // const z = 100;
// // z = 200;

// // 🔸 Const - Immutable Object
// // const obj = {
// //     name: 'John',
// //     age: 30
// // };
// // obj.age = 40;

// // Output
// // document.getElementById('tag1').innerHTML = a;


// naml = 10;
// // console.log("Ini line 163: " + naml);

// let nama99 = prompt("Masukan");

// function salam(n){
//     alert("Assalamualaikum " + n);
//     document.getElementById('tag1').innerHTML = "Assalamualaikum " + n;
// }


// // salam(nama99);