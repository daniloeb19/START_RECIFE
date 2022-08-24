// 1)      Criar um array com os nomes de 7 cidades de Pernambuco:
// a)       Ordenar seus elementos na ordem invertida.
// b)      Exibir no console.
// c)    Adicionar duas cidades usando splice().
// d)      Exibir no console.

let cidades = ["Recife", "Petrolina", "Camaragibe", "Jaboatão dos Guararapes", "Cabo de Santo Agostinho", "São Lourenço da Mata"];
cidades.sort(function (a, b) {
    return b.localeCompare(a);
});
console.log(cidades);
cidades.splice(2, 0, "Condado");
console.log(cidades.join());


// 2)Criar um array com os valores 1,4,8,6,9,2,6,7,3,0,5
// a)Obter qual o index onde está o elemento 9.
// b)Exibir no console qual a posição no array em que o elemento 9 está.

let valores = [1, 4, 8, 6, 9, 2, 6, 7, 3, 0, 5];
console.log(valores.indexOf(9));