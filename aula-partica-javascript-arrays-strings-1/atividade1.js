// 1)      Dada as strings abaixo: dominio1 e dominio2.
//  a)       dominio1 = "mundojs"
// b)      dominio2 = "google"
// c)       Concatenar as strings para exibir a mensagem: Olá mundojs! O site www.google.com te ajuda a achar muitos materiais de estudo.
let dominio1 = "mundojs";
let dominio2 = "google";
console.log(`Olá ${dominio1}! O site www.${dominio2}.com te ajuda a achar muitos materiais de estudo`);


// 2)      Dada as strings: valorA e valor B.
//  a)       valorA = "casa"
// b)      valorB = "asa"
// c)       Transformar todas as letras em maiúsculas usando toUpperCase().
// d)      Exibir no console.
// e)      Comparar se a string valorB tem todos os caracteres contidos na string valorB.
// f)        Exibir no console.
let valorA = "casa";
let valorB = "asa";
valorA = valorA.toUpperCase();
valorB = valorB.toUpperCase();
console.log(valorA === valorB);


// 3)      Dada a string valorA = "substring(): Aprenda a utilizar.", utilizando o método substring, exibir no console: Aprenda a utilizar.
valorA = "substring(): Aprenda a utilizar.";
valorA = valorA.substring(13,valorA.length);
console.log(valorA);