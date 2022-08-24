function minhaFuncao() {
    var elementos = document.getElementsByTagName("p");
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].innerHTML = elementos[i].innerHTML.toUpperCase();
    }
}
function trocarCor() {
    document.getElementById("titulo").style.color = "blue";
}