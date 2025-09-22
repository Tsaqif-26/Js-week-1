
import {Matematika,subtotal,pajak,diskon,kembalian,plus} from "./index.js";

let belanja = [{harga: 20000, jumlah: 2},{harga:15000, jumlah: 1}];

let sub = subtotal(belanja), total = sub + pajak(sub) - diskon(sub);

console.log("Total:",total,"Kembalian:",kembalian(70000,total));
