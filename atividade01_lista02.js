/*
4)Construa uma função que receba um número.
a)Se positivo mostrar a informação de que ele é positivo.
b)Se for negativo, mostrar a informação de que ele é negativo.
*/

var numeroPOsNeg =(valor) =>{
return (valor>=0?true:false);
}
let numero = Number(prompt("Informe um número: "));
alert(numeroPOsNeg(numero)==true?"Número informado é positivo!":"Número informado é negativo");