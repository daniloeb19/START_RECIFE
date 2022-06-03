//1)      Faça uma função que recebe a idade de uma pessoa em anos, meses e dias e retorna essa idade expressa em dias.
var idadeEmDias = (anos, meses, dias) => {
    return (anos * 365 + meses * 30 + dias);
}

let idadeAno = Number(prompt("Informe sua idade em anos caso 19 anos 3 meses e 23 dias informe 19: "));
let idadeMeses = Number(prompt("Informe sua idade em meses caso 19 anos 3 meses e 23 dias informe 3: "));
let idadeDias = Number(prompt("Informe sua idade em dias caso 19 anos 3 meses e 23 dias informe 23: "));

alert("Sua idade em dias é " + idadeEmDias(idadeAno, idadeMeses, idadeDias) + " dias");
//2)      Faça uma função que conte de 1 a 100 e a cada múltiplo de 7 escreva no console a mensagem: “Múltiplo de 7”.
function multiploDeSete() {
    for (let contador = 1; contador <= 100; contador++) {
        if (contador % 7 == 0) {
            console.log(contador + " é multiplo de 7");
        }
    }
}
multiploDeSete();
//3)      Faça uma função que repita a palavra  arara 230 vezes.

function repetirArara() {
    var contadorArara = 0;
    while (contadorArara < 230) {
        console.log("Arara");
        contadorArara++;
    }
}
repetirArara();