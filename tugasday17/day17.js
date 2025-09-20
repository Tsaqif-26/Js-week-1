// LEVEL 1

// 1.

document.getElementById("p1").innerText = "Halo DOM!"

// 2.

let pa = document.getElementsByClassName("paragraf")

for (let i of pa){
    i.style.color  = 'blue'
}

// 3.

let li = document.getElementsByTagName("li")

for (let l of li){
    l.innerText += ' - Item'
}

// 4.

let foto = document.querySelector("#foto");
foto.src = "/mushroom.png"

// 5.

let teks = document.querySelectorAll(".teks");
teks.forEach((i,p) => {
    i.innerText = `Teks ke-${p + 1}`
});

// 6.

document.getElementById("tex").innerText = "Akhir" 

// 7.

document.getElementById("do").innerHTML= "<strong>BELAJAR DOM</strong>"

// 8.

document.getElementById("div").innerText = "Ini baru dari JS"

// 9.

document.getElementById("s").style.display = "none" 

// 10.

document.getElementById("t").style.display = "block"

// LEVEL 2

// 11.

let pg = document.querySelectorAll(".warna")
let warna =  ["red","green","blue"]

pg.forEach((p,i) => {
    p.style.color = warna[i]
});

// 12.

let box = document.getElementById("box")
box.style.width = "200px"
box.style.height = "200px"
box.style.backgroundColor= "yellow"

// 13.

let link = document.getElementById("link")

link.setAttribute("href", "https://google.com")
link.setAttribute("target", "_blank")

// 14.

let pr = document.querySelectorAll("#pr")

pr.forEach(t => {
    t.innerText = t.innerText.toUpperCase()
});

// 15.

document.getElementById("judul").classList.add("highlight")

// LEVEL 3

// 16.

let item = document.querySelectorAll(".item")

item.forEach((p,i) => {
    if (i % 2 === 0) {
        p.style.color = "red"
    } else {
        p.style.color = "blue"
    }
});

// 17.

let img = document.querySelectorAll(".img")
img.forEach(p => {
    p.src = "placeholder.jpg"
});

// 18.

let pi = document.getElementById("pi")
pi.style.color = "white"
pi.style.backgroundColor = "black"
pi.style.fontSize = "30px"

// 19.

fetch("https://equran.id/api/v2/surat/1")
    .then(p => p.json())
    .then(d => {
        document.getElementById("surat").innerText = d.data.namaLatin
    })

// 20.


fetch("https://equran.id/api/v2/surat")
  .then(res => res.json())
  .then(data => {
    data.data.forEach((surat, i) => {
      if (i < 5) {
        document.getElementById("urutan").innerHTML += `<li>${surat.namaLatin}</li>`;
      }
    });
  });
