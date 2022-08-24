// 1)      Criar uma função anônima para exibir no console um array com os nomes de 5 capitais da região Nordeste do Brasil:
// a)       Transformar todos os elementos em letras maiúsculas.

const retornarCapitais = () => {
    let cidades = ["Recife", "Aracajú", "Fortaleza", "Natal", "João Pessoa"];
    return cidades.toString().toUpperCase().split(",");
}
console.log(retornarCapitais());


// 2)      Criar uma função anônima que retorna os números pares maiores que 100 e menores que 450.
// a)       Chamar a função e exibir no console o retorno da função.

const retornarNumeros = () => {
    for (let index = 101; index < 450; index++) {
        console.log(index);
    }
}
retornarNumeros();

// 3)      Criar uma função anônima que recebe quatro strings:
// a)       Concatenar as strings e retornar o resultado.
// b)      Chamar a função e exibir no console o resultado.

const concatenar = (str1,str2,str3,str4) => {
    return str1 + str2 + str3 + str4;
}
console.log(concatenar("Eu ","sou ","Danilo ","Ferreira"));