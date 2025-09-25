
//SOAL

 // 6.
// function simpan(){
//     let save = document.getElementById("nama").value
//     localStorage.setItem('username',save) 
//     }
//     let ambil = localStorage.getItem('username')

// 7.
// function tampil(){
// let tampil = document.getElementById("nama").value
//     localStorage.setItem('tpl',tampil)
//     document.getElementById("lihat").innerHTML = "Tersimpan"
    // }

// 8.
// document.getElementById("form").addEventListener("submit",function(e) {
//     e.preventDefault()

//     let name = document.getElementById("n").value
//     let pass =document.getElementById("p").value

//     localStorage.setItem("akun",name)
//     localStorage.setItem("paas",pass)
// })

// 9.
// document.getElementById("r").addEventListener("click",function(i){
//     i.preventDefault()

//     localStorage.removeItem("akun")
//     localStorage.removeItem("paas")
// })

// 10.
// document.getElementById("a").addEventListener("click", function() {
//       let nilai = parseInt(localStorage.getItem("tambah")) || 0;
//       nilai += 1;
//       localStorage.setItem("tambah", nilai);
//       document.getElementById("hasil").textContent = nilai;
//     });

// 11.
// document.getElementById("dark").onclick = () => {
//     localStorage.setItem("theme","dark")}

// document.getElementById("light").onclick = () => {
//     localStorage.setItem("theme","light")}

// 12.

// document.getElementById("dark").onclick = () => {
//     localStorage.setItem("theme","dark")
//     tema() }

// document.getElementById("light").onclick = () => {
//     localStorage.setItem("theme","light")
//     tema() }

// function tema(){
//     if (localStorage.getItem("theme") === "dark") {
//         document.body.style.color = "white"
//         document.body.style.backgroundColor = "black"

//     } else {
//          document.body.style.color = "black"
//         document.body.style.backgroundColor = "white"
//     }
// }
// tema()

// 13.
// let keranjang = JSON.parse(sessionStorage.getItem("keranjang")) || []

// document.getElementById("tambah").onclick = () => {
//     let k = document.getElementById("belanja").value
//     keranjang.push(k)
//     sessionStorage.setItem("keranjang",JSON.stringify(keranjang))
// }

// 14.
// let keranjang = JSON.parse(localStorage.getItem("keranjang")) || []

// document.getElementById("tambah").onclick = () => {
//     let k = document.getElementById("belanja").value
//     keranjang.push(k)
//     localStorage.setItem("keranjang",JSON.stringify(keranjang))
// }

// 15.
// let clear = document.getElementById("clear").onclick = () => {localStorage.clear()}

// 16.
// document.getElementById("pencet").onclick = () => {
// let nama = document.getElementById("namaa").value
// let email = document.getElementById("email").value
// let pass = document.getElementById("pass").value

// localStorage.setItem("nama",nama)
// localStorage.setItem("email",email)
// localStorage.setItem("pass",pass)
// }

// 17.
// window.onload = () => {
//     document.getElementById("namaa").value = localStorage.getItem("nama") || ""
//     document.getElementById("email").value = localStorage.getItem("email") || ""
//     document.getElementById("pass").value = localStorage.getItem("pass") || ""
// }

// document.getElementById("pencet").onclick = () => {
// let nama = document.getElementById("namaa").value
// let email = document.getElementById("email").value
// let pass = document.getElementById("pass").value

// localStorage.setItem("nama",nama)
// localStorage.setItem("email",email)
// localStorage.setItem("pass",pass)
// }

// 18.
// if (localStorage.getItem("user")) {
//     document.getElementById("name").value = localStorage.getItem("user")
// }

// document.getElementById("klik").onclick = () => {
//     let username = document.getElementById("name").value
//     localStorage.setItem("user",username)
// }

// 19.
// document.getElementById("ganti").onclick = () => {
//     let ganti = document.getElementById("name").value
//     localStorage.setItem("user",ganti)
// }

// 20.
// let user = document.getElementById("isi")
// if (localStorage.getItem("isi")) {
//     user.value = localStorage.getItem("isi")
// }

// let cek = document.getElementById("click").onclick = () => {
//     let check = document.getElementById("box").checked
//     if (check) {
//         localStorage.setItem("isi",user.value)
//     } else {
//         localStorage.removeItem("isi")
//     }
// }