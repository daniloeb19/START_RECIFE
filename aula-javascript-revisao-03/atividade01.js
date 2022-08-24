// 1)      Crie uma variável chamada “fruta”. Esta variável deve receber uma string com o nome de uma fruta.
// a)       Se a fruta for maçã, retorne no console: “Não vendemos esta fruta aqui”.
// b)      Se for kiwi, retorne: “Estamos com escassez de kiwis”.
// c)       Se for melancia, retorne: “Aqui está, são 3 reais o quilo”.
// d)      Se não for nenhum dos valores, deverá retornar uma mensagem de erro no console: Procure o administrador do sistema!

let fruta = "";

switch (fruta) {
    case "maça":
        console.log("Não vendemos esta fruta aqui");
        break;
    case "kiwi":
        console.log("Estamos com escassez de kiwis");
        break;
    case "melancia":
        console.log("Aqui está, são 3 reais o quilo");
        break;

    default:
        console.log("Procure o administrador do sistema!");
        break;
}


// 2)      As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores. Criar variáveis que tenham o salário do colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
// a)       Salários até R$ 280,00 (incluindo) : aumento de 20%
// b)      Salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
// c)       Salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
// d)      Salários de R$ 1500,00 em diante : aumento de 5%
// Após o aumento ser realizado, informe no console:
//  O salário antes do reajuste;
//  O percentual de aumento aplicado;
//  O valor do aumento;
//  O novo salário, após o aumento.

let salario = 1;
let reajuste = 1;

if (salario < 280) {
    console.log("Salário anterior de " + salario + " R$");
    console.log("Aumento num percentual de 20%");
    reajuste = salario * 0.20;
    console.log("Valor do aumento de " + reajuste + " R$");
    salario +=reajuste;
    console.log("Salário  de " + salario + " R$");
} else {
    if (salario >= 280 && salario < 700) {
        console.log("Salário anterior de " + salario + " R$");
        console.log("Aumento num percentual de 15%");
        reajuste = salario * 0.15;
        console.log("Valor do aumento de " + reajuste + " R$");
        salario +=reajuste;
        console.log("Salário  de " + salario + " R$");
    } else {
        if (salario >= 700 && salario < 1500) {
            console.log("Salário anterior de " + salario + " R$");
            console.log("Aumento num percentual de 10%");
            reajuste = salario * 0.10;
            console.log("Valor do aumento de " + reajuste + " R$");
            salario +=reajuste;
            console.log("Salário  de " + salario + " R$");
        } else {
            if (salario >= 280 && salario < 700) {
                console.log("Salário anterior de " + salario + " R$");
                console.log("Aumento num percentual de 5%");
                reajuste = salario * 0.05;
                console.log("Valor do aumento de " + reajuste + " R$");
                salario +=reajuste;
                console.log("Salário  de " + salario + " R$");
            }
        }
    }
}