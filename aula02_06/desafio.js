/*
1)O inverno é uma estação maravilhosa, não é? Aquele fiozinho é bom demais. Faça uma função que represente as situações abaixo em que o humor das pessoas é definido de acordo com as tendências climáticas. Com base nas temperaturas dos últimos três dias, as pessoas podem estar tristes ou felizes.
 -Se a temperatura diminuiu do 1º para o 2º dia, mas aumentou ou permaneceu constante do 2º para o 3º , as pessoas ficam felizes (primeira figura).
 
-Se a temperatura aumentou do 1º para o 2º dia, mas diminuiu ou permaneceu constante do 2º para o 3º , as pessoas ficaram tristes (segunda figura).
 
- Se a temperatura aumentou do 1º para o 2º dia e do 2º para o 3º , mas aumentou do 2º para o 3º menos do que aumentou do 1º para o 2º , as pessoas estão triste (terceira figura).
 
 -Se a temperatura aumentou do 1º para o 2º dia e do 2º para o 3º , mas aumentou do 2º para o 3º pelo menos o que aumentou do 1º para o 2º , as pessoas estão felizes (quarta figura).
 
 - Se a temperatura diminuiu do 1º para o 2º dia e do 2º para o 3º , mas diminuiu do 2º para o 3º menos do que diminuiu do 1º para o 2º , as pessoas estão felizes (quinto dígito).
 
 -  Se a temperatura diminuiu do 1º para o 2º dia e do 2º para o 3º , mas diminuiu do 2º para o 3º pelo menos o que havia diminuído do 1º para o 2º , as pessoas estão triste (sexta figura).
 
 - Se a temperatura permanecer constante do 1º ao 2º dia, as pessoas ficam felizes se a temperatura aumentou do 2º para o 3º ou triste caso contrário (respectivamente, sétimo e oitavo dígitos).
*/

var situacaoHumor = (temp1, temp2, temp3) => {
    let feliz = false;
    feliz = (temp2 > temp1) && (temp3 >= temp2) ? true : false;
    feliz = (temp1 < temp2) && (temp3 <= temp2) ? false : true;
    feliz = (temp1 < temp2 < temp3) && (Math.abs((temp3 - temp2)) < Math.abs((temp1 - temp2))) ? false : true;
    feliz = (temp1 < temp2 < temp3) && (Math.abs((temp3 - temp2)) <= Math.abs((temp1 - temp2))) ? true : false;
    feliz = (temp1 > temp2 > temp3) && (Math.abs(temp3 - temp2) < Math.abs(temp1 - temp2)) ? true : false;
    feliz = (temp1 > temp2 > temp3) && (Math.abs(temp2 - temp3) < Math.abs(temp1 - temp2)) ? false : true;
    feliz = (temp1 == temp2) && (temp2 < temp3) ? true : false;
    feliz = (temp1 == temp2) && (temp2 > temp3) ? false : true;
    let retornoHumor = feliz == true ? "felizes" : "tristes";
    return retornoHumor;

}

var dia1 = Number(prompt("Informe a temperatura do 1º dia"));
var dia2 = Number(prompt("Informe a temperatura do 2º dia"));
var dia3 = Number(prompt("Informe a temperatura do 3º dia"));
alert("As pessoas estão " + situacaoHumor(dia1, dia2, dia3));