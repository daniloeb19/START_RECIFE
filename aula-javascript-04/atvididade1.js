// 1)      Criar Array com 10 itens ( de 1 a 10).
// a)       Exibir no console o total de itens.
// b)      Exibir no console os itens nas posições: 1, 3, 5, 8.
let itens = [1,2,3,4,5,6,7,8,9,10];
for (let index = 0; index < itens.length; index++) {
    console.log(itens[index]);
}
console.log(itens[1]);
console.log(itens[3]);
console.log(itens[5]);
console.log(itens[8]);

// 2)      Criar Array com 5 itens (nome de filmes).
// a)       Exibir no console o total de itens.
// b)      Exibir no console os itens nas posições: 2, 4.
// c)       Exibir no console o item na primeira posição.
let filmes = ["Shrek","Gato de Botas","Frozen","Nárnia","João e Maria"];
console.log(filmes.length);
console.log(filmes[2]);
console.log(filmes[4]);
console.log(filmes[1]);
// 3)      Criar Array com 6 itens (nome de músicas).
// a)       Exibir no console o total de itens.
// b)      Exibir no console os itens nas posições : 1, 2, 6, 8.
// c)       Exibir no console o item na última posição.
let musicas = ["Drown","Can You Fell My Heart?","In the End","Do I Wanna Know?","Surreal","Samurai"];
console.log(musicas.length);
console.log(musicas[1]);
console.log(musicas[2]);
console.log(musicas[6]);
console.log(musicas[8]);
console.log(musicas[musicas.length-1]);