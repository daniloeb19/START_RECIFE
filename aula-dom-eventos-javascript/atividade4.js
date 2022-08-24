function minhaFuncao() {
    var elementos = document.getElementsByTagName("p");
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].innerHTML = "Olá, Seja bem vindo ao mundo JS!";
    }
}