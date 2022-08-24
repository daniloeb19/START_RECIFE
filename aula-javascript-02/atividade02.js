// 1)      Determine o valor lógico para cada uma das expressões a seguir e escreva o resultado no console:
// a.       Dado que x = 5 e y = 8, valide se os valores e os tipos são iguais.
let x = 5;
let y = 8;
console.log(x == y);
// b.       Dado que x = 6 e y = “6”, valide se os valores e os tipos são diferentes.
x = 6;
y = "6";
console.log(x == y);
// c.       Dado que x = “7” e y = 7, valide se os valores são iguais.
x = "7";
y = 7;
console.log(x == y);


// 2)      Declare uma variável chamada nome.
let nome;
// a)       Atribua a ela o valor “Fulano”.

nome = "Fulano"

// b)      Exiba no console a seguinte mensagem: “ Boa noite, Fulano! ”.

console.log("Boa noite, " + nome);


// 3)      Considere x = x + y, dado que x = 10 e y = 5.
x = 10;
y = 5
// a)       Use o operador de atribuição correto que resultará em x = 15 numa expressão reduzida.
x += y;
console.log(x);
x = 10;
y = 5
// b)      Use o operador de atribuição correto que resultará em x = 50 numa expressão reduzida.
x *= y;
console.log(x);
x = 10;
y = 5
// c)       Use o operador de atribuição correto que resultará em x = 0 numa expressão reduzida.
x %= y;
console.log(x);
x = 10;
y = 5
// d)      Use o operador de atribuição correto que resultará em x = 2 numa expressão reduzida.
x /= y;
console.log(x);
x = 10;
y = 5
// e)      Use o operador de atribuição correto que resultará em x = 5 numa expressão reduzida.
x -= y;
console.log(x);
x = 10;
y = 5