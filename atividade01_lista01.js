/*1)Faça uma função que:
a) Receba código da peça
b)Receba valor da peça
c) Receba Quantidade de peças
d)Calcule o valor total da peça (Quantidade * Valor da peça)
e)Escreva no console o código da peça e seu valor total.
*/

var receberProduto =(codProduto,valorPeca,QuantPeca) =>{
var total=(valorPeca*QuantPeca).toString();
total="Produto com código: "+ codProduto+" tem como resultado "+total+" R$"; 
return total;
}
let cod = window.prompt("Informe o código do produto: ");
let unidade = Number(window.prompt("Informe o valor da unidade da peça: "));
let quantidade = Number(window.prompt("Informe a quantidade adquirida: "));

alert(receberProduto(cod,unidade,quantidade));