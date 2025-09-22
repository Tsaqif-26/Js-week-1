
export const tambah = (a, b) => a + b,
             kali = (a ,b) => a * b;
export const subtotal = items => items.reduce((t, i) => t + i.harga * i.jumlah,0);
export const pajak= t => t * 0.1,
             diskon = t => t * 0.05, 
             kembalian = (b, t) => b - t;
