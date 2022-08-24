// 1)      Criar uma função anônima para exibir todos os elementos do array abaixo que possuam idade entre 28 a 30:
// a)       Chamar a função e exibir o resultado no console.

let aprovados = [
    { candidato: "Renata Soares", nota: 7.8, idade: 29 },
    { candidato: "Marcos Teixeira", nota: 7.8, idade: 26 },
    { candidato: "Priscila Gomes", nota: 7.8, idade: 30 },
    { candidato: "João Oliveira", nota: 7.8, idade: 27 },
    { candidato: "Adriana Telles", nota: 7.8, idade: 28 }
];

const retornarCadidatos = () => {
    let retorno = [];
    for (let index = 0; index < aprovados.length; index++) {
        if (aprovados[index].idade >= 28 && aprovados[index].idade <= 30) {
            retorno.push(aprovados[index]);
        }
    }
    return retorno;
}

console.log(retornarCadidatos());

// 2)      Criar um função anônima que recebe uma string como parâmetro:
// a)       Repetir o valor do parâmetro 37 vezes.
// b)      Retornar o Resultado.
// c)       Chamar a função e exibir o resultado no console.

const repetir = (str) => {
    for (let index = 0; index < 37; index++) {
        console.log(str);
    }
}
repetir("Opa, eai?");