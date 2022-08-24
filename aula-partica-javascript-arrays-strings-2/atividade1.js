// 1)      Calcular a tabuada de multiplicar de 5.

//  a)       Adicionar o resultado de cada cálculo em um array.

// b)      Transformar o array em string.

// c)       Exibir no console.

let tabuada = [];

for (let index = 1; index <= 10; index++) {
   tabuada.push(`${index} * 5 = `+index*5);
}
console.log(tabuada.toString().replaceAll(",","\n"));
// 2)      Utilizar a fórmula abaixo para que converter uma temperatura de Fahrenheit para Celsius:
// (n-32)/1.8 
// a)       n é o valor da temperatura a ser convertida.
// b)      Dado o array  de temperaturas com os valores  54, 78, 56, 98, 0, 12, 11, 37
// c)       Exibir no console cada uma das temperaturas convertidas de Fahrenheit para Celsius.
let temperaturas = [54, 78, 56, 98, 0, 12, 11, 37];
for (let index = 0; index < temperaturas.length; index++) {
    console.log(`${temperaturas[index]} Fahrenheit é ${(temperaturas[index]-32)/1.8} em Celsius\n`);
}