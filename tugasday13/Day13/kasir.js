//SOAL 1

let belanja = [15000, 25000, 8000, 12000]
export default belanja.reduce(function(harga,jumlah){
    return harga + jumlah ; },0)
