// 1)      Criar uma função para receber dois parâmetros: numero e percentual.
// a)       Calcular a porcentagem de um número  usando a fórmula:
// b)       Chamar a função e exibir o resultado no console.

function calcPorcentagem(num,perc) {
    let resultado = (num/100)*perc;
    return resultado;
}
console.log(calcPorcentagem(20,10))

// 2)      Criar uma função que recebe dois arrays como parâmetro e juntar os arrays:
// a)       Converter o array para string e retornar o resultado.
// b)      Chamar a função e exibir o resultado no console.

function concatenarArray(arr1,arr2) {
    var retorno = arr1.concat(arr2);
    retorno = retorno.toString().replaceAll(","," ");
    return retorno;
}
console.log(concatenarArray(["Danilo"],["Ferreira"]));