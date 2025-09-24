
// document.getElementById("formm").addEventListener("submit",function(e) {
//     e.preventDefault()


//16.

// let nama = document.getElementById("nama").value.trim()
//             if (nama === "") {
//                 alert("Nama Wajib Diisi")
//             }

// 17.

// let usia = document.getElementById("usia").value
//             if (usia < 18) {
//                 alert("Minimal 18 Tahun")
//             }

// 18.

// let pass = document.getElementById("pass").value.trim()
//             if (pass.length < 8) {
//                 alert("Password Kurang panjang")
//             }

// 19.

// let em = document.getElementById("em").value
// let regex = /^[\w.-]+@[\w.-]+\.\w{2,}$/

//             if (regex.test(em)) {
//                 alert("Sukses")
//             } else {
//                 alert("Gagal")
//             }

// 20.

// let no = document.getElementById("no").value
// isNaN(no)

// 21.

// let pas = document.getElementById("k1").value.trim()
// let con = document.getElementById("k2").value.trim()

//             if (pas !== con) {
//                 alert("password salah")
//             } else {
//                 alert("password benar")
//             }

// 22.

// let date = document.getElementById("date").value
// let hasil = new Date(date) > new Date()
// alert(hasil)

// 23.

// let user = document.getElementById("user").value.trim()
// let rgx = /^[a-zA-Z0-9]{5,}$/

//     if (rgx.test(user)) {
//         alert("Username Bisa dipakai")
//     } else {
//         alert("Username Tidak sesuai")
//     }

// 24.

// let akun = document.getElementById("akun").value.trim()
// let pw = document.getElementById("pw").value

// if (!akun || !pw) {
//     alert("Harus Diisi")
// } else {
//     alert("Login Berhasil")
// }

// 25.

// let box = document.getElementById("box")
//     if (!box.checked) {
//         alert("Tidak setuju")
//     } else {
//         alert("setuju")
//     }

// 26.

// let angka = document.getElementById("ang").value
//     if (angka % 2 !== 0) {
//         alert("Angka Harus Genap")
//     } else {
//         alert("Angka genap")
//     }

// 27.

// let area = document.getElementById("area").value.trim()
//     if (area.length > 200) {
//         alert("Tidak boleh lebih dari 200 karakter")
//     } else {
//         alert("Oke")
//     }

// 28.

// let op = document.getElementById("option").value.trim()
//     if (op.value === "") {
//         alert("Harus diisi")
//     } else {
//         alert("Sudah diisi")
//     }

// 29.

// let file = document.getElementById("file").value
//         if (file.endsWith(".jpg") || file.endsWith(".png")) {
//             alert("File Benar")
//         } else {
//             alert("File salah")
//         }

// })

// 30.

// document.getElementById("form").addEventListener("submit",function(i){
//     i.preventDefault()


// let n = document.getElementById("n").value.trim()
// let e = document.getElementById("e").value.trim()
// let p = document.getElementById("p").value.trim()

//     if (n === "" || e === "" || p === "") {
//         alert("Harus Diisi Semua")
//     } else {
//         alert("Daftar Berhasil")
//     }})