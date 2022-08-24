// 1)      Criar uma função que exibe no console um array com os nomes de 3 estados da região Norte do Brasil:
// a)       Ordenar os elementos do array na ordem invertida

function retornarEstados() {
    let estados = ["Amazonas", "Roraima", "Acre"];
    estados.sort(function (a, b) {
        return a.localeCompare(b);
      });
    return estados;
}
console.log(retornarEstados());

// 2)      Criar uma função que recebe duas strings:
// a)       Transformar todas as letras em maiúsculas do primeiro parâmetro usando toUpperCase().
// b)      Concatenar as duas strings e retornar o resultado.
// c)       Chamar a função e exibir no console o resultado.

function upperCase(str1, str2) {
    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();
    return str1 + " " + str2;
}
console.log(upperCase("Meu nome é", "Danilo"));
// 3)      Criar uma função que retorne 17 vezes a palavra Repetição.
// a)       Chamar a função e exibir no console o resultado.

function retornarRepeticao() {
    for (let index = 0; index < 17; index++) {
        console.log("Repetição");
    }
}
retornarRepeticao();