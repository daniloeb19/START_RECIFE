// 1)      Criar uma função para receber  uma string como parâmetro:
// a)       Contar a quantidade de palavras repetidas em uma frase e retornar o total.
// b)      Chamar a função e exibir o resultado no console.

function contarRepeticoes(str) {
    let arrayStr = str.split(" ");
    let contator = 0;
    for (let index = 0; index < arrayStr.length; index++) {
        if (arrayStr[index] === arrayStr[arrayStr.length - index]) {
            contator++;
        }
    }
    contator++;
    return contator;
}
console.log(contarRepeticoes("Teste de String String String String"));

// 2)      Criar uma função que receba um array com 5 números como parâmetros:
// a)       Inverter o array e retornar o resultado.
// b)      Chamar a função e exibir o resultado no console.

function retornarArrayOrdenado(arr) {
    arr.sort(function (a, b) {
        return b.localeCompare(a);
    });
    return arr;
}
console.log(retornarArrayOrdenado([2, 8, 1, -3, 5]));

// 3)      Criar uma função que receba 4 números inteiros positivos como parâmetros:
// a)       Calcular a soma de todos os números.
// b)      Retornar o Resultado.
// c)       Chamar a função e exibir o resultado no console.

function calcularSoma(num1, num2, num3, num4) {
    let calc = num1 + num2 + num3 + num4;
    return calc;
}
console.log(calcularSoma(2, 4, 3, 6))