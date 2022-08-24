// 1)      Exibir no console o resultado das seguintes validações, dado os valores x = 5 e y = 7:
// a)       Se x for menor que y, mostrar a mensagem: Olá mundo!
// b)      Se x for maior que y, mostrar: Mundo, olá!
// c)       Se x for igual a y, mostrar: Adeus!
let x = 5;
let y = 7;
if (x < y) {
    console.log("Olá mundo!")
} else {
    if (x > y) {
        console.log("Mundo, olá!")
    } else {
        if (x === y) {
            console.log("Adeus!");
        }
    }
}

// 2)      Exibir no console o resultado das seguintes validações,vamos dizer o filme que está passando no cinema de acordo com a fruta, dado o valor de fruta = laranja:
// a)       Se fruta for igual a banana, mostrar: O filme é Os minions.
// b)      Se fruta for igual a laranja, mostrar: O filme é Laranja Mecânica.
// c)       Se fruta for igual a maçã, mostrar: O filme é Branca de neve.
// d)      Se não for nenhum dos valores acima, mostrar: O cinema tá fechado.
let resposta = prompt("Informe uma fruta: banana, laranja ou maça");
switch (resposta) {
    case "banana":
        console.log("O filme é Os minions");
        break;
    case "laranja":
        console.log("O filme é Laranja Mecânica")
        break;
    case "maça":
        console.log("O filme é Branca de neve")
        break;
    default:
        console.log("O cinema tá fechado");
        break;
}