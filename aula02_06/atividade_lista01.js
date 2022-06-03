/*1)O cardápio de uma lanchonete é dado abaixo. Faça uma função que leia a quantidade de cada item que você consumiu e calcule e retorne
 a conta final.
Hambúrguer  3
CheeseBurger 2,50
Fritas 2,50
Refrigerante 1
Milkshake 3,00**/
var contaFinal = (quantHam, quantChee, quantFri, quantRefri, quantMilk) => {
    return ("Valor da conta final foi de " + ((quantHam * 3) + (quantChee * 2.5) + (quantFri * 2.5) + (quantRefri) + (quantMilk * 3)) + " R$");
}
let valHam = Number(prompt("Inform a quantidade de Hambúrguer consumida: "));
let valChee = Number(prompt("Inform a quantidade de ChesseBurger consumida: "));
let valFri = Number(prompt("Inform a quantidade de Fritas consumida: "));
let valRefri = Number(prompt("Inform a quantidade de Refrigerante consumida: "));
let valMilk = Number(prompt("Inform a quantidade de Milkshake consumida: "));
alert(contaFinal(valHam, valChee, valFri, valRefri, valMilk));

//2)Faça uma função que retorne a frase:  Olá, que você tenha um dia muito bom!

function saudacao() {
    return ("Olá, que você tenha um dia muito bom!");
}

alert(saudacao());

//3)Faça uma função que receba uma quantidade de chuva dada em polegadas e imprima o equivalente em milímetros (25,4 mm = 1 polegada).
var converter = (valorPol) => {
    return ((valorPol * 25.4) / 10);
}

let valPol = Number(prompt("Informe a quantidade de chuva dada em polegadas: "))
alert(valPol + " polegadas é equivalente a " + converter(valPol) + " cm");