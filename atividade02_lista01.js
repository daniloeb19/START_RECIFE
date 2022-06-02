/*
4)Sabendo que A=3, B=7 e C=4, informe se as expressões abaixo são verdadeiras ou falsas.
a)(A + C) > B     
b)B >= (A + 2)   
c)C = (B –A)
d)(B + A) <= C   
e)(C + A) > B    
*/

let valA = 3;
let valB = 7;
let valC = 4;
var retornarAlternativas = (indice) => {
    let arrayAlt = ["a)(A + C) > B",
        "b)B >= (A + 2)",
        "c)C = (B –A)",
        "d)(B + A) <= C",
        "e)(C + A) > B"];
        return arrayAlt[indice];
}
var retornarRespostas = (indiceResp) => {
    let arrayResp = [((valA + valC) > valB) ? true : false,
    (valB >= (valA + 2)) ? true : false,
    (valC = (valB - valA)) ? true : false,
    ((valB + valA) <= valC) ? true : false,
    ((valC + valA) > valB) ? true : false];
        return arrayResp[indiceResp];
}
for(var cont=0;cont<5;cont++){
    alert(retornarAlternativas(cont)+" = "+retornarRespostas(cont));
}
