// 1)      Exibir no console o resultado das seguintes validações, dado o valor da variável sistema_operacional é linux:
let sistema_operacional = prompt("Qual seu sistema operacional?\nInforme: linux, windows, macOS, Chrome OS");
// a)       Se o valor for linux, mostrar: O Linux é um sistema operacional de código aberto.

// b)      Se o valor for windows, mostrar: O Windows é um sistema operacional da empresa Microsoft.

// c)       Se o valor for macOS, mostrar: O macOS é um sistema operacional da empresa Apple.

// d)      Se o valor for Chrome OS, mostrar: O Chrome OS é um sistema operacional da empresa Google.

// e)      Se não for nenhuma das opções acima, mostrar: Há a possibilidade de você estar utilizando um sistema mobile.
switch (sistema_operacional) {
    case "linux":
        console.log("O Linux é um sistema operacional de código aberto")
        break;
    case "windows":
        console.log("O Windows é um sistema operacional da empresa Microsoft")
        break;
    case "macOS":
        console.log("O macOS é um sistema operacional da empresa Apple")
        break;
    case "Chrome OS":
        console.log("O Chrome OS é um sistema operacional da empresa Google")
        break;
    default:
        console.log("Há a possibilidade de você estar utilizando um sistema mobile");
        break;
}
