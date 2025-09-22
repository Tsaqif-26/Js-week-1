
import { pendapatan } from "./pendapatan.js";
import { pengeluaran } from "./pengeluaran.js";

function total(pendapatan,pengeluaran) {
    return pendapatan - pengeluaran
};


console.log(`Pendapatan: Rp.${pendapatan} dan Pengeluaran: Rp.${pengeluaran} Sisa Uang => Rp.${total(pendapatan,pengeluaran)}`);
