/*8 - Ler 3 valores e escrevê-los em ordem crescente.*/
function escreverTresEmOrdemCrescente(a, b, c) {
    var valores = [a, b, c];
    valores.sort((a, b) => a - b);
    return valores.join(", ");
}

var valor1 = Math.floor(Math.random() * 100);
var valor2 = Math.floor(Math.random() * 100);
var valor3 = Math.floor(Math.random() * 100);

var ordemCrescente = escreverTresEmOrdemCrescente(valor1, valor2, valor3);

console.log("Valor 1: " + valor1 + " | Valor 2: " + valor2 + " | Valor 3: " + valor3);
console.log("Valores em ordem crescente:" + ordemCrescente);
