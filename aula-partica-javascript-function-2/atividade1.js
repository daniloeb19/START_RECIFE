// 1)      Criar uma função anônima que recebe duas notas de um aluno do ensino médio:
// a)       Calcular a média do aluno.
// b)      Se a média for maior ou igual a 7, retornar "Aprovado!";
// c)       Se a média for maior ou igual a 5 e menor que 7, retornar "Recuperação!";
// d)      Se a média for menor que 5, retornar "Reprovado!".
// e)      Chamar a função e exibir no console o resultado.

const retornarResultado = (nota) => {
    if (nota >= 7) {
        return "Aprovado!";
    }
    if (nota >= 5 && nota < 7) {
        return "Recuperação!";
    }
    if (nota < 5) {
        return "Reprovado!";
    }
}

console.log(retornarResultado(7));

// 2)      Criar uma função anônima que calcula a tabuada de 3.
// a)       Chamar a função e exibir no console o resultado.

const tabuada = () => {
    for (let index = 1; index <= 10; index++) {
        console.log(`${index} * 5 = ` + index * 5);
    }
}
tabuada();

// 3)      Criar uma função de seta (arrow function) que recebe o ano de nascimento de uma pessoa e retorne se ela é maior de idade ou menor.
// a)       Chamar a função e exibir no console o resultado.

const calcularMenorOuMaior = (anoNasc) => {
    if ((2022 - anoNasc) >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}
console.log(calcularMenorOuMaior(2001))