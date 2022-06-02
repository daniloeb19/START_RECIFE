/*
3)Sabendo que A=5, B=4 e C=3 e D=6, informe se as expressões abaixo são verdadeiras ou falsas.
a)A > C) AND (C <= D)                       
b)A + B) > 10 OR (A + B) == (C + D)                 
c)A >= C) AND (D >= C)                   
d)B > D) AND (A <= C)                     
e)D <= A) OR (C >= B)    
*/

let valA = 5;
let valB = 4;
let valC = 3;
let valD = 6;
var retornarAlternativas = (indice) => {
    let arrayAlt = ["A > C) AND (C <= D)",
        "A + B) > 10 OR (A + B) = (C + D)",
        "A >= C) AND (D >= C)",
        "B > D) AND (A <= C)",
        "D <= A) OR (C >= B)"];
    return arrayAlt[indice];
}
var retornarRespostas = (indiceResp) => {
    let arrayResp = [((valA > valC) && (valC <= valD)) ? true : false,
    (valA + valB) > 10 || (valA + valB) == (valC + valD) ? true : false,
    (valA >= valC) && (valD >= valC) ? true : false,
    ((valB > valD) && (valA <= valC)) ? true : false,
    ((valD <= valA) || (valC >= valB)) ? true : false];
    return arrayResp[indiceResp];
}
for (var cont = 0; cont < 5; cont++) {
    alert(retornarAlternativas(cont) + " = " + retornarRespostas(cont));
}
