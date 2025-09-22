
let game = [200, 150, 300, 180, 120]
export default game.reduce(function hitungTotalPoin(Poin,total){
    return Poin + total;  },0)

export let poin_maksimal = 1000;
export let bonus = 50;
