// 1)      Criar uma função de seta (arrow function) que recebe 2 parâmetros e retorna a multiplicação dele
// a)       Chamar a função e exibir o resultado no console.

const multiplicar = (val1, val2) => {
    let resultado = val1 * val2;
    return resultado;
}
console.log(multiplicar(20, 2));

// 2)      Criar uma função de seta (arrow function) que recebe três números como parâmetros , e retorna o maior número dos 3 valore
// a)       Chamar a função e exibir o resultado no console.

const maiorValor = (val1, val2, val3) => {
    if (val1 > val2 && val1 > val3) {
        return val1;
    } else if (val2 > val1 && val2 > val3) {
        return val2;
    } else if (val3 > val1 && val3 > val2) {
        return val3;
    }
}
console.log(maiorValor(20, 2, 8));

// 3)      Criar uma função de seta (arrow function) que recebe um parâmetro inteiro e retorna a palavra ímpar ou par de acordo com o valor recebid
// a)       Chamar a função e exibir no console o resultado.

const parOuImpar = (val) => {
    if (val % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}
console.log(parOuImpar(20))